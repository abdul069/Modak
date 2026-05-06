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
        "rounded-xl px-6 py-12 md:px-12 md:py-16",
        isDark
          ? "bg-brand-primary text-white"
          : "bg-brand-bg-alt text-brand-ink",
        className
      )}
    >
      <div className="grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
        <div>
          <h2
            className={cn(
              "font-display",
              isDark ? "text-white" : "text-brand-ink"
            )}
          >
            {title}
          </h2>
          {body ? (
            <p
              className={cn(
                "mt-4 max-w-2xl text-base md:text-lg",
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
            <Button asChild size="lg" variant="invert">
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
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
