export const DIVISION_SLUGS = [
  "dakwerken",
  "ramen-en-deuren",
  "renovatie",
  "hvac",
  "zonne-energie",
  "laadpalen",
] as const;

export type DivisionSlug = (typeof DIVISION_SLUGS)[number];

export const DIVISION_THEME_KEYS = ["dak", "rd", "reno", "hvac", "solar", "ev"] as const;
export type DivisionThemeKey = (typeof DIVISION_THEME_KEYS)[number];

export interface DivisionColor {
  base: string;
  soft: string;
  deep: string;
}

export interface DivisionHero {
  eyebrow: string;
  headline: string;
  subtitle: string;
  image: string;
  proofPoints: string[];
}

export interface DivisionService {
  title: string;
  description: string;
  icon: string;
}

export interface DivisionUseCase {
  title: string;
  description: string;
  timing: string;
  budgetRange?: string;
}

export interface DivisionStep {
  step: number;
  title: string;
  description: string;
}

export interface DivisionFAQ {
  q: string;
  a: string;
}

export type FormFieldDef =
  | {
      name: string;
      label: string;
      type: "text" | "email" | "tel" | "textarea" | "number";
      required?: boolean;
      placeholder?: string;
    }
  | {
      name: string;
      label: string;
      type: "select" | "radio";
      required?: boolean;
      options: Array<{ value: string; label: string }>;
    };

export interface Division {
  slug: DivisionSlug;
  themeKey: DivisionThemeKey;
  name: string;
  shortName: string;
  tagline: string;
  iconKey: string;
  color: DivisionColor;
  hero: DivisionHero;
  services: DivisionService[];
  useCases: DivisionUseCase[];
  approach: DivisionStep[];
  partnerIds: string[];
  faq: DivisionFAQ[];
  form: {
    fields: FormFieldDef[];
    submitLabel: string;
  };
  meta: {
    title: string;
    description: string;
    conversionEvent: string;
  };
}
