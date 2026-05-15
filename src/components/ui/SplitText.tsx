"use client";

import * as React from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  children: string;
  /** Element to render: span (default), h1, h2, h3, p */
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  /** Stagger delay between words in ms */
  stagger?: number;
  /** ms before the first word starts */
  delay?: number;
  /** Replay every time it enters the viewport */
  replay?: boolean;
  /** Manual trigger override (e.g. on initial page load). Default: in-view. */
  trigger?: boolean;
}

const wordVariants: Variants = {
  hidden: {
    y: "120%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Word-by-word entrance animation. Splits the input string on whitespace,
 * wraps each word in an inline-block span, and reveals them staggered.
 * Respects prefers-reduced-motion.
 */
export function SplitText({
  children,
  as = "span",
  className,
  stagger = 30,
  delay = 0,
  replay = false,
  trigger,
}: SplitTextProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: !replay, amount: 0.4 });
  const active = trigger ?? inView;

  const words = children.split(/(\s+)/);

  // Detect reduced motion at runtime
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (reduced) {
    const Wrapper = as as React.ElementType;
    return <Wrapper className={className}>{children}</Wrapper>;
  }

  const Wrapper = as as React.ElementType;
  return (
    <Wrapper className={cn(className)}>
      <span ref={ref} className="inline">
        {words.map((word, i) => {
          if (/^\s+$/.test(word)) return word;
          return (
            <span
              key={i}
              className="inline-block overflow-hidden align-bottom"
              style={{ paddingBottom: "0.08em" }}
            >
              <motion.span
                className="inline-block"
                initial="hidden"
                animate={active ? "visible" : "hidden"}
                variants={wordVariants}
                transition={{ delay: (delay + i * stagger) / 1000 }}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </span>
    </Wrapper>
  );
}
