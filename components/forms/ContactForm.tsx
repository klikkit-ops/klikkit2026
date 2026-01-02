"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

const budgetRanges = [
  { value: "under-2k", label: "Under £2,000" },
  { value: "2k-5k", label: "£2,000 - £5,000" },
  { value: "5k-10k", label: "£5,000 - £10,000" },
  { value: "10k-20k", label: "£10,000 - £20,000" },
  { value: "over-20k", label: "£20,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

const services = [
  { value: "web-design", label: "Web Design" },
  { value: "ios-app", label: "iOS App Development" },
  { value: "ai-automation", label: "AI & Automation" },
  { value: "multiple", label: "Multiple Services" },
  { value: "other", label: "Other / Not Sure" },
];

const locations = [
  { value: "south-london", label: "South London" },
  { value: "kent", label: "Kent" },
  { value: "other-uk", label: "Other UK Location" },
  { value: "remote", label: "Remote / International" },
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement actual form submission
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Thanks for reaching out!
        </h3>
        <p className="text-muted-foreground">
          We&apos;ll get back to you within 24-48 hours to discuss your project.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          name="company"
          placeholder="Your company name (optional)"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="service">Service Interest *</Label>
          <Select name="service" required>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.value} value={service.value}>
                  {service.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="budget">Budget Range *</Label>
          <Select name="budget" required>
            <SelectTrigger>
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              {budgetRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Your Location</Label>
        <Select name="location">
          <SelectTrigger>
            <SelectValue placeholder="Where are you based?" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((location) => (
              <SelectItem key={location.value} value={location.value}>
                {location.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Tell me about your project *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="What are you looking to build? What problems are you trying to solve? Any timeline in mind?"
          rows={5}
        />
      </div>

      <Button type="submit" size="xl" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        We typically respond within 24-48 hours. No spam, ever.
      </p>
    </form>
  );
}

