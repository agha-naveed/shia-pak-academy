"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  BarChart2,
  BookOpen,
  Clock,
  MessageCircle,
  Home,
  MessagesSquare,
  UserCheck,
  Leaf,
  CheckCircle2,
  ChevronRight,
  Star,
  FileText,
  Lightbulb,
  Heart,
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const BENEFITS = [
  { icon: Home,           title: "Learn from Anywhere",   desc: "Join the classes and learn from the comfort of your home." },
  { icon: MessagesSquare, title: "Interact & Ask",         desc: "Ask your questions and clear your doubts directly." },
  { icon: UserCheck,      title: "Personal Guidance",      desc: "Get personal attention from the teacher." },
  { icon: Leaf,           title: "Spiritual Growth",       desc: "Strengthen your connection with the words of Allah." },
];

const CURRICULUM = [
  {
    title: "Introduction",
    lessons: 2,
    items: ["Why Tafseer is Important", "Understanding the Quran", "Brief History of Revelation"],
  },
  {
    title: "Quranic Arabic Basics",
    lessons: 2,
    items: ["Basic Arabic for Understanding Quran", "Important Words & Expressions"],
  },
  {
    title: "Tafseer: Juz' Amma",
    lessons: 5,
    items: ["Surah Al-Fatihah", "Surah Al-Ikhlas to An-Nas"],
    plus: true,
  },
  {
    title: "Selected Surahs",
    lessons: 5,
    items: ["Surah Al-Baqarah (Selected Verses)", "Surah Aale-Imran (Selected Verses)"],
    plus: true,
  },
  {
    title: "Practical Implementation",
    lessons: 2,
    items: ["Applying Quran in Daily Life", "Building a Strong Connection with Quran"],
    plus: true,
  },
];

const LEARN_ITEMS = [
  { icon: BookOpen,  text: "Understand the Quran with authentic Tafseer from Ahlulbayt (عليهم السلام)" },
  { icon: FileText,  text: "Learn the meanings and context of verses" },
  { icon: Lightbulb, text: "Discover practical lessons and guidance for daily life" },
  { icon: Heart,     text: "Strengthen your connection with Allah through His words" },
  { icon: Star,      text: "Develop love and understanding of the Quran" },
];

const HOW_STEPS = [
  { n: 1, title: "Enquire on WhatsApp",  desc: "Click the button and send us a message." },
  { n: 2, title: "We Add You",           desc: "We will add you to the course WhatsApp group." },
  { n: 3, title: "Learn & Interact",     desc: "Attend classes, ask questions and clear doubts." },
  { n: 4, title: "Grow Spiritually",     desc: "Understand, implement and strengthen your Imaan." },
];

