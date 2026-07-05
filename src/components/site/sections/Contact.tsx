import { motion, type Variants } from "framer-motion";
import { Clock, Mail, MapPin, Phone, User } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { ContactForm } from "../ContactForm";
import { useI18n } from "@/lib/i18n";
import { COMPANY } from "@/lib/translations";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

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

        {/* Info row: contact details · working hours · map — aligned side by side */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Contact details */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-card"
          >
            <h3 className="font-display text-lg font-bold text-navy">
              {c.infoTitle}
            </h3>
            <p className="mt-1 font-display text-sm font-bold text-primary">
              {COMPANY.name}
            </p>
            <ul className="mt-6 space-y-4">
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
          </motion.div>

          {/* Working hours */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-card"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-navy-foreground">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy">
                {c.hoursTitle}
              </h3>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-secondary/60 px-4 py-3">
                <span className="text-sm font-semibold text-navy">{c.hours}</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-secondary/60 px-4 py-3">
                <span className="text-sm text-muted-foreground">{c.weekend}</span>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            variants={item}
            className="flex h-full min-h-[280px] overflow-hidden rounded-3xl border border-border shadow-soft md:col-span-2 lg:col-span-1"
          >
            <iframe
              title="Diamond Clean NH location on the map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                COMPANY.mapsQuery,
              )}&z=15&output=embed`}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-3xl rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
