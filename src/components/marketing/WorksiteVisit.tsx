import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * "Bezoek onze werf" section — AGNAU's answer to tifre's "Belevingsruimte"
 * showroom block. We don't have a showroom, so we invite people to visit
 * an active worksite. Full-bleed photo + floating green-pill CTA + italic
 * heading on a card overlay.
 */
export function WorksiteVisit() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-bg-dark">
      <div className="relative h-[70vh] min-h-[480px] w-full">
        <Image
          src="/images/projects/IMG-20260512-WA0118.jpg"
          alt="AGNAU werf — afgewerkt dakterras"
          fill
          sizes="100vw"
          className="object-cover object-[center_60%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />

        <div className="container-page relative flex h-full items-center">
          <div className="max-w-xl rounded-3xl bg-brand-bg/95 p-8 shadow-2xl backdrop-blur-sm md:p-10">
            <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-brand-primary">
              <span className="inline-block h-px w-8 bg-brand-accent" />
              Plaatsbezoek
            </p>
            <h2
              className="mt-5 font-display leading-[1.05] text-brand-ink"
              style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)" }}
            >
              Zie ons aan het <span className="accent-word">werk.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-ink-soft">
              We laten onze werven graag zien. Plan een korte bezoek op
              een actuele werf in Gent of Evergem — zo voel je vóór de
              start hoe we werken.
            </p>
            <Link
              href="/contact?subject=werfbezoek"
              className="group/wv mt-7 inline-flex items-center gap-3 rounded-full bg-brand-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-accent-dark"
            >
              Plan een werfbezoek
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/wv:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
