import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroPhoto } from "@/components/marketing/HeroPhoto";
import { TrustBar } from "@/components/marketing/TrustBar";
import { ServiceTile } from "@/components/marketing/ServiceTile";
import { FeaturedProject } from "@/components/marketing/FeaturedProject";
import { TestimonialSlider } from "@/components/marketing/TestimonialSlider";
import { CTABlock } from "@/components/marketing/CTABlock";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/seo";
import { services, siteConfig } from "@/lib/site";
import { getAllProjects } from "@/lib/content";

const PROJECT_ACCENT_VARIANTS: Array<"white" | "accent" | "dark"> = [
  "white",
  "accent",
  "white",
];

export default function HomePage() {
  const projects = getAllProjects();
  const featured = projects.slice(0, 3);

  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      <HeroPhoto
        photoUrl={siteConfig.heroPhoto}
        photoAlt="Hedendaagse Belgische woning gerenoveerd door AGNAU"
        eyebrow="Renovatie · Gent · Vlaanderen"
        title="Eén partner. Volledige renovatie."
        subtitle="Dak, isolatie, warmtepomp, ventilatie, sanitair en badkamer onder één planning. Geen jongleren met aannemers — één team dat je woning gezond, zuinig en mooi maakt."
        primaryCta={{ label: "Vraag offerte aan", href: "/offerte" }}
        secondaryCta={{ label: "Bekijk realisaties", href: "/realisaties" }}
      />

      <TrustBar />

      {featured[0] ? (
        <FeaturedProject
          slug={featured[0].slug}
          title={featured[0].frontmatter.title}
          location={featured[0].frontmatter.location}
          excerpt={featured[0].frontmatter.excerpt ?? ""}
          image={featured[0].frontmatter.heroImage ?? ""}
          quote={featured[0].frontmatter.quote}
          imageSide="left"
          variant={PROJECT_ACCENT_VARIANTS[0]}
        />
      ) : null}

      <section className="section-dark py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeader
              eyebrow="Onze diensten"
              title="De volledige energetische schil van je woning."
              description="Acht specialisaties die we onder eigen leiding uitvoeren — geen onderaannemers waar het om kerntechniek gaat."
              invert
            />
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <ServiceTile
                  slug={service.slug}
                  title={service.title}
                  short={service.short}
                  icon={service.icon}
                  image={service.image}
                />
              </Reveal>
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
          quote={featured[1].frontmatter.quote}
          imageSide="right"
          variant={PROJECT_ACCENT_VARIANTS[1]}
        />
      ) : null}

      {/* Aanpak in 3 stappen */}
      <section className="section-dark py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeader
              eyebrow="Onze aanpak"
              title="Eén traject. Drie stappen. Geen verrassingen."
              invert
            />
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
                <li className="border-t border-white/20 pt-6">
                  <span className="font-display text-5xl text-brand-accent md:text-6xl">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-white">{s.t}</h3>
                  <p className="mt-3 text-white/75">{s.b}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {featured[2] ? (
        <FeaturedProject
          slug={featured[2].slug}
          title={featured[2].frontmatter.title}
          location={featured[2].frontmatter.location}
          excerpt={featured[2].frontmatter.excerpt ?? ""}
          image={featured[2].frontmatter.heroImage ?? ""}
          quote={featured[2].frontmatter.quote}
          imageSide="left"
          variant={PROJECT_ACCENT_VARIANTS[2]}
        />
      ) : null}

      <section className="bg-white py-24">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeader
                eyebrow="Wat klanten zeggen"
                title="20 jaar ervaring vertelt zich door."
              />
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
