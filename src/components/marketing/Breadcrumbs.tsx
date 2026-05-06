import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  name: string;
  url: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Broodkruimels" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-brand-ink-soft">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-1">
              {isLast ? (
                <span className="text-brand-ink" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-brand-primary hover:underline"
                >
                  {item.name}
                </Link>
              )}
              {!isLast && <ChevronRight className="size-3.5" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
