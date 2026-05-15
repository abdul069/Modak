import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type CTABlockProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CTABlock({
  eyebrow,
  title,
  body,
  primaryCta = { label: "Vraag offerte", href: "/offerte" },
  secondaryCta,
}: CTABlockProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--ink-deep)] py-20 text-white md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="mt-3 text-white">{title}</h2>
            {body ? <p className="mt-5 max-w-xl text-lg text-white/75">{body}</p> : null}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 font-medium text-ink transition-colors hover:bg-off-white"
              >
                {primaryCta.label}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 font-medium text-white transition-colors hover:bg-white/10"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
