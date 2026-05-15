import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  /** Show a leading short rule (—) */
  rule?: boolean;
  /** Variant: default stone on bone, invert bone/30 on charcoal */
  invert?: boolean;
}

/**
 * Small uppercase mono label used above headings. Examples:
 *   <Eyebrow rule>01 — AANPAK</Eyebrow>
 *   <Eyebrow>REALISATIE · GENT · 2024</Eyebrow>
 */
export function Eyebrow({ children, className, rule = false, invert = false }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] md:text-xs",
        invert ? "text-bone/65" : "text-stone",
        className
      )}
    >
      {rule ? (
        <span
          aria-hidden
          className={cn(
            "inline-block h-px w-8 shrink-0",
            invert ? "bg-bone/40" : "bg-clay"
          )}
        />
      ) : null}
      <span>{children}</span>
    </p>
  );
}
