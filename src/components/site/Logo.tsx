import { Gem } from "lucide-react";
import logo from "@/assets/logo.jpeg.asset.json";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "full",
  className,
}: {
  variant?: "full" | "light";
  className?: string;
}) {
  if (variant === "light") {
    return (
      <span className={cn("flex items-center gap-2", className)}>
        <Gem className="h-7 w-7 text-primary" strokeWidth={2.2} />
        <span className="font-display text-xl font-extrabold tracking-tight text-navy-foreground">
          Diamond Clean
          <span className="ml-1 align-super text-[0.6em] font-bold text-primary">
            NH
          </span>
        </span>
      </span>
    );
  }

  return (
    <img
      src={logo.url}
      alt="Diamond Clean NH — professional cleaning services in Berlin"
      className={cn(
        "h-16 w-auto object-contain sm:h-20 lg:h-24",
        className,
      )}
      width={360}
      height={96}
      loading="eager"
      decoding="async"
    />
  );

}
