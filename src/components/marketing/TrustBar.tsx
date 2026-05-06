import { ShieldCheck } from "lucide-react";
import { certificates } from "@/lib/site";

export function TrustBar() {
  return (
    <section
      aria-label="Certificeringen en ervaring"
      className="border-y border-brand-line bg-brand-bg-alt/60"
    >
      <div className="container-page flex flex-wrap items-center justify-between gap-y-4 py-6 text-sm text-brand-ink-soft">
        <div className="flex items-center gap-2 font-medium text-brand-primary">
          <ShieldCheck className="size-5" />
          <span>20+ jaar ervaring · gecertificeerd vakwerk</span>
        </div>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {certificates.map((c) => (
            <li
              key={c.id}
              className="rounded-md border border-brand-line bg-white px-3 py-1.5 text-xs font-medium tracking-wide text-brand-ink"
              title={c.description}
            >
              {c.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
