import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Briefcase, MapPin, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { DivisionTheme } from "@/components/layout/DivisionTheme";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { getJob, jobs } from "@/content/jobs";
import { divisions } from "@/content/divisions";

type Params = { slug: string };

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return buildMetadata({ title: "Vacature niet gevonden", path: `/jobs/${slug}`, noIndex: true });
  return buildMetadata({
    title: `${job.title} — jobs bij AGNAU`,
    description: job.excerpt,
    path: `/jobs/${slug}`,
  });
}

export default async function JobPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  const div = job.division !== "groep" ? divisions[job.division] : null;
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Jobs", url: "/jobs" },
    { name: job.title, url: `/jobs/${job.slug}` },
  ];

  const inner = (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <section className="py-12 md:py-16">
        <Container>
          <Link href="/jobs" className="inline-flex items-center gap-2 text-sm text-slate hover:text-ink">
            <ArrowLeft className="size-4" />
            Alle vacatures
          </Link>
        </Container>
      </section>

      <section className="pb-12">
        <Container size="narrow">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            {div ? div.name : "Groep"} · {job.functionType}
          </p>
          <h1 className="mt-3">{job.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate">{job.excerpt}</p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate">
            <li className="flex items-center gap-2">
              <Briefcase className="size-4 text-mute" />
              {job.contract}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-mute" />
              {job.location}
            </li>
          </ul>
        </Container>
      </section>

      <section className="pb-16">
        <Container size="narrow">
          <p className="text-lg text-slate">{job.description}</p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl">Wat we vragen</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl">Wat we bieden</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate">
                {job.offer.map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-off-white py-16 md:py-20">
        <Container size="narrow">
          <p className="eyebrow">Solliciteer</p>
          <h2 className="mt-3">Klaar om te starten?</h2>
          <p className="mt-3 text-slate">Stuur uw motivatie en CV-toevoeging — we nemen contact op binnen 5 werkdagen.</p>
          <div className="mt-10">
            <JobApplicationForm jobTitle={job.title} />
          </div>
        </Container>
      </section>
    </>
  );

  return div ? <DivisionTheme theme={div.themeKey}>{inner}</DivisionTheme> : inner;
}
