# Klikkit Marketing Website

A modern, SEO-first marketing website for klikkit.co.uk built with Next.js 14, TypeScript, and TailwindCSS.

## Features

- **SEO-First Architecture**: Metadata, OpenGraph, Twitter cards, structured data (JSON-LD), sitemap, robots.txt
- **Local SEO**: Dedicated landing pages for South London and Kent locations
- **Blog System**: Content-driven blog with 6 seed posts targeting buyer-intent keywords
- **Case Studies**: Portfolio with measurable outcomes
- **Conversion-Focused**: Clear CTAs, pricing transparency, trust elements
- **Performance Optimised**: Server components, optimised images, minimal client-side JS
- **Accessible**: Semantic HTML, keyboard navigation, proper heading hierarchy

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + shadcn/ui components
- **Fonts**: Inter + JetBrains Mono (via Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone and navigate to project
cd klikkit-2026

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  ├── page.tsx                    # Home
  ├── layout.tsx                  # Root layout
  ├── globals.css                 # Global styles
  ├── sitemap.ts                  # Dynamic sitemap
  ├── robots.ts                   # Robots.txt
  ├── not-found.tsx               # 404 page
  ├── /services                   # Service pages
  │   ├── page.tsx                # Services hub
  │   ├── /web-design
  │   ├── /ios-app-development
  │   └── /ai-for-business
  ├── /pricing                    # Pricing page
  ├── /work                       # Portfolio
  ├── /case-studies/[slug]        # Dynamic case studies
  ├── /about                      # About page
  ├── /contact                    # Contact form
  ├── /insights                   # Blog
  │   ├── page.tsx                # Blog index
  │   └── /[slug]                 # Blog posts
  └── /locations                  # Local SEO pages
      ├── page.tsx                # Locations hub
      ├── /south-london
      │   ├── page.tsx            # South London hub
      │   └── /[city]             # City pages
      └── /kent
          ├── page.tsx            # Kent hub
          └── /[city]             # City pages

/components
  ├── /ui                         # shadcn/ui base components
  ├── /layout                     # Header, Footer, Breadcrumbs
  ├── /sections                   # Page sections (Hero, CTA, etc.)
  └── /forms                      # Form components

/lib
  ├── utils.ts                    # Utility functions
  ├── /seo                        # SEO helpers (metadata, structured data)
  └── /data                       # Content data (blog posts, case studies, locations)
```

## Editing Content

### Blog Posts

Edit `/lib/data/blog-posts.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  {
    slug: "your-post-slug",
    title: "Your Post Title",
    description: "Meta description",
    date: "2026-01-15",
    readingTime: "5 min read",
    category: "Web Design",
    content: `
Your markdown-style content here...
    `,
  },
  // Add more posts...
];
```

### Case Studies

Edit `/lib/data/case-studies.ts`:

```typescript
export const caseStudies: CaseStudy[] = [
  {
    slug: "project-slug",
    title: "Project Title",
    client: "Client Name",
    service: "Web Design", // or "iOS App" or "AI Automation"
    location: "Location",
    image: "https://...",
    summary: "Brief summary",
    challenge: "The challenge...",
    solution: "The solution...",
    results: "The results...",
    metrics: [
      { label: "Metric Label", value: "+50%" },
    ],
    testimonial: {
      quote: "...",
      author: "Name",
      role: "Role, Company",
    },
    technologies: ["Tech1", "Tech2"],
    timeline: "8 weeks",
  },
  // Add more case studies...
];
```

### Location Pages

Edit `/lib/data/locations.ts`:

```typescript
// Add to southLondonLocations or kentLocations array
{
  slug: "area-name",
  name: "Area Name",
  region: "south-london", // or "kent"
  regionName: "South London",
  headline: "Web Design, Apps & AI for Area Name Businesses",
  description: "Meta description",
  intro: "Introductory paragraph about the area...",
  localProof: [
    "Project 1 - Result",
    "Project 2 - Result",
    "Project 3 - Result",
  ],
  faqs: [
    {
      question: "Question?",
      answer: "Answer...",
    },
    // Add 2-3 location-specific FAQs
  ],
}
```

### Pricing

Edit `/app/pricing/page.tsx` - update the `webPackages`, `appPackages`, `aiPackages`, and `retainers` arrays.

### Testimonials

Edit the testimonials array in `/app/page.tsx` (home) or add to specific pages.

## SEO Checklist

- [x] Unique title/description per page
- [x] OpenGraph and Twitter cards
- [x] Canonical URLs
- [x] Sitemap (auto-generated)
- [x] Robots.txt
- [x] LocalBusiness JSON-LD on home and location pages
- [x] Service JSON-LD on service pages
- [x] FAQPage JSON-LD on pages with FAQs
- [x] BreadcrumbList JSON-LD on service, location, and blog pages
- [x] Article JSON-LD on blog posts
- [x] Semantic HTML structure
- [x] Proper heading hierarchy (H1 → H2 → H3)
- [x] Internal linking structure

## Customisation

### Brand Colour

The primary brand colour (#f0b913) is defined in:
- `tailwind.config.ts` - primary colour scale
- `app/globals.css` - CSS variables

### Contact Details

Update contact information in:
- `/components/layout/Footer.tsx`
- `/app/contact/page.tsx`
- `/lib/seo/structured-data.ts` (for JSON-LD)

### Analytics

Add your analytics in `/app/layout.tsx`:

```typescript
// In the <head> or <body> via Script component
<Script src="https://..." strategy="afterInteractive" />
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

Ensure your platform supports Node.js 18+ and Next.js.

## TODO

- [ ] Add actual Calendly embed in `/app/contact/page.tsx`
- [ ] Connect contact form to backend (API route or external service)
- [ ] Add real images to replace Unsplash placeholders
- [ ] Update contact details (phone, email)
- [ ] Add real testimonials and case studies
- [ ] Configure analytics (GA4, Plausible, etc.)
- [ ] Set up form submission handling
- [ ] Add cookie consent if needed

## License

Private - All rights reserved.

