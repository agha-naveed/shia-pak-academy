"use client";

import Link from "next/link";
import Image from "next/image";
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
import banner from "@/public/images/blogs/taqwa-banner.jpg"
import readingQuran from "@/public/images/blogs/reading-quran.webp"
import manPraying from "@/public/images/blogs/man-praying.jpg"
import goodCompany from "@/public/images/blogs/good-company.jpg"
import helpOther from "@/public/images/blogs/help-other.jpg"
import aerialView from "@/public/images/blogs/quran-aerial-view.jpg"
import dp from "@/public/images/blogs/taqwa.jpg"
import logo from "@/public/logo.png"

// ─── WHATSAPP / FACEBOOK / X SVG ICONS ───────────────────────────────────────

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
  { id: "what-is-taqwa",        label: "What is Taqwa?" },
  { id: "why-taqwa-matters",    label: "Why Taqwa Matters Today" },
  { id: "taqwa-daily-life",     label: "Taqwa in Daily Life" },
  { id: "signs-of-taqwa",       label: "Signs of Taqwa" },
  { id: "conclusion",           label: "Conclusion" },
];

const TAQWA_BENEFITS = [
  { icon: "🧭", title: "Stay on the Right Path",   desc: "It acts as an inner compass." },
  { icon: "🕊️", title: "Find Peace",               desc: "True tranquility comes from being close to Allah." },
  { icon: "⚖️", title: "Make Better Choices",      desc: "It helps us choose akhirah over duniya." },
  { icon: "🤝", title: "Build Strong Character",   desc: "It shapes our akhlaq and interactions." },
];

const DAILY_LIFE_ITEMS = [
  { emoji: manPraying, label: "Remember Allah\nregularly",           imgBg: "from-amber-950 via-stone-900 to-amber-800" },
  { emoji: readingQuran, label: "Read and reflect on\nthe Quran",     imgBg: "from-teal-950 via-stone-900 to-teal-800" },
  { emoji: goodCompany, label: "Keep good\ncompany",                 imgBg: "from-stone-800 via-stone-700 to-stone-900" },
  { emoji: helpOther, label: "Ready for\nhelp other",       imgBg: "from-emerald-950 via-stone-900 to-emerald-800" },
];

const SIGNS_OF_TAQWA = [
  { icon: "💡", title: "Truthfulness",        desc: "A person of Taqwa speaks the truth even when it is difficult." },
  { icon: "🛡️", title: "Avoiding Sin",        desc: "They guard themselves against what Allah has prohibited." },
  { icon: "🌱", title: "Gratitude",           desc: "They are grateful in all circumstances, big or small." },
  { icon: "❤️", title: "Love for Ahlulbayt", desc: "Their love for the Prophet (ص) and Ahlulbayt (ع) is deep and sincere." },
  { icon: "🕌", title: "Regular Worship",     desc: "Salat, Dua, and Dhikr are a natural part of their daily rhythm." },
  { icon: "🤲", title: "Generosity",          desc: "They give in charity and support those in need for the sake of Allah." },
];

const RELATED_ARTICLES = [
  { title: "How to Connect with the Quran in Daily Life",              date: "May 12, 2024", readTime: "5 min read", imgBg: "from-amber-950 via-stone-900 to-amber-800",   emoji: "📖", slug: "how-to-connect-with-quran" },
  { title: "Life Lessons from the Sayings of Ahlulbayt (عليهم السلام)", date: "May 5, 2024",  readTime: "6 min read", imgBg: "from-emerald-950 via-stone-900 to-emerald-800", emoji: "✨", slug: "life-lessons-from-ahlulbayt" },
  { title: "Virtues and Benefits of Ziyarat Ahlulbayt (عليهم السلام)", date: "May 12, 2024", readTime: "5 min read", imgBg: "from-teal-950 via-stone-900 to-teal-800",     emoji: "🕌", slug: "virtues-of-ziyarat-ahlulbayt" },
  { title: "Good Character in Islam (Part 1)",                         date: "Apr 15, 2024", readTime: "4 min read", imgBg: "from-stone-800 via-stone-700 to-stone-900",   emoji: "🌿", slug: "good-character-in-islam" },
  { title: "Patience and Gratitude: A Path to Inner Peace",            date: "Apr 2, 2024",  readTime: "5 min read", imgBg: "from-yellow-950 via-stone-900 to-yellow-800", emoji: "🕊️", slug: "patience-and-gratitude" },
];

// ─── SHARE BUTTON ─────────────────────────────────────────────────────────────

