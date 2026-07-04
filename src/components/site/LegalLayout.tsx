import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { useI18n } from "@/lib/i18n";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const { t } = useI18n();

  return (
    <div className="bg-background pt-28">
      <div className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.legal.backHome}
        </Link>

        <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-navy">
          {title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t.legal.lastUpdated}: {new Date().toLocaleDateString()}
        </p>

        <div className="prose-legal mt-10 space-y-8 text-sm leading-relaxed text-foreground/80 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-navy [&_p]:mt-2">
          {children}
        </div>
      </div>
    </div>
  );
}
