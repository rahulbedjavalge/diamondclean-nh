import { CheckCircle2, Leaf, ShieldCheck, Users } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import { Reveal } from "../Reveal";
import { AnimatedCounter } from "../AnimatedCounter";
import { SectionHeading } from "../SectionHeading";
import { useI18n } from "@/lib/i18n";

const icons = [Users, ShieldCheck, Leaf, CheckCircle2];

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={aboutImg}
                alt="The professional Diamond Clean NH cleaning team in Berlin"
                className="h-full w-full object-cover"
                width={1280}
                height={1280}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-3 hidden rounded-2xl bg-navy px-6 py-4 text-navy-foreground shadow-elegant sm:block lg:-right-6">
              <div className="font-display text-3xl font-extrabold">
                <AnimatedCounter value={10} suffix="+" />
              </div>
              <div className="text-xs uppercase tracking-wide text-navy-foreground/70">
                {t.about.counters[1].label}
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading tag={t.about.tag} title={t.about.title} align="left" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <Reveal delay={1}>
                <p>{t.about.p1}</p>
              </Reveal>
              <Reveal delay={2}>
                <p>{t.about.p2}</p>
              </Reveal>
              <Reveal delay={3}>
                <p>{t.about.p3}</p>
              </Reveal>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {t.about.points.map((point, i) => {
                const Icon = icons[i];
                return (
                  <Reveal key={point.title} delay={i} className="h-full">
                    <div className="flex h-full gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft transition-shadow hover:shadow-card">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5.5 w-5.5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-sm font-bold text-navy">
                          {point.title}
                        </h3>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 rounded-3xl border border-border bg-secondary/50 p-8 sm:grid-cols-2 lg:grid-cols-4 lg:p-12">
          {t.about.counters.map((c, i) => (
            <Reveal key={c.label} delay={i} className="text-center">
              <div className="font-display text-4xl font-extrabold text-primary sm:text-5xl">
                <AnimatedCounter value={c.value} suffix={c.suffix} />
              </div>
              <div className="mt-2 text-sm font-semibold text-muted-foreground">
                {c.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
