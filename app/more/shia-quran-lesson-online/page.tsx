"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  MessageCircle,
  PlayCircle,
  BookOpenCheck,
  LineChart,
  Star,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CalendarDays,
  Headphones,
  CheckCircle2
} from "lucide-react";
import logo from "@/public/logo.png";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const LESSON_FEATURES = [
  { icon: Headphones, title: "Crystal Clear Audio", desc: "Lessons are conducted with high-quality audio, ensuring the teacher can hear every nuance of your Makharij (pronunciation)." },
  { icon: LineChart, title: "Daily Progress Tracking", desc: "Your tutor keeps a log of your daily recitation, pointing out areas of improvement and celebrating your milestones." },
  { icon: BookOpenCheck, title: "Interactive Screen Sharing", desc: "Teachers share digital color-coded Quran pages on screen, making it easy to follow along with Tajweed rules." },
  { icon: Sparkles, title: "Engaging for Kids", desc: "Short, interactive lesson bursts designed to keep children focused, combining recitation with Islamic stories." },
];

const LESSON_STRUCTURE = [
  { step: "01", title: "Review & Warm-up", desc: "The first 5-10 minutes are dedicated to reviewing yesterday's lesson to ensure complete retention." },
  { step: "02", title: "New Recitation", desc: "The teacher introduces the new verses, reciting them slowly with perfect Tajweed for the student to listen and absorb." },
  { step: "03", title: "Guided Practice", desc: "The student recites the new lesson while the teacher gently corrects pronunciation, flow, and specific rules." },
  { step: "04", title: "Dinyaat / Akhlaq", desc: "The final few minutes are spent learning basic Fiqh, a short Dua, or a moral story from the Ahlulbayt (ع)." },
];

const FAQS = [
  { q: "How long is a standard Quran lesson?", a: "A standard lesson is typically 30 minutes long. This is the optimal time to maintain focus, especially for children, while ensuring steady daily progress. We also offer 60-minute sessions for advanced students." },
  { q: "What do I need to attend a lesson?", a: "All you need is a smartphone, tablet, or laptop with a stable internet connection. We use simple platforms like WhatsApp or Zoom, so there is no complicated software to install." },
  { q: "Do you provide the reading materials?", a: "Yes! We provide digital copies of the Noorani Qaida, color-coded Tajweed Qurans, and any supplementary Islamic studies material you might need during the lesson." },
  { q: "Is the lesson completely private?", a: "Absolutely. Unless you specifically request a family or group package, all our lessons are 1-on-1, providing you with 100% of the teacher's attention in a private setting." },
];

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────

export default function ShiaQuranLessonOnlinePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white dark:bg-[#030102] transition-colors duration-300">
      
      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1A0F] via-[#0D1F14] to-[#061008] py-16 lg:py-24">
        {/* Subtle decorative elements */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15)_0%,transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[url('/images/pattern.png')] opacity-[0.03] mix-blend-overlay" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            
            {/* Hero Text */}
            <div>
              <nav className="mb-6 flex items-center gap-1.5 text-xs font-medium text-emerald-100/60">
                <Link href="/" className="transition hover:text-emerald-400">Home</Link>
                <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                <span>More</span>
                <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                <span className="text-emerald-400">Shia Quran Lesson Online</span>
              </nav>

              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md ring-1 ring-white/20">
                <PlayCircle className="h-3.5 w-3.5 text-emerald-400" /> Interactive 1-on-1 Sessions
              </div>
              
              <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Experience a Better <br />
                <span className="text-emerald-400">Online Quran Lesson</span>
              </h1>
              
              <p className="mb-8 text-base leading-relaxed text-emerald-100/70 sm:text-lg">
                Step into a virtual classroom designed for focus and spiritual growth. Our personalized lessons ensure that every minute is optimized for perfecting your recitation and understanding.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a href="https://wa.me/+923394022926" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-700 hover:shadow-emerald-900/40">
                  <MessageCircle className="h-4 w-4" /> Book a Free Trial Lesson
                </a>
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-200">
                  <ShieldCheck className="h-4 w-4" /> No Credit Card Required
                </div>
              </div>
            </div>

            {/* Hero Graphic / Features */}
            <div className="hidden lg:block relative">
                <div className="relative mx-auto w-full max-w-md rounded-3xl bg-white/5 p-6 backdrop-blur-xl ring-1 ring-white/10">
                    <h3 className="mb-6 text-lg font-bold text-white border-b border-white/10 pb-4">Inside Your Daily Lesson</h3>
                    <div className="space-y-6">
                        {[
                            { title: "Audio & Visual Focus", desc: "Clear communication with your dedicated tutor." },
                            { title: "Screen-Shared Qaida", desc: "Follow along easily with highlighted text." },
                            { title: "Instant Feedback", desc: "Correct mistakes before they become habits." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                                    <CheckCircle2 className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">{item.title}</p>
                                    <p className="mt-1 text-xs text-emerald-100/60">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT MAKES OUR LESSONS DIFFERENT
      ══════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/30 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Designed for Optimal Learning
            </h2>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              An online lesson shouldn't feel distant. We use modern methods to create an engaging, highly effective learning environment right in your home.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LESSON_FEATURES.map((feature, i) => (
              <div key={i} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          THE ANATOMY OF A LESSON
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Graphic Side */}
            <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 rounded-3xl bg-emerald-50 dark:bg-emerald-900/10 blur-2xl" />
                <div className="relative rounded-3xl border border-gray-100 bg-white p-2 shadow-xl dark:border-gray-800 dark:bg-gray-900">
                    <div className="aspect-square sm:aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 relative">
                        {/* Replace with an image of a student and teacher on a video call */}
                        <Image src="/images/lesson-structure.jpg" alt="Structure of a Quran Lesson" width={600} height={600} className="object-cover w-full h-full" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 flex items-center gap-3">
                            <span className="flex h-3 w-3 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            <span className="text-white font-medium text-sm drop-shadow-md">Live Session Active</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Text Side */}
            <div className="order-1 lg:order-2">
                <span className="mb-3 block text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-500 uppercase">
                    Step-by-Step
                </span>
                <h2 className="mb-8 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                    The Anatomy of a 30-Minute Lesson
                </h2>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 dark:before:via-gray-800 before:to-transparent">
                    {LESSON_STRUCTURE.map((step, idx) => (
                        <div key={idx} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-[#030102] bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <span className="text-xs font-bold">{step.step}</span>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 dark:bg-gray-900/50 p-5 rounded-2xl border border-gray-100 dark:border-gray-800">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{step.title}</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/30 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Questions About Our Lessons?
            </h2>
          </div>
          
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <span className="pr-4 text-sm font-bold text-gray-900 dark:text-white">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="border-t border-gray-100 px-6 py-5 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900">
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 to-emerald-950 shadow-2xl relative">
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 blur-3xl bg-emerald-500"></div>

          <div className="relative flex flex-col items-center gap-8 px-8 py-12 text-center sm:py-16">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
                <Image src={logo} alt="Shia Quran Pak Academy" width={200} height={200} className="object-contain" />
            </div>
            <div className="max-w-2xl">
              <h3 className="mb-4 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Ready to Experience Your First Lesson?
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-emerald-200 sm:text-base">
                We offer a complimentary trial lesson so you can see exactly how our online system works. No commitment required.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href="https://wa.me/+923394022926" target="_blank" rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-emerald-900 shadow-xl transition hover:bg-emerald-50 sm:w-auto">
                  <MessageCircle className="h-5 w-5" /> Schedule Free Trial
                </a>
                <Link href="/pricing"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-700 bg-transparent px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-800 sm:w-auto">
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}