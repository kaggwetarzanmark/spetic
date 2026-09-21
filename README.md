# Septic Wranglers — Central Texas Septic & Wastewater Trade Website

[![Next.js 15](https://img.shields.io/badge/Next.js-15.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![CSS3](https://img.shields.io/badge/Styling-Vanilla_CSS-orange?style=flat&logo=css3)](app/globals.css)
[![TCEQ Registered](https://img.shields.io/badge/TCEQ_Licensed-%23OS0034921-rust?style=flat)](https://www.tceq.texas.gov/)

A modern, high-performance web platform built for **Septic Wranglers**, an authentic, owner-operated septic and wastewater service company serving Austin, Dripping Springs, Lakeway, Buda, Kyle, Blanco, and the greater Texas Hill Country.

Designed from the ground up with a **rustic, Western, small-town Texas trade aesthetic** ("clean industrial meets Texas utility craft"), prioritizing instant conversion, transparent pricing, verified customer reviews, and complete OSSF trade education.

---

## Table of Contents

- [Brand & Trade Identity](#brand--trade-identity)
- [Design System & Palette (60/30/10)](#design-system--palette-603010)
- [Key Features](#key-features)
- [Architecture & Route Directory](#architecture--route-directory)
- [Dedicated Services (10 Trade Pages)](#dedicated-services-10-trade-pages)
- [Lead-Generation Funnel (/septicquote)](#lead-generation-funnel-septicquote)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [License & Credits](#license--credits)

---

## Brand & Trade Identity

- **Owner & Founder**: Jeff Uskert (Lead Wrangler)
- **Tagline**: *"Real Texans. Real Trucks. Real Work."*
- **Operating Philosophy**: *"If we wouldn't do it on our own septic system, we won't do it on yours. That's the law."*
- **Direct Hotline**: `(512) 976-2266` (No offshore call centers or commissioned salespeople)
- **License**: Texas Commission on Environmental Quality (TCEQ) Registered Hauler `#OS0034921`
- **Equipment**: Heavy-duty 2,500-gallon high-vacuum commercial pumper monsters
- **Disposal Guarantee**: 100% legal, manifested disposal at state-regulated municipal wastewater utilities

---

## Design System & Palette (60/30/10)

The visual system strictly avoids sterile tech-white templates, utilizing an earthy, durable Texas tradesman palette:

| Role | Color | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **60% Dominant** | Warm Cream / Aged Paper | `#FAF6EE` | Primary page canvas, cards, and reading surfaces |
| **30% Secondary** | Tan / Khaki Band | `#E2D3BE` | Alternating section bands, borders, and structured card backgrounds |
| **30% Secondary** | Deep Charcoal-Brown | `#241D17` | Contrast hero bands, closing CTA banners, and site-wide footer |
| **10% Accent** | Burnt Rust-Orange | `#D33A18` | Primary CTA buttons, kickers, live indicators, and hover accents |
| **Borders** | Tan Sturdy Border | `#C6B398` | Hard-edged card boundaries and structural dividers |

### Typography
- **Display Headings**: `Bebas Neue` & `Anton` (All caps, condensed, bold Western display)
- **Section Kickers**: Small uppercase, wide letter-spaced kickers (`letter-spacing: 0.18em`) in rust-orange
- **Editorial & Body**: `Lora` (Warm serif for readable longform copy, pull-quotes, and trade explanations)

---

## Key Features

1. **Minimalist 2-Column Services Navigation**:
   - Compact, centered 560px dropdown with subtle trade icons, smooth hover transitions, and a 1-line emergency hotline footer.
   - Organized cleanly into **Residential Care** and **Specialized & Commercial**.
   - Fully accessible with a 200ms grace hover bridge and Escape/outside-click listeners.
   - Clean, touch-optimized mobile drawer accordion (≥44px tap targets).

2. **10 Dedicated Trade Service Pages (`/services/[slug]`)**:
   - Individual, SEO-optimized landing pages for every trade specialty.
   - Standardized 11-section architecture: Breadcrumb hero, trust ticker, plain-English trade definitions, 4 trigger cards, step-by-step process walkthroughs, checklists, warning signs, transparent pricing ranges, interactive client FAQ accordions, and related service links.

3. **Standalone Paid-Ads Lead-Generation Funnel (`/septicquote`)**:
   - Isolated from main navigation and footer to eliminate traffic leaks.
   - 16-step interactive diagnostic quiz with upfront lead capture (Name, Email, Phone, ZIP).
   - Dynamic results engine: SVG visual risk gauge meter (0–100 score), tailored diagnostic findings, and urgency-based routing (Same-Day Emergency Dispatch vs. Routine Maintenance).

4. **Verified Social Proof & Customer Reviews**:
   - Google Review badge (`4.9 / 5.0 Rating • 280+ Reviews`).
   - Authentic homeowner testimonials featuring specific Central Texas communities (Dripping Springs, Lakeway, Wimberley, Buda, Austin, and Blanco).

5. **Interactive Tools**:
   - **Cost Calculator** ([`components/CostCalculator.tsx`](components/CostCalculator.tsx)): Instant estimates based on tank capacity, soil conditions, and service type.
   - **Service Area ZIP Checker** ([`components/ZipChecker.tsx`](components/ZipChecker.tsx)): Live territory verification.
   - **Direct Dispatch Booking Form** ([`components/BookingForm.tsx`](components/BookingForm.tsx)).

---

## Architecture & Route Directory

All 22 pages are statically generated (`SSG`) at build time for instant page loads:

```
├── /                                   # Home (Flagship Overview & Testimonials)
├── /about                              # About (Jeff Uskert, Fleet, 4 Core Rules)
├── /coverage                           # Service Area Directory & County Guide
├── /service-area                       # Local Municipality Dispatch Guide
├── /pricing                            # Transparent Rate Schedule & Cost Drivers
├── /resources                          # Texas Homeowner Septic Guide & FAQs
├── /contact                            # Schedule Dispatch & Direct Phone Hotline
├── /septicquote                        # Standalone Paid-Traffic Lead-Gen Funnel
│
├── /services                           # Redirects seamlessly to /services/septic-tank-pumping
└── /services/[slug]                    # Dedicated Individual Trade Service Pages:
    ├── /services/septic-tank-pumping
    ├── /services/septic-inspection
    ├── /services/system-installation
    ├── /services/septic-repairs
    ├── /services/drain-field-repair
    ├── /services/emergency-septic-service
    ├── /services/grease-trap-pumping
    ├── /services/aerobic-septic-service
    ├── /services/septic-tank-locating
    └── /services/commercial-septic-service
```

---

## Dedicated Services (10 Trade Pages)

| Service | Slug | Core Focus |
| :--- | :--- | :--- |
| **Septic Tank Pumping** | `septic-tank-pumping` | 100% full-depth bottom solids & crust evacuation (2,500-gal rigs) |
| **Septic Inspection** | `septic-inspection` | Real estate pre-sale, escrow certs, dye tests & camera scopes |
| **System Installation** | `system-installation` | Turnkey conventional & caliche OSSF engineered for rocky soil |
| **Septic Repairs** | `septic-repairs` | Broken baffles, cracked riser lids, effluent pumps & float switches |
| **Drain Field Repair** | `drain-field-repair` | Biomat digestion, lateral line jetting & drainfield rejuvenation |
| **Emergency Service** | `emergency-septic-service` | 24/7 rapid dispatch for backups, high-water alarms & overflows |
| **Grease Trap Pumping** | `grease-trap-pumping` | Commercial kitchens, restaurants, FOG removal & city manifests |
| **Aerobic System Care** | `aerobic-septic-service` | Mandatory testing, air compressors, chlorinators & spray heads |
| **Tank Locating** | `septic-tank-locating` | Electronic underground sonar tracking (no blind lawn digging) |
| **Commercial Septic** | `commercial-septic-service` | Ranches, wedding venues, wineries, RV parks & commercial holding tanks |

---

## Lead-Generation Funnel (/septicquote)

The `/septicquote` funnel is engineered specifically for paid Google/Meta search campaigns:

1. **Hero**: Frustration hook targeting aging or unknown septic systems.
2. **Value Prop**: System age risks, maintenance blind spots, and cost exposure.
3. **Step 0 Contact Capture**: Name, Email, Phone, and ZIP captured before questions begin.
4. **Questions 1–10**: Scored evaluation analyzing system age, household size, pumping history, drain speeds, and vegetation flags.
5. **Questions 11–15**: Urgency and motivation qualifying questions.
6. **Results Engine**: 
   - SVG visual score meter (0–100 Risk Index).
   - Dynamic 3-point diagnostic findings selected from 10 programmatic trade insights.
   - Contextual CTA branching (High-Risk Same-Day Inspection vs. Maintenance Checklist Download).
   - LocalStorage state persistence and discreet homepage escape hatch.

---

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing across data schemas)
- **Styling**: Vanilla CSS (`app/globals.css`) with custom CSS custom properties
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Optimization**: Static Site Generation (`SSG`) via `generateStaticParams`
- **Hosting Compatibility**: Vercel, Netlify, Cloudflare Pages, AWS Amplify, Docker, or Node.js

---

## Project Structure

```bash
spetic-site/
├── app/
│   ├── about/page.tsx                  # About page (Founder story & photo gallery)
│   ├── contact/page.tsx                # Dispatch contact page
│   ├── coverage/page.tsx               # Service area & county directory
│   ├── pricing/page.tsx                # Transparent rates schedule
│   ├── resources/page.tsx              # Homeowner FAQ & knowledge base
│   ├── septicquote/page.tsx            # Standalone lead-gen funnel
│   ├── service-area/page.tsx           # Regional coverage overview
│   ├── services/
│   │   ├── page.tsx                    # Redirects to /services/septic-tank-pumping
│   │   └── [slug]/
│   │       ├── page.tsx                # Dynamic 11-section service template
│   │       └── ServiceFAQAccordion.tsx # Interactive client FAQ component
│   ├── globals.css                     # Complete design system tokens & utilities
│   ├── layout.tsx                      # Root layout with Google Fonts
│   └── page.tsx                        # Home page
│
├── components/
│   ├── BookingForm.tsx                 # Online dispatch appointment form
│   ├── ConditionalLayout.tsx           # Header/Footer suppression for funnel routes
│   ├── CostCalculator.tsx              # Interactive septic pricing estimator
│   ├── FaqAccordion.tsx                # Client FAQ accordion
│   ├── Footer.tsx                      # Site-wide dark charcoal footer
│   ├── GoogleIcon.tsx                  # Official Google rating badge
│   ├── Header.tsx                      # Responsive header with minimalist dropdown
│   └── ZipChecker.tsx                  # Live territory availability checker
│
├── data/
│   └── services.ts                     # Single source of truth for all 10 services
│
├── public/
│   └── images/                         # Authenticated trade photos and SVG emblems
│
├── .gitignore                          # Standard Next.js git ignore rules
├── next.config.mjs                     # Next.js build configuration
├── package.json                        # Dependencies and scripts
└── tsconfig.json                       # TypeScript compiler options
```

---

## Getting Started

### Prerequisites

- Node.js 18.18.0 or higher
- npm 9.0.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kaggwetarzanmark/spetic.git
   cd spetic
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js local development server with Hot Module Replacement |
| `npm run build` | Compiles and builds the production bundle with static pre-rendering |
| `npm run start` | Runs the compiled production server locally on port 3000 |
| `npm run lint` | Runs Next.js ESLint checks |

---

## License & Credits

- **Website Built For**: Septic Wranglers (Austin & Central Texas)
- **TCEQ Registration**: `#OS0034921`
- **Owner**: Jeff Uskert
- **Phone**: `(512) 976-2266`
- **Codebase License**: Private / Proprietary to Septic Wranglers
