# Diamond Clean NH — Premium Cleaning Website

A luxurious, fully responsive marketing site for a Berlin cleaning company. Apple × Tesla × premium German service aesthetic: lots of white space, navy text, red accents only for actions, glassmorphism, smooth animations, and a bilingual English/German toggle. Contact and quote requests are stored in the database and emailed to the business.

## Brand & Foundations

- **Colors** (design tokens in `src/styles.css`): Primary Red `#B3132D`, Deep Navy `#0F1235`, White `#FFFFFF`, Light Gray `#F7F8FA`. Navy text on white; red reserved for buttons/highlights.
- **Typography**: Poppins (headings, bold) + Manrope (body), self-hosted via `@fontsource` packages.
- **Logo**: The uploaded Diamond Clean NH logo, added as a Lovable asset and used in the nav and footer.
- **Motion**: Framer Motion for fade-in-on-scroll, hover lifts, floating sparkles, animated counters.
- **Icons**: Lucide.

## Language toggle (EN/DE)

- A lightweight React context holds the active language (persisted to `localStorage`), with a toggle in the sticky nav.
- All copy lives in a single `translations` dictionary (`en` / `de`) so both languages stay in sync. Content defaults to the English copy from the brief; German is a professional translation of the same.

## Page structure (single scrolling landing page + legal routes)

Main route `/` composed of sections, each with smooth-scroll anchor nav:

1. **Sticky nav** — logo, section links, language toggle, red "Get Quote" button. Scroll progress indicator bar on top.
2. **Hero** — full-width premium background image (AI-generated luxury office being cleaned), headline, subheading, "Get Free Quote" + "Call Now" buttons, elegant floating sparkle animation, logo.
3. **About** — story copy + supporting image + trust points (Experience, Reliable Staff, Eco Friendly, Customer Satisfaction) with animated counters.
4. **Services** — premium cards with icons for all 10 services, hover animation.
5. **Why Choose Us** — 8 benefit items with icons in a spacious grid.
6. **Our Process** — 4-step animated timeline.
7. **Gallery** — masonry grid of AI-generated cleaning images, hover zoom, click-to-open lightbox.
8. **Testimonials** — 6 elegant review cards (5 stars, name, location, review).
9. **FAQ** — accordion (shadcn) with the 5 questions.
10. **CTA** — dark navy band, "Ready for a Spotless Space?", red quote button.
11. **Contact** — company details, working hours, Google Maps embed (keyless iframe for An der Villa Bolle 9A, 12557 Berlin), and the contact/quote form.
12. **Footer** — logo, quick links, social icons, copyright.

Separate routes for **Privacy Policy** (`/privacy`) and **Imprint / Impressum** (`/imprint`) with their own `head()` metadata (legally expected for a German business), each bilingual.

## Premium extras

Smooth scrolling, scroll progress bar, sticky nav, back-to-top button, floating WhatsApp button (links to `wa.me/491746747501`), lazy-loaded images, micro-interactions, premium shadows, rounded UI. Per-route SEO `head()` with real title/description/OG tags; single H1; semantic HTML; alt text.

## Backend (Lovable Cloud) — form that stores leads + sends email

1. Enable Lovable Cloud.
2. **`leads` table** — `id`, `name`, `email`, `phone`, `message`, `service` (nullable), `created_at`. RLS: `anon` + `authenticated` may `INSERT` only (no public read); `service_role` full access. Explicit GRANTs included.
3. Set up Lovable email infrastructure (email domain + infra) so app emails can send.
4. A **public action route** (`/api/public/*`) validates the form input with Zod, inserts the lead, then sends a notification email to `diamondclean.nh@gmail.com` and a confirmation email to the submitter — both bilingual-aware React Email templates.
5. Form UI (shadcn + react-hook-form + zod) with client + server validation, loading state, success/error toasts.

## Technical notes

- Stack is the project's TanStack Start + React + Tailwind v4 (equivalent to the requested React/Tailwind/Framer Motion; Next.js patterns are not used here).
- Contact form posts to the public server route (no auth needed for a public quote form); the route handles DB insert + email.
- Google Maps uses a standard keyless embed iframe (no API key required).
- Images generated to match the premium brand rather than embedding the reference site.

## What I need from you later (optional)

- Real Privacy/Imprint legal text (I'll add professional placeholder content you can replace).
- Confirmation that `diamondclean.nh@gmail.com` is where quote notifications should go (used as-is from the brief).
