# AGNAU.be redesign — PLAN.md

## Context

Volledige rebuild van **agnau.be** richting een kalme, fotografie-gedreven,
editorial site die past bij een totaalrenovatie-aannemer uit Evergem.
De huidige site (op `claude/verder-improvements-djN9Q`) is functioneel
maar mist warmte en premium-gevoel. Deze redesign vervangt navy+turquoise
door warme aardetinten en bouwt rond grote fotografie + Fraunces display
typografie.

**Branch**: `claude/redesign-bone-clay` (nieuw, vertrekt van laatste
`verder-improvements` commit `a6e4d0c` — alle 51 foto's + content + MDX
+ Vercel-integratie blijven beschikbaar als basis).

**Eigenaar bevestigt**: 13 disciplines (huidige 11 + keukens + vloeren),
volledige tech-stack (Framer Motion, Lenis, custom cursor, next-intl prep),
NL-Vlaams copy.

---

## 1. Design tokens

### Kleurenpalet (warm aardetinten)
```css
--bone:     #EFE9E0   /* hoofdachtergrond, warm off-white */
--linen:    #DCD3C5   /* secundaire vlakken, alt-secties */
--clay:     #C4A88A   /* primary CTA, warm klei-accent */
--clay-dk:  #A88860   /* hover state clay */
--charcoal: #1F1C1A   /* hoofdtekst, dark sections, footer */
--moss:     #6B6F5C   /* secundair groen-grijs accent */
--stone:    #8B847B   /* secundaire tekst */
--rust:     #A04E2A   /* zeldzame accent, alleen waar échte impact nodig */
```
Vermijd pure `#FFFFFF` en pure `#000000`. `meta-theme-color: #1F1C1A`.

### Typografie
- **Display** — *Fraunces* (variable: opsz, wght, SOFT) via Google Fonts.
  Gebruikt voor h1/h2/h3/h4 + decoratieve display.
- **Body** — *Inter* (variable wght) via Google Fonts.
  Gebruikt voor paragrafen, UI tekst.
- **Mono/Labels** — *JetBrains Mono* via Google Fonts. Uppercase eyebrows
  zoals `01 — AANPAK`, `REALISATIE · GENT · 2024`.

CSS variabelen:
```css
--font-display: var(--font-fraunces);
--font-sans:    var(--font-inter);
--font-mono:    var(--font-jetbrains-mono);
```

### Spacing & ritme
- Tailwind default 4px scale (8px logical grid via `gap-2 = 8px`).
- Section verticaal: `py-24 md:py-32 lg:py-40` standaard.
- Container max-widths:
  - `container-content`: 1320px (text + cards)
  - `container-wide`: 1600px (foto-bleed secties)
  - Outside breekt foto's full-bleed.

### Radius
- Cards: `rounded-2xl` (16px) → de huidige `rounded-3xl` voelt te speels
- Photos: `rounded-2xl` of full-bleed (geen radius)
- Buttons: `rounded-full` voor primary clay-pill
- Inputs: `rounded-lg`

### Schaduwen
- Niet als depth-trick. Alleen op floating cards: `shadow-xl` met warm-tint
  `shadow-[0_20px_60px_-20px_rgba(31,28,26,0.18)]`.

---

## 2. Component-bibliotheek

