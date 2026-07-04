import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
  invert = false,
}: {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {tag && (
        <Reveal>
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest",
              invert
                ? "bg-white/10 text-navy-foreground"
                : "bg-primary/10 text-primary",
            )}
          >
            {tag}
          </span>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2
          className={cn(
            "mt-4 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]",
            invert ? "text-navy-foreground" : "text-navy",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={2}>
          <p
            className={cn(
              "mt-4 text-base leading-relaxed sm:text-lg",
              invert ? "text-navy-foreground/70" : "text-muted-foreground",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
