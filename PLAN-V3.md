# PLAN-V3 — AGNAU.be Multi-Divisie Portal

> Status: **wacht op akkoord** voor bouw start.
> Branch: `claude/multi-division-portal-JhqJs`
> Vervangt: alle bone/clay editorial v2-pagina's.

## 1. Strategische uitgangspunten

- Doel = **ad-traffic converteren naar offertes** per divisie, plus directe traffic via portal-homepage.
- Tone = **commerciële Vlaamse groep**, geen architectuurmagazine. Helder, proactief, geloofwaardig.
- 80%+ bezoekers = **mobiel** vanuit Meta-ads. Mobile-first verplicht.
- Lighthouse 95+ doel, alle images lazy-loaded en geoptimaliseerd.

## 2. Route-structuur

```
/                             → portal-homepage (divisie-kiezer hero)
/dakwerken                    → divisie-mini-site (accent: --dak terracotta)
/ramen-en-deuren              → divisie-mini-site (accent: --rd cyaan)
/renovatie                    → divisie-mini-site (accent: --reno goud)
/hvac                         → divisie-mini-site (accent: --hvac groen)
/zonne-energie                → divisie-mini-site (accent: --solar geel)
/laadpalen                    → divisie-mini-site (accent: --ev paars)

/realisaties                  → globale lijst + filter per divisie
/realisaties/[slug]           → project-detail

/over-ons                     → bedrijfsverhaal, showroom, magazijn, team
/jobs                         → vacatures + filter per divisie/functie
/jobs/[slug]                  → vacature-detail + sollicitatieform
/premies                      → overzicht premies + filter per werktype
/blog                         → artikellijst + filter per categorie
/blog/[slug]                  → artikel-detail
/contact                      → adres, map, formulier, openingstijden
/offerte                      → globale form met divisie-selector

/bedankt/[divisie]            → 6 stuks, Meta Lead-tracking per divisie

/privacy                      → behoud bestaand
/algemene-voorwaarden         → nieuw, placeholder
```

**Pages die verdwijnen uit v2**: `/totaalrenovatie`, `/diensten`, `/voor-aannemers` (totaalrenovatie wordt onderdeel van `/renovatie`, diensten verdwijnt want vervangen door divisie-mini-sites, voor-aannemers past niet in nieuwe verhaal).

## 3. Tech-stack

| Laag | Tool |
|---|---|
| Framework | Next.js 15 App Router (behouden) |
| Taal | TypeScript (behouden) |
| Styling | Tailwind v4 + CSS custom properties (behouden, nieuwe tokens) |
| Animaties | **Framer Motion** (toevoegen) + bestaande CSS keyframes voor marquee |
| Smooth scroll | **Lenis** (toevoegen) — alleen op desktop, niet op mobiel |
| Forms | React Server Actions + zod (behouden) |
| Mail | Resend (behouden) |
| MDX | next-mdx-remote (behouden voor blog + realisaties) |
| Icons | lucide-react (behouden) + custom SVG's per divisie |
| Tracking | Meta Pixel + GTM placeholder |
| Fonts | **Manrope** (display) + **Inter** (body) + **JetBrains Mono** (labels) |

**Nieuwe dependencies**:
```
framer-motion
lenis
```

## 4. Design tokens

### 4.1 Globale tokens (in `globals.css` op `:root`)

```css
:root {
  /* Surfaces */
  --white:        #FFFFFF;
  --off-white:    #F7F8FA;
  --ink:          #1A1F2E;
  --slate:        #5B6478;
  --mute:         #A0A6B3;
  --line:         #E5E7EB;
  --ink-deep:     #0F1320;

  /* Default accent — overridden per division */
  --accent:       var(--ink);
  --accent-soft:  var(--off-white);
  --accent-deep:  var(--ink-deep);

  /* Radii */
  --r-sm: 6px;
  --r-md: 12px;
  --r-lg: 20px;
  --r-xl: 28px;

  /* Typography */
  --font-display: var(--font-manrope), system-ui, sans-serif;
  --font-body:    var(--font-inter), system-ui, sans-serif;
  --font-mono:    var(--font-jetbrains), ui-monospace, monospace;
}
```

### 4.2 Divisie-tokens (per-page override)

