import { cn } from "@/lib/utils";

type PhotoTileProps = {
  label: string;
  gradient?: string;
  aspect?: "square" | "tall" | "wide" | "video";
  className?: string;
  children?: React.ReactNode;
};

const ASPECT = {
  square: "aspect-square",
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  video: "aspect-video",
} as const;

/**
 * Placeholder photo block — gradient + label until real image lands.
 * Replace src in production by swapping this for next/image with the brief.
 */
export function PhotoTile({
  label,
  gradient = "linear-gradient(135deg, var(--ink) 0%, var(--ink-deep) 100%)",
  aspect = "wide",
  className,
  children,
}: PhotoTileProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl",
        ASPECT[aspect],
        className,
      )}
      style={{ background: gradient }}
      role="img"
      aria-label={label}
    >
      <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/80 backdrop-blur">
        {label}
      </span>
      {children}
    </div>
  );
}
