/**
 * Local project photos in /public/images/projects/.
 *
 * Notes on the WhatsApp pool (51 photos, WA0069..WA0121 with gaps 71-72):
 *   only a handful have been visually verified. Mapping below uses the
 *   verified photos in their proper division and distributes the
 *   unverified ones across location tiles where mild thematic mismatch
 *   is acceptable (renovatie + dakwerken host generic interior/exterior
 *   shots). The EV/laadpalen division only has one verified relevant
 *   stock photo (pexels-haberdoedas), so EV slots reuse that photo
 *   rather than showing radiators or unrelated content.
 *
 * Verified content snapshot (so future edits can keep things straight):
 *   roof.jpg                     dakwerken (worker on roof tiles)
 *   Roof-insulation-main-blog... dakwerken (isolation samples)
 *   badkamer-merelbeke-hero      renovatie (modern bathroom)
 *   totaalrenovatie-sdw-hero     renovatie (house exterior + new roof)
 *   warmtepomp-gent-hero         hvac (heat pump install in boiler room)
 *   pexels-alpha-innotec         hvac (heat pump unit + boiler)
 *   pexels-haberdoedas           laadpalen (EV wallbox charging)
 *   pexels-jonathan-cordova      renovatie (edison hanging bulbs)
 *   pexels-kleurhuys             renovatie (interior with marble)
 *   pexels-sdvmovies-29206488    zonne-energie (worker installing PV)
 *   pexels-sdvmovies-29206495    zonne-energie (PV close-up)
 *   pexels-sdvmovies-29206500    zonne-energie (PV on tile roof)
 *   WA0069  renovatie (suspended toilet)
 *   WA0075  hvac (ventilation ducts, DUCO unit)
 *   WA0090  zonne-energie (PV panels on flat roof)
 *   WA0095  renovatie (bathroom mirror + towel radiator)
 *   WA0100  dakwerken/renovatie (empty attic with skylight)
 *   WA0105  zonne-energie (PV panels on tile roof)
 *   WA0110  renovatie (empty room with window)
 *   WA0120  dakwerken (wooden terrace exterior)
 *
 * To re-map a photo: edit the entry below. Unverified WA photos are
 * spread thematically — replace per your knowledge of what each shows.
 */

const BASE = "/images/projects";
const wa = (n: number) => `${BASE}/IMG-20260512-WA${String(n).padStart(4, "0")}.jpg`;

// ============ Division hero photos ============
export const divisionPhotos = {
  dakwerken: {
    hero:   `${BASE}/roof.jpg`,
    accent: `${BASE}/Roof-insulation-main-blog-image.jpg`,
  },
  "ramen-en-deuren": {
    hero:   wa(110),  // empty room with window — modern frame visible
    accent: wa(100),  // attic with skylights
  },
  renovatie: {
    hero:   `${BASE}/badkamer-merelbeke-hero.jpg`,
    accent: `${BASE}/pexels-jonathan-cordova-r-2637981-36551684.jpg`, // edison bulbs
  },
  hvac: {
    hero:   `${BASE}/warmtepomp-gent-hero.jpg`,
    accent: `${BASE}/pexels-alpha-innotec-936418931-20046693.jpg`,
  },
  "zonne-energie": {
    hero:   `${BASE}/pexels-sdvmovies-29206500.jpg`,
    accent: `${BASE}/pexels-sdvmovies-29206495.jpg`,
  },
  laadpalen: {
    hero:   `${BASE}/pexels-haberdoedas-32472662.jpg`,
    accent: `${BASE}/pexels-haberdoedas-32472662.jpg`, // only verified EV photo — reused
  },
} as const;

// ============ Company photos ============
export const companyPhotos = {
  showroomBig:  `${BASE}/pexels-kleurhuys-73327268-8480421.jpg`, // marble interior
  showroomWide: `${BASE}/badkamer-merelbeke-hero.jpg`,
  magazijn:     `${BASE}/totaalrenovatie-sint-denijs-westrem-hero.jpg`,
  team1:        wa(120), // wooden terrace exterior
  team2:        wa(110), // empty room — generic
  team3:        wa(100), // attic
  vestiging:    `${BASE}/totaalrenovatie-sint-denijs-westrem-hero.jpg`,
  buildingHero: `${BASE}/totaalrenovatie-sint-denijs-westrem-hero.jpg`,
} as const;

