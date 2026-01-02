import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Book a Free Consultation",
  description:
    "Get in touch to discuss your web design, iOS app, or AI automation project. Free 15-minute consultation. Based in South London, serving Kent.",
  alternates: {
    canonical: "https://klikkit.co.uk/contact",
  },
};

const faqs = [
  {
    question: "What happens after I submit the form?",
    answer:
      "We'll review your project details and respond within 24-48 hours with some initial thoughts and to arrange a call if it seems like a good fit.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes! The initial 15-minute call is always free. It's a chance for us to discuss your project and see if we're a good match.",
  },
  {
    question: "What information should I prepare?",
    answer:
      "Think about your business goals, target audience, rough budget range, and any examples of websites/apps you like. Don't worry if you're not sure about everything — that's what the call is for.",
  },
  {
    question: "Do you work with businesses outside South London & Kent?",
    answer:
      "Absolutely. While we specialise in local businesses, we work with clients across the UK and internationally. Most of our work is done remotely.",
  },
  {
    question: "How quickly can you start?",
    answer:
      "Typically within 1-2 weeks of signing. For urgent projects, we can sometimes start sooner — just let us know your timeline.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
              Let&apos;s talk about your project
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Fill out the form below and we&apos;ll get back to you within 24-48
              hours. Or, book a call directly if you prefer.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact details */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    Contact details
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="mailto:contact@klikkit.co.uk"
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Mail className="h-5 w-5 text-primary" />
                        contact@klikkit.co.uk
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-primary" />
                      South London & Kent, UK
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="h-5 w-5 text-primary" />
                      Mon-Fri: 9am - 6pm
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Response time */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-foreground">
                    ⚡ Typical response time
                  </p>
                  <p className="text-2xl font-bold text-primary mt-1">
                    24-48 hours
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Contact FAQs"
        subtitle="Common questions about getting started"
        faqs={faqs}
      />
    </>
  );
}

