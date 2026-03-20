# CyberHub Solutions LLC — Refined Engineering Prompt

## Role
You are a senior full-stack engineer and product designer. Build an enterprise-grade, conversion-optimized marketing website for a cybersecurity consulting firm. Every design and copy decision must reinforce credibility, trust, and expertise—this is the firm's primary sales tool.

---

## Company & Credibility Facts
**Company:** CyberHub Solutions LLC  
**Founder:** Yaw Afuakwah, M.Sc, PMP  
**Certifications:** CISA, CISM, PMP  
**Current role:** Information System Security Officer (ISSO), U.S. Department of Homeland Security (Sep 2023–Present)  
**Prior:** AWS Security Controls Program Manager, Amazon (Oct 2019–Sep 2023)  
**Prior:** Information Technology Specialist, U.S. Navy (Feb 2013–Aug 2019)  
**Expertise:** RMF, FedRAMP, NIST SP 800-53, ISO 27001, SOC 2, cloud security (AWS/Azure/GCP), IAM, AI/ML security (prompt injection, adversarial ML, agentic AI)  
**Location:** Wayne, New Jersey — serving nationwide/remotely  

> ⚠️ Use ONLY these facts. Do not invent client names, case studies, statistics, or awards.

---

## Tech Stack
- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** TailwindCSS + custom CSS variables
- **UI Library:** shadcn/ui (Button, Card, Input, Textarea, Badge, Separator, Accordion)
- **Icons:** lucide-react
- **Animations:** framer-motion (entrance animations, hover micro-interactions)
- **Forms:** Next.js Server Actions; optional email via Resend (env-gated)
- **SEO:** generateMetadata per page + JSON-LD ProfessionalService schema + OG tags

---

## Design Direction

### Aesthetic
**Tone:** High-tech, enterprise/federal-grade, confident — not flashy, not cold.  
**Palette:**
```
--bg-base:        #070c19      /* near-black navy */
--bg-surface:     rgba(12,36,58,0.8)
--bg-card:        rgba(15,23,42,0.9)
--border:         rgba(56,189,248,0.12)
--border-active:  rgba(56,189,248,0.35)
--accent-cyan:    #38bdf8
--accent-indigo:  #818cf8
--text-primary:   #f1f5f9
--text-secondary: #94a3b8
--text-muted:     #64748b
```

**Typography:**
- Display/headings: `Sora` (900 weight, tight tracking −0.02em)
- Body: `Sora` (400/600)
- Monospace labels/badges: `JetBrains Mono`

**Background treatment:**
- SVG grid pattern (0.5px strokes, ~4% opacity) on all hero sections
- Radial gradient glow orbs (cyan + indigo at 5–8% opacity) for depth
- Diagonal accent overlays on hero sections to suggest motion

**Component details:**
- Cards: `border-radius: 16px`, hover lifts `translateY(-4px)` + border brightens
- Buttons: Gradient fill (cyan→light-cyan), `box-shadow: 0 0 32px rgba(56,189,248,0.25)`
- Cert badges: Pill shape, `background: rgba(56,189,248,0.12)`, `JetBrains Mono` font
- Section entrances: `opacity 0→1` + `translateY(28px→0)` via IntersectionObserver, staggered by 80ms

---

## Site Architecture

### Global Layout
- **Sticky top navbar** (64px): Logo mark (shield icon + gradient) + company name + nav links + "Request Consultation" CTA button. Frosted glass background on scroll (`backdrop-filter: blur(20px)`).
- **Footer**: 3-column layout — brand description + legal disclaimer | navigation | expertise list. Bottom bar with © and location.
- **Max content width:** 1120px, `padding: 0 24px`

---

## Pages

### 1. Home (`/`)

**Hero section** (full-viewport, circuit bg):
- Tag line (monospace): `// Veteran-Led. Audit-Ready.`
- Cert badges: CISA · CISM · PMP
- H1 (3-line, large): "Cybersecurity, / **Compliance & Cloud** / Security Consulting" (gradient on middle line)
- Subhead: "Secure cloud and AI systems. Navigate RMF/FedRAMP with confidence. Ship compliant, resilient security programs—built for audit readiness and real-world execution."
- CTAs: Primary "Request a Consultation" + Secondary "View Services"

**Trust strip** (full-width bar, subtle border top/bottom):
- Text items separated by `•`: `DHS ISSO Experience • Former AWS Security Controls PM • US Navy Veteran • CISA Certified • CISM Certified • PMP Certified`
- Monospace font, muted styling — credibility without bragging

**Core Services** (4-column card grid):
Each card has icon, title, 1-sentence description, and 3 deliverable bullets.
1. Cybersecurity Risk Assessments — risk register, findings, remediation roadmap, executive summary
2. RMF / NIST 800-53 Implementation — SSP, control tailoring, evidence, RAR/SAR, POA&M
3. FedRAMP & Compliance Support — readiness assessment, gap analysis, continuous monitoring, audit liaison
4. Cloud Security (AWS/Azure/GCP) — IAM hardening, logging/monitoring, guardrails, security automation

**How We Work** (4-step horizontal):
Large faded step number + colored divider + label + description.
01 Discover → 02 Assess → 03 Implement → 04 Validate & Monitor

**CTA Band**: Dark card with circuit bg — "Ready to Secure Your Organization?" + button

---

### 2. About (`/about`)

