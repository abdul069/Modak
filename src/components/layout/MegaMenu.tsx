"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuCategory {
  title: string;
  items: { label: string; href: string }[];
}

const categories: MenuCategory[] = [
  {
    title: "Dak & schil",
    items: [
      { label: "Dakrenovatie", href: "/diensten/dakrenovatie" },
      { label: "Dakisolatie", href: "/diensten/dakisolatie" },
    ],
  },
  {
    title: "Klimaat",
    items: [
      { label: "Warmtepompen", href: "/diensten/warmtepompen" },
      { label: "Verwarming", href: "/diensten/verwarming" },
      { label: "Ventilatie", href: "/diensten/ventilatie" },
      { label: "Airco", href: "/diensten/airco" },
    ],
  },
  {
    title: "Sanitair",
    items: [
      { label: "Sanitair", href: "/diensten/sanitair" },
      { label: "Badkamers", href: "/diensten/badkamers" },
    ],
  },
  {
    title: "Energie",
    items: [
      { label: "Elektriciteitswerken", href: "/diensten/elektriciteitswerken" },
      { label: "Zonnepanelen", href: "/diensten/zonnepanelen" },
      { label: "Laadpalen", href: "/diensten/laadpalen" },
    ],
  },
];

interface MegaMenuProps {
  label: string;
  href: string;
}

export function MegaMenu({ label, href }: MegaMenuProps) {
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef<number | null>(null);

  const onEnter = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  };
  const onLeave = () => {
    closeTimer.current = window.setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <Link
        href={href}
        className={cn(
          "relative flex items-center gap-1 text-sm transition-colors",
          "text-brand-ink hover:text-brand-primary",
          "after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full",
          "after:origin-left after:scale-x-0 after:bg-brand-primary",
          "after:transition-transform after:duration-300",
          open && "text-brand-primary after:scale-x-100"
        )}
      >
        {label}
        <ChevronDown className={cn("size-3.5 transition-transform duration-300", open && "rotate-180")} />
      </Link>

      {/* Mega panel */}
      <div
        className={cn(
          "absolute left-1/2 top-full z-50 mt-3 w-screen max-w-[900px] -translate-x-1/2 transition-all duration-200",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        )}
        aria-hidden={!open}
      >
        <div className="overflow-hidden rounded-2xl border border-brand-line bg-brand-bg shadow-2xl">
          <div className="grid grid-cols-4 gap-6 p-8">
            {categories.map((cat) => (
              <div key={cat.title}>
                <h4 className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand-accent">
                  {cat.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {cat.items.map((it) => (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        className="group/mi inline-flex items-center gap-2 text-sm font-medium text-brand-ink transition-colors hover:text-brand-primary"
                      >
                        {it.label}
                        <ArrowRight className="size-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover/mi:translate-x-0 group-hover/mi:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-brand-line bg-brand-bg-alt px-8 py-4">
            <Link
              href={href}
              className="group/all inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary transition-colors hover:text-brand-accent"
            >
              Bekijk alle diensten
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/all:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
