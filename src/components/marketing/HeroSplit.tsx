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
  /** Optional accent word/phrase rendered in green italic display. */
  titleAccent?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  caption?: string;
  className?: string;
}

/**
 * Editorial hero — big display headline left, photo with offset green color
 * block on right. Decorative vertical wordmark + subtle grid overlay. Distinct
 * from tifre's floating-circle approach.
 */
export function HeroSplit({
  photoUrl,
  photoAlt = "",
  eyebrow,
  title,
  titleAccent,
  subtitle,
  primaryCta,
  secondaryCta,
  caption,
  className,
}: HeroSplitProps) {
  return (
    <section
      className={cn(
        "section-dark pattern-noise relative overflow-hidden",
        className
      )}
    >
      {/* Soft mesh + subtle grid */}
      <div
        aria-hidden
        className="bg-mesh-hero animate-mesh absolute inset-0 opacity-50"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-page relative grid items-center gap-10 pb-24 pt-20 md:grid-cols-12 md:gap-12 md:pb-32 md:pt-28 lg:gap-16 lg:py-36">
        {/* Text panel */}
        <div className="md:col-span-7">
          {eyebrow ? (
            <p
              className="animate-fade-up flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-brand-accent md:text-xs"
              style={{ animationDelay: "60ms" }}
            >
              <span className="inline-block h-px w-8 bg-brand-accent" />
              {eyebrow}
            </p>
          ) : null}
          <h1
            className="animate-fade-up mt-5 font-display leading-[0.95] text-white"
            style={{
              animationDelay: "180ms",
              fontSize: "clamp(2.6rem, 6.5vw, 6rem)",
              letterSpacing: "-0.015em",
            }}
          >
            {title}
            {titleAccent ? (
              <>
                <br />
                <span className="accent-word">{titleAccent}</span>
              </>
            ) : null}
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
              className="animate-fade-up mt-10 flex flex-wrap items-center gap-5"
              style={{ animationDelay: "460ms" }}
            >
              {primaryCta ? (
                <MagneticButton>
                  <Button asChild size="lg" className="group/btn">
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

        {/* Framed photo with offset green block behind */}
        <div className="relative md:col-span-5">
          {/* Offset green block behind photo */}
          <div
            aria-hidden
            className="absolute inset-0 -translate-x-3 translate-y-3 rounded-md bg-brand-accent/85 md:-translate-x-5 md:translate-y-5"
          />
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
            {caption ? (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">
                <p className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/85">
                  <span className="inline-block size-1.5 rounded-full bg-brand-accent" />
                  {caption}
                </p>
              </div>
            ) : null}
          </div>
          {/* Decorative vertical wordmark */}
          <div
            aria-hidden
            className="absolute -right-3 -top-2 hidden font-display text-[0.65rem] uppercase tracking-[0.5em] text-white/25 [writing-mode:vertical-rl] lg:block"
          >
            AGNAU · Realisaties · 2026
          </div>
        </div>
      </div>

      {/* Scroll indicator (desktop only) */}
      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-white/60 md:flex"
      >
        <ChevronDown className="size-5 animate-bounce" />
        <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em]">Scroll</span>
      </div>
    </section>
  );
}