function ShareButtons() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex items-center gap-3">
      <a href="https://wa.me/?text=Check+this+article" target="_blank" rel="noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-green-400 hover:text-green-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-green-500 dark:hover:text-green-400">
        <WhatsAppIcon className="h-4 w-4" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-blue-400 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-blue-500 dark:hover:text-blue-400">
        <FacebookIcon className="h-4 w-4" />
      </a>
      <a href="https://x.com" target="_blank" rel="noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-gray-500 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
        <XIcon className="h-4 w-4" />
      </a>
      <button onClick={handleCopy}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-emerald-400 hover:text-emerald-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
        title={copied ? "Copied!" : "Copy link"}>
        <Link2 className="h-4 w-4" />
      </button>
      {copied && <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Copied!</span>}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function BlogArticlePage() {
  const [activeSection, setActiveSection] = useState("what-is-taqwa");
  const contentRef = useRef<HTMLDivElement>(null);

  // ── Scrollspy ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    TOC_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white dark:bg-[#030102] transition-colors duration-300">

<section className="relative min-h-[340px] overflow-hidden bg-[#EDEAE3] dark:bg-[#0A0805] sm:min-h-[380px]">
        <div className="relative z-10 flex md:flex-row-reverse justify-between mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
          {/* Breadcrumb */}
          <div className="w-80 h-80 overflow-hidden rounded-xl mr-10 md:block hidden">
            <Image src={dp} alt="" className="w-full object-cover object-center h-full" />
          </div>

          <div>
            <nav className="mb-5 flex flex-wrap items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
              <Link href="/" className="transition hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
              <ChevronRight className="h-3 w-3 opacity-40" />
              <Link href="/blogs"  className="transition hover:text-gray-700 dark:hover:text-gray-300">Blog</Link>
              <ChevronRight className="h-3 w-3 opacity-40" />
              <Link href="/blogs"  className="transition hover:text-gray-700 dark:hover:text-gray-300">Articles &amp; Insights</Link>
              <ChevronRight className="h-3 w-3 opacity-40" />
              <span className="max-w-[200px] truncate text-gray-700 dark:text-gray-400">The Importance of Taqwa in Today's World</span>
            </nav>

            <span className="mb-4 inline-block rounded-full bg-emerald-800 px-3 py-1 text-xs font-semibold text-white dark:bg-emerald-700">
              Dinyaat
            </span>

            <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-tight text-gray-900 dark:text-gray-50 sm:text-4xl lg:text-5xl">
              The Importance of Taqwa<br />
              <span className="text-emerald-800 dark:text-emerald-500">in Today&apos;s World</span>
            </h1>

            <p className="mb-6 max-w-lg text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
              Taqwa teaches Muslims to live with honesty, patience, and fear of Allah. In today’s world, it helps people avoid wrong actions, make good decisions, and live peaceful and meaningful lives.

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
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════
          HERO — article header with background image
      ══════════════════════════════════════════ */}
      {/* <BlogHero 
        badge={"Dinyaat"}
        title={`The Importance of Taqwa
in Today's World`} 
description = {`Understanding Taqwa and how it guides us through modern-day challenges.`}
      /> */}
      {/* ══════════════════════════════════════════
          MAIN CONTENT + RIGHT SIDEBAR
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="flex flex-col gap-10 xl:flex-row xl:gap-12">

          {/* ── LEFT: Article body ── */}
          <div ref={contentRef} className="min-w-0 flex-1">

            {/* Featured image */}
            <div className="mb-8 relative rounded-xl overflow-hidden h-64 w-full sm:h-80 lg:h-96 flex items-center justify-center">
                <Image src={banner} alt="Imam Ali as" className="w-full h-full object-cover" width={800} height={800} placeholder="blur" />
              </div>

            {/* Intro paragraph */}
            <p className="mb-6 text-sm leading-[1.85] text-gray-700 dark:text-gray-300 sm:text-base">
              In a world filled with distractions, temptations, and constant change, Taqwa —{" "}
              <strong className="font-bold text-gray-900 dark:text-gray-100">consciousness of Allah</strong> — is the anchor
              that keeps us grounded. But what exactly is Taqwa, and why is it more important today than ever before?
            </p>

            {/* ── SECTION 1: What is Taqwa ── */}
            <h2 id="what-is-taqwa" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              What is Taqwa?
            </h2>
            <p className="mb-4 text-sm leading-[1.85] text-gray-600 dark:text-gray-400 sm:text-base">
              Taqwa is guarding oneself from anything that displeases Allah and striving to obey Him in
              every action, word, and intention. It is not just about avoiding sins, but about being
              mindful of Allah in every moment — in public and in private.
            </p>
            <p className="mb-6 text-sm leading-[1.85] text-gray-600 dark:text-gray-400 sm:text-base">
              The Arabic root of Taqwa comes from <em>Wiqaya</em> — meaning protection or a shield. A person
              with Taqwa is protected from the harms of this world and the punishment of the Hereafter
              through their constant awareness of Allah.
            </p>

            {/* Quran quote box */}
            <div className="mb-8 flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900/60">
              <div className="flex-shrink-0 rounded-lg bg-emerald-50 p-2.5 dark:bg-emerald-900/30">
                <BookOpen className="h-5 w-5 text-emerald-700 dark:text-emerald-500" />
              </div>
              <div>
                <p className="mb-2 text-sm italic leading-relaxed text-gray-700 dark:text-gray-300">
                  &ldquo;O you who have believed, fear Allah as He should be feared and do not die
                  except as <strong>Muslims [in submission to Him]</strong>.&rdquo;
                </p>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-500">— Quran 3:102</p>
              </div>
            </div>

            {/* ── SECTION 2: Why Taqwa Matters ── */}
            <h2 id="why-taqwa-matters" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              Why Taqwa Matters Today
            </h2>
            <p className="mb-5 text-sm leading-[1.85] text-gray-600 dark:text-gray-400 sm:text-base">
              We live in a time of unprecedented challenges. From social pressures to digital distractions,
              it&apos;s easy to lose sight of our purpose. Taqwa helps us:
            </p>

            {/* Benefits grid */}
            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {TAQWA_BENEFITS.map((b) => (
                <div key={b.title} className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <span className="mb-2 text-2xl">{b.icon}</span>
                  <p className="mb-1 text-xs font-bold text-gray-900 dark:text-gray-100">{b.title}</p>
                  <p className="text-[11px] leading-snug text-gray-500 dark:text-gray-400">{b.desc}</p>
                </div>
              ))}
            </div>

            <p className="mb-8 text-sm leading-[1.85] text-gray-600 dark:text-gray-400 sm:text-base">
              Imam Ali (ع) said: <em>&ldquo;I advise you to have Taqwa of Allah, for it is the provision for the journey
              and the shield for the Day of Reckoning.&rdquo;</em> This timeless guidance is more relevant today than ever —
              when temptations are at our fingertips and the heedlessness of the world is widespread.
            </p>

            {/* ── SECTION 3: Taqwa in Daily Life ── */}
            <h2 id="taqwa-daily-life" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              Taqwa in Daily Life
            </h2>
            <p className="mb-5 text-sm leading-[1.85] text-gray-600 dark:text-gray-400 sm:text-base">
              Practicing Taqwa isn&apos;t limited to worship. It&apos;s in how we speak, how we treat others, how we
              earn our livelihood, and how we use our time. Here are four practical ways to cultivate Taqwa:
            </p>

            {/* Daily Life image grid */}
            <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {DAILY_LIFE_ITEMS.map((item) => (
                <div key={item.label} className="group overflow-hidden rounded-xl">
                  <div className={`h-28 w-full bg-gradient-to-br ${item.imgBg} flex items-center justify-center text-4xl transition-transform duration-300 group-hover:scale-105 overflow-hidden`}>
                    <Image src={item.emoji} alt="" width={200} height={200} className="w-full" />
                  </div>
                  <p className="mt-2 whitespace-pre-line text-center text-xs font-medium text-gray-600 dark:text-gray-400 leading-snug">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mb-8 text-sm leading-[1.85] text-gray-600 dark:text-gray-400 sm:text-base">
              When we bring Taqwa into our daily routine — our work, relationships, speech, and decisions —
              we begin to live with intentionality and purpose. Every small act becomes an act of worship.
            </p>

            {/* ── SECTION 4: Signs of Taqwa ── */}
            <h2 id="signs-of-taqwa" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              Signs of Taqwa
            </h2>
            <p className="mb-5 text-sm leading-[1.85] text-gray-600 dark:text-gray-400 sm:text-base">
              How do we know if we possess Taqwa? The Quran and Ahlulbayt (ع) have described those who
              truly have Taqwa. Here are six recognisable qualities:
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SIGNS_OF_TAQWA.map((s) => (
                <div key={s.title} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <span className="mt-0.5 flex-shrink-0 text-xl">{s.icon}</span>
                  <div>
                    <p className="mb-1 text-sm font-bold text-gray-900 dark:text-gray-100">{s.title}</p>
                    <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── SECTION 5: Conclusion ── */}
            <h2 id="conclusion" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              Conclusion
            </h2>
            <p className="mb-4 text-sm leading-[1.85] text-gray-600 dark:text-gray-400 sm:text-base">
              Taqwa is the key to a successful life in this world and the Hereafter. The more Taqwa we
              develop, the more Allah guides, protects, and blesses us. It is not a burden — it is a
              gift that brings clarity, peace and direction to our lives.
            </p>
            <p className="mb-6 text-sm leading-[1.85] text-gray-600 dark:text-gray-400 sm:text-base">
              May Allah (سبحانه وتعالى) grant us all true Taqwa, and may He make us among those who live
              with consciousness of Him in every breath. Ameen.
            </p>

            {/* Closing Quran quote with image */}
            <div className="mb-10 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="relative h-44 w-full bg-linear-to-br from-amber-950 via-stone-900 to-stone-800 flex items-center justify-center text-7xl sm:h-65 overflow-hidden">
                <Image src={aerialView} width={1000} height={1000} className="w-full" alt="" />
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-gray-900/60">
                <span className="shrink-0 text-3xl font-bold leading-none text-gray-300 dark:text-gray-700">&ldquo;</span>
                <div>
                  <p className="mb-2 text-sm italic leading-relaxed text-gray-700 dark:text-gray-300">
                    And whoever fears Allah — He will make for him a way out and provide for him
                    from where he does not expect.
                  </p>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-500">— Quran 65:2-3</p>
                </div>
              </div>
            </div>

            {/* Share this article */}
            <div className="mb-10 border-t border-gray-200 pt-6 dark:border-gray-800">
              <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Share this article</p>
              <ShareButtons />
            </div>

            {/* ── PREV / NEXT NAVIGATION ── */}
            <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 dark:border-gray-800 sm:flex-row sm:justify-between">
              <Link
                href="/blogs/virtues-of-ziyarat-ahlulbayt"
                className="group flex max-w-xs items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-emerald-400 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-600"
              >
                <ArrowLeft className="h-5 w-5 flex-shrink-0 text-gray-400 transition group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                <div>
                  <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600">Previous Article</p>
                  <p className="text-xs font-semibold leading-snug text-gray-800 dark:text-gray-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition">
                    Virtues and Benefits of Ziyarat Ahlulbayt (عليهم السلام)
                  </p>
                </div>
              </Link>

              <Link
                href="/blogs/life-lessons-from-ahlulbayt"
                className="group flex max-w-xs flex-row-reverse items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-emerald-400 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-600 sm:text-right"
              >
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-gray-400 transition group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                <div>
                  <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600">Next Article</p>
                  <p className="text-xs font-semibold leading-snug text-gray-800 dark:text-gray-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition">
                    Life Lessons from the Sayings of Ahlulbayt (عليهم السلام)
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Sticky sidebar ── */}
          <aside className="w-full xl:w-[300px] 2xl:w-[340px]">
            <div className="sticky top-24 space-y-6">

              {/* Table of Contents */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <h3 className="mb-4 text-sm font-bold text-gray-900 dark:text-gray-100">On This Page</h3>
                <ul className="relative space-y-1 pl-4">
                  {/* Vertical line */}
                  <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-700" />
                  {TOC_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`relative flex items-center gap-2 rounded-md py-1.5 pl-3 pr-2 text-xs transition
                            ${isActive
                              ? "font-semibold text-emerald-700 dark:text-emerald-400"
                              : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                            }`}
                        >
                          {/* Active dot */}
                          <span className={`absolute -left-[9px] h-2 w-2 rounded-full border-2 transition-all
                            ${isActive
                              ? "border-emerald-600 bg-emerald-600 dark:border-emerald-400 dark:bg-emerald-400"
                              : "border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-900"
                            }`} />
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Share this article */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <h3 className="mb-4 text-sm font-bold text-gray-900 dark:text-gray-100">Share this article</h3>
                <ShareButtons />
              </div>


              {/* Have Questions CTA */}
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
                <a
                  href="https://wa.me/+923394022926"
                  target="_blank"
                  rel="noreferrer"
                  className="mb-2 flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-700 px-4 py-2.5 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-700 hover:text-white dark:border-emerald-600 dark:text-emerald-400 dark:hover:bg-emerald-600 dark:hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <p className="text-center text-sm font-bold text-emerald-900 dark:text-emerald-500">
                  +92 339 4022926
                </p>
              </div>

            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}