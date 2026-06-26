# AetherData — AI-Powered Data Automation Platform

![AetherData Hero](public/og-image.png)

AetherData is a premium, competition-grade SaaS landing page built for the **FrontEnd Battle 3.0 - VibeCoding Competition**. It transforms a legacy pipeline dashboard into a modern, high-conversion marketing site designed to showcase AI-driven data automation capabilities, strict state isolation, and zero-library CSS motion.

---

## ✨ Key Features

### 1. Dynamic Multi-Currency Pricing Engine (40% Logic Score)
- **Configuration-Driven**: All prices are calculated dynamically from a base INR matrix using accurate multipliers (USD: 0.012, EUR: 0.011).
- **Annual Discount**: Automatically applies a 20% discount when switching to annual billing.
- **State Isolation**: Pricing state is strictly localized to the `Pricing` component. Toggling billing cycles or currencies does *not* trigger re-renders in the Hero, Features, or FAQ sections.

### 2. Bento Grid ↔ Accordion (Responsive Edge Cases)
- **Desktop**: A sleek, CSS-Grid-powered Bento layout with mouse-tracking glassmorphic glow effects.
- **Mobile**: Seamlessly transforms into a vertical Accordion.
- **State Persistence**: If you hover a Bento card and resize the browser to mobile width, that specific card is preserved in state and automatically opens in the Accordion view.

### 3. SEO & Accessibility
- **Semantic HTML5**: Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`.
- **Meta & Open Graph**: Full `og:title`, `og:image`, `twitter:card`, and structured `JSON-LD` data.
- **A11y**: Included a hidden `.skip-to-content` link, strict `:focus-visible` states, and `@media (prefers-reduced-motion: reduce)` support.

---

## 🏗️ Architecture & Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 (Custom Design System in `index.css`)
- **Language**: TypeScript
- **Motion**: 100% Pure CSS Animations (Zero banned libraries like Framer Motion or Radix). Includes custom IntersectionObserver scroll reveals, animated Aurora backgrounds, and gradient borders.
- **Asset Compliance**: Strictly adheres to the provided `DESIGN.md` tokens (JetBrains Mono/Inter typography, Synthetic Intelligence palette, and supplied SVG pack).

### Folder Structure Overview
```text
src/
├── components/         # Isolated feature components
│   ├── Features.tsx    # State orchestrator (Grid ↔ Accordion)
│   ├── Pricing.tsx     # Isolated pricing engine
│   └── ...
├── config/             # Dynamic pricing matrix
├── icons/              # SVG React components (from provided assets)
├── App.tsx             # Zero-state composition root
└── index.css           # Core design system and CSS animations
```

---

## ⚙️ Setup & Deployment

### 1. Local Development
```bash
git clone <repository-url>
cd aetherdata
npm install
npm run dev
```

### 2. Production Build (Recommended for Testing)
```bash
npm run build
npm run start
```

---

## 🚀 Live Demo & Metrics

**[Insert Vercel/Netlify Live Demo Link Here]**

**[Insert link to Demo Video Here]**

### Lighthouse Performance

![Lighthouse Score](public/lighthouse-score.png)

- **Best Practices**: 100/100
- **Accessibility (WCAG)**: 96/100
- **SEO**: 92/100
- **Performance**: 68/100 *(Expected score for CSR React bundle parsing)*

> **Note to Judges:** The above screenshot reflects the Chrome DevTools Lighthouse audit run against the optimized production build (`npm run build`).

---
*Built for the FrontEnd Battle 3.0 - VibeCoding Competition*
