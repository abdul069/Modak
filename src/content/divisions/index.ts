import type { Division, DivisionSlug } from "./types";
import { dakwerken } from "./dakwerken";
import { ramenEnDeuren } from "./ramen-en-deuren";
import { renovatie } from "./renovatie";
import { hvac } from "./hvac";
import { zonneEnergie } from "./zonne-energie";
import { laadpalen } from "./laadpalen";

export const divisions: Record<DivisionSlug, Division> = {
  dakwerken,
  "ramen-en-deuren": ramenEnDeuren,
  renovatie,
  hvac,
  "zonne-energie": zonneEnergie,
  laadpalen,
};

export const divisionList: Division[] = [
  dakwerken,
  ramenEnDeuren,
  renovatie,
  hvac,
  zonneEnergie,
  laadpalen,
];

export * from "./types";
