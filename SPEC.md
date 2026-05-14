# SPEC.md — Vlad Nadtoka Real Estate

## 1. Concept & Vision

A tech-forward, clean website for Vlad Nadtoka — an Austin-based real estate agent specializing in rental property investors. The site positions Vlad as the guide who helps investors cut through noise and find properties that actually cash-flow. Professional, data-driven, modern — not the typical real estate brochure.

**Tagline:** Vlad Nadtoka — Selling and Buying Austin, TX

---

## 2. Design Language

### Aesthetic Direction
Tech-forward investor portal meets clean real estate. Think: data dashboards, market insights, modern typography — professional without being corporate-stuffy.

### Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Primary | Deep slate | `#1a2332` |
| Accent | Electric teal | `#00d4aa` |
| Background | Off-white | `#f8f9fb` |
| Surface | White | `#ffffff` |
| Text primary | Charcoal | `#2d3748` |
| Text secondary | Slate gray | `#64748b` |
| Border | Light gray | `#e2e8f0` |

### Typography
- **Headings:** Inter (Google Fonts) — clean, modern, professional
- **Body:** Inter — consistent, readable
- **Fallback:** system-ui, -apple-system, sans-serif

### Spatial System
- Base unit: 8px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1200px
- Grid: 12-column, responsive

### Motion Philosophy
- Subtle entrance animations on scroll (fade-up, 400ms ease-out)
- Hover transitions: 200ms ease
- No aggressive or distracting motion

### Visual Assets
- **Headshot:** Optimized WebP from user's photo
- **Icons:** Lucide or Heroicons (SVG inline)
- **Images:** Austin skyline stock + optimized WebP
- **Decorative:** Subtle gradient accents, geometric shapes

---

## 3. Layout & Structure

### Pages
1. **Home** — Hero, Problem statement, How It Works (3 steps), Market Insights teaser, CTA
2. **About** — Vlad's story, credentials, approach, headshot
3. **Market Insights** — Blog-style Austin market data posts (static content initially)
4. **Contact** — Consultation form (Name, Email, Investment Goals), contact info

### Visual Pacing
- Home: Hero (bold) → Problem (dark bg) → Solution (light) → Steps (light bg) → CTA (accent bg) → Footer
- About: Portrait + story → Values → CTA
- Market Insights: Card grid layout
- Contact: Clean form + info split

### Responsive Strategy
- Mobile-first CSS
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Nav collapses to hamburger on mobile
- Single column on mobile, multi-column on desktop

---

## 4. Features & Interactions

### Navigation
- Sticky header, transparent → solid on scroll
- Logo + nav links (Home, About, Market Insights, Contact)
- Mobile: hamburger menu with slide-out drawer
- Active state: teal underline on current page

### Home Page
- **Hero:** Bold headline, subheadline, primary CTA button, headshot
- **Problem section:** Dark background, pain point headline, supporting text
- **How It Works:** 3-step process with icons and descriptions
- **Market Insights teaser:** 3 latest insight cards linking to Market Insights page
- **CTA banner:** Full-width teal background, headline + button

### About Page
- **Hero:** Left: headshot + key stats | Right: headline + bio
- **Approach section:** 3 value props with icons
- **CTA:** Book consultation button

### Market Insights Page
- **Page header:** "Austin Market Insights"
- **Grid:** 3-column card layout (responsive 1-col mobile)
- **Cards:** Title, excerpt, date, read more link
- **Initial content:** 3 static articles about Austin rental market

### Contact Page
- **Split layout:** Form left, contact info right
- **Form fields:** Name (required), Email (required), Investment Goals (textarea, required)
- **Form behavior:** Client-side validation, success state message on submit
- **Contact info:** Email, phone, location, social links

### Footer
- Logo + tagline
- Quick links
- Social icons
- Copyright

---

## 5. Component Inventory

### Button
- **Primary:** Teal bg (#00d4aa), white text, rounded-lg, hover: darken 10%
- **Secondary:** Transparent, teal border, teal text, hover: fill teal
- **States:** Default, hover, active, disabled (opacity 50%)

### Navigation
- **Default:** White/transparent bg, slate text
- **Scrolled:** White bg, subtle shadow
- **Mobile:** Hamburger icon → slide drawer

### Card (Market Insights)
- White bg, subtle border, rounded-xl, shadow-sm
- Hover: lift (translateY -4px), shadow increase
- Image top, content bottom, date + read more

### Form Input
- Full-width, rounded-lg, border on focus (teal)
- Label above, placeholder text inside
- Error state: red border + error message below

### Section Patterns
- **Dark section:** Primary bg (#1a2332), white text
- **Light section:** Off-white bg (#f8f9fb), dark text
- **Accent section:** Teal bg, white text

---

## 6. Technical Approach

### Stack
- Pure HTML + CSS + Vanilla JS
- No build step, no frameworks
- Cloudflare Pages serves static files directly

### File Structure
```
websites/vlad-nadtoka-realty/
├── index.html
├── about.html
├── insights.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   ├── headshot.webp
│   ├── austin-skyline.webp
│   └── [insight images]
├── .gitattributes
├── sitemap.xml
└── robots.txt
```

### SEO
- Meta tags on every page (title, description, keywords, canonical)
- Open Graph tags on every page
- Twitter Card on homepage
- Semantic HTML (hierarchy, nav, main, footer, article)
- Structured data (WebSite schema on homepage)
- sitemap.xml + robots.txt

### Performance
- Images: WebP only, max 2000px wide, quality 75
- CSS: Single file, critical styles inlined where appropriate
- JS: Defer non-critical, single minified file
- Google Fonts: display=swap

---

## 7. Content Notes

### Home Hero
- **Headline:** "Find Austin Rental Properties That Actually Cash-Flow"
- **Subheadline:** "Stop guessing which deals are real. I help investors identify high-performing properties with confidence."

### Problem Statement
- **Headline:** "Every Property Looks Like a Deal. Most Aren't."
- **Body:** "In a market where overvalued listings hide behind glossy photos and optimistic projections, how do you know which properties will actually deliver returns? I help investors cut through the noise with data-driven analysis and local market expertise."

### How It Works
1. **Share Your Goals** — Tell me your investment criteria: budget, location, cash-flow targets, and long-term vision.
2. **Get Deal Analysis** — I research properties, run the numbers, and bring you opportunities that actually fit your criteria.
3. **Close with Confidence** — Make informed decisions backed by local market data and investment expertise.

### About
- Vlad Nadtoka, Austin-based real estate agent
- Specialization: Rental property investors
- Mission: Help investors find properties that deliver real returns
- Approach: Data-driven, investor-first, no fluff

### Market Insights (Initial 3 Articles)
1. "Austin Rental Market Q1 2026: What Investors Need to Know"
2. "How to Evaluate Cash-Flow Potential: A Beginner's Guide"
3. "Austin vs. Suburbs: Where Are Rental Returns Strongest in 2026?"

---

## 8. Confirmation

This spec is ready for build. All design decisions are final unless you'd like to revise.

**Approve by saying:** "Looks good, build it"
