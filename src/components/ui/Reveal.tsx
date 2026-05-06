"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  /** Animation delay in ms */
  delay?: number;
  /** Direction of the reveal */
  direction?: "up" | "left" | "right" | "scale" | "none";
  /** Tailwind className passthrough */
  className?: string;
  /** When true, only triggers once (default true) */
  once?: boolean;
  /** Visible threshold (0-1) */
  threshold?: number;
}

const directionMap: Record<NonNullable<RevealProps["direction"]>, string> = {
  up: "translate-y-4",
  left: "-translate-x-4",
  right: "translate-x-4",
  scale: "scale-[0.97]",
  none: "",
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  once = true,
  threshold = 0.08,
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once, threshold]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        visible
          ? "translate-y-0 translate-x-0 scale-100 opacity-100"
          : `${directionMap[direction]} opacity-0`,
        className
      )}
    >
      {children}
    </div>
  );
}
