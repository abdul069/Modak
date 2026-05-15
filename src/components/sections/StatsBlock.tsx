import { CountUp } from "@/components/marketing/CountUp";
import { Eyebrow } from "@/components/ui/Eyebrow";

const stats = [
  { value: 20, suffix: "+", label: "Jaren ervaring" },
  { value: 13, suffix: "", label: "Disciplines onder één dak" },
  { value: 100, suffix: "%", label: "Eigen werfleiding" },
  { value: 10, suffix: "", label: "Jaar uitvoeringsgarantie" },
];

/**
 * Vier grote cijfers met count-up animatie. Dunne verbindings-lijnen
 * tussen tiles op md+. Op cream achtergrond voor lichte uitstraling.
 */
export function StatsBlock() {
  return (
    <section className="section-cream py-24 md:py-32">
      <div className="container-content">
        <div className="mb-14 max-w-xl">
          <Eyebrow rule>AGNAU in cijfers</Eyebrow>
          <h2 className="mt-5 font-display leading-[1.05] text-charcoal" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
            20 jaar werk
            <br />
            <span className="accent-word">in één blik.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Dashed connector */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 border-t border-dashed border-clay/40 md:block"
          />
          <ul className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <li
                key={s.label}
                className="relative bg-bone p-8 ring-1 ring-linen transition-all duration-300 hover:ring-clay"
              >
                <span aria-hidden className="absolute left-0 right-0 top-0 h-px bg-clay" />
                <CountUp
                  to={s.value}
                  suffix={s.suffix}
                  className="font-display text-6xl leading-none text-clay-dark md:text-7xl"
                />
                <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-stone md:text-xs">
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
