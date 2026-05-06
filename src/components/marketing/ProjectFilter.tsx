"use client";

import * as React from "react";
import { ProjectCard } from "@/components/marketing/ProjectCard";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

interface ProjectItem {
  slug: string;
  title: string;
  location: string;
  year: number;
  services: string[];
  heroImage?: string;
  excerpt?: string;
}

export function ProjectFilter({ projects }: { projects: ProjectItem[] }) {
  const [filter, setFilter] = React.useState<string | null>(null);

  const filtered = filter
    ? projects.filter((p) => p.services.includes(filter))
    : projects;

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <FilterButton
          active={filter === null}
          onClick={() => setFilter(null)}
          label="Alle realisaties"
          count={projects.length}
        />
        {services.map((s) => {
          const count = projects.filter((p) => p.services.includes(s.slug))
            .length;
          if (count === 0) return null;
          return (
            <FilterButton
              key={s.slug}
              active={filter === s.slug}
              onClick={() => setFilter(s.slug)}
              label={s.title}
              count={count}
            />
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-lg border border-brand-line bg-white p-8 text-center text-brand-ink-soft">
          Geen realisaties met deze filter. Probeer een andere combinatie.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm transition-colors",
        active
          ? "border-brand-primary bg-brand-primary text-white"
          : "border-brand-line bg-white text-brand-ink hover:border-brand-primary"
      )}
      aria-pressed={active}
    >
      {label}
      <span
        className={cn(
          "rounded-full px-1.5 text-xs",
          active
            ? "bg-white/20 text-white"
            : "bg-brand-bg-alt text-brand-ink-soft"
        )}
      >
        {count}
      </span>
    </button>
  );
}
