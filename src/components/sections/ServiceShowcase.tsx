"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface ServiceCluster {
  slug: string;
  cluster: string;
  title: string;
  description: string;
  items: string[];
  image: string;
  primaryHref: string;
}

const clusters: ServiceCluster[] = [
  {
    slug: "dak-gevel",
    cluster: "Dak & gevel",
    title: "Dichtmaken & isoleren",
    description:
      "Dakvernieuwing, isolatie binnen of buiten — de eerste laag van een gezonde woning.",
    items: ["Dakrenovatie", "Dakisolatie"],
    image: "/images/projects/IMG-20260512-WA0118.jpg",
    primaryHref: "/diensten/dakrenovatie",
  },
  {
    slug: "interieur",
    cluster: "Interieur",
    title: "Badkamer, keuken, vloer",
    description:
      "Volledige interieur-afwerking met eigen ploegen. Van leiding tot lavabo, van vloer tot keukenkast.",
    items: ["Badkamers", "Sanitair", "Keukens", "Vloeren"],
    image: "/images/projects/IMG-20260512-WA0070.jpg",
    primaryHref: "/diensten/badkamers",
  },
  {
    slug: "verwarming-koeling",
    cluster: "Verwarming & koeling",
    title: "Comfortabele klimaat",
    description:
      "Warmtepompen, vloerverwarming, hybride installaties. RESCert-gecertificeerd.",
    items: ["Warmtepompen", "Verwarming", "Airco"],
    image: "/images/projects/pexels-alpha-innotec-936418931-20046693.jpg",
    primaryHref: "/diensten/warmtepompen",
  },
  {
    slug: "lucht-energie",
    cluster: "Lucht & energie",
    title: "Gezond & zuinig",
    description:
      "Mechanische ventilatie systeem D en PV-installaties — eigen stroom + gezonde lucht.",
    items: ["Ventilatie", "Zonnepanelen"],
    image: "/images/projects/IMG-20260512-WA0074.jpg",
    primaryHref: "/diensten/ventilatie",
  },
  {
    slug: "elektriciteit",
    cluster: "Elektriciteit",
    title: "Veilig & toekomstklaar",
    description:
      "AREI-keuring, herbedrading, domotica en laadpalen. Klaar voor wat komt.",
    items: ["Elektriciteitswerken", "Laadpalen"],
    image: "/images/projects/pexels-jonathan-cordova-r-2637981-36551684.jpg",
    primaryHref: "/diensten/elektriciteitswerken",
  },
];

export function ServiceShowcase() {
  return (
    <section className="bg-bone-soft py-24 md:py-32">
      <div className="container-wide">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div className="max-w-xl">
            <Eyebrow rule>02 — Onze diensten</Eyebrow>
            <h2 className="mt-6 font-display leading-[1.02] text-charcoal" style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}>
              Dertien disciplines.
              <br />
              <span className="accent-word">Eén ploeg.</span>
            </h2>
          </div>
          <p className="max-w-md text-base text-stone md:text-lg">
            Geen onderaannemers waar het om kerntechniek gaat. We
            bundelen de 13 disciplines in vijf werkterreinen — zodat één
            partij verantwoordelijk blijft van begin tot oplevering.
          </p>
        </div>
      </div>

      {/* Horizontal scroll-snap row, drag-enabled on touch */}
      <div className="overflow-x-auto pb-6 [scrollbar-width:thin]" style={{ scrollSnapType: "x mandatory" }}>
        <ul className="container-wide flex w-max items-stretch gap-5 pr-6 md:gap-6">
          {clusters.map((c) => (
            <li
              key={c.slug}
              className="w-[78vw] shrink-0 sm:w-[60vw] md:w-[44vw] lg:w-[420px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <Link
                href={c.primaryHref}
                data-cursor="Bekijk"
                className="group/card relative block h-full overflow-hidden bg-bone shadow-[0_18px_48px_-20px_rgba(31,28,26,0.18)]"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.cluster}
                    fill
                    sizes="(min-width: 1024px) 420px, 70vw"
                    className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 to-transparent" />
                  <div className="absolute left-5 top-5">
                    <Eyebrow invert>{c.cluster}</Eyebrow>
                  </div>
                  <div className="absolute right-5 top-5">
                    <span className="flex size-9 items-center justify-center rounded-full bg-bone text-charcoal transition-all duration-300 group-hover/card:bg-clay">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-display text-2xl text-charcoal">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{c.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-stone">
                    {c.items.map((item, i) => (
                      <li key={item} className="flex items-center gap-2">
                        {item}
                        {i < c.items.length - 1 ? <span className="text-clay/50">·</span> : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
