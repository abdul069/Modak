"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { DivisionIcon } from "@/components/brand/DivisionIcon";
import { getAllDivisions } from "@/lib/division";

export function DivisionGrid() {
  const divisions = getAllDivisions();
  const reduceMotion = useReducedMotion();

  return (
    <motion.ul
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
      }}
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4"
    >
      {divisions.map((d) => (
        <motion.li
          key={d.slug}
          variants={{
            hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <Link
            href={`/${d.slug}`}
            data-division={d.themeKey}
            className="group relative block h-full overflow-hidden rounded-xl bg-accent p-6 text-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-7"
          >
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-md bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <DivisionIcon iconKey={d.iconKey} className="size-6 text-white" />
                </span>
                <ArrowUpRight className="size-5 translate-x-0 translate-y-0 text-white/70 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
              </div>

              <div className="mt-12">
                <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                  {d.name}
                </h3>
                <p className="mt-2 max-w-xs text-sm text-white/85 md:text-base">
                  {d.tagline}
                </p>
              </div>
            </div>

            {/* sheen overlay */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
