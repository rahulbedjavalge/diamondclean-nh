import { PhoneCall, ClipboardList, CalendarCheck, Sparkles } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { useI18n } from "@/lib/i18n";

const icons = [PhoneCall, ClipboardList, CalendarCheck, Sparkles];

export function Process() {
  const { t } = useI18n();

  return (
    <section id="process" className="scroll-mt-24 bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t.process.tag}
          title={t.process.title}
          subtitle={t.process.subtitle}
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={step.title} delay={i} className="relative text-center">
                  <div className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-navy text-navy-foreground shadow-elegant">
                    <Icon className="h-7 w-7" />
                    <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-primary text-xs font-extrabold text-primary-foreground shadow-red">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
