import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { DivisionTheme } from "@/components/layout/DivisionTheme";
import { LeadTracker } from "@/components/tracking/LeadTracker";
import { divisions, DIVISION_SLUGS } from "@/content/divisions";
import type { DivisionSlug } from "@/content/divisions";
import { buildMetadata } from "@/lib/seo";

type Params = { divisie: string };

export function generateStaticParams() {
  return DIVISION_SLUGS.map((divisie) => ({ divisie }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { divisie } = await params;
  if (!(DIVISION_SLUGS as readonly string[]).includes(divisie)) {
    return buildMetadata({ title: "Bedankt", path: "/bedankt", noIndex: true });
  }
  const division = divisions[divisie as DivisionSlug];
  return buildMetadata({
    title: `Bedankt — ${division.name}`,
    description: "Uw aanvraag is goed ontvangen. We bellen u binnen 24 uur terug.",
    path: `/bedankt/${divisie}`,
    noIndex: true,
  });
}

export default async function ThankYouPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { divisie } = await params;
  if (!(DIVISION_SLUGS as readonly string[]).includes(divisie)) {
    notFound();
  }
  const division = divisions[divisie as DivisionSlug];

  return (
    <DivisionTheme theme={division.themeKey}>
      <LeadTracker division={division.slug} eventName={division.meta.conversionEvent} />

      <section className="bg-off-white py-20 md:py-28">
        <Container size="narrow">
          <span className="inline-flex size-14 items-center justify-center rounded-full bg-accent text-white">
            <Check className="size-7" />
          </span>
          <p className="eyebrow mt-6">
            {division.hero.eyebrow}
          </p>
          <h1 className="mt-3">Bedankt. Uw aanvraag is goed ontvangen.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
            We hebben uw vraag voor <strong className="text-ink">{division.name.toLowerCase()}</strong> in goede orde ontvangen.
            Een projectleider neemt binnen <strong className="text-ink">24 uur</strong> contact op
            om een plaatsbezoek in te plannen.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container size="narrow">
          <h2 className="text-2xl">Wat gebeurt er nu?</h2>
          <ol className="mt-8 space-y-6">
            {[
              {
                title: "We bellen u terug",
                body: "Binnen 24 uur op werkdagen — om uw vraag te valideren en een geschikte datum voor plaatsbezoek in te plannen.",
              },
              {
                title: "We komen ter plaatse",
                body: "Een projectleider en een vakman van de divisie bekijken samen met u de situatie en stellen vragen.",
              },
              {
                title: "U krijgt een onderbouwde offerte",
                body: "Binnen 7 werkdagen na het plaatsbezoek bezorgen we een gedetailleerde prijs met materiaalkeuze en timing.",
              },
            ].map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent-soft font-mono text-sm font-bold text-accent-deep">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-1 text-slate">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Button asChild variant="ink">
              <Link href="/">
                Terug naar home
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={`/${division.slug}`}>
                Terug naar {division.name}
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </DivisionTheme>
  );
}
