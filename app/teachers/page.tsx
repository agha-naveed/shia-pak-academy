"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronRight,
  Star,
  Users,
  BookOpen,
  Clock,
  MessageCircle,
  CheckCircle2,
  Globe,
  Award,
  ChevronDown,
} from "lucide-react";
import TeacherHero from "../components/TeacherHero";
import Image from "next/image";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const TEACHER_TYPES = [
  {
    image: "/images/teachers/male-teacher.webp",
    title: "Online Shia Male Quran Teacher",
    desc: "Qualified male scholars and Quran teachers offering one-on-one and group sessions.",
    href: "/teachers/shia-male-teacher",
    badge: "Most Popular",
    badgeColor: "bg-emerald-600",
    color: "from-emerald-950 via-stone-900 to-emerald-900",
    features: ["Tajweed & Recitation", "Tafseer Classes", "Fiqh & Masail", "Flexible Timings"],
  },
  {
    image: "/images/teachers/female-teacher.webp",
    title: "Online Shia Female Quran Teacher",
    desc: "Qualified female scholars offering comfortable, private learning sessions for sisters.",
    href: "/teachers/shia-female-teacher",
    badge: "For Sisters",
    badgeColor: "bg-rose-600",
    color: "from-rose-950 via-stone-900 to-rose-900",
    features: ["Ladies-Only Classes", "Tajweed & Quran", "Islamic Studies", "Flexible Timings"],
  },
  {
    image: "/images/teachers/tutor.webp",
    title: "Online Shia Quran Tutors",
    desc: "Private tutors for children and adults — beginner to advanced levels, all subjects.",
    href: "/teachers/online-shia-tutors",
    badge: "All Ages",
    badgeColor: "bg-amber-600",
    color: "from-amber-950 via-stone-900 to-amber-900",
    features: ["Kids & Adults", "Beginner to Advanced", "1-on-1 Sessions", "Affordable Rates"],
  },
];

const STATS = [
  { icon: Users,    value: "500+",  label: "Active Students" },
  { icon: BookOpen, value: "39+",   label: "Qualified Teachers" },
  { icon: Star,     value: "4.9",   label: "Average Rating" },
  { icon: Globe,    value: "15+",   label: "Countries Served" },
  { icon: Clock,    value: "5,000+",label: "Lessons Delivered" },
  { icon: Award,    value: "100%",  label: "Authenticated Scholars" },
];

const WHY_CHOOSE = [
  { icon: "🎓", title: "Qualified & Verified",    desc: "Every teacher is vetted for their Islamic knowledge, teaching skills, and character." },
  { icon: "🕌", title: "Shia Scholarship",         desc: "All teachers follow the Ahlulbayt (ع) tradition and authentic Shia scholarship." },
  { icon: "📱", title: "Online via WhatsApp",      desc: "Classes run on WhatsApp — no extra apps, no complicated software. Simple and easy." },
  { icon: "⏰", title: "Flexible Scheduling",      desc: "Morning, evening, or weekends — sessions fit around your life, not the other way around." },
  { icon: "👩‍🏫", title: "Male & Female Options",   desc: "Choose a teacher of your preferred gender for a comfortable learning environment." },
  { icon: "🌍", title: "Learn from Anywhere",      desc: "Join from any country, any timezone. Our teachers serve students across the globe." },
];

