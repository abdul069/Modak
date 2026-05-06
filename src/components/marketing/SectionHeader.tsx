import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h3";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h2",
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
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-primary">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="font-display text-brand-ink">{title}</Heading>
      {description ? (
        <p className="mt-3 text-base text-brand-ink-soft md:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
