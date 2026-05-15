import type { Division } from "./types";

export const zonneEnergie: Division = {
  slug: "zonne-energie",
  themeKey: "solar",
  name: "Zonne-energie",
  shortName: "Zonne-energie",
  tagline: "PV-panelen, omvormers en batterijopslag",
  iconKey: "sun",
  color: { base: "#F4C430", soft: "#FEF6D9", deep: "#C99B17" },
  hero: {
    eyebrow: "AGNAU · Zonne-energie",
    headline: "Wek op wat u dagelijks verbruikt.",
    subtitle:
      "PV-installaties met A-merk-panelen, hybride omvormers en thuisbatterijen — gedimensioneerd op uw werkelijke verbruik.",
    image: "/images/divisions/solar-hero.jpg",
    proofPoints: ["RESCert PV", "Gecertificeerde monteurs", "Monitoring inbegrepen"],
  },
  services: [
    { title: "Zonnepanelen", description: "A-merk-panelen (LG, REC, JA Solar) met 25 jaar productiegarantie.", icon: "sun" },
    { title: "Hybride omvormers", description: "Voorbereid op batterij en EV-laadpaal — toekomstbestendig kiezen.", icon: "git-branch" },
    { title: "Thuisbatterij", description: "Opslag voor eigen verbruik 's avonds en bij stroomonderbreking.", icon: "battery-charging" },
    { title: "EV-integratie", description: "Slim laden van uw wagen op overschot zonneproductie.", icon: "plug-zap" },
    { title: "Monitoring", description: "Live opvolging van productie, verbruik en zelfconsumptie via app.", icon: "line-chart" },
    { title: "Uitbreiding & service", description: "Bestaande installatie uitbreiden of upgraden — alle merken bespreekbaar.", icon: "wrench" },
  ],
  useCases: [
    { title: "Particuliere installatie", description: "8-16 panelen voor gemiddeld gezin, terugverdientijd 6-8 jaar.", timing: "1 dag plaatsing", budgetRange: "vanaf €5.500" },
    { title: "Met thuisbatterij", description: "Maximale zelfconsumptie, ook 's avonds zonneverbruik.", timing: "1-2 dagen", budgetRange: "vanaf €9.500" },
    { title: "KMO & landbouw", description: "Grote dakvlakken benutten — vaak met groene-stroom-certificaten.", timing: "2-3 dagen", budgetRange: "Op maat" },
  ],
  approach: [
    { step: 1, title: "Verbruiksanalyse", description: "We bekijken uw jaarverbruik, dakoriëntatie en toekomstplannen (warmtepomp? EV?)." },
    { step: 2, title: "Onderbouwde offerte", description: "Productiesimulatie, terugverdientijd en netto kostprijs na premies." },
    { step: 3, title: "Plaatsing & keuring", description: "Eén dag werk voor standaardinstallaties. AREI-keuring inbegrepen." },
  ],
  partnerIds: ["rescert", "vca"],
  faq: [
    { q: "Is zonne-energie nog interessant zonder terugdraaiende teller?", a: "Ja, mits goede dimensionering en zelfconsumptie. Met thuisbatterij of warmtepomp kan u 70-90% van de productie zelf benutten." },
    { q: "Welke garantie krijg ik?", a: "Panelen: 25 jaar productiegarantie. Omvormer: 10 jaar (uitbreidbaar). Plaatsing: 10 jaar garantie." },
    { q: "Hoe lang duurt de plaatsing?", a: "Standaard installatie: 1 dag. Met thuisbatterij: 1-2 dagen. AREI-keuring binnen 2 weken na plaatsing." },
    { q: "Kan ik later uitbreiden?", a: "Ja, mits uw omvormer voldoende capaciteit heeft. Daarom raden we hybride omvormers aan." },
  ],
  form: {
    fields: [
      { name: "verbruik", label: "Jaarverbruik elektriciteit (kWh)", type: "number", placeholder: "bv. 4500" },
      { name: "dak", label: "Dakoppervlakte voor panelen (m²)", type: "number", placeholder: "bv. 30" },
      { name: "orientatie", label: "Dakoriëntatie", type: "select", options: [
        { value: "zuid", label: "Zuid" },
        { value: "oz-wz", label: "Oost-West" },
        { value: "andere", label: "Andere / mix" },
        { value: "onbekend", label: "Niet zeker" },
      ]},
      { name: "batterij", label: "Thuisbatterij gewenst?", type: "radio", required: true, options: [
        { value: "ja", label: "Ja" },
        { value: "later", label: "Later mogelijk" },
        { value: "nee", label: "Nee" },
        { value: "advies", label: "Advies gewenst" },
      ]},
      { name: "naam", label: "Naam", type: "text", required: true },
      { name: "email", label: "E-mail", type: "email", required: true },
      { name: "telefoon", label: "Telefoon", type: "tel", required: true },
      { name: "postcode", label: "Postcode", type: "text", required: true, placeholder: "9000" },
      { name: "opmerkingen", label: "Opmerkingen", type: "textarea" },
    ],
    submitLabel: "Vraag zonne-offerte aan",
  },
  meta: {
    title: "Zonne-energie — PV-panelen, omvormers, thuisbatterij",
    description: "AGNAU Zonne-energie: A-merk PV-panelen, hybride omvormers en thuisbatterijen. RESCert-gecertificeerd, eigen monteurs.",
    conversionEvent: "Lead_Zonne",
  },
};
