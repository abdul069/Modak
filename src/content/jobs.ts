import type { DivisionSlug } from "./divisions";

export type JobFunction =
  | "werfleider"
  | "monteur"
  | "projectleider"
  | "administratie"
  | "sales";

export type Job = {
  slug: string;
  title: string;
  division: DivisionSlug | "groep";
  functionType: JobFunction;
  location: string;
  contract: string;
  excerpt: string;
  description: string;
  requirements: string[];
  offer: string[];
};

export const jobs: Job[] = [
  {
    slug: "werfleider-dakwerken",
    title: "Werfleider Dakwerken",
    division: "dakwerken",
    functionType: "werfleider",
    location: "Evergem",
    contract: "Voltijds · Onbepaalde duur",
    excerpt: "Lead onze dakploegen op werven in Oost-Vlaanderen. Vaste ploeg, vaste planning.",
    description: "Als werfleider Dakwerken stuur je dagelijks 2-3 dakploegen aan. Je bezoekt werven, controleert kwaliteit, plant materialen en bent het aanspreekpunt voor klanten en architecten.",
    requirements: [
      "5+ jaar ervaring in dakwerken (pannen, leien, EPDM)",
      "VCA*-attest of bereid dit te behalen",
      "Sterke organisatie- en communicatievaardigheden",
      "Rijbewijs B",
    ],
    offer: [
      "Vast loon met bedrijfswagen",
      "Maaltijdcheques en groepsverzekering",
      "Eigen ploegen, duidelijke verantwoordelijkheden",
      "Doorgroei mogelijk naar projectleider",
    ],
  },
  {
    slug: "monteur-hvac",
    title: "HVAC-monteur (warmtepompen)",
    division: "hvac",
    functionType: "monteur",
    location: "Evergem",
    contract: "Voltijds · Onbepaalde duur",
    excerpt: "Plaats warmtepompen, ventilatie en airco bij particulieren in Vlaanderen.",
    description: "Je werkt vanuit Evergem met een vaste collega op werven door heel Vlaanderen. RESCert-certificering is een plus, geen must.",
    requirements: [
      "Diploma elektromechanica, koeltechniek of vergelijkbaar",
      "2+ jaar ervaring in HVAC-installaties",
      "Rijbewijs B",
      "F-gas-attest is een plus",
    ],
    offer: [
      "Marktconform loon + premie",
      "Bedrijfswagen + tankkaart",
      "Opleidingen Daikin, Viessmann, Bosch",
      "Geen overnachtingen — altijd thuis 's avonds",
    ],
  },
  {
    slug: "monteur-ramen",
    title: "Plaatser ramen & deuren",
    division: "ramen-en-deuren",
    functionType: "monteur",
    location: "Evergem",
    contract: "Voltijds · Onbepaalde duur",
    excerpt: "Plaats aluminium en PVC ramen bij particulieren in Oost-Vlaanderen.",
    description: "Je werkt in duo op renovatie- en nieuwbouwwerven. Eigen werfwagen met materiaal en gereedschap.",
    requirements: [
      "Ervaring met plaatsing van ramen (PVC of aluminium)",
      "Oog voor afwerking",
      "Rijbewijs B",
    ],
    offer: [
      "Loon volgens ervaring + premie",
      "Bedrijfswagen + maaltijdcheques",
      "Vaste duo-partner",
      "Opleidingen Reynaers en Schüco",
    ],
  },
  {
    slug: "projectleider-renovatie",
    title: "Projectleider Renovatie",
    division: "renovatie",
    functionType: "projectleider",
    location: "Evergem",
    contract: "Voltijds · Onbepaalde duur",
    excerpt: "Coördineer totaalrenovaties van A tot Z — één aanspreekpunt voor klant en ploegen.",
    description: "Je bent het centrale aanspreekpunt voor 8-12 lopende renovaties. Je plant ploegen, coördineert onderaannemers, bewaakt budget en planning.",
    requirements: [
      "Bachelor of master bouwkunde / vastgoed",
      "3+ jaar ervaring als werfleider of projectleider",
      "Sterke communicatie en planning",
      "Rijbewijs B",
    ],
    offer: [
      "Aantrekkelijk salaris + bonusregeling",
      "Bedrijfswagen + tankkaart",
      "Inspraak in projectkeuzes",
      "Doorgroei naar partner mogelijk",
    ],
  },
  {
    slug: "monteur-zonnepanelen",
    title: "PV-monteur",
    division: "zonne-energie",
    functionType: "monteur",
    location: "Evergem",
    contract: "Voltijds · Onbepaalde duur",
    excerpt: "Installeer PV-installaties bij particulieren en KMO's.",
    description: "Je werkt in duo aan PV-installaties (particulier 6-16 panelen, KMO 50-200 panelen). Werkdagen zijn 7-15u30, geen overnachtingen.",
    requirements: [
      "Elektriciteits-diploma (BS5)",
      "Geen hoogtevrees",
      "VCA-attest is een plus",
      "Rijbewijs B",
    ],
    offer: [
      "Loon volgens ervaring + ploegenpremie",
      "Korte werkdag, vroeg thuis",
      "RESCert-opleiding inbegrepen",
      "Bedrijfswagen",
    ],
  },
  {
    slug: "administratief-medewerker",
    title: "Administratief medewerker",
    division: "groep",
    functionType: "administratie",
    location: "Evergem",
    contract: "Voltijds of 4/5 · Onbepaalde duur",
    excerpt: "Versterk ons binnenteam: offertes, facturatie, planning en klantcontact.",
    description: "Je bent het kalmerende centrum tussen projectleiders, klanten en werven. Offertes voorbereiden, facturatie nakijken, premie-dossiers opvolgen.",
    requirements: [
      "Bachelor of equivalent door ervaring",
      "Goede MS Office en CRM-vaardigheid",
      "Sterke schriftelijke communicatie (NL)",
      "Oog voor detail",
    ],
    offer: [
      "Geen weekendwerk, vrijdag tot 16u",
      "Maaltijdcheques + ecocheques",
      "4/5 bespreekbaar",
      "Mogelijkheid om thuis te werken (1 dag/week)",
    ],
  },
];

export function getJob(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}
