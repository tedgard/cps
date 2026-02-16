# CPS

A method-focused archive site for Win Wenger's Creative Problem Solving techniques. Built with React 19, TypeScript, and Vite.

**Live:** [cps.edgardn.top](https://cps.edgardn.top)

## What this site covers

- **Image Streaming** - 7-step discovery protocol with session templates and troubleshooting
- **Predictive Imagery** - Pre-study priming workflow with journal tracking
- **Technique Atlas** - 8 CPS methods (Over-the-Wall, Borrowed Genius, Toolbuilder, etc.) with situation-based selection
- **Legacy** - Historical timeline of Project Renaissance (1970s-2014)
- **References** - 15 primary sources from winwenger.com, linked to every claim via source IDs

All content is sourced from Wenger's archive material. Each claim carries traceable source references (R1-R15).

## Tech stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | React 19 + React Router 7          |
| Language    | TypeScript 5.9 (strict mode)       |
| Build       | Vite 7                              |
| Styling     | Vanilla CSS with custom properties  |
| Fonts       | Inter (UI) + Source Serif 4 (body)  |
| Linting     | ESLint 9 (flat config)             |

Zero runtime dependencies beyond React and React Router. All content is static (no API calls).

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command            | Description                              |
|--------------------|------------------------------------------|
| `npm run dev`      | Start dev server with HMR                |
| `npm run build`    | Type-check + production build            |
| `npm run preview`  | Preview production build locally         |
| `npm run lint`     | Run ESLint (zero warnings enforced)      |
| `npm run typecheck`| Run TypeScript compiler check            |
| `npm run check`    | Run lint + typecheck together            |

## Project structure

```
src/
  components/     Reusable UI (layout, SEO, page headers, source badges, error boundary)
  pages/          Route pages (Home, Legacy, Image Streaming, Predictive Imagery, Technique Atlas, References, 404)
  config/         Site-level constants and SEO config
  data/           All content data with typed exports (15 references, 8 techniques, 40+ sections)
  App.tsx          Router setup
  App.css          Design system (CSS custom properties, all component styles)
  index.css        Reset and base typography
public/
  favicon.svg      SVG favicon
  og-image.svg     Social preview image
  site.webmanifest PWA manifest
  sitemap.xml      Sitemap
  robots.txt       Robots directives
```

## Environment variables

Copy `.env.example` and set your deployment URL:

```bash
VITE_SITE_URL=https://cps.edgardn.top
```

Used for canonical URLs, Open Graph tags, and Twitter Card metadata. Falls back to `window.location.origin` if not set.

## Design

Dark indigo theme with violet (`#8b5cf6`) as the primary brand color, amber and teal accents. Features gradient text headings, glassmorphic navigation, animated ambient background glows, and interactive hover states on all cards. Fully responsive with accessibility support (skip links, focus outlines, reduced motion).

## Production build

```bash
npm run build
```

Outputs to `dist/`. Includes hidden source maps, a Vite manifest, and vendor chunk splitting for React dependencies.

## License

This is a tribute project. All referenced content belongs to Win Wenger and the Project Renaissance archive.
