"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ScrollMarqueeProps {
  words: string[];
  /** Speed multiplier; higher = faster horizontal shift per scroll px. */
  speed?: number;
  className?: string;
  /** Visual variant. */
  variant?: "dark" | "accent" | "light";
}

/**
 * Big editorial title that shifts horizontally based on page scroll.
 * Anno-2026 pattern — bold caps, infinite loop content, parallax-on-scroll.
 */
export function ScrollMarquee({
  words,
  speed = 0.4,
  className,
  variant = "dark",
}: ScrollMarqueeProps) {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let ticking = false;
    const update = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const center = rect.top + rect.height / 2;
      const offset = (vh / 2 - center) * speed;
      track.style.transform = `translate3d(${offset.toFixed(2)}px, 0, 0)`;
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  const variantClass =
    variant === "accent"
      ? "section-accent"
      : variant === "light"
        ? "bg-brand-bg-alt text-brand-ink"
        : "section-dark";

  const dotClass =
    variant === "accent"
      ? "text-brand-bg-dark/60"
      : variant === "light"
        ? "text-brand-primary/50"
        : "text-brand-accent/70";

  // Duplicate enough to fill width even on wide screens
  const sequence = [...words, ...words, ...words, ...words];

  return (
    <section
      ref={sectionRef}
      className={cn("overflow-hidden py-14 md:py-20", variantClass, className)}
      aria-hidden
    >
      <div
        ref={trackRef}
        className="flex w-max items-center gap-10 whitespace-nowrap will-change-transform"
        style={{ transform: "translate3d(0,0,0)" }}
      >
        {sequence.map((w, i) => (
          <React.Fragment key={`${w}-${i}`}>
            <span className="font-display text-5xl uppercase leading-none tracking-tight md:text-7xl lg:text-8xl">
              {w}
            </span>
            <span className={cn("text-5xl leading-none md:text-7xl lg:text-8xl", dotClass)}>
              •
            </span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
