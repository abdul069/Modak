import { CountUp } from "./CountUp";

const stats = [
  { label: "Jaren ervaring", value: 20, suffix: "+" },
  { label: "Disciplines onder één dak", value: 11, suffix: "" },
  { label: "Eigen werfleiding", value: 100, suffix: "%" },
  { label: "Jaar uitvoeringsgarantie", value: 10, suffix: "" },
];

export function StatsStrip() {
  return (
    <section className="section-dark pattern-noise relative overflow-hidden py-24 md:py-28">
      {/* Architectural grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="container-page relative">
        <div className="mb-14 flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-brand-accent">
          <span className="inline-block h-px w-10 bg-brand-accent" />
          AGNAU in cijfers
        </div>

        <div className="relative">
          {/* Dashed connector line across (md+) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-12 hidden border-t border-dashed border-white/15 md:block"
          />

          <ul className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <li
                key={s.label}
                className="group relative overflow-hidden rounded-2xl bg-white/[0.025] p-8 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/[0.06] hover:ring-brand-accent/40"
              >
                {/* Thin green top-bar accent */}
                <span
                  aria-hidden
                  className="absolute left-0 right-0 top-0 h-px bg-brand-accent"
                />
                <CountUp
                  to={s.value}
                  suffix={s.suffix}
                  className="font-display text-6xl leading-none text-white md:text-7xl"
                />
                <p className="mt-6 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/70 md:text-xs">
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
