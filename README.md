# Jeffry Santiago — Portfolio

Personal portfolio for Jeffry Santiago, built with React, Vite, TypeScript and Tailwind CSS.

## Run locally

```bash
pnpm install
pnpm dev
```

Production build:

```bash
pnpm build
pnpm preview
```

## Replace the photo and CV

- The portrait is `public/profile.jpg`. Replace that file to update the photo.
- Download CV uses `public/JeffrySantiagoCVEnglish.pdf` for English and `public/JeffrySantiagoCVEspanol.pdf` for Spanish.
- RDIntelligence demo: `https://rdintelligence.netlify.app/` (`RD_INTELLIGENCE_URL` in `src/data/site.ts`).

## Languages and theme

English and Spanish are available from the navbar. The choice is stored in `localStorage`, as is the light or dark theme. English is the default.
