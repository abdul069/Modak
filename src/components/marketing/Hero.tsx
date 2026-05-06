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
      {isHome ? (
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          style={{
            backgroundImage:
              "radial-gradient(at 20% 20%, rgba(201,169,97,0.35), transparent 40%), radial-gradient(at 80% 70%, rgba(255,255,255,0.1), transparent 50%)",
          }}
        />
      ) : null}
      <div className="container-page relative grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-8">
          {eyebrow ? (
            <p
              className={cn(
                "mb-4 text-sm font-medium uppercase tracking-[0.18em]",
                isHome ? "text-brand-accent" : "text-brand-primary"
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={cn(
              "max-w-4xl font-display",
              isHome ? "text-white" : "text-brand-ink"
            )}
          >
            {title}
          </h1>
          {subtitle ? (
            <p
              className={cn(
                "mt-6 max-w-2xl text-lg md:text-xl",
                isHome ? "text-white/85" : "text-brand-ink-soft"
              )}
            >
              {subtitle}
            </p>
          ) : null}

          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-wrap items-center gap-3">
              {primaryCta ? (
                <Button
                  asChild
                  size="lg"
                  variant={isHome ? "accent" : "primary"}
                >
                  <Link href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowRight className="size-4" />
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
      </div>
    </section>
  );
}
