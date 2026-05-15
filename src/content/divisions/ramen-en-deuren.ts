import type { Division } from "./types";

export const ramenEnDeuren: Division = {
  slug: "ramen-en-deuren",
  themeKey: "rd",
  name: "Ramen & Deuren",
  shortName: "Ramen & Deuren",
  tagline: "PVC, aluminium en hout — op maat geplaatst",
  iconKey: "panels-top-left",
  color: { base: "#00A4D6", soft: "#E0F4FA", deep: "#007BA3" },
  hero: {
    eyebrow: "AGNAU · Ramen & Deuren",
    headline: "Licht, comfort en zekerheid.",
    subtitle:
      "Ramen en deuren op maat in PVC, aluminium en hout. Reynaers, Schüco en andere A-merken — met eigen plaatsers.",
    image: "/images/divisions/rd-hero.jpg",
    proofPoints: ["Reynaers Prestige Partner", "10 jaar garantie", "Eigen plaatsers"],
  },
  services: [
    { title: "PVC ramen", description: "Energiezuinige PVC-ramen met triple-glas en inbraakwerend beslag.", icon: "panels-top-left" },
    { title: "Aluminium ramen", description: "Slanke profielen, grote glasvlakken — perfect voor moderne architectuur.", icon: "panels-top-left" },
    { title: "Houten ramen", description: "Massief meranti of duurzaam afromosia — voor karaktervolle woningen.", icon: "panels-top-left" },
    { title: "Schuif- & hefschuifsystemen", description: "Tot 6m brede schuiframen in aluminium, perfect voor verandas en achtergevels.", icon: "move-horizontal" },
    { title: "Voordeuren", description: "Veiligheidsdeuren met SKG-keurmerk in alle materialen en stijlen.", icon: "door-open" },
    { title: "Sectionaalpoorten", description: "Geïsoleerde garagepoorten met elektrische aansturing en motor-back-up.", icon: "warehouse" },
  ],
  useCases: [
    { title: "Volledige raamvervanging", description: "Alle ramen in één keer — gecoördineerd zonder dat u dagen zonder ramen zit.", timing: "1 dag plaatsing per 8-10 ramen", budgetRange: "vanaf €8.000" },
    { title: "Nieuwbouw", description: "Vanaf plan: maatadvies, productie en plaatsing op het juiste bouwmoment.", timing: "8-12 weken levertijd" },
    { title: "Renovatie particulier", description: "Per kamer of per verdieping vernieuwen, met minimale hinder.", timing: "Op maat" },
  ],
  approach: [
    { step: 1, title: "Showroombezoek of plaatsbezoek", description: "Voel de materialen, bekijk de afwerkingen — of we komen ter plaatse opmeten." },
    { step: 2, title: "Onderbouwde offerte", description: "Detail per raam: materiaal, kleur, beslag, U-waarde en montage." },
    { step: 3, title: "Plaatsing", description: "Eigen plaatsers, lucht- en waterdichte aansluitingen, afwerking volledig op maat." },
  ],
  partnerIds: ["reynaers", "schueco", "erkend"],
  faq: [
    { q: "Wat is het verschil tussen PVC, aluminium en hout?", a: "PVC = beste prijs/kwaliteit en isolatie. Aluminium = slankere profielen en grotere glasvlakken. Hout = warmste uitstraling, vraagt periodiek onderhoud." },
    { q: "Krijg ik premie voor nieuwe ramen?", a: "Bij gelijktijdige renovatie kan u in aanmerking komen voor Mijn VerbouwPremie. We bekijken het samen." },
    { q: "Hoe lang duurt de levering?", a: "PVC: 6-8 weken. Aluminium: 8-12 weken. Hout: 10-14 weken — afhankelijk van het seizoen." },
    { q: "Werken jullie ook in bestaande woningen?", a: "Ja. Ons standaardproces is renovatie. We werken kamer per kamer of in één blok — afhankelijk van uw voorkeur." },
  ],
  form: {
    fields: [
      { name: "materiaal", label: "Voorkeur materiaal", type: "radio", required: true, options: [
        { value: "pvc", label: "PVC" },
        { value: "alu", label: "Aluminium" },
        { value: "hout", label: "Hout" },
        { value: "advies", label: "Advies gewenst" },
      ]},
      { name: "aantal", label: "Aantal ramen / deuren", type: "number", placeholder: "bv. 8" },
      { name: "type", label: "Type project", type: "select", options: [
        { value: "vervanging", label: "Volledige raamvervanging" },
        { value: "deel", label: "Enkele ramen / deuren" },
        { value: "nieuwbouw", label: "Nieuwbouw" },
        { value: "veranda", label: "Veranda / uitbouw" },
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
      { name: "opmerkingen", label: "Opmerkingen", type: "textarea" },
    ],
    submitLabel: "Vraag offerte ramen & deuren",
  },
  meta: {
    title: "Ramen & Deuren — PVC, aluminium en hout op maat",
    description: "AGNAU Ramen & Deuren: maatwerk in PVC, aluminium en hout. Reynaers Prestige Partner, eigen plaatsers, 10 jaar garantie.",
    conversionEvent: "Lead_RamenDeuren",
  },
};
