# Deploying this site

This is a TanStack Start (React 19 + Vite + Tailwind v4) site with no database or backend — everything is static content and server-rendered pages.

## Deploy to Vercel

1. Push this folder to a Git repository (GitHub, GitLab or Bitbucket).
2. In Vercel, choose **Add New → Project** and import the repository.
3. Leave all settings at their defaults — Vercel detects the build automatically:
   - **Build command:** `npm run build` (or bun/pnpm, depending on the lockfile you commit)
   - **Output:** handled automatically by the included Nitro build (Vercel preset is auto-selected when building on Vercel)
4. Click **Deploy**.

Or from the terminal:

```sh
npm install
npx vercel
```

## Run locally

```sh
npm install
npm run dev
```

Then open http://localhost:3000.

## Notes

- All editable copy (headlines, project case studies, contact links) lives in `src/content/site.ts`.
- Images are bundled with the code in `src/assets/` — no external asset hosting needed.
- The CV is served from `public/cv/bhaskar-rao-sunkari-cv.pdf`.
