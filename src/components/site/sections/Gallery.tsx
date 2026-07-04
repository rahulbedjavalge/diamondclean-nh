import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { SectionHeading } from "../SectionHeading";
import { useI18n } from "@/lib/i18n";

const images = [
  { src: g1, alt: "Spotless luxury kitchen cleaned by Diamond Clean NH", span: "" },
  { src: g2, alt: "Professional window cleaning of a modern office building", span: "sm:row-span-2" },
  { src: g3, alt: "Pristine luxury bathroom after a deep clean", span: "" },
  { src: g4, alt: "Immaculate modern living room", span: "sm:row-span-2" },
  { src: g5, alt: "Elegant clean hotel lobby with polished floors", span: "" },
  { src: g6, alt: "Spotless modern staircase and handrail", span: "" },
];

export function Gallery() {
  const { t } = useI18n();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t.gallery.tag}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
        />

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/30" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              key={active}
              src={images[active].src}
              alt={images[active].alt}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-elegant"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
