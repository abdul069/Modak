import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollLine } from "@/components/ui/ScrollLine";

const steps = [
  {
    n: "01",
    title: "Plaatsbezoek",
    body: "We komen langs, luisteren, meten op en denken mee. Geen verkooppraat — wel concrete observaties.",
    detail: "Eerste contact tot bezoek: 5 werkdagen.",
  },
  {
    n: "02",
    title: "Onderbouwde offerte",
    body: "Eén document met alle disciplines, premies en planning. Vrijblijvend en transparant.",
    detail: "Per gewerkt-uur en m², zonder verstopte posten.",
  },
  {
    n: "03",
    title: "Uitvoering",
    body: "Eigen werfleiding, één aanspreekpunt. Wekelijkse update, foto's van het werk in uitvoering.",
    detail: "10 jaar uitvoeringsgarantie op alle techniek.",
  },
];

/**
 * Verticale 3-stappen sectie met scroll-uitgetekende lijn die de stappen
 * verbindt. Per stap: groot nummer, titel, paragraaf, klein detail.
 */
export function ApproachSteps() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="container-content">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow rule>03 — Aanpak</Eyebrow>
            <h2 className="mt-6 font-display leading-[1.02] text-charcoal" style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}>
              Eén traject.
              <br />
              <span className="accent-word">Drie stappen.</span>
            </h2>
          </div>
          <p className="max-w-md text-base text-stone md:text-lg">
            Van eerste plaatsbezoek tot oplevering — een transparant
            proces zonder verrassingen.
          </p>
        </div>

        <div className="relative">
          {/* Continuous vertical line, draws itself in */}
          <div
            className="pointer-events-none absolute left-[34px] top-3 bottom-3 md:left-[42px]"
          >
            <ScrollLine orientation="vertical" thickness={1} className="h-full" />
          </div>

          <ol className="space-y-16 md:space-y-24">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <li className="relative grid items-start gap-6 md:grid-cols-12 md:gap-10">
                  {/* Number column */}
                  <div className="flex items-center gap-6 md:col-span-3">
                    <div className="relative z-10 flex size-[68px] shrink-0 items-center justify-center rounded-full border border-charcoal/15 bg-bone font-mono text-base text-clay-dark md:size-[84px] md:text-lg">
                      {s.n}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="md:col-span-9">
                    <h3 className="font-display leading-tight text-charcoal" style={{ fontSize: "clamp(1.6rem, 2.2vw, 2.2rem)" }}>
                      {s.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone md:text-lg">
                      {s.body}
                    </p>
                    <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-clay-dark">
                      — {s.detail}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