```
components/
├── layout/
│   ├── Header.tsx              # sticky, scroll-shrink, hide-on-scroll
│   ├── Footer.tsx              # charcoal + AGNAU watermark
│   ├── AnnouncementBar.tsx     # dismissible top-strip (cookieless)
│   ├── MobileMenu.tsx          # full-screen overlay, staggered reveal
│   └── MegaMenu.tsx            # hover-dropdown voor diensten (5 clusters)
│
├── ui/
│   ├── Button.tsx              # 3 varianten: primary-clay, ghost, link-arrow
│   ├── Eyebrow.tsx             # mono uppercase label component
│   ├── SplitText.tsx           # word-by-word entrance via Framer Motion
│   ├── Marquee.tsx             # oneindig schuivende rij
│   ├── Cursor.tsx              # custom cursor met magnetisch-hover
│   ├── CountUp.tsx             # cijfer count bij viewport-entry
│   ├── ScrollLine.tsx          # verticale lijn uittekenen bij scroll
│   ├── Reveal.tsx              # fade-up wrapper (Framer Motion)
│   ├── Parallax.tsx            # photo translate-y o.b.v. scroll
│   ├── KenBurns.tsx            # subtiele inzoom-animatie wrapper
│   └── PageTransition.tsx      # fade + translate page transitions
│
└── sections/
    ├── Hero.tsx                # asymmetrische 60/40 layout
    ├── Manifesto.tsx           # zuiver-tekst sectie
    ├── ServiceShowcase.tsx     # horizontale scroll-snap kaarten
    ├── ApproachSteps.tsx       # 3 verticale stappen + ScrollLine
    ├── ProjectFeature.tsx      # één project groot uitgelicht
    ├── ProjectGrid.tsx         # gallery met filter
    ├── StatsBlock.tsx          # 4 cijfers met CountUp
    ├── CertificatesStrip.tsx   # marquee greyscale logo's
    ├── Testimonial.tsx         # grote Fraunces italic quote
    ├── ServiceMarquee.tsx      # decoratief schuivende disciplines
    ├── BlogPreview.tsx         # asymmetric 1-groot-2-klein grid
    ├── CTABlock.tsx            # charcoal sectie + dual CTA
    └── ContactForm.tsx         # server actions + Zod validatie
```

---

## 3. Pagina-architectuur

```
/                       Homepage (eerste prioriteit)
/aanpak                 Proces in stappen (NIEUW, los van /totaalrenovatie)
/diensten               Overzicht 13 disciplines, ingedeeld in 5 clusters
  /diensten/[slug]      Detail per dienst
/totaalrenovatie        Hoofdpropositie (behoud + redesign)
/realisaties            Project gallery + filter
  /realisaties/[slug]   Case detail
/premies                Behoud + lichte redesign
/over-ons               Team, verhaal, certificaten
/voor-aannemers         Behoud + redesign
/blog                   Tips & nieuws
  /blog/[slug]
/contact                Form + adres + map
/offerte                Uitgebreid formulier
/privacy                Behoud
```

### 13 diensten (5 clusters)
- **Dak & gevel**: dakrenovatie, dakisolatie
- **Interieur**: badkamers, sanitair, **keukens** (nieuw), **vloeren** (nieuw)
- **Verwarming & koeling**: warmtepompen, verwarming, airco
- **Lucht & energie**: ventilatie, zonnepanelen
- **Elektriciteit**: elektriciteitswerken, laadpalen

Voor keukens + vloeren: nieuwe MDX files in `content/services/` met
placeholder copy. Foto: hergebruik uit bestaande gallery (WA0102 keuken,
WA0092/93/94 vloeren-met-houten-vloer).

---

## 4. Homepage-secties (volgorde)

1. **Header** (sticky, transparent over hero, bone bg na scroll 80px)
2. **Hero** — asymmetrisch 60/40. Links: Fraunces multi-line headline +
   2 CTA's. Rechts: groot interieurbeeld met Ken Burns. Onder: 3
   proof-points strip (`20+ JAAR · 11 DISCIPLINES · 10 JAAR GARANTIE`).
   Scroll-indicator met ScrollLine.
3. **Manifesto** — zuiver tekstuele sectie of met 1 detail-foto. Speel
   met grote/kleine tekst voor visueel ritme.
4. **ServiceShowcase** — 5 horizontale kaarten (clusters), scroll-snap
   met drag op desktop. Geen grid.
5. **ApproachSteps** — 3 stappen verticaal scroll-gestuurd, met
   ScrollLine die zich uittekent.
6. **ProjectFeature** (Totaalrenovatie Sint-Denijs-Westrem) — split 50/50
   info + parallax foto.
