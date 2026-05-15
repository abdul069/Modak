import type { DivisionSlug } from "./divisions";

export type BlogPost = {
  slug: string;
  title: string;
  category: DivisionSlug | "premies" | "tips";
  date: string;
  readingTime: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "premies-renovatie-vlaanderen-2026",
    title: "Welke premies krijgt u in 2026 voor energierenovatie?",
    category: "premies",
    date: "2026-05-02",
    readingTime: "6 min",
    excerpt: "Een overzicht van Mijn VerbouwPremie, Fluvius-premies en federale aftrek in 2026 — wat is gewijzigd, wat blijft?",
    body: [
      "De Vlaamse Mijn VerbouwPremie is in 2026 verlengd, maar met aangescherpte voorwaarden. Voor warmtepompen kunt u tot €3.000 ontvangen, met een toeslag tot €1.000 voor wie aardgas of mazout uitfaseert.",
      "Fluvius-premies blijven gelden voor zonnepanelen, batterijopslag en bepaalde laadpalen. Voor nieuwe PV-installaties zonder terugdraaiende teller blijven de digitale meter-premies actueel.",
      "Op federaal niveau loopt de verminderde btw (6%) op renovatiewerken aan woningen ouder dan 10 jaar door. Vergeet niet de fiscale aftrek voor laadpalen aan te vragen — dit verloopt eind 2026.",
      "Een goede combinatie: warmtepomp + dakisolatie + zonneboiler in één traject. Daarvoor kunt u in 2026 tot €6.000 totaalpremie realiseren. We rekenen het voor uw situatie graag voor u uit.",
    ],
  },
  {
    slug: "wanneer-is-een-warmtepomp-zinvol",
    title: "Wanneer is een warmtepomp echt zinvol?",
    category: "hvac",
    date: "2026-04-18",
    readingTime: "8 min",
    excerpt: "Niet elke woning is geschikt voor een warmtepomp. Een eerlijke check op isolatie, afgiftesysteem en gedrag.",
    body: [
      "Een warmtepomp werkt het best bij lage afgiftetemperatuur. Vloerverwarming is ideaal. Klassieke radiatoren kunnen werken, mits ze ruim gedimensioneerd zijn voor uw kamer.",
      "Isolatie is cruciaal. Een matig geïsoleerde woning kan beter eerst zoldervloer, dak en hoogrendementsglas aanpakken vooraleer over te schakelen.",
      "Hybride systemen (warmtepomp + condensatieketel) zijn een verstandige tussenstap voor woningen die geleidelijk renoveren. Tot 80% van het jaarverbruik komt dan al van de warmtepomp.",
      "Onze RESCert-installateurs maken steeds een warmteverliesberekening voor we offreren. Geen warmtepomp plaatsen die niet past — eerlijk advies, ook als dat betekent dat we afraden.",
    ],
  },
  {
    slug: "totaalrenovatie-vs-losse-aannemers",
    title: "Totaalrenovatie vs losse aannemers: wat kost u meer?",
    category: "renovatie",
    date: "2026-04-04",
    readingTime: "5 min",
    excerpt: "Coördinatie tussen 6 aannemers blijkt vaak duurder dan één gespecialiseerde partner. We rekenen het voor.",
    body: [
      "Een renovatie met losse aannemers lijkt vaak goedkoper op papier. In de praktijk merkt u dat coördinatie, wachttijden en herstelwerk de eindprijs hoger maken.",
      "Bij een totaalrenovatie via één partner wordt alles op één planning gezet. Vloerverwarming gaat in vóór de vloer, leidingen lopen langs de juiste plekken, en geen ploeg moet wachten op een andere.",
      "Een rekenvoorbeeld: een typische renovatie van 140 m² die we deden was €98.000 totaal. Dezelfde woning met losse aannemers werd door de klant geschat op €115-125.000 — exclusief de eigen tijd in coördinatie.",
      "Belangrijker dan de prijs: één aanspreekpunt voor garantie. Bij problemen na oplevering staat één partij in voor alle aspecten van het werk.",
    ],
  },
  {
    slug: "epdm-of-rooflite",
    title: "EPDM of Rooflite: welk plat dak past bij u?",
    category: "dakwerken",
    date: "2026-03-21",
    readingTime: "4 min",
    excerpt: "Twee toptechnieken vergeleken: levensduur, isolatie-mogelijkheden en kostprijs.",
    body: [
      "EPDM (rubber) en Rooflite (PVC-bekleding) zijn beide topkeuzes voor platte daken. EPDM gaat tot 50 jaar mee maar is kwetsbaarder voor mechanische schade.",
      "Rooflite is iets duurder maar combineert beter met groendaken en mechanische bevestiging. Ideaal voor grotere oppervlaktes.",
      "Voor woningbouw werken we vaak met EPDM voor terrassen en uitbouwen tot 100 m². Rooflite reserveren we voor grotere bedrijfsdaken.",
    ],
  },
  {
    slug: "zonnepanelen-zonder-batterij",
    title: "Zonnepanelen zonder batterij — nog rendabel?",
    category: "zonne-energie",
    date: "2026-03-08",
    readingTime: "5 min",
    excerpt: "Zonder terugdraaiende teller hangt de rendabiliteit volledig af van zelfconsumptie. Hier komen warmtepompen en EV in het spel.",
    body: [
      "Sinds 2021 werkt de terugdraaiende teller niet meer. Wat u op het net injecteert wordt nog wel vergoed, maar tegen een veel lager tarief dan u betaalt voor stroom uit het net.",
      "Daarom is zelfconsumptie de sleutel. Met een warmtepomp en EV-lader op overschot-laden bereikt u 60-80% zelfconsumptie zonder batterij.",
      "Een batterij verhoogt dit tot 85-95% — vooral interessant als u veel 's avonds verbruikt en weinig overdag thuis bent.",
      "Wij dimensioneren op basis van uw concrete jaarverbruik en toekomstplannen (verwarming, EV). Geen oversized installatie die niet betaalt.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
