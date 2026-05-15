import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotAccent } from "./DotAccent";

export interface HeroCircleProps {
  photoUrl: string;
  photoAlt?: string;
  eyebrow?: string;
  title: string;
  /** Optional trailing word/phrase shown after a red dot. */
  titleAccent?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  className?: string;
}

/**
 * Tifre-style hero: full-bleed photo with a floating WHITE CIRCLE overlay
 * on the left containing eyebrow + headline (with red dot accent) + body
 * + outline pill CTA. Includes a scroll-down indicator centred at the
 * bottom (dot + vertical line + "SCROLL DOWN" pill).
 */
export function HeroCircle({
  photoUrl,
  photoAlt = "",
  eyebrow,
  title,
  titleAccent,
  subtitle,
  primaryCta,
  className,
}: HeroCircleProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-brand-bg-alt",
        // Heights: mobile shorter so circle fits, desktop near-full viewport
        "min-h-[78vh] md:min-h-[88vh]",
        className
      )}
    >
      <Image
        src={photoUrl}
        alt={photoAlt}
        fill
        priority
        sizes="100vw"
        className="animate-ken-burns object-cover"
      />
      {/* Subtle bottom darkening for legibility of scroll indicator */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent"
      />

      <div className="container-page relative z-10 flex min-h-[78vh] flex-col justify-center py-16 md:min-h-[88vh] md:py-24">
        {/* Floating white circle */}
        <div className="animate-fade-up relative flex aspect-square w-[90vw] max-w-[420px] items-center justify-center rounded-full bg-white p-10 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.35)] md:max-w-[480px] md:p-14 lg:max-w-[540px]">
          <div className="text-center md:text-left">
            {eyebrow ? (
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-brand-ink-soft md:text-xs">
                {eyebrow}
              </p>
            ) : null}
            <h1
              className="mt-4 font-display leading-[1] text-brand-primary"
              style={{
                fontSize: "clamp(1.7rem, 3.4vw, 3.2rem)",
                letterSpacing: "-0.01em",
              }}
            >
              {title}
              {titleAccent ? (
                <>
                  {" "}
                  <span className="whitespace-nowrap">
                    {titleAccent}
                    <DotAccent size="lg" className="ml-1" />
                  </span>
                </>
              ) : (
                <DotAccent size="lg" className="ml-1" />
              )}
            </h1>
            {subtitle ? (
              <p className="mt-5 text-sm leading-relaxed text-brand-ink-soft md:text-base">
                {subtitle}
              </p>
            ) : null}
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                className="group/btn mt-6 inline-flex items-center gap-3 rounded-full border border-brand-ink/15 px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand-ink transition-colors hover:border-brand-primary hover:text-brand-primary md:text-xs"
              >
                {primaryCta.label}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <DotAccent size="lg" />
        <div className="h-12 w-px bg-white/70" />
        <span className="rounded-full bg-white px-4 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-brand-ink shadow-md">
          Scroll Down
        </span>
      </div>
    </section>
  );
}
