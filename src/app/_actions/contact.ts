"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { contactSchema } from "./schemas";
import { rateLimit } from "@/lib/rate-limit";
import { contactEmail, sendEmail } from "@/lib/email";
import { siteConfig } from "@/lib/site";

export interface ContactState {
  ok: boolean;
  errors?: Record<string, string[]>;
  message?: string;
}

const empty: ContactState = { ok: false };

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerList.get("x-real-ip") ??
    "unknown";

  const limit = rateLimit(`contact:${ip}`);
  if (!limit.ok) {
    return {
      ok: false,
      message: `Te veel aanvragen. Probeer over ${Math.ceil(
        limit.retryAfter / 1000
      )} seconden opnieuw.`,
    };
  }

  const raw = {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    phone: formData.get("phone")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
    website: formData.get("website")?.toString() ?? "",
  };

  // Honeypot — silently drop
  if (raw.website && raw.website.length > 0) {
    return { ok: true };
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
      message: "Controleer de gemarkeerde velden.",
    };
  }

  const data = parsed.data;
  const safe = (v: string) =>
    v.replace(/[<>&"']/g, (c) =>
      ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#39;" }[
        c
      ]!)
    );

  try {
    await sendEmail({
      to: contactEmail,
      replyTo: data.email,
      subject: `[AGNAU.be] Contactaanvraag van ${data.name}`,
      html: `
        <h2 style="font-family:sans-serif">Nieuwe contactaanvraag</h2>
        <table style="font-family:sans-serif;border-collapse:collapse">
          <tr><td><strong>Naam</strong></td><td>${safe(data.name)}</td></tr>
          <tr><td><strong>E-mail</strong></td><td>${safe(data.email)}</td></tr>
          <tr><td><strong>Telefoon</strong></td><td>${safe(data.phone ?? "")}</td></tr>
        </table>
        <h3 style="font-family:sans-serif">Bericht</h3>
        <p style="font-family:sans-serif;white-space:pre-wrap">${safe(data.message)}</p>
        <hr>
        <p style="font-family:sans-serif;color:#666;font-size:12px">Verzonden via ${siteConfig.url}/contact · IP: ${safe(ip)}</p>
      `,
    });

    // Confirmation to klant
    await sendEmail({
      to: data.email,
      subject: "We hebben je bericht ontvangen — AGNAU",
      html: `
        <p>Hallo ${safe(data.name)},</p>
        <p>Bedankt voor je bericht. We lezen het zo snel mogelijk en nemen contact op binnen één werkdag.</p>
        <p>Voor dringende vragen kan je ons bereiken op ${siteConfig.contact.phone}.</p>
        <p>Tot snel,<br>Het AGNAU-team</p>
      `,
    });

    // Optional CRM webhook
    const webhook = process.env.CRM_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", data }),
      }).catch((err) => console.error("[crm] webhook failed", err));
    }
  } catch (err) {
    console.error("[contact] send failed", err);
    return {
      ok: false,
      message:
        "Er ging iets mis bij het verzenden. Probeer opnieuw of bel ons rechtstreeks.",
    };
  }

  redirect("/contact/bedankt");
  return empty;
}
