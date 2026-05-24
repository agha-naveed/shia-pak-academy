"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  MessageCircle,
  MessagesSquare,
  UserCheck,
  CheckCircle2,
  Star,
  FileText,
  Lightbulb,
  Heart,
  Video,
  Users,
  Wifi,
  HelpCircle,
  ShieldCheck,
  Brain,
  Repeat,
  Clock,
  Mic
} from "lucide-react";
import Pricing from "@/app/components/Pricing";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const BENEFITS = [
  { icon: Video,          title: "Live Zoom Sessions",     desc: "Recite your daily lessons (Sabaq) face-to-face with a teacher." },
  { icon: Brain,          title: "Proven Techniques",      desc: "Learn effective memory retention and mental focus strategies." },
  { icon: Repeat,         title: "Structured Revision",    desc: "Dedicated focus on Muraja'ah (revision) so you never forget." },
  { icon: Heart,          title: "Spiritual Elevation",    desc: "Carry the words of Allah in your heart forever." },
];

const WHY_LIVE = [
  { title: "Accountability & Discipline", desc: "Memorization requires strict daily discipline. Knowing you have a live teacher waiting to hear your recitation keeps you motivated and consistent." },
  { title: "Immediate Error Correction", desc: "If you memorize a word incorrectly, it becomes very hard to unlearn. A live teacher catches mistakes instantly before they are committed to long-term memory." },
  { title: "Paced to Your Ability", desc: "Every student's memory is different. Your live teacher will dynamically adjust the size of your daily lesson based on how well you are retaining the previous verses." },
];

const CURRICULUM = [
  {
    title: "Module 1: Assessment & Preparation",
    lessons: 3,
    items: ["Tajweed & Fluency Check", "Setting Memorization Goals", "Techniques for Mental Focus"],
  },
  {
    title: "Module 2: The Foundation (Juz 30)",
    lessons: 10,
    items: ["Memorizing Surah An-Nas to Ad-Duhaa", "Memorizing An-Naba to Al-Lail", "Introduction to Muraja'ah (Revision)"],
  },
  {
    title: "Module 3: Selected Surahs (Optional Track)",
    lessons: 8,
    items: ["Surah Yaseen (The Heart of Quran)", "Surah Ar-Rahman & Al-Waqiah", "Surah Al-Mulk (Nightly Protection)"],
    plus: true,
  },
  {
    title: "Module 4: Intensive Hifz (Full Quran)",
    lessons: 30,
    items: ["Daily New Lesson (Sabaq)", "Recent Revision (Sabaqi)", "Old Revision (Manzil)"],
    plus: true,
  },
  {
    title: "Module 5: Final Consolidation",
    lessons: 5,
    items: ["Connecting Chapters", "Overcoming 'Mutashabihat' (Similar Verses)", "Final Hifz Testing"],
    plus: true,
  },
];

const LEARN_ITEMS = [
  { icon: Brain,     text: "Commit the Holy Quran to your long-term memory" },
  { icon: Repeat,    text: "Master the art of Muraja'ah (structured daily revision)" },
  { icon: Mic,       text: "Maintain perfect Tajweed while reciting from memory" },
  { icon: ShieldCheck, text: "Overcome verses that sound similar (Mutashabihat) without confusion" },
  { icon: Heart,     text: "Experience the immense spiritual peace of carrying Allah's words" },
];

const REQUIREMENTS = [
  { icon: Wifi, text: "A stable internet connection" },
  { icon: Video, text: "Zoom app installed on your device" },
  { icon: MessageCircle, text: "WhatsApp for scheduling and updates" },
  { icon: Clock, text: "Strict daily dedication (30-60 mins of self-practice)" },
];

const HOW_STEPS = [
  { n: 1, title: "Message Us",       desc: "Tap the WhatsApp button to discuss your Hifz goals." },
  { n: 2, title: "Schedule Setup",   desc: "We finalize a convenient daily/weekly time for your live class." },
  { n: 3, title: "Join the Group",   desc: "You get added to a private WhatsApp group with your teacher." },
  { n: 4, title: "Start Memorizing", desc: "Log in to Zoom, recite your lesson, and get your next assignment!" },
];

