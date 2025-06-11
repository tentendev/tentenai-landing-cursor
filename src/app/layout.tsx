import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from './contexts/LanguageContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tenten AI - Enterprise AI Consulting & Transformation",
  description: "Transform your enterprise with end-to-end AI solutions. AI consulting, automation, agentic workflows, and business transformation for companies with 1000+ employees. Save $50K-$500K+ on consultancy fees.",
  keywords: "AI consulting, enterprise AI transformation, business automation, agentic workflows, AI integration, N8N, Shopify AI, Webflow, AI workshops",
  authors: [{ name: "Tenten AI" }],
  openGraph: {
    title: "Tenten AI - Enterprise AI Consulting & Transformation",
    description: "Transform your enterprise with end-to-end AI solutions. Replace $50K-$500K+ consultancy fees with our proven AI transformation approach.",
    url: "https://tentenai.com",
    siteName: "Tenten AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tenten AI - Enterprise AI Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tenten AI - Enterprise AI Consulting & Transformation",
    description: "Transform your enterprise with end-to-end AI solutions. Replace $50K-$500K+ consultancy fees.",
    images: ["/og-image.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
