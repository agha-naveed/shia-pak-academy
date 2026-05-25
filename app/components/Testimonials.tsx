"use client";

import { Star, Quote, CheckCircle } from "lucide-react";

// ─── MOCK DATA ─────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    name: "Aliya R.",
    location: "United Kingdom",
    role: "Parent of 2 Students",
    text: "Finding a qualified Shia teacher online was so difficult until we found this academy. My children love their Aalima, and their Tajweed has improved drastically in just 3 months. The focus on Akhlaq is exactly what we wanted.",
    rating: 5,
  },
  {
    name: "Hassan Abbas",
    location: "United States",
    role: "Adult Learner",
    text: "I started from absolute zero, barely knowing the Arabic alphabet. The patience of the scholar teaching me is incredible. The 1-on-1 format means I never feel embarrassed to ask questions. Highly recommended for adults!",
    rating: 5,
  },
  {
    name: "Zainab F.",
    location: "Canada",
    role: "Hifz Student",
    text: "The Hifz program is very well structured. My teacher doesn't just push me to memorize new verses, but ensures my previous Sabqi is solid. The digital screen sharing makes following the color-coded Tajweed effortless.",
    rating: 5,
  },
];

const TRUST_METRICS = [
  { value: "500+", label: "Active Students" },
  { value: "15+", label: "Countries Reached" },
  { value: "100%", label: "Verified Faculty" },
  { value: "4.9/5", label: "Average Rating" },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#030102] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="mb-3 flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-500 uppercase">
            <Star className="h-4 w-4 fill-emerald-500" /> 
            Student Success Stories
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Trusted by Families Worldwide
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Don't just take our word for it. Hear from the parents and students who are experiencing the blessing of Quranic education with us every day.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {REVIEWS.map((review, i) => (
            <div 
              key={i} 
              className="relative bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300"
            >
              <Quote className="absolute top-8 right-8 h-10 w-10 text-emerald-100 dark:text-emerald-900/40 rotate-180" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 relative z-10">
                "{review.text}"
              </p>
              
              {/* Reviewer Info */}
              <div className="flex items-center gap-4 mt-auto border-t border-gray-200 dark:border-gray-800 pt-6">
                <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-700 dark:text-emerald-300 font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                    {review.name}
                    <CheckCircle className="h-3.5 w-3.5 text-blue-500" />
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {review.role} • {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics Bar */}
        <div className="bg-emerald-950 rounded-3xl p-8 sm:p-12 border border-emerald-900 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-emerald-800/50">
            {TRUST_METRICS.map((metric, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-emerald-100/70 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}