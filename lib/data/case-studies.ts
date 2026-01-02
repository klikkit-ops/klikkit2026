export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  service: "Web Design" | "iOS App" | "AI Automation";
  location: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  technologies: string[];
  timeline: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "streatham-home-garden",
    title: "E-commerce Rebuild for Local Retailer",
    client: "Streatham Home & Garden",
    service: "Web Design",
    location: "Streatham, South London",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    summary:
      "A complete e-commerce rebuild that transformed a struggling online presence into a revenue-generating machine.",
    challenge:
      "Streatham Home & Garden had an outdated WooCommerce site that was slow, difficult to manage, and wasn't converting. Mobile users accounted for 70% of traffic but the site wasn't properly optimised for them. Cart abandonment was at 85%.",
    solution:
      "We rebuilt the site from scratch using a modern headless architecture with Next.js and Shopify. The focus was on mobile-first design, lightning-fast page loads, and a streamlined checkout process. We also implemented local SEO to capture 'near me' searches.",
    results:
      "Within 3 months, online sales increased by 156%. Cart abandonment dropped to 45%. The site now loads in under 1.5 seconds on mobile, and they rank #1 for 'garden supplies Streatham'.",
    metrics: [
      { label: "Sales increase", value: "+156%" },
      { label: "Page load time", value: "1.2s" },
      { label: "Cart abandonment", value: "-40%" },
      { label: "Google ranking", value: "#1 local" },
    ],
    testimonial: {
      quote:
        "Jake didn't just build us a website — he transformed our entire online business. The results speak for themselves.",
      author: "David Richards",
      role: "Owner, Streatham Home & Garden",
    },
    technologies: ["Next.js", "Shopify", "TailwindCSS", "Vercel"],
    timeline: "8 weeks",
  },
  {
    slug: "zen-space-canterbury",
    title: "Booking App for Wellness Studio",
    client: "Zen Space Canterbury",
    service: "iOS App",
    location: "Canterbury, Kent",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
    summary:
      "A native iOS booking app that transformed how a wellness studio manages appointments and engages with clients.",
    challenge:
      "Zen Space was losing bookings to friction in their process. Clients had to call or use a clunky web form. No-shows were high, and staff spent hours on admin. They wanted an app that made booking as easy as ordering food.",
    solution:
      "We built a native SwiftUI app with real-time availability, one-tap booking, Apple Pay integration, and automated reminders. The app also includes a loyalty programme and push notifications for class announcements.",
    results:
      "The app has been downloaded over 2,400 times. Booking rates increased 89%. No-show rates dropped from 15% to 3%. Staff now spend minimal time on booking admin.",
    metrics: [
      { label: "App downloads", value: "2,400+" },
      { label: "Booking increase", value: "+89%" },
      { label: "No-show rate", value: "3%" },
      { label: "Time saved weekly", value: "12hrs" },
    ],
    testimonial: {
      quote:
        "Our clients love the app. It's made booking so effortless that we've seen a huge uptick in repeat visits.",
      author: "Emma Watson",
      role: "Founder, Zen Space Canterbury",
    },
    technologies: ["SwiftUI", "Firebase", "Stripe", "OneSignal"],
    timeline: "12 weeks",
  },
  {
    slug: "tunbridge-wells-legal",
    title: "AI Lead Qualification System",
    client: "Tunbridge Wells Legal",
    service: "AI Automation",
    location: "Tunbridge Wells, Kent",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    summary:
      "An intelligent lead qualification system that saves 15 hours per week and dramatically improves lead quality.",
    challenge:
      "The firm's website generated plenty of enquiries, but most weren't qualified leads. Senior partners were spending hours responding to tyre-kickers and low-value cases. They needed a way to filter and prioritise.",
    solution:
      "We built an AI-powered system that qualifies leads through conversational questions, scores them based on case type and value, and routes high-priority leads directly to partners while auto-responding to lower-priority enquiries.",
    results:
      "Partners now spend 15 fewer hours per week on unqualified leads. Lead quality improved by 45%. Response time for high-value cases dropped from 24 hours to under 30 minutes.",
    metrics: [
      { label: "Time saved weekly", value: "15hrs" },
      { label: "Lead quality", value: "+45%" },
      { label: "Response time", value: "<30min" },
      { label: "Conversion rate", value: "+28%" },
    ],
    testimonial: {
      quote:
        "This system pays for itself every single month. We're finally focusing on the cases that matter.",
      author: "James Morrison",
      role: "Senior Partner, Tunbridge Wells Legal",
    },
    technologies: ["OpenAI", "Make", "HubSpot", "Slack"],
    timeline: "4 weeks",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudiesByService(service: CaseStudy["service"]): CaseStudy[] {
  return caseStudies.filter((study) => study.service === service);
}

