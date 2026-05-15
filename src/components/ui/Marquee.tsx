import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  /** Animation speed (s for full loop). Higher = slower. */
  speed?: number;
  /** Reverse direction. */
  reverse?: boolean;
  className?: string;
  /** Pause animation on hover. */
  pauseOnHover?: boolean;
}

/**
 * Endless horizontal marquee. Duplicates content twice for seamless loop.
 * Children should be a single ReactNode that has its own internal spacing.
 */
export function Marquee({
  children,
  speed = 40,
  reverse = false,
  className,
  pauseOnHover = false,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "marquee-mask group/marquee flex w-full overflow-hidden",
        className
      )}
      role="presentation"
    >
      <div
        className={cn(
          "flex w-max items-center gap-16 will-change-transform",
          "animate-marquee",
          pauseOnHover && "group-hover/marquee:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        <span className="flex items-center gap-16" aria-hidden>
          {children}
        </span>
      </div>
    </div>
  );
}
