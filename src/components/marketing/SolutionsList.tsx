import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealZoom } from "./RevealZoom";

const solutions = [
  { label: "Totaalrenovatie", href: "/totaalrenovatie" },
  { label: "Dakwerken & isolatie", href: "/diensten/dakrenovatie" },
  { label: "Klimaattechniek", href: "/diensten/warmtepompen" },
  { label: "Sanitair & badkamer", href: "/diensten/badkamers" },
  { label: "Energie & elektriciteit", href: "/diensten/zonnepanelen" },
];

interface SolutionsListProps {
  photo?: string;
  photoAlt?: string;
}

/**
 * Photo (left) + list-of-solutions (right) split section. Each row is a
 * navy uppercase arrow-link with a thin divider below. Replaces tifre's
 * "Renovatieoplossingen" sidebar pattern in our own navy/green styling.
 */
export function SolutionsList({
  photo = "/images/projects/IMG-20260512-WA0102.jpg",
  photoAlt = "Renovatie-realisatie AGNAU",
}: SolutionsListProps) {
  return (
    <section className="bg-brand-bg py-20 md:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-12">
          <RevealZoom className="lg:col-span-7">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl rounded-br-[5rem] shadow-xl md:aspect-[16/10]">
              <Image
                src={photo}
                alt={photoAlt}
                fill
                sizes="(min-width: 1024px) 55vw, 90vw"
                className="photo-graded object-cover"
              />
            </div>
          </RevealZoom>

          <div className="lg:col-span-5">
            <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-brand-primary">
              <span className="inline-block h-px w-8 bg-brand-accent" />
              Onze oplossingen
            </p>
            <h2
              className="mt-5 font-display leading-[1.05] text-brand-ink"
              style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)" }}
            >
              Eén partner voor elke <span className="accent-word">discipline.</span>
            </h2>

            <ul className="mt-8 border-t border-brand-line">
              {solutions.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="group/sol flex items-center justify-between gap-4 border-b border-brand-line py-5 transition-colors hover:border-brand-accent"
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary transition-colors group-hover/sol:text-brand-accent">
                      {s.label}
                    </span>
                    <ArrowRight className="size-4 text-brand-primary transition-transform duration-300 group-hover/sol:translate-x-1 group-hover/sol:text-brand-accent" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/diensten"
                  className="group/all mt-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent transition-colors hover:text-brand-accent-dark"
                >
                  Bekijk alle diensten
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover/all:translate-x-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
