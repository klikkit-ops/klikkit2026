import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTABand } from "@/components/sections/CTABand";
import { getAllBlogPosts } from "@/lib/data/blog-posts";
import { formatDate } from "@/lib/utils";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights | Web Design, Apps & AI Blog",
  description:
    "Practical advice on web design, iOS app development, AI automation, and growing your business online. Written for small business owners.",
  alternates: {
    canonical: "https://klikkit.co.uk/insights",
  },
};

export default function InsightsPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Insights", href: "/insights" }]} />

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
              Insights
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Practical advice on web design, iOS apps, AI automation, and
              growing your business online. No fluff — just actionable insights
              for small business owners.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group"
              >
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <time className="text-sm text-muted-foreground">
                        {formatDate(post.date)}
                      </time>
                      <span className="text-primary flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Read more
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Have a project in mind?"
        description="Book a free call to discuss how we can help."
        variant="primary"
      />
    </>
  );
}

