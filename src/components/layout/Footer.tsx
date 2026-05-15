import Link from "next/link";
import { certificates, services, siteConfig } from "@/lib/site";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-0 border-t border-brand-primary-100 bg-brand-primary-50 text-brand-ink">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-brand-ink-soft">
            Eén partner voor je volledige renovatie — van dak tot
            warmtepomp. Gent · Oost-Vlaanderen · Vlaanderen.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">
            Diensten
          </h4>
          <ul className="mt-5 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/diensten/${s.slug}`}
                  className="text-brand-ink-soft transition-colors hover:text-brand-primary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">
            Bedrijf
          </h4>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <Link href="/totaalrenovatie" className="text-brand-ink-soft hover:text-brand-primary">
                Totaalrenovatie
              </Link>
            </li>
            <li>
              <Link href="/realisaties" className="text-brand-ink-soft hover:text-brand-primary">
                Realisaties
              </Link>
            </li>
            <li>
              <Link href="/over-ons" className="text-brand-ink-soft hover:text-brand-primary">
                Over ons
              </Link>
            </li>
            <li>
              <Link href="/voor-aannemers" className="text-brand-ink-soft hover:text-brand-primary">
                Voor aannemers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-brand-ink-soft hover:text-brand-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-brand-ink-soft hover:text-brand-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">
            Contact
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-brand-ink-soft">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-accent" />
              <span>
                {siteConfig.contact.address.street}
                <br />
                {siteConfig.contact.address.postalCode}{" "}
                {siteConfig.contact.address.city}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-brand-accent" />
              <a href={siteConfig.contact.phoneHref} className="hover:text-brand-primary">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-brand-accent" />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-brand-primary"
              >
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-primary-100">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-brand-ink-soft md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}.
            {siteConfig.contact.kbo.startsWith("TODO") ? null : (
              <> KBO {siteConfig.contact.kbo}.</>
            )}{" "}
            Alle rechten voorbehouden.
          </p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <li>
              <Link href="/privacy" className="hover:text-brand-primary">
                Privacybeleid
              </Link>
            </li>
            {certificates.map((c) => (
              <li key={c.id}>{c.label}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
