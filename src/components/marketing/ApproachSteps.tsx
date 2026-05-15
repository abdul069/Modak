import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import type { Division } from "@/content/divisions";

export function ApproachSteps({ division }: { division: Division }) {
  return (
    <section className="bg-off-white py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Onze aanpak"
          title="Drie stappen. Geen verrassingen."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {division.approach.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1}>
              <div className="relative flex h-full flex-col rounded-xl border border-line bg-white p-7">
                <span className="font-display text-6xl font-bold text-accent leading-none">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
