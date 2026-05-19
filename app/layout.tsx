import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ThemeProvider } from "@/app/components/ThemeProvider";

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Shia Dinyaat — Learn. Believe. Practice.",
    template: "%s | Shia Dinyaat",
  },
  description:
    "A complete platform to learn Quran, Shia Dinyaat, Ziyarat and the teachings of Ahlulbayt (عليهم السلام).",
  keywords: ["Quran", "Shia", "Dinyaat", "Ziyarat", "Islamic Learning", "Ahlulbayt"],
  authors: [{ name: "Agha Naveed" }],
  creator: "Agha Naveed",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Scheherazade+New:wght@400;700&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* Tailwind classes here handle the root background. 
        next-themes will automatically add/remove the "dark" class to the HTML tag.
      */}
      <body className="flex min-h-screen flex-col bg-white text-gray-900 font-sans antialiased transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}