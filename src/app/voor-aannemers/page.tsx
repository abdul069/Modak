import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { Hero } from "@/components/marketing/Hero";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { CertificateBadges } from "@/components/marketing/CertificateBadges";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Voor aannemers en architecten",
  description:
    "AGNAU is uw VCA-gecertificeerde onderaannemer voor sanitair, verwarming, ventilatie en haustechniek. Geen verrassingen op uw werf.",
  path: "/voor-aannemers",
});

export default function VoorAannemersPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Voor aannemers", url: "/voor-aannemers" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <Hero
        eyebrow="B2B"
        title="Onderaannemer voor uw project — VCA-gecertificeerd."
        subtitle="Een betrouwbare technische partij die de planning haalt, de attesten op tijd levert, en geen werfvergaderingen mist."
        secondaryCta={{
          label: "Bekijk certificaten",
          href: "#certificaten",
        }}
      />

      <div className="container-page py-12">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Wat we voor B2B doen */}
      <section className="container-page pb-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Wat we voor u doen"
              title="Technische uitvoering, planningsdiscipline, en correcte papieren."
            />
            <p className="mt-6 text-brand-ink-soft">
              Voor architecten, hoofdaannemers en projectontwikkelaars treedt
              AGNAU op als technische onderaannemer. We nemen sanitair,
              verwarming, ventilatie en warmtepompinstallaties op ons —
              meestal in pakket, soms als losse discipline.
            </p>
            <ul className="mt-8 space-y-3 text-brand-ink">
              {[
                "Sanitair en verwarming voor nieuwbouwprojecten",
                "Warmtepompinstallaties met RESCert-attest",
                "Ventilatiesystemen met EPB-meetrapport",
                "Volledige haustechniek voor turnkey-renovaties",
                "Onderhoud na oplevering (optioneel SLA)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-xl border border-brand-line bg-brand-primary p-8 text-white">
            <h3 className="font-display text-xl text-white">Liever bellen?</h3>
            <p className="mt-2 text-white/80">
              B2B-projecten bespreken we het liefst telefonisch. Snel een
              fit-check zonder formulier.
            </p>
            <div className="mt-6 space-y-3">
              <Button asChild variant="accent" className="w-full">
                <Link href={siteConfig.contact.phoneHref}>
                  <Phone className="size-4" />
                  {siteConfig.contact.phone}
                </Link>
              </Button>
              <Button asChild variant="invert" className="w-full">
                <Link href={`mailto:${siteConfig.contact.email}`}>
                  <Mail className="size-4" />
                  {siteConfig.contact.email}
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Bereikbaar op werkdagen 8:00 - 17:00. Buiten kantooruren mogen u
              ons gerust mailen.
            </p>
          </aside>
        </div>
      </section>

      {/* Werfgaranties */}
      <section className="bg-brand-bg-alt/50 py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Werfgaranties"
            title="Wat u van ons mag verwachten."
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Strakke planning",
                body: "Wij nemen onze data ernstig. Aangekondigde startdata worden gerespecteerd, vertragingen worden vooraf gecommuniceerd.",
              },
              {
                title: "Volledige attesten",
                body: "RESCert, F-gas, EPB-ventilatie, drukproeven — alle wettelijke attesten in één pakket bij oplevering.",
              },
              {
                title: "Schone opleveringen",
                body: "Geen versplinterde mantels of half-afgewerkt isolatiewerk. Wat wij opleveren, is afgewerkt.",
              },
            ].map((g) => (
              <li
                key={g.title}
                className="rounded-lg border border-brand-line bg-white p-6"
              >
                <h3 className="font-display text-lg text-brand-ink">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm text-brand-ink-soft">{g.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Referentieprojecten B2B */}
      <section className="container-page py-20">
        <SectionHeader
          eyebrow="Referentieprojecten"
          title="Een greep uit onze B2B-samenwerkingen."
          description="TODO: vervang door 3-5 echte referentieprojecten met logo's of namen na akkoord van de hoofdaannemers."
        />
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Nieuwbouw appartementen Gent-Centrum", desc: "Sanitair en verwarming voor 24 wooneenheden, hoofdaannemer TODO." },
            { title: "Renovatie kantoorpand Sint-Martens-Latem", desc: "Volledige haustechniek voor turnkey kantooromgeving 1.200 m²." },
            { title: "Architecturaal villa-project", desc: "Geothermische warmtepomp + ventilatie systeem D voor villa van 380 m²." },
          ].map((ref) => (
            <li
              key={ref.title}
              className="rounded-lg border border-brand-line bg-white p-6"
            >
              <h3 className="font-display text-lg text-brand-ink">
                {ref.title}
              </h3>
              <p className="mt-2 text-sm text-brand-ink-soft">{ref.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Certificaten */}
      <section
        id="certificaten"
        className="bg-brand-bg-alt/50 py-20"
      >
        <div className="container-page">
          <SectionHeader
            eyebrow="Certificeringen"
            title="Erkenningen die uw werf beschermen."
          />
          <div className="mt-10">
            <CertificateBadges />
          </div>
        </div>
      </section>

      {/* Contact direct */}
      <section className="container-page py-20">
        <div className="rounded-xl border border-brand-primary bg-brand-primary p-8 text-white md:p-12">
          <SectionHeader
            eyebrow="Direct contact"
            title="Een werf op de planning?"
            description="B2B-vragen pakken we het snelst telefonisch op. We horen u graag."
            className="text-white [&_h2]:text-white [&_p]:text-white/80 [&_p:first-child]:text-brand-accent"
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Button asChild size="lg" variant="accent">
              <Link href={siteConfig.contact.phoneHref}>
                <Phone className="size-4" />
                Bel {siteConfig.contact.phone}
              </Link>
            </Button>
            <Button asChild size="lg" variant="invert">
              <Link href={`mailto:${siteConfig.contact.email}`}>
                <Mail className="size-4" />
                {siteConfig.contact.email}
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/65">
            TODO: vervang voornaam zaakvoerder + direct doorkiesnummer voor
            sneller B2B-contact.
          </p>
        </div>
      </section>
    </>
  );
}
