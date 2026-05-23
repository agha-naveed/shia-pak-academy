"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Link2,
  Flame,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import dp from "@/public/images/blogs/quran.jpg"
import logo from "@/public/logo.png"
import banner from "@/public/images/blogs/quran-banner.jpg"

// ─── SHARE ICONS ──────────────────────────────────────────────────────────────

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function XIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const TOC_ITEMS = [
  { id: "why-we-feel-distant",     label: "Why We Feel Distant from the Quran" },
  { id: "start-small",             label: "Start Small — One Verse a Day" },
  { id: "understand-meaning",      label: "Understand the Meaning" },
  { id: "recite-with-tajweed",     label: "Recite with Tajweed" },
  { id: "ahlulbayt-tafseer",       label: "Learn Through Ahlulbayt Tafseer" },
  { id: "morning-evening-habit",   label: "Build a Morning & Evening Habit" },
  { id: "quran-in-salat",          label: "Connect Through Salat" },
  { id: "dua-for-quran",           label: "Make Dua to Love the Quran" },
  { id: "conclusion",              label: "Conclusion" },
];

const BARRIERS = [
  { icon: "📱", title: "Screen Addiction",   desc: "We spend hours on our phones but struggle to open the Quran for five minutes." },
  { icon: "🌀", title: "Busy Lifestyle",     desc: "Work, school, and family leave us feeling like there is no time for recitation." },
  { icon: "❓", title: "Lack of Understanding", desc: "Reading Arabic without knowing the meaning makes the Quran feel distant." },
  { icon: "😔", title: "Spiritual Emptiness", desc: "We feel low in Iman and unsure where to begin rebuilding our connection." },
];

const DAILY_HABITS = [
  {
    time: "Fajr",
    icon: "🌅",
    title: "After Fajr Salat",
    desc: "Recite at least 10 verses with contemplation. The mind is clear and the heart is open at dawn.",
    color: "from-amber-950 to-stone-900",
    accent: "text-amber-300",
  },
  {
    time: "Midday",
    icon: "☀️",
    title: "Lunch Break",
    desc: "Listen to a tafseer podcast or audio recitation while eating — 10 minutes can change your day.",
    color: "from-teal-950 to-stone-900",
    accent: "text-teal-300",
  },
  {
    time: "Asr",
    icon: "🌤️",
    title: "After Asr Salat",
    desc: "Read the translation and a short commentary of the verse you recited at Fajr.",
    color: "from-emerald-950 to-stone-900",
    accent: "text-emerald-300",
  },
  {
    time: "Isha",
    icon: "🌙",
    title: "Before Sleep",
    desc: "Recite Surah Al-Mulk or the last two Surahs as a shield before sleep. End the day with the Quran.",
    color: "from-indigo-950 to-stone-900",
    accent: "text-indigo-300",
  },
];

const TIPS_UNDERSTAND = [
  { n: "01", title: "Read the translation side-by-side", desc: "Use a bilingual Quran so every Arabic word is paired with its meaning in your language." },
  { n: "02", title: "Study one Surah deeply",            desc: "Rather than rushing through juz, spend a week on one Surah and truly absorb its lessons." },
  { n: "03", title: "Use Tafseer resources",             desc: "Apps like Al-Mizan or Al-Kafi Tafseer (from the Ahlulbayt tradition) give rich context to verses." },
  { n: "04", title: "Journal your reflections",          desc: "Write down what each verse means to you. This personalises the Quran and makes it alive." },
];

