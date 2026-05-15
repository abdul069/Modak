import type { Metadata } from "next";
import { HeroPhoto } from "@/components/marketing/HeroPhoto";
import { ServiceTile } from "@/components/marketing/ServiceTile";
import { CTABlock } from "@/components/marketing/CTABlock";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { buildMetadata } from "@/lib/seo";
import { services, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Onze diensten",
  description:
    "Acht specialisaties voor de volledige energetische schil van uw woning — dak, isolatie, warmtepompen, verwarming, ventilatie, sanitair, badkamers en airco.",
  path: "/diensten",
});

export default function DienstenPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Diensten", url: "/diensten" },
        ])}
      />
      <HeroPhoto
        photoUrl={siteConfig.heroPhoto}
        photoAlt="AGNAU op de werf"
        eyebrow="Onze diensten"
        title="Acht specialisaties. Eén team."
        subtitle="Van dakrenovatie tot airco-installatie — alles wat de energetische schil van een woning omvat, en alles wat erbij hoort."
        primaryCta={{ label: "Vraag offerte aan", href: "/offerte" }}
        size="compact"
        showScrollIndicator={false}
      />

      <div className="container-page py-10">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Diensten", url: "/diensten" },
          ]}
        />
      </div>

      <section className="section-dark py-20">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceTile key={s.slug} {...s} />
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        variant="secondary"
        title="Niet zeker welke dienst je nodig hebt?"
        body="Geen probleem. We komen langs en bekijken samen wat zinvol is — vrijblijvend."
      />
    </>
  );
}
