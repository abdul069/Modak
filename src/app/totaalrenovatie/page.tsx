import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { CTABlock } from "@/components/marketing/CTABlock";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { PremieBlock } from "@/components/marketing/PremieBlock";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Totaalrenovatie",
  description:
    "Eén partner voor je volledige energetische renovatie — dak, isolatie, warmtepomp, ventilatie, sanitair en badkamer. AGNAU coördineert van A tot Z.",
  path: "/totaalrenovatie",
});

const fasen = [
  {
    title: "Intake & ambitie",
    body: "We luisteren naar wat je woning moet kunnen — comfort, EPC-doel, budget, timing. Geen verkoop, een gesprek.",
  },
  {
    title: "Audit & meetstaat",
    body: "Plaatsbezoek, opmeting, energieanalyse. We becijferen de werkelijke startsituatie van je woning.",
  },
  {
    title: "Ontwerp & offerte",
    body: "Eén transparante offerte met alle disciplines, fasering en geschatte premies. Geen kleine lettertjes.",
  },
  {
    title: "Uitvoering",
    body: "Eigen monteurs en vaste partners, één werfleider, één planning. Wij regelen, jij blijft op de hoogte.",
  },
  {
    title: "Oplevering & nazorg",
    body: "Volledige checklist, EPB-attesten, premie-administratie en 10 jaar uitvoeringsgarantie.",
  },
];

const faqs = [
  {
    q: "Hoe lang duurt een totaalrenovatie gemiddeld?",
    a: "Voor een rijwoning rekenen we 6-10 weken voor de energetische schil. Een volledige verbouwing met indelingsaanpassing kan 4-6 maanden duren.",
  },
  {
    q: "Kunnen we in het huis blijven wonen tijdens de werken?",
    a: "Vaak deels. We faseren waar mogelijk zodat één verdieping bewoonbaar blijft. Voor zware fasen plannen we soms een overbruggingsweek.",
  },
  {
    q: "Hoeveel kost een totaalrenovatie?",
    a: "Te variabel om vooraf te zeggen, maar reken voor de energetische schil van een rijwoning gemiddeld € 60.000 - € 120.000 inclusief premies.",
  },
  {
    q: "Helpen jullie met financiering?",
    a: "We adviseren over de Mijn VerbouwLening en de federale renovatielening. Wij regelen niet rechtstreeks krediet, wel het juiste papierwerk.",
  },
  {
    q: "Wat als ik nog niet alles tegelijk wil doen?",
    a: "Dan plannen we een totaaltraject in fasen, met een opvolgcontract dat fase 2 en 3 mogelijk maakt zonder te herbeginnen met de planning.",
  },
];

