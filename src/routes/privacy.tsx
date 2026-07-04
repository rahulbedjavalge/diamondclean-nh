import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";
import { useI18n } from "@/lib/i18n";
import { COMPANY } from "@/lib/translations";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Diamond Clean NH" },
      {
        name: "description",
        content:
          "How Diamond Clean NH collects, uses and protects your personal data.",
      },
      { property: "og:title", content: "Privacy Policy — Diamond Clean NH" },
      { property: "og:url", content: "/privacy" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { t, lang } = useI18n();
  const de = lang === "de";

  return (
    <LegalLayout title={t.legal.privacyTitle}>
      <p>
        {de
          ? "Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung informiert Sie darüber, wie Diamond Clean NH Ihre Daten erhebt, verwendet und schützt. Dies ist ein Platzhaltertext – bitte ersetzen Sie ihn durch Ihre rechtsgültige Datenschutzerklärung."
          : "Your privacy matters to us. This policy explains how Diamond Clean NH collects, uses and protects your data. This is placeholder text — please replace it with your legally binding privacy policy."}
      </p>

      <section>
        <h2>{de ? "Welche Daten wir erheben" : "Data we collect"}</h2>
        <p>
          {de
            ? "Wenn Sie unser Kontaktformular nutzen, erheben wir Ihren Namen, Ihre E-Mail-Adresse, optional Ihre Telefonnummer und Ihre Nachricht, um Ihre Anfrage zu bearbeiten."
            : "When you use our contact form, we collect your name, email address, optional phone number and message in order to respond to your request."}
        </p>
      </section>

      <section>
        <h2>{de ? "Wie wir Ihre Daten nutzen" : "How we use your data"}</h2>
        <p>
          {de
            ? "Wir verwenden Ihre Daten ausschließlich, um Ihre Anfrage zu beantworten und unsere Dienstleistungen bereitzustellen. Wir geben Ihre Daten nicht an Dritte weiter."
            : "We use your data solely to respond to your enquiry and provide our services. We do not sell or share your data with third parties."}
        </p>
      </section>

      <section>
        <h2>{de ? "Ihre Rechte" : "Your rights"}</h2>
        <p>
          {de
            ? "Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer gespeicherten Daten. Kontaktieren Sie uns hierzu jederzeit."
            : "You have the right to access, correct and delete the personal data we hold about you. Contact us at any time to exercise these rights."}
        </p>
      </section>

      <section>
        <h2>{de ? "Kontakt" : "Contact"}</h2>
        <p>
          {COMPANY.name}
          <br />
          {COMPANY.email}
          <br />
          {COMPANY.phone}
        </p>
      </section>
    </LegalLayout>
  );
}
