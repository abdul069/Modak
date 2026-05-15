import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSplit } from "@/components/marketing/HeroSplit";
import { TrustBar } from "@/components/marketing/TrustBar";
import { ServiceTile } from "@/components/marketing/ServiceTile";
import { FeaturedProject } from "@/components/marketing/FeaturedProject";
import { TestimonialSlider } from "@/components/marketing/TestimonialSlider";
import { CTABlock } from "@/components/marketing/CTABlock";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { StatsStrip } from "@/components/marketing/StatsStrip";
import { ScrollMarquee } from "@/components/marketing/ScrollMarquee";
import { RevealZoom } from "@/components/marketing/RevealZoom";
import { MaterialStrip } from "@/components/marketing/MaterialStrip";
import { DotAccent } from "@/components/marketing/DotAccent";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/seo";
import { services, siteConfig } from "@/lib/site";
import { getAllProjects } from "@/lib/content";

const PROJECT_VARIANTS: Array<"white" | "cream" | "alt"> = [
  "white",
  "cream",
  "white",
];

export default function HomePage() {
  const projects = getAllProjects();
  const featured = projects.slice(0, 3);

  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      <HeroSplit
        photoUrl={siteConfig.heroPhoto}
        photoAlt="Afgewerkte badkamer met backlit ronde spiegel — AGNAU realisatie"
        eyebrow="Renovatie · Gent · 2026"
        title="Eén partner."
        titleAccent="Volledige renovatie."
        subtitle="Dak, isolatie, warmtepomp, ventilatie, sanitair en badkamer onder één planning. Eén team dat je woning gezond, zuinig en mooi maakt."
        primaryCta={{ label: "Vraag offerte aan", href: "/offerte" }}
        secondaryCta={{ label: "Bekijk realisaties", href: "/realisaties" }}
        caption="Badkamer · 2024"
      />

      <TrustBar />

      <StatsStrip />

      {featured[0] ? (
        <FeaturedProject
          slug={featured[0].slug}
          title={featured[0].frontmatter.title}
          location={featured[0].frontmatter.location}
          excerpt={featured[0].frontmatter.excerpt ?? ""}
          image={featured[0].frontmatter.heroImage ?? ""}
          extraImages={featured[0].frontmatter.gallery ?? []}
          quote={featured[0].frontmatter.quote}
          imageSide="left"
          variant={PROJECT_VARIANTS[0]}
          index={1}
        />
      ) : null}

      {/* Services on cream bg with dot pattern */}
      <section className="section-cream pattern-dot-grid relative py-24 md:py-28">
        <div className="container-page relative">
          <Reveal>
            <div className="grid items-start gap-8 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-5">
                <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-brand-primary">
                  <span className="inline-block h-px w-8 bg-brand-accent" />
                  Onze diensten
                </p>
                <h2
                  className="heading-editorial mt-5 max-w-md"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
                >
                  De volledige energetische <span className="accent-word">schil</span> van je woning.
                </h2>
              </div>
              <p className="text-base leading-relaxed text-brand-ink-soft md:col-span-7 md:text-lg">
                Elf specialisaties die we onder eigen leiding uitvoeren — geen
                onderaannemers waar het om kerntechniek gaat. Van het dak tot
                de laadpaal, één partij die plant, uitvoert en oplevert.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <RevealZoom key={service.slug} delay={i * 60}>
                <ServiceTile
                  slug={service.slug}
                  title={service.title}
                  short={service.short}
                  icon={service.icon}
                  image={service.image}
                  tint={service.tint}
                />
              </RevealZoom>
            ))}
          </div>
        </div>
      </section>

      {featured[1] ? (
        <FeaturedProject
          slug={featured[1].slug}
          title={featured[1].frontmatter.title}
          location={featured[1].frontmatter.location}
          excerpt={featured[1].frontmatter.excerpt ?? ""}
          image={featured[1].frontmatter.heroImage ?? ""}
          extraImages={featured[1].frontmatter.gallery ?? []}
          quote={featured[1].frontmatter.quote}
          imageSide="right"
          variant={PROJECT_VARIANTS[1]}
          index={2}
        />
      ) : null}

      {/* Aanpak in 3 stappen — white bg with green left-accent bar */}
      <section className="relative bg-brand-bg py-24 md:py-28">
        {/* Subtle accent column on left */}
        <div
          aria-hidden
          className="absolute left-0 top-1/2 hidden h-40 w-1 -translate-y-1/2 bg-brand-accent lg:block"
        />
        <div className="container-page relative">
          <Reveal>
            <div className="grid items-start gap-8 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-5">
                <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-brand-primary">
                  <span className="inline-block h-px w-8 bg-brand-accent" />
                  Onze aanpak
                </p>
                <h2
                  className="heading-editorial mt-5 max-w-md"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
                >
                  Eén traject. Drie stappen. <span className="accent-word">Geen verrassingen.</span>
                </h2>
              </div>
              <p className="text-base leading-relaxed text-brand-ink-soft md:col-span-7 md:text-lg">
                Eén traject van plaatsbezoek tot oplevering, één aanspreekpunt
                die alles coördineert. Geen verrassingen, geen telefoons tussen
                aannemers — wij nemen de regie.
              </p>
            </div>
          </Reveal>
          <div className="relative mt-20">
            {/* Architectural dashed connector across (lg+) */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-[12%] right-[12%] top-7 hidden border-t-2 border-dashed border-brand-accent/40 lg:block"
            />
            <ol className="relative grid gap-14 lg:grid-cols-3 lg:gap-10">
              {[
                {
                  n: "01",
                  t: "Plaatsbezoek",
                  b: "We komen langs, luisteren, meten op en denken mee. Geen verkooppraat.",
                },
                {
                  n: "02",
                  t: "Onderbouwde offerte",
                  b: "Eén document met alle disciplines, premies en planning. Vrijblijvend.",
                },
                {
                  n: "03",
                  t: "Uitvoering",
                  b: "Eigen werfleiding, één aanspreekpunt, 10 jaar uitvoeringsgarantie.",
                },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i * 100}>
                  <li className="relative bg-brand-bg-alt p-8 ring-1 ring-brand-line lg:bg-brand-bg lg:p-0 lg:ring-0">
                    {/* Square number badge */}
                    <span className="relative z-10 inline-flex size-14 items-center justify-center bg-brand-primary font-display text-xl font-semibold text-white lg:size-16">
                      {s.n}
                    </span>
                    <h3 className="mt-6 font-display text-2xl text-brand-ink">{s.t}</h3>
                    <p className="mt-3 text-brand-ink-soft">{s.b}</p>
                    {/* Square green accent corner */}
                    <span
                      aria-hidden
                      className="absolute right-0 top-0 size-3 bg-brand-accent lg:hidden"
                    />
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="mt-20 flex justify-center">
            <Button asChild size="lg" className="group">
              <Link href="/offerte">
                Vraag een onderbouwde offerte
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <MaterialStrip
        src="/images/projects/IMG-20260512-WA0074.jpg"
        alt="Duco D-systeem met verzinkte ventilatiebuizen op bakstenen wand"
        label="Vakmanschap zit in elk detail."
        tag="Ventilatie"
      />

      <ScrollMarquee
        variant="light"
        words={["Dak", "Isolatie", "Warmtepomp", "Ventilatie", "Sanitair", "Badkamer", "Zonnepanelen", "Laadpaal"]}
        speed={0.5}
      />

      {featured[2] ? (
        <FeaturedProject
          slug={featured[2].slug}
          title={featured[2].frontmatter.title}
          location={featured[2].frontmatter.location}
          excerpt={featured[2].frontmatter.excerpt ?? ""}
          image={featured[2].frontmatter.heroImage ?? ""}
          extraImages={featured[2].frontmatter.gallery ?? []}
          quote={featured[2].frontmatter.quote}
          imageSide="left"
          variant={PROJECT_VARIANTS[2]}
          index={3}
        />
      ) : null}

      <section className="section-cream pattern-dot-grid relative py-24 md:py-28">
        <div className="container-page relative">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-brand-primary">
                  <span className="inline-block h-px w-8 bg-brand-accent" />
                  Wat klanten zeggen
                </p>
                <h2
                  className="heading-editorial mt-5 max-w-2xl"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
                >
                  20 jaar ervaring <span className="accent-word">vertelt</span> zich door.
                </h2>
              </div>
              <Button asChild variant="outline" className="group">
                <Link href="/realisaties">
                  Alle realisaties
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <div className="mt-12">
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
        </div>
      </section>

      <Reveal direction="scale">
        <CTABlock
          title="Klaar om uw renovatie eindelijk te beginnen?"
          body="We komen langs, luisteren, en bezorgen een onderbouwde offerte. Vrijblijvend, zonder verkoperspraat."
        />
      </Reveal>
    </>
  );
}
