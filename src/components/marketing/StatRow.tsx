"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Stat = { value: string; label: string };

type StatRowProps = {
  items: Stat[];
};

export function StatRow({ items }: StatRowProps) {
  return (
    <ul className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
      {items.map((s, i) => (
        <StatCell key={s.label} stat={s} index={i} />
      ))}
    </ul>
  );
}

function StatCell({ stat, index }: { stat: Stat; index: number }) {
  const ref = React.useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: reduce ? 0 : 16 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="border-l-2 border-line pl-5"
    >
      <p className="font-display text-4xl font-bold text-ink md:text-5xl">
        {stat.value}
      </p>
      <p className="mt-1 text-sm text-slate">{stat.label}</p>
    </motion.li>
  );
}
