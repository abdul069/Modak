"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MagneticProps {
  children: React.ReactNode;
  /** Max translation in pixels. */
  strength?: number;
  className?: string;
}

/**
 * Wraps an interactive child and pulls it toward the cursor on hover.
 * Disabled on touch / reduced-motion.
 */
export function MagneticButton({
  children,
  strength = 14,
  className,
}: MagneticProps) {
  const wrapRef = React.useRef<HTMLSpanElement>(null);
  const innerRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const nx = Math.max(-1, Math.min(1, x / (rect.width / 2)));
      const ny = Math.max(-1, Math.min(1, y / (rect.height / 2)));
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        inner.style.transform = `translate3d(${(nx * strength).toFixed(2)}px, ${(ny * strength).toFixed(2)}px, 0)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        inner.style.transform = "translate3d(0,0,0)";
      });
    };

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    return () => {
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <span
      ref={wrapRef}
      className={cn("relative inline-flex", className)}
    >
      <span
        ref={innerRef}
        className="inline-flex transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: "translate3d(0,0,0)" }}
      >
        {children}
      </span>
    </span>
  );
}
