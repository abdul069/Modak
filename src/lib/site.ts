export const siteConfig = {
  name: "Modak",
  domain: "modak.be",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://modak.be",
  // TODO: confirm final values with marketing/owner
  contact: {
    email: process.env.CONTACT_EMAIL ?? "info@modak.be",
    phone: "+32 9 000 00 00",
    phoneHref: "tel:+3290000000",
    address: {
      street: "Adresstraat 1",
      postalCode: "9000",
      city: "Gent",
      country: "België",
    },
    kbo: "BE 0000.000.000",
    iban: "BE00 0000 0000 0000",
  },
  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
  },
  description:
    "Belgische renovatiespecialist uit Gent. Eén partner voor je volledige renovatie — dak, isolatie, warmtepompen, verwarming, ventilatie, sanitair, badkamers en airco.",
  ogImage: "/og.jpg",
} as const;

export const services = [
  {
    slug: "dakrenovatie",
    title: "Dakrenovatie",
    icon: "Home",
    short: "Volledige dakrenovaties met aandacht voor structuur, dichting en afwerking.",
  },
  {
    slug: "dakisolatie",
    title: "Dakisolatie",
    icon: "Layers",
    short: "Energiebesparend isoleren — binnen of buitenom — met blijvende premies.",
  },
  {
    slug: "warmtepompen",
    title: "Warmtepompen",
    icon: "Flame",
    short: "Lucht-water en geothermische warmtepompen, RESCert-gecertificeerd.",
  },
  {
    slug: "verwarming",
    title: "Verwarming",
    icon: "Thermometer",
    short: "Centrale verwarming, vloerverwarming en hybride installaties.",
  },
  {
    slug: "ventilatie",
    title: "Ventilatie",
    icon: "Wind",
    short: "Systeem C en D met warmterecuperatie voor een gezond binnenklimaat.",
  },
  {
    slug: "sanitair",
    title: "Sanitair",
    icon: "Droplet",
    short: "Volledige sanitaire installaties — leidingen, toestellen en aansluitingen.",
  },
  {
    slug: "badkamers",
    title: "Badkamers",
    icon: "Bath",
    short: "Badkamers van A tot Z — ontwerp, betegeling, sanitair en afwerking.",
  },
  {
    slug: "airco",
    title: "Airco",
    icon: "Snowflake",
    short: "Splitairco's, multisplit en VRV-systemen voor woning of kantoor.",
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

export const navigation = [
  { label: "Diensten", href: "/diensten" },
  { label: "Totaalrenovatie", href: "/totaalrenovatie" },
  { label: "Realisaties", href: "/realisaties" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Voor aannemers", href: "/voor-aannemers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const certificates = [
  { id: "rescert", label: "RESCert", description: "Erkend installateur warmtepompen & zonneboilers" },
  { id: "vca", label: "VCA*", description: "Veiligheid, gezondheid en milieu op de werf" },
  { id: "erkend-aannemer", label: "Erkend aannemer", description: "Vlaamse erkenning categorie D" },
  { id: "daikin", label: "Daikin Stand-By", description: "Officieel partner Daikin warmtepompen" },
  { id: "viessmann", label: "Viessmann", description: "Erkend installatiepartner Viessmann" },
] as const;
