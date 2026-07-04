import {
  BadgeCheck,
  CalendarClock,
  Gauge,
  HandCoins,
  Leaf,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { useI18n } from "@/lib/i18n";

const icons = [
  BadgeCheck,
  CalendarClock,
  HandCoins,
  Leaf,
  ShieldCheck,
  Wrench,
  Search,
  Gauge,
];

export function WhyChooseUs() {
  const { t } = useI18n();

  return (
    <section id="why" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t.why.tag}
          title={t.why.title}
          subtitle={t.why.subtitle}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item} delay={i % 4} className="h-full">
                <div className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-card">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-navy-foreground transition-colors group-hover:bg-primary">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <span className="font-display text-sm font-bold leading-tight text-navy">
                    {item}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
