import type { Metadata, Viewport } from "next";
import { Inter, Amiri, Scheherazade_New } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ThemeProvider } from "@/app/components/ThemeProvider";

import whatsapp from "@/public/whatsappIcon.png";

import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────
// FONTS
// ─────────────────────────────────────────────────────────────

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-amiri",
  display: "swap",
});

const scheherazade = Scheherazade_New({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-scheherazade",
  display: "swap",
});

// ─────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────

const SITE_URL = "http://shiaquranpak.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Online Shia Quran Classes | Shia Quran Pak Academy",
    template: "%s | Shia Quran Pak Academy",
  },

  description:
    "Join Shia Quran Pak Academy for online Quran classes, Tajweed, Diniyat, Ziyarat, and Islamic studies with experienced Shia teachers. Worldwide classes for kids and adults.",

  keywords: [
    "Shia Quran Academy",
    "Shia Quran Pak Academy",
    "Online Quran Classes",
    "Online Shia Quran Classes",
    "Learn Quran Online",
    "Online Tajweed Classes",
    "Quran Teacher Online",
    "Shia Diniyat Classes",
    "Ziyarat Classes",
    "Islamic Studies Online",
    "Ahlulbayt Teachings",
    "Noorani Qaida Online",
    "Quran Memorization",
    "Online Madressa",
    "Shia Quran Tutor",
    "Quran for Kids",
    "Quran for Adults",
    "Online Islamic Education",
    "Pakistan Quran Academy",
    "Worldwide Quran Classes",
  ],

  authors: [
    {
      name: "Shia Quran Pak Academy",
      url: SITE_URL,
    },
  ],

  creator: "Shia Quran Pak Academy",
  publisher: "Shia Quran Pak Academy",

  category: "Education",
  applicationName: "Shia Quran Pak Academy",

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,

    title: "Online Shia Quran Classes | Shia Quran Pak Academy",

    description:
      "Learn Quran, Tajweed, Diniyat, Ziyarat and Islamic studies online with experienced Shia teachers. Classes available worldwide.",

    siteName: "Shia Quran Pak Academy",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shia Quran Pak Academy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Online Shia Quran Classes | Shia Quran Pak Academy",

    description:
      "Online Quran classes, Tajweed, Diniyat and Islamic studies with qualified Shia teachers.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// ─────────────────────────────────────────────────────────────
// VIEWPORT
// ─────────────────────────────────────────────────────────────

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,

  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#030102",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// STRUCTURED DATA
// ─────────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",

  name: "Shia Quran Pak Academy",

  url: SITE_URL,

  logo: `${SITE_URL}/logo.png`,

  description:
    "Online Shia Quran classes, Tajweed, Diniyat, Ziyarat and Islamic education for students worldwide.",

  telephone: "+92-339-4022926",

  areaServed: "Worldwide",

  sameAs: [
    // Add your social media URLs here
    // "https://facebook.com/yourpage",
    // "https://instagram.com/yourpage",
    // "https://youtube.com/yourchannel",
  ],

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-339-4022926",
    contactType: "customer support",
    areaServed: "Worldwide",
    availableLanguage: ["English", "Urdu"],
  },
};

// ─────────────────────────────────────────────────────────────
// ROOT LAYOUT
// ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${inter.variable}
          ${amiri.variable}
          ${scheherazade.variable}
          font-sans
          flex
          min-h-screen
          flex-col
          bg-white
          text-gray-900
          antialiased
          transition-colors
          duration-300
          dark:bg-gray-950
          dark:text-gray-100
        `}
      >
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />

          <main className="grow">{children}</main>

          {/* WhatsApp Floating Button */}
          <Link
            href="https://wa.me/923394022926"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-7 right-7 z-50"
          >
            <Image
              src={whatsapp}
              alt="WhatsApp"
              width={56}
              height={56}
              priority
            />
          </Link>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}