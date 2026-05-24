"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronRight,
  Star,
  Users,
  BookOpen,
  Globe,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  BadgeCheck,
  GraduationCap,
  ArrowLeft,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import logo from "@/public/logo.png";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const WHAT_YOU_LEARN = [
  { icon: "📖", title: "Quran with Tajweed",    desc: "Correct pronunciation, Makharij, and rules of recitation from qualified teachers." },
  { icon: "🔍", title: "Tafseer & Meanings",    desc: "Understand what you recite — deep context, meanings and lessons from each verse." },
  { icon: "⚖️", title: "Fiqh & Daily Rulings",  desc: "Practical Islamic law for prayer, fasting, Zakat, and everyday questions." },
  { icon: "📿", title: "Duas & Ziyarat",        desc: "Learn and understand daily Duas, Ziyarat Ashura, Dua Kumayl and more." },
  { icon: "🏛️", title: "Nahjul Balagha",        desc: "Study the sermons and letters of Imam Ali (ع) with commentary." },
  { icon: "🌙", title: "Aqaid & Beliefs",       desc: "Shia Islamic beliefs — Tawhid, Nubuwwat, Imamat and Ma'ad explained clearly." },
];

const WHY_CHOOSE_MALE = [
  { icon: ShieldCheck,   title: "Hawza Graduates",     desc: "Our male scholars are graduates of recognized Islamic seminaries (Hawza)." },
  { icon: GraduationCap, title: "Deep Expertise",      desc: "Specialized in advanced subjects like Tafseer Al-Mizan, Rijal, and Islamic Philosophy." },
  { icon: Users,         title: "Role Models for Boys",desc: "Excellent spiritual mentors for young boys growing up in the modern world." },
  { icon: Calendar,      title: "Highly Flexible",     desc: "Available across multiple timezones for morning, evening, or weekend classes." },
];

const HOW_STEPS = [
  { n: 1, title: "Message Us",       desc: "Tap the WhatsApp button and tell us you're looking for a male teacher." },
  { n: 2, title: "Discuss Needs",    desc: "We'll discuss your current level and what subjects you wish to focus on." },
  { n: 3, title: "Schedule Setup",   desc: "We finalize a convenient time for your live 1-on-1 or group session." },
  { n: 4, title: "Start Learning",   desc: "Join the WhatsApp call at your scheduled time and begin your journey!" },
];

