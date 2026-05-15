import type { Division } from "./types";

export const hvac: Division = {
  slug: "hvac",
  themeKey: "hvac",
  name: "HVAC",
  shortName: "HVAC",
  tagline: "Warmtepompen, ventilatie, verwarming en airco",
  iconKey: "wind",
  color: { base: "#2BAE66", soft: "#E1F4EA", deep: "#1E8049" },
  hero: {
    eyebrow: "AGNAU · HVAC",
    headline: "Comfort dat blijft. Zonder fossiele zorgen.",
    subtitle:
      "Warmtepompen, vloerverwarming, ventilatie C/D en airco — geïnstalleerd door RESCert-gecertificeerde technici.",
    image: "/images/divisions/hvac-hero.jpg",
    proofPoints: ["RESCert", "Daikin Stand-By", "Bosch & Viessmann partner"],
  },
  services: [
    { title: "Warmtepompen", description: "Lucht-water, hybride en geothermisch — afgestemd op uw woning.", icon: "flame" },
    { title: "Vloerverwarming", description: "Volledig comfort bij lage temperatuur, ideaal in combinatie met een warmtepomp.", icon: "thermometer" },
    { title: "Ventilatie C/D", description: "Systeem C of D met warmterecuperatie — gezond binnenklimaat en EPB-conform.", icon: "wind" },
    { title: "Airconditioning", description: "Split, multi-split en VRV — koeling én verwarming, stil en zuinig.", icon: "snowflake" },
    { title: "Hybride systemen", description: "Combinatie warmtepomp + condensatieketel voor renovatiewoningen.", icon: "git-branch" },
    { title: "Onderhoud", description: "Jaarlijks onderhoudscontract met digitale rapportering en spoedinterventie.", icon: "wrench" },
  ],
  useCases: [
    { title: "Nieuwbouw EPB E30", description: "Volledig pakket warmtepomp + ventilatie D + zonneboiler op maat.", timing: "1-2 weken installatie", budgetRange: "vanaf €18.000" },
    { title: "Renovatie zonder gas", description: "Hybride of full-electric oplossing, met premies tot €5.000.", timing: "1 week installatie", budgetRange: "vanaf €12.000" },
    { title: "Airco-installatie", description: "Split of multi-split bij bestaande woning, vanaf 1 dag werk.", timing: "1-3 dagen", budgetRange: "vanaf €2.500" },
  ],
  approach: [
    { step: 1, title: "Plaatsbezoek & meting", description: "Warmteverliesberekening en analyse van isolatie, ventilatie en huidige installatie." },
    { step: 2, title: "Onderbouwde offerte", description: "Inclusief subsidie-berekening, EPB-impact en jaarlijks energieverbruik." },
    { step: 3, title: "Installatie & inregeling", description: "RESCert-installatie, ingebruikname en uitleg van de installatie aan u." },
  ],
  partnerIds: ["rescert", "daikin", "viessmann", "bosch", "vca"],
  faq: [
    { q: "Welke premie krijg ik voor een warmtepomp?", a: "In 2026 tot €3.000 Mijn VerbouwPremie + Fluvius-premies. Combineren met sloop & heropbouw kan tot €6.000 totaal." },
    { q: "Is een warmtepomp geschikt voor mijn oude woning?", a: "Hybride systemen werken in vrijwel elke woning. Full-electric vraagt voldoende isolatie — we maken vooraf de berekening." },
    { q: "Hoe luid is een warmtepomp?", a: "Moderne A-merken zitten op 30-35 dB op 1 meter — stiller dan een koelkast. We adviseren over plaatsing om buren te respecteren." },
    { q: "Bieden jullie onderhoud aan?", a: "Ja. Een jaarlijks onderhoudscontract dekt jaarlijkse keuring, kuisbeurt en voorrang bij interventie." },
  ],
  form: {
    fields: [
      { name: "systeem", label: "Welk systeem zoekt u?", type: "radio", required: true, options: [
        { value: "warmtepomp", label: "Warmtepomp" },
        { value: "ventilatie", label: "Ventilatie" },
        { value: "airco", label: "Airco" },
        { value: "totaal", label: "Totaalpakket / advies" },
      ]},
      { name: "huidigeBron", label: "Huidige verwarming", type: "select", options: [
        { value: "gas", label: "Aardgas" },
        { value: "mazout", label: "Mazout" },
        { value: "elektrisch", label: "Elektrisch" },
        { value: "geen", label: "Geen — nieuwbouw" },
      ]},
      { name: "oppervlakte", label: "Bewoonbare oppervlakte (m²)", type: "number", placeholder: "bv. 140" },
      { name: "isolatie", label: "Isolatiegraad", type: "select", options: [
        { value: "epb", label: "Recente EPB-norm" },
        { value: "goed", label: "Goed geïsoleerd (na 2010)" },
        { value: "matig", label: "Deels geïsoleerd" },
        { value: "weinig", label: "Weinig of niet geïsoleerd" },
      ]},
      { name: "naam", label: "Naam", type: "text", required: true },
      { name: "email", label: "E-mail", type: "email", required: true },
      { name: "telefoon", label: "Telefoon", type: "tel", required: true },
      { name: "postcode", label: "Postcode", type: "text", required: true, placeholder: "9000" },
      { name: "opmerkingen", label: "Opmerkingen", type: "textarea" },
    ],
    submitLabel: "Vraag HVAC-offerte aan",
  },
  meta: {
    title: "HVAC — warmtepompen, ventilatie en airco",
    description: "AGNAU HVAC: RESCert-gecertificeerde warmtepompen, ventilatie C/D en airco. Daikin, Viessmann, Bosch partner.",
    conversionEvent: "Lead_HVAC",
  },
};
