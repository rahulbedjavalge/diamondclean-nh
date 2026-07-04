import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";
import { useI18n } from "@/lib/i18n";
import { COMPANY } from "@/lib/translations";

export const Route = createFileRoute("/imprint")({
  head: () => ({
    meta: [
      { title: "Imprint — Diamond Clean NH" },
      {
        name: "description",
        content: "Legal disclosure (Impressum) for Diamond Clean NH, Berlin.",
      },
      { property: "og:title", content: "Imprint — Diamond Clean NH" },
      { property: "og:url", content: "/imprint" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/imprint" }],
  }),
  component: ImprintPage,
});

function ImprintPage() {
  const { t, lang } = useI18n();

  return (
    <LegalLayout title={t.legal.imprintTitle}>
      <section>
        <h2>{lang === "de" ? "Angaben gemäß § 5 TMG" : "Company Information"}</h2>
        <p>
          {COMPANY.name}
          <br />
          {COMPANY.owner}
          <br />
          {COMPANY.addressLine1}
          <br />
          {COMPANY.addressLine2}
          <br />
          {lang === "de" ? "Deutschland" : "Germany"}
        </p>
      </section>

      <section>
        <h2>{lang === "de" ? "Kontakt" : "Contact"}</h2>
        <p>
          {t.contact.phone}: {COMPANY.phone}
          <br />
          {t.contact.email}: {COMPANY.email}
        </p>
      </section>

      <section>
        <h2>
          {lang === "de"
            ? "Verantwortlich für den Inhalt"
            : "Responsible for content"}
        </h2>
        <p>
          {COMPANY.owner}, {COMPANY.addressLine1}, {COMPANY.addressLine2}
        </p>
      </section>

      <section>
        <h2>{lang === "de" ? "Haftungsausschluss" : "Disclaimer"}</h2>
        <p>
          {lang === "de"
            ? "Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Bitte ersetzen Sie diesen Platzhaltertext durch Ihre vollständigen rechtlichen Angaben."
            : "The content of this website has been created with the greatest care. However, no guarantee can be given for the accuracy, completeness or timeliness of the content. Please replace this placeholder text with your complete legal information."}
        </p>
      </section>
    </LegalLayout>
  );
}
