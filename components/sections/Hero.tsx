"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  showTrustLine?: boolean;
}

const floatingOrbs = [
  { size: 300, x: "10%", y: "20%", delay: 0, duration: 20 },
  { size: 200, x: "70%", y: "10%", delay: 5, duration: 25 },
  { size: 250, x: "80%", y: "60%", delay: 10, duration: 22 },
  { size: 150, x: "20%", y: "70%", delay: 15, duration: 18 },
];

export function Hero({
  badge,
  title,
  subtitle,
  primaryCta = { text: "Book a Free Call", href: "/contact" },
  secondaryCta = { text: "View Our Work", href: "/work" },
  showTrustLine = true,
}: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingOrbs.map((orb, index) => (
          <div
            key={index}
            className="absolute rounded-full blur-3xl opacity-20 animate-float"
            style={{
              width: orb.size,
              height: orb.size,
              left: orb.x,
              top: orb.y,
              background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`,
              animationDelay: `${orb.delay}s`,
              animationDuration: `${orb.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Geometric Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Accent Lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-20 right-1/3 w-px h-48 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-20 left-1/3 w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          {badge && (
            <div
              className={`mb-6 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Badge 
                variant="outline" 
                className="gap-2 px-4 py-2 text-sm border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                {badge}
              </Badge>
            </div>
          )}

          {/* Title */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-6 transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {title.split(" ").map((word, index) => {
              // Highlight key words
              const highlights = ["conversion-first", "iOS", "AI", "Websites", "Apps", "modern,"];
              const isHighlighted = highlights.some(h => 
                word.toLowerCase().includes(h.toLowerCase())
              );
              return (
                <span
                  key={index}
                  className={`inline-block mr-[0.25em] ${
                    isHighlighted ? "text-primary" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {word}
                </span>
              );
            })}
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {subtitle}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button 
              asChild 
              size="lg" 
              className="text-base px-8 py-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all group"
            >
              <Link href={primaryCta.href}>
                {primaryCta.text}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 border-2 group hover:bg-foreground hover:text-background transition-all"
            >
              <Link href={secondaryCta.href}>
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                {secondaryCta.text}
              </Link>
            </Button>
          </div>

          {/* Trust Line */}
          {showTrustLine && (
            <div
              className={`flex flex-wrap items-center gap-6 text-sm text-muted-foreground transition-all duration-700 delay-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/60 to-primary/20 border-2 border-background flex items-center justify-center text-xs font-medium text-primary-foreground"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="ml-2">50+ happy clients</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-primary fill-primary"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1">4.9 average rating</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <span>South London & Kent</span>
            </div>
          )}
        </div>

        {/* Decorative Elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="relative w-80 h-80">
            {/* Rotating circles */}
            <div className="absolute inset-0 border-2 border-dashed border-primary/10 rounded-full animate-spin-slow" />
            <div className="absolute inset-8 border border-primary/20 rounded-full animate-spin-reverse" />
            <div className="absolute inset-16 bg-gradient-to-br from-primary/10 to-transparent rounded-full" />
            
            {/* Floating dots */}
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full animate-pulse" />
            <div className="absolute bottom-8 right-8 w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-300" />
            <div className="absolute top-1/4 left-0 w-2 h-2 bg-primary/40 rounded-full animate-pulse delay-500" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
