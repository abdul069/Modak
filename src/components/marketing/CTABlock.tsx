import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

interface Props {
  variant?: "primary" | "secondary" | "b2b";
  title: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
}

export function CTABlock({
  variant = "primary",
  title,
  body,
  primaryCta = { label: "Vraag een offerte aan", href: "/offerte" },
  secondaryCta = { label: "Contacteer ons", href: "/contact" },
  className,
}: Props) {
  const isDark = variant !== "secondary";
  return (
    <section
      className={cn(
        "py-20 md:py-24",
        isDark ? "section-dark" : "bg-brand-bg-alt",
        className
      )}
    >
      <div className="container-page grid items-center gap-10 md:grid-cols-[1.5fr_1fr]">
        <div>
          <h2
            className={cn(
              "font-display uppercase leading-[1.05] text-3xl md:text-5xl",
              isDark ? "text-white" : "text-brand-ink"
            )}
          >
            {title}
          </h2>
          {body ? (
            <p
              className={cn(
                "mt-5 max-w-2xl text-base md:text-lg",
                isDark ? "text-white/80" : "text-brand-ink-soft"
              )}
            >
              {body}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col items-stretch gap-3 md:items-end">
          <Button asChild size="lg" variant={isDark ? "accent" : "primary"}>
            <Link href={primaryCta.href}>
              {primaryCta.label}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          {variant === "b2b" ? (
            <Button
              asChild
              size="lg"
              variant="invert"
              className="border border-white bg-transparent text-white hover:bg-white hover:text-brand-ink"
            >
              <Link href={siteConfig.contact.phoneHref}>
                <Phone className="size-4" />
                {siteConfig.contact.phone}
              </Link>
            </Button>
          ) : (
            <Button
              asChild
              size="lg"
              variant={isDark ? "invert" : "outline"}
              className={
                isDark
                  ? "border border-white bg-transparent text-white hover:bg-white hover:text-brand-ink"
                  : undefined
              }
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
