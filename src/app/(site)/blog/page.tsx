import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/content/blog";
import { divisions, DIVISION_SLUGS } from "@/content/divisions";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Blog — inzichten van AGNAU",
  description: "Artikels over renovatie, premies, warmtepompen, zonne-energie en meer — geschreven door onze vakmensen.",
  path: "/blog",
});

type SP = Promise<{ categorie?: string }>;

const CATEGORY_LABELS: Record<string, string> = {
  premies: "Premies",
  tips: "Tips",
};

export default async function BlogPage({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  const isDivisionCat = (DIVISION_SLUGS as readonly string[]).includes(sp.categorie ?? "");
  const isOtherCat = sp.categorie === "premies" || sp.categorie === "tips";
  const filter = isDivisionCat || isOtherCat ? sp.categorie : undefined;

  const filtered = filter
    ? blogPosts.filter((p) => p.category === filter)
    : blogPosts;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--mute)" }}>Blog</p>
            <h1 className="mt-3">Inzichten uit de werf en de showroom.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
              Praktische artikels over renovatie, premies en techniek — geschreven door projectleiders en vakmensen.
            </p>
          </Reveal>

          <Reveal className="mt-10 flex flex-wrap gap-2">
            <FilterPill href="/blog" active={!filter}>Alle artikels</FilterPill>
            {Object.values(divisions).map((d) => (
              <FilterPill
                key={d.slug}
                href={`/blog?categorie=${d.slug}`}
                active={filter === d.slug}
                divisionTheme={d.themeKey}
              >
                {d.name}
              </FilterPill>
            ))}
            <FilterPill href="/blog?categorie=premies" active={filter === "premies"}>
              Premies
            </FilterPill>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => {
              const division = (DIVISION_SLUGS as readonly string[]).includes(p.category)
                ? divisions[p.category as keyof typeof divisions]
                : null;
              const catLabel = division ? division.name : CATEGORY_LABELS[p.category] ?? p.category;
              return (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    {...(division ? { "data-division": division.themeKey } : {})}
                    className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
                  >
                    <div className="flex items-center gap-2 text-xs">
                      <span className="rounded-full bg-accent-soft px-2.5 py-1 font-mono uppercase tracking-[0.12em] text-accent-deep">
                        {catLabel}
                      </span>
                      <span className="font-mono text-mute">{p.readingTime}</span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink transition-colors group-hover:text-accent">
                      {p.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-slate">{p.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-xs text-mute">
                      <time>{formatDate(p.date)}</time>
                      <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
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
