import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeaturedProjectProps {
  slug: string;
  title: string;
  location: string;
  excerpt: string;
  image: string;
  quote?: { text: string; author: string };
  imageSide?: "left" | "right";
  variant?: "white" | "dark" | "accent";
}

export function FeaturedProject({
  slug,
  title,
  location,
  excerpt,
  image,
  quote,
  imageSide = "left",
  variant = "white",
}: FeaturedProjectProps) {
  const textBg =
    variant === "accent"
      ? "section-accent"
      : variant === "dark"
        ? "section-dark"
        : "bg-white text-brand-ink";

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

  return (
    <section className="grid lg:grid-cols-2">
      <div
        className={cn(
          "relative aspect-[4/5] lg:aspect-auto lg:min-h-[640px]",
          imageSide === "right" && "lg:order-2"
        )}
      >
        <Image
          src={image}
          alt={`Realisatie ${title}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className={cn("flex flex-col justify-center p-8 md:p-14 lg:p-20", textBg)}>
        <p className={cn("text-xs font-medium uppercase tracking-[0.3em]", subtleText)}>
          Realisatie · {location}
        </p>
        <h2 className="mt-4 font-display text-3xl uppercase leading-[1.05] md:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="mt-6 max-w-xl text-base md:text-lg">{excerpt}</p>
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
    </section>
  );
}
