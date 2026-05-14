import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MagneticButton } from "./MagneticButton";

export interface HeroSplitProps {
  photoUrl: string;
  photoAlt?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  caption?: string;
  className?: string;
}

/**
 * Type-first hero with a framed photo card on the side.
 * Designed to keep WhatsApp-quality photos in a contained frame rather
 * than full-bleed, where pixel-level imperfections become obvious.
 */
export function HeroSplit({
  photoUrl,
  photoAlt = "",
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  caption,
  className,
}: HeroSplitProps) {
  return (
    <section
      className={cn(
        "section-dark relative overflow-hidden",
        "md:min-h-[88vh] lg:min-h-[92vh]",
        className
      )}
    >
      {/* Animated background mesh */}
      <div
        aria-hidden
        className="bg-mesh-hero animate-mesh absolute inset-0 opacity-60"
      />
      {/* Grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="container-page relative grid items-center gap-8 pb-20 pt-28 md:grid-cols-12 md:gap-12 md:pb-28 md:pt-36 lg:gap-16 lg:py-32">
        {/* Text panel */}
        <div className="md:col-span-7">
          {eyebrow ? (
            <p
              className="animate-fade-up text-[0.7rem] font-medium uppercase tracking-[0.4em] text-brand-accent md:text-xs"
              style={{ animationDelay: "60ms" }}
            >
              {eyebrow}
            </p>
          ) : null}
          <h1
            className="animate-fade-up mt-5 font-display uppercase leading-[0.92] text-white"
            style={{
              animationDelay: "180ms",
              fontSize: "clamp(2.6rem, 7vw, 6.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>
          {subtitle ? (
            <p
              className="animate-fade-up mt-8 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
              style={{ animationDelay: "320ms" }}
            >
              {subtitle}
            </p>
          ) : null}

          {(primaryCta || secondaryCta) && (
            <div
              className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "460ms" }}
            >
              {primaryCta ? (
                <MagneticButton>
                  <Button asChild size="lg" variant="accent" className="group/btn">
                    <Link href={primaryCta.href}>
                      {primaryCta.label}
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </MagneticButton>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="group/sec inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-white"
                >
                  {secondaryCta.label}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover/sec:translate-x-1" />
                </Link>
              ) : null}
            </div>
          )}
        </div>

        {/* Framed photo card */}
        <div className="relative md:col-span-5">
          <div
            className="animate-fade-up relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-md shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/10 md:ml-auto md:mr-0"
            style={{ animationDelay: "320ms" }}
          >
            <div className="absolute inset-0 -m-[6%]">
              <Image
                src={photoUrl}
                alt={photoAlt}
                fill
                priority
                sizes="(min-width: 1024px) 460px, 90vw"
                className="animate-ken-burns photo-graded object-cover"
              />
            </div>
            {/* corner accent */}
            <div
              aria-hidden
              className="absolute right-4 top-4 size-2 rounded-full bg-brand-accent shadow-[0_0_0_4px_rgba(201,169,97,0.18)]"
            />
            {caption ? (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-white/85">
                  {caption}
                </p>
              </div>
            ) : null}
          </div>
          {/* floating index label, decorative */}
          <div
            aria-hidden
            className="absolute -left-2 top-6 hidden font-display text-xs uppercase tracking-[0.4em] text-white/30 [writing-mode:vertical-rl] lg:block"
          >
            01 — Realisatie
          </div>
        </div>
      </div>

      {/* Scroll indicator (desktop only) */}
      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/50 md:block"
      >
        <ChevronDown className="size-5 animate-bounce" />
      </div>
    </section>
  );
}
