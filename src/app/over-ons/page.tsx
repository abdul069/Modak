import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { CertificateBadges } from "@/components/marketing/CertificateBadges";
import { CTABlock } from "@/components/marketing/CTABlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Over ons",
  description:
    "Modak is een Belgisch renovatiebedrijf met 20+ jaar ervaring. Eén team voor de volledige energetische schil van uw woning, met thuisbasis in Gent.",
  path: "/over-ons",
});

const team = [
  // TODO: vervang door echte team-leden + foto's na fotosessie
  {
    name: "TODO: Naam zaakvoerder",
    role: "Zaakvoerder",
    bio: "20+ jaar ervaring in renovatie en haustechniek. Spreekt klant en monteur dezelfde taal.",
  },
  {
    name: "TODO: Werfleider",
    role: "Werfleider & RESCert-installateur",
    bio: "Onze technische rots in de branding op grote werven.",
  },
  {
    name: "TODO: Office",
    role: "Planning & administratie",
    bio: "Houdt overzicht over offertes, planningen en premiedossiers.",
  },
];

export default function OverOnsPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Over ons", url: "/over-ons" },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <Hero
        eyebrow="Over ons"
        title="Een Gents bedrijf, gegroeid uit 20 jaar werven."
        subtitle="Modak werd opgericht om wat we al twee decennia goed deden onder één duidelijke vlag te brengen: renovatie zonder versnipperde aannemers."
      />

      <div className="container-page py-12">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Het verhaal */}
      <section className="container-page pb-20">
        <div className="mx-auto max-w-3xl prose-modak">
          <SectionHeader
            eyebrow="Het verhaal"
            title="Twintig jaar ervaring, vandaag onder één naam."
          />
          <p>
            We zijn al meer dan twintig jaar actief in renovatie en
            haustechniek in Oost-Vlaanderen. Eerst als vakman op de werf, dan
            als technisch coördinator, en sinds 2024 onder onze eigen vlag:
            <strong> Modak</strong>. Niet omdat we iets te bewijzen hadden,
            maar omdat we wilden uitdragen waar we al jaren in geloven —
            renovatie zonder versnippering.
          </p>
          <p>
            Te vaak zien we klanten dezelfde frustratie hebben: een dakwerker
            die niet weet wat de installateur eerst moet doen, een
            tegelzetter die wacht op iemand die niet komt, premies die
            verkeerd berekend worden. Wij hebben de discipline en het netwerk
            om dat anders te doen.
          </p>
          <p>
            Onze thuisbasis is Gent. We werken in heel Vlaanderen, met een
            zwaartepunt in Oost-Vlaanderen. Klein genoeg om persoonlijk te
            blijven, groot genoeg om grote totaalrenovaties aan te kunnen.
          </p>
        </div>
      </section>

      {/* Waarden */}
      <section className="bg-brand-bg-alt/50 py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Waarden"
            title="Drie principes die elke werf bepalen."
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Eerlijk advies",
                body: "We rekenen voor we adviseren. Een warmtepomp die niet bij uw woning past, raden we af — ook al verkopen we hem graag.",
              },
              {
                title: "Eén aanspreekpunt",
                body: "Eén werfleider, één planning, één eindverantwoordelijke. U weet altijd wie u moet bellen.",
              },
              {
                title: "Vakwerk dat blijft",
                body: "We werken met persfittingen, A-merken en fabrieksgaranties — wat we plaatsen, willen we 30 jaar later nog niet zien terugkomen.",
              },
            ].map((v) => (
              <li
                key={v.title}
                className="rounded-lg border border-brand-line bg-white p-6"
              >
                <h3 className="font-display text-xl text-brand-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-brand-ink-soft">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="container-page py-20">
        <SectionHeader
          eyebrow="Team"
          title="De mensen achter de werf."
          description="Een klein, vast team van vakmensen en kaders die u allemaal bij naam zult kennen tegen het einde van uw project."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="rounded-lg border border-brand-line bg-white p-6"
            >
              <div className="aspect-square w-full overflow-hidden rounded-md bg-brand-bg-alt">
                {/* TODO: profielfoto's na fotosessie */}
                <div className="grid h-full place-items-center text-brand-primary/20">
                  <span className="font-display text-3xl">M</span>
                </div>
              </div>
              <h3 className="mt-4 font-display text-lg text-brand-ink">
                {member.name}
              </h3>
              <p className="text-sm text-brand-primary">{member.role}</p>
              <p className="mt-2 text-sm text-brand-ink-soft">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Certificaten */}
      <section className="bg-brand-bg-alt/50 py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Certificeringen"
            title="Erkenningen die we elk jaar onderhouden."
          />
          <div className="mt-10">
            <CertificateBadges />
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <CTABlock
          title="Zin om kennis te maken?"
          body="Een vrijblijvend gesprek bij u thuis of op kantoor — daar starten alle goede projecten mee."
        />
      </section>
    </>
  );
}
