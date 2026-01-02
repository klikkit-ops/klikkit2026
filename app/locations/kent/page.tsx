import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTABand } from "@/components/sections/CTABand";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { generateLocalBusinessSchema, generateFAQSchema } from "@/lib/seo/structured-data";
import { MapPin, ArrowRight } from "lucide-react";
import { kentLocations } from "@/lib/data/locations";

export const metadata: Metadata = {
  title: "Web Design in Kent | Local Digital Services",
  description:
    "Professional web design, iOS app development, and AI automation for businesses across Kent. Tunbridge Wells, Canterbury, Maidstone, Sittingbourne and more.",
  alternates: {
    canonical: "https://klikkit.co.uk/locations/kent",
  },
};

const faqs = [
  {
    question: "Which Kent areas do you cover?",
    answer:
      "I work with businesses across Kent including Tunbridge Wells, Canterbury, Maidstone, Sittingbourne, Sevenoaks, Ashford, and surrounding areas. If you're in Kent, I can help.",
  },
  {
    question: "Do you travel to Kent for meetings?",
    answer:
      "Yes! I'm happy to travel for project kickoffs and key meetings. I'm well-connected to Kent via rail and road. Most ongoing communication happens over video call for efficiency.",
  },
  {
    question: "How can local SEO help Kent businesses?",
    answer:
      "Local SEO helps you appear when people search for services in your area — like 'solicitor Tunbridge Wells' or 'restaurant Canterbury'. Essential for capturing local customers.",
  },
  {
    question: "Do you understand the Kent market?",
    answer:
      "Yes. I've worked with numerous Kent businesses and understand the different dynamics across the county — from the tourism focus in Canterbury to the professional services hub in Tunbridge Wells.",
  },
];

export default function KentPage() {
  const localBusinessSchema = generateLocalBusinessSchema({
    areaServed: [
      { "@type": "Place", name: "Kent" },
      { "@type": "Place", name: "Tunbridge Wells" },
      { "@type": "Place", name: "Canterbury" },
      { "@type": "Place", name: "Maidstone" },
      { "@type": "Place", name: "Sittingbourne" },
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
              { label: "Kent", href: "/locations/kent" },
            ]}
          />

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary mb-4">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Kent</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
              Web Design & Digital Services for Kent Businesses
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I help businesses across Kent build their online presence. From
              professional services in Tunbridge Wells to tourism businesses in
              Canterbury, I deliver digital solutions that drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Areas I serve in Kent
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kentLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/kent/${location.slug}`}
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
            Recent projects in Kent
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <span className="text-sm text-primary font-medium">
                  Tunbridge Wells
                </span>
                <h3 className="font-semibold text-foreground mt-1 mb-2">
                  AI Lead Qualification
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tunbridge Wells Legal — 15hrs saved weekly
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <span className="text-sm text-primary font-medium">
                  Canterbury
                </span>
                <h3 className="font-semibold text-foreground mt-1 mb-2">
                  Booking App
                </h3>
                <p className="text-sm text-muted-foreground">
                  Zen Space Canterbury — 2,400+ downloads
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <span className="text-sm text-primary font-medium">Kent</span>
                <h3 className="font-semibold text-foreground mt-1 mb-2">
                  Customer Support Chatbot
                </h3>
                <p className="text-sm text-muted-foreground">
                  Kent Property Services — 70% queries automated
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ServicesGrid
        title="Services for Kent businesses"
        subtitle="The same high-quality services, with local expertise and understanding."
        showAll={false}
      />

      <FAQAccordion title="Kent FAQs" faqs={faqs} />

      <CTABand
        title="Ready to grow your Kent business?"
        description="Book a free 15-minute call to discuss your project."
        variant="primary"
      />
    </>
  );
}

