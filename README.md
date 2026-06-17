# Ariel Bonfim — Linux Video Editor Portfolio

One-page Next.js portfolio site with a Linux terminal aesthetic.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + Global CSS
- **Fonts**: JetBrains Mono (headings/terminal) + Roboto (body)
- **Icons**: react-icons
- **Hosting**: Vercel (via GitHub)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Project Structure

```
app/
  layout.tsx      # Root layout, fonts, SEO metadata
  page.tsx        # Main page (all sections assembled)
  globals.css     # Design tokens, animations, utilities

components/
  Navbar.tsx / .module.css
  Hero.tsx / .module.css
  WhyItMatters.tsx / .module.css
  About.tsx / .module.css
  Services.tsx / .module.css
  Portfolio.tsx / .module.css
  Values.tsx / .module.css
  Contact.tsx / .module.css
  Footer.tsx / .module.css
  FloatingContact.tsx / .module.css
```

## Adding Your Images

Look for `img-placeholder` divs with descriptive labels:

| Label | Section | Suggested image |
|---|---|---|
| `[ HERO PHOTO ]` | Hero | Your portrait photo |
| `[ SETUP / WORKSPACE PHOTO ]` | Why It Matters | Your desk/setup |
| `[ ABOUT PHOTO ]` | About | Candid or editorial photo |

Replace the `<div className="img-placeholder">` with a `<Image>` component (next/image).

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project → Select repo
3. No build config needed — Vercel auto-detects Next.js
4. Done ✔

## Contact Info

- Email: arielbonfim@gmail.com
- Instagram: @arielsbonfim
- WhatsApp: +55 21 99296-3658
- LinkedIn: linkedin.com/in/ariel-leon-socio-bonfim
