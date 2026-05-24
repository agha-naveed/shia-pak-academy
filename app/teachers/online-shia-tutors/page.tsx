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
  Sparkles,
  BookMarked,
} from "lucide-react";
import logo from "@/public/logo.png";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const WHAT_YOU_LEARN = [
  { icon: "🔤", title: "Qaida & Basics",        desc: "Perfect for kids and absolute beginners. Learn the Arabic alphabet and joining rules." },
  { icon: "📖", title: "Quran Reading",         desc: "Fluent reading with fundamental Tajweed rules and proper pronunciation." },
  { icon: "🧠", title: "Hifz (Memorization)",   desc: "Memorize short Surahs or the complete Quran with structured revision plans." },
  { icon: "🕌", title: "Basic Dinyaat",         desc: "Learn the essentials: how to perform Wudhu, Namaz, and the basic Kalimas." },
  { icon: "📜", title: "Islamic History",       desc: "Engaging stories of the Prophets and the 14 Infallibles (ع) for children." },
  { icon: "💖", title: "Akhlaq & Manners",      desc: "Instilling beautiful Islamic ethics, respect for parents, and good character." },
];

const WHY_CHOOSE_TUTORS = [
  { icon: Sparkles,      title: "1-on-1 Attention",    desc: "Undivided focus means the tutor adapts entirely to your or your child's learning speed." },
  { icon: BookMarked,    title: "Custom Curriculum",   desc: "Mix and match subjects. Want 15 mins of Quran and 15 mins of Namaz? We can do that." },
  { icon: ShieldCheck,   title: "Safe & Verified",     desc: "All tutors are thoroughly vetted to ensure a safe, authentic, and nurturing environment." },
  { icon: Calendar,      title: "Parental Updates",    desc: "Regular progress reports and feedback provided to parents to keep track of learning." },
];

const HOW_STEPS = [
  { n: 1, title: "Message Us",       desc: "Tap the WhatsApp button and tell us you need a private tutor for yourself or your kids." },
  { n: 2, title: "Tailor Your Plan", desc: "We'll discuss your goals, age group, and the subjects you want to cover." },
  { n: 3, title: "Schedule Setup",   desc: "Pick a time that fits your school or work schedule. We offer high flexibility." },
  { n: 4, title: "Start Learning",   desc: "Join the WhatsApp call at your scheduled time and enjoy personalized tutoring!" },
];

