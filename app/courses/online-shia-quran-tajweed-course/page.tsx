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
  Mic,
  Headphones,
  Clock
} from "lucide-react";
import Pricing from "@/app/components/Pricing";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const BENEFITS = [
  { icon: Video,          title: "Live Zoom Sessions",     desc: "No pre-recorded videos. Recite directly to a live teacher." },
  { icon: Headphones,     title: "Listen & Repeat",        desc: "Hear the exact pronunciation and replicate it in real-time." },
  { icon: UserCheck,      title: "1-on-1 or Groups",       desc: "Choose between private tutoring or small interactive batches." },
  { icon: Heart,          title: "Beautify Your Voice",    desc: "Recite the Quran exactly as it was revealed to the Prophet (ﷺ)." },
];

const WHY_LIVE = [
  { title: "Immediate Error Correction", desc: "Tajweed involves subtle sound differences (like the length of a Madd or the nasal sound of Ghunna). A live teacher catches and corrects mistakes that you wouldn't notice yourself." },
  { title: "Interactive Practical Application", desc: "Knowing the rule is different from applying it. In live classes, you recite actual verses and the teacher guides your breath and tongue placement." },
  { title: "Avoid 'Hidden' Mistakes", desc: "Reading from a book or watching a video leaves room for 'Lahn Khafi' (hidden mistakes). Real-time feedback ensures your recitation is 100% accurate." },
];

const CURRICULUM = [
  {
    title: "Module 1: Foundations",
    lessons: 3,
    items: ["Introduction to Tajweed & Its Importance", "Refresher: Points of Articulation (Makharij)", "Heavy & Light Letters (Tafkheem & Tarqeeq)"],
  },
  {
    title: "Module 2: Noon & Meem Sakinah",
    lessons: 5,
    items: ["Rules of Izhar & Idgham", "Rules of Iqlab & Ikhfa", "Rules of Meem Sakinah & Mushaddadah"],
  },
  {
    title: "Module 3: Elongation (Al-Madd)",
    lessons: 4,
    items: ["Natural Madd (Madd Asli)", "Secondary Madd (Madd Far'i)", "Stopping Rules and Madd Lazim"],
    plus: true,
  },
  {
    title: "Module 4: Letter Characteristics",
    lessons: 4,
    items: ["Sifaat with Opposites", "Sifaat without Opposites", "Qalqalah (Echoing Sound)"],
    plus: true,
  },
  {
    title: "Module 5: Practical Recitation",
    lessons: 5,
    items: ["Applying Rules on Juz' Amma", "Stopping and Starting (Waqf & Ibtida)", "Live Recitation Testing"],
    plus: true,
  },
];

const LEARN_ITEMS = [
  { icon: Mic,       text: "Master the exact rules of recitation (Ghunna, Ikhfa, Idgham, etc.)" },
  { icon: Headphones,text: "Train your ear to recognize correct vs. incorrect pronunciation" },
  { icon: BookOpen,  text: "Learn the rules of stopping (Waqf) and starting (Ibtida) properly" },
  { icon: Star,      text: "Beautify your voice and read fluently without hesitation" },
  { icon: ShieldCheck, text: "Preserve the authenticity of the Quranic text through perfect recitation" },
];

const REQUIREMENTS = [
  { icon: Wifi, text: "A stable internet connection" },
  { icon: Video, text: "Zoom app installed on your device" },
  { icon: MessageCircle, text: "WhatsApp for daily communication" },
  { icon: BookOpen, text: "A standard Arabic Mus'haf (Quran)" },
];

const HOW_STEPS = [
  { n: 1, title: "Message Us",       desc: "Tap the WhatsApp button to select your timing." },
  { n: 2, title: "Schedule Setup",   desc: "We finalize a convenient time for your live Zoom class." },
  { n: 3, title: "Join the Group",   desc: "You get added to a private WhatsApp group with your teacher." },
  { n: 4, title: "Start Learning",   desc: "Click the Zoom link sent before class and begin learning live!" },
];

const FOR_WHOM = [
  "Students who can already read Arabic but lack proper Tajweed rules",
  "Adults who want to correct years of reading habits",
  "Anyone who wishes to recite the Quran beautifully and confidently",
  "Individuals preparing to lead prayers or teach others",
];

const FAQS = [
  { q: "Are these pre-recorded video lessons?", a: "Absolutely not. Tajweed cannot be mastered through recorded videos. All our classes are 100% live so the teacher can hear and correct your recitation." },
  { q: "Do I need to know how to read Arabic first?", a: "Yes. This course is for students who already know how to read basic Arabic words. If you are a complete beginner, please enroll in our Yassarnal Quran course first." },
  { q: "Do we learn the theoretical rules or just practice?", a: "Both! We teach the theoretical rule (e.g., what is Ikhfa) and then immediately spend the majority of the class practicing it on actual Quranic verses." },
  { q: "Can I choose my own schedule?", a: "Yes. Since these are live interactive sessions, we will coordinate with you to find a time slot that works best for your daily routine." },
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
                Live Interactive Classes
              </span>
              <div className="relative h-64 w-full lg:h-full">
                <Image
                  src="/images/courses/tajweed-course.jpg"
                  alt="Tajweed Quran Course"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 300px"
                  placeholder="blur"
                  blurDataURL="/images/courses/tajweed-course.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent dark:from-black/60" />
              </div>
            </div>

            {/* — Middle: title + meta + CTA — */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">Tajweed Quran Course</h1>
                <p className="mb-3 text-base font-medium text-emerald-700 dark:text-emerald-400">
                  Perfect Your Recitation with Live Expert Teachers
                </p>
                <p className="mb-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  Take your Quran reading to the next level. Learn the intricate rules of Tajweed (Madd, Ghunna, Ikhfa, etc.) through our live Zoom classes. Read directly to certified teachers and get immediate, real-time feedback to beautify your voice.
                </p>

                {/* Meta pills */}
                <div className="mb-6 flex flex-wrap gap-5 text-xs text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <Video className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium">Live on<br />Zoom/WA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium">Intermediate<br />Level</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium">20+ Live<br />Sessions</span>
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
                Reading the Quran is a highly rewarding act, but reciting it with proper Tajweed is a deeply spiritual experience that preserves the authenticity of Allah's words. 
              </p>
              <p>
                This course bridges the gap between basic reading and advanced recitation. We focus heavily on the rules of elongation (Madd), nasal sounds (Ghunna), and letter characteristics (Sifaat). You will spend most of your time actively reciting and being gently corrected by our expert teachers.
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
              Theory & Practice
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
                <item.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-500" strokeWidth={1.5} />
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
              <p className="text-lg font-bold text-white">Ready to beautify your recitation?</p>
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