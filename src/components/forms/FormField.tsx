import * as React from "react";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  name: string;
  required?: boolean;
  error?: string[];
  hint?: string;
  children: React.ReactElement<{ id?: string; "aria-describedby"?: string; "aria-invalid"?: boolean }>;
}

export function FormField({ label, name, required, error, hint, children }: Props) {
  const id = `field-${name}`;
  const errorId = error?.length ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  const child = React.cloneElement(children, {
    id,
    "aria-describedby": describedBy,
    "aria-invalid": Boolean(error?.length),
  });

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-brand-ink"
      >
        {label}
        {required ? (
          <span className="ml-1 text-brand-primary" aria-hidden>
            *
          </span>
        ) : null}
      </label>
      {child}
      {hint ? (
        <p id={hintId} className="text-xs text-brand-ink-soft">
          {hint}
        </p>
      ) : null}
      {error?.length ? (
        <p
          id={errorId}
          className={cn("text-xs font-medium text-red-600")}
        >
          {error.join(" ")}
        </p>
      ) : null}
    </div>
  );
}
