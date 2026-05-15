import { certificates } from "@/lib/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Marquee } from "@/components/ui/Marquee";

/**
 * Subtiele certificeringen-strook met marquee. Klein, grayscale-feel,
 * decoratief — niet te luid.
 */
export function CertificatesStrip() {
  return (
    <section className="bg-bone py-16 md:py-20">
      <div className="container-wide">
        <div className="mb-8 flex justify-center">
          <Eyebrow rule>Gecertificeerd vakwerk</Eyebrow>
        </div>
      </div>

      <Marquee speed={45}>
        <ul className="flex items-center gap-16">
          {certificates.map((c) => (
            <li
              key={c.id}
              className="font-display text-2xl tracking-tight text-stone/65 transition-colors hover:text-clay-dark md:text-3xl"
            >
              {c.label}
            </li>
          ))}
        </ul>
      </Marquee>
    </section>
  );
}
