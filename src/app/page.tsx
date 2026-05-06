import Link from "next/link";
import { ArrowRight, Briefcase, Wrench } from "lucide-react";
import { Hero } from "@/components/marketing/Hero";
import { TrustBar } from "@/components/marketing/TrustBar";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { ProjectCard } from "@/components/marketing/ProjectCard";
import { TestimonialSlider } from "@/components/marketing/TestimonialSlider";
import { CTABlock } from "@/components/marketing/CTABlock";
import { PremieBlock } from "@/components/marketing/PremieBlock";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/seo";
import { services } from "@/lib/site";
import { getAllProjects } from "@/lib/content";

export default function HomePage() {
  const recentProjects = getAllProjects().slice(0, 3);

  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      <Hero
        variant="home"
        eyebrow="Renovatie · Gent · Vlaanderen"
        title="Eén partner voor je volledige renovatie — van dak tot warmtepomp."
        subtitle="AGNAU combineert dak, isolatie, verwarming, ventilatie, sanitair en airco onder één dak. Geen jongleren met aannemers, één team dat je woning gezond, zuinig en mooi maakt."
        primaryCta={{ label: "Vraag offerte aan", href: "/offerte" }}
        secondaryCta={{ label: "Ontdek onze diensten", href: "/diensten" }}
      />

      <TrustBar />

      {/* Two paths split */}
      <section className="container-page py-20">
        <SectionHeader
          eyebrow="Twee paden, één team"
          title="Een losse opdracht of een totaalrenovatie?"
          description="Onze klanten weten wat ze willen — soms is dat één service, soms een hele woning. We zijn op beide ingericht."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link
            href="/diensten"
            className="group flex flex-col gap-4 rounded-xl border border-brand-line bg-white p-8 transition-shadow hover:shadow-md"
          >
            <span className="grid size-12 place-items-center rounded-md bg-brand-primary/8 text-brand-primary">
              <Wrench className="size-6" />
            </span>
            <h3 className="font-display text-2xl">Losse opdracht?</h3>
            <p className="text-brand-ink-soft">
              Een nieuwe warmtepomp, ventilatiesysteem of badkamer? Vraag direct
              een offerte voor één concrete dienst.
            </p>
            <span className="mt-2 inline-flex items-center gap-1 font-medium text-brand-primary">
              Bekijk diensten
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/totaalrenovatie"
            className="group flex flex-col gap-4 rounded-xl border border-brand-primary bg-brand-primary p-8 text-white transition-shadow hover:shadow-md"
          >
            <span className="grid size-12 place-items-center rounded-md bg-brand-accent text-brand-ink">
              <Briefcase className="size-6" />
            </span>
            <h3 className="font-display text-2xl text-white">
              Volledige renovatie?
            </h3>
            <p className="text-white/80">
              Eén plan, één planning, één aanspreekpunt. We coördineren je
              volledige energetische renovatie.
            </p>
            <span className="mt-2 inline-flex items-center gap-1 font-medium text-brand-accent">
              Onze aanpak
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-brand-bg-alt/50 py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Onze diensten"
            title="De volledige energetische schil van je woning."
            description="Acht specialisaties die we onder eigen leiding uitvoeren — geen onderaannemers waar het om kerntechniek gaat."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent realisaties */}
      {recentProjects.length > 0 ? (
        <section className="container-page py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              eyebrow="Recente realisaties"
              title="Echte projecten, eerlijke beelden."
            />
            <Button asChild variant="outline">
              <Link href="/realisaties">
                Alle realisaties
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentProjects.map((p) => (
              <ProjectCard
                key={p.slug}
                slug={p.slug}
                title={p.frontmatter.title}
                location={p.frontmatter.location}
                year={p.frontmatter.year}
                services={p.frontmatter.services}
                heroImage={p.frontmatter.heroImage}
                excerpt={p.frontmatter.excerpt}
              />
            ))}
          </div>
        </section>
      ) : null}

      {/* B2B teaser */}
      <section className="bg-brand-primary py-20 text-white">
        <div className="container-page grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-accent">
              Voor architecten en aannemers
            </p>
            <h2 className="font-display text-white">
              Werkt u in de bouw? We zijn graag uw onderaannemer.
            </h2>
            <p className="mt-4 max-w-2xl text-white/80">
              VCA-gecertificeerd, met eigen monteurs en planningsdiscipline.
              Geen verrassingen op uw werf.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Button asChild size="lg" variant="accent">
              <Link href="/voor-aannemers">
                Lees meer voor B2B
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            eyebrow="Wat klanten zeggen"
            title="20 jaar ervaring vertelt zich door."
            description="We werken niet voor reviews — maar we zijn er wel trots op."
          />
          <TestimonialSlider
            items={[
              {
                quote:
                  "AGNAU heeft ons dak, isolatie en warmtepomp in één traject gedaan. Geen telefoons tussen aannemers, alles geregeld.",
                author: "Familie D.",
                role: "Totaalrenovatie · Sint-Denijs-Westrem",
              },
              {
                quote:
                  "Strakke planning en heldere communicatie. Premie voor de warmtepomp was correct geadviseerd vanaf dag één.",
                author: "Bart V.",
                role: "Warmtepomp · Merelbeke",
              },
              {
                quote:
                  "We zochten één partij voor sanitair en badkamer. Werd een doorgedreven renovatie van de bovenverdieping.",
                author: "Sara & Tom",
                role: "Badkamer + sanitair · Gent",
              },
              {
                quote:
                  "Als architect waardeer ik de planningsdiscipline. AGNAU zit op werven die ze beloven.",
                author: "Architectenbureau L.",
                role: "B2B-samenwerking",
              },
            ]}
          />
        </div>
      </section>

      <section className="container-page pb-20">
        <PremieBlock />
      </section>

      <section className="container-page pb-20">
        <CTABlock
          title="Klaar om uw renovatie eindelijk te beginnen?"
          body="We komen langs, luisteren, en bezorgen een onderbouwde offerte. Vrijblijvend, zonder verkoperspraat."
        />
      </section>
    </>
  );
}
