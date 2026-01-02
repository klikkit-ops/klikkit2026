import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABand } from "@/components/sections/CTABand";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { caseStudies, getCaseStudy } from "@/lib/data/case-studies";
import { generateBreadcrumbSchema } from "@/lib/seo/structured-data";
import { ArrowRight, Quote, MapPin, Clock } from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.title} | Case Study`,
    description: study.summary,
    alternates: {
      canonical: `https://klikkit.co.uk/case-studies/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://klikkit.co.uk" },
    { name: "Work", url: "https://klikkit.co.uk/work" },
    { name: study.title, url: `https://klikkit.co.uk/case-studies/${study.slug}` },
  ]);

  const otherStudies = caseStudies.filter((s) => s.slug !== study.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Work", href: "/work" },
              { label: study.title, href: `/case-studies/${study.slug}` },
            ]}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4">{study.service}</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
              {study.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">{study.summary}</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {study.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {study.timeline}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {study.metrics.map((metric) => (
              <Card key={metric.label}>
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">
                    {metric.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  The Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  The Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {study.solution}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  The Results
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {study.results}
                </p>
              </div>

              {study.testimonial && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8">
                    <Quote className="h-8 w-8 text-primary/30 mb-4" />
                    <p className="text-lg text-foreground mb-4">
                      &ldquo;{study.testimonial.quote}&rdquo;
                    </p>
                    <p className="font-semibold text-foreground">
                      {study.testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {study.testimonial.role}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    Project Details
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Client</p>
                      <p className="font-medium">{study.client}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Service</p>
                      <p className="font-medium">{study.service}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Timeline</p>
                      <p className="font-medium">{study.timeline}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link href="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      {otherStudies.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              More case studies
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {otherStudies.map((otherStudy) => (
                <Link
                  key={otherStudy.slug}
                  href={`/case-studies/${otherStudy.slug}`}
                  className="group"
                >
                  <Card className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src={otherStudy.image}
                        alt={otherStudy.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-2">
                        {otherStudy.service}
                      </Badge>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {otherStudy.title}
                      </h3>
                      <p className="text-muted-foreground">{otherStudy.client}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand
        title="Ready to get results like these?"
        description="Book a free call to discuss your project."
        variant="primary"
      />
    </>
  );
}
