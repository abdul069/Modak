import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoTile } from "@/components/marketing/PhotoTile";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { projects } from "@/content/realisaties";
import { divisions, DIVISION_SLUGS } from "@/content/divisions";
import type { DivisionSlug } from "@/content/divisions";

export const metadata: Metadata = buildMetadata({
  title: "Realisaties — projecten van AGNAU",
  description:
    "Bekijk recente realisaties van AGNAU. Filter per divisie: dakwerken, ramen, renovatie, HVAC, zonne-energie en laadpalen.",
  path: "/realisaties",
});

type SP = Promise<{ divisie?: string }>;

export default async function RealisatiesPage({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  const filter = (DIVISION_SLUGS as readonly string[]).includes(sp.divisie ?? "")
    ? (sp.divisie as DivisionSlug)
    : undefined;

  const filtered = filter
    ? projects.filter((p) => p.divisions.includes(filter))
    : projects;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Realisaties", url: "/realisaties" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--mute)" }}>Realisaties</p>
            <h1 className="mt-3">
              {filter ? `${divisions[filter].name}.` : "Werk dat voor zichzelf spreekt."}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
              Een selectie uit recente projecten — particuliere woningen, KMO&rsquo;s en publieke opdrachten in Oost-Vlaanderen.
            </p>
          </Reveal>

          <Reveal className="mt-10 flex flex-wrap gap-2">
            <FilterPill href="/realisaties" active={!filter}>
              Alle projecten
            </FilterPill>
            {Object.values(divisions).map((d) => (
              <FilterPill
                key={d.slug}
                href={`/realisaties?divisie=${d.slug}`}
                active={filter === d.slug}
                divisionTheme={d.themeKey}
              >
                {d.name}
              </FilterPill>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          {filtered.length === 0 ? (
            <p className="text-slate">Geen projecten gevonden voor deze filter.</p>
          ) : (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => {
                const primary = divisions[p.divisions[0]];
                return (
                  <li key={p.slug}>
                    <Link
                      href={`/realisaties/${p.slug}`}
                      data-division={primary.themeKey}
                      className="group block"
                    >
                      <PhotoTile
                        label={primary.name}
                        aspect="square"
                        gradient={p.gradient}
                      />
                      <div className="mt-3">
                        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                          {p.divisions.map((s) => divisions[s].shortName).join(" + ")}
                        </p>
                        <h3 className="mt-1 font-display text-lg font-bold text-ink transition-colors group-hover:text-accent">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate">
                          {p.location} · {p.year}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </Container>
      </section>
    </>
  );
}

function FilterPill({
  href,
  active,
  divisionTheme,
  children,
}: {
  href: string;
  active: boolean;
  divisionTheme?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      data-division={divisionTheme}
      className={
        active
          ? "inline-flex items-center rounded-full bg-ink px-4 py-2 text-sm font-medium text-white"
          : "inline-flex items-center rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
      }
    >
      {children}
    </Link>
  );
}
