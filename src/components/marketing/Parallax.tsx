"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: React.ReactNode;
  /** Translate range in pixels (positive = slower than scroll). */
  range?: number;
  className?: string;
}

/**
 * Translate children on Y based on element position in viewport.
 * Skips work when prefers-reduced-motion is set.
 */
export function Parallax({ children, range = 80, className }: ParallaxProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const innerRef = React.useRef<HTMLDivElement>(null);
  const rafRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const node = ref.current;
    const inner = innerRef.current;
    if (!node || !inner) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // progress: 0 when element bottom hits top of viewport, 1 when element top hits bottom
      const progress = 1 - (rect.top + rect.height / 2) / (vh + rect.height / 2);
      const clamped = Math.max(-0.5, Math.min(1.5, progress));
      const y = (clamped - 0.5) * range * -1;
      inner.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [range]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div
        ref={innerRef}
        className="h-full w-full will-change-transform"
        style={{ transform: "translate3d(0,0,0)" }}
      >
        {children}
      </div>
    </div>
  );
}
