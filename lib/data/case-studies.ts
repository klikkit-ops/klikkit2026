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
  {
    slug: "mitchells-plumbing",
    title: "Local Business Website with SEO",
    client: "Mitchell's Plumbing, Dulwich",
    service: "Web Design",
    location: "Dulwich, South London",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop",
    summary:
      "A conversion-focused website with local SEO that doubled enquiries and achieved top 3 Google rankings for key search terms.",
    challenge:
      "Mitchell's Plumbing had a basic website that wasn't generating leads. They were losing work to competitors who appeared higher in Google searches. The site had no SEO strategy, slow load times, and no clear call-to-action for potential customers.",
    solution:
      "We built a modern, mobile-first website with comprehensive local SEO targeting 'plumber Dulwich' and related searches. The site includes clear service pages, customer testimonials, and an easy-to-use contact form. We also implemented Google Business Profile optimisation and local citation building.",
    results:
      "Within 3 months, enquiries increased by 120%. The site now ranks in the top 3 for 'plumber Dulwich' and related local searches. Lead quality improved significantly as the site clearly communicates services and pricing.",
    metrics: [
      { label: "Enquiries", value: "+120%" },
      { label: "Google ranking", value: "Top 3" },
      { label: "Page load time", value: "1.8s" },
      { label: "Mobile traffic", value: "+85%" },
    ],
    testimonial: {
      quote:
        "Klikkit transformed our outdated website into a lead-generating machine. Within 3 months, our enquiries doubled.",
      author: "Sarah Mitchell",
      role: "Owner, Mitchell's Plumbing, Dulwich",
    },
    technologies: ["Next.js", "TailwindCSS", "Vercel", "Google Analytics"],
    timeline: "6 weeks",
  },
  {
    slug: "golden-bowl-streatham",
    title: "Restaurant Ordering App",
    client: "The Golden Bowl, Streatham",
    service: "iOS App",
    location: "Streatham, South London",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop",
    summary:
      "A native iOS ordering app that streamlined operations, increased customer orders, and saved staff 8 hours per week.",
    challenge:
      "The Golden Bowl was struggling with phone orders during busy periods. Staff were overwhelmed taking orders, leading to mistakes and long wait times. They needed a way to handle more orders efficiently while improving the customer experience.",
    solution:
      "We developed a native iOS app with a beautiful, intuitive menu interface, customisation options, and Apple Pay integration. The app sends orders directly to the kitchen display system, reducing errors and wait times. Customers can track their order status and save favourite dishes.",
    results:
      "65% of orders now come through the app. Staff save 8 hours per week that were previously spent on phone orders. Order accuracy improved significantly, and customer satisfaction increased with faster service and the convenience of mobile ordering.",
    metrics: [
      { label: "Orders via app", value: "65%" },
      { label: "Staff time saved", value: "8hrs/week" },
      { label: "Order accuracy", value: "+92%" },
      { label: "Customer satisfaction", value: "4.8/5" },
    ],
    testimonial: {
      quote:
        "The iOS app they built for our restaurant has streamlined our ordering process. Our staff save hours every week.",
      author: "Marco Chen",
      role: "Manager, The Golden Bowl, Streatham",
    },
    technologies: ["SwiftUI", "Firebase", "Stripe", "Kitchen Display System API"],
    timeline: "10 weeks",
  },
  {
    slug: "kent-property-services",
    title: "Customer Support Chatbot",
    client: "Kent Property Services",
    service: "AI Automation",
    location: "Kent, UK",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=800&fit=crop",
    summary:
      "An AI-powered chatbot that handles 70% of customer queries automatically, with responses in under 30 seconds.",
    challenge:
      "Kent Property Services was receiving hundreds of customer queries daily about property availability, viewing times, and application processes. The team was spending hours answering repetitive questions, leaving less time for high-value tasks like property viewings and negotiations.",
    solution:
      "We implemented an intelligent chatbot powered by OpenAI that understands property-related queries and can answer questions about availability, pricing, viewing schedules, and application requirements. The bot integrates with their property management system to provide real-time information and can escalate complex queries to human agents.",
    results:
      "The chatbot now handles 70% of all customer queries automatically, with an average response time of under 30 seconds. The team can focus on property viewings and client relationships. Customer satisfaction improved as queries are answered instantly, even outside business hours.",
    metrics: [
      { label: "Queries handled", value: "70%" },
      { label: "Response time", value: "<30s" },
      { label: "Time saved weekly", value: "12hrs" },
      { label: "Customer satisfaction", value: "4.7/5" },
    ],
    testimonial: {
      quote:
        "The AI chatbot handles 70% of our customer queries now. We can actually focus on growing the business.",
      author: "Lisa Thompson",
      role: "Director, Kent Property Services",
    },
    technologies: ["OpenAI", "Make", "Property Management API", "WhatsApp Business"],
    timeline: "5 weeks",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudiesByService(service: CaseStudy["service"]): CaseStudy[] {
  return caseStudies.filter((study) => study.service === service);
}