**Hero**: Standard hero, tagline "Our Story", H1 "About CyberHub Solutions LLC"

**Founder Section** (2-column):
- Left: Mission narrative (3 paragraphs), "What We Help You Achieve" checklist
- Right: Founder card — placeholder for `/public/founder.jpg` + name + M.Sc, PMP + role title + org + cert badges + focus areas list

**Career Timeline** (vertical, 3 entries):
Grid: date column | dot/line | content column
- DHS ISSO (Sep 2023–Present)
- AWS Security Controls PM (Oct 2019–Sep 2023)  
- U.S. Navy IT Specialist (Feb 2013–Aug 2019)

**Why Choose Us** (4-card grid):
1. Hands-on RMF Expertise
2. AWS Security Pedigree
3. Clear Documentation
4. Audit-Ready Mindset

**CTA Band**

---

### 3. Services (`/services`)

**Hero**: Standard

**Service Detail Blocks** (stacked, full-width cards):
Each block: icon + title + overview paragraph | deliverables checklist | typical engagement description.

Services:
- A) Cybersecurity Risk Assessments
- B) RMF / NIST 800-53 Implementation
- C) FedRAMP & Compliance Support
- D) Cloud Security (AWS/Azure/GCP)
- E) AI/ML & Agentic AI Security ← marked PREMIUM (indigo accent instead of cyan)

**FAQ Accordion** (7 questions):
Expand/collapse with chevron animation. Topics: RMF basics, FedRAMP timeline, onboarding requirements, federal vs commercial, AI security approach, ongoing vs point-in-time, remote vs on-site.

**CTA Band**

---

### 4. Contact (`/contact`)

**Hero**: Standard

**Two-column layout:**

Left — Contact Info:
- Location: Wayne, NJ (Serving nationwide)
- Email: [placeholder — easy to update]
- Phone: [placeholder — easy to update]
- Hours: Mon–Fri, 9am–6pm ET
- "Book a Consultation" card → Calendly link (env var `CALENDLY_URL`)

Right — Contact Form (inside glass card):
Fields: Full Name*, Email*, Organization*, Phone (optional), Message*  
On submit: Server Action → console log (+ Resend if `RESEND_API_KEY` set)  
Success state: Centered checkmark icon + confirmation message (replaces form)

---

## Server Action (Contact Form)
```typescript
// app/actions/contact.ts
'use server'
export async function submitContact(data: ContactFormData) {
  console.log('[Contact Form]', data);
  if (process.env.RESEND_API_KEY) {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'contact@cyberhubsolutionsllc.com',
      to: 'info@cyberhubsolutionsllc.com',
      subject: `New inquiry from ${data.name} — ${data.org}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nOrg: ${data.org}\nPhone: ${data.phone}\n\n${data.message}`,
    });
  }
  return { success: true };
}
```

---

## SEO Configuration
```typescript
// Default metadata (layout.tsx)
export const metadata = {
  title: { default: 'CyberHub Solutions LLC', template: '%s | CyberHub Solutions LLC' },
  description: 'Veteran-led cybersecurity and compliance consulting — RMF, FedRAMP, NIST 800-53, cloud security (AWS/Azure/GCP), and AI/ML security.',
  openGraph: { images: ['/og.jpg'], type: 'website' },
};

// JSON-LD (in layout or home page)
const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "CyberHub Solutions LLC",
  "description": "Cybersecurity and compliance consulting — RMF, FedRAMP, NIST 800-53, cloud security",
  "address": { "@type": "PostalAddress", "addressLocality": "Wayne", "addressRegion": "NJ" },
  "areaServed": "US",
  "founder": { "@type": "Person", "name": "Yaw Afuakwah", "honorificSuffix": "M.Sc, PMP, CISA, CISM" },
};
```

---

## Environment Variables
```bash
# .env.local
RESEND_API_KEY=re_xxxx            # Optional: enables email delivery
CALENDLY_URL=https://calendly.com/your-link  # Book consultation CTA
```

---

## File Structure
```
app/
  layout.tsx              # Global layout, nav, footer, fonts, SEO
  page.tsx                # Home
  about/page.tsx
  services/page.tsx
  contact/page.tsx
  actions/contact.ts      # Server action
components/
  nav.tsx
  footer.tsx
  cta-band.tsx
  circuit-bg.tsx          # SVG grid + glow orb background
  service-card.tsx
  fade-in.tsx             # IntersectionObserver wrapper
  cert-badge.tsx
public/
  founder.jpg             # Replace with actual headshot
  og.jpg                  # OpenGraph image
```

---

## Quality Criteria
- [ ] Lighthouse Performance ≥ 90, Accessibility ≥ 90
- [ ] No mock data, stats, or client names beyond what's specified
- [ ] Active nav state highlighted on all 4 routes
- [ ] Form validation + accessible error states
- [ ] Mobile-responsive at 375px, 768px, 1280px breakpoints
- [ ] All copy is factually accurate to credibility facts above
- [ ] Consistent hover states on all interactive elements
- [ ] CTA button visible on every page (nav + in-page)

---

## README Requirements
Include a `README.md` with:
1. `npm install && npm run dev` instructions
2. Where to edit contact email/phone (`components/contact-info.ts` or similar constant file)
3. How to replace `/public/founder.jpg`
4. How to set `RESEND_API_KEY` and `CALENDLY_URL`
5. Where to update copy per page
