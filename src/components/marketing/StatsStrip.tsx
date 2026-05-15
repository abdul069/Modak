import { CountUp } from "./CountUp";

const stats = [
  { label: "Jaren ervaring", value: 20, suffix: "+" },
  { label: "Disciplines onder één dak", value: 11, suffix: "" },
  { label: "Eigen werfleiding", value: 100, suffix: "%" },
  { label: "Jaar uitvoeringsgarantie", value: 10, suffix: "" },
];

export function StatsStrip() {
  return (
    <section className="section-cream relative py-20 md:py-24">
      <div className="container-page relative">
        <div className="mb-12 max-w-2xl">
          <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-brand-primary">
            <span className="inline-block h-px w-8 bg-brand-accent" />
            AGNAU in cijfers
          </p>
          <h2
            className="mt-5 font-display leading-[1.05] text-brand-ink"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            20 jaar werk in <span className="accent-word">één blik.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Dashed connector line across center (md+) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 border-t border-dashed border-brand-accent/30 md:block"
          />

          <ul className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <li
                key={s.label}
                className="group relative overflow-hidden rounded-3xl bg-brand-bg p-8 ring-1 ring-brand-line transition-all duration-300 hover:ring-brand-accent"
              >
                {/* Top accent line */}
                <span
                  aria-hidden
                  className="absolute left-0 right-0 top-0 h-px bg-brand-accent"
                />
                <CountUp
                  to={s.value}
                  suffix={s.suffix}
                  className="font-display text-6xl leading-none text-brand-accent md:text-7xl"
                />
                <p className="mt-6 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-brand-ink-soft md:text-xs">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
