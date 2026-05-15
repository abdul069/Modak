import { certificates } from "@/lib/site";

/**
 * Subtle award/certification trust strip, between TrustBar and the rest of
 * the page. Greyscale labels + small caps eyebrow. Distinct from tifre's
 * Trends Gazellen badges — AGNAU shows industry certifications.
 */
export function AwardsStrip() {
  return (
    <section className="bg-brand-bg py-12 md:py-16">
      <div className="container-page">
        <p className="flex items-center justify-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-brand-primary">
          <span className="inline-block h-px w-8 bg-brand-accent" />
          Erkend vakmanschap
          <span className="inline-block h-px w-8 bg-brand-accent" />
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {certificates.map((c) => (
            <li
              key={c.id}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink/70 transition-colors hover:text-brand-primary md:text-sm"
            >
              <span className="inline-block size-1.5 bg-brand-accent" />
              {c.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
