"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  MessageCircle,
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
  Feather,
  Scale,
  Landmark
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const BENEFITS = [
  { icon: Video,          title: "Live Zoom Sessions",     desc: "Discuss the profound wisdom of Imam Ali (ع) in real-time." },
  { icon: Feather,        title: "Peak of Eloquence",      desc: "Experience the linguistic beauty of the original Arabic text." },
  { icon: UserCheck,      title: "1-on-1 or Groups",       desc: "Engage in deep, interactive group discussions or private study." },
  { icon: Landmark,       title: "Historical Context",     desc: "Learn the exact events that triggered each sermon and letter." },
];

const WHY_LIVE = [
  { title: "Decoding Complex Arabic", desc: "Nahjul Balagha represents the highest peak of Arabic eloquence after the Quran. A literal translation misses the metaphor and poetry. A live teacher breaks down the linguistic brilliance." },
  { title: "Deep Historical Context", desc: "Imam Ali's sermons address specific political and social crises of his time. Live classes allow the teacher to explain the history (e.g., the Battles of Jamal, Siffin) so the text makes sense." },
  { title: "Interactive Reflection", desc: "The wisdom in Nahjul Balagha is life-changing. Live group sessions foster a community of reflection where students discuss how to apply these ethical principles today." },
];

const CURRICULUM = [
  {
    title: "Module 1: Introduction",
    lessons: 3,
    items: ["Who compiled Nahjul Balagha? (Syed Razi)", "The Eloquence of Imam Ali (ع)", "Understanding the Historical Era"],
  },
  {
    title: "Module 2: The Sermons (Khutbat)",
    lessons: 6,
    items: ["The Sermon of Ash-Shiqshiqiyyah", "Sermon of the Pious (Khutbat al-Muttaqin)", "Sermons on Tawheed & Creation"],
  },
  {
    title: "Module 3: The Letters (Maktubat)",
    lessons: 5,
    items: ["Letter to Malik al-Ashtar (Governance)", "Letter 31 to Imam Hasan (ع) (Life Advice)", "Letters on Justice & Ethics"],
    plus: true,
  },
  {
    title: "Module 4: Short Sayings (Hikam)",
    lessons: 4,
    items: ["Wisdom on Wealth and Poverty", "Sayings on Friendship and Society", "Spiritual Aphorisms"],
    plus: true,
  },
  {
    title: "Module 5: Modern Application",
    lessons: 3,
    items: ["Leadership Principles for Today", "Building Personal Character", "Live Q&A and Final Review"],
    plus: true,
  },
];

const LEARN_ITEMS = [
  { icon: Feather,     text: "Appreciate the unmatched literary brilliance and eloquence of Ameer al-Mu'mineen (ع)" },
  { icon: Scale,       text: "Understand profound principles of social justice, governance, and human rights" },
  { icon: Heart,       text: "Adopt life-changing ethical advice originally given to Imam Hasan (ع)" },
  { icon: Landmark,    text: "Gain a clear understanding of early Islamic history from Imam Ali's perspective" },
  { icon: Lightbulb,   text: "Develop a deeply philosophical and spiritual approach to modern life" },
];

const REQUIREMENTS = [
  { icon: Wifi, text: "A stable internet connection" },
  { icon: Video, text: "Zoom app installed on your device" },
  { icon: MessageCircle, text: "WhatsApp for class updates" },
  { icon: BookOpen, text: "A copy of Nahjul Balagha (PDF will be provided)" },
];

const HOW_STEPS = [
  { n: 1, title: "Message Us",       desc: "Tap the WhatsApp button to select your timing." },
  { n: 2, title: "Schedule Setup",   desc: "We finalize a convenient time for your live Zoom class." },
  { n: 3, title: "Join the Group",   desc: "You get added to a private WhatsApp group with your teacher." },
  { n: 4, title: "Start Learning",   desc: "Click the Zoom link sent before class and begin learning live!" },
];

const FOR_WHOM = [
  "Anyone seeking to improve their personal character, ethics, and spirituality",
  "Students interested in Islamic history, theology, and philosophy",
  "Professionals and leaders looking for timeless principles of justice and management",
  "Lovers of Ahlulbayt (ع) who want to connect directly with the words of Imam Ali (ع)",
];

const FAQS = [
  { q: "Are these classes pre-recorded videos?", a: "No. The profound depth of Nahjul Balagha requires live discussion. All our classes are 100% live via Zoom so you can ask questions and reflect with the teacher." },
  { q: "Do I need to know Arabic?", a: "Not at all. The teacher will explain the text in English or Urdu, while highlighting the beauty of the original Arabic words to ensure you don't miss the depth of the meaning." },
  { q: "Will we cover the entire book?", a: "Nahjul Balagha is massive. This course covers the most famous and impactful selections from the Sermons, Letters, and Sayings to give you a comprehensive understanding." },
  { q: "Is this course suitable for beginners?", a: "Yes. Our scholars break down complex philosophical and historical concepts into easily understandable lessons suitable for anyone." },
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
                  src="/images/courses/nehjul-balagha.webp"
                  alt="Nahjul Balagha Course"
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
                <h1 className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">Nahjul Balagha</h1>
                <p className="mb-3 text-base font-medium text-emerald-700 dark:text-emerald-400">
                  The Peak of Eloquence: Wisdom of Imam Ali (ع)
                </p>
                <p className="mb-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  Dive into the unparalleled wisdom, political insight, and spiritual depth of Ameer al-Mu'mineen (ع). Through our live interactive classes, you will explore his greatest sermons, profound letters of governance, and timeless ethical aphorisms.
                </p>

                {/* Meta pills */}
                <div className="mb-6 flex flex-wrap gap-5 text-xs text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <Video className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium">Live on<br />Zoom/WA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium">1-on-1 or<br />Small Groups</span>
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
                Compiled by Syed Razi, Nahjul Balagha (The Peak of Eloquence) is revered as the masterpiece of Arabic literature and Islamic theology. It contains the soul-stirring sermons, letters, and sayings of Imam Ali ibn Abi Talib (عليه السلام).
              </p>
              <p>
                This course is a journey into the mind of the Gateway of Knowledge. From the breathtaking descriptions of the creation of the universe, to the perfect charter of human rights written to Malik al-Ashtar, this live course will fundamentally change how you view leadership, spirituality, and life.
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
              Sermons & Wisdom
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
            <Calendar className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
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

      {/* ══════════════════════════════════════════
          FAQ & WHO IT'S FOR
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 pb-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_2fr]">
        
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
              <p className="text-lg font-bold text-white">Ready to explore the Peak of Eloquence?</p>
              <p className="text-sm text-emerald-100">Message us on WhatsApp to join our next live batch.</p>
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