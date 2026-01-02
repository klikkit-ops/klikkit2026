import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const services = [
  { name: "Web Design", href: "/services/web-design" },
  { name: "iOS App Development", href: "/services/ios-app-development" },
  { name: "AI for Business", href: "/services/ai-for-business" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Work", href: "/work" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

const locations = [
  { name: "South London", href: "/locations/south-london" },
  { name: "Kent", href: "/locations/kent" },
  { name: "Streatham", href: "/locations/south-london/streatham" },
  { name: "Tunbridge Wells", href: "/locations/kent/tunbridge-wells" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand + Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-background">
                klikkit<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm mb-6">
              Modern, conversion-first websites, iOS apps, and practical AI
              systems for small businesses in South London & Kent.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:contact@klikkit.co.uk"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                contact@klikkit.co.uk
              </a>
              <div className="flex items-center gap-2 text-background/70">
                <MapPin className="h-4 w-4" />
                South London & Kent, UK
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-background mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-background mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-semibold text-background mb-4">
              Locations
            </h3>
            <ul className="space-y-3">
              {locations.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-wrap gap-6 justify-center text-xs text-background/50">
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
              UK-based
            </span>
            <span>Transparent pricing</span>
            <span>24-48hr response time</span>
            <span>50+ projects delivered</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-background/10 text-center text-sm text-background/50">
          <p>
            &copy; {new Date().getFullYear()} Klikkit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

