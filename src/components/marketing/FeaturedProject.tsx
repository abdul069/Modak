import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealZoom } from "./RevealZoom";
import { DotAccent } from "./DotAccent";

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
 * Tifre-style realisatie block: arched-top photo on one side, headline +
 * excerpt + quote + CTA on the other. Photo enters the viewport with a
 * scale-fade reveal.
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

  // Optional small secondary photo offset on the corner (visible md+)
  const secondary = extraImages[0];

  return (
    <section className={cn("py-20 md:py-28", bgClass)}>
      <div className="container-page">
        <div
          className={cn(
            "grid items-center gap-12 md:gap-16 lg:grid-cols-12",
            imageSide === "right" && "lg:[&>*:first-child]:order-2"
          )}
        >
          {/* Photo with arched top */}
          <div className="relative lg:col-span-7">
            <RevealZoom className="block">
              <div className="shape-arch-soft relative aspect-[4/5] w-full overflow-hidden md:aspect-[5/6]">
                <Image
                  src={image}
                  alt={`Realisatie ${title}`}
                  fill
                  sizes="(min-width: 1024px) 55vw, 90vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </RevealZoom>

            {/* Floating secondary photo on bottom-corner (md+) */}
            {secondary ? (
              <RevealZoom
                delay={180}
                className={cn(
                  "absolute hidden aspect-square w-44 overflow-hidden rounded-full ring-4 ring-white shadow-xl md:block lg:w-52",
                  imageSide === "right"
                    ? "-left-4 -bottom-10 lg:-left-8"
                    : "-right-4 -bottom-10 lg:-right-8"
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

            {/* Red dot accent floating on photo */}
            <DotAccent
              size="lg"
              className={cn(
                "absolute top-6",
                imageSide === "right" ? "left-6" : "right-6"
              )}
            />
          </div>

          {/* Text */}
          <div className="lg:col-span-5">
            <p className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-brand-primary">
              {typeof index === "number"
                ? `${String(index).padStart(2, "0")} · Realisatie · ${location}`
                : `Realisatie · ${location}`}
              <DotAccent size="sm" />
            </p>
            <h2
              className="mt-5 font-display leading-[1.05] text-brand-ink"
              style={{
                fontSize: "clamp(1.8rem, 3.6vw, 3rem)",
                letterSpacing: "-0.01em",
              }}
            >
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-ink-soft md:text-lg">
              {excerpt}
            </p>
            {quote ? (
              <blockquote className="mt-8 max-w-xl border-l-2 border-brand-accent pl-5 font-display text-base italic leading-relaxed text-brand-ink/85 md:text-lg">
                &ldquo;{quote.text}&rdquo;
                <footer className="mt-2 text-sm not-italic text-brand-ink-soft">
                  — {quote.author}
                </footer>
              </blockquote>
            ) : null}
            <Link
              href={`/realisaties/${slug}`}
              className="group/link mt-10 inline-flex items-center gap-3 rounded-full border border-brand-ink/15 px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand-ink transition-colors hover:border-brand-primary hover:text-brand-primary md:text-xs"
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
