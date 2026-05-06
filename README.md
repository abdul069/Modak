# modak.be

Marketing site for AGNAU — Belgian renovation company in Ghent. Single partner
for the full energetic shell of a home: roof, insulation, heat pumps, heating,
ventilation, sanitary, bathrooms, air conditioning.

## Stack

- **Next.js 15** (App Router, React Server Components by default)
- **TypeScript** strict
- **Tailwind CSS v4** (with brand tokens in `src/app/globals.css`)
- **shadcn-style primitives** in `src/components/ui` (Button, Input, Textarea, Card, Accordion, Dialog, Sheet)
- **next/font** with Inter (body) and Fraunces (display)
- **next-mdx-remote** + **gray-matter** for MDX content
- **Resend** for transactional emails
- **Zod** validation + React Server Actions for forms
- **Vercel Analytics** + optional **Plausible** script

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY, etc.
npm run dev
```

Production build:

```bash
npm run build && npm run start
```

## Environment variables

| Name | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | for forms in prod | Resend API key for transactional mail |
| `CONTACT_EMAIL` | recommended | Inbox that receives form submissions (default `info@modak.be`) |
| `EMAIL_FROM` | optional | From address (default `AGNAU <noreply@modak.be>`) |
| `NEXT_PUBLIC_SITE_URL` | yes | Public origin used for canonical URLs (e.g. `https://modak.be`) |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | optional | Enables the Plausible script tag when set |
| `CRM_WEBHOOK_URL` | optional | Best-effort POST per submission for future CRM integration |

If `RESEND_API_KEY` is not set, form submissions are accepted but email is
skipped (with a warning logged). Useful in dev.

## Routes

| Path | Source |
|---|---|
| `/` | `src/app/page.tsx` |
| `/totaalrenovatie` | `src/app/totaalrenovatie/page.tsx` |
| `/diensten` | `src/app/diensten/page.tsx` |
| `/diensten/[service]` | `src/app/diensten/[service]/page.tsx` driven by `content/services/*.mdx` |
| `/realisaties` | `src/app/realisaties/page.tsx` (filterable, server-rendered) |
| `/realisaties/[slug]` | `src/app/realisaties/[slug]/page.tsx` driven by `content/projects/*.mdx` |
| `/over-ons` | `src/app/over-ons/page.tsx` |
| `/voor-aannemers` | `src/app/voor-aannemers/page.tsx` |
| `/blog` | `src/app/blog/page.tsx` |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` driven by `content/blog/*.mdx` |
| `/contact` | `src/app/contact/page.tsx` |
| `/contact/bedankt` | confirmation, `noindex` |
| `/offerte` | `src/app/offerte/page.tsx` (multi-step) |
| `/offerte/bedankt` | confirmation, `noindex` |
| `/sitemap.xml` | `src/app/sitemap.ts` |
| `/robots.txt` | `src/app/robots.ts` |

Plus `not-found.tsx`, `error.tsx`, `loading.tsx`.

## Content management

All marketing copy lives in MDX with frontmatter under `content/`. Marketing
edits content without touching `src/`.

```
content/
├── services/        # 8 service pages (one MDX per service)
├── projects/        # case studies (filterable on /realisaties)
├── blog/            # blog articles
└── pages/           # reserved for static page copy if ever needed
```

### Add a new service page

1. Create `content/services/<slug>.mdx`. Use `dakrenovatie.mdx` as a template.
2. Make sure the `slug` in frontmatter matches the filename.
3. If the service has active subsidies, set `hasPremies: true`.
4. Set `certificates: [...]` to highlight relevant erkenningen on the page.
5. Add the slug to `services` in `src/lib/site.ts` (controls homepage grid + nav order).
6. Optionally add `relatedServices: [...]` for cross-linking.

The site rebuilds the static service routes automatically via `generateStaticParams`.

### Add a new project (realisatie)

1. Create `content/projects/<slug>.mdx`. Use `totaalrenovatie-sint-denijs-westrem.mdx` as a template.
2. Set `services: [...]` to the service slugs the project covers — this drives the filter on `/realisaties` and the "Related realisaties" block on service pages.
3. Drop hero & gallery images into `public/images/projects/<slug>-XX.jpg` and reference them with absolute paths.
4. `featured: true` lets you flag the strongest stories (room for future "featured" sections).

### Add a blog post

1. Create `content/blog/<slug>.mdx`.
2. Set `date: YYYY-MM-DD` — posts are sorted descending by date.
3. Set `excerpt:` — used for the index card and SEO description.
4. The full MDX body is rendered with the components mapped in `src/components/MDXContent.tsx` (links, images, blockquotes get site styling).

## Design system

- Brand tokens are CSS variables in `src/app/globals.css` (under `@theme`). Changing them updates the entire site.
- Spacing/typography defaults: container width 1200 px, body Inter, display Fraunces.
- Components default to React Server Components. Mark `"use client"` only when needed (forms, sliders, mobile nav, gallery, project filter).

## Forms

- Both forms (Contact, Offerte) submit via React Server Actions (`src/app/_actions/`).
- Server-side Zod validation (`schemas.ts`) — never trust the client.
- Honeypot field `website` (visually hidden) silently drops bots.
- In-memory rate limit: 1 submission / 30s / IP. **Resets on each deploy** — acceptable for v1 traffic levels.
- File upload (offerte): whitelist of `pdf|jpg|jpeg|png|heic`, max 10 MB, validated server-side.
- On success, redirect to `/contact/bedankt` or `/offerte/bedankt` (both `noindex`).
- The `CRM_WEBHOOK_URL` env var, when set, receives a POST per submission.

## SEO

- Per-page `generateMetadata` builds canonical URLs, OG, and Twitter Card via `src/lib/seo.ts`.
- JSON-LD: `LocalBusiness` on home + contact, `Service` on each service page, `Article` on blog posts, `BreadcrumbList` everywhere except home. See `src/components/seo/JsonLd.tsx`.
- `sitemap.ts` and `robots.ts` are auto-generated.
- Static generation (`generateStaticParams`) for all content routes.

## Performance & accessibility

- All images go through `next/image` with explicit dimensions.
- Self-hosted fonts via `next/font`.
- Skip link to `#main`, semantic landmarks, focus-visible styles.
- `prefers-reduced-motion` respected (animations disabled).
- Color contrast follows WCAG AA — verify if you change tokens.

## Deploy

Target is **Vercel**.

1. Connect this repo to a Vercel project.
2. Set the env vars listed above (Production + Preview).
3. Add the `modak.be` domain (apex + redirect from `www`).
4. Vercel Analytics is included; turn on in dashboard.
5. Submit `https://modak.be/sitemap.xml` to Google Search Console + Bing Webmaster Tools.

## What's NOT in v1

- No customer login / portal
- No online payment
- No multi-language (Dutch only)
- No live chat widget
- No newsletter signup yet
- No CMS UI — content is edited via MDX in repo

## Marketing handover

See `TODO.md` for the punch-list of placeholders that marketing/branding owns
before launch (final copy, photo assets, KBO + bank, social URLs, GDPR text,
etc.).
