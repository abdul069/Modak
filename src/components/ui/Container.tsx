import type * as React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  as?: React.ElementType;
  size?: "default" | "wide" | "narrow";
  className?: string;
  children: React.ReactNode;
};

const SIZES = {
  default: "max-w-[1200px]",
  wide: "max-w-[1400px]",
  narrow: "max-w-[920px]",
} as const;

export function Container({
  as: As = "div",
  size = "default",
  className,
  children,
}: ContainerProps) {
  return (
    <As
      className={cn(
        "mx-auto w-full px-5 md:px-8",
        SIZES[size],
        className,
      )}
    >
      {children}
    </As>
  );
}
