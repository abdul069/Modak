import { cn } from "@/lib/utils";

interface DotAccentProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * The signature red dot accent used across the design — placed next to
 * headlines, in the middle of section breaks, on photo edges. Tifre-style.
 */
export function DotAccent({ size = "md", className }: DotAccentProps) {
  const sz =
    size === "sm" ? "size-1.5" : size === "lg" ? "size-3" : "size-2";
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block rounded-full bg-brand-accent align-middle",
        sz,
        className
      )}
    />
  );
}
