"use client";

import * as React from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "@/components/forms/FormField";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";
import { submitQuote, type QuoteState } from "@/app/_actions/quote";

const initial: QuoteState = { ok: false };

const situations = [
  { value: "renovatie", label: "Renovatie" },
  { value: "nieuwbouw", label: "Nieuwbouw" },
  { value: "verbouwing", label: "Verbouwing" },
] as const;

const propertyTypes = [
  { value: "rijwoning", label: "Rijwoning" },
  { value: "halfopen", label: "Halfopen woning" },
  { value: "vrijstaand", label: "Vrijstaande woning" },
  { value: "appartement", label: "Appartement" },
  { value: "ander", label: "Ander" },
] as const;

export function QuoteForm() {
  const [step, setStep] = React.useState<1 | 2 | 3>(1);
  const [state, formAction] = useActionState(submitQuote, initial);
  const [selectedServices, setSelectedServices] = React.useState<string[]>([]);
  const [situation, setSituation] = React.useState<string>("");
  const [propertyType, setPropertyType] = React.useState<string>("");

  function next() {
    if (step === 1 && selectedServices.length === 0) return;
    if (step === 2 && (!situation || !propertyType)) return;
    setStep((s) => (s === 3 ? 3 : ((s + 1) as 1 | 2 | 3)));
  }
  function back() {
    setStep((s) => (s === 1 ? 1 : ((s - 1) as 1 | 2 | 3)));
  }

  return (
    <form
      action={formAction}
      className="rounded-xl border border-brand-line bg-white p-6 md:p-8"
      noValidate
    >
      {/* Honeypot */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="quote-hp">Laat dit veld leeg</label>
        <input
          id="quote-hp"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Stepper current={step} />

      {step === 1 ? (
        <fieldset className="mt-6 space-y-4">
          <legend className="font-display text-xl text-brand-ink">
            Welke dienst(en) heb je in gedachten?
          </legend>
          <p className="text-sm text-brand-ink-soft">
            Meerdere selecteren mag — vaak combineren we trouwens.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {services.map((s) => {
              const checked = selectedServices.includes(s.slug);
              return (
                <li key={s.slug}>
                  <label
                    className={cn(
                      "flex cursor-pointer items-start gap-3 rounded-md border p-4 transition-colors",
                      checked
                        ? "border-brand-primary bg-brand-primary/5"
                        : "border-brand-line bg-white hover:border-brand-primary/40"
                    )}
                  >
                    <input
                      type="checkbox"
                      name="services"
                      value={s.slug}
                      checked={checked}
                      onChange={(e) =>
                        setSelectedServices((prev) =>
                          e.target.checked
                            ? [...prev, s.slug]
                            : prev.filter((x) => x !== s.slug)
                        )
                      }
                      className="mt-1 size-4 accent-brand-primary"
                    />
                    <div>
                      <p className="font-medium text-brand-ink">{s.title}</p>
                      <p className="text-sm text-brand-ink-soft">{s.short}</p>
                    </div>
                  </label>
                </li>
              );
            })}
          </ul>
          {state.errors?.services?.length ? (
            <p className="text-sm font-medium text-red-600">
              {state.errors.services.join(" ")}
            </p>
          ) : null}
          <div className="flex justify-end">
            <Button
              type="button"
              onClick={next}
              size="lg"
              disabled={selectedServices.length === 0}
            >
              Volgende
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </fieldset>
      ) : null}

      {step === 2 ? (
        <fieldset className="mt-6 space-y-6">
          <legend className="font-display text-xl text-brand-ink">
            Type pand & situatie
          </legend>

          <div>
            <p className="mb-2 text-sm font-medium text-brand-ink">
              Situatie
            </p>
            <ul className="grid gap-2 sm:grid-cols-3">
              {situations.map((opt) => {
                const checked = situation === opt.value;
                return (
                  <li key={opt.value}>
                    <label
                      className={cn(
                        "flex cursor-pointer items-center justify-center rounded-md border p-3 text-center text-sm transition-colors",
                        checked
                          ? "border-brand-primary bg-brand-primary/5 font-medium text-brand-primary"
                          : "border-brand-line bg-white hover:border-brand-primary/40"
                      )}
                    >
                      <input
                        type="radio"
                        name="situation"
                        value={opt.value}
                        checked={checked}
                        onChange={() => setSituation(opt.value)}
                        className="sr-only"
                      />
                      {opt.label}
                    </label>
                  </li>
                );
              })}
            </ul>
            {state.errors?.situation?.length ? (
              <p className="mt-1 text-sm font-medium text-red-600">
                {state.errors.situation.join(" ")}
              </p>
            ) : null}
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-brand-ink">
              Type woning
            </p>
            <ul className="grid gap-2 sm:grid-cols-3">
              {propertyTypes.map((opt) => {
                const checked = propertyType === opt.value;
                return (
                  <li key={opt.value}>
                    <label
                      className={cn(
                        "flex cursor-pointer items-center justify-center rounded-md border p-3 text-center text-sm transition-colors",
                        checked
                          ? "border-brand-primary bg-brand-primary/5 font-medium text-brand-primary"
                          : "border-brand-line bg-white hover:border-brand-primary/40"
                      )}
                    >
                      <input
                        type="radio"
                        name="propertyType"
                        value={opt.value}
                        checked={checked}
                        onChange={() => setPropertyType(opt.value)}
                        className="sr-only"
                      />
                      {opt.label}
                    </label>
                  </li>
                );
              })}
            </ul>
            {state.errors?.propertyType?.length ? (
              <p className="mt-1 text-sm font-medium text-red-600">
                {state.errors.propertyType.join(" ")}
              </p>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <Button type="button" variant="ghost" onClick={back}>
              <ArrowLeft className="size-4" />
              Vorige
            </Button>
            <Button
              type="button"
              onClick={next}
              size="lg"
              disabled={!situation || !propertyType}
            >
              Volgende
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </fieldset>
      ) : null}

      {step === 3 ? (
        <fieldset className="mt-6 space-y-4">
          <legend className="font-display text-xl text-brand-ink">
            Contactgegevens & extra info
          </legend>

          <div className="grid gap-4 sm:grid-cols-2">
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
              error={state.errors?.phone}
            >
              <Input
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
              />
            </FormField>

            <FormField
              label="Plaats / postcode"
              name="city"
              error={state.errors?.city}
            >
              <Input name="city" autoComplete="address-level2" />
            </FormField>
          </div>

          <FormField
            label="Extra informatie"
            name="notes"
            hint="Bv. timing, bijzonderheden, vragen — alles helpt om een betere offerte op te stellen."
            error={state.errors?.notes}
          >
            <Textarea name="notes" rows={5} />
          </FormField>

          <FormField
            label="Bijlage"
            name="attachment"
            hint="Optioneel — foto's of plannen (PDF, JPG, PNG, HEIC, max 10 MB)."
            error={state.errors?.attachment}
          >
            <Input
              name="attachment"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.heic"
              className="cursor-pointer"
            />
          </FormField>

          {state.message ? (
            <p
              role="alert"
              className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
            >
              {state.message}
            </p>
          ) : null}

          <p className="text-xs text-brand-ink-soft">
            Door deze aanvraag te versturen stem je in met de verwerking van je
            gegevens om je offerte op te maken. Lees ons{" "}
            <a href="/privacy" className="underline hover:text-brand-primary">
              privacybeleid
            </a>
            .
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <Button type="button" variant="ghost" onClick={back}>
              <ArrowLeft className="size-4" />
              Vorige
            </Button>
            <SubmitButton />
          </div>
        </fieldset>
      ) : null}
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending}>
      {pending ? "Versturen..." : "Verstuur offerteaanvraag"}
    </Button>
  );
}

function Stepper({ current }: { current: 1 | 2 | 3 }) {
  const steps = [
    { n: 1, label: "Diensten" },
    { n: 2, label: "Pand" },
    { n: 3, label: "Contact" },
  ];
  return (
    <ol className="flex items-center gap-3" aria-label="Voortgang">
      {steps.map((s, i) => (
        <React.Fragment key={s.n}>
          <li className="flex items-center gap-2">
            <span
              className={cn(
                "grid size-7 place-items-center rounded-full text-sm font-medium",
                s.n < current
                  ? "bg-brand-primary text-white"
                  : s.n === current
                    ? "bg-brand-primary text-white ring-4 ring-brand-primary/15"
                    : "bg-brand-bg-alt text-brand-ink-soft"
              )}
            >
              {s.n < current ? <CheckCircle2 className="size-4" /> : s.n}
            </span>
            <span
              className={cn(
                "text-sm",
                s.n === current
                  ? "font-medium text-brand-ink"
                  : "text-brand-ink-soft"
              )}
            >
              {s.label}
            </span>
          </li>
          {i < steps.length - 1 ? (
            <span
              className="h-px flex-1 bg-brand-line"
              aria-hidden
            />
          ) : null}
        </React.Fragment>
      ))}
    </ol>
  );
}
