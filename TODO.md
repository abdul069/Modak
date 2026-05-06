# Marketing & branding handover

Items the developer left as placeholders. Replace before launch. Ordered by
launch-blocking severity.

## Hard blockers (legal / commercial)

- [x] **Final telephone number** — `+32 485 10 89 89`
- [x] **Final address** — `Hooiwege 40j, 9940 Evergem`
- [x] **Final email** — `info@modak.be`
- [x] **Privacy policy** — built at `/privacy` (Belgian GDPR-conform). Linked from footer. Recommended: laat door jurist nakijken vóór go-live.
- [ ] **KBO / BTW-nummer** — placeholder `TODO: BE 0000.000.000` in `src/lib/site.ts`. Footer en privacypagina tonen dit veld pas zodra het ingevuld is.
- [ ] **Algemene voorwaarden** — pagina nog niet gebouwd (optioneel afhankelijk van bedrijfsvoering)
- [ ] **Cookie banner** — niet geïmplementeerd. Plausible en Vercel Analytics zijn cookieloos en privacy-vriendelijk; in principe is geen banner nodig zolang er geen marketing-cookies bij komen. Bij twijfel jurist consulteren.
- [ ] **GDPR consent text** onder contact + offerte formulieren — huidige tekst verwijst naar het privacybeleid; legal review aanbevolen.

## Brand / visual

- [ ] **Final brand colors** — confirm or override in `src/app/globals.css` (`@theme` block)
- [ ] **Logo (SVG)** — current header uses a wordmark + "M" tile; replace `<Logo />` in `src/components/layout/Header.tsx`
- [ ] **Favicon + app icons** — drop in `src/app/icon.png` etc.
- [ ] **Open Graph image** — `siteConfig.ogImage` points to `/og.jpg`; create that asset

## Content

- [ ] **Hero copy on home** — confirm kernbelofte, currently the spec's draft
- [ ] **All photo assets** — currently every project + team uses placeholder backgrounds
  - [ ] Hero photo on home (LCP — should be preloaded once available)
  - [ ] Project hero + gallery images (`public/images/projects/`)
  - [ ] Team headshots (`/over-ons`)
  - [ ] Voorbeeldproject foto on `/totaalrenovatie`
- [ ] **Real testimonials** — `src/app/page.tsx` uses 4 placeholder quotes
- [ ] **Real B2B reference projects** — `src/app/voor-aannemers/page.tsx` lists 3 placeholders
- [ ] **Team bios + names** — `src/app/over-ons/page.tsx` has TODO entries
- [ ] **Social URLs** — `siteConfig.social` contains placeholder root URLs
- [ ] **Final certificate logos (PNG/SVG)** — current implementation uses text badges; if you want logos, add to `public/certs/` and update `CertificateBadges.tsx`
- [ ] **Premiebedragen** — verify current bedragen in MDX/pages match Mijn VerbouwPremie at launch date

## Tech / infra (owner)

- [ ] **Resend domain** verified (DNS records for SPF/DKIM)
- [ ] **From-address** for emails (`EMAIL_FROM` env var)
- [ ] **Inbox** for incoming form mail (`CONTACT_EMAIL`)
- [ ] **Plausible site** registered + script enabled via `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- [ ] **CRM webhook** — set `CRM_WEBHOOK_URL` if/when there's a CRM
- [ ] **Vercel project** + apex `modak.be` + `www` redirect
- [ ] **Google Search Console + Bing Webmaster** sitemap submission
- [ ] **Google Maps embed** on `/contact` — currently uses an OpenStreetMap fallback; replace with proper embed once address is final

## Quality assurance before launch

- [ ] Lighthouse run on `/`, one service page, one project page → meet 90+ / 95+ targets
- [ ] Contact + offerte forms tested end-to-end with real Resend key
- [ ] Mobile nav tested on iOS Safari + Android Chrome
- [ ] Screen reader + keyboard navigation pass
- [ ] All `TODO:` comments in code resolved
- [ ] Confirm no console errors on `next build && next start`
