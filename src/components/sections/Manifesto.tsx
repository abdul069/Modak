import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Pure-tekst manifesto sectie. Speel met grote en kleine tekst voor
 * visueel ritme. Geen foto's, geen overlays — alleen typografie.
 */
export function Manifesto() {
  return (
    <section className="bg-bone py-32 md:py-40">
      <div className="container-content">
        <Reveal>
          <Eyebrow rule>01 — Wat ons anders maakt</Eyebrow>
        </Reveal>

        <div className="mt-12 grid gap-y-10 md:grid-cols-12 md:gap-x-12">
          <div className="md:col-span-7">
            <Reveal delay={100}>
              <p className="font-display text-3xl leading-[1.2] text-charcoal md:text-4xl lg:text-5xl">
                Een renovatie is geen verzameling van losse offertes.{" "}
                <span className="text-stone">
                  Het is één traject met één planning, één aanspreekpunt,
                  en één partij die verantwoordelijkheid neemt.
                </span>
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:pt-2">
            <Reveal delay={200}>
              <p className="text-base leading-relaxed text-stone md:text-lg">
                Bij AGNAU werk je niet met onderaannemers op kerntechniek.
                Onze eigen ploegen voeren dak, isolatie, technieken,
                sanitair en afwerking uit. Vlaamse vakmensen, één werfleider,
                tien jaar uitvoeringsgarantie.
              </p>
              <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-charcoal">
                — Hooiwege 40j · 9940 Evergem
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
