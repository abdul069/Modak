import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealZoom } from "./RevealZoom";

export interface FeaturedProjectProps {
  slug: string;
  title: string;
  location: string;
  excerpt: string;
  image: string;
  extraImages?: string[];
  quote?: { text: string; author: string };
  imageSide?: "left" | "right";
  variant?: "white" | "cream" | "alt";
  index?: number;
}

/**
 * Editorial realisatie block. Primary photo sits on top of an offset green
 * color block. Optional detail photo overlaps in opposite corner. Big "01"
 * style index number sits as a decorative element above the title.
 */
export function FeaturedProject({
  slug,
  title,
  location,
  excerpt,
  image,
  extraImages = [],
  quote,
  imageSide = "left",
  variant = "white",
  index,
}: FeaturedProjectProps) {
  const bgClass =
    variant === "cream"
      ? "section-cream"
      : variant === "alt"
        ? "section-alt"
        : "bg-brand-bg";

  const secondary = extraImages[0];

  return (
    <section className={cn("relative overflow-hidden py-20 md:py-28", bgClass)}>
      <div className="container-page">
        <div
          className={cn(
            "grid items-center gap-16 md:gap-20 lg:grid-cols-12",
            imageSide === "right" && "lg:[&>*:first-child]:order-2"
          )}
        >
          {/* Photo + offset SQUARE block */}
          <div className="relative lg:col-span-7">
            {/* Solid green offset rectangle behind (sharp corners) */}
            <div
              aria-hidden
              className={cn(
                "absolute inset-0 bg-brand-accent",
                imageSide === "right"
                  ? "translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6"
                  : "-translate-x-3 translate-y-3 md:-translate-x-6 md:translate-y-6"
              )}
            />
            {/* Architectural detail: tiny navy square accent */}
            <div
              aria-hidden
              className={cn(
                "absolute hidden h-12 w-12 bg-brand-primary md:block",
                imageSide === "right" ? "-right-3 -top-4" : "-left-3 -top-4"
              )}
            />

            <RevealZoom className="relative block">
              <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[5/6]">
                <Image
                  src={image}
                  alt={`Realisatie ${title}`}
                  fill
                  sizes="(min-width: 1024px) 55vw, 90vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </RevealZoom>

            {/* Floating secondary detail photo — SQUARE with ring (md+) */}
            {secondary ? (
              <RevealZoom
                delay={180}
                className={cn(
                  "absolute hidden aspect-[4/5] w-40 overflow-hidden ring-[6px] ring-brand-bg md:block lg:w-48",
                  imageSide === "right"
                    ? "-left-4 -bottom-10 lg:-left-10"
                    : "-right-4 -bottom-10 lg:-right-10"
                )}
              >
                <Image
                  src={secondary}
                  alt={`Detail ${title}`}
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </RevealZoom>
            ) : null}
          </div>

          {/* Text */}
          <div className="relative lg:col-span-5">
            {/* Big decorative index number */}
            {typeof index === "number" ? (
              <div
                aria-hidden
                className="absolute -top-6 right-0 hidden font-display text-[8rem] leading-none text-brand-accent/15 md:block lg:right-auto lg:-left-2"
              >
                {String(index).padStart(2, "0")}
              </div>
            ) : null}

            <p className="relative flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-brand-primary">
              <span className="inline-block h-px w-8 bg-brand-accent" />
              Realisatie · {location}
            </p>
            <h2
              className="relative mt-5 font-display leading-[1] text-brand-ink"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                letterSpacing: "-0.015em",
              }}
            >
              {title}
            </h2>
            <p className="relative mt-6 max-w-xl text-base leading-relaxed text-brand-ink-soft md:text-lg">
              {excerpt}
            </p>
            {quote ? (
              <blockquote className="relative mt-8 max-w-xl border-l-2 border-brand-accent pl-5 font-display text-base italic leading-relaxed text-brand-ink/85 md:text-lg">
                &ldquo;{quote.text}&rdquo;
                <footer className="mt-2 text-sm not-italic text-brand-ink-soft">
                  — {quote.author}
                </footer>
              </blockquote>
            ) : null}
            <Link
              href={`/realisaties/${slug}`}
              className="group/link relative mt-10 inline-flex items-center gap-3 border border-brand-ink/20 bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-ink transition-colors hover:border-brand-accent hover:bg-brand-accent hover:text-white"
            >
              Bekijk realisatie
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
