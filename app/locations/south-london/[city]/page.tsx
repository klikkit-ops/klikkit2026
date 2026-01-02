import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { LocationIntroBlock } from "@/components/sections/LocationIntroBlock";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABand } from "@/components/sections/CTABand";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo/structured-data";
import { southLondonLocations, getLocation } from "@/lib/data/locations";
import { ArrowRight } from "lucide-react";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return southLondonLocations.map((location) => ({
    city: location.slug,
  }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  const location = getLocation("south-london", city);

  if (!location) {
    return { title: "Location Not Found" };
  }

  return {
    title: `${location.headline} | Klikkit`,
    description: location.description,
    alternates: {
      canonical: `https://klikkit.co.uk/locations/south-london/${city}`,
    },
  };
}

export default async function SouthLondonCityPage({ params }: CityPageProps) {
  const { city } = await params;
  const location = getLocation("south-london", city);

  if (!location) {
    notFound();
  }

  const localBusinessSchema = generateLocalBusinessSchema({
    areaServed: [
      { "@type": "Place", name: location.name },
      { "@type": "Place", name: "South London" },
    ] as unknown as string[],
    description: location.description,
  });

  const faqSchema = generateFAQSchema(location.faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://klikkit.co.uk" },
    { name: "Locations", url: "https://klikkit.co.uk/locations" },
    { name: "South London", url: "https://klikkit.co.uk/locations/south-london" },
    {
      name: location.name,
      url: `https://klikkit.co.uk/locations/south-london/${location.slug}`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            localBusinessSchema,
            faqSchema,
            breadcrumbSchema,
          ]),
        }}
      />

      <section className="pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Locations", href: "/locations" },
              { label: "South London", href: "/locations/south-london" },
              {
                label: location.name,
                href: `/locations/south-london/${location.slug}`,
              },
            ]}
          />
        </div>
      </section>

      <LocationIntroBlock
        location={location.name}
        region="South London"
        title={location.headline}
        description={location.intro}
      />

      {/* Local Proof */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Recent projects in and near {location.name}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {location.localProof.map((proof, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{proof}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/work">
                View all case studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ServicesGrid
        title={`Services available in ${location.name}`}
        subtitle="The same high-quality services, delivered with local expertise."
        showAll={false}
      />

      <FAQAccordion
        title={`${location.name} FAQs`}
        subtitle={`Common questions about working with businesses in ${location.name}`}
        faqs={location.faqs}
      />

      {/* Other South London locations */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Other South London areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {southLondonLocations
              .filter((loc) => loc.slug !== location.slug)
              .map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/south-london/${loc.slug}`}
                  className="group"
                >
                  <Card className="h-full transition-shadow hover:shadow-md">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {loc.name}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTABand
        title={`Ready to grow your ${location.name} business?`}
        description="Book a free 15-minute call to discuss your project."
        variant="primary"
      />
    </>
  );
}
