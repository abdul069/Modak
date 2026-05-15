import type { Division } from "./types";

export const renovatie: Division = {
  slug: "renovatie",
  themeKey: "reno",
  name: "Renovatie",
  shortName: "Renovatie",
  tagline: "Totaalrenovaties van A tot Z onder één planning",
  iconKey: "hammer",
  color: { base: "#E8A93A", soft: "#FCF3E1", deep: "#B8821E" },
  hero: {
    eyebrow: "AGNAU · Renovatie",
    headline: "Eén planning. Eén aanspreekpunt. Eén oplevering.",
    subtitle:
      "Volledige renovaties of deelrenovaties — badkamer, keuken, vloeren, schilderwerken en meer. Wij coördineren alle vakmensen.",
    image: "/images/divisions/reno-hero.jpg",
    proofPoints: ["Eigen projectleider", "Vaste werfploeg", "Vooraf vastgelegd budget"],
  },
  services: [
    { title: "Totaalrenovatie", description: "Volledige woning aanpakken — ontwerp, vergunning, uitvoering en oplevering.", icon: "home" },
    { title: "Badkamerrenovatie", description: "Van inrichting tot afwerking — sanitair, betegeling, verlichting en ventilatie.", icon: "bath" },
    { title: "Keukenrenovatie", description: "Maatkeukens met techniek, watergebruik en verluchting op één lijn.", icon: "utensils" },
    { title: "Vloeren & betegeling", description: "Parket, laminaat, PVC, natuursteen of tegels — geplaatst volgens regels van de kunst.", icon: "square" },
    { title: "Schilder- & gypwerk", description: "Pleisteren, schilderen, behangen — perfecte afwerking als sluitstuk.", icon: "paintbrush" },
    { title: "Elektriciteit & sanitair", description: "Volledige vernieuwing volgens AREI, gekeurd opgeleverd.", icon: "zap" },
  ],
  useCases: [
    { title: "Volledige woning", description: "Strip-out en heropbouw met behoud van structuur. Inclusief vergunningen waar nodig.", timing: "12-20 weken", budgetRange: "vanaf €60.000" },
    { title: "Badkamer", description: "Alles uit, alles vernieuwd — gemiddeld in 4 weken klaar.", timing: "3-5 weken", budgetRange: "vanaf €12.000" },
    { title: "Per verdieping", description: "Slim renoveren in fases, woning bewoonbaar gehouden.", timing: "Per fase 4-6 weken" },
  ],
  approach: [
    { step: 1, title: "Intake & ontwerp", description: "We bespreken doelen, bekijken de woning en stellen een uitvoeringsplan op." },
    { step: 2, title: "Vaste prijs & planning", description: "Eén document met alle posten, een vaste startdatum en duidelijke deadlines per fase." },
    { step: 3, title: "Uitvoering & oplevering", description: "Eén werfleider voor alle vakmensen. Wekelijkse opvolging en oplevering met checklist." },
  ],
  partnerIds: ["vca", "erkend"],
  faq: [
    { q: "Werken jullie met een vaste prijs?", a: "Ja. Na intake en plaatsbezoek krijgt u één gedetailleerde offerte met vaste prijzen per post. Meerwerk alleen mits uw goedkeuring." },
    { q: "Kan ik in mijn huis blijven wonen tijdens de renovatie?", a: "Vaak ja, in fases. We bespreken vooraf welke ruimtes wanneer ontoegankelijk zijn." },
    { q: "Doen jullie ook de vergunningsaanvraag?", a: "Voor stedenbouwkundige aanvragen werken we samen met een vaste architect. We coördineren het volledige traject." },
    { q: "Hoe gaan jullie om met onverwachte problemen?", a: "Voor elke werf voorzien we een buffer van 10% in tijd en budget. Onvoorziene zaken communiceren we onmiddellijk met optie tot beslissing." },
  ],
  form: {
    fields: [
      { name: "typeProject", label: "Type renovatie", type: "radio", required: true, options: [
        { value: "totaal", label: "Volledige woning" },
        { value: "deel", label: "Deel van de woning" },
        { value: "badkamer", label: "Badkamer" },
        { value: "keuken", label: "Keuken" },
      ]},
      { name: "oppervlakte", label: "Bewoonbare oppervlakte (m²)", type: "number", placeholder: "bv. 140" },
      { name: "afwerking", label: "Afwerkingsniveau", type: "select", options: [
        { value: "standaard", label: "Standaard — netjes en duurzaam" },
        { value: "premium", label: "Premium — designkeuzes" },
        { value: "luxe", label: "Luxe — geen compromissen" },
      ]},
      { name: "timing", label: "Gewenste startdatum", type: "select", options: [
        { value: "3m", label: "Binnen 3 maanden" },
        { value: "6m", label: "Binnen 6 maanden" },
        { value: "12m", label: "Binnen 12 maanden" },
        { value: "flex", label: "Flexibel" },
      ]},
      { name: "naam", label: "Naam", type: "text", required: true },
      { name: "email", label: "E-mail", type: "email", required: true },
      { name: "telefoon", label: "Telefoon", type: "tel", required: true },
      { name: "postcode", label: "Postcode", type: "text", required: true, placeholder: "9000" },
      { name: "opmerkingen", label: "Beschrijf uw project", type: "textarea", placeholder: "Wat wilt u aanpakken, wat is de aanleiding?" },
    ],
    submitLabel: "Vraag renovatieofferte aan",
  },
  meta: {
    title: "Renovatie — totaalrenovatie, badkamer, keuken & meer",
    description: "AGNAU Renovatie: totaalrenovaties van A tot Z met één planning, één projectleider en één vaste prijs.",
    conversionEvent: "Lead_Renovatie",
  },
};
