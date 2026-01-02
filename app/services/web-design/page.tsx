import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Hero } from "@/components/sections/Hero";
import { ServiceFeatureList } from "@/components/sections/ServiceFeatureList";
import { PricingCard } from "@/components/sections/PricingCard";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABand } from "@/components/sections/CTABand";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo/structured-data";
import {
  Palette,
  Smartphone,
  Search,
  Zap,
  Shield,
  BarChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Design Services | Custom Websites for Small Businesses",
  description:
    "Professional web design services in South London & Kent. Beautiful, fast, SEO-optimised websites that convert visitors into customers. Starting from £1,500.",
  alternates: {
    canonical: "https://klikkit.co.uk/services/web-design",
  },
};

const features = [
  {
    icon: Palette,
    title: "Custom Design",
    description:
      "Every website is designed from scratch to match your brand. No templates, no cookie-cutter solutions.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description:
      "Designed for mobile users first, then enhanced for desktop. Over 60% of web traffic is mobile.",
  },
  {
    icon: Search,
    title: "SEO Optimised",
    description:
      "Built-in SEO best practices from day one. Proper structure, fast loading, and local SEO setup.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimised for Core Web Vitals. Fast sites rank higher and convert better.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "SSL certificates, regular backups, and secure hosting. Your site stays safe and online.",
  },
  {
    icon: BarChart,
    title: "Analytics Ready",
    description:
      "Google Analytics and conversion tracking set up so you can measure what matters.",
  },
];

const packages = [
  {
    name: "Website Starter",
    description: "Perfect for new businesses or simple brochure sites",
    price: "£1,500",
    features: [
      "Up to 5 pages",
      "Custom design",
      "Mobile responsive",
      "Basic SEO setup",
      "Contact form",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Local Business",
    description: "For established businesses wanting to dominate local search",
    price: "£3,500",
    highlighted: true,
    features: [
      "Up to 15 pages",
      "Custom design",
      "Mobile responsive",
      "Advanced local SEO",
      "Blog setup",
      "Google Business integration",
      "3 rounds of revisions",
      "30-day support included",
    ],
  },
  {
    name: "E-Commerce",
    description: "Full online store with Shopify or headless setup",
    price: "£5,000",
    features: [
      "Unlimited products",
      "Custom storefront design",
      "Payment integration",
      "Inventory management",
      "Order notifications",
      "SEO for products",
      "Training session included",
      "60-day support included",
    ],
  },
];

const faqs = [
  {
    question: "How long does a website project take?",
    answer:
      "Most websites take 4-8 weeks from start to finish. A simple 5-page site might be ready in 4 weeks, while a larger local business site or e-commerce project typically takes 6-8 weeks. We'll give you a specific timeline after our discovery call.",
  },
  {
    question: "Do I need to provide content?",
    answer:
      "You'll need to provide core information about your business, services, and any specific messaging you want to convey. I can help with copywriting as an add-on service, or work with your existing content to make it web-ready.",
  },
  {
    question: "What platform do you build on?",
    answer:
      "I typically build with Next.js for maximum performance and SEO, with a user-friendly content management system so you can make updates yourself. For e-commerce, I recommend Shopify or a headless setup depending on your needs.",
  },
  {
    question: "Will my site rank on Google?",
    answer:
      "Every site is built with SEO best practices from day one. For local businesses, I also set up Google Business Profile integration and local SEO foundations. However, ranking takes time and depends on competition in your area.",
  },
  {
    question: "What happens after the site launches?",
    answer:
      "I offer optional monthly care plans that include hosting, updates, backups, and small changes. Many clients prefer this for peace of mind. Otherwise, I hand over everything and you're free to manage it yourself.",
  },
];

const relatedCaseStudies = [
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
];

export default function WebDesignPage() {
  const serviceSchema = generateServiceSchema({
    name: "Web Design & Development",
    description:
      "Professional web design services for small businesses. Beautiful, fast, SEO-optimised websites that convert visitors into customers.",
    url: "https://klikkit.co.uk/services/web-design",
  });

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://klikkit.co.uk" },
    { name: "Services", url: "https://klikkit.co.uk/services" },
    { name: "Web Design", url: "https://klikkit.co.uk/services/web-design" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      <section className="pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Web Design", href: "/services/web-design" },
            ]}
          />
        </div>
      </section>

      <Hero
        title="Websites that convert visitors into customers"
        subtitle="Beautiful, fast, SEO-optimised websites built for small businesses in South London & Kent. No templates — every site is custom-designed to match your brand and goals."
        primaryCta={{ text: "Get a Quote", href: "/contact" }}
        secondaryCta={{ text: "View Pricing", href: "#pricing" }}
        badge="Web Design"
      />

      <ServiceFeatureList
        title="Built for results"
        subtitle="Every website I build is designed with one goal in mind: helping your business grow."
        features={features}
      />

      <section id="pricing" className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clear packages with no hidden fees. Choose the one that fits your
              needs, or let&apos;s discuss a custom solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Need something different?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Let&apos;s talk about a custom package
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Recent web design projects
            </h2>
          </div>

          <div className="max-w-md mx-auto">
            {relatedCaseStudies.map((study) => (
              <CaseStudyCard key={study.slug} {...study} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/work" className="text-primary hover:underline">
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Web design FAQs"
        subtitle="Common questions about web design projects"
        faqs={faqs}
      />

      <CTABand
        title="Ready for a website that works?"
        description="Book a free 15-minute call to discuss your project."
        variant="primary"
      />
    </>
  );
}

