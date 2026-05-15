import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { ServiceShowcase } from "@/components/sections/ServiceShowcase";
import { ApproachSteps } from "@/components/sections/ApproachSteps";
import { ProjectFeature } from "@/components/sections/ProjectFeature";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { StatsBlock } from "@/components/sections/StatsBlock";
import { CertificatesStrip } from "@/components/sections/CertificatesStrip";
import { Testimonial } from "@/components/sections/Testimonial";
import { ServiceMarquee } from "@/components/sections/ServiceMarquee";
import { CTABlock } from "@/components/sections/CTABlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { getAllProjects } from "@/lib/content";

export default function HomePage() {
  const projects = getAllProjects();
  const featured = projects[0];
  const rest = projects.slice(0, 3);

  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      <Hero
        photoUrl={siteConfig.heroPhoto}
        photoAlt="Afgewerkte badkamer met backlit ronde spiegel — AGNAU realisatie 2024"
      />

      <Manifesto />

      <ServiceShowcase />

      <ApproachSteps />

      {featured ? (
        <ProjectFeature
          slug={featured.slug}
          title={featured.frontmatter.title}
          location={featured.frontmatter.location}
          excerpt={featured.frontmatter.excerpt ?? ""}
          image={featured.frontmatter.heroImage ?? siteConfig.heroPhoto}
          quote={featured.frontmatter.quote}
          index={1}
        />
      ) : null}

      <ProjectGrid
        items={rest.map((p) => ({
          slug: p.slug,
          title: p.frontmatter.title,
          location: p.frontmatter.location,
          excerpt: p.frontmatter.excerpt ?? "",
          image: p.frontmatter.heroImage ?? siteConfig.heroPhoto,
        }))}
      />

      <StatsBlock />

      <CertificatesStrip />

      <Testimonial />

      <ServiceMarquee />

      <CTABlock />
    </>
  );
}