const FAQS = [
  {
    q: "Can I hire a tutor just for my children?",
    a: "Absolutely! The majority of our tutoring sessions are for children. Our tutors are trained to be patient, engaging, and to make Islamic learning enjoyable for kids.",
  },
  {
    q: "Do you teach how to pray (Namaz) and Wudhu?",
    a: "Yes. For beginners and kids, practical Dinyaat like Wudhu, Ghusl, and Namaz (according to your specific Marja) are core parts of the curriculum.",
  },
  {
    q: "Can siblings share a tutoring session?",
    a: "Yes, we can arrange small group sessions for siblings or family members at a discounted rate, provided they are at a similar learning level.",
  },
  {
    q: "What if my child loses focus quickly?",
    a: "Our experienced tutors use interactive methods and can break the session down into smaller, varied chunks (e.g., 10 mins reading, 10 mins storytime) to maintain attention.",
  },
  {
    q: "Is there a trial class available?",
    a: "Yes! We offer a free introductory session. This gives parents a chance to observe the tutor's teaching style and ensure the child feels comfortable.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function TutorsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white dark:bg-[#030102] transition-colors duration-300">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A130A] via-[#140F08] to-[#0A0704]">
        {/* Subtle radial glow matching the Amber theme for Tutors */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(217,119,6,0.08)_0%,transparent_65%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          {/* Back + Breadcrumb */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <nav className="flex items-center gap-1.5 text-xs text-gray-500">
              <Link href="/" className="transition hover:text-gray-300">Home</Link>
              <ChevronRight className="h-3 w-3 opacity-40" />
              <Link href="/teachers" className="transition hover:text-gray-300">Teachers</Link>
              <ChevronRight className="h-3 w-3 opacity-40" />
              <span className="text-amber-400">Private Tutors</span>
            </nav>
            <Link href="/teachers"
              className="flex items-center gap-1.5 text-xs font-medium text-gray-400 transition hover:text-amber-400">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Teachers
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-900/60 px-3 py-1 text-xs font-semibold text-amber-300 ring-1 ring-amber-700/50">
                  <BadgeCheck className="h-3.5 w-3.5" /> For Kids & Adults
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-900/40 px-3 py-1 text-xs font-semibold text-emerald-400 ring-1 ring-emerald-700/40">
                  <MessageCircle className="h-3.5 w-3.5" /> Online via WhatsApp
                </span>
              </div>

              <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Online Shia<br />
                <span className="text-amber-500">Private Quran Tutors</span>
              </h1>
              <p className="mb-6 max-w-lg text-sm leading-relaxed text-gray-400 sm:text-base">
                Personalized 1-on-1 Islamic education tailored to your pace.
                Whether you are starting from the Qaida, memorizing Surahs, or learning basic Namaz, our tutors provide undivided attention.
              </p>

              {/* Key stats */}
              <div className="mb-8 flex flex-wrap gap-6">
                {[
                  { icon: Sparkles,    val: "1-on-1", label: "Focus" },
                  { icon: Star,        val: "4.9",    label: "Avg Rating" },
                  { icon: Users,       val: "All",    label: "Ages Welcome" },
                  { icon: BookOpen,    val: "Free",   label: "Trial Class" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <s.icon className="h-4 w-4 text-amber-500" />
                    <div>
                      <p className="text-base font-extrabold leading-none text-white">{s.val}</p>
                      <p className="text-[10px] tracking-wider text-gray-500 uppercase">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-700">
                  <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
                </a>
              </div>
            </div>

            {/* Right — Hero Image */}
            <div className="hidden lg:block">
              <div className="relative ml-auto h-[400px] w-[90%] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-amber-800/30">
                <Image
                  src="/images/teachers/tutor.png" // Ensure this placeholder is in your public folder!
                  alt="Online Shia Private Quran Tutors"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="/images/teachers/tutor.png"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A130A] via-transparent to-transparent opacity-90" />
                
                {/* Floating Glassmorphism Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-white text-xl">
                      🎓
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Customized Learning</p>
                      <p className="text-xs text-amber-200">Learn at your own perfect pace</p>
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
              Subjects You Can Request
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Mix and match subjects to create the perfect curriculum for you or your child.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_YOU_LEARN.map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-amber-50/30 p-5 transition hover:border-amber-300 dark:border-gray-800 dark:bg-gray-900/50">
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
          WHY CHOOSE PRIVATE TUTORS
      ══════════════════════════════════════════ */}
      <section className="bg-gray-50 py-14 dark:bg-gray-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-3xl">
              The Power of 1-on-1 Tutoring
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Why private sessions are the most effective way to learn.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_TUTORS.map((w) => (
              <div key={w.title} className="flex flex-col items-center text-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-500">
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
            A simple process to connect with the right tutor.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-5 hidden h-px border-t-2 border-dashed border-gray-200 dark:border-gray-700 lg:block" />

          {HOW_STEPS.map((step) => (
            <div key={step.n} className="flex flex-col items-center text-center">
              <div className="relative z-10 mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-amber-600 text-sm font-black text-white shadow-md border-4 border-white dark:border-[#030102]">
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
              Questions about scheduling or subjects? Chat with us on WhatsApp.
            </p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <span className="pr-4 text-sm font-semibold text-gray-900 dark:text-gray-100">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 flex-shrink-0 text-gray-400 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="border-t border-gray-100 px-5 py-4 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900">
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
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 blur-2xl bg-amber-400"></div>

          <div className="relative flex flex-col items-center gap-6 px-8 py-10 text-center sm:flex-row sm:text-left">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
                <Image src={logo} alt="Shia Quran Pak Academy Logo" width={200} height={200} className="object-contain" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 text-xl font-extrabold text-white sm:text-2xl">
                Find the Perfect Private Tutor Today
              </h3>
              <p className="text-sm leading-relaxed text-emerald-200">
                Schedule a free trial class for yourself or your child. We will match you with a tutor who fits your exact needs.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-shrink-0">
              <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer"
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