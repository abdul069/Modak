import type * as React from "react";
import type { DivisionThemeKey } from "@/content/divisions";

type DivisionThemeProps = {
  theme: DivisionThemeKey;
  className?: string;
  as?: React.ElementType;
  children: React.ReactNode;
};

export function DivisionTheme({
  theme,
  className,
  as: As = "div",
  children,
}: DivisionThemeProps) {
  return (
    <As data-division={theme} className={className}>
      {children}
    </As>
  );
}
