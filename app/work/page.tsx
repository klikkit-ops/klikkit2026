import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Our Work | Web Design & App Development Portfolio",
  description:
    "Case studies and portfolio of web design, iOS app development, and AI automation projects for small businesses in South London & Kent.",
  alternates: {
    canonical: "https://klikkit.co.uk/work",
  },
};

const caseStudies = [
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
  {
    title: "Local Business Website with SEO",
    client: "Mitchell's Plumbing, Dulwich",
    service: "Web Design",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    slug: "mitchells-plumbing",
    metrics: [
      { label: "Enquiries", value: "+120%" },
      { label: "Google ranking", value: "Top 3",  },
    ],
  },
  {
    title: "Restaurant Ordering App",
    client: "The Golden Bowl, Streatham",
    service: "iOS App",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
    slug: "golden-bowl-streatham",
    metrics: [
      { label: "Orders via app", value: "65%" },
      { label: "Staff time saved", value: "8hrs/week" },
    ],
  },
  {
    title: "Customer Support Chatbot",
    client: "Kent Property Services",
    service: "AI Automation",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    slug: "kent-property-services",
    metrics: [
      { label: "Queries handled", value: "70%" },
      { label: "Response time", value: "<30s" },
    ],
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Work", href: "/work" }]} />

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
              Our work
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real projects for real businesses across South London and Kent.
              Every project is designed to deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} {...study} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Want results like these?"
        description="Book a free call to discuss your project."
        variant="primary"
      />
    </>
  );
}

