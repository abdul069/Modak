import Image from "next/image";

interface MaterialStripProps {
  /** Source path of the macro/material photo. */
  src: string;
  alt?: string;
  /** Overlaid text shown on left of the strip. */
  label?: string;
  /** Optional sub-label / discipline tag on right. */
  tag?: string;
}

/**
 * Full-bleed cinematic strip used as a section divider. Communicates
 * craftsmanship through a close-up material/detail shot. Not used by tifre;
 * helps put AGNAU ahead in perceived editorial polish.
 */
export function MaterialStrip({ src, alt = "", label, tag }: MaterialStripProps) {
  return (
    <section className="relative h-[34vh] w-full overflow-hidden bg-brand-bg-dark md:h-[40vh] lg:h-[44vh]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-bg-dark/70 via-brand-bg-dark/30 to-transparent" />

      <div className="container-page relative flex h-full items-end pb-10 md:pb-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          {label ? (
            <div>
              <span className="block h-px w-10 bg-brand-accent" />
              <p className="mt-3 font-display text-3xl leading-none text-white md:text-5xl">
                {label}
              </p>
            </div>
          ) : null}
          {tag ? (
            <span className="bg-brand-accent px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white">
              {tag}
            </span>
          ) : null}
        </div>
      </div>
    </section>
  );
}