const VIRTUES = [
  { arabic: "اَلْقُرْآنُ مَأْدُبَةُ اللَّهِ", translation: "The Quran is the banquet of Allah.", source: "Imam Ali (ع) — Nahjul Balagha" },
  { arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ", translation: "The best among you is the one who learns the Quran and teaches it.", source: "Prophet Muhammad (ص)" },
  { arabic: "مَنْ قَرَأَ الْقُرْآنَ فَكَأَنَّمَا أُدْرِجَتِ النُّبُوَّةُ بَيْنَ جَنْبَيْهِ", translation: "Whoever recites the Quran is as if prophethood were placed between his ribs.", source: "Imam Ja'far al-Sadiq (ع)" },
];

const RELATED_ARTICLES = [
  { title: "Sermons of Imam Ali (ع) for Today's World",              date: "May 20, 2024", readTime: "8 min read", imgBg: "from-stone-900 via-amber-950 to-stone-800",   emoji: "🏛️", slug: "what-imam-ali-sermons-teach-modern-society" },
  { title: "The Importance of Taqwa in Today's World",               date: "Apr 28, 2024", readTime: "4 min read", imgBg: "from-teal-950 via-stone-900 to-teal-800",     emoji: "🌿", slug: "the-importance-of-taqwa-in-todays-world" },
  { title: "Life Lessons from the Sayings of Ahlulbayt (ع)",         date: "May 5, 2024",  readTime: "6 min read", imgBg: "from-emerald-950 via-stone-900 to-emerald-800", emoji: "✨", slug: "life-lessons-from-ahlulbayt" },
  { title: "Virtues and Benefits of Ziyarat Ahlulbayt (ع)",          date: "May 12, 2024", readTime: "5 min read", imgBg: "from-red-950 via-stone-900 to-red-900",        emoji: "🕌", slug: "virtues-of-ziyarat-ahlulbayt" },
  { title: "Patience and Gratitude: A Path to Inner Peace",          date: "Apr 2, 2024",  readTime: "5 min read", imgBg: "from-yellow-950 via-stone-900 to-yellow-800",  emoji: "🕊️", slug: "patience-and-gratitude" },
];

// ─── SHARE BUTTONS ────────────────────────────────────────────────────────────

function ShareButtons() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const base = "flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400";
  return (
    <div className="flex items-center gap-3">
      <a href="https://wa.me/?text=Check+this+article" target="_blank" rel="noreferrer" className={`${base} hover:border-green-400 hover:text-green-600 dark:hover:border-green-500 dark:hover:text-green-400`}><WhatsAppIcon className="h-4 w-4" /></a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer" className={`${base} hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400`}><FacebookIcon className="h-4 w-4" /></a>
      <a href="https://x.com" target="_blank" rel="noreferrer" className={`${base} hover:border-gray-500 hover:text-gray-900 dark:hover:text-gray-100`}><XIcon className="h-4 w-4" /></a>
      <button onClick={handleCopy} className={`${base} hover:border-emerald-400 hover:text-emerald-600 dark:hover:border-emerald-500 dark:hover:text-emerald-400`} title={copied ? "Copied!" : "Copy link"}><Link2 className="h-4 w-4" /></button>
      {copied && <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Copied!</span>}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HowToConnectWithQuranPage() {
  const [activeSection, setActiveSection] = useState("why-we-feel-distant");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    TOC_ITEMS.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white dark:bg-[#030102] transition-colors duration-300">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[340px] overflow-hidden bg-[#F0EBE0] dark:bg-[#0A0805] sm:min-h-[380px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F0EBE0]/96 via-[#F0EBE0]/80 to-transparent dark:from-[#0A0805]/96 dark:via-[#0A0805]/80 dark:to-transparent" />


        <div className="relative z-10 flex md:flex-row-reverse justify-between mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
          {/* Breadcrumb */}
            <div className="w-80 h-80 overflow-hidden rounded-xl mr-10 md:block hidden">
                <Image src={dp} alt="" className="w-full h-full" />
            </div>
            <div>
            <nav className="mb-5 flex flex-wrap items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                <Link href="/" className="transition hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
                <ChevronRight className="h-3 w-3 opacity-40" />
                <Link href="/blogs" className="transition hover:text-gray-700 dark:hover:text-gray-300">Blog</Link>
                <ChevronRight className="h-3 w-3 opacity-40" />
                <Link href="/blogs" className="transition hover:text-gray-700 dark:hover:text-gray-300">Articles &amp; Insights</Link>
                <ChevronRight className="h-3 w-3 opacity-40" />
                <span className="max-w-[180px] truncate text-gray-700 dark:text-gray-400">How to Connect with the Quran in Daily Life</span>
            </nav>

            <span className="mb-4 inline-block rounded-full bg-emerald-800 px-3 py-1 text-xs font-semibold text-white dark:bg-emerald-700">
                Quran
            </span>

            <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-tight text-gray-900 dark:text-gray-50 sm:text-4xl lg:text-5xl">
                How to Connect with the<br />
                <span className="text-emerald-800 dark:text-emerald-500">Quran in Daily Life</span>
            </h1>

            <p className="mb-6 max-w-lg text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                Practical, soul-nourishing ways to build a strong and lasting connection with
                the words of Allah — even with a busy schedule.
            </p>

            <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center">
                    <Image src={logo} width={200} height={200} alt="" />
                </div>
                <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Shia Quran Pak Academy</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                    <span>May 20, 2026</span>
                    <span className="h-1 w-1 rounded-full bg-gray-400" />
                    <span>8 min read</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MAIN CONTENT + SIDEBAR
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="flex flex-col gap-10 xl:flex-row xl:gap-12">

          {/* ── LEFT: Article body ── */}
          <div ref={contentRef} className="min-w-0 flex-1">

            {/* Featured image */}
              <div className="relative mb-8 overflow-hidden rounded-2xl h-64 w-full sm:h-80 lg:h-[400px]">
                <Image src={banner} width={900} height={900} className="w-full object-bottom" alt="" />
            </div>

            {/* Intro */}
            <p className="mb-5 text-sm leading-[1.9] text-gray-700 dark:text-gray-300 sm:text-base">
              The Quran is not just a book to be recited — it is{" "}
              <strong className="font-bold text-gray-900 dark:text-gray-100">the living speech of Allah</strong>,
              a mercy, a healer, and a guide. Yet many Muslims feel a distance from it. We own
              beautiful copies but rarely open them. We memorised Surahs as children but no longer
              feel their meaning in our hearts.
            </p>
            <p className="mb-8 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              This article is a practical, step-by-step guide to rebuilding — or deepening — your
              connection with the Quran, using the wisdom of the Prophet (ص) and Ahlulbayt (ع)
              as our compass.
            </p>

            {/* Opening verse quote */}
            <div className="mb-10 flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900/60">
              <div className="flex-shrink-0 rounded-lg bg-emerald-50 p-2.5 dark:bg-emerald-900/30">
                <BookOpen className="h-5 w-5 text-emerald-700 dark:text-emerald-500" />
              </div>
              <div>
                <p
                  className="mb-2 text-xl leading-loose text-amber-700 dark:text-amber-400"
                  dir="rtl"
                  style={{ fontFamily: "'Scheherazade New','Amiri',serif" }}
                >
                  وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ
                </p>
                <p className="mb-1 text-sm italic leading-relaxed text-gray-700 dark:text-gray-300">
                  &ldquo;And We send down of the Quran that which is a healing and a mercy for the believers.&rdquo;
                </p>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-500">— Quran 17:82</p>
              </div>
            </div>

            {/* ── 1: Why We Feel Distant ── */}
            <h2 id="why-we-feel-distant" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              Why We Feel Distant from the Quran
            </h2>
            <p className="mb-5 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Before we can fix the problem, we must understand it. There are four common reasons
              why believers struggle to connect with the Quran today:
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {BARRIERS.map((b) => (
                <div key={b.title} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <span className="mt-0.5 text-2xl flex-shrink-0">{b.icon}</span>
                  <div>
                    <p className="mb-1 text-sm font-bold text-gray-900 dark:text-gray-100">{b.title}</p>
                    <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mb-8 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Recognising these barriers is the first step. None of them are insurmountable. Every
              single one has a practical solution — and the Prophet (ص) and Ahlulbayt (ع) gave us
              those solutions centuries ago.
            </p>

            {/* ── 2: Start Small ── */}
            <h2 id="start-small" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              Start Small — One Verse a Day
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              The most common mistake people make is trying to read one juz per day from day one
              and burning out within a week. The Prophet (ص) said:{" "}
              <em>&ldquo;The most beloved deeds to Allah are the most consistent ones, even if they are small.&rdquo;</em>
            </p>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Begin with just <strong className="font-bold text-gray-900 dark:text-gray-100">one verse a day</strong>.
              Read it. Reflect on it. Look up its meaning. Let it settle in your heart. Then build
              from there — 3 verses, 5 verses, half a page. Consistency is more powerful than intensity.
            </p>

            {/* Highlighted tip */}
            <div className="mb-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 p-6 shadow-md">
              <div className="pointer-events-none absolute -right-4 -top-4 text-[120px] leading-none text-emerald-800/30 select-none">💡</div>
              <p className="relative text-sm font-semibold text-emerald-200 mb-2">✦ Practical Tip</p>
              <p className="relative text-sm leading-relaxed text-emerald-100">
                Set a daily alarm labelled <strong>&ldquo;Quran Time&rdquo;</strong> — just 5 minutes. Place your
                Quran on your pillow or desk so it is the first thing you see. Reduce the friction
                between you and the Book of Allah.
              </p>
            </div>

            {/* ── 3: Understand Meaning ── */}
            <h2 id="understand-meaning" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              Understand the Meaning
            </h2>
            <p className="mb-5 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Allah says: <em>&ldquo;Then do they not reflect upon the Quran?&rdquo;</em> (47:24). Recitation
              without reflection is like drinking water without tasting it. Here are four ways to
              unlock the meaning of what you recite:
            </p>

            <div className="mb-8 space-y-3">
              {TIPS_UNDERSTAND.map((tip) => (
                <div key={tip.n} className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-xs font-black text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-400">
                    {tip.n}
                  </span>
                  <div>
                    <p className="mb-1 text-sm font-bold text-gray-900 dark:text-gray-100">{tip.title}</p>
                    <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── 4: Tajweed ── */}
            <h2 id="recite-with-tajweed" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              Recite with Tajweed
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Tajweed — the rules of correct Quranic pronunciation — is not just a technical
              exercise. It is a form of honouring the speech of Allah. When you recite with proper
              Makharij (articulation points) and apply the rules, the Quran sounds as it was revealed,
              and the beauty of its language penetrates the heart in a way that incorrect recitation
              cannot.
            </p>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              You do not need years of study to begin. Enroll in a beginner Tajweed course, listen
              to a skilled reciter like Sheikh Minshawi or Sheikh Abdul Basit, and repeat after them.
              Your tongue will gradually follow.
            </p>

            <div className="mb-8 flex items-start gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/40 dark:bg-amber-950/20">
              <div className="flex-shrink-0 rounded-lg bg-amber-100 p-2.5 dark:bg-amber-900/30">
                <span className="text-lg">🎙️</span>
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold text-amber-800 dark:text-amber-300">
                  Imam Ja&apos;far al-Sadiq (ع) said:
                </p>
                <p className="mb-2 text-sm italic leading-relaxed text-gray-700 dark:text-gray-300">
                  &ldquo;The Quran was revealed with sadness (khuzn), so recite it with a sorrowful voice.
                  Whoever does not recite it with a beautiful voice should try to do so.&rdquo;
                </p>
                <p className="text-xs font-semibold text-amber-700 dark:text-amber-500">— Al-Kafi, Vol. 2</p>
              </div>
            </div>

            {/* ── 5: Ahlulbayt Tafseer ── */}
            <h2 id="ahlulbayt-tafseer" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              Learn Through Ahlulbayt Tafseer
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              The Prophet (ص) said: <em>&ldquo;I leave behind two weighty things — the Quran and my Ahlulbayt.
              They will never separate until they return to me at the Hawd.&rdquo;</em> (Hadith al-Thaqalayn)
            </p>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              This means the Quran and the Ahlulbayt (ع) are inseparable. To truly understand the
              Quran, we must go to the Imams (ع). The greatest tafseer works in the Shia tradition —
              like <em>Tafseer al-Mizan</em> by Allama Tabatabai — draw directly from the sayings of
              the Imams to illuminate the meaning of each verse.
            </p>

            {/* Virtues card row */}
            <div className="mb-8 space-y-4">
              {VIRTUES.map((v) => (
                <div key={v.source} className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
                  <div className="bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-900 p-4 text-right">
                    <p
                      className="text-xl leading-loose text-amber-300"
                      dir="rtl"
                      style={{ fontFamily: "'Scheherazade New','Amiri',serif" }}
                    >
                      {v.arabic}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 dark:bg-gray-900/60">
                    <p className="mb-1 text-sm italic text-gray-700 dark:text-gray-300">&ldquo;{v.translation}&rdquo;</p>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-500">— {v.source}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── 6: Morning & Evening Habit ── */}
            <h2 id="morning-evening-habit" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              Build a Morning &amp; Evening Habit
            </h2>
            <p className="mb-5 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              The Imams (ع) emphasised the importance of reciting the Quran at specific times of
              day — particularly dawn and night. Build the Quran into four anchors of your day:
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {DAILY_HABITS.map((h) => (
                <div key={h.time} className={`overflow-hidden rounded-xl bg-gradient-to-br ${h.color} p-5`}>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-3xl">{h.icon}</span>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-widest ${h.accent}`}>{h.time}</p>
                      <p className="text-sm font-bold text-white">{h.title}</p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed text-gray-300">{h.desc}</p>
                </div>
              ))}
            </div>

            {/* ── 7: Quran in Salat ── */}
            <h2 id="quran-in-salat" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              Connect Through Salat
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Every day, five times a day, you already recite the Quran in Salat. Surah Al-Fatihah
              alone is recited at least 10 times daily. The question is — are you present while
              reciting it?
            </p>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Before your next Salat, spend two minutes reading the translation of Surah Al-Fatihah.
              Then when you recite it in prayer, feel every word. You are speaking directly to Allah —
              and He is listening.
            </p>

            <div className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-teal-900 to-teal-950 p-6 shadow-md">
              <div className="pointer-events-none absolute -right-3 -top-3 text-[100px] leading-none text-teal-800/30 select-none">🕌</div>
              <p className="relative mb-3 text-sm font-semibold text-teal-200">Reflect during Salat:</p>
              <ul className="relative space-y-2">
                {[
                  "Recite slowly — do not rush to finish.",
                  "Look up the meaning of each Surah you recite this week.",
                  "Choose shorter Surahs you understand for your Nafilah prayers.",
                  "Feel that you are having a private conversation with Allah.",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-xs text-teal-100">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── 8: Dua ── */}
            <h2 id="dua-for-quran" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              Make Dua to Love the Quran
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              One of the most powerful and often overlooked tools is simply asking Allah to give
              you love for His Book. The Prophet (ص) and Imams (ع) taught us specific duas for this.
              Ask Allah every morning: <em>&ldquo;O Allah, make the Quran the spring of my heart, the
              light of my chest, the departure of my sorrow, and the leaving of my anxiety.&rdquo;</em>
            </p>
            <p className="mb-6 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              When we ask sincerely, Allah opens our hearts. The connection with the Quran is
              ultimately a Divine gift — and Du&apos;a is how we ask for it.
            </p>

            {/* Dua box */}
            <div className="mb-10 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="bg-gradient-to-br from-amber-950 via-stone-900 to-stone-800 p-6 text-center">
                <p
                  className="text-2xl leading-loose text-amber-300 sm:text-3xl"
                  dir="rtl"
                  style={{ fontFamily: "'Scheherazade New','Amiri',serif" }}
                >
                  اللَّهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي
                </p>
              </div>
              <div className="bg-gray-50 p-5 dark:bg-gray-900/60">
                <p className="mb-1 text-sm italic text-center leading-relaxed text-gray-700 dark:text-gray-300">
                  &ldquo;O Allah, make the Quran the spring of my heart and the light of my chest.&rdquo;
                </p>
                <p className="text-center text-xs font-semibold text-gray-500 dark:text-gray-500">
                  — Du&apos;a of the Prophet Muhammad (ص)
                </p>
              </div>
            </div>

            {/* ── Conclusion ── */}
            <h2 id="conclusion" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              Conclusion
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Connecting with the Quran is not a one-time event. It is a daily, life-long journey.
              There will be days when recitation feels effortless and your heart is soft, and days
              when it feels like a burden. Both are normal. The key is to <strong className="font-bold text-gray-900 dark:text-gray-100">never stop returning</strong>.
            </p>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Start today. Open the Quran — even for five minutes. Read one verse. Sit with it.
              Let the words of Allah speak to you. That is where the journey begins.
            </p>
            <p className="mb-8 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              May Allah make us among the companions of the Quran — those who recite it, reflect
              on it, act by it, and love it with a deep and sincere love. Ameen.
            </p>

            {/* Course CTA Banner */}
            <div className="mb-10 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 p-6 text-center sm:flex-row sm:text-left">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-3xl">📖</div>
              <div className="flex-1">
                <p className="mb-1 text-sm font-bold text-white">Want to Learn Quran with Tafseer?</p>
                <p className="text-xs leading-relaxed text-emerald-300">
                  Enroll in our <strong className="text-white">Tafseer of Quran</strong> or{" "}
                  <strong className="text-white">Quranic Arabic Basics</strong> courses to go deeper
                  into the meaning of the Quran.
                </p>
              </div>
              <Link href="/courses/tafseer-of-quran"
                className="flex-shrink-0 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-emerald-900 transition hover:bg-emerald-50">
                Explore Courses →
              </Link>
            </div>

            {/* Share */}
            <div className="mb-10 border-t border-gray-200 pt-6 dark:border-gray-800">
              <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Share this article</p>
              <ShareButtons />
            </div>

            {/* Prev / Next */}
            <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 dark:border-gray-800 sm:flex-row sm:justify-between">
              <Link href="/blogs/virtues-of-ziyarat-ahlulbayt"
                className="group flex max-w-xs items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-emerald-400 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-600">
                <ArrowLeft className="h-5 w-5 flex-shrink-0 text-gray-400 transition group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                <div>
                  <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600">Previous Article</p>
                  <p className="text-xs font-semibold leading-snug text-gray-800 dark:text-gray-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition">
                    Virtues and Benefits of Ziyarat Ahlulbayt (ع)
                  </p>
                </div>
              </Link>
              <Link href="/blogs/what-imam-ali-sermons-teach-modern-society"
                className="group flex max-w-xs flex-row-reverse items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-emerald-400 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-600">
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-gray-400 transition group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                <div className="sm:text-right">
                  <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600">Next Article</p>
                  <p className="text-xs font-semibold leading-snug text-gray-800 dark:text-gray-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition">
                    Sermons of Imam Ali (ع) for Today&apos;s World
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Sticky sidebar ── */}
          <aside className="w-full xl:w-[300px] 2xl:w-[340px]">
            <div className="sticky top-24 space-y-6">

              {/* TOC */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <h3 className="mb-4 text-sm font-bold text-gray-900 dark:text-gray-100">On This Page</h3>
                <ul className="relative space-y-1 pl-4">
                  <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-700" />
                  {TOC_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <a href={`#${item.id}`}
                          className={`relative flex items-center gap-2 rounded-md py-1.5 pl-3 pr-2 text-xs transition
                            ${isActive ? "font-semibold text-emerald-700 dark:text-emerald-400" : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"}`}>
                          <span className={`absolute -left-[9px] h-2 w-2 rounded-full border-2 transition-all
                            ${isActive ? "border-emerald-600 bg-emerald-600 dark:border-emerald-400 dark:bg-emerald-400" : "border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-900"}`} />
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Share */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <h3 className="mb-4 text-sm font-bold text-gray-900 dark:text-gray-100">Share this article</h3>
                <ShareButtons />
              </div>

              {/* Related Articles */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-gray-100">
                  <Flame className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {RELATED_ARTICLES.map((a) => (
                    <Link key={a.slug} href={`/blogs/${a.slug}`} className="group flex items-center gap-3">
                      <div className={`h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br ${a.imgBg} flex items-center justify-center text-2xl`}>
                        <span className="opacity-70">{a.emoji}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="line-clamp-2 text-xs font-semibold leading-snug text-gray-800 transition group-hover:text-emerald-700 dark:text-gray-200 dark:group-hover:text-emerald-400">
                          {a.title}
                        </p>
                        <p className="mt-1 text-[10px] text-gray-400 dark:text-gray-500">
                          {a.date} · {a.readTime}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Have Questions */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-gray-100">Have Questions?</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">We&apos;re here to help you on your learning journey.</p>
                  </div>
                </div>
                <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer"
                  className="mb-2 flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-700 px-4 py-2.5 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-700 hover:text-white dark:border-emerald-600 dark:text-emerald-400 dark:hover:bg-emerald-600 dark:hover:text-white">
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <p className="text-center text-sm font-bold text-emerald-900 dark:text-emerald-500">+1 (555) 123-4567</p>
              </div>

            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}