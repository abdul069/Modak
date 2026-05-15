import Link from "next/link";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { DivisionGrid } from "@/components/marketing/DivisionGrid";
import { StatRow } from "@/components/marketing/StatRow";
import { PartnerMarquee } from "@/components/marketing/PartnerMarquee";
import { PhotoTile } from "@/components/marketing/PhotoTile";
import { CTABlock } from "@/components/marketing/CTABlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/seo";
import { getAllDivisions } from "@/lib/division";
import { siteConfig } from "@/lib/site";
import { companyPhotos, locationPhotos } from "@/content/stock-photos";

export default function HomePage() {
  const divisions = getAllDivisions();

  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      {/* ============ 1. HERO + DIVISION GRID ============ */}
      <section className="relative overflow-hidden bg-white pt-12 pb-20 md:pt-16 md:pb-28">
        <Container>
          <div className="mb-10 md:mb-14 md:max-w-3xl">
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--mute)" }}>
                AGNAU · Evergem · Vlaanderen
              </p>
              <h1 className="mt-3 text-[clamp(2.5rem,5vw+0.5rem,5rem)] leading-[0.95]">
                Eén partner. Zes specialiteiten.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate md:text-xl">
                Kies de divisie die past bij uw project. Eén formulier, één
                aanspreekpunt, eigen werfploegen voor elke discipline.
              </p>
            </Reveal>
          </div>

          <DivisionGrid />
        </Container>
      </section>

      {/* ============ 2. WIE IS AGNAU ============ */}
      <section className="bg-off-white py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <SectionHeader
                eyebrow="Over AGNAU"
                title="Een Vlaamse groep, gegroeid uit lokaal vakwerk."
              />
              <Reveal className="mt-8 grid gap-6 text-slate md:grid-cols-2">
                <p>
                  Al meer dan twintig jaar bouwen we vanuit Evergem aan
                  woningen, bedrijven en publieke projecten in Oost-Vlaanderen.
                  Wat begon als een lokale dakwerkenploeg, groeide uit tot een
                  groep met zes specialistische divisies — elk met eigen
                  werfleiders en vakmensen.
                </p>
                <p>
                  Vandaag opereren we vanuit een nieuwe showroom, een ruim
                  magazijn en een centraal bureel. We werken voor heel
                  Vlaanderen, maar de aanpak blijft lokaal: één projectleider
                  per klant, korte lijnen, geen onderaannemers waar het op
                  kerntechniek aankomt.
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <PhotoTile
                label="Showroom Evergem"
                aspect="tall"
                src={companyPhotos.showroomBig}
                alt="AGNAU showroom in Evergem"
              />
            </div>
          </div>

          <div className="mt-16 border-t border-line pt-12">
            <StatRow
              items={[
                { value: "20+", label: "Jaren ervaring" },
                { value: "6", label: "Specialistische divisies" },
                { value: "100%", label: "Eigen werfploegen" },
                { value: "10 jaar", label: "Uitvoeringsgarantie" },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* ============ 3. SHOWROOM & MAGAZIJN ============ */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow={`Showroom & magazijn · ${siteConfig.contact.address.street} · ${siteConfig.contact.address.city}`}
            title="Kom langs. Voel materialen. Zie hoe we werken."
            description="Onze showroom in Evergem toont realisaties, materialen en stalen van A-merken. Geen pushy verkoop — wel concrete antwoorden van mensen die elke dag op werven staan."
          />

          <Reveal className="mt-12 grid gap-4 md:grid-cols-12">
            <PhotoTile
              label="Showroom"
              aspect="wide"
              className="md:col-span-7"
              src={companyPhotos.showroomWide}
              alt="Showroom interieur AGNAU"
            />
            <PhotoTile
              label="Magazijn"
              aspect="square"
              className="md:col-span-5"
              src={companyPhotos.magazijn}
              alt="Magazijn van AGNAU"
            />
            <PhotoTile
              label="Team aan het werk"
              aspect="wide"
              className="md:col-span-5"
              src={companyPhotos.team3}
              alt="Vakmensen van AGNAU op een werf"
            />
            <div className="rounded-xl bg-off-white p-8 md:col-span-7">
              <p className="eyebrow mb-3" style={{ color: "var(--mute)" }}>
                Openingstijden
              </p>
              <ul className="space-y-2.5">
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
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild variant="ink" size="sm">
                  <Link href="/contact">
                    Plan een bezoek
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
                <p className="flex items-center gap-1.5 text-sm text-slate">
                  <MapPin className="size-4 text-mute" />
                  {siteConfig.contact.address.street},{" "}
                  {siteConfig.contact.address.postalCode}{" "}
                  {siteConfig.contact.address.city}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ 4. REALISATIES TEASER ============ */}
      <section className="bg-off-white py-20 md:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              eyebrow="Recente projecten"
              title="Werk dat voor zichzelf spreekt."
            />
            <Button asChild variant="outline" className="self-end">
              <Link href="/realisaties">
                Alle realisaties
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>

          <Reveal className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {divisions.map((d, i) => {
              const location = ["Gent", "Evergem", "Aalter", "Sint-Niklaas", "Drongen", "Lochristi"][i];
              const photo = locationPhotos[`${d.themeKey}-${location}`];
              return (
                <Link
                  key={d.slug}
                  href={`/realisaties?divisie=${d.slug}`}
                  data-division={d.themeKey}
                  className="group block"
                >
                  <PhotoTile
                    label={d.shortName}
                    aspect="square"
                    src={photo}
                    alt={`Realisatie ${d.name} in ${location}`}
                    gradient="linear-gradient(135deg, var(--accent) 0%, var(--accent-deep) 100%)"
                  />
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                        {d.name}
                      </p>
                      <p className="mt-1 font-display text-lg font-bold text-ink">
                        Project in {location}
                      </p>
                    </div>
                    <ArrowUpRight className="size-4 text-mute transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
                  </div>
                </Link>
              );
            })}
          </Reveal>
        </Container>
      </section>

      {/* ============ 5. PARTNERS ============ */}
      <section className="border-y border-line py-12">
        <Container className="mb-8 text-center">
          <p className="eyebrow" style={{ color: "var(--mute)" }}>
            Officieel erkend
          </p>
        </Container>
        <PartnerMarquee />
      </section>

      {/* ============ 6. PREMIES TEASER ============ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <SectionHeader
                eyebrow="Bespaar op uw investering"
                title="Tot €6.000 premie op uw energierenovatie."
                description="Mijn VerbouwPremie, Fluvius-premies, fiscale aftrek — wij rekenen het voor u uit en helpen u met de aanvraag. Geen administratie aan uw kant."
              />
              <div className="mt-8">
                <Button asChild variant="ink">
                  <Link href="/premies">
                    Bekijk alle premies
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <ul className="space-y-3 md:col-span-5">
              {[
                { amount: "€3.000", label: "Mijn VerbouwPremie warmtepomp" },
                { amount: "€1.500", label: "Premie dakisolatie sarking" },
                { amount: "€800", label: "Fluvius-premie zonneboiler" },
                { amount: "€500", label: "Premie laadpaal thuis" },
              ].map((p) => (
                <li
                  key={p.label}
                  className="flex items-center justify-between rounded-md border border-line bg-off-white px-5 py-4"
                >
                  <span className="text-sm text-slate">{p.label}</span>
                  <span className="font-display text-xl font-bold text-ink">
                    {p.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ============ 7. CTA ============ */}
      <CTABlock
        eyebrow="Klaar om te starten?"
        title="Eén partner. Eén planning. Eén oplevering."
        body="Vraag een vrijblijvende offerte aan of plan een bezoek aan onze showroom in Evergem. We bellen u binnen 24 uur terug."
        primaryCta={{ label: "Vraag offerte", href: "/offerte" }}
        secondaryCta={{ label: "Plan showroombezoek", href: "/contact" }}
      />
    </>
  );
}
