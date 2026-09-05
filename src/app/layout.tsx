import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteInfo, siteUrl } from "@/data/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const title = "Almapuro Agri | Pure by Nature, Powered by Technology";
const description =
  "Premium sun-dried tomatoes and naturally processed moringa, lemon, curry leaf, beetroot and chilli powders from Karnataka, India. FSSAI certified, 100% natural, farm-fresh — Almapuro Agri Private Limited.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteInfo.name}`,
  },
  description,
  keywords: [
    "Almapuro Agri",
    "sun-dried tomatoes",
    "moringa powder",
    "drumstick leaf powder",
    "organic farm produce Karnataka",
    "FSSAI certified powders",
    "natural spice powders India",
    "wholesale agri produce",
  ],
  authors: [{ name: siteInfo.legalName, url: siteUrl }],
  creator: siteInfo.legalName,
  publisher: siteInfo.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: siteInfo.name,
    title,
    description,
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1843,
        height: 770,
        alt: "Almapuro Agri sun-dried tomatoes, moringa and lemon powder on a farm table",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteInfo.legalName,
  alternateName: siteInfo.name,
  url: siteUrl,
  logo: `${siteUrl}${siteInfo.logo}`,
  slogan: siteInfo.tagline,
  telephone: siteInfo.phone,
  email: siteInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteInfo.address,
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  sameAs: Object.values(siteInfo.social).filter((url) => url && url !== "#"),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteInfo.name,
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