7. **ProjectGrid** — 3 kleine projecten met hover-zoom + "Alle realisaties"
8. **StatsBlock** — 4 cijfers met CountUp, dunne verbindings-lijnen
9. **CertificatesStrip** — marquee greyscale: RESCert, VCA*, Erkend
   aannemer, Daikin Stand-By, Viessmann
10. **Testimonial** — grote Fraunces italic quote, mono klantlabel
11. **ServiceMarquee** — decoratief schuivende strip in clay accent
12. **BlogPreview** — 3 artikels asymmetric grid
13. **CTABlock** — charcoal sectie, dubbel CTA (`Vraag offerte`, `Contact`)
14. **Footer** — charcoal, AGNAU watermark, 4-kolom

---

## 5. Animaties & interacties

### Globaal
- **Lenis smooth scroll** in root layout met fallback voor reduced-motion
- **Custom cursor** (Cursor.tsx) — small bone circle, scale-up op
  interactieve elementen, label op project cards ("Bekijk")
- **Page transitions** via `<PageTransition>` wrapper (Framer Motion
  AnimatePresence) — fade + translate-y(16px)

### Op-scroll
- Sections fade-in + translate-up (24px) bij viewport-entry, één keer
- Headlines: word-by-word reveal via `SplitText` (staggered 30ms)
- Foto's: parallax via `Parallax` wrapper (range 60-90px)
- Lijnen: `ScrollLine` scaleY 0→1 bij entry
- Stats: count-up via `CountUp` IntersectionObserver

### Op hover
- Buttons: clay-fill schuift in van onderaf, tekst kleurt om
- Links met pijl: pijl glijdt rechts en terug
- Project cards: image scale 1.03, info-overlay schuift omhoog
- Magnetisch effect op primary CTA's (max 8px translation)

### Header
- Scroll > 80px: bone bg fade-in, padding shrink, logo lichter
- Hide on scroll-down (na 200px), show on scroll-up

### Mobile menu
- Full-screen overlay, bg fade-in
- Menu-items staggered upward, 50ms delay tussen

### Reduced motion
- `prefers-reduced-motion: reduce` → alle animaties versimpelen of
  uitschakelen. Lenis disabled. Custom cursor → native cursor.

---

## 6. Tech-stack additions

| Package | Doel | Bundle impact |
|---|---|---|
| `framer-motion` | SplitText, page transitions, hover micro-interactions | ~50KB |
| `lenis` | Smooth scroll | ~10KB |
| `next-intl` | NL default, FR/EN later (config + folder) | ~15KB |
| `zod` (al aanwezig) | Form validation | — |

Eigen-gebouwd (geen extra dep):
- Custom cursor (pointer events + rAF)
- CountUp (IntersectionObserver)
- ScrollLine (CSS scaleY transition)
- Marquee (CSS keyframes, al bestaand)
- KenBurns (CSS keyframes, al bestaand)

### Lettertypes
`layout.tsx`:
```ts
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
  display: "swap",
  variable: "--font-fraunces",
});
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-jetbrains-mono" });
```

---

## 7. Content-data structuur

```
content/
├── services/
│   ├── dakrenovatie.mdx
│   ├── dakisolatie.mdx
│   ├── badkamers.mdx
│   ├── sanitair.mdx
│   ├── keukens.mdx          # NIEUW
│   ├── vloeren.mdx          # NIEUW
│   ├── warmtepompen.mdx
│   ├── verwarming.mdx
│   ├── airco.mdx
│   ├── ventilatie.mdx
│   ├── zonnepanelen.mdx
│   ├── elektriciteitswerken.mdx
│   └── laadpalen.mdx
├── projects/
│   ├── badkamer-merelbeke.mdx       (behoud)
│   ├── warmtepomp-gent.mdx          (behoud)
│   └── totaalrenovatie-sint-denijs-westrem.mdx (behoud)
└── blog/
    ├── premies-renovatie-vlaanderen.mdx       (behoud)
    ├── totaalrenovatie-vs-losse-aannemers.mdx (behoud)
    └── wanneer-warmtepomp-zinvol.mdx          (behoud)
```

