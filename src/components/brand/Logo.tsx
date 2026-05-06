import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  variant?: "color" | "white";
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
      className={className}
      role="presentation"
    >
      {/* Architecturale "A" / dakvorm — twee schuine lijnen + horizontale balk */}
      <path
        d="M6 32 L20 7 L34 32"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6 22.5 L27.4 22.5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Subtiel accent — schoorsteen/punt */}
      <circle cx="20" cy="7" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function LogoWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-[1.35rem] font-medium tracking-[0.22em]",
        className
      )}
    >
      AGNAU
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
      <LogoMark className="size-7" />
      <LogoWordmark />
    </span>
  );
}
