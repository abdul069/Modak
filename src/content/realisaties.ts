import type { DivisionSlug } from "./divisions";

export type Project = {
  slug: string;
  title: string;
  divisions: DivisionSlug[];
  location: string;
  year: string;
  excerpt: string;
  description: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    slug: "dakrenovatie-evergem",
    title: "Volledige dakrenovatie met sarking",
    divisions: ["dakwerken"],
    location: "Evergem",
    year: "2026",
    excerpt: "Rietgedekt rijwoning van 1932 voorzien van nieuwe pannen, sarking-isolatie en zinken goten.",
    description: "Een woning uit 1932 met origineel pannendak. We hebben het volledige dakvlak gestript, een sarking-isolatie van 18 cm geplaatst, en nieuwe gebakken pannen aangebracht. Zinken goten en afvoeren in koper voor 50+ jaar levensduur.",
    gradient: "linear-gradient(135deg, #D9531E, #B23E0F)",
  },
  {
    slug: "epdm-mariakerke",
    title: "Plat dak met EPDM en groendak",
    divisions: ["dakwerken"],
    location: "Mariakerke",
    year: "2026",
    excerpt: "75 m² plat dak van een uitbouw — EPDM-bekleding plus extensieve groendaklaag.",
    description: "Voor een nieuwbouw-uitbouw plaatsten we een naadloze EPDM-bekleding van 1.5mm met daarboven een extensief groendak. Dubbele winst: betere isolatie en aangenamere zomertemperatuur.",
    gradient: "linear-gradient(135deg, #D9531E, #B23E0F)",
  },
  {
    slug: "ramen-aalter",
    title: "12 aluminium schuiframen",
    divisions: ["ramen-en-deuren"],
    location: "Aalter",
    year: "2026",
    excerpt: "Nieuwbouwwoning voorzien van Reynaers MasterPatio schuifsystemen.",
    description: "Een nieuwbouw met grote glasvlakken in aluminium. Reynaers MasterPatio op alle leefruimtes, plus inbraakwerende voordeur en garagepoort. Triple-glas met U-waarde 0.6.",
    gradient: "linear-gradient(135deg, #00A4D6, #007BA3)",
  },
  {
    slug: "raamvervanging-gent",
    title: "Volledige raamvervanging met PVC",
    divisions: ["ramen-en-deuren"],
    location: "Gent",
    year: "2026",
    excerpt: "Rijwoning met 14 ramen vervangen op één werkdag.",
    description: "Slechte enkele beglazing vervangen door PVC-ramen met triple-glas. Werk uitgevoerd op één werkdag, met 8 ramen gelijktijdig in plaatsing. Inclusief afwerking dorpels en plaaster.",
    gradient: "linear-gradient(135deg, #00A4D6, #007BA3)",
  },
  {
    slug: "totaalrenovatie-sint-denijs-westrem",
    title: "Totaalrenovatie villa jaren '60",
    divisions: ["renovatie", "hvac", "zonne-energie"],
    location: "Sint-Denijs-Westrem",
    year: "2026",
    excerpt: "Strip-out en heropbouw met warmtepomp en 14 panelen.",
    description: "Een villa uit 1968 volledig gestript en heropgebouwd. Nieuwe indeling, warmtepomp lucht-water met vloerverwarming, 14 zonnepanelen en thuisbatterij. Energielabel van F naar A.",
    gradient: "linear-gradient(135deg, #E8A93A, #B8821E)",
  },
  {
    slug: "badkamer-merelbeke",
    title: "Badkamerrenovatie met inloopdouche",
    divisions: ["renovatie"],
    location: "Merelbeke",
    year: "2026",
    excerpt: "12 m² badkamer compleet vernieuwd in 3 weken.",
    description: "Volledig gestript en vernieuwd: vloerverwarming, inloopdouche met regendouche, dubbele wastafel op maat en geïntegreerde verlichting. Opgeleverd in 21 werkdagen.",
    gradient: "linear-gradient(135deg, #E8A93A, #B8821E)",
  },
  {
    slug: "warmtepomp-gent",
    title: "Warmtepomp + ventilatie D",
    divisions: ["hvac"],
    location: "Gent",
    year: "2026",
    excerpt: "Daikin Altherma + vloerverwarming + Renson ventilatie D.",
    description: "Renovatiewoning omgezet van aardgas naar volledig elektrisch. Daikin Altherma 3 lucht-water met vloerverwarming op gelijkvloers en boven, Renson Healthbox D voor balansventilatie.",
    gradient: "linear-gradient(135deg, #2BAE66, #1E8049)",
  },
  {
    slug: "airco-eeklo",
    title: "Multi-split airco voor 4 ruimtes",
    divisions: ["hvac"],
    location: "Eeklo",
    year: "2026",
    excerpt: "Daikin multi-split met 4 binnenunits in nieuwbouw.",
    description: "Een nieuwbouw met centrale buitenunit en 4 wandmodellen voor slaapkamers en bureau. Koeling én verwarming, met Daikin-app voor centrale aansturing.",
    gradient: "linear-gradient(135deg, #2BAE66, #1E8049)",
  },
  {
    slug: "pv-installatie-aalter",
    title: "16 zonnepanelen + thuisbatterij",
    divisions: ["zonne-energie"],
    location: "Aalter",
    year: "2026",
    excerpt: "REC AlphaPure 410W met SolarEdge en 10 kWh batterij.",
    description: "16 zwartomrande REC AlphaPure-panelen op zuidwest-oriëntatie. SolarEdge hybride omvormer met 10 kWh LFP-batterij. Verwachte zelfconsumptie: 78%.",
    gradient: "linear-gradient(135deg, #F4C430, #C99B17)",
  },
  {
    slug: "kmo-pv-park-eeklo",
    title: "KMO-installatie 240 kWp",
    divisions: ["zonne-energie"],
    location: "Eeklo",
    year: "2026",
    excerpt: "Bedrijfsdak volledig benut met JA Solar bifaciale panelen.",
    description: "Loodsdak van 2.000 m² volledig benut: 480 bifaciale JA Solar-panelen, 3-fasige string-omvormers, monitoring per string. Groene-stroom-certificaten lopen 15 jaar.",
    gradient: "linear-gradient(135deg, #F4C430, #C99B17)",
  },
  {
    slug: "laadpaal-drongen",
    title: "Thuislaadpaal 22 kW driefasig",
    divisions: ["laadpalen", "zonne-energie"],
    location: "Drongen",
    year: "2026",
    excerpt: "Wallbox Pulsar Plus met dynamisch laden op zonneoverschot.",
    description: "Wallbox Pulsar Plus van 22 kW met aansturing op zonnepanelen via myWallbox-app. Laadt automatisch op overschot, of bijgemengd uit het net wanneer nodig.",
    gradient: "linear-gradient(135deg, #7B3FE4, #5A23B5)",
  },
  {
    slug: "residentie-ledeberg",
    title: "Laadpark 14 punten residentie",
    divisions: ["laadpalen"],
    location: "Ledeberg",
    year: "2026",
    excerpt: "Appartementsgebouw met centraal laadbeheer en facturatie.",
    description: "Voor een nieuw residentieel project plaatsten we 14 laadpunten met centrale aansturing. Load balancing over de bestaande hoofdaansluiting — geen netuitbreiding nodig. Per bewoner een eigen laadtag.",
    gradient: "linear-gradient(135deg, #7B3FE4, #5A23B5)",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
