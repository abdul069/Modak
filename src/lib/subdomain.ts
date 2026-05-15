import type { DivisionSlug } from "@/content/divisions";

/**
 * Subdomain → division slug map. Subdomains are short, division slugs
 * are the canonical path segments used in the Next.js app folder.
 */
export const SUBDOMAIN_TO_SLUG = {
  dak:       "dakwerken",
  ramen:     "ramen-en-deuren",
  renovatie: "renovatie",
  hvac:      "hvac",
  solar:     "zonne-energie",
  ev:        "laadpalen",
} as const satisfies Record<string, DivisionSlug>;

export type Subdomain = keyof typeof SUBDOMAIN_TO_SLUG;

export const SLUG_TO_SUBDOMAIN: Record<DivisionSlug, Subdomain> = {
  dakwerken:         "dak",
  "ramen-en-deuren": "ramen",
  renovatie:         "renovatie",
  hvac:              "hvac",
  "zonne-energie":   "solar",
  laadpalen:         "ev",
};

export function subdomainToSlug(sub: string): DivisionSlug | null {
  return SUBDOMAIN_TO_SLUG[sub as Subdomain] ?? null;
}

export function slugToSubdomain(slug: DivisionSlug): Subdomain {
  return SLUG_TO_SUBDOMAIN[slug];
}

/**
 * Parse a host header into a subdomain part, or null for the apex.
 * Handles: agnau.be, www.agnau.be, dak.agnau.be, *.localhost, *.vercel.app
 */
export function extractSubdomain(host: string): Subdomain | null {
  if (!host) return null;
  const hostname = host.split(":")[0].toLowerCase();

  // Apex marketing domain
  if (hostname === "agnau.be" || hostname === "www.agnau.be") return null;
  if (hostname === "localhost" || hostname === "127.0.0.1") return null;

  // <sub>.agnau.be
  const parts = hostname.split(".");
  if (parts.length === 3 && parts[1] === "agnau" && parts[2] === "be") {
    if (parts[0] === "www") return null;
    return subdomainToSlug(parts[0]) ? (parts[0] as Subdomain) : null;
  }
  // <sub>.localhost (dev)
  if (parts.length >= 2 && parts[parts.length - 1] === "localhost") {
    return subdomainToSlug(parts[0]) ? (parts[0] as Subdomain) : null;
  }

  // Vercel preview deployments: treat as apex (no subdomain rewrite)
  if (hostname.endsWith(".vercel.app")) return null;

  return null;
}

/**
 * Build a URL for a division. In production it returns the subdomain URL
 * so apex visitors get routed cross-host. In development or when the env
 * disables subdomains, it returns a same-host path.
 */
export function divisionUrl(slug: DivisionSlug, path = ""): string {
  const sub = slugToSubdomain(slug);
  const apex = process.env.NEXT_PUBLIC_APEX_DOMAIN ?? "agnau.be";
  const useSubdomain =
    process.env.NEXT_PUBLIC_USE_SUBDOMAINS !== "false" &&
    process.env.NODE_ENV === "production";

  if (useSubdomain) {
    return `https://${sub}.${apex}${path || "/"}`;
  }
  return path ? `/${slug}${path}` : `/${slug}`;
}

/**
 * Apex (portal) URL — used for the "back to AGNAU" link in headers.
 */
export function apexUrl(): string {
  const apex = process.env.NEXT_PUBLIC_APEX_DOMAIN ?? "agnau.be";
  if (process.env.NODE_ENV === "production") {
    return `https://${apex}`;
  }
  return "/";
}
