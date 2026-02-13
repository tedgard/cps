# CPS Web App

Production-ready React + TypeScript + Vite app for the Creative Problem Solving (CPS) knowledge base.

## Tech Stack

- React 19
- React Router 7
- TypeScript 5
- Vite 7
- ESLint 9

## Local Development

```bash
npm install
npm run dev
```

## Quality Gates

```bash
npm run check
```

This runs:

- `npm run lint`
- `npm run typecheck`

## Production Build

```bash
npm run build
npm run preview
```

Build output is generated in `/dist`.

## Environment Variables

Create a local env file from `.env.example` and set your public site URL:

```bash
VITE_SITE_URL=https://cps.edgardn.top
```

`VITE_SITE_URL` is used for canonical URLs and social metadata (`og:url`, `og:image`, Twitter cards).

## Metadata and Branding

The app includes:

- Route-level SEO metadata management (`/src/components/Seo.tsx`)
- Production favicon/icon set (`/public/favicon.ico`, `/public/favicon.svg`, `/public/favicon-16x16.png`, `/public/favicon-32x32.png`, `/public/apple-touch-icon.png`)
- Social preview image (`/public/og-image.svg`)
- Web app manifest (`/public/site.webmanifest`)
- Robots directives (`/public/robots.txt`)
