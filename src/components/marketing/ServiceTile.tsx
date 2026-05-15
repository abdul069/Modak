import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { resolveIcon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

interface ServiceTileProps {
  title: string;
  short: string;
  slug: string;
  icon?: string;
  image: string;
  tint?: "neutral" | "amber" | "red" | "emerald" | "sky" | "cyan";
}

const TINT_GRADIENTS: Record<string, string> = {
  neutral: "from-black/85 via-black/40 to-transparent",
  amber: "from-amber-900/85 via-amber-800/45 to-transparent",
  red: "from-red-900/85 via-red-800/45 to-transparent",
  emerald: "from-emerald-900/85 via-emerald-800/45 to-transparent",
  sky: "from-sky-900/85 via-sky-800/45 to-transparent",
  cyan: "from-cyan-900/85 via-cyan-800/45 to-transparent",
};

export function ServiceTile({
  title,
  short,
  slug,
  icon,
  image,
  tint = "neutral",
}: ServiceTileProps) {
  const Icon = resolveIcon(icon);
  return (
    <Link
      href={`/diensten/${slug}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-brand-bg-dark"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="photo-graded-strong object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 bg-gradient-to-t",
          TINT_GRADIENTS[tint] ?? TINT_GRADIENTS.neutral
        )}
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6 text-white">
        <div>
          <Icon className="mb-3 size-6 text-brand-accent opacity-90" />
          <h3 className="font-display text-xl text-white md:text-2xl">{title}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-white/80">{short}</p>
        </div>
        <span
          aria-hidden
          className="grid size-10 shrink-0 place-items-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-white"
        >
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
