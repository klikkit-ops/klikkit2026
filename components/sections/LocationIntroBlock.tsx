import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

interface LocationIntroBlockProps {
  location: string;
  region: string;
  title: string;
  description: string;
  services?: string[];
}

export function LocationIntroBlock({
  location,
  region,
  title,
  description,
  services = [
    "Web Design",
    "iOS App Development",
    "AI for Business",
  ],
}: LocationIntroBlockProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-primary mb-6">
            <MapPin className="h-5 w-5" />
            <span className="font-medium">
              {location}, {region}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
            {title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {description}
          </p>

          <div className="mb-8">
            <p className="text-sm font-medium text-foreground mb-3">
              Services available in {location}:
            </p>
            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <span
                  key={service}
                  className="px-3 py-1.5 bg-muted text-sm rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <Button asChild size="xl">
            <Link href="/contact">
              Book a Free 15-Min Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

