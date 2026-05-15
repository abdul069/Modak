import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { DivisionTheme } from "@/components/layout/DivisionTheme";
import { PhotoTile } from "@/components/marketing/PhotoTile";
import { CTABlock } from "@/components/marketing/CTABlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { getProject, projects } from "@/content/realisaties";
import { divisions } from "@/content/divisions";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return buildMetadata({ title: "Project niet gevonden", path: `/realisaties/${slug}`, noIndex: true });
  return buildMetadata({
    title: project.title,
    description: project.excerpt,
    path: `/realisaties/${slug}`,
  });
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const primary = divisions[project.divisions[0]];
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Realisaties", url: "/realisaties" },
    { name: project.title, url: `/realisaties/${project.slug}` },
  ];

  return (
    <DivisionTheme theme={primary.themeKey}>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <section className="py-12 md:py-16">
        <Container>
          <Link
            href="/realisaties"
            className="inline-flex items-center gap-2 text-sm text-slate hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            Alle realisaties
          </Link>
        </Container>
      </section>

      <section className="pb-16 md:pb-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                {project.divisions.map((s) => divisions[s].name).join(" + ")}
              </p>
              <h1 className="mt-3">{project.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-slate">
                {project.excerpt}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
                <div>
                  <dt className="text-mute">Locatie</dt>
                  <dd className="mt-1 font-mono text-ink">{project.location}</dd>
                </div>
                <div>
                  <dt className="text-mute">Opgeleverd</dt>
                  <dd className="mt-1 font-mono text-ink">{project.year}</dd>
                </div>
              </dl>
            </div>
            <div className="md:col-span-5">
              <PhotoTile
                label={primary.shortName}
                aspect="wide"
                gradient={project.gradient}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container size="narrow">
          <h2 className="text-2xl">Over het project</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">{project.description}</p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <PhotoTile
              label="Voor"
              aspect="video"
              gradient="linear-gradient(135deg, #A0A6B3, #5B6478)"
            />
            <PhotoTile
              label="Na"
              aspect="video"
              gradient={project.gradient}
            />
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container size="narrow">
          <p className="eyebrow">Betrokken divisies</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {project.divisions.map((slug) => {
              const d = divisions[slug];
              return (
                <li key={slug}>
                  <Link
                    href={`/${slug}`}
                    data-division={d.themeKey}
                    className="inline-flex items-center gap-2 rounded-md bg-accent-soft px-4 py-2 text-sm font-medium text-accent-deep transition hover:bg-accent hover:text-white"
                  >
                    {d.name}
                    <ArrowUpRight className="size-4" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <CTABlock
        title="Een soortgelijk project in gedachten?"
        body="Vraag een vrijblijvende offerte aan. We bezoeken uw woning en bezorgen binnen 7 dagen een onderbouwde prijs."
        primaryCta={{ label: "Vraag offerte", href: "/offerte" }}
      />
    </DivisionTheme>
  );
}
