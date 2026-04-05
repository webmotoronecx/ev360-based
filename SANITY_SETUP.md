# Sanity CMS Setup

The site uses Sanity as a headless CMS. Content lives in Sanity; the site fetches from it at build/request time. If Sanity isn't configured, the site falls back to static content in `config/site.config.ts` — so local dev works without Sanity.

## One-time setup (per project)

### 1. Create a Sanity account and project

1. Go to https://sanity.io/manage
2. Sign up (free — no credit card)
3. Click **"Create new project"**
4. Name it (e.g., "EV360")
5. Dataset name: `production` (default)
6. Copy the **Project ID** from the project dashboard

### 2. Add the project ID to this repo

Create `.env.local` in the project root (copy from `.env.local.example`):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Add the same env vars to Vercel

1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = your project id
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
3. Apply to Production + Preview + Development
4. Redeploy

### 4. Configure CORS in Sanity

So the Studio can talk to your project:
1. In https://sanity.io/manage, open your project
2. Go to **API** → **CORS Origins**
3. Add:
   - `http://localhost:3000` (with credentials)
   - `https://ev360-based.vercel.app` (with credentials)
   - Your custom domain (when you have one)

### 5. Open the Studio and add content

1. Run `npm run dev`
2. Visit `http://localhost:3000/studio`
3. Log in with the same account you used at sanity.io/manage
4. Fill in **Site Settings** and **Hero Section**
5. Publish

The Studio is also available at `https://YOUR-SITE.vercel.app/studio` once deployed.

## What's editable right now

- **Site Settings**: site name, tagline, meta description, logo image, logo alt text, navigation links, primary CTA
- **Hero Section**: headline, sub, background image, theme (dark/light), primary + secondary CTAs, brand marquee (eyebrow + brand logos with name/upload/URL/invert)

More sections will be added over time (Footer, homepage sections, all inner pages).

## How the fallback works

Every content field checks Sanity first; if it's empty, missing, or Sanity is unconfigured, it falls back to `config/site.config.ts`. This means:

- Clients can edit **only what they want to change** — leave other fields blank to keep the defaults
- The site never breaks if Sanity is down (fetch errors log a warning and use fallback)
- You can fork this repo for a new client, skip Sanity entirely, and just edit `site.config.ts` for a static build

## Per-client deployment model

For each new client:
1. They get their own Sanity project (free) with their own Project ID
2. Fork the repo (via GitHub template) → create new Vercel project → new env vars with their Project ID
3. They edit their own Studio at `clientsite.com/studio`

Clients can NEVER see each other's content — completely isolated.
