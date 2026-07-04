import { Clock, Mail, MapPin, Phone, User } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { ContactForm } from "../ContactForm";
import { useI18n } from "@/lib/i18n";
import { COMPANY } from "@/lib/translations";

export function Contact() {
  const { t } = useI18n();
  const c = t.contact;

  const details = [
    { icon: User, label: c.owner, value: COMPANY.owner },
    {
      icon: MapPin,
      label: c.address,
      value: `${COMPANY.addressLine1}, ${COMPANY.addressLine2}`,
    },
    { icon: Phone, label: c.phone, value: COMPANY.phone, href: `tel:${COMPANY.phoneHref}` },
    { icon: Mail, label: c.email, value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  ];

  return (
    <section id="contact" className="scroll-mt-24 bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading tag={c.tag} title={c.title} subtitle={c.subtitle} />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <h3 className="font-display text-lg font-bold text-navy">
                  {c.infoTitle}
                </h3>
                <p className="mt-1 font-display text-sm font-bold text-primary">
                  {COMPANY.name}
                </p>
                <ul className="mt-5 space-y-4">
                  {details.map((d) => (
                    <li key={d.label} className="flex gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                        <d.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs uppercase tracking-wide text-muted-foreground">
                          {d.label}
                        </div>
                        {d.href ? (
                          <a
                            href={d.href}
                            className="break-words font-semibold text-navy transition-colors hover:text-primary"
                          >
                            {d.value}
                          </a>
                        ) : (
                          <div className="break-words font-semibold text-navy">
                            {d.value}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-navy-foreground">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy">
                    {c.hoursTitle}
                  </h3>
                </div>
                <p className="mt-4 font-semibold text-navy">{c.hours}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.weekend}</p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
                <iframe
                  title="Diamond Clean NH location on the map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    COMPANY.mapsQuery,
                  )}&z=15&output=embed`}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
