"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuCluster {
  title: string;
  items: { label: string; href: string }[];
}

const clusters: MenuCluster[] = [
  {
    title: "Dak & gevel",
    items: [
      { label: "Dakrenovatie", href: "/diensten/dakrenovatie" },
      { label: "Dakisolatie", href: "/diensten/dakisolatie" },
    ],
  },
  {
    title: "Interieur",
    items: [
      { label: "Badkamers", href: "/diensten/badkamers" },
      { label: "Sanitair", href: "/diensten/sanitair" },
      { label: "Keukens", href: "/diensten/keukens" },
      { label: "Vloeren", href: "/diensten/vloeren" },
    ],
  },
  {
    title: "Verwarming & koeling",
    items: [
      { label: "Warmtepompen", href: "/diensten/warmtepompen" },
      { label: "Verwarming", href: "/diensten/verwarming" },
      { label: "Airco", href: "/diensten/airco" },
    ],
  },
  {
    title: "Lucht & energie",
    items: [
      { label: "Ventilatie", href: "/diensten/ventilatie" },
      { label: "Zonnepanelen", href: "/diensten/zonnepanelen" },
    ],
  },
  {
    title: "Elektriciteit",
    items: [
      { label: "Elektriciteitswerken", href: "/diensten/elektriciteitswerken" },
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
    closeTimer.current = window.setTimeout(() => setOpen(false), 200);
  };

  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <Link
        href={href}
        className={cn(
          "relative flex items-center gap-1 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-charcoal transition-colors hover:text-clay-dark",
          "after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-clay after:transition-transform after:duration-300 hover:after:scale-x-100",
          open && "text-clay-dark after:scale-x-100"
        )}
      >
        {label}
        <ChevronDown className={cn("size-3 transition-transform duration-300", open && "rotate-180")} />
      </Link>

      <div
        className={cn(
          "absolute left-1/2 top-full z-50 mt-4 w-screen max-w-[1080px] -translate-x-1/2 transition-all duration-300",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        )}
        aria-hidden={!open}
      >
        <div className="overflow-hidden rounded-2xl border border-linen bg-bone shadow-[0_30px_80px_-25px_rgba(31,28,26,0.25)]">
          <div className="grid grid-cols-5 gap-8 p-10">
            {clusters.map((cluster) => (
              <div key={cluster.title}>
                <h4 className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.22em] text-clay-dark">
                  {cluster.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {cluster.items.map((it) => (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        className="group/mi inline-flex items-center gap-2 font-display text-base text-charcoal transition-colors hover:text-clay-dark"
                      >
                        {it.label}
                        <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover/mi:translate-x-0 group-hover/mi:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-linen bg-bone-soft px-10 py-5">
            <Link
              href={href}
              className="group/all inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-charcoal transition-colors hover:text-clay-dark"
            >
              Bekijk alle diensten
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/all:translate-x-1" />
            </Link>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-stone">
              13 disciplines · 1 partner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