export default function TotaalrenovatiePage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Totaalrenovatie", url: "/totaalrenovatie" },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Hero
        eyebrow="Totaalrenovatie"
        title="Eén plan, één planning, één aanspreekpunt."
        subtitle="Geen jongleren met aannemers. AGNAU coördineert je volledige energetische renovatie — dak, isolatie, warmtepomp, ventilatie, sanitair en badkamer in één vlot traject."
        primaryCta={{
          label: "Plan een vrijblijvend gesprek",
          href: "/contact",
        }}
        secondaryCta={{
          label: "Bekijk realisaties",
          href: "/realisaties",
        }}
      />

      <div className="container-page py-12">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Het probleem */}
      <section className="container-page pb-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Het probleem"
              title="Traditionele renovatie betekent jongleren met 4 of 5 aannemers."
            />
            <p className="mt-6 text-brand-ink-soft">
              Een dakwerker, een installateur, een tegelzetter, een
              ventilatiespecialist, een schilder. Elk met eigen planning, eigen
              taalgebruik, eigen verantwoordelijkheid. U wordt projectleider
              van uw eigen renovatie — meestal naast een fulltime job.
            </p>
            <ul className="mt-6 space-y-3 text-brand-ink-soft">
              <li className="flex items-start gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-accent" />
                Wachttijden tussen disciplines van soms 2-4 weken
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-accent" />
                Garantieconflicten als er later iets misloopt
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-accent" />
                Verlies van overzicht over kosten en planning
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-accent" />
                Premies en attesten die niet kloppen
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-brand-line bg-brand-bg-alt/60 p-8">
            <p className="font-display text-2xl text-brand-ink">
              &ldquo;Wij dachten dat we geld zouden besparen door zelf te
              coördineren. Drie maanden later zijn we overgeschakeld op één
              partij — en uiteindelijk goedkoper uit.&rdquo;
            </p>
            <p className="mt-4 text-sm text-brand-ink-soft">
              — TODO: klantcitaat na fotosessie
            </p>
          </div>
        </div>
      </section>

      {/* Onze aanpak — 5 fases */}
      <section className="bg-brand-bg-alt/50 py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Onze aanpak"
            title="Vijf fases, één traject."
            description="Een vaste methode die bij elke renovatie hetzelfde startpunt heeft: luisteren."
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {fasen.map((fase, i) => (
              <li
                key={fase.title}
                className="rounded-lg border border-brand-line bg-white p-6"
              >
                <span className="font-display text-3xl text-brand-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg text-brand-ink">
                  {fase.title}
                </h3>
                <p className="mt-2 text-sm text-brand-ink-soft">{fase.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Visual diagram */}
      <section className="container-page py-20">
        <SectionHeader
          eyebrow="Hoe alles aansluit"
          title="Acht diensten die elkaar versterken."
          description="Een warmtepomp werkt pas optimaal in een goed geïsoleerde woning. Ventilatie is essentieel om gezond te blijven. Sanitair beïnvloedt vloerverwarming. AGNAU ziet het geheel."
          align="center"
          className="mx-auto"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <DiagramSvg />
        </div>
      </section>

      {/* Voorbeeldproject */}
      <section className="bg-brand-bg-alt/50 py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
              <Image
                src="/images/projects/totaalrenovatie-sint-denijs-westrem-hero.jpg"
                alt="Totaalrenovatie halfopen woning Sint-Denijs-Westrem — gevel met nieuw dak en zonnepanelen"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeader
                eyebrow="Voorbeeldproject"
                title="Totaalrenovatie Sint-Denijs-Westrem."
                description="Halfopen woning uit 1965, 8 weken werk, vier disciplines onder één planning."
              />
              <ul className="mt-8 space-y-3 text-brand-ink-soft">
                {[
                  "Volledige dakrenovatie met isolatie",
                  "Lucht-water warmtepomp 9 kW",
                  "Systeem D ventilatie met warmterecuperatie",
                  "EPC van label E naar A",
                  "Premies samen: € 7.200",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Premies */}
      <section className="container-page py-20">
        <SectionHeader
          eyebrow="Premies & financiering"
          title="Wat de overheid bijdraagt aan uw renovatie."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <PremieBlock
            title="Vlaamse premies (Mijn VerbouwPremie)"
            body="Voor warmtepomp, dakisolatie, ventilatie en muurisolatie. Bedragen variëren met inkomen en uitvoeringscriteria."
          />
          <div className="rounded-lg border border-brand-line bg-white p-6 md:p-8">
            <h3 className="font-display text-xl text-brand-ink">
              Mijn VerbouwLening
            </h3>
            <p className="mt-2 text-brand-ink-soft">
              Een renteloze lening tot € 60.000 voor energiebesparende werken,
              bedoeld om de stap naar grondige renovatie haalbaar te maken.
            </p>
            <p className="mt-3 text-sm text-brand-ink-soft">
              We helpen bij het samenstellen van het dossier.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-bg-alt/50 py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeader
              eyebrow="Veelgestelde vragen"
              title="Wat klanten ons in week 1 vragen."
            />
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTABlock
        title="Plan een vrijblijvend gesprek."
        body="Eén uur volstaat om uw woning, ambities en budget te begrijpen. Geen offerte zonder dat we eerst geluisterd hebben."
        primaryCta={{ label: "Contacteer ons", href: "/contact" }}
        secondaryCta={{ label: "Vraag offerte aan", href: "/offerte" }}
      />
    </>
  );
}

function DiagramSvg() {
  const items = [
    "Dak",
    "Isolatie",
    "Warmtepomp",
    "Verwarming",
    "Ventilatie",
    "Sanitair",
    "Badkamer",
    "Airco",
  ];
  return (
    <div
      role="img"
      aria-label="Diagram dat toont hoe AGNAU's diensten met elkaar verbonden zijn"
      className="grid grid-cols-2 gap-3 md:grid-cols-4"
    >
      {items.map((item) => (
        <div
          key={item}
          className="rounded-lg border border-brand-line bg-white p-4 text-center text-sm font-medium text-brand-ink"
        >
          {item}
        </div>
      ))}
      <div className="col-span-2 mt-2 flex items-center justify-center md:col-span-4">
        <ArrowDown className="size-6 text-brand-accent" />
      </div>
      <div className="col-span-2 rounded-lg border border-brand-primary bg-brand-primary px-6 py-4 text-center text-white md:col-span-4">
        <p className="font-display text-xl">Eén AGNAU-team</p>
        <p className="text-sm text-white/80">Eén planning, één garantie</p>
      </div>
    </div>
  );
}