Elke divisie-pagina rendert een `<DivisionThemeProvider division="dak">` wrapper die op de root van die pagina (via `data-division="dak"`) deze CSS-variabelen herdefinieert:

```css
[data-division="dak"]   { --accent: #D9531E; --accent-soft: #FDEDE5; --accent-deep: #B23E0F; }
[data-division="rd"]    { --accent: #00A4D6; --accent-soft: #E0F4FA; --accent-deep: #007BA3; }
[data-division="reno"]  { --accent: #E8A93A; --accent-soft: #FCF3E1; --accent-deep: #B8821E; }
[data-division="hvac"]  { --accent: #2BAE66; --accent-soft: #E1F4EA; --accent-deep: #1E8049; }
[data-division="solar"] { --accent: #F4C430; --accent-soft: #FEF6D9; --accent-deep: #C99B17; }
[data-division="ev"]    { --accent: #7B3FE4; --accent-soft: #EFE7FC; --accent-deep: #5A23B5; }
```

**Effect**: alle componenten op een divisie-pagina (`Hero`, `ServiceCard`, `Button`, `FormField`, `CTABlock`) gebruiken `var(--accent)` — kleur volgt automatisch zonder per-component branching. Bij de divisie-kiezer op de homepage geven we elke tegel zijn eigen `data-division` zodat de hover-states de juiste kleur tonen.

### 4.3 Tailwind-bridge

In `globals.css` via `@theme inline`:
```css
@theme inline {
  --color-accent:      var(--accent);
  --color-accent-soft: var(--accent-soft);
  --color-accent-deep: var(--accent-deep);
  --color-ink:         var(--ink);
  --color-slate:       var(--slate);
  --color-mute:        var(--mute);
  --color-line:        var(--line);
  --color-off-white:   var(--off-white);
  --color-ink-deep:    var(--ink-deep);
}
```

Zodat je `bg-accent`, `text-accent`, `border-accent-soft` etc. in Tailwind kan gebruiken en het correct doorrolt per divisie.

## 5. `Division` data-type

`src/content/divisions/types.ts`:

```typescript
export type DivisionSlug =
  | "dakwerken"
  | "ramen-en-deuren"
  | "renovatie"
  | "hvac"
  | "zonne-energie"
  | "laadpalen";

export type DivisionThemeKey = "dak" | "rd" | "reno" | "hvac" | "solar" | "ev";

export interface Division {
  slug: DivisionSlug;
  themeKey: DivisionThemeKey;       // data-division attribuut
  name: string;                      // "Dakwerken"
  shortName: string;                 // "Dak" — voor compacte UI
  tagline: string;                   // homepagina-tegel
  color: { base: string; soft: string; deep: string };
  icon: string;                      // Lucide icon-naam of custom-key
  hero: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    image: string;                   // /images/divisions/dak-hero.jpg
    proofPoints: string[];           // bv ["RESCert", "VCA*", "10j garantie"]
  };
  services: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  useCases: Array<{
    title: string;
    description: string;
    timing: string;                  // "2-4 weken"
    budgetRange?: string;            // "vanaf €X"
  }>;
  approach: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  certificates: string[];            // logo-keys → resolved in CertificateBadges
  faq: Array<{ q: string; a: string }>;
  form: {
    fields: FormFieldDef[];          // divisie-specifieke vragen
    submitLabel: string;
  };
  meta: {
    title: string;
    description: string;
    conversionEvent: string;         // "Lead_Dakwerken" voor Meta Pixel
  };
}

export type FormFieldDef =
  | { name: string; label: string; type: "text" | "email" | "tel" | "textarea" | "number"; required?: boolean; placeholder?: string }
  | { name: string; label: string; type: "select" | "radio"; required?: boolean; options: Array<{ value: string; label: string }> };
```

Eén file per divisie in `src/content/divisions/dakwerken.ts`, `ramen-en-deuren.ts`, etc. Plus `index.ts` met `export const divisions: Record<DivisionSlug, Division>`.

## 6. Component-tree

