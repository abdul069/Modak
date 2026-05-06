import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  variant?: "color" | "white";
}

const COLORS = {
  navy: "#1B2A3A",
  green: "#3A9B3A",
  blue: "#2C7BD6",
  red: "#D63D2C",
  grid: "#D6D6D6",
} as const;

/**
 * Compact logomark — house silhouette with 4-quadrant disciplines.
 * Reads cleanly at 28-48px in headers/footers.
 */
export function LogoMark({
  className,
  monochrome = false,
}: {
  className?: string;
  monochrome?: boolean;
}) {
  if (monochrome) {
    return (
      <svg
        viewBox="0 0 60 60"
        fill="none"
        aria-hidden
        className={className}
        role="presentation"
      >
        <path
          d="M8 52 L8 28 L30 8 L52 28 L52 52 Z"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <rect
          x="40"
          y="13"
          width="5"
          height="9"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <line
          x1="30"
          y1="22"
          x2="30"
          y2="52"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.4"
        />
        <line
          x1="11"
          y1="40"
          x2="49"
          y2="40"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.4"
        />
        <circle cx="20.5" cy="33" r="2.6" fill="currentColor" />
        <circle cx="39.5" cy="33" r="2.6" fill="currentColor" />
        <circle cx="20.5" cy="47" r="2.6" fill="currentColor" />
        <circle cx="39.5" cy="47" r="2.6" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      aria-hidden
      className={className}
      role="presentation"
    >
      {/* House outline — left half navy */}
      <path
        d="M8 52 L8 28 L30 8 L30 52 Z"
        stroke={COLORS.navy}
        strokeWidth="2.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* House outline — right half green */}
      <path
        d="M30 8 L52 28 L52 52 L30 52 Z"
        stroke={COLORS.green}
        strokeWidth="2.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Chimney */}
      <path
        d="M40 22 L40 13 L45 13 L45 18"
        stroke={COLORS.green}
        strokeWidth="2.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      {/* Cross dividers */}
      <line
        x1="30"
        y1="22"
        x2="30"
        y2="52"
        stroke={COLORS.grid}
        strokeWidth="1.3"
      />
      <line
        x1="11"
        y1="40"
        x2="49"
        y2="40"
        stroke={COLORS.grid}
        strokeWidth="1.3"
      />
      {/* TL: water (blue droplet) */}
      <path
        d="M20.5 28 C 17 32, 17 36.5, 20.5 36.5 C 24 36.5, 24 32, 20.5 28 Z"
        fill={COLORS.blue}
      />
      {/* TR: flame (red) */}
      <path
        d="M39.5 28 C 36 32, 36 36.5, 39.5 36.5 C 43 36.5, 43 32, 39.5 28 Z"
        fill={COLORS.red}
      />
      {/* BL: plug (green) */}
      <g fill="none" stroke={COLORS.green} strokeWidth="1.7" strokeLinecap="round">
        <circle cx="20.5" cy="46" r="2.8" />
        <line x1="19" y1="44" x2="19" y2="42" />
        <line x1="22" y1="44" x2="22" y2="42" />
      </g>
      {/* BR: fan (blue, 3 blades) */}
      <g fill={COLORS.blue}>
        <circle cx="39.5" cy="46" r="1" />
        <path d="M39.5 43 C 41 44, 41.5 45, 39.5 46 C 38.5 45, 38 44, 39.5 43 Z" />
        <path d="M42.2 47.5 C 41 47, 40.5 46, 39.5 46 C 40.5 47, 41.5 48, 42.2 47.5 Z" />
        <path d="M36.8 47.5 C 38 47, 38.5 46, 39.5 46 C 38.5 47, 37.5 48, 36.8 47.5 Z" />
      </g>
    </svg>
  );
}

export function LogoWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-[1.3rem] font-medium tracking-[0.22em]",
        className
      )}
    >
      AGNAU
      {/* groen accent in de "A" (decoratief), enkel zichtbaar in kleur-variant via CSS */}
    </span>
  );
}

export function Logo({ className, variant = "color" }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5",
        variant === "color" ? "text-brand-primary" : "text-white",
        className
      )}
    >
      <LogoMark
        className="size-9 shrink-0"
        monochrome={variant === "white"}
      />
      <LogoWordmark />
    </span>
  );
}

/**
 * Full hero/promotional logo — bigger, more breathing room.
 * Use on /over-ons or in OG-image template.
 */
export function LogoFull({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <LogoMark className="size-24" />
      <LogoWordmark className="text-2xl tracking-[0.32em]" />
    </div>
  );
}
