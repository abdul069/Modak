import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/marketing/Hero";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { CTABlock } from "@/components/marketing/CTABlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { getAllBlogPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Artikelen over renovatie, premies, warmtepompen en isolatie — geschreven door de mensen die het werk uitvoeren.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Hero
        eyebrow="Blog"
        title="Renovatie zonder marketingpraat."
        subtitle="Eerlijke artikelen over premies, warmtepompen, isolatie en alles wat we onderweg leren."
      />
      <section className="container-page py-16 md:py-20">
        <Breadcrumbs items={breadcrumbs} />
        {posts.length === 0 ? (
          <p className="rounded-lg border border-brand-line bg-white p-8 text-center text-brand-ink-soft">
            Binnenkort verschijnen hier de eerste artikelen.
          </p>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="overflow-hidden rounded-lg border border-brand-line bg-white"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block p-6"
                >
                  <p className="text-xs uppercase tracking-wider text-brand-ink-soft">
                    {formatDate(post.frontmatter.date)}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-brand-ink group-hover:text-brand-primary">
                    {post.frontmatter.title}
                  </h3>
                  <p className="mt-3 text-sm text-brand-ink-soft">
                    {post.frontmatter.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-primary">
                    Lees verder
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section className="container-page pb-20">
        <CTABlock
          variant="secondary"
          title="Heeft u zelf een renovatievraag?"
          body="We horen ze graag. Of u nu nog in oriëntatiefase zit of klaar bent voor offerte — we tonen u graag wat we uitvoeren."
        />
      </section>
    </>
  );
}
