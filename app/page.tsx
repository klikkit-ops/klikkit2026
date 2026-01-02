import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { TestimonialGrid } from "@/components/sections/TestimonialGrid";
import { CTABand } from "@/components/sections/CTABand";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { generateLocalBusinessSchema } from "@/lib/seo/structured-data";

const testimonials = [
  {
    quote:
      "Klikkit transformed our outdated website into a lead-generating machine. Within 3 months, our enquiries doubled.",
    author: "Sarah Mitchell",
    role: "Owner",
    company: "Mitchell's Plumbing, Dulwich",
  },
  {
    quote:
      "The iOS app they built for our restaurant has streamlined our ordering process. Our staff save hours every week.",
    author: "Marco Chen",
    role: "Manager",
    company: "The Golden Bowl, Streatham",
  },
  {
    quote:
      "The AI chatbot handles 70% of our customer queries now. We can actually focus on growing the business.",
    author: "Lisa Thompson",
    role: "Director",
    company: "Kent Property Services",
  },
];

const featuredCaseStudies = [
  {
    title: "E-commerce Rebuild for Local Retailer",
    client: "Streatham Home & Garden",
    service: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    slug: "streatham-home-garden",
    metrics: [
      { label: "Increase in sales", value: "+156%" },
      { label: "Page load time", value: "1.2s" },
    ],
  },
  {
    title: "Booking App for Wellness Studio",
    client: "Zen Space Canterbury",
    service: "iOS App",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    slug: "zen-space-canterbury",
    metrics: [
      { label: "App downloads", value: "2,400+" },
      { label: "Booking rate", value: "+89%" },
    ],
  },
  {
    title: "AI Lead Qualification System",
    client: "Tunbridge Wells Legal",
    service: "AI Automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    slug: "tunbridge-wells-legal",
    metrics: [
      { label: "Time saved weekly", value: "15hrs" },
      { label: "Lead quality", value: "+45%" },
    ],
  },
];

export default function HomePage() {
  const jsonLd = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero
        badge="Now offering AI automation services"
        title="Modern, conversion-first Websites + iOS Apps + AI systems for growing businesses"
        subtitle="From lead-generating websites to time-saving automations — built for small businesses in South London & Kent who want real results, not just a pretty design."
        primaryCta={{ text: "Book a Free Call", href: "/contact" }}
        secondaryCta={{ text: "View Our Work", href: "/work" }}
      />

      <TrustBadges />

      <ServicesGrid
        title="What we build"
        subtitle="Three core services designed to help small businesses compete online, save time, and grow revenue."
      />

      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Recent projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results for real businesses across South London and Kent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCaseStudies.map((study) => (
              <CaseStudyCard key={study.slug} {...study} />
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />

      <TestimonialGrid
        testimonials={testimonials}
        title="What clients say"
        subtitle="Don't just take our word for it — here's what business owners across South London and Kent have to say."
      />

      <CTABand
        title="Ready to grow your business?"
        description="Book a free 15-minute call to discuss your project."
        ctaText="Book a Free Call"
        ctaHref="/contact"
        variant="primary"
      />
    </>
  );
}
