import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { translations } from "@/lib/translations";

const page = translations.en.servicePages.staffing;

export const Route = createFileRoute("/services/staffing")({
  head: () => ({
    meta: [
      { title: page.metaTitle },
      { name: "description", content: page.metaDescription },
      { property: "og:title", content: page.metaTitle },
      { property: "og:description", content: page.metaDescription },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => <ServiceDetail slug="staffing" />,
});
