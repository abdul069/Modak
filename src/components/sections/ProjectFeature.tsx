"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import * as React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface ProjectFeatureProps {
  slug: string;
  title: string;
  location: string;
  excerpt: string;
  image: string;
  quote?: { text: string; author: string };
  index?: number;
}

/**
 * Featured project block — 50/50 split, info-left + photo-right.
 * Photo has scroll-driven parallax via framer-motion useScroll.
 */
export function ProjectFeature({
  slug,
  title,
  location,
  excerpt,
  image,
  quote,
  index = 1,
}: ProjectFeatureProps) {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} className="bg-bone py-24 md:py-32">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Info */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <Eyebrow rule>{`${String(index).padStart(2, "0")} · Realisatie · ${location}`}</Eyebrow>
            <h2
              className="mt-6 font-display leading-[1.05] text-charcoal"
              style={{ fontSize: "clamp(2rem, 3.6vw, 3rem)", letterSpacing: "-0.015em" }}
            >
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-stone md:text-lg">
              {excerpt}
            </p>
            {quote ? (
              <blockquote className="mt-8 max-w-lg border-l-2 border-clay pl-5 font-display text-lg italic leading-relaxed text-charcoal/85 md:text-xl">
                &ldquo;{quote.text}&rdquo;
                <footer className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-stone not-italic">
                  — {quote.author}
                </footer>
              </blockquote>
            ) : null}
            <Link
              href={`/realisaties/${slug}`}
              className="group/link mt-10 inline-flex items-center gap-3 rounded-full border border-charcoal/20 px-6 py-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-charcoal transition-all duration-300 hover:border-clay hover:bg-clay self-start"
              data-cursor="Lees"
            >
              Bekijk realisatie
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>

          {/* Photo with parallax */}
          <div className="overflow-hidden lg:col-span-7">
            <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[5/4]">
              <motion.div style={{ y }} className="absolute inset-x-0 -top-[10%] h-[120%]">
                <Image
                  src={image}
                  alt={`Realisatie ${title}`}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
