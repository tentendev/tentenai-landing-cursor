import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TB46GJTW');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TB46GJTW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <LanguageProvider>
        {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
