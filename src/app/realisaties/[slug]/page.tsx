import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Hero } from "@/components/marketing/Hero";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { CTABlock } from "@/components/marketing/CTABlock";
import { Lightbox } from "@/components/marketing/Lightbox";
import { Parallax } from "@/components/marketing/Parallax";
import { MDXContent } from "@/components/MDXContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import {
  getAllProjects,
  getProjectBySlug,
  type ProjectFrontmatter,
} from "@/lib/content";
import { services } from "@/lib/site";
import { Quote } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getProjectBySlug(slug);
  if (!data) return {};
  return buildMetadata({
    title: data.frontmatter.title,
    description: data.frontmatter.excerpt,
    path: `/realisaties/${slug}`,
    ogImage: data.frontmatter.heroImage,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const data = getProjectBySlug(slug);
  if (!data) notFound();

  const fm: ProjectFrontmatter = data.frontmatter;
  const labelMap = Object.fromEntries(services.map((s) => [s.slug, s.title]));

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Realisaties", url: "/realisaties" },
    { name: fm.title, url: `/realisaties/${slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <Hero
        eyebrow={`${fm.location} · ${fm.year}`}
        title={fm.title}
        subtitle={fm.excerpt}
      />

      <div className="container-page py-12">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {fm.heroImage ? (
        <section className="container-page">
          <Parallax range={90} className="relative aspect-[16/9] overflow-hidden rounded-xl bg-brand-bg-alt">
            <div className="absolute inset-x-0 -top-[10%] h-[120%]">
              <Image
                src={fm.heroImage}
                alt={`Realisatie ${fm.title} in ${fm.location}`}
                fill
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover"
              />
            </div>
          </Parallax>
        </section>
      ) : null}

      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <aside className="rounded-xl border border-brand-line bg-white p-6">
            <h2 className="font-display text-lg text-brand-ink">Project</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-brand-ink-soft">Locatie</dt>
                <dd className="font-medium text-brand-ink">{fm.location}</dd>
              </div>
              <div>
                <dt className="text-brand-ink-soft">Jaar</dt>
                <dd className="font-medium text-brand-ink">{fm.year}</dd>
              </div>
              {fm.duration ? (
                <div>
                  <dt className="text-brand-ink-soft">Duur</dt>
                  <dd className="font-medium text-brand-ink">{fm.duration}</dd>
                </div>
              ) : null}
              {fm.type ? (
                <div>
                  <dt className="text-brand-ink-soft">Type woning</dt>
                  <dd className="font-medium text-brand-ink">{fm.type}</dd>
                </div>
              ) : null}
              <div>
                <dt className="text-brand-ink-soft">Uitgevoerde diensten</dt>
                <dd>
                  <ul className="mt-1 flex flex-wrap gap-1.5">
                    {fm.services.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-brand-line bg-brand-bg px-2.5 py-0.5 text-xs text-brand-ink-soft"
                      >
                        {labelMap[s] ?? s}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </aside>

          <div className="space-y-8">
            <MDXContent source={data.content} />

            {fm.quote ? (
              <blockquote className="rounded-lg border border-brand-accent/40 bg-brand-accent/8 p-8">
                <Quote className="size-6 text-brand-accent" aria-hidden />
                <p className="mt-3 font-display text-xl text-brand-ink">
                  &ldquo;{fm.quote.text}&rdquo;
                </p>
                <footer className="mt-4 text-sm text-brand-ink-soft">
                  — {fm.quote.author}
                </footer>
              </blockquote>
            ) : null}
          </div>
        </div>
      </section>

      {fm.gallery && fm.gallery.length > 0 ? (
        <section className="container-page py-16">
          <h2 className="mb-8 font-display text-2xl text-brand-ink">
            Werfbeelden
          </h2>
          <Lightbox images={fm.gallery} alt={fm.title} />
        </section>
      ) : null}

      <CTABlock
        title="Een gelijkaardig project in gedachten?"
        body="Vraag een offerte op maat aan, of plan een gesprek om uw situatie te bespreken."
      />
    </>
  );
}
