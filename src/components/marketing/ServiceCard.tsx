import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { resolveIcon } from "@/lib/icon-map";

interface ServiceCardProps {
  title: string;
  short: string;
  slug: string;
  icon?: string;
}

export function ServiceCard({ title, short, slug, icon }: ServiceCardProps) {
  const Icon = resolveIcon(icon);
  return (
    <Link
      href={`/diensten/${slug}`}
      className="group relative flex h-full flex-col gap-4 rounded-lg border border-brand-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-primary/40 hover:shadow-md"
    >
      <span className="grid size-11 place-items-center rounded-md bg-brand-primary/8 text-brand-primary">
        <Icon className="size-5" />
      </span>
      <div className="flex-1">
        <h3 className="font-display text-xl text-brand-ink">{title}</h3>
        <p className="mt-2 text-sm text-brand-ink-soft">{short}</p>
      </div>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary">
        Lees meer
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