const FAQS = [
  {
    q: "How do I start learning with a teacher?",
    a: "Simply click 'Enquire on WhatsApp' on any category. We'll chat with you to understand your needs and set up a one-on-one session.",
  },
  {
    q: "Are the classes really on WhatsApp?",
    a: "Yes! All our classes are conducted via WhatsApp voice/video call or group. It's the simplest and most accessible platform for all ages.",
  },
  {
    q: "Can I choose a female teacher for my daughter?",
    a: "Absolutely. We have dedicated female teachers for sisters and children. Browse our Female Teacher section to find the right match.",
  },
  {
    q: "What level can I start from?",
    a: "We cater to complete beginners through to advanced students. Whether you have never read the Quran or want to study Tafseer deeply — there's a teacher for you.",
  },
  {
    q: "Is there a trial class available?",
    a: "Yes, you can request a free introductory session to meet your teacher and decide if the class is the right fit for you.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function TeachersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white dark:bg-[#030102] transition-colors duration-300">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
        <TeacherHero 
          badge="Learn with the Best" 
          title="Online Shia Quran Teachers" 
          description="Learn Quran, Tafseer, Fiqh, and Dinyaat from qualified Shia scholars, online via WhatsApp, from anywhere in the world, at flexible timings." 
        />

      {/* ══════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════ */}
      <section className="border-y border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/40">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 text-center">
                <s.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                <p className="text-xl font-extrabold text-gray-900 dark:text-gray-100">{s.value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CATEGORY CARDS
      ══════════════════════════════════════════ */}
      <section id="categories" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-3xl">
            Choose Your Teacher Type
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Select the category that best suits your learning needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TEACHER_TYPES.map((type) => (
            <Link key={type.href} href={type.href}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl dark:border-gray-700 dark:bg-gray-900">
              {/* Top gradient banner */}
              <div className={`h-45 w-full bg-gradient-to-br ${type.color} flex items-center justify-center text-7xl relative`}>
                <Image src={type.image} alt="" width={400} height={400} className="w-full h-full object-cover object-center" placeholder="blur" blurDataURL={type.image} />
                <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold text-white ${type.badgeColor}`}>
                  {type.badge}
                </span>
              </div>

              <div className="p-5">
                <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition">
                  {type.title}
                </h3>
                <p className="mb-4 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                  {type.desc}
                </p>

                {/* Features */}
                <ul className="mb-5 space-y-1.5">
                  {type.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-emerald-600" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 dark:text-gray-500">Available Now</span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 group-hover:gap-2 transition-all">
                    View Details <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="bg-gray-50 py-14 dark:bg-gray-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-3xl">
              Why Learn with Our Teachers?
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Every teacher on our platform is personally verified for knowledge, character, and teaching quality.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((w) => (
              <div key={w.title} className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gray-50 text-2xl dark:bg-gray-800">
                  {w.icon}
                </div>
                <div>
                  <p className="mb-1 text-sm font-bold text-gray-900 dark:text-gray-100">{w.title}</p>
                  <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{w.desc}</p>
                </div>
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
            How It Works
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Start learning in 4 simple steps — no complicated setup required.
          </p>
        </div>

        <div className="relative grid grid-cols-2 gap-6 lg:grid-cols-4">
          {/* Connecting dashed line — desktop */}
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-6 hidden h-px border-t-2 border-dashed border-gray-200 dark:border-gray-700 lg:block" />

          {[
            { n: 1, icon: "💬", title: "Enquire on WhatsApp",     desc: "Click the button and send us a message. Tell us what you want to learn." },
            { n: 2, icon: "👨‍🏫", title: "We Match You",            desc: "We match you with the right teacher based on your level, language, and schedule." },
            { n: 3, icon: "📅", title: "Schedule Your Class",     desc: "Agree on a time that works for you and receive the WhatsApp group/call link." },
            { n: 4, icon: "🌱", title: "Start Learning & Growing", desc: "Attend classes, ask questions, and grow your knowledge every single day." },
          ].map((step) => (
            <div key={step.n} className="flex flex-col items-center text-center">
              <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-sm font-black text-white shadow-md">
                {step.n}
              </div>
              <div className="mb-2 text-3xl">{step.icon}</div>
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
              Have more questions? Chat with us on WhatsApp — we&apos;re happy to help.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="pr-4 text-sm font-semibold text-gray-900 dark:text-gray-100">{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 text-gray-400 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
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
          CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950">
          <div className="flex flex-col items-center gap-6 px-8 py-10 text-center sm:flex-row sm:text-left">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-4xl">
              🕌
            </div>
            <div className="flex-1">
              <h3 className="mb-1 text-xl font-extrabold text-white sm:text-2xl">
                Ready to Begin Your Islamic Learning Journey?
              </h3>
              <p className="text-sm leading-relaxed text-emerald-300">
                Join hundreds of students learning Quran, Fiqh, and Dinyaat from verified Shia teachers — online, flexible, and authentic.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-shrink-0">
              <a href="https://wa.me/+923394022926" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-emerald-900 shadow transition hover:bg-emerald-50">
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <p className="text-xs font-semibold text-emerald-400">+92 339 4022926</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}