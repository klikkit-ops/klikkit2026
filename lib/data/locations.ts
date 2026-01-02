export interface Location {
  slug: string;
  name: string;
  region: "south-london" | "kent";
  regionName: string;
  headline: string;
  description: string;
  intro: string;
  localProof: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const southLondonLocations: Location[] = [
  {
    slug: "streatham",
    name: "Streatham",
    region: "south-london",
    regionName: "South London",
    headline: "Web Design, Apps & AI for Streatham Businesses",
    description:
      "Professional web design, iOS app development, and AI automation for businesses in Streatham, South London. Local expertise, proven results.",
    intro:
      "Streatham is home to a thriving mix of independent retailers, cafes, and service businesses along the high street. We've worked with local businesses here for years, helping them compete online with larger chains. From the Streatham Hill end to Streatham Common, we understand what local customers are looking for.",
    localProof: [
      "Streatham Home & Garden — E-commerce rebuild (+156% sales)",
      "The Golden Bowl — Restaurant ordering app",
      "Streatham Dental Practice — New patient booking system",
    ],
    faqs: [
      {
        question: "Do you meet Streatham clients in person?",
        answer:
          "Yes! We're based nearby and happy to meet at your premises or a local cafe for project kickoffs and key meetings. Most day-to-day communication happens over video call.",
      },
      {
        question: "How can a website help my Streatham business?",
        answer:
          "A well-optimised website helps you appear in local searches like 'plumber near Streatham' or 'Streatham cafe'. Combined with Google Business Profile optimisation, you can capture customers searching for services in your area.",
      },
      {
        question: "What kind of businesses do you work with in Streatham?",
        answer:
          "We work with all kinds — retail shops, restaurants, professional services, tradespeople, wellness studios. If you serve customers in Streatham and want to grow your online presence, we can help.",
      },
    ],
  },
  {
    slug: "dulwich",
    name: "Dulwich",
    region: "south-london",
    regionName: "South London",
    headline: "Web Design, Apps & AI for Dulwich Businesses",
    description:
      "Professional web design, iOS app development, and AI automation for businesses in Dulwich, South London. Bespoke solutions for a discerning market.",
    intro:
      "Dulwich is a unique area with a strong sense of community and high expectations for quality. From the independent shops around Lordship Lane to the professional services catering to local families, businesses here need digital presence that reflects their premium positioning. We've helped several Dulwich businesses stand out online.",
    localProof: [
      "Mitchell's Plumbing — Local SEO website (+120% enquiries)",
      "Dulwich Wellness — Booking system integration",
      "East Dulwich Deli — E-commerce launch",
    ],
    faqs: [
      {
        question: "Can you help my Dulwich business rank on Google?",
        answer:
          "Absolutely. Local SEO is a key part of what we do. We'll optimise your site for searches like 'accountant Dulwich' or 'dog grooming East Dulwich', and help you build a strong Google Business Profile.",
      },
      {
        question: "Do you work with Dulwich retail businesses?",
        answer:
          "Yes, we've worked with several independent retailers on Lordship Lane and in Dulwich Village. Whether you need an online shop or just a beautiful brochure site, we can help.",
      },
      {
        question: "What makes working with a local studio better?",
        answer:
          "We understand the Dulwich market — the demographics, what locals value, and how to position your business. Plus, we're available for in-person meetings when needed.",
      },
    ],
  },
  {
    slug: "brixton",
    name: "Brixton",
    region: "south-london",
    regionName: "South London",
    headline: "Web Design, Apps & AI for Brixton Businesses",
    description:
      "Creative web design, iOS app development, and AI automation for businesses in Brixton, South London. Standing out in a vibrant market.",
    intro:
      "Brixton is one of London's most dynamic areas — a mix of independent businesses, creative ventures, and established local institutions. Whether you're a market trader, a new startup, or an established business looking to modernise, we help Brixton businesses build digital presence that captures their unique energy.",
    localProof: [
      "Brixton Village Collective — Multi-vendor platform",
      "Pop Brixton tenant — Brand website launch",
      "Local hair salon — Booking automation",
    ],
    faqs: [
      {
        question: "Do you work with Brixton market businesses?",
        answer:
          "Yes! We've worked with several Brixton Village and Market Row businesses. Even small traders can benefit from a professional online presence to reach customers before they visit.",
      },
      {
        question: "Can you build something unique for my creative business?",
        answer:
          "Absolutely. Brixton businesses often need something more distinctive than standard templates. We design custom solutions that reflect your brand's personality.",
      },
      {
        question: "What's your approach to working with startups?",
        answer:
          "We offer MVP packages designed for businesses testing new ideas. Start lean, prove the concept, then scale — we can support you at every stage.",
      },
    ],
  },
  {
    slug: "peckham",
    name: "Peckham",
    region: "south-london",
    regionName: "South London",
    headline: "Web Design, Apps & AI for Peckham Businesses",
    description:
      "Modern web design, iOS app development, and AI automation for businesses in Peckham, South London. Digital solutions for a changing neighbourhood.",
    intro:
      "Peckham has transformed dramatically over the past decade, with a thriving creative scene alongside long-established local businesses. From the bustling Rye Lane to the independent shops around Bellenden Road, we help Peckham businesses build digital presence that matches their ambitions.",
    localProof: [
      "Peckham creative agency — Portfolio website",
      "Rye Lane retailer — Online shop launch",
      "Local restaurant group — Multi-location site",
    ],
    faqs: [
      {
        question: "How can digital help my Rye Lane business?",
        answer:
          "A strong online presence helps you reach customers before they're even on the high street. Local SEO, social media integration, and online booking can all drive more footfall.",
      },
      {
        question: "Do you offer affordable options for small businesses?",
        answer:
          "Yes. We understand that not every Peckham business has a big budget. We offer starter packages from £1,500 and can discuss payment plans for qualifying clients.",
      },
      {
        question: "Can you help with food delivery integration?",
        answer:
          "Absolutely. Whether you want to integrate with Deliveroo/UberEats or build your own ordering system, we can help you reach more customers.",
      },
    ],
  },
];

export const kentLocations: Location[] = [
  {
    slug: "tunbridge-wells",
    name: "Tunbridge Wells",
    region: "kent",
    regionName: "Kent",
    headline: "Web Design, Apps & AI for Tunbridge Wells Businesses",
    description:
      "Professional web design, iOS app development, and AI automation for businesses in Tunbridge Wells, Kent. Premium digital solutions for a premium market.",
    intro:
      "Royal Tunbridge Wells is home to a sophisticated business community — from the independent boutiques of the Pantiles to professional services firms across the town. We work with Tunbridge Wells businesses who want digital presence that reflects their quality and reaches their discerning customers.",
    localProof: [
      "Tunbridge Wells Legal — AI lead qualification (+45% quality)",
      "The Pantiles boutique — E-commerce website",
      "Local accountancy firm — Lead generation site",
    ],
    faqs: [
      {
        question: "Do you travel to Tunbridge Wells for meetings?",
        answer:
          "Yes, we're happy to meet in person for project kickoffs and key milestones. Many clients also find video calls more convenient for regular check-ins.",
      },
      {
        question: "What kind of Tunbridge Wells businesses do you work with?",
        answer:
          "We work with professional services (legal, accounting, consulting), retail, hospitality, and wellness businesses. If you're looking to grow your online presence, we can help.",
      },
      {
        question: "Can you help me compete with larger firms online?",
        answer:
          "Absolutely. Good SEO and a professional website can help smaller businesses compete effectively with larger competitors in local search results.",
      },
    ],
  },
  {
    slug: "canterbury",
    name: "Canterbury",
    region: "kent",
    regionName: "Kent",
    headline: "Web Design, Apps & AI for Canterbury Businesses",
    description:
      "Professional web design, iOS app development, and AI automation for businesses in Canterbury, Kent. Digital solutions for a historic city.",
    intro:
      "Canterbury combines rich heritage with a vibrant modern economy. From tourism-dependent businesses in the city centre to services catering to the university community, we help Canterbury businesses reach their audiences online. Whether you're targeting visitors, students, or local residents, we can help.",
    localProof: [
      "Zen Space Canterbury — Booking app (2,400+ downloads)",
      "Canterbury guest house — Direct booking website",
      "Local tour operator — Booking system integration",
    ],
    faqs: [
      {
        question: "Can you help my tourism business get more direct bookings?",
        answer:
          "Yes! Many Canterbury businesses lose revenue to booking platforms. We can build direct booking systems that save you commission and build customer relationships.",
      },
      {
        question: "Do you work with student-focused businesses?",
        answer:
          "Absolutely. Canterbury's large student population is a key market for many businesses. We can help you reach them through mobile-optimised sites and apps.",
      },
      {
        question: "How can local SEO help in Canterbury?",
        answer:
          "Tourists searching for 'restaurants Canterbury' or 'things to do Canterbury' can find your business if you're properly optimised. Local SEO is especially valuable here.",
      },
    ],
  },
  {
    slug: "maidstone",
    name: "Maidstone",
    region: "kent",
    regionName: "Kent",
    headline: "Web Design, Apps & AI for Maidstone Businesses",
    description:
      "Professional web design, iOS app development, and AI automation for businesses in Maidstone, Kent. Digital growth for the county town.",
    intro:
      "As Kent's county town, Maidstone is a commercial hub with a diverse business community. From professional services in the town centre to retail and leisure businesses, we help Maidstone companies build digital presence that drives growth. The area's strong transport links mean you can reach customers across the county.",
    localProof: [
      "Maidstone law firm — Website redesign",
      "Local manufacturing company — Lead generation system",
      "Kent recruitment agency — AI automation",
    ],
    faqs: [
      {
        question: "Do you work with B2B businesses in Maidstone?",
        answer:
          "Yes, we work with several B2B companies. Whether you need a corporate website, lead generation, or internal tools, we can help.",
      },
      {
        question: "Can you help us reach customers across Kent?",
        answer:
          "Absolutely. Maidstone's central location makes it ideal for serving the whole county. We can optimise your site to appear in searches across Kent.",
      },
      {
        question: "What about AI for business operations?",
        answer:
          "AI automation can streamline many business processes — from customer enquiries to internal workflows. We'll identify the best opportunities for your specific situation.",
      },
    ],
  },
  {
    slug: "sittingbourne",
    name: "Sittingbourne",
    region: "kent",
    regionName: "Kent",
    headline: "Web Design, Apps & AI for Sittingbourne Businesses",
    description:
      "Professional web design, iOS app development, and AI automation for businesses in Sittingbourne, Kent. Affordable digital solutions for growing businesses.",
    intro:
      "Sittingbourne is a growing town with an increasingly diverse business community. Whether you're an established local business or part of the town's new developments, we help Sittingbourne companies build effective online presence. Good value digital solutions that deliver real results.",
    localProof: [
      "Sittingbourne trade business — Lead generation website",
      "Local care provider — Staff portal",
      "High street retailer — E-commerce launch",
    ],
    faqs: [
      {
        question: "Do you offer affordable packages for Sittingbourne businesses?",
        answer:
          "Yes, we understand budget considerations. We offer starter packages from £1,500 and can discuss payment plans to make professional digital services accessible.",
      },
      {
        question: "Can you help tradespeople get more leads?",
        answer:
          "Absolutely. A well-optimised website is essential for trades. We'll help you appear in searches like 'plumber Sittingbourne' and convert visitors into enquiries.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Most websites take 4-8 weeks. We'll give you a clear timeline after our initial call based on your specific requirements.",
      },
    ],
  },
];

export const allLocations = [...southLondonLocations, ...kentLocations];

export function getLocation(region: string, slug: string): Location | undefined {
  return allLocations.find(
    (loc) => loc.region === region && loc.slug === slug
  );
}

export function getLocationsByRegion(region: "south-london" | "kent"): Location[] {
  return allLocations.filter((loc) => loc.region === region);
}
