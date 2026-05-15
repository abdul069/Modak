import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { StatRow } from "@/components/marketing/StatRow";
import { PhotoTile } from "@/components/marketing/PhotoTile";
import { PartnerMarquee } from "@/components/marketing/PartnerMarquee";
import { CTABlock } from "@/components/marketing/CTABlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata, localBusinessSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { companyPhotos } from "@/content/stock-photos";

export const metadata: Metadata = buildMetadata({
  title: "Over ons — Vlaamse multidisciplinaire bouwgroep",
  description:
    "AGNAU is een Vlaamse multidisciplinaire bouwgroep met zes specialistische divisies. Showroom en magazijn in Evergem, eigen ploegen door heel Vlaanderen.",
  path: "/over-ons",
});

export default function OverOnsPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Over ons", url: "/over-ons" },
  ];

  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(breadcrumbs)]} />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Reveal>
                <p className="eyebrow" style={{ color: "var(--mute)" }}>Over AGNAU</p>
                <h1 className="mt-3">
                  Eén partner. Zes specialiteiten.<br />
                  <span className="text-mute">Honderd ambachten.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
                  AGNAU is een Vlaamse multidisciplinaire bouwgroep, gegroeid uit
                  twintig jaar lokaal vakwerk in Evergem. Vandaag opereren we
                  vanuit een nieuwe showroom, een ruim magazijn en een centraal
                  bureel — maar de aanpak blijft lokaal: korte lijnen, eigen ploegen
                  en één projectleider per klant.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="md:col-span-5">
              <PhotoTile
                label="Vestiging Evergem"
                aspect="square"
                src={companyPhotos.vestiging}
                alt="AGNAU vestiging in Evergem"
                priority
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-off-white py-20 md:py-28">
        <Container>
          <SectionHeader eyebrow="Onze cijfers" title="Twintig jaar bouwen, in feiten." />
          <div className="mt-12">
            <StatRow
              items={[
                { value: "20+", label: "Jaren ervaring" },
                { value: "50+", label: "Vakmensen in dienst" },
                { value: "6", label: "Specialistische divisies" },
                { value: "1.500+", label: "Opgeleverde projecten" },
              ]}
            />
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <Reveal className="md:col-span-5">
              <PhotoTile
                label="Showroom"
                aspect="tall"
                src={companyPhotos.showroomBig}
                alt="AGNAU showroom interieur"
              />
            </Reveal>

            <div className="md:col-span-7">
              <SectionHeader
                eyebrow="Onze vestiging"
                title="Showroom, magazijn en bureel — onder één dak."
                description="In Evergem combineren we klantontvangst, magazijn en projectleiding. Geen verhuisde verkooppraktijken: bij ons spreken vakmensen direct met klanten."
              />
              <ul className="mt-8 space-y-3 text-sm text-slate">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 text-accent" />
                  <span>
                    {siteConfig.contact.address.street},{" "}
                    {siteConfig.contact.address.postalCode}{" "}
                    {siteConfig.contact.address.city}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 text-accent" />
                  <a href={siteConfig.contact.phoneHref} className="hover:text-ink">
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 text-accent" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-ink">
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>

              <ul className="mt-8 space-y-2">
                {siteConfig.contact.openingHours.map((oh) => (
                  <li
                    key={oh.day}
                    className="flex items-center justify-between gap-4 border-b border-line py-2 text-sm last:border-0"
                  >
                    <span className="flex items-center gap-2 text-ink">
                      <Clock className="size-4 text-mute" />
                      {oh.day}
                    </span>
                    <span className="font-mono text-slate">{oh.hours}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="ink">
                  <Link href="/contact">
                    Plan een bezoek
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/offerte">Vraag offerte</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-off-white py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Hoe we werken"
            title="Onze principes."
            description="Geen marketingbeloftes, wel de manier waarop we elke werf benaderen."
          />

          <Reveal className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Eigen vakmensen",
                body: "Voor kerntechniek werken we met eigen ploegen. Onderaanneming alleen voor specialiteiten waar we het zelf niet doen.",
              },
              {
                title: "Eén projectleider",
                body: "U heeft één contactpersoon van plaatsbezoek tot oplevering. Geen jongleren tussen vakmensen.",
              },
              {
                title: "Vaste prijs",
                body: "Na het plaatsbezoek bezorgen we een gedetailleerde offerte met vaste prijzen per post. Meerwerk enkel met uw akkoord.",
              },
              {
                title: "Lokale aanwezigheid",
                body: "Vanuit Evergem werken we in heel Vlaanderen — maar steeds met korte rijtijden en goede kennis van de regio.",
              },
              {
                title: "Tien jaar garantie",
                body: "Op alle uitgevoerde werken — conform de wettelijke tienjarige aansprakelijkheid op bouwwerken.",
              },
              {
                title: "Geen verkoperspraat",
                body: "Onze projectleiders zijn vakmensen, geen verkopers. Eerlijk advies, ook als dat betekent dat we afraden.",
              },
            ].map((p) => (
              <article key={p.title} className="rounded-xl border border-line bg-white p-6">
                <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{p.body}</p>
              </article>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-line py-12">
        <Container className="mb-8 text-center">
          <p className="eyebrow" style={{ color: "var(--mute)" }}>
            Officieel erkend
          </p>
        </Container>
        <PartnerMarquee />
      </section>

      <CTABlock
        eyebrow="Klaar om samen te werken?"
        title="Laat ons uw project bespreken."
        body="Vraag een vrijblijvende offerte aan of plan een bezoek aan onze showroom. We bellen u binnen 24 uur terug."
        primaryCta={{ label: "Vraag offerte", href: "/offerte" }}
        secondaryCta={{ label: "Plan showroombezoek", href: "/contact" }}
      />
    </>
  );
}
