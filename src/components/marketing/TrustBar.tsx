import { ShieldCheck } from "lucide-react";
import { certificates } from "@/lib/site";

export function TrustBar() {
  // duplicate the list for a seamless marquee loop
  const items = [...certificates, ...certificates];

  return (
    <section
      aria-label="Certificeringen en ervaring"
      className="border-y border-brand-line bg-brand-bg-alt/60"
    >
      <div className="container-page flex flex-col gap-6 py-7 md:flex-row md:items-center md:justify-between">
        <div className="flex shrink-0 items-center gap-2 text-sm font-medium text-brand-primary">
          <ShieldCheck className="size-5" />
          <span>20+ jaar ervaring · gecertificeerd vakwerk</span>
        </div>

        <div className="marquee-mask relative flex-1 overflow-hidden">
          <ul
            className="flex w-max items-center gap-3 animate-marquee"
            aria-hidden="false"
          >
            {items.map((c, i) => (
              <li
                key={`${c.id}-${i}`}
                className="rounded-full border border-brand-line bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-brand-ink shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
                title={c.description}
              >
                {c.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
