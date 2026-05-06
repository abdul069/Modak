import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Vraag offerte",
  description:
    "Vraag een vrijblijvende offerte aan bij Modak. Drie korte stappen, en we nemen binnen 1-2 werkdagen contact op.",
  path: "/offerte",
});

export default function OffertePage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Offerte aanvragen", url: "/offerte" },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Hero
        eyebrow="Offerte aanvragen"
        title="Drie korte stappen naar een eerlijke offerte."
        subtitle="Vertel ons wat u wil aanpakken en wat uw situatie is. We bezorgen een onderbouwde offerte na een plaatsbezoek."
      />

      <section className="container-page py-16 md:py-20">
        <Breadcrumbs items={breadcrumbs} />

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <QuoteForm />

          <aside className="space-y-6">
            <div className="rounded-xl border border-brand-line bg-brand-bg-alt/60 p-6">
              <h2 className="font-display text-lg text-brand-ink">
                Wat gebeurt er na verzending?
              </h2>
              <ol className="mt-4 space-y-3 text-sm text-brand-ink-soft">
                <li className="flex gap-2">
                  <span className="font-display text-brand-primary">1.</span>
                  We bevestigen je aanvraag direct per mail.
                </li>
                <li className="flex gap-2">
                  <span className="font-display text-brand-primary">2.</span>
                  Binnen 1-2 werkdagen bellen we voor wat extra info en plannen
                  we een plaatsbezoek.
                </li>
                <li className="flex gap-2">
                  <span className="font-display text-brand-primary">3.</span>
                  Je krijgt een transparante offerte met fasering en geschatte
                  premies.
                </li>
              </ol>
            </div>

            <div className="rounded-xl border border-brand-line bg-white p-6">
              <h3 className="font-display text-lg text-brand-ink">
                Liever direct bellen?
              </h3>
              <p className="mt-2 text-sm text-brand-ink-soft">
                Sommige vragen lossen we sneller op aan de lijn.
              </p>
              {/* phone shown via siteConfig in CTA elsewhere; keep this short */}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
