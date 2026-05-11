import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface HeroProps {
  variant?: "home" | "service" | "standard";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "section-dark relative overflow-hidden",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-brand-accent/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-page relative py-24 md:py-32">
        <div className="max-w-4xl">
          {eyebrow ? (
            <p className="animate-fade-up mb-6 text-xs font-medium uppercase tracking-[0.3em] text-brand-accent md:text-sm">
              {eyebrow}
            </p>
          ) : null}
          <h1
            className="animate-fade-up font-display text-4xl uppercase leading-[1.05] text-white md:text-6xl lg:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            {title}
          </h1>
          {subtitle ? (
            <p
              className="animate-fade-up mt-6 max-w-2xl text-base text-white/85 md:text-lg"
              style={{ animationDelay: "240ms" }}
            >
              {subtitle}
            </p>
          ) : null}

          {(primaryCta || secondaryCta) && (
            <div
              className="animate-fade-up mt-10 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "360ms" }}
            >
              {primaryCta ? (
                <Button asChild size="lg" variant="accent" className="group/btn">
                  <Link href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button
                  asChild
                  size="lg"
                  variant="invert"
                  className="border border-white bg-transparent text-white hover:bg-white hover:text-brand-ink"
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
