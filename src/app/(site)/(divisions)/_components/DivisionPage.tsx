import { DivisionTheme } from "@/components/layout/DivisionTheme";
import { DivisionHero } from "@/components/marketing/DivisionHero";
import { ServicesGrid } from "@/components/marketing/ServicesGrid";
import { UseCaseStrip } from "@/components/marketing/UseCaseStrip";
import { ApproachSteps } from "@/components/marketing/ApproachSteps";
import { CertificateStrip } from "@/components/marketing/CertificateStrip";
import { DivisionRealisaties } from "@/components/marketing/DivisionRealisaties";
import { DivisionFAQ } from "@/components/marketing/DivisionFAQ";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { CTABlock } from "@/components/marketing/CTABlock";
import { ViewContentTracker } from "@/components/tracking/ViewContentTracker";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo";
import type { Division } from "@/content/divisions";

export function DivisionPage({ division }: { division: Division }) {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: division.name, url: `/${division.slug}` },
  ];

  return (
    <DivisionTheme theme={division.themeKey}>
      <ViewContentTracker division={division.slug} />
      <JsonLd
        data={[
          serviceSchema({
            name: division.name,
            description: division.meta.description,
            slug: division.slug,
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />

      <DivisionHero division={division} />
      <ServicesGrid division={division} />
      <UseCaseStrip division={division} />
      <ApproachSteps division={division} />
      <CertificateStrip partnerIds={division.partnerIds} />
      <DivisionRealisaties division={division} />
      <DivisionFAQ division={division} />
      <QuoteForm division={division} />
      <CTABlock
        eyebrow={`Klaar voor uw ${division.shortName.toLowerCase()}-project?`}
        title="Eén partner. Eén planning. Eén oplevering."
        body="We komen langs voor een plaatsbezoek, bezorgen een onderbouwde offerte en starten op afgesproken datum."
        primaryCta={{ label: "Vraag offerte", href: "#offerte" }}
        secondaryCta={{ label: "Plan showroombezoek", href: "/contact" }}
      />
    </DivisionTheme>
  );
}
