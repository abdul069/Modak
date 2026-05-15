import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { companyNav, siteConfig } from "@/lib/site";
import { getAllDivisions } from "@/lib/division";

export function Footer() {
  const year = new Date().getFullYear();
  const divisions = getAllDivisions();

  return (
    <footer className="mt-32 bg-[var(--ink-deep)] text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="space-y-4 md:col-span-4">
          <Logo variant="white" />
          <p className="max-w-xs text-sm text-white/70">
            Zes specialiteiten onder één dak. Eén planning. Eén aanspreekpunt. Eigen werfploegen.
          </p>
          <div className="flex gap-3 pt-2">
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener" className="text-white/60 hover:text-white">Instagram</a>
            <span className="text-white/30">·</span>
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener" className="text-white/60 hover:text-white">Facebook</a>
            <span className="text-white/30">·</span>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener" className="text-white/60 hover:text-white">LinkedIn</a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
            Divisies
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {divisions.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/${d.slug}`}
                  className="group inline-flex items-center gap-2 text-white/85 transition hover:text-white"
                >
                  <span
                    aria-hidden
                    className="inline-block size-2.5 rounded-full"
                    style={{ background: d.color.base }}
                  />
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
            Bedrijf
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {companyNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/85 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-white/50" />
              <span>
                {siteConfig.contact.address.street}<br />
                {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-white/50" />
              <a href={siteConfig.contact.phoneHref} className="hover:text-white">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-white/50" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.legalName}.
            {siteConfig.contact.kbo.startsWith("TODO") ? null : <> KBO {siteConfig.contact.kbo}.</>}{" "}
            Alle rechten voorbehouden.
          </p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <li><Link href="/privacy" className="hover:text-white">Privacybeleid</Link></li>
            <li><Link href="/algemene-voorwaarden" className="hover:text-white">Algemene voorwaarden</Link></li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
