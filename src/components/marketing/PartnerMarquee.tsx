import { partners } from "@/lib/site";
import { Marquee } from "@/components/ui/Marquee";

export function PartnerMarquee() {
  return (
    <Marquee>
      {partners.map((p) => (
        <span
          key={p.id}
          title={p.description}
          className="select-none whitespace-nowrap font-display text-2xl font-bold uppercase tracking-tight text-mute transition-colors duration-300 hover:text-ink md:text-3xl"
        >
          {p.label}
        </span>
      ))}
    </Marquee>
  );
}
