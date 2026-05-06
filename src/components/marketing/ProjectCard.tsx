import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { services as allServices } from "@/lib/site";

interface ProjectCardProps {
  slug: string;
  title: string;
  location: string;
  year: number;
  services: string[];
  heroImage?: string;
  excerpt?: string;
}

export function ProjectCard({
  slug,
  title,
  location,
  year,
  services,
  heroImage,
  excerpt,
}: ProjectCardProps) {
  const labelMap = Object.fromEntries(
    allServices.map((s) => [s.slug, s.title])
  );
  return (
    <Link
      href={`/realisaties/${slug}`}
      className="group block overflow-hidden rounded-lg border border-brand-line bg-white transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg-alt">
        {heroImage ? (
          <Image
            src={heroImage}
            alt={`Realisatie ${title} in ${location}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="grid h-full place-items-center text-brand-ink-soft/60">
            <span className="font-display text-4xl text-brand-primary/20">
              Modak
            </span>
          </div>
        )}
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-brand-ink-soft">
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-3.5" />
            {location}
          </span>
          <span>{year}</span>
        </div>
        <h3 className="font-display text-lg text-brand-ink">{title}</h3>
        {excerpt ? (
          <p className="text-sm text-brand-ink-soft">{excerpt}</p>
        ) : null}
        <ul className="flex flex-wrap gap-1.5 pt-1">
          {services.slice(0, 4).map((s) => (
            <li
              key={s}
              className="rounded-full border border-brand-line bg-brand-bg px-2.5 py-0.5 text-xs text-brand-ink-soft"
            >
              {labelMap[s] ?? s}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
