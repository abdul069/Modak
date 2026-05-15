import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitText } from "@/components/ui/SplitText";
import { ScrollLine } from "@/components/ui/ScrollLine";

interface HeroProps {
  /** Optional override of the hero photo. Defaults to siteConfig.heroPhoto. */
  photoUrl: string;
  photoAlt?: string;
}

/**
 * Asymmetric 60/40 hero. Display headline + manifesto-style copy on the
 * left, full-bleed photo with subtle Ken Burns on the right. Proof-strip
 * below. Decorative vertical scroll-line at bottom-left.
 */
export function Hero({ photoUrl, photoAlt = "AGNAU realisatie" }: HeroProps) {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-bone">
      <div className="container-wide relative grid min-h-[88vh] gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        {/* Text panel (60%) */}
        <div className="relative z-10 flex flex-col justify-center lg:col-span-7 lg:pr-8">
          <Eyebrow rule>Renovatie · Evergem · 2026</Eyebrow>
          <h1 className="mt-8 font-display leading-[0.95] text-charcoal" style={{ letterSpacing: "-0.025em" }}>
            <SplitText as="span" stagger={45}>
              Eén partner.
            </SplitText>
            <br />
            <SplitText as="span" stagger={45} delay={300}>
              Van eerste steen
            </SplitText>
            <br />
            <span className="accent-word">
              <SplitText as="span" stagger={45} delay={600}>
                tot laatste schroef.
              </SplitText>
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone md:text-xl">
            Dak, isolatie, sanitair, badkamer, keuken, technieken — onder
            één planning. Eigen werfleiding. Geen telefoons tussen
            aannemers.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href="/offerte">
                Vraag een offerte
                <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/realisaties">
                Bekijk realisaties
                <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Photo (40%) — full-bleed right */}
        <div className="relative -mr-6 lg:col-span-5 lg:-mr-12">
          <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden md:h-[70vh] lg:h-full lg:min-h-[640px]">
            <Image
              src={photoUrl}
              alt={photoAlt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="animate-ken-burns object-cover"
            />
            {/* Caption pill bottom-right */}
            <div className="absolute bottom-6 right-6 z-10 hidden bg-bone/95 px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-charcoal md:block">
              Realisatie · 2024
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden
        className="absolute bottom-10 left-6 hidden flex-col items-start gap-3 md:flex lg:left-12"
      >
        <ScrollLine orientation="vertical" thickness={1} className="h-16" />
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-stone">
          Scroll
        </span>
      </div>

      {/* Proof strip — bottom-aligned */}
      <div className="relative z-10 border-t border-linen bg-bone">
        <div className="container-wide grid grid-cols-3 gap-6 py-6 md:py-7">
          {[
            { v: "20+", l: "jaar ervaring" },
            { v: "13", l: "disciplines" },
            { v: "10 jaar", l: "garantie" },
          ].map((p) => (
            <div key={p.l} className="flex items-baseline gap-3">
              <span className="font-display text-2xl text-charcoal md:text-3xl">{p.v}</span>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-stone md:text-xs">
                {p.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
