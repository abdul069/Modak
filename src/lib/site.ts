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
  heroPhoto: "/images/projects/IMG-20260512-WA0070.jpg",
} as const;

const PHOTO_DAKRENOVATIE = "/images/projects/IMG-20260512-WA0118.jpg";
const PHOTO_DAKISOLATIE = "/images/projects/IMG-20260512-WA0100.jpg";
const PHOTO_WARMTEPOMP = "/images/projects/pexels-alpha-innotec-936418931-20046693.jpg";
const PHOTO_VERWARMING = "/images/projects/IMG-20260512-WA0093.jpg";
const PHOTO_VENTILATIE = "/images/projects/IMG-20260512-WA0074.jpg";
const PHOTO_SANITAIR = "/images/projects/IMG-20260512-WA0095.jpg";
const PHOTO_BADKAMER = "/images/projects/IMG-20260512-WA0097.jpg";
const PHOTO_AIRCO = "/images/projects/IMG-20260512-WA0085.jpg";
const PHOTO_VERLICHTING = "/images/projects/pexels-jonathan-cordova-r-2637981-36551684.jpg";
const PHOTO_ZONNEPANELEN = "/images/projects/IMG-20260512-WA0087.jpg";
const PHOTO_LAADPAAL = "/images/projects/pexels-haberdoedas-32472662.jpg";

export const services = [
  {
    slug: "dakrenovatie",
    title: "Dakrenovatie",
    icon: "Home",
    short: "Volledige dakrenovaties met aandacht voor structuur, dichting en afwerking.",
    image: PHOTO_DAKRENOVATIE,
    tint: "neutral",
  },
  {
    slug: "dakisolatie",
    title: "Dakisolatie",
    icon: "Layers",
    short: "Energiebesparend isoleren — binnen of buitenom — met blijvende premies.",
    image: PHOTO_DAKISOLATIE,
    tint: "neutral",
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
    image: PHOTO_VERWARMING,
    tint: "neutral",
  },
  {
    slug: "ventilatie",
    title: "Ventilatie",
    icon: "Wind",
    short: "Systeem C en D met warmterecuperatie voor een gezond binnenklimaat.",
    image: PHOTO_VENTILATIE,
    tint: "neutral",
  },
  {
    slug: "sanitair",
    title: "Sanitair",
    icon: "Droplet",
    short: "Volledige sanitaire installaties — leidingen, toestellen en aansluitingen.",
    image: PHOTO_SANITAIR,
    tint: "neutral",
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
    image: PHOTO_AIRCO,
    tint: "neutral",
  },
  {
    slug: "elektriciteitswerken",
    title: "Elektriciteitswerken",
    icon: "Zap",
    short: "Residentiële elektriciteit — van keuring tot volledige herbedrading en domotica.",
    image: PHOTO_VERLICHTING,
    tint: "neutral",
  },
  {
    slug: "zonnepanelen",
    title: "Zonnepanelen",
    icon: "Sun",
    short: "PV-installaties op maat — van panelen tot omvormer en aansluiting op het net.",
    image: PHOTO_ZONNEPANELEN,
    tint: "neutral",
  },
  {
    slug: "laadpalen",
    title: "Laadpalen",
    icon: "Plug",
    short: "Laadpalen voor elektrische wagens — thuis, voor mede-eigenaars of bedrijf.",
    image: PHOTO_LAADPAAL,
    tint: "neutral",
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
