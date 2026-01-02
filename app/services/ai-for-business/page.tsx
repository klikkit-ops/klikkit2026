import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Hero } from "@/components/sections/Hero";
import { ServiceFeatureList } from "@/components/sections/ServiceFeatureList";
import { PricingCard } from "@/components/sections/PricingCard";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABand } from "@/components/sections/CTABand";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo/structured-data";
import {
  Bot,
  MessageSquare,
  Workflow,
  FileSearch,
  Plug,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI for Business | Chatbots, Automation & Lead Triage",
  description:
    "Practical AI solutions for small businesses. Chatbots, workflow automation, and lead qualification systems that save hours every week. Starting from £2,000.",
  alternates: {
    canonical: "https://klikkit.co.uk/services/ai-for-business",
  },
};

const features = [
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description:
      "24/7 customer support that actually works. Answer common questions, qualify leads, and book appointments automatically.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks like data entry, email follow-ups, and report generation. Reclaim hours every week.",
  },
  {
    icon: FileSearch,
    title: "Document Processing",
    description:
      "Extract data from invoices, contracts, and forms automatically. No more manual data entry.",
  },
  {
    icon: Bot,
    title: "Lead Qualification",
    description:
      "Automatically score and route leads based on their responses. Focus your time on the best prospects.",
  },
  {
    icon: Plug,
    title: "Custom Integrations",
    description:
      "Connect AI tools to your existing software — CRMs, accounting tools, booking systems, and more.",
  },
  {
    icon: GraduationCap,
    title: "Training Included",
    description:
      "I'll train you and your team to use and maintain the systems. No dependency on external support.",
  },
];

const packages = [
  {
    name: "AI Starter",
    description: "A single focused automation to prove ROI",
    price: "£2,000",
    features: [
      "One core automation",
      "Integration with one tool",
      "Setup & configuration",
      "Training session",
      "30-day support",
      "Documentation",
    ],
  },
  {
    name: "Business Automation",
    description: "Multiple automations working together",
    price: "£5,000",
    highlighted: true,
    features: [
      "Up to 3 automations",
      "Multi-tool integration",
      "AI chatbot included",
      "Lead scoring setup",
      "Team training",
      "60-day support",
      "Priority response",
    ],
  },
  {
    name: "Enterprise AI",
    description: "Comprehensive AI transformation for your business",
    price: "Custom",
    priceNote: "Get a quote",
    features: [
      "Unlimited automations",
      "Custom AI models",
      "Full system integration",
      "Dedicated support",
      "Performance monitoring",
      "Ongoing optimisation",
      "SLA available",
    ],
  },
];

const useCases = [
  {
    title: "Customer Support Chatbot",
    description:
      "Answer FAQs, handle basic enquiries, and escalate complex issues — 24/7.",
    savings: "Save 10+ hours/week",
  },
  {
    title: "Lead Qualification",
    description:
      "Automatically score leads and route hot prospects to your sales team.",
    savings: "2x lead quality",
  },
  {
    title: "Appointment Booking",
    description:
      "Let customers book meetings directly through chat without back-and-forth emails.",
    savings: "Faster conversions",
  },
  {
    title: "Invoice Processing",
    description:
      "Extract data from invoices and receipts automatically into your accounting software.",
    savings: "Save 5+ hours/week",
  },
  {
    title: "Email Follow-ups",
    description:
      "Automated, personalised follow-up sequences based on customer behaviour.",
    savings: "3x response rates",
  },
  {
    title: "Report Generation",
    description:
      "Automatically compile weekly reports from multiple data sources.",
    savings: "Save 3+ hours/week",
  },
];

const faqs = [
  {
    question: "What AI tools do you use?",
    answer:
      "I use a mix of platforms depending on your needs — OpenAI for language models, Make/Zapier for automations, and custom solutions where needed. The goal is to use the right tool for the job, not push a specific vendor.",
  },
  {
    question: "Do I need technical knowledge to use AI automations?",
    answer:
      "No. I build systems that are easy to use and maintain. Training is included in every package, and I document everything so you or your team can manage it independently.",
  },
  {
    question: "How do you measure ROI?",
    answer:
      "Before starting, we'll define clear success metrics — hours saved, leads qualified, response times reduced. I track these after launch to demonstrate value.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. I follow data protection best practices and can work within GDPR requirements. We'll discuss data handling during the discovery call.",
  },
  {
    question: "Can AI integrations connect to my existing software?",
    answer:
      "Most likely, yes. Common tools like HubSpot, Salesforce, Xero, Google Workspace, and hundreds of others can be integrated. We'll confirm during discovery.",
  },
];

const relatedCaseStudies = [
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

export default function AIForBusinessPage() {
  const serviceSchema = generateServiceSchema({
    name: "AI for Business",
    description:
      "Practical AI solutions for small businesses. Chatbots, workflow automation, and lead qualification systems.",
    url: "https://klikkit.co.uk/services/ai-for-business",
  });

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://klikkit.co.uk" },
    { name: "Services", url: "https://klikkit.co.uk/services" },
    {
      name: "AI for Business",
      url: "https://klikkit.co.uk/services/ai-for-business",
    },
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
              { label: "AI for Business", href: "/services/ai-for-business" },
            ]}
          />
        </div>
      </section>

      <Hero
        title="AI that actually saves you time"
        subtitle="Practical AI systems for small businesses — chatbots that handle customer queries, automations that eliminate busywork, and lead triage that helps you focus on what matters."
        primaryCta={{ text: "Get a Quote", href: "/contact" }}
        secondaryCta={{ text: "View Use Cases", href: "#use-cases" }}
        badge="AI & Automation"
      />

      <ServiceFeatureList
        title="What AI can do for your business"
        subtitle="Forget the hype. These are practical AI applications that deliver real ROI."
        features={features}
      />

      <section id="use-cases" className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Common use cases
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real examples of how small businesses are using AI to work
              smarter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <Card key={useCase.title}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {useCase.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {useCase.savings}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              AI packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start small and prove value, or go comprehensive from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Recent AI projects
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
        title="AI automation FAQs"
        subtitle="Common questions about implementing AI in your business"
        faqs={faqs}
      />

      <CTABand
        title="Curious how AI could help your business?"
        description="Book a free call to explore the possibilities."
        variant="primary"
      />
    </>
  );
}

