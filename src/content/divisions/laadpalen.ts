import type { Division } from "./types";

export const laadpalen: Division = {
  slug: "laadpalen",
  themeKey: "ev",
  name: "Laadpalen",
  shortName: "Laadpalen",
  tagline: "Laadpunten voor thuis, KMO en residentie",
  iconKey: "plug-zap",
  color: { base: "#7B3FE4", soft: "#EFE7FC", deep: "#5A23B5" },
  hero: {
    eyebrow: "AGNAU · Laadpalen",
    headline: "Elke wagen vanaf elk parkeervak.",
    subtitle:
      "Thuislaadpalen, KMO-infrastructuur en residentiële laadparken — geplaatst, geactiveerd en beheerd.",
    image: "/images/divisions/ev-hero.jpg",
    proofPoints: ["EV-charging certified", "Smart load balancing", "Beheerd via app"],
  },
  services: [
    { title: "Thuislaadpalen", description: "Wallbox van 7-22 kW, ook met dynamisch laden op zonneoverschot.", icon: "plug-zap" },
    { title: "KMO-laadinfrastructuur", description: "Voor bedrijfswagens, klanten en bezoekers — met facturatie per gebruiker.", icon: "building-2" },
    { title: "Residentiële laadparken", description: "Appartementsgebouwen met centrale aansturing en individuele meting.", icon: "building" },
    { title: "Load balancing", description: "Slim verdelen over beschikbare netcapaciteit — geen kostelijke uitbreiding.", icon: "git-branch" },
    { title: "Backend & facturatie", description: "Eigen tag, app, en automatische facturatie van zakelijk gebruik.", icon: "credit-card" },
    { title: "Service & beheer", description: "24/7 monitoring, snelle interventie bij storing, jaarlijks onderhoud.", icon: "wrench" },
  ],
  useCases: [
    { title: "Thuis één wagen", description: "Eénpolige of driefase wallbox, AREI-keuring inbegrepen.", timing: "Half dag", budgetRange: "vanaf €1.500" },
    { title: "KMO 2-10 wagens", description: "Smart-charging-park met facturatiemodule en klanttoegang.", timing: "1-3 dagen", budgetRange: "Op maat" },
    { title: "Residentie 10+ punten", description: "Volledig pakket: kabeltraject, centrale, individuele meters, app.", timing: "2-4 weken", budgetRange: "Op maat" },
  ],
  approach: [
    { step: 1, title: "Plaatsbezoek & analyse", description: "Aansluitingscapaciteit, kabelweg en gebruiksprofiel inschatten." },
    { step: 2, title: "Onderbouwde offerte", description: "Vaste prijs inclusief AREI-keuring en backend-activatie." },
    { step: 3, title: "Plaatsing & activatie", description: "Eigen elektrotechnici, ingebruikname en app-onboarding ter plaatse." },
  ],
  partnerIds: ["vca", "erkend"],
  faq: [
    { q: "Welke wallbox raden jullie aan?", a: "Wallbox Pulsar Plus, ABB Terra AC en Alfen Eve — afhankelijk van uw budget en functies." },
    { q: "Werken jullie samen met zonnepanelen?", a: "Ja. We laden bij voorkeur op overschot van uw eigen PV-installatie — bespaart tot 60% laadkosten." },
    { q: "Wat met meerdere wagens op één aansluiting?", a: "Met load balancing verdelen we slim de capaciteit. Vermijdt dure netuitbreiding." },
    { q: "Bieden jullie facturatie aan voor mijn werkgever?", a: "Ja. Onze backend stuurt automatisch maandfacturen voor zakelijke kilometers, conform fiscale regels." },
  ],
  form: {
    fields: [
      { name: "context", label: "Voor welke context?", type: "radio", required: true, options: [
        { value: "thuis", label: "Thuis (1 wagen)" },
        { value: "thuis-2", label: "Thuis (2+ wagens)" },
        { value: "kmo", label: "KMO / bedrijf" },
        { value: "residentie", label: "Appartementsgebouw" },
      ]},
      { name: "aantal", label: "Aantal laadpunten", type: "number", placeholder: "bv. 1" },
      { name: "wagen", label: "Type wagen", type: "select", options: [
        { value: "ev", label: "Volledig elektrisch" },
        { value: "phev", label: "Plug-in hybride" },
        { value: "beide", label: "Beide" },
        { value: "onbekend", label: "Nog niet aangekocht" },
      ]},
      { name: "pv", label: "Heeft u zonnepanelen?", type: "radio", options: [
        { value: "ja", label: "Ja" },
        { value: "binnenkort", label: "Binnenkort" },
        { value: "nee", label: "Nee" },
      ]},
      { name: "naam", label: "Naam", type: "text", required: true },
      { name: "email", label: "E-mail", type: "email", required: true },
      { name: "telefoon", label: "Telefoon", type: "tel", required: true },
      { name: "postcode", label: "Postcode", type: "text", required: true, placeholder: "9000" },
      { name: "opmerkingen", label: "Opmerkingen", type: "textarea" },
    ],
    submitLabel: "Vraag laadpaal-offerte aan",
  },
  meta: {
    title: "Laadpalen — thuis, KMO en residentie",
    description: "AGNAU Laadpalen: thuislaadpunten, KMO-infrastructuur en residentiële laadparken. Smart load balancing, app-beheer.",
    conversionEvent: "Lead_Laadpalen",
  },
};
