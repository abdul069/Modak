export const siteConfig = {
  name: "AGNAU",
  legalName: "AGNAU bv",
  domain: "agnau.be",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://agnau.be",
  description:
    "Vlaamse multidisciplinaire bouwgroep. Zes specialistische divisies — dakwerken, ramen & deuren, renovatie, HVAC, zonne-energie, laadpalen — onder één dak, met eigen werfploegen.",
  contact: {
    email: process.env.CONTACT_EMAIL ?? "info@agnau.be",
    phone: "+32 9 123 45 67",
    phoneHref: "tel:+3291234567",
    address: {
      street: "Hooiwege 40j",
      postalCode: "9940",
      city: "Evergem",
      country: "België",
    },
    openingHours: [
      { day: "Maandag - Vrijdag", hours: "8:00 - 17:00" },
      { day: "Zaterdag", hours: "Op afspraak" },
      { day: "Zondag", hours: "Gesloten" },
    ],
    kbo: "TODO: BE 0000.000.000",
  },
  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
  },
  ogImage: "/og.jpg",
} as const;

export const companyNav = [
  { label: "Over ons", href: "/over-ons" },
  { label: "Realisaties", href: "/realisaties" },
  { label: "Jobs", href: "/jobs" },
  { label: "Premies", href: "/premies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const partners = [
  { id: "rescert",  label: "RESCert",      description: "Erkend installateur warmtepompen & zonneboilers" },
  { id: "vca",      label: "VCA*",         description: "Veiligheid, gezondheid en milieu op de werf" },
  { id: "erkend",   label: "Erkend aannemer", description: "Vlaamse erkenning categorie D" },
  { id: "daikin",   label: "Daikin Stand-By", description: "Officieel Daikin-partner" },
  { id: "viessmann",label: "Viessmann",    description: "Erkend installatiepartner Viessmann" },
  { id: "reynaers", label: "Reynaers",     description: "Premium aluminium ramen & deuren" },
  { id: "schueco",  label: "Schüco",       description: "Aluminium gevelsystemen" },
  { id: "bosch",    label: "Bosch",        description: "Verwarming & warmtepompen" },
] as const;

export type PartnerId = (typeof partners)[number]["id"];
