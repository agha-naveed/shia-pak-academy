import { Metadata } from "next";
import PricingClient from "./PricingClient"; // Adjust the import path if needed

export const metadata: Metadata = {
  title: "Online Quran Course Pricing & Fees | Pak Academy",
  description: "Affordable online Quran classes for individuals and families. Flexible monthly plans, certified tutors, and 1-on-1 interactive sessions. Start your free trial today!",
  keywords: [
    "Online Quran pricing", 
    "Quran classes fee", 
    "Learn Quran online cost", 
    "Pak Academy tuition", 
    "Family Quran plans", 
    "Online Tajweed course fee"
  ],
  alternates: {
    // Replace with your actual live domain
    canonical: "https://shiaquranpak.com/course-pricing-online-quran-pak-academy", 
  },
  openGraph: {
    title: "Affordable Online Quran Classes | View Pricing Plans",
    description: "Explore our flexible individual and family pricing plans for 1-on-1 online Quran classes. No hidden fees, cancel anytime.",
    url: "https://shiaquranpak.com/course-pricing-online-quran-pak-academy",
    siteName: "Pak Academy",
    locale: "en_US",
    type: "website",
    // images: [{ url: "https://yourwebsite.com/images/pricing-og.jpg", width: 1200, height: 630 }], // Uncomment and add an image URL for social sharing previews
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Course Pricing & Fees",
    description: "Check out our affordable individual and family plans for learning the Quran online.",
  },
};

export default function CoursePricingPage() {
  return <PricingClient />;
}