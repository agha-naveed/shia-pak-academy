import type { Metadata, Viewport } from "next";
import { Inter, Amiri, Scheherazade_New } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import whatsapp from "@/public/whatsappIcon.png"
import Image from "next/image";
import Link from "next/link";

// ─── FONT OPTIMIZATION ────────────────────────────────────────────────────────
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

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // IMPORTANT: Change this to your actual deployed domain
  metadataBase: new URL("https://shiaquranpak.com"), 
  title: {
    default: "Shia Quran Pak Academy | Learn. Believe. Practice.",
    template: "%s | Shia Quran Pak Academy",
  },
  description:
    "A complete platform to learn Quran, Shia Dinyaat, Ziyarat and the teachings of Ahlulbayt (عليهم السلام) online with certified scholars.",
  keywords: ["Shia Quran Classes", "Online Quran Academy", "Shia", "Dinyaat", "Ziyarat", "Ahlulbayt", "Online Tajweed"],
  authors: [{ name: "Shia Quran Pak Academy" }],
  creator: "Shia Quran Pak Academy",
  
  // Open Graph for WhatsApp, Facebook, LinkedIn
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Shia Quran Pak Academy | Online Classes",
    description: "Master the recitation, understand the divine meanings, and build a strong Islamic foundation from anywhere in the world.",
    siteName: "Shia Quran Pak Academy",
    images: [
      {
        url: "/og-image.jpg", // Create a 1200x630 image and put it in your /public folder
        width: 1200,
        height: 630,
        alt: "Shia Quran Pak Academy Preview",
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Shia Quran Pak Academy",
    description: "Learn Quran, Shia Dinyaat, and Ziyarat online.",
    images: ["/og-image.jpg"], // Uses the same image from the public folder
  },
  
  // Canonical URL prevents duplicate content penalties
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#030102" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// ─── ROOT LAYOUT ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* We apply the font variables directly to the body tag */}
      <body 
        className={`${inter.variable} ${amiri.variable} ${scheherazade.variable} font-sans flex min-h-screen flex-col bg-white text-gray-900 antialiased transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="grow">
            {children}
          </main>
            <Link href={"https://wa.me/+923394022926"} target="_blank" className="fixed bottom-7 right-7">
              <Image src={whatsapp} alt="Whatsapp Icon" width={40} height={40} />
            </Link>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
