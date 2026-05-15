import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroCircle } from "@/components/marketing/HeroCircle";
import { TrustBar } from "@/components/marketing/TrustBar";
import { ServiceTile } from "@/components/marketing/ServiceTile";
import { FeaturedProject } from "@/components/marketing/FeaturedProject";
import { TestimonialSlider } from "@/components/marketing/TestimonialSlider";
import { CTABlock } from "@/components/marketing/CTABlock";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { StatsStrip } from "@/components/marketing/StatsStrip";
import { ScrollMarquee } from "@/components/marketing/ScrollMarquee";
import { RedCircleCTA } from "@/components/marketing/RedCircleCTA";
import { RevealZoom } from "@/components/marketing/RevealZoom";
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

      <HeroCircle
        photoUrl={siteConfig.heroPhoto}
        photoAlt="Afgewerkte badkamer met backlit ronde spiegel — AGNAU realisatie"
        eyebrow="Renovatie · Gent · 2026"
        title="Eén partner."
        titleAccent="Volledige renovatie"
        subtitle="Dak, isolatie, warmtepomp, ventilatie, sanitair en badkamer onder één planning. Eén team dat je woning gezond, zuinig en mooi maakt."
        primaryCta={{ label: "Bekijk onze realisaties", href: "/realisaties" }}
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

      {/* Services on cream bg */}
      <section className="section-cream py-24">
        <div className="container-page">
          <Reveal>
            <div className="grid items-start gap-8 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-5">
                <p className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-brand-primary">
                  Onze diensten <DotAccent size="sm" />
                </p>
                <h2
                  className="heading-coral mt-5 max-w-md"
                  style={{ fontSize: "clamp(1.8rem, 3.6vw, 3rem)" }}
                >
                  De volledige energetische schil van je woning.
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

      {/* Aanpak in 3 stappen — white bg, blue accents */}
      <section className="bg-brand-bg py-24">
        <div className="container-page">
          <Reveal>
            <div className="grid items-start gap-8 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-5">
                <p className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-brand-primary">
                  Onze aanpak <DotAccent size="sm" />
                </p>
                <h2
                  className="heading-coral mt-5 max-w-md"
                  style={{ fontSize: "clamp(1.8rem, 3.6vw, 3rem)" }}
                >
                  Snel en efficiënt, met oog voor kwaliteit.
                </h2>
              </div>
              <p className="text-base leading-relaxed text-brand-ink-soft md:col-span-7 md:text-lg">
                Eén traject van plaatsbezoek tot oplevering, één aanspreekpunt
                die alles coördineert. Geen verrassingen, geen telefoons tussen
                aannemers — wij nemen de regie.
              </p>
            </div>
          </Reveal>
          <ol className="mt-16 grid gap-12 lg:grid-cols-3">
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
                <li className="border-t border-brand-line pt-6">
                  <span className="flex items-baseline gap-2 font-display text-5xl text-brand-primary md:text-6xl">
                    {s.n}
                    <DotAccent size="md" />
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-brand-ink">{s.t}</h3>
                  <p className="mt-3 text-brand-ink-soft">{s.b}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          {/* Floating red circle CTA */}
          <div className="mt-16 flex justify-center">
            <RedCircleCTA
              label="Vraag een onderbouwde offerte"
              href="/offerte"
              size="lg"
            />
          </div>
        </div>
      </section>

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

      <section className="section-cream py-24">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-brand-primary">
                  Wat klanten zeggen <DotAccent size="sm" />
                </p>
                <h2
                  className="heading-coral mt-5 max-w-2xl"
                  style={{ fontSize: "clamp(1.8rem, 3.6vw, 3rem)" }}
                >
                  20 jaar ervaring vertelt zich door.
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
