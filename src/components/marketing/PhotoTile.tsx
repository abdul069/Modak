import Image from "next/image";
import { cn } from "@/lib/utils";

type PhotoTileProps = {
  label: string;
  src?: string;
  alt?: string;
  gradient?: string;
  aspect?: "square" | "tall" | "wide" | "video";
  className?: string;
  priority?: boolean;
  children?: React.ReactNode;
};

const ASPECT = {
  square: "aspect-square",
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  video: "aspect-video",
} as const;

export function PhotoTile({
  label,
  src,
  alt,
  gradient = "linear-gradient(135deg, var(--ink) 0%, var(--ink-deep) 100%)",
  aspect = "wide",
  className,
  priority,
  children,
}: PhotoTileProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-xl", ASPECT[aspect], className)}
      style={src ? undefined : { background: gradient }}
      role={src ? undefined : "img"}
      aria-label={src ? undefined : label}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? label}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          priority={priority}
        />
      ) : null}

      {/* gradient veil for legibility of label/badge over photo */}
      {src ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
        />
      ) : null}

      <span className="absolute left-4 top-4 z-10 rounded-full bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/90 backdrop-blur">
        {label}
      </span>
      {children}
    </div>
  );
}
