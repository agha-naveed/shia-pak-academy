import type { Metadata } from "next";
import BlogPostPage from "./ConnectWithQuran";

export const metadata: Metadata = {
  title: "How to Connect with the Quran in Daily Life | Shia Quran Pak Academy",
  description:
    "Learn practical ways to build a deep connection with the Quran through reflection, Tajweed, daily habits, and teachings of Ahlulbayt (ع).",
  keywords: [
    "Quran connection",
    "learn Quran online",
    "Shia Quran academy",
    "Quran Tajweed",
    "Quran tafseer",
    "Islamic education Pakistan",
  ],
  authors: [{ name: "Shia Quran Pak Academy" }],
  creator: "Shia Quran Pak Academy",
  publisher: "Shia Quran Pak Academy",
  metadataBase: new URL("https://shiaquranpak.com"),

  alternates: {
    canonical: "/blogs/how-to-connect-with-quran",
  },

  openGraph: {
    title: "How to Connect with the Quran in Daily Life",
    description:
      "Step-by-step guide to building a strong daily relationship with the Quran using reflection, Tajweed, and Ahlulbayt teachings.",
    url: "https://shiaquranpak.com/blogs/how-to-connect-with-quran",
    siteName: "Shia Quran Pak Academy",
    type: "article",
    images: [
      {
        url: "https://shiaquranpak.com/_next/static/media/quran.13gtbz3k0eaip.jpg",
        width: 1200,
        height: 630,
        alt: "Quran connection guide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "How to Connect with the Quran in Daily Life",
    description:
      "Practical guide to strengthen your daily Quran connection.",
    images: ["https://shiaquranpak.com/_next/static/media/quran.13gtbz3k0eaip.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const shareUrl =
    "https://shiaquranpak.com/blogs/how-to-connect-with-quran";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Connect with the Quran in Daily Life",
    url: shareUrl,
    author: {
      "@type": "Organization",
      name: "Shia Quran Pak Academy",
    },
  };

  return (
    <>
      {/* SEO ONLY (NO DESIGN CHANGE) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* YOUR ORIGINAL PAGE DESIGN GOES INSIDE CLIENT */}
      <BlogPostPage />
    </>
  );
}