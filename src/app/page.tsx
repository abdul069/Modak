import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { DivisionGrid } from "@/components/marketing/DivisionGrid";
import { Logo } from "@/components/brand/Logo";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Eén partner. Zes specialiteiten.`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
};

export default function PortalPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      <main id="main" className="relative min-h-svh overflow-hidden bg-white">
        {/* top bar — minimal: logo only */}
        <header className="pointer-events-none absolute inset-x-0 top-0 z-10 px-5 pt-5 md:px-10 md:pt-8">
          <div className="pointer-events-auto inline-flex">
            <Logo />
          </div>
        </header>

        {/* hero copy + grid */}
        <section className="flex min-h-svh flex-col justify-center px-5 pb-32 pt-28 md:px-10 md:pb-40 md:pt-32">
          <div className="mx-auto w-full max-w-[1400px]">
            <div className="mb-8 max-w-3xl md:mb-12">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-mute">
                Evergem · Vlaanderen
              </p>
              <h1 className="mt-3 text-[clamp(2.25rem,5vw+0.5rem,4.5rem)] leading-[0.95]">
                Eén partner.<br />
                Zes specialiteiten.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate md:text-lg">
                Kies een divisie om verder te gaan. Elke divisie heeft een eigen ploeg,
                eigen werfleiding en een eigen offerte-traject.
              </p>
            </div>

            <DivisionGrid />
          </div>
        </section>

        {/* bottom bar — small contact strip */}
        <footer className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5 md:px-10 md:pb-6">
          <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-3 text-xs text-slate md:text-sm">
            <p>
              {siteConfig.contact.address.street},{" "}
              {siteConfig.contact.address.postalCode}{" "}
              {siteConfig.contact.address.city}
            </p>
            <div className="flex items-center gap-4">
              <a href={siteConfig.contact.phoneHref} className="inline-flex items-center gap-1.5 hover:text-ink">
                <PhoneCall className="size-3.5" />
                {siteConfig.contact.phone}
              </a>
              <Link href="/over-ons" className="hover:text-ink">Over AGNAU</Link>
              <Link href="/privacy" className="hover:text-ink">Privacy</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
