import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { useI18n } from "@/lib/i18n";
import { SERVICE_SLUGS } from "@/lib/translations";
import { SERVICE_IMAGES, SERVICE_PATHS } from "@/lib/service-images";

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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((s, i) => {
            const slug = SERVICE_SLUGS[i];
            return (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={SERVICE_PATHS[slug]}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-card"
                >

                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={SERVICE_IMAGES[slug]}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold text-navy">
                      {s.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                      {t.services.learnMore}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
