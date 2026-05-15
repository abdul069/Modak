"use client";

import * as React from "react";
import { useActionState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { submitContact } from "@/app/_actions/contact";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, null);
  const errors = state && !state.ok ? state.errors : {};

  return (
    <form action={action} className="space-y-6" noValidate>
      {/* honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="pointer-events-none absolute h-0 w-0 opacity-0"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Naam" name="naam" required error={errors.naam} />
        <Field label="E-mail" name="email" type="email" required error={errors.email} />
      </div>
      <Field label="Telefoon" name="telefoon" type="tel" error={errors.telefoon} />
      <Field label="Bericht" name="bericht" required multiline error={errors.bericht} />

      <div className="flex flex-col items-start gap-3 pt-2 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-mute">
          We reageren binnen één werkdag. Zie ons{" "}
          <a href="/privacy" className="underline">privacybeleid</a>.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex items-center justify-center gap-2 rounded-md bg-ink px-6 py-3.5 font-medium text-white shadow-sm transition-all hover:bg-[var(--ink-deep)] hover:shadow-md disabled:opacity-60"
        >
          {pending ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Versturen...
            </>
          ) : (
            <>
              Verstuur bericht
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label, name, type = "text", required, multiline, error,
}: { label: string; name: string; type?: string; required?: boolean; multiline?: boolean; error?: string }) {
  const id = `contact-${name}`;
  const common = "block w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-mute focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
        {required ? <span className="ml-0.5 text-accent">*</span> : null}
      </label>
      {multiline ? (
        <textarea id={id} name={name} required={required} rows={5} className={common} />
      ) : (
        <input id={id} name={name} type={type} required={required} className={common} />
      )}
      {error ? <p className="text-xs text-accent-deep">{error}</p> : null}
    </div>
  );
}
