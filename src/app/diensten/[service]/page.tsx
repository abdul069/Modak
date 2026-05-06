import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/marketing/Hero";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { CTABlock } from "@/components/marketing/CTABlock";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { PremieBlock } from "@/components/marketing/PremieBlock";
import { CertificateBadges } from "@/components/marketing/CertificateBadges";
import { ProjectCard } from "@/components/marketing/ProjectCard";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { MDXContent } from "@/components/MDXContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata, serviceSchema } from "@/lib/seo";
import {
  getAllProjects,
  getAllServices,
  getServiceBySlug,
} from "@/lib/content";
import { CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{ service: string }>;
}

export function generateStaticParams() {
  return getAllServices().map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const data = getServiceBySlug(service);
  if (!data) return {};
  const { frontmatter } = data;
  return buildMetadata({
    title: frontmatter.seoTitle ?? frontmatter.title,
    description: frontmatter.seoDescription ?? frontmatter.shortDescription,
    path: `/diensten/${service}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  const data = getServiceBySlug(service);
  if (!data) notFound();

  const { frontmatter, content } = data;
  const allServices = getAllServices();

  const relatedServices = (frontmatter.relatedServices ?? [])
    .map((slug) => allServices.find((s) => s.slug === slug))
    .filter(Boolean) as typeof allServices;

  const relatedProjects = getAllProjects()
    .filter((p) => p.frontmatter.services?.includes(frontmatter.slug))
    .slice(0, 3);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Diensten", url: "/diensten" },
    { name: frontmatter.title, url: `/diensten/${frontmatter.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          serviceSchema({
            name: frontmatter.title,
            description: frontmatter.shortDescription,
            slug: frontmatter.slug,
          }),
        ]}
      />

      <Hero
        variant="service"
        eyebrow="Dienst"
        title={frontmatter.title}
        subtitle={frontmatter.intro ?? frontmatter.shortDescription}
        primaryCta={{ label: "Vraag offerte", href: "/offerte" }}
        secondaryCta={{ label: "Contacteer ons", href: "/contact" }}
      />

      <div className="container-page py-12">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Wat omvat de dienst */}
      {frontmatter.scope && frontmatter.scope.length > 0 ? (
        <section className="container-page pb-20">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Wat omvat de dienst"
                title="Concreet wat u bij ons krijgt."
              />
              <ul className="mt-8 space-y-3">
                {frontmatter.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-primary" />
                    <span className="text-brand-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-brand-line bg-white p-8">
              <MDXContent source={content} />
            </div>
          </div>
        </section>
      ) : (
        <section className="container-page pb-20">
          <MDXContent source={content} />
        </section>
      )}

      {/* Hoe werken we */}
      {frontmatter.steps && frontmatter.steps.length > 0 ? (
        <section className="bg-brand-bg-alt/50 py-20">
          <div className="container-page">
            <SectionHeader
              eyebrow="Hoe werken we"
              title="Een vast traject van plaatsbezoek tot oplevering."
            />
            <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {frontmatter.steps.map((step, i) => (
                <li
                  key={i}
                  className="rounded-lg border border-brand-line bg-white p-6"
                >
                  <span className="font-display text-3xl text-brand-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-ink-soft">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {/* Premies */}
      {frontmatter.hasPremies ? (
        <section className="container-page py-20">
          <PremieBlock
            title={`Premies voor ${frontmatter.title.toLowerCase()}`}
            body="Voor deze dienst bestaan actieve Vlaamse premies. We berekenen het concrete bedrag voor uw situatie en helpen bij het indienen van de aanvraag."
          />
        </section>
      ) : null}

      {/* Certificate relevance */}
      {frontmatter.certificates && frontmatter.certificates.length > 0 ? (
        <section className="container-page pb-20">
          <SectionHeader
            eyebrow="Erkenningen"
            title="Werk dat met juiste certificeringen wordt uitgevoerd."
          />
          <div className="mt-8">
            <CertificateBadges ids={frontmatter.certificates} />
          </div>
        </section>
      ) : null}

      {/* Related realisaties */}
      {relatedProjects.length > 0 ? (
        <section className="bg-brand-bg-alt/50 py-20">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeader
                eyebrow="Realisaties"
                title="Voorbeelden van dit type werk."
              />
              <Link
                href="/realisaties"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:underline"
              >
                Alle realisaties
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p) => (
                <ProjectCard
                  key={p.slug}
                  slug={p.slug}
                  title={p.frontmatter.title}
                  location={p.frontmatter.location}
                  year={p.frontmatter.year}
                  services={p.frontmatter.services}
                  heroImage={p.frontmatter.heroImage}
                  excerpt={p.frontmatter.excerpt}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      {frontmatter.faqs && frontmatter.faqs.length > 0 ? (
        <section className="container-page py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeader
              eyebrow="Veelgestelde vragen"
              title="Antwoorden vóór u ze vraagt."
              description="Mist u iets? Stel uw vraag gerust via het contactformulier."
            />
            <FAQAccordion items={frontmatter.faqs} />
          </div>
        </section>
      ) : null}

      {/* Related services */}
      {relatedServices.length > 0 ? (
        <section className="container-page pb-20">
          <SectionHeader
            eyebrow="Vaak gecombineerd met"
            title="Diensten die hier logisch op aansluiten."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((s) => (
              <ServiceCard
                key={s.slug}
                slug={s.slug}
                title={s.frontmatter.title}
                short={s.frontmatter.shortDescription}
                icon={s.frontmatter.icon}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="container-page pb-20">
        <CTABlock
          title={`Plan uw ${frontmatter.title.toLowerCase()} met AGNAU.`}
          body="We komen langs voor een plaatsbezoek en bezorgen een eerlijke offerte. Vrijblijvend en zonder verkoperspraat."
        />
      </section>
    </>
  );
}
