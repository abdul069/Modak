"use client";

import * as React from "react";
import { useActionState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FormField } from "@/components/forms/FormField";
import { submitQuote } from "@/app/_actions/quote";
import { trackInitiateCheckout } from "@/lib/tracking";
import type { Division } from "@/content/divisions";

export function QuoteForm({ division }: { division: Division }) {
  const [state, action, pending] = useActionState(submitQuote, null);
  const [touched, setTouched] = React.useState(false);

  function onFirstFocus() {
    if (touched) return;
    setTouched(true);
    trackInitiateCheckout(division.slug);
  }

  const errors = state && !state.ok ? state.errors : {};

  return (
    <section id="offerte" className="py-20 md:py-28">
      <Container size="narrow">
        <Reveal>
          <p className="eyebrow">Vraag offerte aan</p>
          <h2 className="mt-3">Klaar voor uw {division.shortName.toLowerCase()}-project?</h2>
          <p className="mt-4 text-lg text-slate">
            Vul onderstaand formulier in. We bellen u binnen 24 uur terug om een
            plaatsbezoek in te plannen.
          </p>
        </Reveal>

        <form action={action} onFocus={onFirstFocus} className="mt-10 space-y-6" noValidate>
          <input type="hidden" name="division" value={division.slug} />
          {/* honeypot */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            className="pointer-events-none absolute h-0 w-0 opacity-0"
          />

          <div className="space-y-6">
            {division.form.fields.map((field) => (
              <div key={field.name}>
                <FormField field={field} />
                {errors[field.name] ? (
                  <p className="mt-1.5 text-xs text-accent-deep">{errors[field.name]}</p>
                ) : null}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-3 pt-2 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-mute">
              We bellen binnen 24 uur terug. We gebruiken uw gegevens enkel om uw vraag te behandelen — zie ons{" "}
              <a href="/privacy" className="underline">privacybeleid</a>.
            </p>
            <button
              type="submit"
              disabled={pending}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 font-medium text-white shadow-sm transition-all hover:bg-accent-deep hover:shadow-md disabled:opacity-60"
            >
              {pending ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Versturen...
                </>
              ) : (
                <>
                  {division.form.submitLabel}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}
