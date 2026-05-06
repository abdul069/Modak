import Link from "next/link";
import { BadgeEuro } from "lucide-react";

interface Props {
  title?: string;
  body?: string;
  href?: string;
}

export function PremieBlock({
  title = "Premies & subsidies",
  body = "Voor warmtepompen, dakisolatie en ventilatie zijn er Vlaamse premies via Mijn VerbouwPremie. We berekenen samen wat je in jouw situatie kan recupereren.",
  href = "/premies",
}: Props) {
  return (
    <section className="rounded-lg border border-brand-accent/40 bg-brand-accent/10 p-6 md:p-8">
      <div className="flex items-start gap-4">
        <span className="grid size-12 shrink-0 place-items-center rounded-md bg-brand-accent text-brand-ink">
          <BadgeEuro className="size-6" />
        </span>
        <div className="flex-1">
          <h3 className="font-display text-xl text-brand-ink">{title}</h3>
          <p className="mt-2 text-brand-ink-soft">{body}</p>
          <Link
            href={href}
            className="mt-3 inline-flex text-sm font-medium text-brand-primary underline-offset-4 hover:underline"
          >
            Bekijk alle actuele premies →
          </Link>
        </div>
      </div>
    </section>
  );
}
