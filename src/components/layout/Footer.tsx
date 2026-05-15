import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import { certificates, services, siteConfig } from "@/lib/site";
import { Logo } from "@/components/brand/Logo";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-charcoal text-bone">
      {/* AGNAU watermark across full width */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-2vw] z-0 select-none text-center font-display text-[28vw] font-medium leading-[0.8] text-bone/[0.04]"
      >
        AGNAU
      </div>

      <div className="container-wide relative z-10 grid gap-12 py-20 md:grid-cols-12 md:gap-8 md:py-24">
        {/* Brand */}
        <div className="md:col-span-4 lg:col-span-5">
          <Logo variant="white" size="lg" />
          <p className="mt-6 max-w-sm text-base text-bone/70">
            Eén partner voor je volledige renovatie — van eerste steen tot
            laatste schroef. Gent · Oost-Vlaanderen.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href={siteConfig.social.instagram}
              aria-label="Instagram"
              className="text-bone/60 transition-colors hover:text-clay"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href={siteConfig.social.facebook}
              aria-label="Facebook"
              className="text-bone/60 transition-colors hover:text-clay"
            >
              <Facebook className="size-5" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              aria-label="LinkedIn"
              className="text-bone/60 transition-colors hover:text-clay"
            >
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>

        {/* Bedrijf */}
        <div className="md:col-span-2 lg:col-span-2">
          <Eyebrow invert>Bedrijf</Eyebrow>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li><Link href="/totaalrenovatie" className="text-bone/75 transition-colors hover:text-clay">Totaalrenovatie</Link></li>
            <li><Link href="/aanpak" className="text-bone/75 transition-colors hover:text-clay">Onze aanpak</Link></li>
            <li><Link href="/realisaties" className="text-bone/75 transition-colors hover:text-clay">Realisaties</Link></li>
            <li><Link href="/premies" className="text-bone/75 transition-colors hover:text-clay">Premies</Link></li>
            <li><Link href="/over-ons" className="text-bone/75 transition-colors hover:text-clay">Over ons</Link></li>
            <li><Link href="/voor-aannemers" className="text-bone/75 transition-colors hover:text-clay">Voor aannemers</Link></li>
            <li><Link href="/blog" className="text-bone/75 transition-colors hover:text-clay">Blog</Link></li>
          </ul>
        </div>

        {/* Diensten — top 6 */}
        <div className="md:col-span-3 lg:col-span-2">
          <Eyebrow invert>Diensten</Eyebrow>
          <ul className="mt-5 space-y-2.5 text-sm">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link href={`/diensten/${s.slug}`} className="text-bone/75 transition-colors hover:text-clay">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/diensten" className="font-medium text-clay transition-colors hover:text-bone">
                Alle diensten →
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-3 lg:col-span-3">
          <Eyebrow invert>Contact</Eyebrow>
          <ul className="mt-5 space-y-4 text-sm text-bone/75">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-clay" />
              <span>
                {siteConfig.contact.address.street}
                <br />
                {siteConfig.contact.address.postalCode}{" "}
                {siteConfig.contact.address.city}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-clay" />
              <a href={siteConfig.contact.phoneHref} className="hover:text-clay">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-clay" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-clay">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-wide relative z-10 border-t border-bone/10">
        <div className="flex flex-col gap-4 py-6 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-bone/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}
            {siteConfig.contact.kbo.startsWith("TODO") ? null : ` · KBO ${siteConfig.contact.kbo}`}
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li><Link href="/privacy" className="hover:text-clay">Privacybeleid</Link></li>
            {certificates.map((c) => <li key={c.id}>{c.label}</li>)}
          </ul>
        </div>
      </div>
    </footer>
  );
}
