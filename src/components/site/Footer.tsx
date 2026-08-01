import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/diamond-clean-logo.jpeg";
import { useI18n } from "@/lib/i18n";
import { COMPANY } from "@/lib/translations";


export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const quickLinks = [
    { id: "services", label: t.nav.services },
    { id: "about", label: t.nav.about },
    { id: "process", label: t.nav.process },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="inline-flex items-center rounded-2xl bg-white p-3 shadow-elegant">
              <img
                src={logo}
                alt="Diamond Clean NH"
                className="h-20 w-auto object-contain"
                width={260}
                height={80}
              />
            </span>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-navy-foreground transition-colors hover:bg-primary"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-navy-foreground/60">
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`/#${l.id}`}
                    className="text-navy-foreground/80 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy"
                  className="text-navy-foreground/80 transition-colors hover:text-primary"
                >
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  to="/imprint"
                  className="text-navy-foreground/80 transition-colors hover:text-primary"
                >
                  {t.footer.imprint}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-navy-foreground/60">
              {t.nav.contact}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                <span>
                  {COMPANY.addressLine1}
                  <br />
                  {COMPANY.addressLine2}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phoneHref}`}
                  className="flex gap-3 transition-colors hover:text-primary"
                >
                  <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex gap-3 break-all transition-colors hover:text-primary"
                >
                  <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-navy-foreground/60 sm:flex-row sm:text-left">
          <p>
            © {year} {COMPANY.name}. {t.footer.rights}
          </p>
          <p>{COMPANY.owner}</p>
        </div>
      </div>
    </footer>
  );
}
