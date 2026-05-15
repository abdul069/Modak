"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { FormFieldDef } from "@/content/divisions";

type FormFieldProps = {
  field: FormFieldDef;
  defaultValue?: string;
};

export function FormField({ field, defaultValue }: FormFieldProps) {
  const id = `field-${field.name}`;

  // Narrow once: input-style fields share placeholder semantics
  const isInputLike =
    field.type === "text" ||
    field.type === "email" ||
    field.type === "tel" ||
    field.type === "number";

  if (field.type === "textarea") {
    return (
      <FieldWrap label={field.label} htmlFor={id} required={field.required}>
        <textarea
          id={id}
          name={field.name}
          required={field.required}
          placeholder={field.placeholder}
          defaultValue={defaultValue}
          rows={4}
          className="block w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-mute focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </FieldWrap>
    );
  }

  if (field.type === "select") {
    return (
      <FieldWrap label={field.label} htmlFor={id} required={field.required}>
        <select
          id={id}
          name={field.name}
          required={field.required}
          defaultValue={defaultValue ?? ""}
          className="block w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        >
          <option value="" disabled>Maak een keuze</option>
          {field.options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </FieldWrap>
    );
  }

  if (field.type === "radio") {
    return (
      <FieldWrap label={field.label} required={field.required}>
        <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {field.options.map((o) => (
            <li key={o.value}>
              <label className="flex cursor-pointer items-center justify-center rounded-md border border-line bg-white px-3 py-2.5 text-center text-sm text-ink transition has-[:checked]:border-accent has-[:checked]:bg-accent has-[:checked]:text-white hover:border-accent/60">
                <input
                  type="radio"
                  name={field.name}
                  value={o.value}
                  required={field.required}
                  defaultChecked={defaultValue === o.value}
                  className="sr-only"
                />
                {o.label}
              </label>
            </li>
          ))}
        </ul>
      </FieldWrap>
    );
  }

  if (!isInputLike) return null;

  return (
    <FieldWrap label={field.label} htmlFor={id} required={field.required}>
      <input
        id={id}
        name={field.name}
        type={field.type}
        required={field.required}
        placeholder={field.placeholder}
        defaultValue={defaultValue}
        inputMode={field.type === "tel" ? "tel" : field.type === "number" ? "numeric" : undefined}
        className="block w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-mute focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
    </FieldWrap>
  );
}

function FieldWrap({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className={cn("block text-sm font-medium text-ink")}
      >
        {label}
        {required ? <span className="ml-0.5 text-accent">*</span> : null}
      </label>
      {children}
    </div>
  );
}