Toegevoegd `lib/content.ts` met `getAllServices` (al aanwezig) — werkt
direct met de 2 nieuwe MDX files mits cluster-property toegevoegd:

```ts
interface ServiceFrontmatter {
  // ...bestaand
  cluster?: "dak-gevel" | "interieur" | "verwarming-koeling" | "lucht-energie" | "elektriciteit";
}
```

`src/lib/site.ts` `services` array uitbreiden met de 2 nieuwe (+ cluster
property in array).

---

## 8. SEO + performance + a11y

### SEO
- `generateMetadata` per pagina (al deels gedaan)
- JSON-LD `LocalBusiness` op homepage + `/contact` met adres Hooiwege 40j,
  9940 Evergem, telefoon, openingstijden, dienst-types
- JSON-LD `Service` per `/diensten/[slug]`
- JSON-LD `Article` per `/blog/[slug]` (al aanwezig)
- Sitemap.xml + robots.txt automatisch (al aanwezig)

### Performance
- Doel: Lighthouse 95+ over de hele lijn
- `next/image` met `placeholder="blur"` + `blurDataURL` voor alle project
  foto's (genereren via `plaiceholder` indien nodig — TODO check)
- Lazy-load alles buiten viewport
- Font display swap + preload Fraunces voor hero
- Critical CSS inline

### Accessibility
- WCAG 2.1 AA contrast (clay #C4A88A op bone #EFE9E0 testen voor body
  tekst — vermoedelijk te licht; clay reserveren voor CTA-buttons en
  decoratie waar contrast minder kritiek is. Charcoal #1F1C1A op bone =
  ratio ~13:1 ✓ voor body text)
- Eigen focus-states (clay-ring 2px offset, niet browser-default)
- `prefers-reduced-motion` overal respecteren
- Keyboard navigation getest op mega-menu + mobile menu
- Skip-link `<a href="#main">Skip to content</a>` boven Header

### Forms
- `/api/contact` server action met Zod validatie
- `/api/offerte` server action met Zod validatie + honeypot field
- Rate limit via cookie-based counter (5/min/IP)
- Mock-resend integratie placeholder

