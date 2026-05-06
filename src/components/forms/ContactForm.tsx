"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "@/components/forms/FormField";
import {
  submitContact,
  type ContactState,
} from "@/app/_actions/contact";

const initial: ContactState = { ok: false };

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initial);

  return (
    <form
      action={formAction}
      className="space-y-5 rounded-xl border border-brand-line bg-white p-6 md:p-8"
      noValidate
    >
      {/* Honeypot — visually hidden, must remain empty */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website-hp">Laat dit veld leeg</label>
        <input
          id="website-hp"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <FormField
        label="Naam"
        name="name"
        required
        error={state.errors?.name}
      >
        <Input name="name" required autoComplete="name" />
      </FormField>

      <FormField
        label="E-mail"
        name="email"
        required
        error={state.errors?.email}
      >
        <Input
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
        />
      </FormField>

      <FormField
        label="Telefoon"
        name="phone"
        hint="Optioneel — handig voor snelle vragen."
        error={state.errors?.phone}
      >
        <Input name="phone" type="tel" autoComplete="tel" inputMode="tel" />
      </FormField>

      <FormField
        label="Bericht"
        name="message"
        required
        error={state.errors?.message}
      >
        <Textarea name="message" required rows={6} />
      </FormField>

      {state.message ? (
        <p
          role="alert"
          className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
        >
          {state.message}
        </p>
      ) : null}

      <SubmitButton />

      <p className="text-xs text-brand-ink-soft">
        Door dit formulier te versturen stem je in met de verwerking van je
        gegevens om je vraag te behandelen. Lees ons{" "}
        <a href="/privacy" className="underline hover:text-brand-primary">
          privacybeleid
        </a>
        .
      </p>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Versturen..." : "Verstuur bericht"}
    </Button>
  );
}
