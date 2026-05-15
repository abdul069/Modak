import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { DivisionIcon } from "@/components/brand/DivisionIcon";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import type { Division } from "@/content/divisions";

export function ServicesGrid({ division }: { division: Division }) {
  return (
    <section className="bg-off-white py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Onze expertise"
          title={`Wat we doen binnen ${division.shortName}.`}
          description="Alle diensten worden uitgevoerd door eigen vakmensen onder leiding van één werfleider per project."
        />

        <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {division.services.map((s) => (
            <RevealItem key={s.title}>
              <article className="group h-full rounded-xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg">
                <span className="grid size-12 place-items-center rounded-md bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110">
                  <DivisionIcon iconKey={s.icon} className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {s.description}
                </p>
                <span className="mt-5 block h-[2px] w-8 bg-accent transition-all duration-300 group-hover:w-16" />
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