const FOR_WHOM = [
  "Children whose parents wish for them to become a Hafiz-e-Quran",
  "Adults who want to memorize specific important Surahs (Yaseen, Rahman, etc.)",
  "Students who memorized previously but have forgotten and need to revise",
  "Anyone willing to dedicate daily time to the most rewarding spiritual journey",
];

const FAQS = [
  { q: "Do I have to memorize the entire Quran?", a: "No. You can choose the 'Full Hifz' track, or you can choose to memorize specific Juz (like Amma) or selected Surahs (like Yaseen and Al-Mulk)." },
  { q: "Do I need to know Tajweed before starting?", a: "Yes. You must be able to read the Quran fluently with basic Tajweed rules. If you cannot, we recommend taking our Tajweed Course first, as memorizing with incorrect pronunciation is highly discouraged." },
  { q: "Are these classes recorded videos?", a: "No. Hifz requires a teacher to listen to your memory. All classes are 100% live on Zoom or WhatsApp voice/video calls." },
  { q: "Is there an age limit?", a: "There is no age limit for memorizing the Quran! We have specialized teachers for young children, as well as patient instructors for adults who want to memorize at their own pace." },
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
              <span className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-md bg-red-600/90 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-sm dark:bg-red-700/90 animate-pulse">
                <span className="h-2 w-2 rounded-full bg-white"></span>
                Live 1-on-1 Recitation
              </span>
              <div className="relative h-64 w-full lg:h-full">
                <Image
                  src="/images/courses/quran-memorization.png"
                  alt="Quran Memorization Course"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent dark:from-black/60" />
              </div>
            </div>

            {/* — Middle: title + meta + CTA — */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">Quran Memorization (Hifz)</h1>
                <p className="mb-3 text-base font-medium text-emerald-700 dark:text-emerald-400">
                  Commit the Words of Allah to Your Heart
                </p>
                <p className="mb-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  Memorizing the Quran is a transformative spiritual journey. Whether your goal is full Hifz or selected Surahs, our expert teachers provide live, 1-on-1 Zoom sessions to listen to your daily recitation, correct your mistakes, and build a powerful revision plan.
                </p>

                {/* Meta pills */}
                <div className="mb-6 flex flex-wrap gap-5 text-xs text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <Video className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium">Live on<br />Zoom/WA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <UserCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium">Strictly<br />1-on-1</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium">Tailored<br />Pace</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium">Flexible<br />Timings</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div>
                <a
                  href="https://wa.me/+923394022926"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-800 py-3.5 text-sm font-semibold text-white shadow transition hover:bg-emerald-900 dark:bg-emerald-600 dark:hover:bg-emerald-700 sm:w-auto sm:px-10"
                >
                  <MessageCircle className="h-5 w-5" />
                  Book Your Live Trial on WhatsApp
                </a>
                <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                  We will arrange a schedule that perfectly fits your routine.
                </p>
              </div>
            </div>

            {/* — Right: benefit list — */}
            <div className="hidden flex-col gap-5 lg:flex">
              {BENEFITS.map((b) => (
                <div key={b.title} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-900/30">
                    <b.icon className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{b.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits — mobile */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex items-start gap-3 rounded-lg border border-gray-100 p-3 dark:border-gray-800">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-900/30">
                  <b.icon className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
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
          ABOUT THE COURSE & WHY LIVE
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          
          {/* About */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-5 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">About the Course</h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              <p>
                The Prophet Muhammad (ﷺ) taught that the most excellent of you are those who learn the Quran and teach it. Memorizing the Quran (Hifz) elevates a believer's status in this world and the hereafter.
              </p>
              <p>
                This course is highly structured. Unlike casual reading, Hifz requires a disciplined routine. Our teachers guide you through the three pillars of memorization: <strong>Sabaq</strong> (new daily lesson), <strong>Sabaqi</strong> (recent revision), and <strong>Manzil</strong> (long-term revision).
              </p>
            </div>
          </div>

          {/* Why Live? */}
          <div className="rounded-2xl border border-gray-200 bg-emerald-50/50 p-6 shadow-sm transition-colors dark:border-gray-800 dark:bg-emerald-900/10">
            <div className="mb-5 flex items-center gap-2">
              <Video className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Why Choose Live Classes?</h2>
            </div>
            <div className="space-y-5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {WHY_LIVE.map((item) => (
                <div key={item.title}>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</p>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LIVE COURSE CURRICULUM
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Live Curriculum Overview</h2>
            </div>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-900/30 dark:text-emerald-400">
              Full or Partial Hifz
            </span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {CURRICULUM.map((mod) => (
              <div
                key={mod.title}
                className="flex w-72 flex-shrink-0 flex-col rounded-xl border border-gray-200 bg-white p-5 transition-colors dark:border-gray-800 dark:bg-gray-950"
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
                <div className="mt-auto border-t border-gray-100 pt-3 text-xs font-medium text-gray-500 dark:border-gray-800 dark:text-gray-400 flex items-center gap-1.5">
                  <Video className="h-3 w-3" />
                  {mod.plus ? `${mod.lessons}+` : mod.lessons} Live Classes
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT YOU'LL LEARN & REQUIREMENTS
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 pb-14 grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        
        {/* What You'll Learn */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-6 flex items-center gap-2">
            <Star className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Course Outcomes</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {LEARN_ITEMS.map((item) => (
              <div key={item.text} className="flex items-start gap-3 rounded-xl border border-gray-100 p-4 dark:border-gray-800">
                {/* Removed item.icon rendering here to prevent potential prop spread issues with Lucide, replaced with standard check */}
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-500" strokeWidth={1.5} />
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-6 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">What You Need</h2>
          </div>
          <div className="space-y-4">
            {REQUIREMENTS.map((req) => (
              <div key={req.text} className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <req.icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{req.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS (LIVE SETUP)
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-8 flex items-center gap-2">
            <Clock className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">How Our Live Classes Work</h2>
          </div>

          <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-5 hidden h-px border-t-2 border-dashed border-gray-200 dark:border-gray-800 lg:block" aria-hidden />

            {HOW_STEPS.map((step) => (
              <div key={step.n} className="flex flex-col items-center text-center">
                <div className="relative z-10 mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white shadow dark:bg-emerald-600 border-4 border-white dark:border-gray-900">
                  {step.n}
                </div>
                <p className="mb-1.5 text-sm font-bold text-gray-900 dark:text-white">{step.title}</p>
                <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />

      {/* ══════════════════════════════════════════
          FAQ & WHO IT'S FOR
      ══════════════════════════════════════════ */}
      <section className="mx-auto mt-14 max-w-7xl px-4 pb-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_2fr]">
        
        {/* Who it's for */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-6 flex items-center gap-2">
            <Users className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Who is this for?</h2>
          </div>
          <div className="space-y-4">
            {FOR_WHOM.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                <p className="text-sm text-gray-700 dark:text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-6 flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {FAQS.map((faq) => (
              <div key={faq.q}>
                <h3 className="mb-1.5 text-sm font-bold text-gray-900 dark:text-gray-100">{faq.q}</h3>
                <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HAVE QUESTIONS CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-emerald-900 px-6 py-8 transition-colors dark:bg-emerald-950 sm:flex-row shadow-lg">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <MessageCircle className="h-7 w-7 text-white" />
            </div>
            <div>
              <p className="text-lg font-bold text-white">Ready to begin your Hifz journey?</p>
              <p className="text-sm text-emerald-100">Message us on WhatsApp to set up your schedule.</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 sm:items-end w-full sm:w-auto">
            <a
              href="https://wa.me/+923394022926"
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-emerald-900 shadow transition hover:bg-gray-100 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <p className="text-xs text-emerald-200/80">+92 339 4022926</p>
          </div>
        </div>
      </section>

    </div>
  );
}