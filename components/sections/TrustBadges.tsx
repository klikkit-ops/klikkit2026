import { Clock, Shield, CreditCard, MapPin } from "lucide-react";

const badges = [
  {
    icon: Clock,
    title: "24-48hr Response",
    description: "Quick replies to all enquiries",
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description: "No hidden fees or surprises",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Split payments available",
  },
  {
    icon: MapPin,
    title: "UK-Based",
    description: "South London & Kent",
  },
];

export function TrustBadges() {
  return (
    <section className="py-12 border-y bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.title} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

