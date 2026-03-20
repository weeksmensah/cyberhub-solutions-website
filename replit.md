# CyberHub Solutions LLC - Marketing Website

## Overview
Enterprise-grade marketing website for a veteran-led cybersecurity consulting firm. Dark, high-tech aesthetic with cyan/indigo accent colors. 4 pages: Home, About, Services, Contact.

## Tech Stack
- Frontend: React + TypeScript + Vite + Tailwind CSS
- Backend: Express.js
- Routing: wouter (client-side)
- Fonts: Sora (headings/body), JetBrains Mono (badges/labels)
- Icons: lucide-react

## Project Structure
```
client/src/
  App.tsx              - Main app with routing (/, /about, /services, /contact)
  index.css            - Dark cybersecurity theme tokens
  components/
    nav.tsx            - Sticky navbar with frosted glass effect
    footer.tsx         - 3-column footer
    circuit-bg.tsx     - SVG grid + glow orb background effect
    fade-in.tsx        - IntersectionObserver animation wrapper
    cert-badge.tsx     - Pill-shaped certification badge
    cta-band.tsx       - Reusable CTA section
  pages/
    home.tsx           - Hero, trust strip, services grid, how we work, CTA
    about.tsx          - Founder bio, career timeline, why choose us
    services.tsx       - 5 service blocks, FAQ accordion
    contact.tsx        - Contact info + form (POST /api/contact)
    not-found.tsx      - 404 page

server/
  routes.ts            - POST /api/contact endpoint
  storage.ts           - Contact form logging

shared/
  schema.ts            - Zod validation schema for contact form
```

## Configuration
- Contact email/phone: Edit `client/src/pages/contact.tsx` contactInfo array
- Calendly link: Update href in contact.tsx "Book a Consultation" section
- Founder photo: Replace placeholder in `client/src/pages/about.tsx`
- Copy per page: Edit the respective page file in `client/src/pages/`

## Design Theme
- Background: near-black navy (#070c19)
- Accent: cyan (#38bdf8) + indigo (#818cf8)
- Text: #f1f5f9 (primary), #94a3b8 (secondary), #64748b (muted)
- Cards: glass morphism with subtle cyan borders
- All pages share circuit grid SVG background pattern

## Running
```bash
npm run dev
```
Frontend and backend served on port 5000.
