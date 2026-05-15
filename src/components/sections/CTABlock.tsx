import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface CTABlockProps {
  eyebrow?: string;
  title?: string;
  body?: string;
}

export function CTABlock({
  eyebrow = "Klaar om te starten",
  title = "Klaar om uw renovatie eindelijk te beginnen?",
  body = "We komen langs, luisteren, en bezorgen een onderbouwde offerte. Vrijblijvend, zonder verkoperspraat.",
}: CTABlockProps) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal py-24 text-bone md:py-32">
      {/* Subtle radial wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(at 20% 80%, rgba(196,168,138,0.18), transparent 50%), radial-gradient(at 80% 20%, rgba(160,78,42,0.10), transparent 50%)",
        }}
      />
      <div className="container-content relative">
        <Eyebrow invert rule>{eyebrow}</Eyebrow>
        <h2
          className="mt-8 max-w-4xl font-display leading-[1.02] text-bone"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4.6rem)", letterSpacing: "-0.02em" }}
        >
          {title}
        </h2>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-bone/75 md:text-lg">
          {body}
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <Link href="/offerte">
              Vraag een offerte
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="invert" size="lg">
            <Link href="/contact">
              Contacteer ons
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
