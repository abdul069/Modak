"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

interface Props {
  items: Testimonial[];
}

export function TestimonialSlider({ items }: Props) {
  const [index, setIndex] = React.useState(0);
  const reduced = useReducedMotion();

  React.useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [items.length, reduced]);

  if (items.length === 0) return null;

  return (
    <div className="relative">
      <Quote className="size-10 text-brand-accent" aria-hidden />
      <div
        className="mt-4 min-h-[180px]"
        aria-live="polite"
        aria-atomic="true"
      >
        <blockquote className="font-display text-2xl leading-snug text-brand-ink md:text-3xl">
          “{items[index].quote}”
        </blockquote>
        <p className="mt-5 text-sm text-brand-ink-soft">
          <span className="font-medium text-brand-ink">
            {items[index].author}
          </span>
          {items[index].role ? ` · ${items[index].role}` : ""}
        </p>
      </div>
      <div className="mt-8 flex items-center gap-3">
        <Button
          size="icon"
          variant="outline"
          onClick={() =>
            setIndex((i) => (i - 1 + items.length) % items.length)
          }
          aria-label="Vorige getuigenis"
        >
          <ChevronLeft className="size-4" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setIndex((i) => (i + 1) % items.length)}
          aria-label="Volgende getuigenis"
        >
          <ChevronRight className="size-4" />
        </Button>
        <ol className="ml-2 flex items-center gap-2" aria-hidden>
          {items.map((_, i) => (
            <li
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-brand-primary" : "w-2 bg-brand-line"
              }`}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

function useReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);
  return reduced;
}
