import { CountUp } from "./CountUp";

const stats = [
  { label: "Jaren ervaring", value: 20, suffix: "+" },
  { label: "Disciplines onder één dak", value: 11, suffix: "" },
  { label: "Eigen werfleiding", value: 100, suffix: "%" },
  { label: "Jaar uitvoeringsgarantie", value: 10, suffix: "" },
];

export function StatsStrip() {
  return (
    <section className="section-dark py-20">
      <div className="container-page">
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <li
              key={s.label}
              className="border-t border-white/20 pt-6"
            >
              <CountUp
                to={s.value}
                suffix={s.suffix}
                className="font-display text-5xl text-brand-accent md:text-6xl"
              />
              <p className="mt-3 text-sm uppercase tracking-wider text-white/70">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