// ============ Project photos by realisatie slug ============
export const projectPhotos: Record<string, string> = {
  // Dakwerken
  "dakrenovatie-evergem": `${BASE}/roof.jpg`,
  "epdm-mariakerke":      `${BASE}/Roof-insulation-main-blog-image.jpg`,
  // Ramen & deuren
  "ramen-aalter":         wa(110),
  "raamvervanging-gent":  wa(100),
  // Renovatie
  "totaalrenovatie-sint-denijs-westrem": `${BASE}/totaalrenovatie-sint-denijs-westrem-hero.jpg`,
  "badkamer-merelbeke":   `${BASE}/badkamer-merelbeke-hero.jpg`,
  // HVAC
  "warmtepomp-gent":      `${BASE}/warmtepomp-gent-hero.jpg`,
  "airco-eeklo":          `${BASE}/pexels-alpha-innotec-936418931-20046693.jpg`,
  // Solar
  "pv-installatie-aalter": `${BASE}/pexels-sdvmovies-29206488.jpg`,
  "kmo-pv-park-eeklo":     `${BASE}/pexels-sdvmovies-29206500.jpg`,
  // Laadpalen — only one verified EV photo, reuse
  "laadpaal-drongen":      `${BASE}/pexels-haberdoedas-32472662.jpg`,
  "residentie-ledeberg":   `${BASE}/pexels-haberdoedas-32472662.jpg`,
};

// ============ Location tiles for division-page realisaties strip ============
export const locationPhotos: Record<string, string> = {
  // Dakwerken — use verified roof + exterior shots + unverified WA pool
  "dak-Gent":         `${BASE}/roof.jpg`,
  "dak-Evergem":      `${BASE}/totaalrenovatie-sint-denijs-westrem-hero.jpg`,
  "dak-Aalter":       `${BASE}/Roof-insulation-main-blog-image.jpg`,
  "dak-Eeklo":        wa(120), // wooden terrace
  "dak-Drongen":      wa(100), // attic
  "dak-Sint-Niklaas": `${BASE}/roof.jpg`,

  // Ramen & deuren — interior/exterior shots
  "rd-Drongen":            wa(110),
  "rd-Mariakerke":         wa(100),
  "rd-Aalter":             `${BASE}/badkamer-merelbeke-hero.jpg`,
  "rd-Lochristi":          wa(120),
  "rd-Gent":               `${BASE}/totaalrenovatie-sint-denijs-westrem-hero.jpg`,
  "rd-Wetteren":           wa(110),

  // Renovatie — verified bathroom/interior set
  "reno-Sint-Denijs-Westrem": `${BASE}/totaalrenovatie-sint-denijs-westrem-hero.jpg`,
  "reno-Merelbeke":           `${BASE}/badkamer-merelbeke-hero.jpg`,
  "reno-Ledeberg":            wa(69),   // toilet
  "reno-Mariakerke":          wa(95),   // bathroom
  "reno-Gent":                wa(110),  // empty room
  "reno-Drongen":             `${BASE}/pexels-jonathan-cordova-r-2637981-36551684.jpg`,

  // HVAC — verified ventilation/heat pump + accent
  "hvac-Merelbeke":  `${BASE}/warmtepomp-gent-hero.jpg`,
  "hvac-Eeklo":      `${BASE}/pexels-alpha-innotec-936418931-20046693.jpg`,
  "hvac-Aalter":     wa(75),   // ventilation ducts
  "hvac-Mariakerke": wa(95),   // bathroom radiator
  "hvac-Gent":       `${BASE}/warmtepomp-gent-hero.jpg`,
  "hvac-Lochristi":  `${BASE}/pexels-alpha-innotec-936418931-20046693.jpg`,

  // Solar — verified PV set
  "solar-Aalter":     `${BASE}/pexels-sdvmovies-29206488.jpg`,
  "solar-Eeklo":      `${BASE}/pexels-sdvmovies-29206495.jpg`,
  "solar-Evergem":    `${BASE}/pexels-sdvmovies-29206500.jpg`,
  "solar-Sleidinge":  wa(90),   // PV on flat roof
  "solar-Mariakerke": wa(105),  // PV on tile roof
  "solar-Drongen":    `${BASE}/pexels-sdvmovies-29206488.jpg`,

  // Laadpalen — only haberdoedas is verified EV; reuse rather than show
  // unrelated radiators/interiors. User can swap in better EV photos later.
  "ev-Gent":               `${BASE}/pexels-haberdoedas-32472662.jpg`,
  "ev-Drongen":            `${BASE}/pexels-haberdoedas-32472662.jpg`,
  "ev-Mariakerke":         `${BASE}/pexels-haberdoedas-32472662.jpg`,
  "ev-Sint-Martens-Latem": `${BASE}/pexels-haberdoedas-32472662.jpg`,
  "ev-Lochristi":          `${BASE}/pexels-haberdoedas-32472662.jpg`,
  "ev-Aalter":             `${BASE}/pexels-haberdoedas-32472662.jpg`,
};
