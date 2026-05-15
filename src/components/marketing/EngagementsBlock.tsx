import { Heart, ShieldCheck, Hammer } from "lucide-react";

const values = [
  {
    Icon: Heart,
    title: "Passie",
    body: "Met passie en gedrevenheid gaan we voor het beste resultaat. Voor minder gaan we niet.",
  },
  {
    Icon: ShieldCheck,
    title: "Integriteit",
    body: "Open en eerlijk. Met wederzijds vertrouwen. De drie bouwstenen van een succesvolle samenwerking.",
  },
  {
    Icon: Hammer,
    title: "Vakmanschap",
    body: "Met vakmanschap en efficiëntie gaan we vooruit. Kwaliteit staat altijd voorop in elk detail.",
  },
];

/**
 * 3 value cards — replaces tifre's "Tifre's engagementen" team-portrait
 * blocks. We use icons + display headings + body, no team photos (per
 * earlier owner request to remove team section).
 */
export function EngagementsBlock() {
  return (
    <section className="bg-brand-bg py-24 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-brand-primary">
            <span className="inline-block h-px w-8 bg-brand-accent" />
            Onze engagementen
          </p>
          <h2
            className="mt-5 font-display leading-[1.05] text-brand-ink"
            style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)" }}
          >
            Waar AGNAU voor <span className="accent-word">staat.</span>
          </h2>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map(({ Icon, title, body }) => (
            <li
              key={title}
              className="group relative overflow-hidden rounded-3xl bg-brand-bg-alt p-8 ring-1 ring-brand-line transition-all duration-300 hover:ring-brand-accent"
            >
              <span
                aria-hidden
                className="absolute left-0 right-0 top-0 h-px bg-brand-accent"
              />
              <Icon className="size-10 text-brand-accent" />
              <h3 className="mt-6 font-display text-2xl text-brand-ink">
                {title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-brand-ink-soft">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
