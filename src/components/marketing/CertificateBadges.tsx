import { ShieldCheck } from "lucide-react";
import { certificates } from "@/lib/site";

interface Props {
  ids?: string[];
}

export function CertificateBadges({ ids }: Props) {
  const list = ids?.length
    ? certificates.filter((c) => ids.includes(c.id))
    : certificates;
  if (!list.length) return null;
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {list.map((c) => (
        <li
          key={c.id}
          className="flex items-start gap-3 rounded-md border border-brand-line bg-white p-4"
        >
          <ShieldCheck className="mt-0.5 size-5 text-brand-primary" />
          <div>
            <p className="font-medium text-brand-ink">{c.label}</p>
            <p className="text-sm text-brand-ink-soft">{c.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
