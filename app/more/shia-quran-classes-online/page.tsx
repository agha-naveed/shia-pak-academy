"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  BookOpen,
  Users,
  Clock,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  Video,
  Globe,
  Star,
  ChevronDown,
  ArrowRight,
  GraduationCap
} from "lucide-react";
import logo from "@/public/logo.png";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const CLASS_TYPES = [
  { icon: "📖", title: "Nazira & Tajweed", desc: "Learn to read the Holy Quran fluently with proper pronunciation (Makharij) and rules of Tajweed." },
  { icon: "🧠", title: "Hifz (Memorization)", desc: "Structured memorization programs for kids and adults to preserve the Quran in their hearts." },
  { icon: "🔍", title: "Tafseer & Translation", desc: "Understand the deep meanings, context, and lessons of the verses according to authentic Shia sources." },
  { icon: "⚖️", title: "Fiqh & Ahkam", desc: "Practical daily rulings (Namaz, Roza, Khums) based on the verdicts of your respective Marja." },
  { icon: "📿", title: "Duas & Ziyarat", desc: "Master the recitation of daily supplications, Ziyarat Ashura, Dua Kumayl, and more." },
  { icon: "🌱", title: "Kids Islamic Basics", desc: "Engaging lessons for children covering basic beliefs (Aqaid), stories of Prophets, and Akhlaq." },
];

const BENEFITS = [
  { icon: Video, title: "Live 1-on-1 Sessions", desc: "Personalized attention ensures you or your child learns at the perfect pace without pressure." },
  { icon: ShieldCheck, title: "Verified Shia Scholars", desc: "Learn from qualified Hawza graduates and experts in the teachings of the Ahlulbayt (ع)." },
  { icon: Clock, title: "Flexible Timings", desc: "Classes are available 24/7. Choose a schedule that fits perfectly into your busy life." },
  { icon: Users, title: "Male & Female Teachers", desc: "Comfortable learning environments with dedicated Aalimat available for sisters and daughters." },
];

const STEPS = [
  { n: 1, title: "Contact Us", desc: "Message us on WhatsApp to discuss your goals and current reading level." },
  { n: 2, title: "Free Trial Class", desc: "Experience our teaching style with a complimentary 1-to-2 day trial session." },
  { n: 3, title: "Choose a Plan", desc: "Select an affordable pricing plan that suits your frequency and budget." },
  { n: 4, title: "Start Learning", desc: "Log in to your scheduled live sessions and begin your spiritual journey." },
];

const FAQS = [
  { q: "What software do you use for the online classes?", a: "We primarily conduct our classes via WhatsApp, Zoom, or Google Meet, depending on what is most comfortable for the student and ensures the best audio/video quality." },
  { q: "Do I need any prior knowledge to join?", a: "Not at all. We have classes for absolute beginners starting from the Qaida (Arabic alphabet) all the way to advanced Tafseer." },
  { q: "Are there classes for children?", a: "Yes, the majority of our students are children. Our teachers use patient, engaging, and interactive methods to keep kids focused and instill a love for Islam." },
  { q: "Can I reschedule a class if I am busy?", a: "Yes, we offer highly flexible scheduling. If you need to miss a class, simply inform your teacher beforehand, and we will do our best to arrange a makeup session." },
];

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────

export default function ShiaQuranClassesOnlinePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white dark:bg-[#030102] transition-colors duration-300">
      
      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1A0F] via-[#0D1F14] to-[#061008] py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(16,185,129,0.1)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center justify-center gap-1.5 text-xs font-medium text-emerald-100/60">
              <Link href="/" className="transition hover:text-emerald-400">Home</Link>
              <ChevronRight className="h-3.5 w-3.5 opacity-50" />
              <span>More</span>
              <ChevronRight className="h-3.5 w-3.5 opacity-50" />
              <span className="text-emerald-400">Shia Quran Classes Online</span>
            </nav>

            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-900/60 px-3 py-1 text-xs font-semibold text-emerald-400 ring-1 ring-emerald-700/50">
              <Star className="h-3.5 w-3.5 fill-emerald-400" /> Rated 4.9/5 by Students Globally
            </div>
            
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Premium <span className="text-emerald-400">Shia Quran Classes</span> Online
            </h1>
            
            <p className="mb-8 text-base leading-relaxed text-emerald-100/70 sm:text-lg">
              Master the recitation, understand the divine meanings, and build a strong Islamic foundation from anywhere in the world. Authentic teachings of the Ahlulbayt (ع) delivered to your screen.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="https://wa.me/+923394022926" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-700 hover:shadow-emerald-900/20">
                <MessageCircle className="h-5 w-5" /> Book a Free Trial Class
              </a>
              <Link href="#curriculum"
                className="flex items-center gap-2 rounded-xl border border-emerald-800 bg-transparent px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-900/50">
                Explore Curriculum <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUICK STATS
      ══════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-[#030102]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 divide-x divide-gray-100 dark:divide-gray-800 md:grid-cols-4">
            {[
              { icon: Globe, label: "Global Reach", sub: "Students from 15+ Countries" },
              { icon: Video, label: "Interactive", sub: "Live 1-on-1 Sessions" },
              { icon: GraduationCap, label: "Expert Tutors", sub: "Hawza Certified Scholars" },
              { icon: Clock, label: "Flexible", sub: "24/7 Availability" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-2">
                <stat.icon className="mb-2 h-6 w-6 text-emerald-600 dark:text-emerald-500" />
                <p className="text-sm font-bold text-gray-900 dark:text-white">{stat.label}</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CURRICULUM / CLASS TYPES
      ══════════════════════════════════════════ */}
      <section id="curriculum" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Comprehensive Online Classes
          </h2>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            We offer a wide range of subjects tailored to your level. From absolute beginners learning the Qaida to advanced students studying Tafseer.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CLASS_TYPES.map((cls, i) => (
            <div key={i} className="group rounded-3xl border border-gray-200 bg-gray-50 p-6 transition hover:border-emerald-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-500/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm dark:bg-gray-800">
                {cls.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {cls.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {cls.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/30 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center">
            
            <div>
              <span className="mb-2 block text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-500 uppercase">
                The Academy Advantage
              </span>
              <h2 className="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Why Learn Quran Online With Us?
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Traditional Islamic education meets modern convenience. Our online classes are designed to provide the highest quality of learning without compromising on authenticity or comfort.
              </p>
              
              <div className="space-y-6">
                {BENEFITS.map((b, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                      <b.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white">{b.title}</h4>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Graphic */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-emerald-100/50 dark:bg-emerald-900/10 blur-2xl" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gray-200 dark:bg-gray-800 border border-white dark:border-gray-700 shadow-xl">
                 {/* Replace with an actual image showcasing online learning */}
                <Image src="/images/online-classes.jpg" alt="Online Shia Quran Classes" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                    <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                    <div>
                        <p className="text-sm font-bold text-white">Join 500+ Students</p>
                        <p className="text-xs text-gray-300">Embarking on their spiritual journey</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS (STEPS)
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Start Learning in 4 Simple Steps
          </h2>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            No complicated sign-ups. We make it incredibly easy for you to begin.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
          <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gray-100 dark:bg-gray-800" />
          
          {STEPS.map((step) => (
            <div key={step.n} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-lg font-black text-white shadow-md ring-4 ring-white dark:ring-[#030102]">
                {step.n}
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/30 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
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
                Ready to Start Your Free Trial?
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-emerald-200 sm:text-base">
                Take the first step towards mastering the Quran. Connect with us on WhatsApp to schedule your complimentary class with a certified teacher today.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href="https://wa.me/+923394022926" target="_blank" rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-emerald-900 shadow-xl transition hover:bg-emerald-50 sm:w-auto">
                  <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
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