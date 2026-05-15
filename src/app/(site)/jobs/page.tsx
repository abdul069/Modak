import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Briefcase, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTABlock } from "@/components/marketing/CTABlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { jobs } from "@/content/jobs";
import { divisions, DIVISION_SLUGS } from "@/content/divisions";
import type { DivisionSlug } from "@/content/divisions";

export const metadata: Metadata = buildMetadata({
  title: "Jobs — werk bij AGNAU",
  description:
    "Versterk een Vlaamse bouwgroep in volle groei. Vacatures voor werfleiders, monteurs, projectleiders, administratie en sales.",
  path: "/jobs",
});

type SP = Promise<{ divisie?: string; functie?: string; ok?: string }>;

export default async function JobsPage({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  const submitted = sp.ok === "1";
  const filterDiv =
    sp.divisie && (DIVISION_SLUGS as readonly string[]).includes(sp.divisie)
      ? (sp.divisie as DivisionSlug)
      : sp.divisie === "groep"
      ? "groep"
      : undefined;

  const filtered = jobs.filter((j) => !filterDiv || j.division === filterDiv);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Jobs", url: "/jobs" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--mute)" }}>Jobs</p>
            <h1 className="mt-3">Werk mee aan een Vlaamse groep in volle groei.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
              We zoeken vakmensen die graag tonen wat ze kunnen. Eigen ploegen,
              vaste werfleiders, geen overnachtingen — bij ons is uw vak het werk.
            </p>
          </Reveal>

          {submitted ? (
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-line bg-off-white p-6">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-ink text-white">
                <Check className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Sollicitatie ontvangen.</h3>
                <p className="mt-1 text-sm text-slate">
                  Bedankt. We bekijken uw aanvraag en nemen contact op binnen 5 werkdagen.
                </p>
              </div>
            </div>
          ) : null}

          <Reveal className="mt-10 flex flex-wrap gap-2">
            <FilterPill href="/jobs" active={!filterDiv}>Alle vacatures</FilterPill>
            {Object.values(divisions).map((d) => (
              <FilterPill
                key={d.slug}
                href={`/jobs?divisie=${d.slug}`}
                active={filterDiv === d.slug}
                divisionTheme={d.themeKey}
              >
                {d.name}
              </FilterPill>
            ))}
            <FilterPill href="/jobs?divisie=groep" active={filterDiv === "groep"}>
              Groep
            </FilterPill>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          {filtered.length === 0 ? (
            <p className="text-slate">Geen vacatures voor deze filter — kijk later opnieuw.</p>
          ) : (
            <ul className="grid gap-4 md:grid-cols-2">
              {filtered.map((job) => {
                const div = job.division !== "groep" ? divisions[job.division] : null;
                return (
                  <li key={job.slug}>
                    <Link
                      href={`/jobs/${job.slug}`}
                      {...(div ? { "data-division": div.themeKey } : {})}
                      className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
                    >
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-mono uppercase tracking-[0.14em] text-accent">
                          {div ? div.name : "Groep"}
                        </span>
                        <span className="text-mute">·</span>
                        <span className="font-mono uppercase tracking-[0.14em] text-mute">
                          {job.functionType}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-xl font-bold text-ink transition-colors group-hover:text-accent">
                        {job.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-slate">{job.excerpt}</p>
                      <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm text-slate">
                        <span className="flex items-center gap-2">
                          <Briefcase className="size-4 text-mute" />
                          {job.contract}
                        </span>
                        <ArrowUpRight className="size-4 text-mute transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </Container>
      </section>

      <CTABlock
        title="Geen vacature die past?"
        body="Stuur ons een spontane sollicitatie. Vakmensen vinden bij ons altijd een plek."
        primaryCta={{ label: "Spontane sollicitatie", href: "/contact" }}
      />
    </>
  );
}

function FilterPill({
  href, active, divisionTheme, children,
}: { href: string; active: boolean; divisionTheme?: string; children: React.ReactNode }) {
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
