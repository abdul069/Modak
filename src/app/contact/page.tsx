import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata, localBusinessSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact — AGNAU showroom Evergem",
  description: "Contacteer AGNAU. Showroom en bureel in Evergem. We bellen u binnen 24 uur terug op werkdagen.",
  path: "/contact",
});

type SP = Promise<{ ok?: string }>;

export default async function ContactPage({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  const submitted = sp.ok === "1";
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ];

  const mapsQuery = encodeURIComponent(
    `${siteConfig.contact.address.street}, ${siteConfig.contact.address.postalCode} ${siteConfig.contact.address.city}`
  );

  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(breadcrumbs)]} />

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--mute)" }}>Contact</p>
            <h1 className="mt-3">Spreek met een vakman.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
              Geen call-center, geen verkoperspraat. Stuur ons een bericht of bel ons direct — we bellen binnen 24 uur terug op werkdagen.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <aside className="space-y-8 md:col-span-5">
              <div className="rounded-xl border border-line bg-off-white p-7">
                <h2 className="text-xl">Bezoek de showroom</h2>
                <ul className="mt-5 space-y-3 text-sm text-slate">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 text-ink" />
                    <span>
                      {siteConfig.contact.address.street}<br />
                      {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 size-4 text-ink" />
                    <a href={siteConfig.contact.phoneHref} className="hover:text-ink">
                      {siteConfig.contact.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-4 text-ink" />
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-ink">
                      {siteConfig.contact.email}
                    </a>
                  </li>
                </ul>

                <h3 className="mt-8 font-display text-base font-bold text-ink">Openingsuren</h3>
                <ul className="mt-3 space-y-2">
                  {siteConfig.contact.openingHours.map((oh) => (
                    <li key={oh.day} className="flex items-center justify-between gap-4 border-b border-line py-2 text-sm last:border-0">
                      <span className="flex items-center gap-2 text-ink">
                        <Clock className="size-4 text-mute" />
                        {oh.day}
                      </span>
                      <span className="font-mono text-slate">{oh.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-xl border border-line">
                <iframe
                  title="AGNAU Evergem op kaart"
                  src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                  width="100%"
                  height="320"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block"
                />
              </div>
            </aside>

            <div className="md:col-span-7">
              <SectionHeader title="Stuur een bericht" eyebrow="Schriftelijk contact" />
              <div className="mt-8">
                {submitted ? (
                  <div className="flex items-start gap-3 rounded-xl border border-line bg-off-white p-6">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-ink text-white">
                      <Check className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink">Bericht verstuurd.</h3>
                      <p className="mt-1 text-sm text-slate">
                        Bedankt. We hebben uw bericht goed ontvangen en bellen u binnen 24 uur terug op werkdagen.
                      </p>
                    </div>
                  </div>
                ) : (
                  <ContactForm />
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