const FAQS = [
  {
    q: "Do I need any experience to join a class?",
    a: "No experience needed. We have teachers for complete beginners — including those who have never read the Quran before. Simply tell us your level when you enquire.",
  },
  {
    q: "What age groups do the male teachers teach?",
    a: "Our male teachers teach students from age 7 to adults of any age. We have specialist teachers for children, teenagers, and adult learners.",
  },
  {
    q: "How long is each class session?",
    a: "Most sessions are 30 to 60 minutes depending on the subject and student preference. You can discuss this with your teacher when you start.",
  },
  {
    q: "Can I switch teachers if I'm not satisfied?",
    a: "Absolutely. We want you to find the right fit. If your first teacher is not the right match, we will help you find another one with no hassle.",
  },
  {
    q: "Are all teachers following Shia scholarship?",
    a: "Yes. Every teacher on our platform follows the Ahlulbayt (ع) tradition and is verified for their Islamic knowledge, character, and teaching ability.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function MaleTeachersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white dark:bg-[#030102] transition-colors duration-300">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1A0F] via-[#0D1F14] to-[#061008]">
        {/* Subtle radial glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(16,185,129,0.08)_0%,transparent_65%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          {/* Back + Breadcrumb */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <nav className="flex items-center gap-1.5 text-xs text-gray-500">
              <Link href="/" className="transition hover:text-gray-300">Home</Link>
              <ChevronRight className="h-3 w-3 opacity-40" />
              <Link href="/teachers" className="transition hover:text-gray-300">Teachers</Link>
              <ChevronRight className="h-3 w-3 opacity-40" />
              <span className="text-emerald-400">Male Teachers</span>
            </nav>
            <Link href="/teachers"
              className="flex items-center gap-1.5 text-xs font-medium text-gray-400 transition hover:text-emerald-400">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Teachers
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-900/60 px-3 py-1 text-xs font-semibold text-emerald-400 ring-1 ring-emerald-700/50">
                  <BadgeCheck className="h-3.5 w-3.5" /> Verified Scholars
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-900/40 px-3 py-1 text-xs font-semibold text-amber-400 ring-1 ring-amber-700/40">
                  <MessageCircle className="h-3.5 w-3.5" /> Online via WhatsApp
                </span>
              </div>

              <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Online Shia<br />
                <span className="text-emerald-400">Male Quran Teachers</span>
              </h1>
              <p className="mb-6 max-w-lg text-sm leading-relaxed text-gray-400 sm:text-base">
                Learn Quran with Tajweed, Tafseer, Fiqh, and more from qualified Shia male scholars.
                One-on-one or group sessions via WhatsApp — flexible timings, any timezone.
              </p>

              {/* Key stats */}
              <div className="mb-8 flex flex-wrap gap-6">
                {[
                  { icon: Users,    val: "100%",  label: "Verified" },
                  { icon: Star,     val: "4.9",   label: "Avg Rating" },
                  { icon: Globe,    val: "15+",   label: "Countries" },
                  { icon: BookOpen, val: "Free",  label: "Trial Class" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <s.icon className="h-4 w-4 text-emerald-500" />
                    <div>
                      <p className="text-base font-extrabold leading-none text-white">{s.val}</p>
                      <p className="text-[10px] tracking-wider text-gray-500 uppercase">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/+923394022926" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-700">
                  <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
                </a>
              </div>
            </div>

            {/* Right — Hero Image */}
            <div className="hidden lg:block">
              <div className="relative ml-auto h-[400px] w-[90%] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-emerald-800/30">
                <Image
                  src="/images/teachers/male-teacher.png" // Make sure to add a relevant image to your public folder!
                  alt="Online Shia Male Quran Teacher"
                  fill
                  placeholder="blur"
                  blurDataURL="/images/teachers/male-teacher.png"
                  className="object-cover"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A0F] via-transparent to-transparent opacity-90" />
                
                {/* Floating Glassmorphism Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
                      👨‍🏫
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Expert Faculty</p>
                      <p className="text-xs text-emerald-200">Hawza Graduates & Qaris</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT YOU'LL LEARN
      ══════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-[#030102]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-3xl">
              Subjects Taught by Our Male Teachers
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              From absolute basics to advanced seminary-level topics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_YOU_LEARN.map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:border-emerald-300 dark:border-gray-800 dark:bg-gray-900/50">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-2xl shadow-sm dark:bg-gray-800">
                  {item.icon}
                </span>
                <div>
                  <p className="mb-1 text-sm font-bold text-gray-900 dark:text-gray-100">{item.title}</p>
                  <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE MALE TEACHERS
      ══════════════════════════════════════════ */}
      <section className="bg-gray-50 py-14 dark:bg-gray-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-3xl">
              Why Choose Our Male Scholars?
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Dedicated mentors equipped to guide students through authentic Islamic knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_MALE.map((w) => (
              <div key={w.title} className="flex flex-col items-center text-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-500">
                  <w.icon className="h-6 w-6" />
                </div>
                <p className="mb-2 text-sm font-bold text-gray-900 dark:text-gray-100">{w.title}</p>
                <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-3xl">
            How to Get Started
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            A simple process to connect with the right teacher.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-5 hidden h-px border-t-2 border-dashed border-gray-200 dark:border-gray-700 lg:block" />

          {HOW_STEPS.map((step) => (
            <div key={step.n} className="flex flex-col items-center text-center">
              <div className="relative z-10 mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-700 text-sm font-black text-white shadow-md border-4 border-white dark:border-[#030102]">
                {step.n}
              </div>
              <p className="mb-1.5 text-sm font-bold text-gray-900 dark:text-gray-100">{step.title}</p>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="bg-gray-50 py-14 dark:bg-gray-900/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Still unsure? Chat with us on WhatsApp — we respond quickly.
            </p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="pr-4 text-sm font-semibold text-gray-900 dark:text-gray-100">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 flex-shrink-0 text-gray-400 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="border-t border-gray-100 px-5 py-4 dark:border-gray-800">
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
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 shadow-2xl relative">
          {/* Subtle background decoration */}
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 blur-2xl bg-emerald-400"></div>

          <div className="relative flex flex-col items-center gap-6 px-8 py-10 text-center sm:flex-row sm:text-left">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
                <Image src={logo} alt="Shia Quran Pak Academy Logo" width={200} height={200} className="object-contain" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 text-xl font-extrabold text-white sm:text-2xl">
                Start Learning with a Verified Male Shia Teacher Today
              </h3>
              <p className="text-sm leading-relaxed text-emerald-300">
                Free trial class available. No commitment — just send us a message and we&apos;ll take care of the rest.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-shrink-0">
              <a href="https://wa.me/+923394022926" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-emerald-900 shadow-lg transition hover:bg-emerald-50">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
              <p className="text-xs font-semibold text-emerald-400">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}