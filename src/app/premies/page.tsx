import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeEuro,
  Check,
  ExternalLink,
  Info,
  Wallet,
} from "lucide-react";
import { Hero } from "@/components/marketing/Hero";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { CTABlock } from "@/components/marketing/CTABlock";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Premies & subsidies",
  description:
    "Actuele premiebedragen van Mijn VerbouwPremie voor warmtepomp, dakisolatie, ventilatie en zonneboiler. AGNAU regelt het volledige premiedossier.",
  path: "/premies",
});

const lastUpdated = "mei 2026";

interface PremieRow {
  label: string;
  cat3and4: string;
  cat1and2: string;
  note?: string;
}

interface Premie {
  slug: string;
  title: string;
  intro: string;
  rows: PremieRow[];
  conditions: string[];
  serviceLink?: { label: string; href: string };
  available: "all" | "cat3and4-only";
}

const premies: Premie[] = [
  {
    slug: "warmtepomp",
    title: "Warmtepomp",
    intro:
      "Beschikbaar voor alle inkomenscategorieën. Vereist een RESCert-gecertificeerde installateur — wij zijn dat sinds 2014.",
    rows: [
      { label: "Lucht-water warmtepomp", cat3and4: "€ 1.500", cat1and2: "€ 1.500" },
      { label: "Geothermische warmtepomp", cat3and4: "€ 4.000", cat1and2: "€ 4.000" },
      { label: "Hybride warmtepomp", cat3and4: "€ 800", cat1and2: "€ 800" },
      { label: "Lucht-lucht warmtepomp", cat3and4: "€ 300", cat1and2: "€ 300" },
      { label: "Warmtepompboiler", cat3and4: "€ 450", cat1and2: "€ 450" },
    ],
    conditions: [
      "Plaatsing door RESCert-gecertificeerde installateur",
      "Productlabel A+ of beter (lucht-water, lucht-lucht, warmtepompboiler)",
      "Productlabel A++ of beter voor geothermische warmtepomp",
      "Hybride lucht-water: pakketlabel met seizoensrendement Ns ≥ 110%",
      "Cat 1: maximaal 20% van factuurbedrag (excl. btw)",
      "Cat 2: maximaal 25% van factuurbedrag (excl. btw)",
      "Cat 3 & 4: hogere plafonds — exact bedrag berekenen we voor je situatie",
    ],
    serviceLink: { label: "Bekijk dienst Warmtepompen", href: "/diensten/warmtepompen" },
    available: "all",
  },
  {
    slug: "dakisolatie",
    title: "Dak- en zoldervloerisolatie",
    intro:
      "Sinds 1 maart 2026 enkel beschikbaar voor inkomenscategorie 3 en 4. Hoge inkomens (cat 1 & 2) krijgen geen premie meer voor isolatie.",
    rows: [
      { label: "Dakisolatie (per m²)", cat3and4: "€ 6 – € 22", cat1and2: "—" },
      { label: "Maximumbedrag (cat 4)", cat3and4: "tot € 5.750", cat1and2: "—" },
      { label: "Maximumpercentage (cat 4)", cat3and4: "tot 50% factuur", cat1and2: "—" },
    ],
    conditions: [
      "Rd-waarde ≥ 4,5 m²K/W voor dak- of zoldervloerisolatie",
      "Plaatsing door geregistreerd aannemer",
      "Bedrag per m² hangt af van de inkomenscategorie",
      "Sinds 1 maart 2026: niet meer beschikbaar voor cat 1 & 2",
    ],
    serviceLink: { label: "Bekijk dienst Dakisolatie", href: "/diensten/dakisolatie" },
    available: "cat3and4-only",
  },
  {
    slug: "ventilatie",
    title: "Ventilatiesysteem D",
    intro:
      "Premie voor balansventilatie met warmterecuperatie. Sinds 1 maart 2026 enkel voor cat 3 en 4.",
    rows: [
      { label: "Systeem D met warmterecuperatie", cat3and4: "tot € 1.600", cat1and2: "—" },
    ],
    conditions: [
      "Plaatsing met EPB-meetrapport (verplicht)",
      "Minimaal rendement warmterecuperatie volgens EPB-norm",
      "Plaatsing door geregistreerd aannemer",
      "Sinds 1 maart 2026: niet meer beschikbaar voor cat 1 & 2",
    ],
    serviceLink: { label: "Bekijk dienst Ventilatie", href: "/diensten/ventilatie" },
    available: "cat3and4-only",
  },
  {
    slug: "zonneboiler",
    title: "Zonneboiler",
    intro:
      "Premie voor sanitair warm water op zonne-energie. Sinds 1 maart 2026 enkel voor cat 3 en 4.",
    rows: [
      { label: "Zonneboiler", cat3and4: "tot € 1.750", cat1and2: "—" },
    ],
    conditions: [
      "Minimum apertuuroppervlakte volgens EPB-norm",
      "Plaatsing door RESCert-gecertificeerde installateur",
      "Sinds 1 maart 2026: niet meer beschikbaar voor cat 1 & 2",
    ],
    available: "cat3and4-only",
  },
];

