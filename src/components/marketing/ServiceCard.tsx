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
      className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-lg border border-brand-line bg-white p-6
                 transition-all duration-300 ease-out
                 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lg"
    >
      {/* Subtle gradient that fades in on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(31,78,95,0.05), transparent 60%)",
        }}
      />
      <span
        className="relative grid size-11 place-items-center rounded-md bg-brand-primary/8 text-brand-primary
                   transition-all duration-300 ease-out
                   group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white"
      >
        <Icon className="size-5" />
      </span>
      <div className="relative flex-1">
        <h3 className="font-display text-xl text-brand-ink">{title}</h3>
        <p className="mt-2 text-sm text-brand-ink-soft">{short}</p>
      </div>
      <span className="relative inline-flex items-center gap-1 text-sm font-medium text-brand-primary">
        Lees meer
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </span>
    </Link>
  );
}
