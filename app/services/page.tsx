import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABand } from "@/components/sections/CTABand";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { generateServiceSchema } from "@/lib/seo/structured-data";
import { ArrowRight, Globe, Smartphone, Bot, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Web Design, iOS Apps & AI Automation",
  description:
    "Professional web design, iOS app development, and AI automation services for small businesses in South London & Kent. Get more leads, save time, grow revenue.",
  alternates: {
    canonical: "https://klikkit.co.uk/services",
  },
};

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    slug: "web-design",
    description:
      "Beautiful, fast websites that convert visitors into customers. Built mobile-first with SEO baked in from day one.",
    features: [
      "Custom design tailored to your brand",
      "Mobile-responsive & fast-loading",
      "SEO-optimised for local search",
      "Content management system",
      "Analytics & conversion tracking",
      "Ongoing support available",
    ],
    startingFrom: "£1,500",
  },
  {
    icon: Smartphone,
    title: "iOS App Development",
    slug: "ios-app-development",
    description:
      "Native iOS apps built with SwiftUI. From initial concept to App Store launch, we handle the entire process.",
    features: [
      "Native SwiftUI development",
      "Clean, intuitive UX design",
      "App Store submission support",
      "Push notifications & analytics",
      "Backend API integration",
      "Ongoing maintenance plans",
    ],
    startingFrom: "£5,000",
  },
  {
    icon: Bot,
    title: "AI for Business",
    slug: "ai-for-business",
    description:
      "Practical AI automations that save hours every week. Chatbots, workflow automation, and intelligent lead triage.",
    features: [
      "AI chatbots for customer support",
      "Lead qualification automation",
      "Workflow & process automation",
      "Document processing & analysis",
      "Custom integrations",
      "Training & support included",
    ],
    startingFrom: "£2,000",
  },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the scope, but most websites take 4-8 weeks, iOS apps take 8-16 weeks, and AI automations can be set up in 2-4 weeks. We'll give you a realistic timeline after our discovery call.",
  },
  {
    question: "Do you work with businesses outside South London & Kent?",
    answer:
      "Absolutely. While I specialise in local businesses, I work with clients across the UK and internationally. Most of my work is done remotely.",
  },
  {
    question: "What's your payment structure?",
    answer:
      "Typically 50% upfront to begin work, and 50% on completion. For larger projects, we can arrange milestone-based payments. I also offer monthly payment plans for qualifying clients.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. I offer monthly care plans for websites, app maintenance packages, and ongoing AI optimisation. Many clients choose to work with me on a retainer basis after their initial project.",
  },
];

export default function ServicesPage() {
  const jsonLd = services.map((service) =>
    generateServiceSchema({
      name: service.title,
      description: service.description,
      url: `https://klikkit.co.uk/services/${service.slug}`,
    })
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
              Services that drive results
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Three focused offerings designed to help small businesses get more
              leads, save time, and increase revenue. No fluff, just outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.slug} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                            <Icon className="h-6 w-6" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">
                            Starting from {service.startingFrom}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-foreground mb-4">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground mb-6">
                          {service.description}
                        </p>
                        <Button asChild>
                          <Link href={`/services/${service.slug}`}>
                            Learn more
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                      <div className="bg-muted/50 p-8 lg:p-12">
                        <h3 className="font-semibold text-foreground mb-4">
                          What&apos;s included
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Compare services
            </h2>
            <p className="text-muted-foreground">
              Not sure which service is right for you? Here&apos;s a quick comparison.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-background rounded-lg border">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Web Design</th>
                  <th className="text-center p-4 font-semibold">iOS App</th>
                  <th className="text-center p-4 font-semibold">AI Automation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 text-muted-foreground">Timeline</td>
                  <td className="p-4 text-center">4-8 weeks</td>
                  <td className="p-4 text-center">8-16 weeks</td>
                  <td className="p-4 text-center">2-4 weeks</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-muted-foreground">Starting price</td>
                  <td className="p-4 text-center">£1,500</td>
                  <td className="p-4 text-center">£5,000</td>
                  <td className="p-4 text-center">£2,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-muted-foreground">Best for</td>
                  <td className="p-4 text-center">Lead generation</td>
                  <td className="p-4 text-center">Customer engagement</td>
                  <td className="p-4 text-center">Time savings</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Ongoing support</td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Frequently asked questions"
        subtitle="Got questions? Here are some common ones."
        faqs={faqs}
      />

      <CTABand
        title="Not sure which service you need?"
        description="Book a free call and I'll help you figure out the best approach."
        ctaText="Book a Free Call"
        ctaHref="/contact"
        variant="primary"
      />
    </>
  );
}

