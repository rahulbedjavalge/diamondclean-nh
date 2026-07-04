import { useEffect, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { useI18n } from "@/lib/i18n";
import { SERVICE_SLUGS } from "@/lib/translations";
import { SERVICE_PATHS } from "@/lib/service-images";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "about", label: t.nav.about },
    { id: "why", label: t.nav.why },
    { id: "process", label: t.nav.process },
    { id: "contact", label: t.nav.contact },
  ];

  const serviceLinks = SERVICE_SLUGS.map((slug, i) => ({
    slug,
    to: SERVICE_PATHS[slug],
    label: t.services.items[i].title,
  }));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-background/95 backdrop-blur-xl transition-all duration-300",
        scrolled
          ? "border-border/70 py-2 shadow-soft"
          : "border-border/40 py-3 shadow-sm",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Diamond Clean NH home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <a
            href="/#about"
            className="rounded-full px-3.5 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
          >
            {t.nav.about}
          </a>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a
              href="/#services"
              className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
            >
              {t.nav.services}
              <ChevronDown className="h-3.5 w-3.5" />
            </a>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full w-64 pt-2"
                >
                  <div className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-card">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.slug}
                        to={s.to}
                        className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                        activeProps={{ className: "bg-secondary text-primary" }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {links.slice(1).map((l) => (
            <a
              key={l.id}
              href={`/#${l.id}`}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle className="hidden sm:inline-flex" />
          <Button asChild size="lg" className="hidden rounded-full font-bold shadow-red sm:inline-flex">
            <a href="/#contact">{t.nav.quote}</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] gap-0 overflow-y-auto">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex items-center justify-between px-4 pt-2">
                <Logo />
              </div>
              <div className="mt-6 flex flex-col gap-1 px-3">
                <SheetClose asChild>
                  <a
                    href="/#about"
                    className="rounded-xl px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
                  >
                    {t.nav.about}
                  </a>
                </SheetClose>

                <button
                  type="button"
                  onClick={() => setMobileServices((v) => !v)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  {t.nav.services}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      mobileServices && "rotate-180",
                    )}
                  />
                </button>
                {mobileServices && (
                  <div className="flex flex-col gap-1 pl-3">
                    {serviceLinks.map((s) => (
                      <SheetClose asChild key={s.slug}>
                        <Link
                          to={s.to}
                          className="rounded-xl px-4 py-2.5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                        >
                          {s.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                )}

                {links.slice(1).map((l) => (
                  <SheetClose asChild key={l.id}>
                    <a
                      href={`/#${l.id}`}
                      className="rounded-xl px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
                    >
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-4 px-4">
                <LanguageToggle />
                <SheetClose asChild>
                  <Button asChild size="lg" className="w-full rounded-full font-bold">
                    <a href="/#contact">{t.nav.quote}</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
