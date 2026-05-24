# AdasaVision – Next.js Website

A production-ready Next.js 15 rebuild of [adasavision.com](https://adasavision.com), replacing WordPress + Elementor with a modern React stack.

---

## ✨ Features

- **Next.js 15 App Router** — server components, ISR, streaming
- **Bilingual**: Arabic (`/`) with full RTL + English (`/en`) with LTR
- **SEO Optimised** — metadata, OpenGraph, sitemap.xml, robots.txt, canonical + hreflang
- **TailwindCSS 3** — dark industrial theme, responsive, mobile-first
- **WordPress REST API integration** — ISR fetch with 1-hour revalidation + on-demand revalidation endpoint
- **Optimised images** via `next/image` with remote pattern allow-list
- **Accessible** — semantic HTML, ARIA labels, skip-to-content
- **Production ready** — TypeScript strict mode, clean component architecture

---

## 🗂 Project Structure

```
adasavision/
├── public/                         # Static assets
├── src/
│   ├── app/
│   │   ├── page.tsx                # Arabic homepage /
│   │   ├── layout.tsx              # Root HTML shell
│   │   ├── loading.tsx             # Suspense fallback
│   │   ├── not-found.tsx           # 404 page
│   │   ├── sitemap.ts              # /sitemap.xml
│   │   ├── robots.ts               # /robots.txt
│   │   ├── globals.css             # Tailwind + custom CSS + RTL
│   │   ├── en/
│   │   │   ├── layout.tsx          # /en layout wrapper
│   │   │   └── page.tsx            # English homepage /en
│   │   └── api/
│   │       └── revalidate/
│   │           └── route.ts        # On-demand ISR revalidation
│   ├── components/
│   │   ├── Header/
│   │   │   └── Header.tsx          # Sticky nav + language switcher + mobile menu
│   │   ├── Hero/
│   │   │   └── Hero.tsx            # Full-screen hero with scan animation
│   │   ├── About/
│   │   │   └── About.tsx           # About + feature grid + stats
│   │   ├── Services/
│   │   │   └── Services.tsx        # 4 service cards with images
│   │   ├── Industries/
│   │   │   └── Industries.tsx      # 6 industry tiles + banner
│   │   ├── Pipeline/
│   │   │   └── Pipeline.tsx        # 3-step how-it-works section
│   │   ├── Contact/
│   │   │   └── Contact.tsx         # Contact info + quick form
│   │   ├── Footer/
│   │   │   └── Footer.tsx          # Footer with nav + language switcher
│   │   └── ui/
│   │       └── LoadingSkeleton.tsx # Page loading skeleton
│   ├── lib/
│   │   └── api.ts                  # WP REST API fetch utilities + static content
│   └── types/
│       └── index.ts                # TypeScript types
├── .env.local                      # Local env variables (git-ignored)
├── .env.example                    # Example env template
├── next.config.ts                  # Next.js config + image domains
├── tailwind.config.ts              # Tailwind theme + custom colours
├── postcss.config.mjs
└── tsconfig.json
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js ≥ 20.x
- npm ≥ 10.x (or pnpm / yarn)

### 1. Clone & Install

```bash
git clone https://github.com/your-org/adasavision.git
cd adasavision
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_WP_API_URL=https://adasavision.com/wp-json/wp/v2
NEXT_PUBLIC_SITE_URL=https://adasavision.com
REVALIDATE_SECRET=your-random-secret-here
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for Arabic, [http://localhost:3000/en](http://localhost:3000/en) for English.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 🌐 Routing

| Route | Language | Direction |
|-------|----------|-----------|
| `/`   | Arabic   | RTL       |
| `/en` | English  | LTR       |

---

## 🔁 Content Revalidation (ISR)

Content is fetched from WordPress at build time and cached. It re-fetches every **1 hour** automatically.

For immediate revalidation after a WP content update, call:

```
POST https://your-domain.com/api/revalidate?secret=YOUR_SECRET&path=/
POST https://your-domain.com/api/revalidate?secret=YOUR_SECRET&path=/en
```

You can add this as a **WordPress webhook** (e.g. via WP plugin like [WP Webhook](https://wp-webhook.com/)) that fires on `post_save`.

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--brand` | `#00aedb` | Primary cyan |
| `--accent` | `#00f0c8` | Teal-green highlight |
| `--dark-900` | `#070d14` | Page background |
| `--dark-800` | `#0c1520` | Card/section background |

**Fonts:**
- Arabic: IBM Plex Sans Arabic (Google Fonts)
- English display: Syne (Google Fonts)
- English body: DM Sans (Google Fonts)

---

## 🌍 RTL Support

RTL is handled at the `<html dir="rtl" lang="ar">` level set per-page in `page.tsx`. TailwindCSS logical properties (`ms-`, `me-`, `ps-`, `pe-`) are used throughout for automatic RTL mirroring. The CSS `direction: rtl` and `font-family: IBM Plex Sans Arabic` are applied via `html[lang="ar"]` selectors in `globals.css`.

---

## 📦 Dependencies

```json
{
  "next": "^15.0.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "tailwindcss": "^3.4.14",
  "typescript": "^5.6.3"
}
```

No external UI libraries needed — everything is built with Tailwind utilities.

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Set environment variables in Vercel Dashboard → Project → Settings → Environment Variables.

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

Add `output: 'standalone'` to `next.config.ts` for Docker builds.

### Other Platforms
Works on any Node.js host: Railway, Render, Fly.io, AWS Amplify, Netlify.

---

## 🔧 Adding a Contact Form Backend

The contact form in `Contact.tsx` currently calls `e.preventDefault()`. To activate it:

**Option A – Formspree (simplest):**
```jsx
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Option B – EmailJS (client-side):**
```bash
npm install @emailjs/browser
```

**Option C – Next.js API Route:**
Create `src/app/api/contact/route.ts` and use Nodemailer or Resend.

---

## 📝 Notes

- The site scrapes content from WP REST API and falls back to the static `AR_CONTENT` / `EN_CONTENT` objects in `src/lib/api.ts`. This means the site **always renders** even if the WP API is down.
- To keep content fully live from WordPress, you can extend `getPageContent()` to parse `content.rendered` HTML (Elementor outputs) using a library like `node-html-parser`.
- Images are served directly from `adasavision.com` CDN via `next/image` with optimisation — no re-hosting needed.
