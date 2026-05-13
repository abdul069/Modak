import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Parallax } from "./Parallax";

export interface FeaturedProjectProps {
  slug: string;
  title: string;
  location: string;
  excerpt: string;
  /** Primary image (e.g. heroImage). */
  image: string;
  /** Optional secondary images for the mosaic. Falls back to primary. */
  extraImages?: string[];
  quote?: { text: string; author: string };
  imageSide?: "left" | "right";
  variant?: "white" | "dark" | "accent";
  index?: number;
}

/**
 * Editorial 3-photo mosaic + text panel. Replaces full-bleed photo treatment
 * that exposed phone-camera limitations at desktop scale.
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
    variant === "accent"
      ? "section-accent"
      : variant === "dark"
        ? "section-dark"
        : "bg-brand-bg";

  const subtleText =
    variant === "accent"
      ? "text-brand-bg-dark/70"
      : variant === "dark"
        ? "text-white/70"
        : "text-brand-ink-soft";

  const linkColor =
    variant === "accent"
      ? "text-brand-bg-dark"
      : variant === "dark"
        ? "text-brand-accent"
        : "text-brand-primary";

  const quoteBorder =
    variant === "accent"
      ? "border-brand-bg-dark/30"
      : variant === "dark"
        ? "border-white/30"
        : "border-brand-primary/30";

  // Build the 3-photo mosaic, padding with the main image if extras missing.
  const photos: string[] = [
    image,
    extraImages[0] ?? image,
    extraImages[1] ?? extraImages[0] ?? image,
  ];

  return (
    <section className={cn("py-20 md:py-28", bgClass)}>
      <div className="container-page">
        <div
          className={cn(
            "grid items-center gap-10 md:gap-14 lg:grid-cols-12 lg:gap-16",
            imageSide === "right" && "lg:[&>*:first-child]:order-2"
          )}
        >
          {/* Photo mosaic */}
          <div className="lg:col-span-7">
            <div className="relative grid grid-cols-6 grid-rows-6 gap-3 md:gap-4">
              {/* Large portrait, spans 2/3 height */}
              <Parallax
                range={50}
                className="col-span-4 row-span-6 overflow-hidden rounded-md shadow-lg ring-1 ring-black/5"
              >
                <div className="relative aspect-[4/5] w-full">
                  <div className="absolute inset-0 -m-[6%]">
                    <Image
                      src={photos[0]}
                      alt={`Realisatie ${title}`}
                      fill
                      sizes="(min-width: 1024px) 40vw, 70vw"
                      className="photo-graded object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </Parallax>

              {/* Square top-right */}
              <Parallax
                range={70}
                className="col-span-2 row-span-3 overflow-hidden rounded-md shadow-lg ring-1 ring-black/5"
              >
                <div className="relative aspect-square w-full">
                  <div className="absolute inset-0 -m-[8%]">
                    <Image
                      src={photos[1]}
                      alt={`Detail ${title}`}
                      fill
                      sizes="(min-width: 1024px) 20vw, 35vw"
                      className="photo-graded object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </Parallax>

              {/* Wide bottom-right */}
              <Parallax
                range={90}
                className="col-span-2 row-span-3 overflow-hidden rounded-md shadow-lg ring-1 ring-black/5"
              >
                <div className="relative aspect-square w-full">
                  <div className="absolute inset-0 -m-[8%]">
                    <Image
                      src={photos[2]}
                      alt={`Detail ${title}`}
                      fill
                      sizes="(min-width: 1024px) 20vw, 35vw"
                      className="photo-graded object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </Parallax>
            </div>
          </div>

          {/* Text panel */}
          <div className="lg:col-span-5">
            <p className={cn("text-[0.7rem] font-medium uppercase tracking-[0.4em]", subtleText)}>
              {typeof index === "number"
                ? `${String(index).padStart(2, "0")} · Realisatie · ${location}`
                : `Realisatie · ${location}`}
            </p>
            <h2
              className="mt-5 font-display uppercase leading-[0.95]"
              style={{
                fontSize: "clamp(2rem, 4.2vw, 3.5rem)",
                letterSpacing: "-0.015em",
              }}
            >
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed md:text-lg">
              {excerpt}
            </p>
            {quote ? (
              <blockquote
                className={cn(
                  "mt-8 max-w-xl border-l-2 pl-5 text-base italic md:text-lg",
                  quoteBorder
                )}
              >
                &ldquo;{quote.text}&rdquo;
                <footer className={cn("mt-2 text-sm not-italic", subtleText)}>
                  — {quote.author}
                </footer>
              </blockquote>
            ) : null}
            <Link
              href={`/realisaties/${slug}`}
              className={cn(
                "group/link mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider",
                linkColor
              )}
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