const incomeBands = [
  {
    cat: "Cat 1 & 2",
    label: "Hoog inkomen",
    detail:
      "Alleenstaande > € 42.340 bruto/jaar of koppel > € 59.270. Vanaf 1 maart 2026 enkel nog premie voor warmtepomp en warmtepompboiler.",
  },
  {
    cat: "Cat 3",
    label: "Middeninkomen",
    detail:
      "Toegang tot alle premies (isolatie, ventilatie, ramen, dak, warmtepomp, zonneboiler).",
  },
  {
    cat: "Cat 4",
    label: "Laag inkomen",
    detail:
      "Hoogste premiebedragen, tot 50% van het factuurbedrag voor isolatie en grondige werken.",
  },
];

const faqs = [
  {
    q: "Wie kan Mijn VerbouwPremie aanvragen?",
    a: "Eigenaar-bewoners, verhuurders aan een sociaal verhuurkantoor, en (in beperkte mate) niet-bewonende eigenaars. Ondernemingen voor woningen die ze verhuren als hoofdverblijfplaats kunnen ook in aanmerking komen.",
  },
  {
    q: "Wanneer dien ik de premie in?",
    a: "Binnen de 24 maanden na de eindfactuur, via mijnverbouwpremie.be. Wij bezorgen alle attesten (RESCert, EPB, drukproef) zodat het dossier in één keer rond is.",
  },
  {
    q: "Kan ik premies combineren?",
    a: "Ja. Je kan binnen 5 jaar meerdere werken indienen via Mijn VerbouwPremie. Een totaalrenovatie waarbij we dak, isolatie, warmtepomp en ventilatie combineren, levert dus meerdere premies op.",
  },
  {
    q: "Hoe weet ik in welke inkomenscategorie ik val?",
    a: "Op basis van het belastbaar inkomen van 3 jaar geleden. Bij twijfel kun je het via de simulator op mijnverbouwpremie.be checken — wij helpen je tijdens het offertegesprek.",
  },
  {
    q: "Wat als ik de premie net misloop omdat ik in cat 1 of 2 zit?",
    a: "Sinds maart 2026 zijn de federale belastingvermindering voor energiebesparende werken en de Mijn VerbouwLening (renteloos krediet tot € 60.000) vaak nog interessanter. We bekijken het samen.",
  },
  {
    q: "Garanderen jullie de premie?",
    a: "We garanderen dat ons werk aan álle technische voorwaarden voldoet en dat je de attesten correct krijgt. De uiteindelijke toekenning gebeurt door de Vlaamse overheid.",
  },
];

