/**
 * Local project photos in /public/images/projects/.
 *
 * Naming groups:
 *  - Explicit hero photos (badkamer/warmtepomp/totaalrenovatie/roof)
 *  - Pexels stock that matches a clear theme (alpha-innotec = HVAC, etc.)
 *  - 51 WhatsApp photos numbered WA0069..WA0121 distributed across
 *    division project tiles and location tiles.
 *
 * To re-map a photo: change the path below.
 */

const BASE = "/images/projects";

// Convenience builder for the WhatsApp set
const wa = (n: number) => `${BASE}/IMG-20260512-WA${String(n).padStart(4, "0")}.jpg`;

// ============ Division hero photos ============
export const divisionPhotos = {
  dakwerken: {
    hero: `${BASE}/roof.jpg`,
    accent: `${BASE}/Roof-insulation-main-blog-image.jpg`,
  },
  "ramen-en-deuren": {
    // raamvervanging-stijl scene — use one of the WhatsApp photos
    hero: wa(73),
    accent: wa(74),
  },
  renovatie: {
    hero: `${BASE}/badkamer-merelbeke-hero.jpg`,
    accent: `${BASE}/pexels-kleurhuys-73327268-8480421.jpg`,
  },
  hvac: {
    hero: `${BASE}/warmtepomp-gent-hero.jpg`,
    accent: `${BASE}/pexels-alpha-innotec-936418931-20046693.jpg`,
  },
  "zonne-energie": {
    hero: `${BASE}/pexels-sdvmovies-29206500.jpg`,
    accent: `${BASE}/pexels-sdvmovies-29206495.jpg`,
  },
  laadpalen: {
    hero: `${BASE}/pexels-haberdoedas-32472662.jpg`,
    accent: `${BASE}/pexels-jonathan-cordova-r-2637981-36551684.jpg`,
  },
} as const;

// ============ Company photos ============
export const companyPhotos = {
  showroomBig:  `${BASE}/pexels-kleurhuys-73327268-8480421.jpg`,
  showroomWide: `${BASE}/badkamer-merelbeke-hero.jpg`,
  magazijn:     wa(69),
  team1:        wa(70),
  team2:        wa(75),
  team3:        wa(80),
  vestiging:    `${BASE}/totaalrenovatie-sint-denijs-westrem-hero.jpg`,
  buildingHero: `${BASE}/totaalrenovatie-sint-denijs-westrem-hero.jpg`,
} as const;

// ============ Project photos by realisatie slug ============
export const projectPhotos: Record<string, string> = {
  // Dakwerken
  "dakrenovatie-evergem": `${BASE}/roof.jpg`,
  "epdm-mariakerke":      `${BASE}/Roof-insulation-main-blog-image.jpg`,
  // Ramen & deuren
  "ramen-aalter":         wa(73),
  "raamvervanging-gent":  wa(74),
  // Renovatie
  "totaalrenovatie-sint-denijs-westrem": `${BASE}/totaalrenovatie-sint-denijs-westrem-hero.jpg`,
  "badkamer-merelbeke":   `${BASE}/badkamer-merelbeke-hero.jpg`,
  // HVAC
  "warmtepomp-gent":      `${BASE}/warmtepomp-gent-hero.jpg`,
  "airco-eeklo":          `${BASE}/pexels-alpha-innotec-936418931-20046693.jpg`,
  // Solar
  "pv-installatie-aalter":`${BASE}/pexels-sdvmovies-29206488.jpg`,
  "kmo-pv-park-eeklo":    `${BASE}/pexels-sdvmovies-29206500.jpg`,
  // Laadpalen
  "laadpaal-drongen":     `${BASE}/pexels-haberdoedas-32472662.jpg`,
  "residentie-ledeberg":  `${BASE}/pexels-jonathan-cordova-r-2637981-36551684.jpg`,
};

// ============ Location tiles for division-page realisaties strip ============
// 6 per division using WhatsApp pool (WA0069..WA0121, 51 unique photos)
export const locationPhotos: Record<string, string> = {
  // Dakwerken (6 locations × WhatsApp pool)
  "dak-Gent":         wa(76),
  "dak-Evergem":      wa(77),
  "dak-Aalter":       wa(78),
  "dak-Eeklo":        wa(79),
  "dak-Drongen":      wa(81),
  "dak-Sint-Niklaas": wa(82),

  // Ramen & deuren
  "rd-Drongen":            wa(83),
  "rd-Mariakerke":         wa(84),
  "rd-Aalter":             wa(85),
  "rd-Lochristi":          wa(86),
  "rd-Gent":               wa(87),
  "rd-Wetteren":           wa(88),

  // Renovatie
  "reno-Sint-Denijs-Westrem": wa(89),
  "reno-Merelbeke":           wa(90),
  "reno-Ledeberg":            wa(91),
  "reno-Mariakerke":          wa(92),
  "reno-Gent":                wa(93),
  "reno-Drongen":             wa(94),

  // HVAC
  "hvac-Merelbeke":  wa(95),
  "hvac-Eeklo":      wa(96),
  "hvac-Aalter":     wa(97),
  "hvac-Mariakerke": wa(98),
  "hvac-Gent":       wa(99),
  "hvac-Lochristi":  wa(100),

  // Solar
  "solar-Aalter":     wa(101),
  "solar-Eeklo":      wa(102),
  "solar-Evergem":    wa(103),
  "solar-Sleidinge":  wa(104),
  "solar-Mariakerke": wa(105),
  "solar-Drongen":    wa(106),

  // Laadpalen / EV
  "ev-Gent":               wa(107),
  "ev-Drongen":            wa(108),
  "ev-Mariakerke":         wa(109),
  "ev-Sint-Martens-Latem": wa(110),
  "ev-Lochristi":          wa(111),
  "ev-Aalter":             wa(112),
};
