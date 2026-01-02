import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Klikkit | Web Design, iOS Apps & AI for Small Businesses",
    template: "%s | Klikkit",
  },
  description:
    "Modern, conversion-first websites, iOS apps, and practical AI systems for small businesses in South London & Kent.",
  metadataBase: new URL("https://klikkit.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://klikkit.co.uk",
    siteName: "Klikkit",
    title: "Klikkit | Web Design, iOS Apps & AI for Small Businesses",
    description:
      "Modern, conversion-first websites, iOS apps, and practical AI systems for small businesses in South London & Kent.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Klikkit - Web Design & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klikkit | Web Design, iOS Apps & AI for Small Businesses",
    description:
      "Modern, conversion-first websites, iOS apps, and practical AI systems for small businesses in South London & Kent.",
    images: ["/og-image.jpg"],
    creator: "@klikkit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
