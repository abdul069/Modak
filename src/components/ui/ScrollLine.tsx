"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ScrollLineProps {
  /** "vertical" or "horizontal". Default vertical. */
  orientation?: "vertical" | "horizontal";
  className?: string;
  /** Thickness in px. */
  thickness?: number;
  /** Color CSS value */
  color?: string;
}

/**
 * Thin line that draws itself in (scaleY 0→1 or scaleX 0→1) when it enters
 * the viewport. Used as section divider or process-step connector.
 */
export function ScrollLine({
  orientation = "vertical",
  className,
  thickness = 1,
  color = "var(--color-clay)",
}: ScrollLineProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const transformOrigin = orientation === "vertical" ? "top" : "left";
  const scaleProp = orientation === "vertical" ? "scaleY" : "scaleX";

  return (
    <span
      ref={ref}
      aria-hidden
      className={cn("block", className)}
      style={{
        backgroundColor: color,
        [orientation === "vertical" ? "width" : "height"]: `${thickness}px`,
        transformOrigin,
        transform: visible ? `${scaleProp}(1)` : `${scaleProp}(0)`,
        transition: "transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    />
  );
}
