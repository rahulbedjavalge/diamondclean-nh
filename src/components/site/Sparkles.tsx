import { useMemo } from "react";
import { motion } from "framer-motion";

interface Sparkle {
  left: number;
  size: number;
  delay: number;
  duration: number;
  bottom: number;
}

export function Sparkles({ count = 18 }: { count?: number }) {
  const sparkles = useMemo<Sparkle[]>(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        size: 4 + Math.random() * 8,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 6,
        bottom: Math.random() * 30,
      })),
    [count],
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {sparkles.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/70 shadow-[0_0_12px_2px_rgba(255,255,255,0.55)] animate-float-sparkle"
          style={{
            left: `${s.left}%`,
            bottom: `${s.bottom}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
      {/* Elegant twinkle accents */}
      {sparkles.slice(0, 6).map((s, i) => (
        <motion.span
          key={`t-${i}`}
          className="absolute text-white/80"
          style={{ left: `${(s.left + 40) % 100}%`, top: `${10 + i * 12}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{
            duration: 3,
            delay: s.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          ✦
        </motion.span>
      ))}
    </div>
  );
}
