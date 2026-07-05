import { motion } from "framer-motion";
import { ArrowRight, Phone, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Sparkles } from "../Sparkles";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { COMPANY } from "@/lib/translations";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative flex min-h-dvh items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Luxury Berlin office being professionally cleaned by Diamond Clean NH"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/78 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/30" />
      </div>

      <Sparkles />

      <div className="mx-auto w-full max-w-7xl px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md"
          >
            <span className="flex gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </span>
            {t.hero.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-lg font-semibold text-primary"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-3 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="rounded-full px-7 text-base font-bold shadow-red">
              <a href="#contact">
                {t.hero.quote}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 bg-white/10 px-7 text-base font-bold text-white backdrop-blur-md hover:bg-white/20 hover:text-white"
            >
              <a href={`tel:${COMPANY.phoneHref}`}>
                <Phone className="h-4 w-4" />
                {t.hero.call}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>


      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
