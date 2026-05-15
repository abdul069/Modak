import type { Division } from "./types";

export const dakwerken: Division = {
  slug: "dakwerken",
  themeKey: "dak",
  name: "Dakwerken",
  shortName: "Dak",
  tagline: "Pannen, leien, EPDM, isolatie en gevelwerk",
  iconKey: "roof",
  color: { base: "#D9531E", soft: "#FDEDE5", deep: "#B23E0F" },
  hero: {
    eyebrow: "AGNAU · Dakwerken",
    headline: "Een dak dat een leven meegaat.",
    subtitle:
      "Van pannendaken en leien tot platte EPDM-daken — eigen ploegen, A-merken en tien jaar uitvoeringsgarantie.",
    image: "/images/divisions/dak-hero.jpg",
    proofPoints: ["VCA*", "Erkend aannemer cat. D", "10 jaar garantie"],
  },
  services: [
    { title: "Pannendaken", description: "Klassieke en moderne pannen — volledige plaatsing of vervanging.", icon: "roof" },
    { title: "Natuurleien", description: "Spaanse en Welshe leien, geplaatst volgens de regels van de kunst.", icon: "layers" },
    { title: "EPDM platte daken", description: "Naadloze EPDM-bedekking met afdichting tot 25 jaar levensduur.", icon: "square" },
    { title: "Dakisolatie", description: "Sarking, zoldervloer of onderdaks — met premies tot €X.XXX.", icon: "layers-3" },
    { title: "Goten & afvoer", description: "Zink, koper of PVC — gootwerk, afvoeren en hemelwaterputten.", icon: "droplet" },
    { title: "Gevelwerk", description: "Houten gevelbekleding, leien gevels en gevelisolatie.", icon: "panels-top-left" },
  ],
  useCases: [
    { title: "Vervanging oud dak", description: "Volledige strip-and-rebuild met nieuwe isolatie volgens EPB-norm.", timing: "2-4 weken", budgetRange: "vanaf €15.000" },
    { title: "Nieuwbouw", description: "Werken vanaf de ruwbouw, op tijd voor wind- en waterdicht moment.", timing: "1-2 weken" },
    { title: "Renovatie + isolatie", description: "Isoleren zonder volledige vervanging — sarking of binnenisolatie.", timing: "1-3 weken", budgetRange: "vanaf €8.000" },
  ],
  approach: [
    { step: 1, title: "Plaatsbezoek", description: "We meten op, controleren de structuur en bespreken uw verwachtingen ter plaatse." },
    { step: 2, title: "Onderbouwde offerte", description: "Binnen 7 dagen krijgt u een gedetailleerde prijs met materiaalkeuze en planning." },
    { step: 3, title: "Uitvoering", description: "Eigen ploeg op de werf, vaste werfleider, dagelijkse opvolging en oplevering met checklist." },
  ],
  partnerIds: ["vca", "erkend"],
  faq: [
    { q: "Hoe lang gaat een nieuw dak mee?", a: "Pannen 50+ jaar, natuurleien 80+ jaar, EPDM 25-30 jaar — mits correcte plaatsing en periodiek onderhoud." },
    { q: "Krijg ik een premie voor dakisolatie?", a: "Ja. De Vlaamse Mijn VerbouwPremie loopt door in 2026 voor dak- en zoldervloerisolatie. We rekenen het voor u uit." },
    { q: "Werken jullie ook met asbestleien?", a: "Ja, met VCA*-gecertificeerde verwijdering. We werken samen met erkende asbestverwerkers." },
    { q: "Hoe snel kunnen jullie starten?", a: "Standaard 4-8 weken vooruit, afhankelijk van seizoen. Spoedwerk bij lekkage binnen 48u." },
  ],
  form: {
    fields: [
      { name: "type", label: "Type dak", type: "radio", required: true, options: [
        { value: "pannen", label: "Pannendak" },
        { value: "leien", label: "Natuurleien" },
        { value: "epdm", label: "Plat dak (EPDM)" },
        { value: "andere", label: "Andere / nog niet zeker" },
      ]},
      { name: "oppervlakte", label: "Geschatte oppervlakte (m²)", type: "number", placeholder: "bv. 120" },
      { name: "huidigeStaat", label: "Huidige staat", type: "select", options: [
        { value: "nieuw", label: "Nieuwbouw" },
        { value: "vervanging", label: "Volledige vervanging nodig" },
        { value: "renovatie", label: "Renovatie + isolatie" },
        { value: "herstelling", label: "Lokale herstelling" },
      ]},
      { name: "timing", label: "Gewenste timing", type: "select", options: [
        { value: "asap", label: "Zo snel mogelijk" },
        { value: "3m", label: "Binnen 3 maanden" },
        { value: "6m", label: "Binnen 6 maanden" },
        { value: "flex", label: "Flexibel" },
      ]},
      { name: "naam", label: "Naam", type: "text", required: true },
      { name: "email", label: "E-mail", type: "email", required: true },
      { name: "telefoon", label: "Telefoon", type: "tel", required: true },
      { name: "postcode", label: "Postcode", type: "text", required: true, placeholder: "9000" },
      { name: "opmerkingen", label: "Opmerkingen", type: "textarea", placeholder: "Vertel kort wat u in gedachten heeft." },
    ],
    submitLabel: "Vraag dakofferte aan",
  },
  meta: {
    title: "Dakwerken — pannen, leien, EPDM & isolatie",
    description: "AGNAU Dakwerken: pannendaken, natuurleien, EPDM, dakisolatie en gevelwerk. Eigen ploegen, VCA*, 10 jaar garantie.",
    conversionEvent: "Lead_Dakwerken",
  },
};