const FOR_WHOM = [
  "Anyone who wants to understand the Quran",
  "Beginners who want to start their journey",
  "Students who want to deepen their knowledge",
  "Anyone looking for spiritual growth",
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function CoursePage() {
  return (
    <div className="w-full pb-10 transition-colors duration-300">

      {/* ── BACK LINK ── */}
      <div className="mx-auto max-w-7xl px-4 py-4">
        <Link
          href="/courses"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 transition hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Link>
      </div>

      {/* ══════════════════════════════════════════
          HERO CARD
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 pb-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr_250px]">

            {/* — Thumbnail — */}
            <div className="relative overflow-hidden rounded-xl">
              {/* "Online on WhatsApp" badge */}
              <span className="absolute left-3 top-3 z-10 rounded-md bg-emerald-800/90 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm dark:bg-emerald-600/90">
                Online on WhatsApp
              </span>
              <div className="relative h-64 w-full lg:h-full">
                <Image
                  src="/images/tafseer-course.jpg"
                  alt="Tafseer of Quran"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 300px"
                />
                {/* dark overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent dark:from-black/60" />
              </div>
            </div>

            {/* — Middle: title + meta + CTA — */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">Tafseer of Quran</h1>
                <p className="mb-3 text-base font-medium text-emerald-700 dark:text-emerald-400">
                  Understand the Quran with Authentic Tafseer
                </p>
                <p className="mb-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  This course helps you connect deeply with the Quran by understanding its meanings,
                  context and practical lessons for life through authentic Tafseer from Ahlulbayt&nbsp;
                  (عليهم السلام).
                </p>

                {/* Meta pills */}
                <div className="mb-6 flex flex-wrap gap-5 text-xs text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium">Online on<br />WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BarChart2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium">Beginner<br />Level</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium">15+ Lessons</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium">Flexible<br />Timings</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div>
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-800 py-3.5 text-sm font-semibold text-white shadow transition hover:bg-emerald-900 dark:bg-emerald-600 dark:hover:bg-emerald-700 sm:w-auto sm:px-10"
                >
                  <MessageCircle className="h-5 w-5" />
                  Enquire on WhatsApp
                </a>
                <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                  We will add you to the course group and guide you.
                </p>
              </div>
            </div>

            {/* — Right: benefit list — */}
            <div className="hidden flex-col gap-5 lg:flex">
              {BENEFITS.map((b) => (
                <div key={b.title} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                    <b.icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{b.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits — mobile (shows below the CTA) */}
          <div className="mt-6 grid grid-cols-2 gap-4 lg:hidden">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                  <b.icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">{b.title}</p>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-gray-500 dark:text-gray-400">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT THE COURSE
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-5 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">About the Course</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_350px]">
            <div className="space-y-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              <p>
                The Quran is the speech of Allah revealed to guide humanity. This course provides a
                comprehensive study of the Quran with authentic Tafseer from the traditions of
                Ahlulbayt&nbsp;(عليهم السلام).
              </p>
              <p>
                Each lesson explains verses with context, meaning and practical lessons to help you
                strengthen your Imaan and implement Quranic guidance in daily life.
              </p>
            </div>

            {/* Hadith quote box */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
                <span className="text-lg font-bold leading-none text-gray-500 dark:text-gray-400">"</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 italic dark:text-gray-300">
                The best among you are those who learn the Quran and teach it.
              </p>
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">— Prophet Muhammad (ﷺ)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COURSE CURRICULUM
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Course Curriculum</h2>
            </div>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-900/30 dark:text-emerald-400">
              15+ Lessons
            </span>
          </div>

          {/* Scrollable card row */}
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {CURRICULUM.map((mod) => (
              <div
                key={mod.title}
                className="flex w-64 flex-shrink-0 flex-col rounded-xl border border-gray-200 bg-white p-5 transition-colors dark:border-gray-800 dark:bg-gray-950"
              >
                <p className="mb-3 text-sm font-bold text-gray-900 dark:text-gray-100">{mod.title}</p>
                <ul className="mb-4 flex-1 space-y-2">
                  {mod.items.map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                      <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto border-t border-gray-100 pt-3 text-xs font-medium text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  {mod.plus ? `${mod.lessons}+` : mod.lessons} Lessons
                </div>
              </div>
            ))}

            {/* Right arrow indicator */}
            <div className="flex flex-shrink-0 items-center px-1">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-500">
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT YOU'LL LEARN
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-6 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">What You&apos;ll Learn</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {LEARN_ITEMS.map((item) => (
              <div
                key={item.text}
                className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-5 text-center transition-colors dark:border-gray-800 dark:bg-gray-950"
              >
                <item.icon className="mb-3 h-6 w-6 text-gray-400 dark:text-gray-500" strokeWidth={1.5} />
                <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-8 flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">How It Works (On WhatsApp)</h2>
          </div>

          <div className="relative grid grid-cols-2 gap-6 lg:grid-cols-4">
            {/* Connecting line — desktop */}
            <div
              className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-5 hidden h-px border-t-2 border-dashed border-gray-200 dark:border-gray-800 lg:block"
              aria-hidden
            />

            {HOW_STEPS.map((step) => (
              <div key={step.n} className="flex flex-col items-center text-center">
                <div className="relative z-10 mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white shadow dark:bg-emerald-600">
                  {step.n}
                </div>
                <p className="mb-1.5 text-sm font-bold text-gray-900 dark:text-white">{step.title}</p>
                <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHO THIS COURSE IS FOR
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-6 flex items-center gap-2">
            <svg className="h-5 w-5 text-emerald-700 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m0 0A4 4 0 1112 6a4 4 0 01-3 6.13m6 0A4 4 0 1018 6" />
            </svg>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Who This Course Is For</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FOR_WHOM.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                <p className="text-sm text-gray-700 dark:text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HAVE QUESTIONS CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gray-100 px-6 py-7 transition-colors dark:bg-gray-900 sm:flex-row">
          <div className="flex items-center gap-4">
            {/* WhatsApp circle icon */}
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600">
              <MessageCircle className="h-7 w-7 text-white" />
            </div>
            <div>
              <p className="text-base font-bold text-gray-900 dark:text-white">Have Questions?</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">We&apos;re here to help you start your learning journey.</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 sm:items-end">
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-emerald-800 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-emerald-900 dark:bg-emerald-600 dark:hover:bg-emerald-700"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <p className="text-xs text-gray-500 dark:text-gray-400">+1 (555) 123-4567</p>
          </div>
        </div>
      </section>

    </div>
  );
}