import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTABand } from "@/components/sections/CTABand";
import { blogPosts, getBlogPost, getAllBlogPosts } from "@/lib/data/blog-posts";
import { formatDate } from "@/lib/utils";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo/structured-data";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://klikkit.co.uk/insights/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Klikkit"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    url: `https://klikkit.co.uk/insights/${post.slug}`,
    datePublished: post.date,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://klikkit.co.uk" },
    { name: "Insights", url: "https://klikkit.co.uk/insights" },
    { name: post.title, url: `https://klikkit.co.uk/insights/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, breadcrumbSchema]),
        }}
      />

      <article className="pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Insights", href: "/insights" },
              { label: post.title, href: `/insights/${post.slug}` },
            ]}
          />

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge>{post.category}</Badge>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                {post.readingTime}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground">{post.description}</p>
            <time className="block mt-4 text-sm text-muted-foreground">
              Published {formatDate(post.date)}
            </time>
          </header>

          <div className="prose prose-lg prose-neutral max-w-none">
            {post.content.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-foreground mt-12 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-foreground mt-8 mb-3">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <p key={index} className="font-semibold text-foreground">
                    {paragraph.replace(/\*\*/g, "")}
                  </p>
                );
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <li key={index} className="text-muted-foreground ml-6">
                    {paragraph.replace("- ", "")}
                  </li>
                );
              }
              if (paragraph.startsWith("1. ") || paragraph.startsWith("2. ") || paragraph.startsWith("3. ")) {
                return (
                  <li key={index} className="text-muted-foreground ml-6 list-decimal">
                    {paragraph.replace(/^\d+\.\s/, "")}
                  </li>
                );
              }
              if (paragraph.trim() === "---") {
                return <hr key={index} className="my-8 border-border" />;
              }
              if (paragraph.trim() === "") {
                return null;
              }
              // Handle links
              const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
              const parts = [];
              let lastIndex = 0;
              let match;
              while ((match = linkRegex.exec(paragraph)) !== null) {
                if (match.index > lastIndex) {
                  parts.push(paragraph.slice(lastIndex, match.index));
                }
                parts.push(
                  <Link key={match.index} href={match[2]} className="text-primary hover:underline">
                    {match[1]}
                  </Link>
                );
                lastIndex = match.index + match[0].length;
              }
              if (lastIndex < paragraph.length) {
                parts.push(paragraph.slice(lastIndex));
              }
              return (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                  {parts.length > 0 ? parts : paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </article>

      {/* Post Navigation */}
      <section className="border-t">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between">
            {prevPost ? (
              <Button asChild variant="ghost" className="gap-2">
                <Link href={`/insights/${prevPost.slug}`}>
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </Link>
              </Button>
            ) : (
              <div />
            )}
            {nextPost && (
              <Button asChild variant="ghost" className="gap-2">
                <Link href={`/insights/${nextPost.slug}`}>
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Related articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/insights/${relatedPost.slug}`}
                  className="group"
                >
                  <Card>
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand
        title="Have a project in mind?"
        description="Book a free call to discuss how we can help."
        variant="primary"
      />
    </>
  );
}
