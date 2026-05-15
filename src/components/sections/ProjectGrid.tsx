import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";

interface ProjectGridItem {
  slug: string;
  title: string;
  location: string;
  excerpt: string;
  image: string;
}

interface ProjectGridProps {
  items: ProjectGridItem[];
  /** Optional override; default "Meer realisaties" */
  title?: string;
  /** Optional override; default link to /realisaties */
  ctaHref?: string;
  ctaLabel?: string;
}

export function ProjectGrid({
  items,
  title = "Meer realisaties",
  ctaHref = "/realisaties",
  ctaLabel = "Alle realisaties",
}: ProjectGridProps) {
  return (
    <section className="bg-bone-soft py-24 md:py-32">
      <div className="container-wide">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div>
            <Eyebrow rule>04 — Recent werk</Eyebrow>
            <h2 className="mt-6 font-display" style={{ fontSize: "clamp(2rem, 3.2vw, 2.8rem)" }}>
              {title}
            </h2>
          </div>
          <Button asChild variant="ghost">
            <Link href={ctaHref}>
              {ctaLabel}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <li>
                <Link
                  href={`/realisaties/${p.slug}`}
                  data-cursor="Bekijk"
                  className="group/card block"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-linen">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 90vw"
                      className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-stone">
                      Realisatie · {p.location}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-charcoal transition-colors group-hover/card:text-clay-dark">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-stone">{p.excerpt}</p>
                  </div>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
