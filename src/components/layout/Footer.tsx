import Link from "next/link";
import { certificates, services, siteConfig } from "@/lib/site";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="section-dark mt-0 border-t border-white/10">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <Logo variant="white" />
          <p className="text-sm text-white/70">
            Eén partner voor je volledige renovatie — van dak tot
            warmtepomp. Gent · Oost-Vlaanderen · Vlaanderen.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
            Diensten
          </h4>
          <ul className="mt-5 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/diensten/${s.slug}`}
                  className="text-white/75 transition-colors hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
            Bedrijf
          </h4>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <Link href="/totaalrenovatie" className="text-white/75 hover:text-white">
                Totaalrenovatie
              </Link>
            </li>
            <li>
              <Link href="/realisaties" className="text-white/75 hover:text-white">
                Realisaties
              </Link>
            </li>
            <li>
              <Link href="/over-ons" className="text-white/75 hover:text-white">
                Over ons
              </Link>
            </li>
            <li>
              <Link href="/voor-aannemers" className="text-white/75 hover:text-white">
                Voor aannemers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-white/75 hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white/75 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
            Contact
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
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
              <a href={siteConfig.contact.phoneHref} className="hover:text-white">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-brand-accent" />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-white"
              >
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}.
            {siteConfig.contact.kbo.startsWith("TODO") ? null : (
              <> KBO {siteConfig.contact.kbo}.</>
            )}{" "}
            Alle rechten voorbehouden.
          </p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <li>
              <Link href="/privacy" className="hover:text-white">
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
