import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface RedCircleCTAProps {
  label: string;
  href: string;
  className?: string;
  size?: "md" | "lg";
}

/**
 * Tifre-style circular red CTA button — appears floating over photos
 * or as standalone call-to-action.
 */
export function RedCircleCTA({
  label,
  href,
  className,
  size = "md",
}: RedCircleCTAProps) {
  const sz =
    size === "lg"
      ? "size-44 md:size-52"
      : "size-36 md:size-40";
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col items-center justify-center rounded-full bg-brand-accent p-6 text-center text-white shadow-[0_12px_40px_-10px_rgba(224,65,63,0.45)] transition-transform duration-300 hover:scale-[1.04] hover:bg-brand-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2",
        sz,
        className
      )}
    >
      <span className="text-xs font-medium leading-tight md:text-sm">
        {label}
      </span>
      <ArrowRight className="mt-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
