"use server";

import { redirect } from "next/navigation";
import { quoteSchema } from "./schemas";
import type { DivisionSlug } from "@/content/divisions";
import { divisions } from "@/content/divisions";

type QuoteResult = { ok: false; errors: Record<string, string> } | { ok: true };

export async function submitQuote(_: QuoteResult | null, formData: FormData): Promise<QuoteResult> {
  const raw: Record<string, FormDataEntryValue> = {};
  formData.forEach((v, k) => {
    if (typeof v === "string") raw[k] = v;
  });

  const parsed = quoteSchema.safeParse(raw);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString() ?? "form";
      if (!errors[key]) errors[key] = issue.message;
    }
    return { ok: false, errors };
  }

  const data = parsed.data;
  const division = divisions[data.division as DivisionSlug];
  if (!division) {
    return { ok: false, errors: { division: "Onbekende divisie" } };
  }

  // Persist / e-mail integration goes here (Resend, CRM, etc.) — to be wired
  // once delivery credentials are set. Honeypot already enforced via schema.
  if (process.env.NODE_ENV !== "production") {
    console.log("[quote]", division.slug, data);
  }

  redirect(`/bedankt/${division.slug}`);
}
