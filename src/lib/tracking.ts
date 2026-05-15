"use client";

import type { DivisionSlug } from "@/content/divisions";

type FbqArgs =
  | ["track", string, Record<string, unknown>?]
  | ["trackCustom", string, Record<string, unknown>?]
  | ["init", string]
  | ["consent", "grant" | "revoke"];

type Fbq = {
  (...args: FbqArgs): void;
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
  push?: unknown;
};

declare global {
  interface Window {
    fbq?: Fbq;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function getUTM(): Record<string, string> {
  if (typeof document === "undefined") return {};
  const match = document.cookie.match(/(?:^|;\s*)agnau_utm=([^;]+)/);
  if (!match) return {};
  try {
    return JSON.parse(decodeURIComponent(match[1])) as Record<string, string>;
  } catch {
    return {};
  }
}

export function trackLead(division: DivisionSlug, eventName: string) {
  if (typeof window === "undefined") return;
  const utm = getUTM();
  const payload = { division, ...utm };
  window.fbq?.("track", "Lead", payload);
  if (eventName) window.fbq?.("trackCustom", eventName, payload);
  window.dataLayer?.push({ event: "lead", division, ...utm });
}

export function trackInitiateCheckout(division: DivisionSlug) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "InitiateCheckout", { division });
  window.dataLayer?.push({ event: "initiate_checkout", division });
}

export function trackViewContent(division: DivisionSlug) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "ViewContent", {
    content_category: division,
    content_name: division,
  });
  window.dataLayer?.push({ event: "view_content", content_category: division });
}
