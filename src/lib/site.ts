export const siteConfig = {
  name: "AGNAU",
  domain: "agnau.be",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://agnau.be",
  contact: {
    email: process.env.CONTACT_EMAIL ?? "info@agnau.be",
    phone: "+32 485 10 89 89",
    phoneHref: "tel:+32485108989",
    address: {
      street: "Hooiwege 40j",
      postalCode: "9940",
      city: "Evergem",
      country: "België",
    },
    // TODO: KBO/BTW-nummer aanvullen wanneer beschikbaar
    kbo: "TODO: BE 0000.000.000",
  },
  social: {
    // TODO: vervang door echte social URLs
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
  },
  description:
    "Belgische renovatiespecialist uit Evergem. Eén partner voor je volledige renovatie — dak, isolatie, warmtepompen, verwarming, ventilatie, sanitair, badkamers en airco.",
  ogImage: "/og.jpg",
  heroPhoto:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=85&auto=format&fit=crop",
} as const;

const PHOTO_TOTAAL = "/images/projects/totaalrenovatie-sint-denijs-westrem-hero.jpg";
const PHOTO_WARMTEPOMP = "/images/projects/warmtepomp-gent-hero.jpg";
const PHOTO_BADKAMER = "/images/projects/badkamer-merelbeke-hero.jpg";

export const services = [
  {
    slug: "dakrenovatie",
    title: "Dakrenovatie",
    icon: "Home",
    short: "Volledige dakrenovaties met aandacht voor structuur, dichting en afwerking.",
    image: PHOTO_TOTAAL,
    tint: "neutral",
  },
  {
    slug: "dakisolatie",
    title: "Dakisolatie",
    icon: "Layers",
    short: "Energiebesparend isoleren — binnen of buitenom — met blijvende premies.",
    image: PHOTO_TOTAAL,
    tint: "amber",
  },
  {
    slug: "warmtepompen",
    title: "Warmtepompen",
    icon: "Flame",
    short: "Lucht-water en geothermische warmtepompen, RESCert-gecertificeerd.",
    image: PHOTO_WARMTEPOMP,
    tint: "neutral",
  },
  {
    slug: "verwarming",
    title: "Verwarming",
    icon: "Thermometer",
    short: "Centrale verwarming, vloerverwarming en hybride installaties.",
    image: PHOTO_WARMTEPOMP,
    tint: "red",
  },
  {
    slug: "ventilatie",
    title: "Ventilatie",
    icon: "Wind",
    short: "Systeem C en D met warmterecuperatie voor een gezond binnenklimaat.",
    image: PHOTO_TOTAAL,
    tint: "emerald",
  },
  {
    slug: "sanitair",
    title: "Sanitair",
    icon: "Droplet",
    short: "Volledige sanitaire installaties — leidingen, toestellen en aansluitingen.",
    image: PHOTO_BADKAMER,
    tint: "sky",
  },
  {
    slug: "badkamers",
    title: "Badkamers",
    icon: "Bath",
    short: "Badkamers van A tot Z — ontwerp, betegeling, sanitair en afwerking.",
    image: PHOTO_BADKAMER,
    tint: "neutral",
  },
  {
    slug: "airco",
    title: "Airco",
    icon: "Snowflake",
    short: "Splitairco's, multisplit en VRV-systemen voor woning of kantoor.",
    image: PHOTO_WARMTEPOMP,
    tint: "cyan",
  },
  {
    slug: "elektriciteitswerken",
    title: "Elektriciteitswerken",
    icon: "Zap",
    short: "Residentiële elektriciteit — van keuring tot volledige herbedrading en domotica.",
    image: PHOTO_TOTAAL,
    tint: "amber",
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

export const navigation = [
  { label: "Diensten", href: "/diensten" },
  { label: "Totaalrenovatie", href: "/totaalrenovatie" },
  { label: "Premies", href: "/premies" },
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
