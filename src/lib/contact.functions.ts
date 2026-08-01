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
    await sendFormspreeLead({
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      service: data.service || "",
      message: data.message,
    });

    return { ok: true } as const;
  });