### 6.1 Gedeeld over alle pagina's
- `layout/Header` — logo + nav + offerte-CTA. Op divisie-pagina's: scroll-progress-balk in `--accent`.
- `layout/Footer` — vier kolommen, kolommen vier divisies.
- `layout/DivisionTheme` — wrapper component die `data-division` attribuut zet op root.
- `ui/Button` — primary/ghost/outline varianten, gebruikt `var(--accent)`.
- `ui/Container` — page-width.
- `ui/Reveal` — wrapper voor scroll-reveal via Framer Motion (vervangt huidige Reveal).
- `ui/Marquee` — partner-logo's.
- `seo/JsonLd` — Organization + LocalBusiness + per-page schema.

### 6.2 Marketing-blocks (hergebruikt per divisie + homepage)
- `marketing/SectionHeader` — eyebrow + headline + intro.
- `marketing/DivisionHero` — divisie-pagina hero-template, leest `Division` in.
- `marketing/DivisionGrid` — homepage 6-tegel grid (cruciaal component).
- `marketing/ServiceCard` — sub-dienst-kaart binnen divisie.
- `marketing/UseCaseStrip` — drie use-cases horizontaal.
- `marketing/ApproachSteps` — 3-staps strook in `--accent`.
- `marketing/ProjectCard` — realisatie-kaart met divisie-tag.
- `marketing/ProjectGrid` — gefilterde lijst.
- `marketing/CertificateMarquee` — partner-logo's, grayscale → kleur op hover.
- `marketing/StatRow` — 4-cijferige proof-strook (count-up bij viewport).
- `marketing/ShowroomBlock` — 3-foto-collage met openingstijden.
- `marketing/TeamBlock` — team-collage.
- `marketing/PremieTeaser` — link naar /premies.
- `marketing/BlogTeaser` — 3 laatste artikels.
- `marketing/CTABlock` — donkere ink-deep CTA-strook.
- `marketing/FAQAccordion` — accordion in `--accent`.

### 6.3 Forms (divisie-aware)
- `forms/QuoteForm` — leest `Division.form.fields`, rendert dynamisch, post naar server action met `division` parameter.
- `forms/ContactForm` — bedrijfsbreed.
- `forms/JobForm` — sollicitatieformulier.
- `forms/FormField` — herbruikbaar veld met floating label en `--accent` focus-glow.
- `forms/FormSuccess` — bedanktblok inline.

### 6.4 Tracking
- `tracking/MetaPixel` — base-code in `app/layout.tsx`.
- `tracking/GTM` — placeholder.
- `tracking/UTMCapture` — client-component die UTM-params in cookie zet.
- `app/bedankt/[divisie]/page.tsx` — fire's `Lead` event met `division` param.

## 7. Folderstructuur (resultaat)

```
src/
  app/
    layout.tsx                     ← Meta Pixel, GTM, fonts
    page.tsx                       ← homepage-portal
    globals.css                    ← nieuwe tokens
    (divisions)/
      dakwerken/page.tsx
      ramen-en-deuren/page.tsx
      renovatie/page.tsx
      hvac/page.tsx
      zonne-energie/page.tsx
      laadpalen/page.tsx
      _components/                 ← divisie-shared
        DivisionPage.tsx           ← template die Division inleest en alle blocks rendert
    realisaties/
      page.tsx
      [slug]/page.tsx
    over-ons/page.tsx
    jobs/
      page.tsx
      [slug]/page.tsx
    premies/page.tsx
    blog/
      page.tsx
      [slug]/page.tsx
    contact/page.tsx
    offerte/page.tsx
    bedankt/
      [divisie]/page.tsx
    privacy/page.tsx
    _actions/
      quote.ts                     ← uitgebreid met division param
      contact.ts
      job-application.ts           ← nieuw
      schemas.ts
  components/
    layout/                        ← Header, Footer, DivisionTheme
    marketing/                     ← alle blocks uit §6.2
    forms/                         ← uit §6.3
    tracking/                      ← uit §6.4
    ui/                            ← Button, Reveal, Marquee, Container
    seo/                           ← JsonLd
    brand/                         ← Logo, DivisionIcon
  content/
    divisions/                     ← 6 .ts files + index.ts + types.ts
    projects/                      ← MDX met division frontmatter
    blog/                          ← MDX met category frontmatter
    jobs/                          ← MDX met division + functionType frontmatter
  lib/
    site.ts                        ← bedrijfsgegevens
    division.ts                    ← helpers: getDivision(slug), getAllDivisions()
    seo.ts
    content.ts                     ← MDX-loaders
    tracking.ts                    ← Meta Pixel events helper
    utm.ts
    email.ts
    rate-limit.ts
public/
  images/
    divisions/                     ← 6 hero-foto's + service-iconen
    showroom/                      ← showroom + magazijn foto's
    team/                          ← team-foto's
    projects/                      ← bestaand + nieuw per divisie
    logos/                         ← partner-logo's
  fonts/                           ← optioneel, anders Google Fonts via next/font
```

