import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTABand } from "@/components/sections/CTABand";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { generateLocalBusinessSchema, generateFAQSchema } from "@/lib/seo/structured-data";
import { MapPin, ArrowRight } from "lucide-react";
import { southLondonLocations } from "@/lib/data/locations";

export const metadata: Metadata = {
  title: "Web Design in South London | Local Digital Services",
  description:
    "Professional web design, iOS app development, and AI automation for businesses across South London. Streatham, Dulwich, Brixton, Peckham and more.",
  alternates: {
    canonical: "https://klikkit.co.uk/locations/south-london",
  },
};

const faqs = [
  {
    question: "Which South London areas do you cover?",
    answer:
      "I work with businesses across South London including Streatham, Dulwich, Brixton, Peckham, Camberwell, Clapham, Balham, Tooting, and surrounding areas. If you're in South London, I can help.",
  },
  {
    question: "Do you meet South London clients in person?",
    answer:
      "Yes! I'm based in South London and happy to meet at your premises or a local cafe for project kickoffs and key meetings. Most ongoing communication happens over video call for efficiency.",
  },
  {
    question: "How does local SEO help South London businesses?",
    answer:
      "Local SEO helps you appear when people search for services in your area — like 'plumber Streatham' or 'restaurant Brixton'. Combined with Google Business Profile optimisation, it's essential for local businesses.",
  },
  {
    question: "What kind of South London businesses do you work with?",
    answer:
      "I work with all kinds — retail, hospitality, professional services, trades, wellness, and more. If you serve customers in South London and want to grow your online presence, I can help.",
  },
];

export default function SouthLondonPage() {
  const localBusinessSchema = generateLocalBusinessSchema({
    areaServed: [
      { "@type": "Place", name: "South London" },
      { "@type": "Place", name: "Streatham" },
      { "@type": "Place", name: "Dulwich" },
      { "@type": "Place", name: "Brixton" },
      { "@type": "Place", name: "Peckham" },
    ] as unknown as string[],
  });

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema, faqSchema]),
        }}
      />

      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Locations", href: "/locations" },
              { label: "South London", href: "/locations/south-london" },
            ]}
          />

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary mb-4">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">South London</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
              Web Design & Digital Services for South London Businesses
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I help businesses across South London grow their online presence.
              From conversion-optimised websites to time-saving AI automations,
              I deliver digital solutions that drive real results for local
              businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Areas I serve in South London
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {southLondonLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/south-london/${location.slug}`}
                className="group"
              >
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 flex items-center justify-between">
                      {location.name}
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {location.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local proof */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Recent projects in South London
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <span className="text-sm text-primary font-medium">
                  Streatham
                </span>
                <h3 className="font-semibold text-foreground mt-1 mb-2">
                  E-commerce Rebuild
                </h3>
                <p className="text-sm text-muted-foreground">
                  Streatham Home & Garden — +156% online sales
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <span className="text-sm text-primary font-medium">Dulwich</span>
                <h3 className="font-semibold text-foreground mt-1 mb-2">
                  Local SEO Website
                </h3>
                <p className="text-sm text-muted-foreground">
                  Mitchell&apos;s Plumbing — +120% enquiries
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <span className="text-sm text-primary font-medium">
                  Streatham
                </span>
                <h3 className="font-semibold text-foreground mt-1 mb-2">
                  Restaurant App
                </h3>
                <p className="text-sm text-muted-foreground">
                  The Golden Bowl — 65% orders via app
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ServicesGrid
        title="Services for South London businesses"
        subtitle="The same high-quality services, with local expertise and understanding."
        showAll={false}
      />

      <FAQAccordion title="South London FAQs" faqs={faqs} />

      <CTABand
        title="Ready to grow your South London business?"
        description="Book a free 15-minute call to discuss your project."
        variant="primary"
      />
    </>
  );
}

