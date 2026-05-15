"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface RevealZoomProps {
  children: React.ReactNode;
  /** Threshold for IntersectionObserver. */
  threshold?: number;
  /** ms before triggering after intersect. */
  delay?: number;
  className?: string;
}

/**
 * Photo-style reveal: scales from 1.12 → 1 + fades in, triggered when element
 * enters the viewport. Used to give a "tifre-style" feeling where photos pop
 * forward as you scroll. Disabled under prefers-reduced-motion.
 */
export function RevealZoom({
  children,
  threshold = 0.18,
  delay = 0,
  className,
}: RevealZoomProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        visible
          ? "opacity-100 [transform:scale(1)_translate3d(0,0,0)]"
          : "opacity-0 [transform:scale(1.12)_translate3d(0,18px,0)]",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
