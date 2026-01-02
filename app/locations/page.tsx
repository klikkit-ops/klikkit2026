import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { CTABand } from "@/components/sections/CTABand";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import { southLondonLocations, kentLocations } from "@/lib/data/locations";

export const metadata: Metadata = {
  title: "Locations | Web Design Services in South London & Kent",
  description:
    "Professional web design, iOS app development, and AI automation services across South London and Kent. Local expertise, proven results.",
  alternates: {
    canonical: "https://klikkit.co.uk/locations",
  },
};

export default function LocationsPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Locations", href: "/locations" }]} />

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
              Serving South London & Kent
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I work with businesses across South London and Kent, combining
              local market knowledge with digital expertise. Whether you&apos;re on a
              busy high street or in a quieter town, I can help you grow online.
            </p>
          </div>
        </div>
      </section>

      {/* South London */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                South London
              </h2>
              <p className="text-muted-foreground">
                Local digital services for South London businesses
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/locations/south-london">
                View all South London
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {southLondonLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/south-london/${location.slug}`}
                className="group"
              >
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-primary mb-3">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm font-medium">South London</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {location.name}
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

      {/* Kent */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Kent</h2>
              <p className="text-muted-foreground">
                Digital services for businesses across Kent
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/locations/kent">
                View all Kent
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kentLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/kent/${location.slug}`}
                className="group"
              >
                <Card className="h-full transition-shadow hover:shadow-md bg-background">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-primary mb-3">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm font-medium">Kent</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {location.name}
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

      {/* Services available */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Services available in all locations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              No matter where you&apos;re based, you get the same high-quality service
              and local market expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/web-design" className="group">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    Web Design
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Beautiful, fast websites optimised for local search. Help
                    customers find you online.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/ios-app-development" className="group">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    iOS App Development
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Native apps for booking, ordering, and customer engagement.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/ai-for-business" className="group">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    AI for Business
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Chatbots, automation, and lead qualification that save time.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to grow your local business?"
        description="Book a free call to discuss how I can help."
        variant="primary"
      />
    </>
  );
}

