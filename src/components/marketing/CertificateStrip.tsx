import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { partners } from "@/lib/site";

export function CertificateStrip({ partnerIds }: { partnerIds: string[] }) {
  const items = partners.filter((p) => partnerIds.includes(p.id));
  if (items.length === 0) return null;

  return (
    <section className="border-y border-line py-12">
      <Container>
        <Reveal>
          <p className="eyebrow text-center" style={{ color: "var(--mute)" }}>
            Officieel erkend voor deze divisie
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {items.map((p) => (
              <li
                key={p.id}
                title={p.description}
                className="font-display text-xl font-bold uppercase tracking-tight text-mute transition-colors hover:text-ink md:text-2xl"
              >
                {p.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
