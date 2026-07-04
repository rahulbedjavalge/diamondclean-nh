import { motion } from "framer-motion";
import {
  AppWindow,
  BedDouble,
  Building2,
  Footprints,
  Home,
  KeyRound,
  Sparkles as SparklesIcon,
  Store,
  Truck,
  UtensilsCrossed,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { useI18n } from "@/lib/i18n";

const icons = [
  Building2,
  Store,
  Home,
  Truck,
  SparklesIcon,
  AppWindow,
  Footprints,
  UtensilsCrossed,
  BedDouble,
  KeyRound,
];

export function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="scroll-mt-24 bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t.services.tag}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.a
                key={s.title}
                href="#contact"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 5) * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-muted-foreground/40 transition-all duration-300 group-hover:right-4 group-hover:text-primary" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
