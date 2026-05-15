import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h3";
  invert?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h2",
  invert = false,
}: Props) {
  return (
    <header
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-medium uppercase tracking-[0.2em]",
            invert ? "text-brand-accent" : "text-brand-primary"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn("font-display", invert ? "text-white" : "text-brand-ink")}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-3 text-base md:text-lg",
            invert ? "text-white/75" : "text-brand-ink-soft"
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
