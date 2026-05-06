"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { fileSchema, quoteSchema } from "./schemas";
import { rateLimit } from "@/lib/rate-limit";
import { contactEmail, sendEmail } from "@/lib/email";
import { siteConfig, services } from "@/lib/site";

export interface QuoteState {
  ok: boolean;
  errors?: Record<string, string[]>;
  message?: string;
}

const empty: QuoteState = { ok: false };

export async function submitQuote(
  _prev: QuoteState,
  formData: FormData
): Promise<QuoteState> {
  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerList.get("x-real-ip") ??
    "unknown";

  const limit = rateLimit(`quote:${ip}`);
  if (!limit.ok) {
    return {
      ok: false,
      message: `Te veel aanvragen. Probeer over ${Math.ceil(
        limit.retryAfter / 1000
      )} seconden opnieuw.`,
    };
  }

  const raw = {
    services: formData.getAll("services").map((v) => v.toString()),
    situation: formData.get("situation")?.toString() ?? "",
    propertyType: formData.get("propertyType")?.toString() ?? "",
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    phone: formData.get("phone")?.toString() ?? "",
    city: formData.get("city")?.toString() ?? "",
    notes: formData.get("notes")?.toString() ?? "",
    website: formData.get("website")?.toString() ?? "",
  };

  if (raw.website && raw.website.length > 0) {
    return { ok: true };
  }

  const parsed = quoteSchema.safeParse(raw);
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

  // Optional file
  const fileEntry = formData.get("attachment");
  let attachment:
    | { filename: string; content: string; contentType: string }
    | undefined;

  if (fileEntry && fileEntry instanceof File && fileEntry.size > 0) {
    const fileResult = fileSchema.safeParse(fileEntry);
    if (!fileResult.success) {
      return {
        ok: false,
        errors: { attachment: fileResult.error.issues.map((e) => e.message) },
        message: "Probleem met de bijlage.",
      };
    }
    const buf = Buffer.from(await fileEntry.arrayBuffer());
    attachment = {
      filename: fileEntry.name,
      content: buf.toString("base64"),
      contentType: fileEntry.type,
    };
  }

  const data = parsed.data;
  const labelMap = Object.fromEntries(services.map((s) => [s.slug, s.title]));
  const serviceLabels = data.services
    .map((s) => labelMap[s] ?? s)
    .join(", ");

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
      subject: `[Modak.be] Offerteaanvraag — ${data.name}`,
      html: `
        <h2 style="font-family:sans-serif">Nieuwe offerteaanvraag</h2>
        <table style="font-family:sans-serif;border-collapse:collapse;line-height:1.5">
          <tr><td><strong>Naam</strong></td><td>${safe(data.name)}</td></tr>
          <tr><td><strong>E-mail</strong></td><td>${safe(data.email)}</td></tr>
          <tr><td><strong>Telefoon</strong></td><td>${safe(data.phone ?? "")}</td></tr>
          <tr><td><strong>Plaats</strong></td><td>${safe(data.city ?? "")}</td></tr>
          <tr><td><strong>Diensten</strong></td><td>${safe(serviceLabels)}</td></tr>
          <tr><td><strong>Situatie</strong></td><td>${safe(data.situation)}</td></tr>
          <tr><td><strong>Type pand</strong></td><td>${safe(data.propertyType)}</td></tr>
        </table>
        <h3 style="font-family:sans-serif">Extra info</h3>
        <p style="font-family:sans-serif;white-space:pre-wrap">${safe(data.notes ?? "—")}</p>
        ${attachment ? `<p style="font-family:sans-serif"><em>Bijlage: ${safe(attachment.filename)}</em></p>` : ""}
        <hr>
        <p style="font-family:sans-serif;color:#666;font-size:12px">Verzonden via ${siteConfig.url}/offerte · IP: ${safe(ip)}</p>
      `,
    });

    await sendEmail({
      to: data.email,
      subject: "Offerteaanvraag ontvangen — Modak",
      html: `
        <p>Hallo ${safe(data.name)},</p>
        <p>Bedankt voor je offerteaanvraag voor ${safe(serviceLabels)}.</p>
        <p>We bekijken de informatie en nemen binnen 1-2 werkdagen contact op om een plaatsbezoek te plannen of om eerst telefonisch door te lopen wat we precies kunnen betekenen.</p>
        <p>Voor dringende vragen kan je ons bereiken op ${siteConfig.contact.phone}.</p>
        <p>Tot snel,<br>Het Modak-team</p>
      `,
    });

    const webhook = process.env.CRM_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "quote", data }),
      }).catch((err) => console.error("[crm] webhook failed", err));
    }
  } catch (err) {
    console.error("[quote] send failed", err);
    return {
      ok: false,
      message:
        "Er ging iets mis bij het verzenden. Probeer opnieuw of bel ons rechtstreeks.",
    };
  }

  redirect("/offerte/bedankt");
  return empty;
}
