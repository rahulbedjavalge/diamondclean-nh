# Diamond Clean NH — Refinements & Service Pages

Based on the reference site (msreinigungservice.com) and your notes.

## 1. Remove numbers & stats
- **About section**: delete the 4-column animated counters block (Happy Clients, Years Experience, Cleanings Done, Insured) and the floating "10+ Years" badge over the photo.
- **Hero**: remove the stats row (100% Satisfaction / 500+ / Eco).
- Clean up now-unused `AnimatedCounter` usage and `counters` data.

## 2. Remove "Our Work"
- Remove the Gallery ("Our Work") section from the homepage and from the nav/footer links.

## 3. Logo changes
- **Header**: increase logo size (from ~44px tall to ~64px) so it reads clearly.
- **Header visibility fix**: the header is currently transparent over the dark hero, so the dark logo/links are invisible at the top of the page. Give the header a solid, always-visible background (white with subtle shadow) from the first paint — no more invisible start state.
- **Footer**: replace the text/icon logo with the actual uploaded logo image, shown larger, on a light chip so it stays visible against the dark navy footer.

## 4. Services — like the reference site
Replace the current 10-card grid with **4 service categories**, matching msreinigungservice, each opening its **own page**:

1. Hotel Housekeeping
2. Staffing (Personalbesetzung)
3. Restaurant Cleaning
4. Commercial Cleaning

Structure:
- **Homepage Services section**: 4 image cards, each linking to its detail page ("Learn more").
- **Nav**: keep your current links (About, Services, Why Us, Process, Contact) and turn **Services** into a dropdown listing the 4 service pages (opens on hover/click, works on mobile too).
- **4 new detail routes**: `/services/hotel-housekeeping`, `/services/staffing`, `/services/restaurant-cleaning`, `/services/commercial-cleaning`. Each is a real page (own URL, own SEO `head()` title/description) with a hero image, description, bullet points, and a "Request a quote" CTA back to contact.
- All content bilingual (EN/DE) via the existing translations system. German labels mirror the reference: Hotelreinigung / Personalbesetzung / Restaurantreinigung / Gewerbereinigung.

## Technical notes
- New files: `src/routes/services.hotel-housekeeping.tsx`, `services.staffing.tsx`, `services.restaurant-cleaning.tsx`, `services.commercial-cleaning.tsx`, and a shared `ServiceDetail` component.
- Reuse existing premium service images already in `src/assets` (hero + gallery images) for the cards and detail heroes; no reference-site images copied.
- Nav dropdown built with existing shadcn primitives + Framer Motion; mobile menu gets an expandable Services group.
- Update `src/lib/translations.ts`: trim services to the 4 categories, add per-page detail copy, remove `counters`, update nav/footer link lists.
- Footer logo uses the existing `logo.jpeg.asset.json` image asset.

No backend or contact-form changes.