## 8. Bouwvolgorde

| Fase | Inhoud | Reden |
|---|---|---|
| **F1** | Design tokens + fonts + globale layout (Header/Footer/Container/Button/Reveal) + Lenis-setup + Framer-Motion-helpers | Fundament: zonder dit kan niets eruitzien zoals beoogd. |
| **F2** | Homepage met DivisionGrid hero | Cruciaal visitekaartje, ook ad-traffic landt hier vanuit organic. |
| **F3** | Division-template (`(divisions)/_components/DivisionPage.tsx`) + Dakwerken volledig content | Bewijs dat de template werkt voor één divisie tot in finest detail. |
| **F4** | 5 andere divisies (data-files + foto-placeholders) | Replicate, alleen data verschilt. |
| **F5** | Meta Pixel + 6 bedankt-pagina's + UTM-capture | Tracking moet werken voor lancering ads. |
| **F6** | /over-ons + /contact + /offerte (globale form met divisie-selector) | Bedrijfsbrede pagina's voor vertrouwen. |
| **F7** | /premies + /jobs + /blog + /realisaties | Content-pagina's die ondersteunen maar geen direct conversie-doel zijn. |
| **F8** | SEO (JsonLd + sitemap + robots) + 404/error + accessibility pass | Polish. |
| **F9** | Lighthouse-audit + image-optimization-pass | Performance. |

Per fase: typecheck + lint groen voor verder.

## 9. Open vragen (graag bevestigen vóór bouw)

1. **Branchnaam**: u zei `claude/multi-division-portal` maar het session-systeem dwingt `claude/multi-division-portal-JhqJs` af. Ik werk verder op `…-JhqJs` (kan niet anders), commits eindigen daar. OK?
2. **Meta-pixel ID & GTM container ID**: lever ik als `process.env.NEXT_PUBLIC_META_PIXEL_ID` en `NEXT_PUBLIC_GTM_ID`. Placeholder werkt voor build, u vult later in. OK?
3. **Foto-bibliotheek**: bestaande `/public/images/projects/` foto's herbruik ik. Voor showroom / magazijn / team / 6 divisie-hero's zet ik **placeholder-blokken** (gekleurde gradient + label) die u later vervangt door echte foto's. Akkoord?
4. **Logo**: behoud ik het huidige `Logo.tsx` (huis-silhouette + 4 kwadranten) of verwacht u ook hier een verandering? Het ziet er nu vrij sober uit — past prima bij commerciële portal.
5. **Mobiel navigatie**: hamburger met drawer waarin de 6 divisies bovenaan getoond worden (met gekleurde balkjes), daaronder Bedrijf-links. OK?
6. **Realisaties-content**: ik herbruik de 3 bestaande MDX-projecten maar tag ze opnieuw per divisie. Voor nu vul ik aan met 6-8 nieuwe placeholder-projecten met dummy-tekst + bestaande foto's. OK?
7. **Algemene voorwaarden + cookie-policy**: placeholder met "in opbouw" of laten staan voor later? Ik zou een minimale placeholder zetten zodat de footer-links werken.

## 10. Geschat resultaat

- **~30-35 components** (combinatie van nieuw + herwerkt)
- **~18 pages** (6 divisies + 12 bedrijfsbreed)
- **6 divisie-data-files** met volledige Vlaamse copy (placeholder voor zeer divisie-specifieke claims)
- **Type-safe** door en door
- **0 magic colors** — alles via tokens
- **Mobiel + desktop** beide gepolijst

---

Wachten op uw `OK` (of opmerkingen). Bij `OK` start ik onmiddellijk met Fase 1.
