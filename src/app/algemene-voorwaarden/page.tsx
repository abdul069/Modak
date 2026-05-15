import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Algemene voorwaarden",
  description: "Algemene voorwaarden van AGNAU bv.",
  path: "/algemene-voorwaarden",
});

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <section className="bg-off-white py-16 md:py-24">
        <Container size="narrow">
          <p className="eyebrow">Juridisch</p>
          <h1 className="mt-3">Algemene voorwaarden</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate">
            De voorwaarden die van toepassing zijn op alle offertes, overeenkomsten
            en uitvoeringen door AGNAU bv.
          </p>
        </Container>
      </section>

      <article className="py-16 md:py-20">
        <Container size="narrow">
          <div className="space-y-4 text-sm text-slate">
            <p className="font-medium text-ink">Pagina in opbouw.</p>
            <p>
              De volledige algemene voorwaarden worden binnenkort gepubliceerd.
              Voor lopende offertes en projecten worden de geldende voorwaarden
              steeds als bijlage bij de offerte gevoegd.
            </p>
            <p>
              Voor vragen kunt u contact opnemen via{" "}
              <a href="/contact" className="text-accent underline">ons contactformulier</a>.
            </p>
          </div>
        </Container>
      </article>
    </>
  );
}
