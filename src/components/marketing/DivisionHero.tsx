import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { DivisionIcon } from "@/components/brand/DivisionIcon";
import { PhotoTile } from "@/components/marketing/PhotoTile";
import { divisionPhotos } from "@/content/stock-photos";
import type { Division } from "@/content/divisions";

export function DivisionHero({ division }: { division: Division }) {
  const photo = divisionPhotos[division.slug]?.hero;
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 md:pt-14 md:pb-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-12">
          <div className="md:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-md bg-accent text-white">
                  <DivisionIcon iconKey={division.iconKey} className="size-5" />
                </span>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {division.hero.eyebrow}
                </p>
              </div>
              <h1 className="mt-6">{division.hero.headline}</h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate md:text-xl">
                {division.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild variant="primary" size="lg">
                  <Link href={`#offerte`}>
                    Vraag offerte
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`/realisaties?divisie=${division.slug}`}>
                    Bekijk realisaties
                  </Link>
                </Button>
              </div>

              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.16em] text-mute">
                {division.hero.proofPoints.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={0.15}>
              <PhotoTile
                label={division.name}
                aspect="tall"
                src={photo}
                alt={`AGNAU ${division.name}`}
                priority
                gradient="linear-gradient(135deg, var(--accent) 0%, var(--accent-deep) 100%)"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
