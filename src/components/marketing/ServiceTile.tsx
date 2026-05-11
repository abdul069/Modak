import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { resolveIcon } from "@/lib/icon-map";

interface ServiceTileProps {
  title: string;
  short: string;
  slug: string;
  icon?: string;
  image: string;
}

export function ServiceTile({ title, short, slug, icon, image }: ServiceTileProps) {
  const Icon = resolveIcon(icon);
  return (
    <Link
      href={`/diensten/${slug}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-md bg-brand-bg-dark"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6 text-white">
        <div>
          <Icon className="mb-3 size-6 text-brand-accent opacity-90" />
          <h3 className="font-display text-xl text-white md:text-2xl">{title}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-white/80">{short}</p>
        </div>
        <span
          aria-hidden
          className="grid size-9 shrink-0 place-items-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:bg-white group-hover:text-brand-bg-dark"
        >
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
