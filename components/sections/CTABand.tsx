import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTABandProps {
  title: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: "default" | "primary";
}

export function CTABand({
  title,
  description,
  ctaText = "Book a Free Call",
  ctaHref = "/contact",
  variant = "default",
}: CTABandProps) {
  const isPrimary = variant === "primary";

  return (
    <section
      className={`py-16 ${
        isPrimary ? "bg-primary text-primary-foreground" : "bg-foreground text-background"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h2>
            {description && (
              <p
                className={`text-lg ${
                  isPrimary ? "text-primary-foreground/80" : "text-background/70"
                }`}
              >
                {description}
              </p>
            )}
          </div>
          <Button
            asChild
            size="xl"
            variant={isPrimary ? "secondary" : "default"}
            className={isPrimary ? "bg-background text-foreground hover:bg-background/90" : ""}
          >
            <Link href={ctaHref}>
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

