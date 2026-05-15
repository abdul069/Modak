import type { Metadata, Viewport } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { MetaPixel } from "@/components/tracking/MetaPixel";
import { GTM, GTMNoScript } from "@/components/tracking/GTM";
import { UTMCapture } from "@/components/tracking/UTMCapture";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Eén partner. Zes specialiteiten.`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  generator: "Next.js",
  keywords: [
    "dakwerken",
    "ramen en deuren",
    "renovatie",
    "HVAC",
    "warmtepomp",
    "zonnepanelen",
    "laadpalen",
    "Evergem",
    "Vlaanderen",
    "aannemer",
  ],
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="nl-BE"
      className={`${inter.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <head>
        <GTM />
        <MetaPixel />
      </head>
      <body className="min-h-screen bg-white font-sans text-ink antialiased">
        <GTMNoScript />
        <a href="#main" className="skip-link">
          Spring naar inhoud
        </a>
        <LenisProvider>
          <Header />
          <main id="main" className="min-h-[60vh]">
            {children}
          </main>
          <Footer />
        </LenisProvider>
        <UTMCapture />
        <Analytics />
      </body>
    </html>
  );
}