export default function PremiesPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Premies", url: "/premies" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <Hero
        eyebrow="Premies & subsidies"
        title="Wat de Vlaamse overheid bijdraagt aan jouw renovatie."
        subtitle="Een overzicht van de actuele bedragen van Mijn VerbouwPremie. AGNAU verzorgt het volledige premiedossier voor je."
        primaryCta={{ label: "Vraag een offerte met premieberekening", href: "/offerte" }}
        secondaryCta={{ label: "Bekijk diensten", href: "/diensten" }}
      />

      <div className="container-page py-12">
        <Breadcrumbs items={breadcrumbs} />

        <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 md:p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-700" />
            <div>
              <p className="font-medium text-amber-900">
                Belangrijke wijziging sinds 1 maart 2026
              </p>
              <p className="mt-1 text-sm text-amber-900/85">
                Eigenaar-bewoners in inkomenscategorie 1 en 2 (hoog inkomen)
                komen niet meer in aanmerking voor isolatie-, ventilatie- of
                renovatiepremies. Voor hen blijven enkel premies voor
                warmtepomp en warmtepompboiler beschikbaar. Voor cat 3 en 4
                blijft alles ongewijzigd.
              </p>
              <p className="mt-2 text-xs text-amber-900/70">
                Bron: Mijn VerbouwPremie · laatst bijgewerkt {lastUpdated}.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Income bands */}
      <section className="container-page pb-12">
        <SectionHeader
          eyebrow="Inkomenscategorieën"
          title="Welke premie krijg jij?"
          description="Mijn VerbouwPremie werkt met vier inkomenscategorieën. Hoe lager het inkomen, hoe hoger de premie."
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {incomeBands.map((b) => (
            <li
              key={b.cat}
              className="rounded-lg border border-brand-line bg-white p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
                {b.cat}
              </p>
              <h3 className="mt-1 font-display text-xl text-brand-ink">
                {b.label}
              </h3>
              <p className="mt-2 text-sm text-brand-ink-soft">{b.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Premies per category */}
      <section className="bg-brand-bg-alt/50 py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Per type werk"
            title="Wat krijg je per discipline?"
            description="Bedragen volgens Mijn VerbouwPremie, geldig vanaf maart 2026. Voor jouw exacte premie rekenen we het door tijdens het plaatsbezoek."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {premies.map((p) => (
              <article
                key={p.slug}
                id={p.slug}
                className="rounded-xl border border-brand-line bg-white p-6 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl text-brand-ink">
                      {p.title}
                    </h3>
                    {p.available === "cat3and4-only" ? (
                      <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-amber-700">
                        <Info className="size-3.5" />
                        Sinds maart 2026 enkel cat 3 & 4
                      </p>
                    ) : (
                      <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-emerald-700">
                        <Check className="size-3.5" />
                        Voor alle inkomenscategorieën
                      </p>
                    )}
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-brand-accent/15 text-brand-accent-dark">
                    <BadgeEuro className="size-5" />
                  </span>
                </div>

                <p className="mt-3 text-sm text-brand-ink-soft">{p.intro}</p>

                <div className="mt-5 overflow-hidden rounded-md border border-brand-line">
                  <table className="w-full text-sm">
                    <thead className="bg-brand-bg-alt/70 text-left text-xs uppercase tracking-wider text-brand-ink-soft">
                      <tr>
                        <th className="px-3 py-2 font-medium">Type</th>
                        <th className="px-3 py-2 font-medium">Cat 3 & 4</th>
                        <th className="px-3 py-2 font-medium">Cat 1 & 2</th>
                      </tr>
                    </thead>
                    <tbody>
                      {p.rows.map((row, i) => (
                        <tr
                          key={i}
                          className="border-t border-brand-line text-brand-ink"
                        >
                          <td className="px-3 py-2.5">{row.label}</td>
                          <td className="px-3 py-2.5 font-medium text-brand-primary">
                            {row.cat3and4}
                          </td>
                          <td className="px-3 py-2.5 font-medium text-brand-ink-soft">
                            {row.cat1and2}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <details className="group mt-4">
                  <summary className="cursor-pointer text-sm font-medium text-brand-primary hover:underline">
                    Voorwaarden bekijken
                  </summary>
                  <ul className="mt-3 space-y-1.5 text-sm text-brand-ink-soft">
                    {p.conditions.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand-primary" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </details>

                {p.serviceLink ? (
                  <Link
                    href={p.serviceLink.href}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:underline"
                  >
                    {p.serviceLink.label}
                    <ArrowRight className="size-4" />
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Aanvullende ondersteuning */}
      <section className="container-page py-20">
        <SectionHeader
          eyebrow="Naast Mijn VerbouwPremie"
          title="Aanvullende ondersteuning."
          description="Voor wie geen of minder premie krijgt, zijn er nog andere financiële instrumenten."
        />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          <li className="rounded-lg border border-brand-line bg-white p-6">
            <Wallet className="size-5 text-brand-primary" />
            <h3 className="mt-3 font-display text-lg text-brand-ink">
              Mijn VerbouwLening
            </h3>
            <p className="mt-2 text-sm text-brand-ink-soft">
              Renteloze lening tot € 60.000 voor energiebesparende werken.
              Combineerbaar met de premie.
            </p>
          </li>
          <li className="rounded-lg border border-brand-line bg-white p-6">
            <Wallet className="size-5 text-brand-primary" />
            <h3 className="mt-3 font-display text-lg text-brand-ink">
              EPC-labelpremie
            </h3>
            <p className="mt-2 text-sm text-brand-ink-soft">
              Extra premie wanneer je woning binnen 5 jaar na aankoop minstens
              3 EPC-labels stijgt. Bedrag tot € 5.000.
            </p>
          </li>
          <li className="rounded-lg border border-brand-line bg-white p-6">
            <Wallet className="size-5 text-brand-primary" />
            <h3 className="mt-3 font-display text-lg text-brand-ink">
              Verlaagd btw-tarief 6%
            </h3>
            <p className="mt-2 text-sm text-brand-ink-soft">
              Voor renovatiewerken aan woningen ouder dan 10 jaar geldt vaak
              het verlaagd btw-tarief — ongeacht inkomenscategorie.
            </p>
          </li>
        </ul>
      </section>

      {/* Hoe AGNAU helpt */}
      <section className="bg-brand-primary py-20 text-white">
        <div className="container-page">
          <SectionHeader
            eyebrow="Premiedossier"
            title="Wij regelen het volledige dossier."
            description="Geen formulieren, geen attesten najagen. Wij bezorgen alles, jij ondertekent."
            className="text-white [&_h2]:text-white [&_p]:text-white/80 [&_p:first-child]:text-brand-accent"
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              {
                t: "Berekening voorafgaand",
                b: "We rekenen tijdens het plaatsbezoek je actuele premiebedrag door.",
              },
              {
                t: "Correcte uitvoering",
                b: "We voldoen aan alle technische voorwaarden (RESCert, U-waarde, EPB).",
              },
              {
                t: "Attesten verzameld",
                b: "Je krijgt na oplevering een dossier met alle nodige attesten.",
              },
              {
                t: "Indiening Mijn VerbouwPremie",
                b: "Optioneel: wij dienen het dossier in voor je via mijnverbouwpremie.be.",
              },
            ].map((step, i) => (
              <li
                key={step.t}
                className="rounded-lg border border-white/15 bg-white/5 p-6"
              >
                <span className="font-display text-3xl text-brand-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg text-white">
                  {step.t}
                </h3>
                <p className="mt-2 text-sm text-white/80">{step.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader
            eyebrow="Veelgestelde vragen"
            title="Antwoorden over premies."
            description="Mist je iets? Stel je vraag gerust via het contactformulier."
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Disclaimer + bron */}
      <section className="container-page pb-16">
        <div className="rounded-lg border border-brand-line bg-brand-bg-alt/50 p-6 text-sm text-brand-ink-soft">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 size-4 shrink-0 text-brand-primary" />
            <div>
              <p>
                Bedragen en voorwaarden gebaseerd op Mijn VerbouwPremie,
                geldig vanaf maart 2026. Premies wijzigen regelmatig — voor
                jouw exacte situatie rekenen we het door tijdens het
                plaatsbezoek.
              </p>
              <p className="mt-2">
                Volledige info en simulator op{" "}
                <a
                  href="https://www.mijnverbouwpremie.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 text-brand-primary underline-offset-2 hover:underline"
                >
                  mijnverbouwpremie.be
                  <ExternalLink className="size-3.5" />
                </a>{" "}
                en{" "}
                <a
                  href="https://www.vlaanderen.be/mijn-verbouwpremie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 text-brand-primary underline-offset-2 hover:underline"
                >
                  vlaanderen.be
                  <ExternalLink className="size-3.5" />
                </a>
                .
              </p>
              <p className="mt-2 text-xs">
                Laatst bijgewerkt: {lastUpdated}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-20">
        <CTABlock
          title="Klaar om te weten wat jouw renovatie écht kost?"
          body="Vraag een offerte aan en we bezorgen er een onderbouwde premieberekening bij. Geen verkooppraat, gewoon de cijfers."
        />
      </section>
    </>
  );
}
