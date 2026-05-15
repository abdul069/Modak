"use client";

import { useActionState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { submitJobApplication } from "@/app/_actions/job-application";

export function JobApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [state, action, pending] = useActionState(submitJobApplication, null);
  const errors = state && !state.ok ? state.errors : {};

  return (
    <form action={action} className="space-y-6" noValidate>
      <input type="hidden" name="vacature" value={jobTitle} />
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
      <Field label="Telefoon" name="telefoon" type="tel" required error={errors.telefoon} />
      <Field
        label="Motivatie"
        name="motivatie"
        required
        multiline
        error={errors.motivatie}
        placeholder="Vertel kort waarom u deze functie wilt en wat u meeneemt."
      />

      <button
        type="submit"
        disabled={pending}
        className="group inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3.5 font-medium text-white shadow-sm transition hover:bg-[var(--ink-deep)] disabled:opacity-60"
      >
        {pending ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Versturen...
          </>
        ) : (
          <>
            Stuur sollicitatie
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label, name, type = "text", required, multiline, placeholder, error,
}: { label: string; name: string; type?: string; required?: boolean; multiline?: boolean; placeholder?: string; error?: string }) {
  const id = `job-${name}`;
  const common = "block w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-mute focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
        {required ? <span className="ml-0.5 text-accent">*</span> : null}
      </label>
      {multiline ? (
        <textarea id={id} name={name} required={required} rows={6} placeholder={placeholder} className={common} />
      ) : (
        <input id={id} name={name} type={type} required={required} placeholder={placeholder} className={common} />
      )}
      {error ? <p className="text-xs text-accent-deep">{error}</p> : null}
    </div>
  );
}
