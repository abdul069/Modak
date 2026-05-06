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
  variant = "standard",
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  className,
}: HeroProps) {
  const isHome = variant === "home";
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        isHome
          ? "bg-brand-primary text-white"
          : "bg-brand-bg-alt text-brand-ink",
        className
      )}
    >
      {/* Animated gradient mesh */}
      {isHome ? (
        <>
          <div
            aria-hidden
            className="absolute inset-0 bg-mesh-hero animate-mesh opacity-90 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          />
          {/* Subtle grid texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          {/* Floating accent blob */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-brand-accent/15 blur-3xl animate-mesh"
          />
        </>
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 bg-mesh-hero opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />
      )}

      <div className="container-page relative grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-9">
          {eyebrow ? (
            <p
              className={cn(
                "mb-4 text-sm font-medium uppercase tracking-[0.18em] animate-fade-up",
                isHome ? "text-brand-accent" : "text-brand-primary"
              )}
              style={{ animationDelay: "60ms" }}
            >
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={cn(
              "max-w-4xl font-display animate-fade-up",
              isHome ? "text-white" : "text-brand-ink"
            )}
            style={{ animationDelay: "180ms" }}
          >
            {title}
          </h1>
          {subtitle ? (
            <p
              className={cn(
                "mt-6 max-w-2xl text-lg md:text-xl animate-fade-up",
                isHome ? "text-white/85" : "text-brand-ink-soft"
              )}
              style={{ animationDelay: "320ms" }}
            >
              {subtitle}
            </p>
          ) : null}

          {(primaryCta || secondaryCta) && (
            <div
              className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: "460ms" }}
            >
              {primaryCta ? (
                <Button
                  asChild
                  size="lg"
                  variant={isHome ? "accent" : "primary"}
                  className="group/btn"
                >
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
                  variant={isHome ? "invert" : "outline"}
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>
          )}
        </div>

        {/* Decorative right-column glyph (home only) */}
        {isHome ? (
          <div
            aria-hidden
            className="relative hidden lg:col-span-3 lg:block animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            <svg
              viewBox="0 0 200 200"
              fill="none"
              className="mx-auto w-full max-w-[220px] text-brand-accent/40"
            >
              <path
                d="M30 170 L100 30 L170 170"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M58 124 L142 124"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle
                cx="100"
                cy="30"
                r="4"
                fill="currentColor"
                className="origin-center"
              />
              {/* slowly rotating outer ring */}
              <circle
                cx="100"
                cy="100"
                r="92"
                stroke="currentColor"
                strokeOpacity="0.25"
                strokeDasharray="4 8"
                strokeWidth="1"
              />
            </svg>
          </div>
        ) : null}
      </div>

      {/* Bottom edge fade for seamless next section on home */}
      {isHome ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-brand-bg/30"
        />
      ) : null}
    </section>
  );
}
