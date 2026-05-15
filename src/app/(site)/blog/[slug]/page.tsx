import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { DivisionTheme } from "@/components/layout/DivisionTheme";
import { CTABlock } from "@/components/marketing/CTABlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { blogPosts, getBlogPost } from "@/content/blog";
import { divisions, DIVISION_SLUGS } from "@/content/divisions";
import { formatDate } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return buildMetadata({ title: "Artikel niet gevonden", path: `/blog/${slug}`, noIndex: true });
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const division = (DIVISION_SLUGS as readonly string[]).includes(post.category)
    ? divisions[post.category as keyof typeof divisions]
    : null;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  const inner = (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          articleSchema({
            title: post.title,
            description: post.excerpt,
            slug: post.slug,
            datePublished: post.date,
          }),
        ]}
      />

      <section className="py-12 md:py-16">
        <Container size="narrow">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate hover:text-ink">
            <ArrowLeft className="size-4" />
            Alle artikels
          </Link>
        </Container>
      </section>

      <section className="pb-12">
        <Container size="narrow">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            {division ? division.name : post.category}
          </p>
          <h1 className="mt-3">{post.title}</h1>
          <p className="mt-4 text-sm text-mute">
            {formatDate(post.date)} · {post.readingTime} lezen
          </p>
        </Container>
      </section>

      <article className="pb-20">
        <Container size="narrow">
          <div className="space-y-6 text-lg leading-relaxed text-slate">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Container>
      </article>

      <CTABlock
        title="Vragen over uw eigen project?"
        body="Vraag een vrijblijvende offerte aan. We nemen de techniek samen met u door."
        primaryCta={{ label: "Vraag offerte", href: "/offerte" }}
      />
    </>
  );

  return division ? <DivisionTheme theme={division.themeKey}>{inner}</DivisionTheme> : inner;
}
