import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronLeft, Phone } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { BackToTop } from "./BackToTop";
import { ScrollProgress } from "./ScrollProgress";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { COMPANY, type ServiceSlug } from "@/lib/translations";
import { SERVICE_IMAGES } from "@/lib/service-images";

export function ServiceDetail({ slug }: { slug: ServiceSlug }) {
  const { t } = useI18n();
  const page = t.servicePages[slug];
  const image = SERVICE_IMAGES[slug];

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <section className="relative flex min-h-[70vh] items-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src={image}
              alt={page.title}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/80 to-navy/45" />
          </div>

          <div className="mx-auto w-full max-w-7xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <Link
                to="/#services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
                {t.service.backToServices}
              </Link>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>
              <p className="mt-4 text-lg font-semibold text-primary">
                {page.subtitle}
              </p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                {page.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full px-7 text-base font-bold shadow-red">
                  <Link to="/#contact">
                    {t.service.requestQuote}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                {page.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div className="rounded-3xl border border-border bg-secondary/40 p-8 shadow-soft">
                <h2 className="font-display text-xl font-bold text-navy">
                  {t.service.whatWeOffer}
                </h2>
                <ul className="mt-6 space-y-3">
                  {page.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm font-medium text-foreground/90">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-navy py-16 text-navy-foreground sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              {t.service.ctaTitle}
            </h2>
            <p className="mt-3 text-navy-foreground/70">{t.service.ctaSubtitle}</p>
            <Button asChild size="lg" className="mt-8 rounded-full px-8 text-base font-bold shadow-red">
              <Link to="/#contact">
                {t.service.requestQuote}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
