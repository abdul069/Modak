import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { ProjectFilter } from "@/components/marketing/ProjectFilter";
import { CTABlock } from "@/components/marketing/CTABlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Realisaties",
  description:
    "Selectie van renovatie- en installatieprojecten in Gent en Vlaanderen. Filter op dienst om relevante voorbeelden te zien.",
  path: "/realisaties",
});

export default function RealisatiesPage() {
  const projects = getAllProjects().map((p) => ({
    slug: p.slug,
    title: p.frontmatter.title,
    location: p.frontmatter.location,
    year: p.frontmatter.year,
    services: p.frontmatter.services,
    heroImage: p.frontmatter.heroImage,
    excerpt: p.frontmatter.excerpt,
  }));

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Realisaties", url: "/realisaties" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <Hero
        eyebrow="Realisaties"
        title="Echte projecten, eerlijke beelden."
        subtitle="Een selectie van het werk van de afgelopen jaren — van losse warmtepompinstallaties tot volledige totaalrenovaties."
      />

      <section className="container-page py-16 md:py-20">
        <Breadcrumbs items={breadcrumbs} />
        <ProjectFilter projects={projects} />
      </section>

      <CTABlock
        title="Past uw project bij wat we doen?"
        body="Bekijk de realisaties en stel ons gerust een vraag — graag horen we welke renovatie u plant."
      />
    </>
  );
}
