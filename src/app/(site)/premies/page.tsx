import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { CTABlock } from "@/components/marketing/CTABlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { premies } from "@/content/premies";
import { divisions } from "@/content/divisions";

export const metadata: Metadata = buildMetadata({
  title: "Premies 2026 — Vlaamse en federale renovatiepremies",
  description:
    "Overzicht van alle premies voor uw renovatie in 2026: Mijn VerbouwPremie, Fluvius, federale 6% btw. We berekenen ze voor uw project.",
  path: "/premies",
});

const SOURCE_LABEL: Record<string, { label: string; color: string }> = {
  vlaams: { label: "Vlaamse premie", color: "#E8A93A" },
  federaal: { label: "Federale premie", color: "#1A1F2E" },
  fluvius: { label: "Fluvius", color: "#00A4D6" },
};

export default function PremiesPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Premies", url: "/premies" },
  ];

  const totalMax = "€8.000+";

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-end gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <p className="eyebrow" style={{ color: "var(--mute)" }}>Premies 2026</p>
              <h1 className="mt-3">Bespaar tot {totalMax} op uw renovatie.</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
                Vlaamse, federale en Fluvius-premies — vaak combineerbaar. Wij rekenen
                het voor uw concrete project uit en regelen de aanvraag.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-xl bg-off-white p-6 md:col-span-5">
              <span className="inline-flex size-10 items-center justify-center rounded-md bg-ink text-white">
                <Sparkles className="size-5" />
              </span>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                Premies zijn vaak gebonden aan technische voorwaarden (R-waarde,
                RESCert-installatie, ouderdom woning). We adviseren u eerlijk over
                wat haalbaar is.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeader eyebrow="Beschikbare premies" title="Wat staat er op tafel in 2026?" />

          <RevealStagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {premies.map((p) => {
              const source = SOURCE_LABEL[p.source];
              const division = p.category !== "algemeen" ? divisions[p.category] : null;
              return (
                <RevealItem key={p.id}>
                  <article
                    className="flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-shadow hover:shadow-md"
                    {...(division ? { "data-division": division.themeKey } : {})}
                  >
                    <div className="flex items-center gap-2 text-xs">
                      <span
                        className="rounded-full px-2.5 py-1 font-mono uppercase tracking-[0.12em] text-white"
                        style={{ background: source.color }}
                      >
                        {source.label}
                      </span>
                      {division ? (
                        <span className="rounded-full bg-accent-soft px-2.5 py-1 font-mono uppercase tracking-[0.12em] text-accent-deep">
                          {division.shortName}
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-4 font-display text-lg font-bold text-ink">
                      {p.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                      {p.description}
                    </p>

                    <div className="mt-5 flex items-baseline justify-between border-t border-line pt-4">
                      <span className="text-xs uppercase tracking-wider text-mute">Bedrag</span>
                      <span className="font-display text-xl font-bold text-ink">
                        {p.amount}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-1.5 text-xs text-slate">
                      {p.conditions.map((c) => (
                        <li key={c} className="flex items-start gap-2">
                          <span className="mt-1.5 size-1 shrink-0 rounded-full bg-mute" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </article>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </Container>
      </section>

      <section className="bg-off-white py-16 md:py-20">
        <Container>
          <Reveal className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <p className="eyebrow" style={{ color: "var(--mute)" }}>Hulp bij aanvraag</p>
              <h2 className="mt-3">Wij dienen de aanvragen voor u in.</h2>
              <p className="mt-4 max-w-xl text-slate">
                We bundelen facturen, attesten en EPB-documenten. U tekent één keer, wij regelen de rest.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="ink">
                  <Link href="/offerte">
                    Vraag offerte met premie-berekening
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:col-span-5">
              <ul className="space-y-3 text-sm">
                {[
                  "We controleren of uw woning voldoet aan de voorwaarden",
                  "We installeren conform technische eisen (RESCert, R-waarden)",
                  "We bezorgen alle attesten en EPB-bewijzen",
                  "We dienen de premie-aanvraag namens u in",
                ].map((step) => (
                  <li key={step} className="flex items-start gap-3 rounded-md border border-line bg-white p-4">
                    <span className="size-1.5 mt-2 rounded-full bg-ink" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTABlock
        title="Wat krijgt u terug op uw project?"
        body="Vraag een vrijblijvende offerte aan met inbegrepen premie-berekening. We laten zien wat u netto investeert."
        primaryCta={{ label: "Vraag offerte", href: "/offerte" }}
        secondaryCta={{ label: "Bekijk divisies", href: "/" }}
      />
    </>
  );
}
