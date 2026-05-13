import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MagneticButton } from "./MagneticButton";

export interface HeroPhotoProps {
  photoUrl: string;
  photoAlt?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  size?: "full" | "compact";
  showScrollIndicator?: boolean;
  className?: string;
}

export function HeroPhoto({
  photoUrl,
  photoAlt = "",
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  size = "full",
  showScrollIndicator = true,
  className,
}: HeroPhotoProps) {
  const heightClass = size === "full" ? "min-h-[78vh] md:min-h-[88vh]" : "min-h-[55vh] md:min-h-[60vh]";
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-brand-bg-dark text-white",
        heightClass,
        className
      )}
    >
      <Image
        src={photoUrl}
        alt={photoAlt}
        fill
        priority
        sizes="100vw"
        className="animate-ken-burns photo-graded object-cover object-[center_30%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/90"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 to-transparent"
      />

      <div
        className={cn(
          "container-page relative z-10 flex flex-col justify-end pb-20 pt-32 md:pb-24",
          heightClass
        )}
      >
        {eyebrow ? (
          <p
            className="animate-fade-up text-xs font-medium uppercase tracking-[0.3em] text-white/90 md:text-sm"
            style={{ animationDelay: "60ms" }}
          >
            {eyebrow}
          </p>
        ) : null}
        <h1
          className="animate-fade-up mt-4 max-w-4xl font-display text-4xl uppercase leading-[1.05] text-white md:text-6xl lg:text-7xl"
          style={{ animationDelay: "180ms" }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className="animate-fade-up mt-6 max-w-2xl text-base text-white/90 md:text-lg"
            style={{ animationDelay: "320ms" }}
          >
            {subtitle}
          </p>
        ) : null}

        {(primaryCta || secondaryCta) && (
          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "460ms" }}
          >
            {primaryCta ? (
              <MagneticButton>
                <Button asChild size="lg" variant="accent" className="group/btn">
                  <Link href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </MagneticButton>
            ) : null}
            {secondaryCta ? (
              <Button
                asChild
                size="lg"
                variant="invert"
                className="border-white bg-white/0 text-white hover:bg-white hover:text-brand-ink"
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        )}
      </div>

      {showScrollIndicator ? (
        <div
          aria-hidden
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70"
        >
          <ChevronDown className="size-6 animate-bounce" />
        </div>
      ) : null}
    </section>
  );
}
