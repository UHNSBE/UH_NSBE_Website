# UH NSBE Website – Maintainer Guide (simple)

This is the one-pager for future officers to keep the site running and make small changes without deep coding.

If you dislike code or just need to change text/images, read the Quick Edit Guide instead:
- docs/QUICK-EDIT.md

## What this is (plain English)
- Built with Next.js (a website framework) and Tailwind (styles).
- Hosted on Vercel (auto deploys when you push to GitHub main).
- Membership payments use Stripe Checkout. A webhook saves member info to a Google Sheet.

## The 5 things you’ll do most
1) Edit text on a page
- Open the file for that page in `src/app/.../page.tsx` and edit the text between the tags.
- Home: `src/app/page.tsx` | About: `src/app/about/page.tsx` | Partners: `src/app/partners/page.tsx` | Membership: `src/app/membership/page.tsx`.

2) Swap an image or add a logo
- Put the image in `public/...` (e.g., partner logos in `public/partners/`).
- Update the path used in the page file (example: `/partners/linde.jpeg`).

3) Replace the sponsorship PDF
- Save the new file in `public/files/` (keep a similar name like `PartnershipPacket_2025-26.pdf`).
- Update any links that point to the old filename.

4) Change fields on the UH Membership form
- Add/remove inputs in `src/app/membership/uh/page.tsx`.
- Make the same field exist in the checkout metadata in `src/app/api/stripe/checkout/route.ts`.
- If the Google Sheet needs that field, also update `src/app/api/webhooks/register/route.ts` (the object we send to the Apps Script).

5) Update the membership price
- Change the default price of the Stripe Product in the Stripe Dashboard (don’t hardcode a price in code).
- We read the Product’s default price automatically during checkout.

## How to run it on your laptop (once)
1) Install Node.js LTS (version 18 or higher).
2) In a terminal: `npm install`, then `npm run dev`.
3) Create a file named `.env.local` in the project root with these (use test keys for safety):
- NEXT_PUBLIC_SITE_URL=http://localhost:3000
- NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_...
- STRIPE_SECRET_KEY=sk_test_...
- STRIPE_SECRET_WEBHOOK_KEY=whsec_... (only needed if testing webhooks locally)
4) Open http://localhost:3000 to see the site.

## How deploys work
- When you push to GitHub `main`, Vercel builds and deploys automatically.
- Environment variables (secrets) live in Vercel → Project → Settings → Environment Variables.
- Production should use the “live” Stripe keys (pk_live_, sk_live_) and the live webhook secret.

Required env vars (dev and prod):
- NEXT_PUBLIC_SITE_URL → site base URL (http://localhost:3000 in dev; your real domain in prod)
- NEXT_PUBLIC_STRIPE_PUBLIC_KEY → Stripe publishable key (starts with pk_)
- STRIPE_SECRET_KEY → Stripe secret key (starts with sk_)
- STRIPE_SECRET_WEBHOOK_KEY → Stripe webhook signing secret
- NEXT_PUBLIC_STRIPE_DONATE_LINK → public donate link if used on Partners page

Note: The code automatically uses test vs live Stripe based on whether the public key includes `pk_test_`.

## What files matter (quick map)
- Layout/Navigation/Footer: `src/app/layout.tsx`
- Pages: `src/app/<page>/page.tsx` (home is `src/app/page.tsx`)
- Membership form (UH): `src/app/membership/uh/page.tsx`
- After payment page: `src/app/membership/success/page.tsx`
- Create Stripe Checkout Session: `src/app/api/stripe/checkout/route.ts`
- Read back Checkout Session (for receipt): `src/app/api/stripe/session/route.ts`
- Stripe webhook → Google Sheet relay: `src/app/api/webhooks/register/route.ts`
- Images/PDFs: `public/...`

## Stripe in a nutshell (what happens)
1) Student submits the UH membership form.
2) Our server creates a Stripe Checkout Session for the UH Product’s default price.
3) Stripe takes payment and redirects back to our success page.
4) Separately, Stripe calls our webhook; we forward the form details to a Google Apps Script URL that writes to your Sheet.

Where to change things:
- Product IDs: in `src/app/api/stripe/checkout/route.ts` (MEMBERSHIP_PRODUCTS). It switches dev vs prod automatically.
- Google Apps Script endpoint: in `src/app/api/webhooks/register/route.ts` (the fetch URL).

## Simple tests to do after changes
- Open your page locally and click around.
- Submit the form with Stripe test card 4242 4242 4242 4242 (any future date, any CVC).
- See that you land on the success page and that the webhook adds a row to your test Sheet.

## Troubleshooting (copy/paste help)
- Checkout won’t start: check `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` is set and valid. Open the browser console for errors.
- 500 from /api/stripe/checkout: product missing default price or wrong Stripe keys.
- Webhook “signature verification failed”: use the correct `STRIPE_SECRET_WEBHOOK_KEY` for that deployed endpoint.
- Text won’t save characters like apostrophes: use `&apos;` instead of a raw single quote in JSX.

### Do not touch (without help)
- Anything under `src/app/api/...` (backend/Stripe/webhooks)
- The Google Apps Script URL in `src/app/api/webhooks/register/route.ts`
- The membership product mapping in `src/app/api/stripe/checkout/route.ts`
- Project configs: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.mjs`

## Should you build a Squarespace-like editor?
- Short answer: not now. It’s overkill and hard to maintain.
- Practical options:
   1) Keep this repo and teach future maintainers to edit text/images as above (fastest).
   2) If you want a friendly editor later, add a CMS that plugs into Next.js (e.g., Contentlayer for markdown pages, or Sanity/Contentful/Notion). That’s a separate project—do it only if the team asks for it.

## One-time onboarding checklist
- GitHub access + Vercel access + Stripe access.
- Set Vercel env vars (prod) and `.env.local` (dev).
- Do one test payment in DEV with a test card and confirm the Google Sheet gets a row.

Helpful links:
- Stripe Checkout: https://stripe.com/docs/payments/checkout
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs

