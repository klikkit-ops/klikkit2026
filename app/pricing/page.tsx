import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PricingCard } from "@/components/sections/PricingCard";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABand } from "@/components/sections/CTABand";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | Transparent Packages for Web, Apps & AI",
  description:
    "Clear, upfront pricing for web design, iOS app development, and AI automation services. No hidden fees. Starting from £1,500.",
  alternates: {
    canonical: "https://klikkit.co.uk/pricing",
  },
};

const webPackages = [
  {
    name: "Website Starter",
    description: "Perfect for new businesses",
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
    description: "Dominate local search",
    price: "£3,500",
    highlighted: true,
    features: [
      "Up to 15 pages",
      "Custom design",
      "Advanced local SEO",
      "Blog setup",
      "Google Business integration",
      "30-day support",
    ],
  },
  {
    name: "E-Commerce",
    description: "Full online store",
    price: "£5,000",
    features: [
      "Unlimited products",
      "Custom storefront",
      "Payment integration",
      "Inventory management",
      "Product SEO",
      "60-day support",
    ],
  },
];

const appPackages = [
  {
    name: "MVP App",
    description: "Test your idea",
    price: "£5,000",
    features: [
      "Core features",
      "Basic UI/UX",
      "App Store submission",
      "Push notifications",
      "30-day bug fixes",
    ],
  },
  {
    name: "Full Product",
    description: "Complete app",
    price: "£12,000",
    highlighted: true,
    features: [
      "Full feature set",
      "Custom UI/UX",
      "Authentication",
      "Payment integration",
      "Admin dashboard",
      "90-day support",
    ],
  },
];

const aiPackages = [
  {
    name: "AI Starter",
    description: "Prove ROI fast",
    price: "£2,000",
    features: [
      "One automation",
      "Single integration",
      "Training included",
      "30-day support",
    ],
  },
  {
    name: "Business Automation",
    description: "Multiple systems",
    price: "£5,000",
    highlighted: true,
    features: [
      "Up to 3 automations",
      "AI chatbot",
      "Lead scoring",
      "Team training",
      "60-day support",
    ],
  },
];

const retainers = [
  {
    name: "Website Care Plan",
    price: "£99/month",
    description: "Keep your site secure and up-to-date",
    features: [
      "Hosting included",
      "SSL certificate",
      "Daily backups",
      "Security monitoring",
      "Minor text/image updates",
      "Monthly performance report",
    ],
  },
  {
    name: "SEO & Content",
    price: "£299/month",
    description: "Grow organic traffic over time",
    features: [
      "2 blog posts/month",
      "Keyword tracking",
      "Monthly SEO audit",
      "Google Business updates",
      "Backlink monitoring",
      "Quarterly strategy call",
    ],
  },
  {
    name: "Product Retainer",
    price: "From £500/month",
    description: "Ongoing development support",
    features: [
      "Reserved hours monthly",
      "Feature development",
      "Bug fixes",
      "Performance optimisation",
      "Priority response",
      "Weekly check-ins",
    ],
  },
];

const faqs = [
  {
    question: "Are these prices fixed?",
    answer:
      "These are starting prices for typical projects. Your actual quote depends on your specific requirements. We'll give you a detailed, fixed quote after our discovery call — no surprises.",
  },
  {
    question: "What payment options are available?",
    answer:
      "Standard terms are 50% upfront, 50% on completion. For larger projects, we can offer milestone-based payments. Monthly payment plans are available for qualifying clients.",
  },
  {
    question: "What's not included?",
    answer:
      "Domain names, premium stock images, third-party software subscriptions (e.g., Shopify, email marketing tools), and ongoing hosting (unless on a care plan) are typically not included. We'll make all costs clear upfront.",
  },
  {
    question: "Do you offer discounts for multiple services?",
    answer:
      "Yes. If you're bundling services (e.g., website + AI chatbot), we can often offer a package discount. Let's discuss during your call.",
  },
  {
    question: "What if my project doesn't fit these packages?",
    answer:
      "No problem — these are starting points. Many projects are custom-scoped. Book a call and we'll put together a tailored quote.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Pricing", href: "/pricing" }]} />

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
              Transparent pricing
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Clear packages with honest pricing. No hidden fees, no surprises.
              These are starting prices — your exact quote depends on your
              specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Web Design */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Web Design
            </h2>
            <p className="text-muted-foreground">
              Custom websites that convert.{" "}
              <Link
                href="/services/web-design"
                className="text-primary hover:underline"
              >
                Learn more →
              </Link>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {webPackages.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* iOS Apps */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              iOS App Development
            </h2>
            <p className="text-muted-foreground">
              Native apps from concept to App Store.{" "}
              <Link
                href="/services/ios-app-development"
                className="text-primary hover:underline"
              >
                Learn more →
              </Link>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {appPackages.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Automation */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              AI & Automation
            </h2>
            <p className="text-muted-foreground">
              Practical AI that saves time.{" "}
              <Link
                href="/services/ai-for-business"
                className="text-primary hover:underline"
              >
                Learn more →
              </Link>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {aiPackages.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Retainers */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Monthly Retainers
            </h2>
            <p className="text-muted-foreground">
              Ongoing support to keep your digital presence running smoothly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {retainers.map((retainer) => (
              <Card key={retainer.name}>
                <CardHeader>
                  <CardTitle className="text-xl">{retainer.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {retainer.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-foreground mb-6">
                    {retainer.price}
                  </p>
                  <ul className="space-y-3">
                    {retainer.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Pricing FAQs"
        subtitle="Common questions about pricing and payments"
        faqs={faqs}
      />

      <CTABand
        title="Ready to get a custom quote?"
        description="Book a free 15-minute call to discuss your project."
        variant="primary"
      />
    </>
  );
}