### Analytics
- Plausible script placeholder in `layout.tsx` met env-var
  `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- Vercel Web Analytics ook beschikbaar (zonder cookie)

---

## 9. Implementatie-volgorde

### Fase 1 — Foundations (Day 1, ~2-3h)
1. `git checkout claude/redesign-bone-clay` ✓ (al aanwezig)
2. `npm install framer-motion lenis next-intl`
3. `src/app/globals.css` herschrijven: bone/clay/charcoal tokens
4. `src/app/layout.tsx` herschrijven: Fraunces + Inter + JetBrains
   font imports + Lenis + custom cursor wrapper + meta-theme-color
5. UI-primitives bouwen: Button, Eyebrow, SplitText, Reveal, Parallax,
   CountUp, ScrollLine, Cursor, Marquee
6. Layout: Header (incl MegaMenu), Footer, MobileMenu

### Fase 2 — Homepage (Day 1-2, ~3-4h)
7. Sections bouwen in volgorde 1-13 (zie sectie 4)
8. `src/app/page.tsx` composeren
9. Lokaal `next build` + visuele check
10. Commit + push voor preview op Vercel
11. **PAUZE → eigenaar review homepage**

### Fase 3 — Service pagina's (Day 2, ~2-3h, na approval)
12. `keukens.mdx` + `vloeren.mdx` aanmaken met placeholder copy
13. `src/lib/site.ts` services array uitbreiden met cluster property
14. `/diensten` index ombouwen met cluster-categorisatie
15. `/diensten/[service]` redesign (template hergebruik)

### Fase 4 — Realisaties + content pagina's (Day 2-3, ~3h)
16. `/realisaties` index met filter per type werk
17. `/realisaties/[slug]` redesign
18. `/aanpak` (nieuw los pagina)
19. `/totaalrenovatie` redesign
20. `/over-ons` redesign (zonder team-foto's — eigenaar wens)

### Fase 5 — Forms + utility pagina's (Day 3, ~2h)
21. `/contact` met form + map + Zod
22. `/offerte` met uitgebreid form + Zod
23. `/blog` index + `/blog/[slug]` redesign
24. `/premies` lichte redesign
25. `/voor-aannemers` redesign
26. `/privacy` behoud, lichte styling-update

### Fase 6 — i18n + a11y + SEO (Day 3-4, ~2h)
27. `next-intl` configureren (NL default, FR/EN scaffold)
28. JSON-LD LocalBusiness + Service per pagina
29. Lighthouse + a11y audit + fix
30. Final build + push + Vercel production deploy

---

## 10. Wat behouden blijft van huidige state

- Alle foto's in `/public/images/projects/` (51 WhatsApp + pexels)
- Content MDX: 3 projects + 3 blog posts (story-tekst is al goed afgestemd)
- `src/lib/content.ts`, `src/lib/seo.ts`, `src/lib/utils.ts`
- Forms-server-actions stubs in `src/app/_actions/`
- Bestaande `Reveal`, `CountUp`, `Marquee`, `KenBurns` componenten waar
  herbruikbaar (Marquee + KenBurns CSS keyframes blijven; logic-componenten
  worden vervangen waar de nieuwe API verschilt).

### Verwijderd / vervangen
- HeroSplit, HeroCircle, HeroOverlayCard, FeaturedProject, ServiceTile,
  StatsStrip, SolutionsList, EngagementsBlock, WorksiteVisit,
  MagazineSignup, MaterialStrip, ScrollMarquee, RedCircleCTA, DotAccent
  → maken plaats voor de nieuwe component-suite (zie sectie 2).

---

## 11. Open vragen / aannames

1. **Keukens + vloeren**: foto's voor de service-tiles? Voor keukens
   gebruik ik WA0102/0103 (donker fineer keuken Sint-Denijs-Westrem).
   Voor vloeren WA0092/0093/0094 (slaapkamer-houten-vloer shots) — laat
   weten als je liever andere foto's gebruikt.
2. **Adres bevestigen**: Hooiwege 40j, 9940 Evergem — telefoon
   +32 485 10 89 89, email info@agnau.be → blijft hetzelfde, behouden.
3. **Resterende disciplines op /voor-aannemers**: huidige page is voor
   B2B-architectensamenwerking. Behoud? Of vereenvoudig naar één
   "Partners" page?
4. **Newsletter signup**: bestaat nog niet als backend. Stub maken naar
   `/api/newsletter` met form-only, eigenaar koppelt later aan
   Resend/Mailchimp.
5. **Plausible**: ENV var `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` instellen op
   Vercel?

---

## 12. Verificatie checklist (eind-implementatie)

- [ ] `npm run build` groen
- [ ] Lighthouse Mobile + Desktop: Performance 90+, A11y 95+, SEO 95+,
      Best Practices 100
- [ ] Visueel check op desktop (1440px, 1920px) + mobile (390px, 414px)
      + tablet (768px, 1024px)
- [ ] Alle navigatie-links werken
- [ ] Mega-menu hover + keyboard
- [ ] Mobile menu open/close
- [ ] Contact form submit → success state
- [ ] Offerte form submit → success state
- [ ] Reduced-motion: animaties uit
- [ ] Custom cursor disabled op touch devices
- [ ] Skip-link werkt (Tab focust eerst skip-to-content)
- [ ] Vercel preview deploy live op nieuwe URL

---

## Akkoord nodig

Eigenaar bevestigt:
- [ ] Design tokens (kleuren, fonts)
- [ ] Component-bibliotheek scope
- [ ] Pagina-architectuur + 13 diensten (incl keukens + vloeren)
- [ ] Tech-stack additions (Framer Motion, Lenis, next-intl, custom cursor)
- [ ] Implementatie-volgorde (homepage eerst, dan subpages na review)
- [ ] Open vragen sectie 11 — antwoorden geven

**Na approval starten we Fase 1.** Geen code-commits buiten deze PLAN.md
totdat eigenaar groen licht geeft.
