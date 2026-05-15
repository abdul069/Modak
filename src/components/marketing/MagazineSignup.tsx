import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

/**
 * Inspiratie / newsletter signup card — 2-column visual: cover image left,
 * email form right. Stub form (action="/api/newsletter") — no backend yet.
 */
export function MagazineSignup() {
  return (
    <section className="section-cream py-20 md:py-24">
      <div className="container-page">
        <div className="grid items-stretch gap-0 overflow-hidden rounded-3xl bg-brand-bg shadow-xl ring-1 ring-brand-line md:grid-cols-12">
          {/* Cover */}
          <div className="relative aspect-[5/4] md:col-span-5 md:aspect-auto">
            <Image
              src="/images/projects/IMG-20260512-WA0070.jpg"
              alt="AGNAU inspiratiemagazine"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="photo-graded object-cover object-[center_25%]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-bg/40 md:to-brand-bg/0"
            />
          </div>

          {/* Form */}
          <div className="p-8 md:col-span-7 md:p-12">
            <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-brand-primary">
              <span className="inline-block h-px w-8 bg-brand-accent" />
              Inspiratie in je mailbox
            </p>
            <h2
              className="mt-5 font-display leading-[1.05] text-brand-ink"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              Renovatietips, <span className="accent-word">recht uit de werf.</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-brand-ink-soft">
              Maandelijkse update met afgewerkte projecten, premie-tips
              en praktische adviezen. Geen spam — alleen wat je écht
              kunt gebruiken.
            </p>
            <form
              action="/api/newsletter"
              method="post"
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                name="email"
                required
                placeholder="je@e-mail.be"
                className="rounded-full"
                aria-label="E-mailadres"
              />
              <button
                type="submit"
                className="group/sub inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-primary-700"
              >
                Aanvragen
                <ArrowRight className="size-4 transition-transform duration-300 group-hover/sub:translate-x-1" />
              </button>
            </form>
            <p className="mt-3 text-xs text-brand-ink-soft">
              Je kan je elk moment uitschrijven. Zie ons{" "}
              <a href="/privacy" className="underline hover:text-brand-primary">privacybeleid</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
