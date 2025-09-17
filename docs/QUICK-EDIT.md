# UH NSBE Website – Quick Edit Guide (no coding)

Use this when you just need to change text, swap an image, or upload a PDF.

## You’ll use only the GitHub website
- No terminal. No Node. No local setup.
- All edits happen in your browser. Vercel will auto-deploy.

## Flow (safe)
1) Go to the repo on GitHub → Click “Create new branch” from main (name it like `content-update-<date>`).
2) Make edits in-browser (see tasks below) → Commit to your branch.
3) Open a Pull Request (PR) → Vercel creates a Preview URL.
4) Click the Preview link → Verify the change.
5) Click “Merge” when it looks good → Vercel deploys to production.
6) If something’s wrong → Click “Revert” on the PR to roll back.

## Common tasks

1) Edit text on a page
- Browse to `src/app/<page>/page.tsx` (home is `src/app/page.tsx`).
- Click the pencil icon to edit.
- Change the text between tags, avoid deleting angle brackets `< >`.
- Commit the change to your branch.

2) Swap an image or partner logo
- Go to `public/partners/` (or another `public/...` folder) in GitHub.
- Click “Add file” → “Upload files” → Upload the new image.
- If the filename changed, edit the page that uses it (e.g., `src/app/partners/page.tsx`) and update the path like `/partners/new-logo.png`.

3) Replace the sponsorship PDF
- Go to `public/files/` → “Upload files” → add your `PartnershipPacket_YYYY-YY.pdf`.
- Find places linking to the old file and update the filename.

4) Change the membership form labels/options (minor)
- File: `src/app/membership/uh/page.tsx`.
- You can safely change visible labels (the words users see) and dropdown options.
- Do NOT rename the `name="..."` attributes unless you also update server files (ask a dev or follow the Maintainer Guide).

## What NOT to touch (without help)
- Files in `src/app/api/...` (Stripe/webhooks/backend).
- The `MEMBERSHIP_PRODUCTS` map in `src/app/api/stripe/checkout/route.ts`.
- The Google Apps Script URL in `src/app/api/webhooks/register/route.ts`.
- `package.json`, `tsconfig.json`, `next.config.mjs`, or `tailwind.config.ts`.

## Publishing
- After you merge the PR, Vercel deploys live automatically in a few minutes.
- To undo: open the merged PR → “Revert”.

## Need help?
- If the preview doesn’t build, ping someone with GitHub/Vercel access, or follow the Maintainer Guide for env/Stripe details.
