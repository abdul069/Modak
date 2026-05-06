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
import { Reveal } from "@/components/ui/Reveal";
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
        <Reveal>
          <SectionHeader
            eyebrow="Twee paden, één team"
            title="Een losse opdracht of een totaalrenovatie?"
            description="Onze klanten weten wat ze willen — soms is dat één service, soms een hele woning. We zijn op beide ingericht."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal delay={80}>
            <Link
              href="/diensten"
              className="group flex h-full flex-col gap-4 rounded-xl border border-brand-line bg-white p-8
                         transition-all duration-300
                         hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lg"
            >
              <span className="grid size-12 place-items-center rounded-md bg-brand-primary/8 text-brand-primary
                              transition-transform duration-300 group-hover:scale-110">
                <Wrench className="size-6" />
              </span>
              <h3 className="font-display text-2xl">Losse opdracht?</h3>
              <p className="text-brand-ink-soft">
                Een nieuwe warmtepomp, ventilatiesysteem of badkamer? Vraag direct
                een offerte voor één concrete dienst.
              </p>
              <span className="mt-2 inline-flex items-center gap-1 font-medium text-brand-primary">
                Bekijk diensten
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </Link>
          </Reveal>

          <Reveal delay={180}>
            <Link
              href="/totaalrenovatie"
              className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-brand-primary
                         bg-brand-primary p-8 text-white
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-xl"
            >
              {/* hover shimmer */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r
                           from-transparent via-white/8 to-transparent
                           transition-transform duration-700 group-hover:translate-x-full"
              />
              <span className="grid size-12 place-items-center rounded-md bg-brand-accent text-brand-ink
                              transition-transform duration-300 group-hover:scale-110">
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
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-brand-bg-alt/50 py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeader
              eyebrow="Onze diensten"
              title="De volledige energetische schil van je woning."
              description="Acht specialisaties die we onder eigen leiding uitvoeren — geen onderaannemers waar het om kerntechniek gaat."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip — geeft tempo en speelt met getallen */}
      <section className="container-page py-12">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { v: "20+", l: "Jaar ervaring" },
            { v: "8", l: "Specialisaties onder één dak" },
            { v: "100%", l: "Eigen werfleiding" },
            { v: "10 jaar", l: "Uitvoeringsgarantie" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 80}>
              <li className="rounded-lg border border-brand-line bg-white p-6 transition-shadow hover:shadow-md">
                <p className="font-display text-4xl text-brand-primary">{s.v}</p>
                <p className="mt-1 text-sm text-brand-ink-soft">{s.l}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Recent realisaties */}
      {recentProjects.length > 0 ? (
        <section className="container-page py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeader
                eyebrow="Recente realisaties"
                title="Echte projecten, eerlijke beelden."
              />
              <Button asChild variant="outline" className="group">
                <Link href="/realisaties">
                  Alle realisaties
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentProjects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProjectCard
                  slug={p.slug}
                  title={p.frontmatter.title}
                  location={p.frontmatter.location}
                  year={p.frontmatter.year}
                  services={p.frontmatter.services}
                  heroImage={p.frontmatter.heroImage}
                  excerpt={p.frontmatter.excerpt}
                />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {/* B2B teaser */}
      <section className="relative overflow-hidden bg-brand-primary py-20 text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-mesh-hero animate-mesh opacity-60"
        />
        <div className="container-page relative grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
          <Reveal direction="left">
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
          </Reveal>
          <Reveal direction="right" delay={120}>
            <div className="flex md:justify-end">
              <Button asChild size="lg" variant="accent" className="group/btn">
                <Link href="/voor-aannemers">
                  Lees meer voor B2B
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Wat klanten zeggen"
              title="20 jaar ervaring vertelt zich door."
              description="We werken niet voor reviews — maar we zijn er wel trots op."
            />
          </Reveal>
          <Reveal delay={120}>
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
          </Reveal>
        </div>
      </section>

      <section className="container-page pb-20">
        <Reveal>
          <PremieBlock />
        </Reveal>
      </section>

      <section className="container-page pb-20">
        <Reveal direction="scale">
          <CTABlock
            title="Klaar om uw renovatie eindelijk te beginnen?"
            body="We komen langs, luisteren, en bezorgen een onderbouwde offerte. Vrijblijvend, zonder verkoperspraat."
          />
        </Reveal>
      </section>
    </>
  );
}
