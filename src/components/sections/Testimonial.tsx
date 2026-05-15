import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialProps {
  items?: TestimonialItem[];
}

const defaultItems: TestimonialItem[] = [
  {
    quote: "AGNAU heeft ons dak, isolatie en warmtepomp in één traject gedaan. Geen telefoons tussen aannemers, alles geregeld.",
    author: "Familie D.",
    role: "Totaalrenovatie · Sint-Denijs-Westrem",
  },
  {
    quote: "Strakke planning en heldere communicatie. Premie voor de warmtepomp was correct geadviseerd vanaf dag één.",
    author: "Bart V.",
    role: "Warmtepomp · Merelbeke",
  },
  {
    quote: "We zochten één partij voor sanitair en badkamer. Werd een doorgedreven renovatie van de bovenverdieping.",
    author: "Sara & Tom",
    role: "Badkamer + sanitair · Gent",
  },
];

/**
 * Eén grote Fraunces italic quote uitgelicht, met decoratieve aanhalingstekens
 * en klantnaam-label in mono. Multiple quotes scroll horizontal-snap.
 */
export function Testimonial({ items = defaultItems }: TestimonialProps) {
  return (
    <section className="bg-bone-soft py-24 md:py-32">
      <div className="container-content">
        <Eyebrow rule>05 — Wat klanten zeggen</Eyebrow>

        <div className="mt-12">
          {items.map((t, i) => (
            <Reveal key={`${t.author}-${i}`} delay={i * 80}>
              <figure className="grid gap-y-6 border-t border-linen py-12 md:grid-cols-12 md:gap-x-10 md:py-16">
                <blockquote className="md:col-span-9">
                  <p className="font-display text-2xl italic leading-[1.35] text-charcoal md:text-4xl lg:text-[2.6rem]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="md:col-span-3 md:pt-2">
                  <p className="font-display text-base text-charcoal">— {t.author}</p>
                  <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-stone">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
