import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTABand } from "@/components/sections/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { generateBreadcrumbSchema } from "@/lib/seo/structured-data";
import { ArrowRight, Sparkles, Zap, Heart, Target, Users, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Klikkit | Web Design & Digital Studio in South London",
  description:
    "Klikkit is a digital studio specializing in conversion-first websites, iOS apps, and AI systems for small businesses across South London and Kent.",
  alternates: {
    canonical: "https://klikkit.co.uk/about",
  },
};

const values = [
  {
    icon: Target,
    title: "Results First",
    description:
      "We measure success by your success. Every decision is made with your business outcomes in mind.",
  },
  {
    icon: Sparkles,
    title: "Craft Matters",
    description:
      "We take pride in the details. Clean code, thoughtful design, and systems that just work.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description:
      "We're not a vendor, we're your digital partner. Your wins are our wins.",
  },
  {
    icon: Zap,
    title: "No Bureaucracy",
    description:
      "No account managers, no endless meetings. Direct access to the people doing the work.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description:
      "Clear pricing, honest timelines, and no hidden fees. What we quote is what you pay.",
  },
  {
    icon: Heart,
    title: "Long-term Thinking",
    description:
      "We build relationships, not just websites. Most of our clients stay with us for years.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "10+", label: "Years Experience" },
  { value: "97%", label: "Client Retention" },
  { value: "4.9", label: "Average Rating" },
];

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://klikkit.co.uk" },
    { name: "About", url: "https://klikkit.co.uk/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "About", href: "/about" }]}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
                A Digital Studio That Actually Gets Small Business
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                We&apos;re Klikkit — a tight-knit team of designers, developers, and strategists 
                who believe small businesses deserve the same quality digital experiences as the big players, 
                without the enterprise price tag or agency nonsense.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Based in South London, we work with ambitious local businesses and growing 
                companies across Kent. Whether you need a website that actually converts, 
                an iOS app that customers love, or AI systems that save you hours every week — 
                we&apos;ve got you covered.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Let&apos;s Talk
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-background/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="text-lg text-muted-foreground space-y-4 text-left">
              <p>
                Klikkit started in 2012 with a simple frustration: small businesses were being 
                underserved by the web design industry. Agencies wanted enterprise budgets for 
                basic websites. Freelancers often disappeared mid-project. Template solutions 
                looked generic and performed poorly.
              </p>
              <p>
                We knew there had to be a better way. What if a small team of genuinely skilled 
                people could deliver agency-quality work at freelancer prices? What if we 
                focused exclusively on the things that actually matter for business growth?
              </p>
              <p>
                That question became Klikkit. Today, we&apos;re a focused studio of specialists 
                who genuinely care about our clients&apos; success. We don&apos;t do everything — we do 
                web design, iOS apps, and practical AI implementation. And we do them exceptionally well.
              </p>
              <p>
                Our clients come to us for results, and they stay because we deliver. 
                Over 50 projects later, we&apos;re proud that 97% of our clients continue working 
                with us year after year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These aren&apos;t just words on a wall — they&apos;re how we actually work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="bg-background">
                <CardContent className="p-6">
                  <value.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                The Kind of Clients We Love
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We work best with small business owners and growing companies who:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Value quality over the cheapest quote — you understand good digital 
                      work is an investment, not an expense
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Want a partner, not just a vendor — you&apos;re looking for someone who 
                      genuinely cares about your success
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Are ready to invest in their business — starting from £2,500 for 
                      web projects
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Operate in South London, Kent, or the surrounding areas — though 
                      we work with clients nationwide
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Who We&apos;re Probably Not Right For
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In the interest of honesty, we&apos;re not the best fit if you:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-muted-foreground/50">✕</span>
                    <span>
                      Need the absolute cheapest option — there are cheaper alternatives, 
                      but you get what you pay for
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground/50">✕</span>
                    <span>
                      Want to micromanage every pixel — we work best when you trust our 
                      expertise
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground/50">✕</span>
                    <span>
                      Need a massive enterprise solution — we specialise in small 
                      business, not corporate
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground/50">✕</span>
                    <span>
                      Are looking for a one-off transaction — we build long-term 
                      relationships
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessTimeline />

      <CTABand
        title="Sound like a fit?"
        description="Book a free 15-minute call to see if we're right for each other."
        variant="primary"
      />
    </>
  );
}
