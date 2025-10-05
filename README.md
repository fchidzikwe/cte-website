# Cliff and Tony Energy — Next.js Site

Modern, secure, and professional website using **Next.js 14**, **Tailwind**, dark/light modes, material-inspired **glassy** components, and a dynamic **Projects** gallery that reads images from `/public/projects` (file name becomes the project title).

## Quick Start

```bash
npm i
npm run dev
```

## Deploy to Vercel
1. Push to a GitHub repo.
2. Import in Vercel (Framework: Next.js).
3. Set your custom domain, e.g., `cliffandtonyenergy.com`.
4. Done.

## Add Projects Dynamically
Drop images into `public/projects/`. For example:
- `public/projects/Owner’s Engineer role for a 207kWp commercial solar PV-PPA.jpeg`
- `public/projects/Grid Code compliance studies for a 5MW solar PV plant in Namibia.png`

On build, the Projects page auto-lists them. The **file name** (without extension) is used as the project title.

## Security
Basic security headers are set in `next.config.js`. No third-party cookies by default. Ready for stricter CSPs later.

## Tech
- Next.js 14 (App Router)
- Tailwind 3.4
- next-themes (dark/light)
- No server-side DB required

## Structure
```
app/
  layout.tsx
  page.tsx
  projects/page.tsx
  api/health/route.ts
components/
  Header.tsx
  Footer.tsx
  ThemeToggle.tsx
  Hero.tsx
  Card.tsx
data/
  site.ts
public/
  logo.png (placeholder)
  projects/ (images go here)
tailwind.config.js
```

---

If you want a CMS (Sanity/Contentlayer) later, the structure is compatible.
