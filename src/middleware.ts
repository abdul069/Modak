import { NextResponse, type NextRequest } from "next/server";
import { extractSubdomain, subdomainToSlug } from "@/lib/subdomain";

/**
 * Subdomain → path rewrite.
 *
 * agnau.be          → as-is (renders /page.tsx, the portal)
 * dak.agnau.be      → rewrite "/" to "/dakwerken"; other paths pass through
 * renovatie.agnau.be → rewrite "/" to "/renovatie"
 * solar.agnau.be    → rewrite "/" to "/zonne-energie"
 *
 * For non-root paths on a subdomain (e.g. dak.agnau.be/contact), no
 * rewrite happens; the user gets the global page rendered under the
 * subdomain origin.
 */
export const config = {
  matcher: [
    // Run on all paths except static assets and the api directory
    "/((?!api|_next/static|_next/image|favicon.ico|images|fonts|.*\\.[A-Za-z0-9]+$).*)",
  ],
};

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  const sub = extractSubdomain(host);

  // Apex or unknown host: render as-is
  if (!sub) return NextResponse.next();

  const slug = subdomainToSlug(sub);
  if (!slug) return NextResponse.next();

  const url = req.nextUrl.clone();

  // Only the bare "/" gets rewritten to the division landing.
  // All other paths under the subdomain map to the same global page.
  if (url.pathname === "/" || url.pathname === "") {
    url.pathname = `/${slug}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
