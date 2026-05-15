import { Marquee } from "@/components/ui/Marquee";

const words = [
  "Dak",
  "Isolatie",
  "Badkamer",
  "Keuken",
  "Sanitair",
  "Vloeren",
  "Warmtepomp",
  "Ventilatie",
  "Zonnepanelen",
  "Elektriciteit",
  "Laadpaal",
  "Airco",
  "Verwarming",
];

/**
 * Decoratieve schuivende strip met disciplines in Fraunces display.
 * Clay accent, ritme-element tussen secties.
 */
export function ServiceMarquee() {
  return (
    <section className="bg-bone py-12 md:py-16">
      <Marquee speed={50}>
        <ul className="flex items-center gap-12 font-display text-5xl leading-none tracking-tight text-charcoal md:text-7xl lg:text-8xl">
          {words.map((w, i) => (
            <li key={`${w}-${i}`} className="flex items-center gap-12">
              <span>{w}</span>
              <span className="text-clay" aria-hidden>·</span>
            </li>
          ))}
        </ul>
      </Marquee>
    </section>
  );
}
