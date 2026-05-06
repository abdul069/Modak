import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Hero } from "@/components/marketing/Hero";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbSchema,
  buildMetadata,
  localBusinessSchema,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contacteer Modak voor renovatie, warmtepompen, ventilatie en alle diensten. Telefoon, e-mail of via het formulier.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ];
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(breadcrumbs)]} />
      <Hero
        eyebrow="Contact"
        title="Een gesprek kost niets — een verkeerde keuze achteraf wel."
        subtitle="Stel uw vraag, plan een plaatsbezoek of laat ons gewoon weten waar u over nadenkt. We reageren binnen één werkdag."
      />

      <section className="container-page py-16 md:py-20">
        <Breadcrumbs items={breadcrumbs} />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <aside className="space-y-8">
            <div>
              <h2 className="font-display text-2xl text-brand-ink">
                Direct contact
              </h2>
              <ul className="mt-6 space-y-4 text-brand-ink">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 text-brand-primary" />
                  <div>
                    <p className="text-sm text-brand-ink-soft">Telefoon</p>
                    <a
                      href={siteConfig.contact.phoneHref}
                      className="font-medium hover:text-brand-primary"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 text-brand-primary" />
                  <div>
                    <p className="text-sm text-brand-ink-soft">E-mail</p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-medium hover:text-brand-primary"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 text-brand-primary" />
                  <div>
                    <p className="text-sm text-brand-ink-soft">Adres</p>
                    <address className="not-italic font-medium">
                      {siteConfig.contact.address.street}
                      <br />
                      {siteConfig.contact.address.postalCode}{" "}
                      {siteConfig.contact.address.city}
                    </address>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg text-brand-ink">
                Werkuren
              </h3>
              <dl className="mt-2 space-y-1 text-sm text-brand-ink-soft">
                <div className="flex justify-between gap-6">
                  <dt>Maandag - vrijdag</dt>
                  <dd>8:00 - 17:00</dd>
                </div>
                <div className="flex justify-between gap-6">
                  <dt>Zaterdag</dt>
                  <dd>op afspraak</dd>
                </div>
                <div className="flex justify-between gap-6">
                  <dt>Zondag</dt>
                  <dd>gesloten</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="font-display text-lg text-brand-ink">Vind ons</h3>
              <div className="mt-3 aspect-video w-full overflow-hidden rounded-lg border border-brand-line">
                <iframe
                  title="Modak op de kaart — Hooiwege 40j, 9940 Evergem"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=3.6700%2C51.1000%2C3.7000%2C51.1200&amp;layer=mapnik&amp;marker=51.1100%2C3.6850"
                  loading="lazy"
                  className="h-full w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://www.openstreetmap.org/?mlat=51.1100&mlon=3.6850#map=17/51.1100/3.6850"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs text-brand-primary hover:underline"
              >
                Open in OpenStreetMap →
              </a>
            </div>
          </aside>

          <div>
            <h2 className="mb-4 font-display text-2xl text-brand-ink">
              Stuur ons een bericht
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
