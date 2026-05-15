import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HeroOverlayCardProps {
  photoUrl: string;
  photoAlt?: string;
  eyebrow?: string;
  title: string;
  /** Second line, rendered in italic display green for accent. */
  titleAccent?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  caption?: string;
  className?: string;
}

/**
 * Light hero — full-bleed photo with floating cream rounded card overlay
 * on the left, containing eyebrow + 2-line headline + body + outline CTA.
 * Distinct from tifre's white-circle overlay (rectangular card, navy+green
 * palette, italic accent in second line only).
 */
export function HeroOverlayCard({
  photoUrl,
  photoAlt = "",
  eyebrow,
  title,
  titleAccent,
  subtitle,
  primaryCta,
  caption,
  className,
}: HeroOverlayCardProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-brand-bg-alt",
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
        className="animate-ken-burns object-cover object-[center_35%]"
      />
      {/* Subtle warm overlay for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-transparent"
      />

      <div className="container-page relative z-10 flex min-h-[78vh] flex-col justify-center py-16 md:min-h-[88vh] md:py-24">
        {/* Floating rounded rectangular card (NOT circle) */}
        <div className="animate-fade-up relative w-full max-w-[520px] rounded-3xl bg-brand-bg/95 p-8 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-12 lg:max-w-[600px]">
          {/* Decorative green dot in card corner */}
          <span
            aria-hidden
            className="absolute right-6 top-6 inline-block size-2.5 rounded-full bg-brand-accent shadow-[0_0_0_5px_rgba(20,184,166,0.2)]"
          />

          {eyebrow ? (
            <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-brand-primary md:text-xs">
              <span className="inline-block h-px w-8 bg-brand-accent" />
              {eyebrow}
            </p>
          ) : null}
          <h1
            className="mt-5 font-display leading-[1.02] text-brand-ink"
            style={{
              fontSize: "clamp(2rem, 4.4vw, 3.6rem)",
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
            <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-ink-soft md:text-lg">
              {subtitle}
            </p>
          ) : null}
          {primaryCta ? (
            <Link
              href={primaryCta.href}
              className="group/btn mt-8 inline-flex items-center gap-3 rounded-full border border-brand-ink/20 px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-brand-ink transition-colors hover:border-brand-accent hover:bg-brand-accent hover:text-white md:text-xs"
            >
              {primaryCta.label}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          ) : null}
        </div>
      </div>

      {/* Caption on photo bottom-right */}
      {caption ? (
        <div className="absolute bottom-6 right-6 z-10 hidden rounded-full bg-brand-bg-dark/85 px-4 py-2 backdrop-blur-sm md:block">
          <p className="flex items-center gap-2 text-[0.6rem] font-medium uppercase tracking-[0.3em] text-white">
            <span className="inline-block h-px w-4 bg-brand-accent" />
            {caption}
          </p>
        </div>
      ) : null}
    </section>
  );
}
