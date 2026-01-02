export interface LocalBusinessData {
  name?: string;
  description?: string;
  areaServed?: string[];
  services?: string[];
}

export function generateLocalBusinessSchema(data: LocalBusinessData = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://klikkit.co.uk/#business",
    name: data.name || "Klikkit",
    description:
      data.description ||
      "Modern, conversion-first websites, iOS apps, and practical AI systems for small businesses in South London & Kent.",
    url: "https://klikkit.co.uk",
    email: "contact@klikkit.co.uk",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressRegion: "Greater London",
      addressCountry: "GB",
    },
    areaServed: data.areaServed || [
      {
        "@type": "Place",
        name: "South London",
      },
      {
        "@type": "Place",
        name: "Kent",
      },
    ],
    priceRange: "££",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.linkedin.com/company/klikkit",
      "https://twitter.com/klikkit",
    ],
  };
}

export interface ServiceSchemaData {
  name: string;
  description: string;
  url: string;
  provider?: string;
}

export function generateServiceSchema(data: ServiceSchemaData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    url: data.url,
    provider: {
      "@type": "LocalBusiness",
      name: data.provider || "Klikkit",
      url: "https://klikkit.co.uk",
    },
    areaServed: [
      {
        "@type": "Place",
        name: "South London",
      },
      {
        "@type": "Place",
        name: "Kent",
      },
    ],
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface ArticleSchemaData {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}

export function generateArticleSchema(data: ArticleSchemaData) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    url: data.url,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    image: data.image || "https://klikkit.co.uk/og-image.jpg",
    author: {
      "@type": "Organization",
      name: "Klikkit",
      url: "https://klikkit.co.uk",
    },
    publisher: {
      "@type": "Organization",
      name: "Klikkit",
      url: "https://klikkit.co.uk",
      logo: {
        "@type": "ImageObject",
        url: "https://klikkit.co.uk/logo.png",
      },
    },
  };
}

