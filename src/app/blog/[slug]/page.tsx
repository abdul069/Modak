import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXContent } from "@/components/MDXContent";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { CTABlock } from "@/components/marketing/CTABlock";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  articleSchema,
  breadcrumbSchema,
  buildMetadata,
} from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getBlogPostBySlug(slug);
  if (!data) return {};
  return buildMetadata({
    title: data.frontmatter.title,
    description: data.frontmatter.excerpt,
    path: `/blog/${slug}`,
    ogImage: data.frontmatter.cover,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const data = getBlogPostBySlug(slug);
  if (!data) notFound();

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: data.frontmatter.title, url: `/blog/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          articleSchema({
            title: data.frontmatter.title,
            description: data.frontmatter.excerpt,
            slug,
            datePublished: data.frontmatter.date,
            author: data.frontmatter.author,
            image: data.frontmatter.cover,
          }),
        ]}
      />
      <article className="container-page max-w-3xl py-20">
        <Breadcrumbs items={breadcrumbs} />

        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-brand-primary hover:underline"
        >
          <ArrowLeft className="size-4" />
          Terug naar blog
        </Link>

        <header className="mt-6">
          <p className="text-xs uppercase tracking-wider text-brand-ink-soft">
            {formatDate(data.frontmatter.date)} ·{" "}
            {data.frontmatter.author ?? "AGNAU"}
          </p>
          <h1 className="mt-3 font-display text-brand-ink">
            {data.frontmatter.title}
          </h1>
          <p className="mt-4 text-lg text-brand-ink-soft">
            {data.frontmatter.excerpt}
          </p>
        </header>

        <div className="mt-12">
          <MDXContent source={data.content} />
        </div>
      </article>

      <CTABlock
        title="Doorpraten over uw renovatie?"
        body="Een vrijblijvend gesprek of plaatsbezoek — daar starten we elk goed project mee."
      />
    </>
  );
}
