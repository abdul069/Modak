import { divisions, divisionList } from "@/content/divisions";
import type { Division, DivisionSlug } from "@/content/divisions";

export function getDivision(slug: DivisionSlug): Division {
  return divisions[slug];
}

export function getAllDivisions(): Division[] {
  return divisionList;
}

export function divisionHref(slug: DivisionSlug): string {
  return `/${slug}`;
}

export function thankYouHref(slug: DivisionSlug): string {
  return `/bedankt/${slug}`;
}
