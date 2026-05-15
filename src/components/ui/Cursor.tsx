"use client";

import * as React from "react";

/**
 * Custom cursor: a small bone-colored ring that follows the pointer.
 * Scales up when hovering on interactive elements and shows a label
 * on elements with `data-cursor` attribute (e.g. "Bekijk").
 *
 * Disabled on touch devices and when prefers-reduced-motion is set.
 */
export function Cursor() {
  const dotRef = React.useRef<HTMLDivElement>(null);
  const labelRef = React.useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setMounted(true);
    document.body.classList.add("custom-cursor-active");

    const dot = dotRef.current;
    const label = labelRef.current;
    if (!dot) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;

    const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

    const update = () => {
      tx = lerp(tx, x, 0.22);
      ty = lerp(ty, y, 0.22);
      dot.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    // Hover detection: scale + label
    const interactiveSelector =
      'a, button, [role="button"], input, textarea, label, [data-cursor]';

    const onEnter = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(interactiveSelector) as HTMLElement | null;
      if (!interactive) return;
      dot.dataset.hover = "true";
      const labelText = interactive.dataset.cursor;
      if (labelText && label) {
        label.textContent = labelText;
        dot.dataset.label = "true";
      }
    };
    const onLeave = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(interactiveSelector) as HTMLElement | null;
      if (!interactive) return;
      dot.dataset.hover = "false";
      dot.dataset.label = "false";
      if (label) label.textContent = "";
    };
    document.addEventListener("pointerover", onEnter, true);
    document.addEventListener("pointerout", onLeave, true);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onEnter, true);
      document.removeEventListener("pointerout", onLeave, true);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center transition-[width,height,background-color,border-color] duration-200"
      style={{
        width: 24,
        height: 24,
        borderRadius: 9999,
        border: "1.5px solid var(--color-charcoal)",
        backgroundColor: "transparent",
        mixBlendMode: "difference",
      }}
      data-hover="false"
      data-label="false"
    >
      <span
        ref={labelRef}
        className="absolute whitespace-nowrap font-mono text-[0.55rem] uppercase tracking-[0.18em] text-bone opacity-0 transition-opacity duration-200"
        style={{ left: "50%", top: "150%", transform: "translateX(-50%)" }}
      />
      <style jsx>{`
        div[data-hover="true"] {
          width: 56px;
          height: 56px;
          background-color: var(--color-bone);
          border-color: var(--color-bone);
        }
        div[data-label="true"] span {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
