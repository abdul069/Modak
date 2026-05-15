import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-slate">{description}</p>
      ) : null}
    </Reveal>
  );
}
