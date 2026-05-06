import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { CTABlock } from "@/components/marketing/CTABlock";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/site";

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
      <Hero
        eyebrow="Onze diensten"
        title="Acht specialisaties, één team."
        subtitle="Van dakrenovatie tot airco-installatie — alles wat de energetische schil van een woning omvat, en alles wat erbij hoort."
        primaryCta={{ label: "Vraag offerte aan", href: "/offerte" }}
      />

      <div className="container-page py-16">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Diensten", url: "/diensten" },
          ]}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} {...s} />
          ))}
        </div>
      </div>

      <div className="container-page pb-20">
        <CTABlock
          variant="secondary"
          title="Niet zeker welke dienst je nodig hebt?"
          body="Geen probleem. We komen langs en bekijken samen wat zinvol is — vrijblijvend."
        />
      </div>
    </>
  );
}
