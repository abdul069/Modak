import type { DivisionSlug } from "./divisions";

export type Premie = {
  id: string;
  name: string;
  amount: string;
  category: DivisionSlug | "algemeen";
  source: "vlaams" | "federaal" | "fluvius";
  description: string;
  conditions: string[];
};

export const premies: Premie[] = [
  {
    id: "mvp-warmtepomp",
    name: "Mijn VerbouwPremie — warmtepomp",
    amount: "tot €3.000",
    category: "hvac",
    source: "vlaams",
    description:
      "Premie voor de plaatsing van een lucht-water, water-water of bodem-water warmtepomp bij bestaande woningen.",
    conditions: [
      "Woning ouder dan 15 jaar",
      "Geïnstalleerd door RESCert-installateur",
      "Aanvraag binnen 24 maanden na eindfactuur",
    ],
  },
  {
    id: "mvp-dakisolatie",
    name: "Mijn VerbouwPremie — dakisolatie",
    amount: "tot €1.500",
    category: "dakwerken",
    source: "vlaams",
    description:
      "Premie voor dak- of zoldervloerisolatie met R-waarde van minstens 4,5.",
    conditions: [
      "Woning ouder dan 15 jaar",
      "Minimum R-waarde 4,5 m²K/W",
      "Plaatsing door geregistreerd aannemer",
    ],
  },
  {
    id: "fluvius-batterij",
    name: "Fluvius — thuisbatterij",
    amount: "tot €1.725",
    category: "zonne-energie",
    source: "fluvius",
    description:
      "Premie voor opslag van zelf opgewekte elektriciteit, gekoppeld aan bestaande of nieuwe PV-installatie.",
    conditions: [
      "Minimaal 4 kWh nuttige capaciteit",
      "Gekoppeld aan een actieve digitale meter",
      "Aanvraag via Fluvius binnen 12 maanden",
    ],
  },
  {
    id: "fluvius-laadpaal",
    name: "Fluvius — slimme laadpaal",
    amount: "tot €500",
    category: "laadpalen",
    source: "fluvius",
    description:
      "Premie voor slimme thuislaadpalen die communiceren met de digitale meter.",
    conditions: [
      "Geplaatst door erkend elektrotechnicus",
      "Smart-charging functionaliteit",
      "Aanvraag via Fluvius binnen 6 maanden",
    ],
  },
  {
    id: "mvp-ramen",
    name: "Mijn VerbouwPremie — ramen",
    amount: "tot €60/m²",
    category: "ramen-en-deuren",
    source: "vlaams",
    description:
      "Premie voor de vervanging van enkele beglazing door hoogrendementsbeglazing (Ug ≤ 1,0 W/m²K).",
    conditions: [
      "Woning ouder dan 15 jaar",
      "Vervanging van enkel glas",
      "Combineren met andere maatregelen voor hogere premie",
    ],
  },
  {
    id: "btw-verlaagd",
    name: "Verlaagde btw 6%",
    amount: "6% i.p.v. 21%",
    category: "algemeen",
    source: "federaal",
    description:
      "Verlaagd btw-tarief op renovatiewerken aan woningen ouder dan 10 jaar.",
    conditions: [
      "Woning ouder dan 10 jaar",
      "Privégebruik door eigenaar of huurder",
      "Werk uitgevoerd door geregistreerd aannemer",
    ],
  },
  {
    id: "mvp-ventilatie",
    name: "Mijn VerbouwPremie — ventilatie D",
    amount: "tot €1.000",
    category: "hvac",
    source: "vlaams",
    description:
      "Premie voor balansventilatie met warmterecuperatie (systeem D).",
    conditions: [
      "Woning ouder dan 15 jaar",
      "Rendement minstens 80%",
      "Plaatsing door geregistreerd installateur",
    ],
  },
  {
    id: "mvp-zonneboiler",
    name: "Mijn VerbouwPremie — zonneboiler",
    amount: "tot €1.500",
    category: "hvac",
    source: "vlaams",
    description: "Premie voor thermische zonneboilers voor sanitair warm water.",
    conditions: [
      "Woning ouder dan 15 jaar",
      "Minimum collectoroppervlakte 2 m²",
      "RESCert-installatie",
    ],
  },
];
