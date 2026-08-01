import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(2000),
  lang: z.enum(["en", "de"]).optional(),
});

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdnljwe";
const NOTIFY_EMAIL = "diamondclean.nh@gmail.com";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function toBase64Url(input: string): string {
  const bytes = new TextEncoder().encode(input);
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  const base64 =
    typeof btoa !== "undefined"
      ? btoa(binary)
      : Buffer.from(bytes).toString("base64");
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function sendLeadEmail(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
  const GOOGLE_MAIL_API_KEY = process.env.GOOGLE_MAIL_API_KEY;

  if (!LOVABLE_API_KEY || !GOOGLE_MAIL_API_KEY) {
    console.error("[sendLeadEmail] Missing Gmail connector credentials");
    return;
  }

  const subject = `New contact form lead: ${data.name}`;
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#0f172a;line-height:1.6">
      <h2 style="margin:0 0 12px">New contact form submission</h2>
      <table style="border-collapse:collapse">
        <tr><td style="padding:4px 12px 4px 0;color:#64748b">Name</td><td style="padding:4px 0"><strong>${escapeHtml(data.name)}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b">Email</td><td style="padding:4px 0"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b">Phone</td><td style="padding:4px 0">${escapeHtml(data.phone || "-")}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b">Service</td><td style="padding:4px 0">${escapeHtml(data.service || "-")}</td></tr>
      </table>
      <p style="margin:16px 0 4px;color:#64748b">Message</p>
      <div style="padding:12px 16px;background:#f1f5f9;border-radius:8px;white-space:pre-wrap">${escapeHtml(data.message)}</div>
    </div>`;

  // Build a raw RFC 2822 message. Reply-To set to the lead so replies reach them.
  const rawMessage = [
    `To: ${NOTIFY_EMAIL}`,
    `Reply-To: ${data.name} <${data.email}>`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    'Content-Type: text/html; charset="UTF-8"',
    "",
    html,
  ].join("\r\n");

  try {
    const res = await fetch(
      "https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "X-Connection-Api-Key": GOOGLE_MAIL_API_KEY,
        },
        body: JSON.stringify({ raw: toBase64Url(rawMessage) }),
      },
    );

    if (!res.ok) {
      const text = await res.text();
      console.error(
        `[sendLeadEmail] Gmail send failed: ${res.status} ${text}`,
      );
    }
  } catch (err) {
    console.error("[sendLeadEmail] Gmail send threw:", err);
  }
}

async function sendFormspreeLead(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  const formData = new URLSearchParams();
  formData.set("name", data.name);
  formData.set("email", data.email);
  formData.set("phone", data.phone || "-");
  formData.set("service", data.service || "-");
  formData.set("message", data.message);
  formData.set("_replyto", data.email);
  formData.set("_subject", `New enquiry from ${data.name}`);

  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Formspree send failed: ${res.status} ${text}`);
  }
}

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import(
      "@/integrations/supabase/client.server"
    );

    const { error } = await supabaseAdmin.from("leads").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      service: data.service || null,
      message: data.message,
    });

    if (error) {
      console.error("[submitContact] insert failed:", error.message);
      throw new Error("Failed to save request");
    }

    try {
      await sendFormspreeLead({
        name: data.name,
        email: data.email,
        phone: data.phone || "",
        service: data.service || "",
        message: data.message,
      });
    } catch (error) {
      console.error("[submitContact] Formspree send failed:", error);

      // Keep the existing inbox fallback so enquiries still reach the business.
      await sendLeadEmail({
        name: data.name,
        email: data.email,
        phone: data.phone || "",
        service: data.service || "",
        message: data.message,
      });
    }

    return { ok: true } as const;
  });
