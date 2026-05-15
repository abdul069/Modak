import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, PhoneCall, Mail, ShieldCheck, Clock, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { DivisionIcon } from "@/components/brand/DivisionIcon";
import { CTABlock } from "@/components/marketing/CTABlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { getAllDivisions } from "@/lib/division";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Vraag offerte aan — kies uw divisie",
  description:
    "Vraag een vrijblijvende offerte aan bij AGNAU. Kies eerst uw divisie — we stellen dan gerichte vragen voor uw project.",
  path: "/offerte",
});

export default function OffertePage() {
  const divisions = getAllDivisions();
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Offerte", url: "/offerte" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--mute)" }}>Vraag offerte aan</p>
            <h1 className="mt-3">Voor welke divisie?</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
              Elke divisie heeft eigen vragen die we vooraf willen weten. Kies de
              juiste tegel en we leiden u naar een formulier dat past bij uw project.
            </p>
          </Reveal>

          <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {divisions.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/${d.slug}#offerte`}
                  data-division={d.themeKey}
                  className="group relative block h-full overflow-hidden rounded-xl bg-accent p-6 text-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid size-10 place-items-center rounded-md bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <DivisionIcon iconKey={d.iconKey} className="size-5 text-white" />
                    </span>
                    <ArrowUpRight className="size-5 text-white/70 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                  </div>
                  <h3 className="mt-10 font-display text-xl font-bold text-white">{d.name}</h3>
                  <p className="mt-2 text-sm text-white/85">{d.tagline}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-off-white py-16">
        <Container>
          <Reveal className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-line bg-white p-6">
              <span className="grid size-10 place-items-center rounded-md bg-ink text-white">
                <Clock className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-base font-bold text-ink">Antwoord binnen 24 uur</h3>
              <p className="mt-2 text-sm text-slate">
                Een projectleider belt u terug om de aanvraag te bespreken en een plaatsbezoek te plannen.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-6">
              <span className="grid size-10 place-items-center rounded-md bg-ink text-white">
                <Wrench className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-base font-bold text-ink">Vakman, geen verkoper</h3>
              <p className="mt-2 text-sm text-slate">
                Onze projectleiders komen uit het vak. Eerlijk advies, ook als dat betekent dat we afraden.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-6">
              <span className="grid size-10 place-items-center rounded-md bg-ink text-white">
                <ShieldCheck className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-base font-bold text-ink">Vrijblijvend</h3>
              <p className="mt-2 text-sm text-slate">
                Onze offertes zijn altijd vrijblijvend. U beslist op uw eigen tempo, zonder druk.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container size="narrow">
          <div className="grid items-center gap-8 rounded-xl border border-line bg-white p-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="eyebrow" style={{ color: "var(--mute)" }}>Liever direct contact?</p>
              <h2 className="mt-3 text-2xl">Bel of mail ons direct.</h2>
              <p className="mt-3 text-sm text-slate">
                Twijfelt u welke divisie u nodig heeft? We helpen u graag aan de telefoon.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-white hover:bg-[var(--ink-deep)]"
              >
                <PhoneCall className="size-4" />
                {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium text-ink hover:border-ink"
              >
                <Mail className="size-4" />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <CTABlock
        title="Niet zeker welke divisie?"
        body="Stuur een vrij bericht via ons contactformulier. We loodsen u door."
        primaryCta={{ label: "Naar contact", href: "/contact" }}
      />
    </>
  );
}
