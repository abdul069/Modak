import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoTile } from "@/components/marketing/PhotoTile";
import { locationPhotos } from "@/content/stock-photos";
import type { Division } from "@/content/divisions";

const LOCATIONS: Record<string, string[]> = {
  dakwerken: ["Gent", "Evergem", "Aalter", "Eeklo", "Drongen", "Sint-Niklaas"],
  "ramen-en-deuren": ["Drongen", "Mariakerke", "Aalter", "Lochristi", "Gent", "Wetteren"],
  renovatie: ["Sint-Denijs-Westrem", "Merelbeke", "Ledeberg", "Mariakerke", "Gent", "Drongen"],
  hvac: ["Merelbeke", "Eeklo", "Aalter", "Mariakerke", "Gent", "Lochristi"],
  "zonne-energie": ["Aalter", "Eeklo", "Evergem", "Sleidinge", "Mariakerke", "Drongen"],
  laadpalen: ["Gent", "Drongen", "Mariakerke", "Sint-Martens-Latem", "Lochristi", "Aalter"],
};

export function DivisionRealisaties({ division }: { division: Division }) {
  const locations = LOCATIONS[division.slug] ?? [];

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <p className="eyebrow">Realisaties</p>
            <h2 className="mt-3">
              Recent werk in {division.shortName.toLowerCase()}.
            </h2>
          </Reveal>
          <Link
            href={`/realisaties?divisie=${division.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink underline-offset-4 hover:text-accent hover:underline"
          >
            Alle {division.shortName.toLowerCase()}-projecten
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <Reveal className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc, i) => {
            const photo = locationPhotos[`${division.themeKey}-${loc}`];
            return (
              <Link
                key={loc}
                href={`/realisaties?divisie=${division.slug}`}
                className="group block"
              >
                <PhotoTile
                  label={loc}
                  aspect="square"
                  src={photo}
                  alt={`${division.name}-project in ${loc}`}
                  gradient={`linear-gradient(${135 + i * 15}deg, var(--accent) 0%, var(--accent-deep) 100%)`}
                />
                <div className="mt-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                      {division.name}
                    </p>
                    <p className="mt-1 font-display text-lg font-bold text-ink">
                      Project in {loc}
                    </p>
                  </div>
                  <ArrowUpRight className="size-4 text-mute transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
                </div>
              </Link>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
