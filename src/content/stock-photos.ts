/**
 * Stock photos sourced from Unsplash. Each ID is a real photo on
 * images.unsplash.com — they load fine in production (Vercel) but may
 * 403 from this sandboxed environment when testing locally.
 *
 * To swap a photo: replace the ID with another Unsplash photo ID.
 * Format: `photo-{id}` from any unsplash.com/photos/... URL.
 *
 * Format helper: `unsplash("ID", w?, h?)` returns a sized URL ready for
 * <Image> or PhotoTile `src` prop.
 */

export function unsplash(id: string, w = 1200, h?: number): string {
  const params = new URLSearchParams({
    w: String(w),
    q: "80",
    auto: "format",
    fit: "crop",
  });
  if (h) params.set("h", String(h));
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

// ============ Division hero photos ============
export const divisionPhotos = {
  dakwerken: {
    hero: unsplash("1632935190508-5d77fe6c64bf", 1400, 1800),
    accent: unsplash("1503328427499-d92d1ac3d174", 1200),
  },
  "ramen-en-deuren": {
    hero: unsplash("1503387837-b154d5074bd2", 1400, 1800),
    accent: unsplash("1600585154340-be6161a56a0c", 1200),
  },
  renovatie: {
    hero: unsplash("1556909114-44e3e9399a2e", 1400, 1800),
    accent: unsplash("1556909195-7d65a5a3a1d4", 1200),
  },
  hvac: {
    hero: unsplash("1631545809085-c8c83f4d75b3", 1400, 1800),
    accent: unsplash("1581094271901-8022df4466f9", 1200),
  },
  "zonne-energie": {
    hero: unsplash("1509391366360-2e959784a276", 1400, 1800),
    accent: unsplash("1466611653911-95081537e5b7", 1200),
  },
  laadpalen: {
    hero: unsplash("1593941707882-a5bba14938c7", 1400, 1800),
    accent: unsplash("1620712944394-be4d4a8d6e0f", 1200),
  },
} as const;

// ============ Company photos ============
export const companyPhotos = {
  showroomBig:  unsplash("1497366754035-5f07c9c0b3b6", 1400, 1800), // showroom interior
  showroomWide: unsplash("1497366216548-37526070297c", 1400, 900),  // open space
  magazijn:     unsplash("1556157382-97eda2d62296", 800, 800),       // warehouse
  team1:        unsplash("1521791136064-7986c2920216", 1400, 900),   // team
  team2:        unsplash("1556909114-f6e7ad7d3136", 1400, 900),       // worker
  team3:        unsplash("1581094288338-2314dddb7ece", 1400, 900),   // construction team
  vestiging:    unsplash("1564540583246-934409427776", 1200, 1200), // building exterior
  buildingHero: unsplash("1416331108676-a22ccb276e35", 1400, 900),
} as const;

// ============ Project photos (by slug, fallback to category) ============
export const projectPhotos: Record<string, string> = {
  // Dakwerken
  "dakrenovatie-evergem": unsplash("1632935190508-5d77fe6c64bf", 1200),
  "epdm-mariakerke":      unsplash("1503328427499-d92d1ac3d174", 1200),
  // Ramen & deuren
  "ramen-aalter":         unsplash("1503387837-b154d5074bd2", 1200),
  "raamvervanging-gent":  unsplash("1600585154340-be6161a56a0c", 1200),
  // Renovatie
  "totaalrenovatie-sint-denijs-westrem": unsplash("1572120360610-d971b9d7767c", 1200),
  "badkamer-merelbeke":   unsplash("1620626011761-996317b8d101", 1200),
  // HVAC
  "warmtepomp-gent":      unsplash("1631545809085-c8c83f4d75b3", 1200),
  "airco-eeklo":          unsplash("1581094271901-8022df4466f9", 1200),
  // Solar
  "pv-installatie-aalter":unsplash("1509391366360-2e959784a276", 1200),
  "kmo-pv-park-eeklo":    unsplash("1466611653911-95081537e5b7", 1200),
  // Laadpalen
  "laadpaal-drongen":     unsplash("1593941707882-a5bba14938c7", 1200),
  "residentie-ledeberg":  unsplash("1620712944394-be4d4a8d6e0f", 1200),
};

// ============ Project location tiles for division pages ============
// 6 per division, mapped by location slug for visual variety
export const locationPhotos: Record<string, string> = {
  // Roof/dakwerken context photos
  "dak-Gent":         unsplash("1632935190508-5d77fe6c64bf", 800),
  "dak-Evergem":      unsplash("1503328427499-d92d1ac3d174", 800),
  "dak-Aalter":       unsplash("1564540583246-934409427776", 800),
  "dak-Eeklo":        unsplash("1605276374104-dee2a0ed3cd6", 800),
  "dak-Drongen":      unsplash("1416331108676-a22ccb276e35", 800),
  "dak-Sint-Niklaas": unsplash("1486406146926-c627a92ad1ab", 800),
  // Windows
  "rd-Drongen":            unsplash("1503387837-b154d5074bd2", 800),
  "rd-Mariakerke":         unsplash("1600585154340-be6161a56a0c", 800),
  "rd-Aalter":             unsplash("1572120360610-d971b9d7767c", 800),
  "rd-Lochristi":          unsplash("1556909114-f6e7ad7d3136", 800),
  "rd-Gent":               unsplash("1564540583246-934409427776", 800),
  "rd-Wetteren":           unsplash("1416331108676-a22ccb276e35", 800),
  // Renovation
  "reno-Sint-Denijs-Westrem": unsplash("1572120360610-d971b9d7767c", 800),
  "reno-Merelbeke":           unsplash("1620626011761-996317b8d101", 800),
  "reno-Ledeberg":            unsplash("1556909114-44e3e9399a2e", 800),
  "reno-Mariakerke":          unsplash("1556909195-7d65a5a3a1d4", 800),
  "reno-Gent":                unsplash("1600585154340-be6161a56a0c", 800),
  "reno-Drongen":             unsplash("1497366216548-37526070297c", 800),
  // HVAC
  "hvac-Merelbeke":  unsplash("1631545809085-c8c83f4d75b3", 800),
  "hvac-Eeklo":      unsplash("1581094271901-8022df4466f9", 800),
  "hvac-Aalter":     unsplash("1572025442646-866d16c84a54", 800),
  "hvac-Mariakerke": unsplash("1556909114-f6e7ad7d3136", 800),
  "hvac-Gent":       unsplash("1564540583246-934409427776", 800),
  "hvac-Lochristi":  unsplash("1605276374104-dee2a0ed3cd6", 800),
  // Solar
  "solar-Aalter":     unsplash("1509391366360-2e959784a276", 800),
  "solar-Eeklo":      unsplash("1466611653911-95081537e5b7", 800),
  "solar-Evergem":    unsplash("1545209463-e2825498edbf", 800),
  "solar-Sleidinge":  unsplash("1611365892117-bb6c3a8c2876", 800),
  "solar-Mariakerke": unsplash("1591980839003-12f6dd7a3e9c", 800),
  "solar-Drongen":    unsplash("1509391366360-2e959784a276", 800),
  // EV
  "ev-Gent":               unsplash("1593941707882-a5bba14938c7", 800),
  "ev-Drongen":            unsplash("1620712944394-be4d4a8d6e0f", 800),
  "ev-Mariakerke":         unsplash("1607853374431-83b4adcb6e75", 800),
  "ev-Sint-Martens-Latem": unsplash("1593941707874-ef25b8b4a92b", 800),
  "ev-Lochristi":          unsplash("1620712944394-be4d4a8d6e0f", 800),
  "ev-Aalter":             unsplash("1593941707882-a5bba14938c7", 800),
};
