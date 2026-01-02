import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Globe, Smartphone, Bot } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description:
      "Beautiful, fast, conversion-optimised websites that turn visitors into customers. Built for performance and SEO.",
    href: "/services/web-design",
    features: ["Custom design", "Mobile-first", "SEO optimised", "Fast loading"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/10 group-hover:bg-blue-500",
    iconColor: "text-blue-500 group-hover:text-white",
  },
  {
    icon: Smartphone,
    title: "iOS App Development",
    description:
      "Native iOS apps built with SwiftUI. From MVP to full product, we handle design, development, and App Store submission.",
    href: "/services/ios-app-development",
    features: ["SwiftUI native", "App Store ready", "Clean UX", "Ongoing support"],
    gradient: "from-violet-500/20 to-purple-500/20",
    iconBg: "bg-violet-500/10 group-hover:bg-violet-500",
    iconColor: "text-violet-500 group-hover:text-white",
  },
  {
    icon: Bot,
    title: "AI for Business",
    description:
      "Practical AI automations that save time and reduce costs. Chatbots, workflow automation, and lead triage systems.",
    href: "/services/ai-for-business",
    features: ["Chatbots", "Automation", "Lead triage", "Custom integrations"],
    gradient: "from-primary/20 to-amber-500/20",
    iconBg: "bg-primary/10 group-hover:bg-primary",
    iconColor: "text-primary group-hover:text-primary-foreground",
  },
];

interface ServicesGridProps {
  title?: string;
  subtitle?: string;
  showAll?: boolean;
}

export function ServicesGrid({
  title = "Services",
  subtitle,
  showAll = true,
}: ServicesGridProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.title} href={service.href} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden relative">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <CardContent className="p-8 relative">
                    <div className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.iconBg} transition-all duration-300`}>
                      <Icon className={`h-7 w-7 ${service.iconColor} transition-colors duration-300`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                      {service.title}
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-3 py-1.5 bg-muted/80 rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {showAll && (
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
