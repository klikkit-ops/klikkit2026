import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Hero } from "@/components/sections/Hero";
import { ServiceFeatureList } from "@/components/sections/ServiceFeatureList";
import { PricingCard } from "@/components/sections/PricingCard";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABand } from "@/components/sections/CTABand";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo/structured-data";
import {
  Smartphone,
  Code,
  Rocket,
  Bell,
  Cloud,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "iOS App Development | Native SwiftUI Apps for Business",
  description:
    "Professional iOS app development services. Native SwiftUI apps from concept to App Store. MVP development starting from £5,000.",
  alternates: {
    canonical: "https://klikkit.co.uk/services/ios-app-development",
  },
};

const features = [
  {
    icon: Smartphone,
    title: "Native SwiftUI",
    description:
      "Built with Apple's latest technology for the best performance and user experience. No cross-platform compromises.",
  },
  {
    icon: Code,
    title: "Clean Architecture",
    description:
      "Well-structured, maintainable code that's easy to update and extend as your business grows.",
  },
  {
    icon: Rocket,
    title: "App Store Ready",
    description:
      "Full support through Apple's review process. I handle submissions, metadata, and any rejections.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description:
      "Keep users engaged with timely notifications. Great for bookings, updates, and promotions.",
  },
  {
    icon: Cloud,
    title: "Backend Integration",
    description:
      "Connect to your existing systems or build new APIs. Payment processing, databases, and more.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description:
      "Maintenance plans to keep your app updated with iOS releases and add new features over time.",
  },
];

const packages = [
  {
    name: "MVP App",
    description: "Test your idea with a functional minimum viable product",
    price: "£5,000",
    features: [
      "Core feature set",
      "Basic UI/UX design",
      "App Store submission",
      "Push notification setup",
      "Basic analytics",
      "30-day bug fixes",
    ],
  },
  {
    name: "Full Product",
    description: "Complete app with polished design and advanced features",
    price: "£12,000",
    highlighted: true,
    features: [
      "Full feature set",
      "Custom UI/UX design",
      "App Store submission",
      "Push notifications",
      "User authentication",
      "Payment integration",
      "Admin dashboard",
      "90-day support",
    ],
  },
  {
    name: "Enterprise",
    description: "Complex apps with custom requirements and integrations",
    price: "Custom",
    priceNote: "Get a quote",
    features: [
      "Unlimited features",
      "Enterprise integrations",
      "Multiple user roles",
      "Advanced security",
      "Performance optimisation",
      "Dedicated support",
      "SLA available",
    ],
  },
];

const appProcessSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We define your app's goals, features, and target users. I'll help you prioritise what to build first.",
    duration: "1-2 weeks",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes and high-fidelity mockups. You'll see exactly how your app will look and feel.",
    duration: "2-3 weeks",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Building your app with regular demos so you can see progress and provide feedback.",
    duration: "4-8 weeks",
  },
  {
    number: "04",
    title: "Testing",
    description:
      "Thorough testing on real devices. Beta testing with real users if needed.",
    duration: "1-2 weeks",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "App Store submission and approval. I handle everything with Apple.",
    duration: "1-2 weeks",
  },
];

const faqs = [
  {
    question: "How much does an iOS app cost in 2026?",
    answer:
      "An MVP typically costs £5,000-£10,000 and takes 8-12 weeks. A full-featured app usually costs £12,000-£25,000 and takes 12-20 weeks. Complex enterprise apps with custom integrations can be £30,000+. The best way to get an accurate quote is to book a discovery call.",
  },
  {
    question: "Why native iOS instead of cross-platform?",
    answer:
      "Native apps offer the best performance, user experience, and access to iOS features. For businesses primarily targeting iPhone users (common in the UK), native is usually the better investment. If you need Android too, we can discuss options.",
  },
  {
    question: "How long does App Store approval take?",
    answer:
      "Apple typically reviews apps within 24-48 hours. First-time submissions may take longer. I'll prepare your app to meet all guidelines to minimise the chance of rejection.",
  },
  {
    question: "Do I own the source code?",
    answer:
      "Yes, 100%. Once the project is complete and paid for, you own all source code, designs, and assets. I can also help you set up your own developer account.",
  },
  {
    question: "What about ongoing maintenance?",
    answer:
      "iOS releases updates annually, and apps need to be kept compatible. I offer monthly retainer packages that include updates, bug fixes, and small feature additions.",
  },
];

const relatedCaseStudies = [
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
];

export default function iOSAppDevelopmentPage() {
  const serviceSchema = generateServiceSchema({
    name: "iOS App Development",
    description:
      "Professional iOS app development services. Native SwiftUI apps from concept to App Store.",
    url: "https://klikkit.co.uk/services/ios-app-development",
  });

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://klikkit.co.uk" },
    { name: "Services", url: "https://klikkit.co.uk/services" },
    {
      name: "iOS App Development",
      url: "https://klikkit.co.uk/services/ios-app-development",
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
              {
                label: "iOS App Development",
                href: "/services/ios-app-development",
              },
            ]}
          />
        </div>
      </section>

      <Hero
        title="Native iOS apps that users love"
        description="From initial concept to App Store launch, I build native iOS apps using SwiftUI. Clean code, beautiful design, and a smooth path to market."
        primaryCTA={{ text: "Get a Quote", href: "/contact" }}
        secondaryCTA={{ text: "View Pricing", href: "#pricing" }}
        badge="iOS Development"
      />

      <ServiceFeatureList
        title="Why choose native iOS?"
        subtitle="Native apps deliver the best experience for iPhone users — and that matters for your business."
        features={features}
      />

      <ProcessTimeline
        title="How we build your app"
        subtitle="A clear, structured process from idea to App Store launch."
        steps={appProcessSteps}
      />

      <section id="pricing" className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              App development packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you&apos;re testing an idea or building a complete product,
              there&apos;s a package that fits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Recent iOS projects
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
        title="iOS development FAQs"
        subtitle="Common questions about building iOS apps"
        faqs={faqs}
      />

      <CTABand
        title="Ready to build your app?"
        description="Book a free discovery call to discuss your idea."
        variant="primary"
      />
    </>
  );
}

