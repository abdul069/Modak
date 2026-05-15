import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import type { Division } from "@/content/divisions";

export function UseCaseStrip({ division }: { division: Division }) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Voor wie & wanneer"
          title="Drie typische trajecten."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {division.useCases.map((u, i) => (
            <Reveal key={u.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-xl border border-line bg-white p-7">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Use case {i + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">
                  {u.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                  {u.description}
                </p>
                <dl className="mt-6 space-y-2 border-t border-line pt-4 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-mute">Doorlooptijd</dt>
                    <dd className="font-mono text-ink">{u.timing}</dd>
                  </div>
                  {u.budgetRange ? (
                    <div className="flex justify-between">
                      <dt className="text-mute">Budget</dt>
                      <dd className="font-mono text-ink">{u.budgetRange}</dd>
                    </div>
                  ) : null}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
