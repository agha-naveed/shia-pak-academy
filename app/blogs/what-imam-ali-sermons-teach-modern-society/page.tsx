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
import banner from "@/public/images/blogs/imam-ali-sermon-banner.jpg"
import lastImg from "@/public/images/blogs/imam-ali-roza.webp"
import dp from "@/public/images/blogs/dp.jpg"
import logo from "@/public/logo.png"

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
  { id: "who-was-imam-ali",       label: "Who Was Imam Ali (ع)?" },
  { id: "nahjul-balagha",         label: "Nahjul Balagha — A Living Book" },
  { id: "on-self-discipline",     label: "Sermon on Self-Discipline" },
  { id: "on-justice",             label: "On Justice & Leadership" },
  { id: "on-world-distractions",  label: "On the Distractions of the World" },
  { id: "on-death-and-purpose",   label: "On Death & Purpose" },
  { id: "lessons-for-today",      label: "Lessons for Today" },
  { id: "conclusion",             label: "Conclusion" },
];

const SERMON_THEMES = [
  { icon: "🌿", title: "Self-Purification",  desc: "Cleansing the heart from arrogance, envy, and attachment to the world." },
  { icon: "⚖️", title: "Justice & Fairness", desc: "Standing for the oppressed and treating every human with dignity." },
  { icon: "🧠", title: "Knowledge & Wisdom", desc: "Seeking knowledge as a form of worship and a tool against ignorance." },
  { icon: "🕊️", title: "Inner Peace",        desc: "Finding contentment through remembrance of Allah and gratitude." },
  { icon: "🤝", title: "Brotherhood",        desc: "Uniting people on truth and compassion rather than tribalism." },
  { icon: "⏳", title: "Time & Purpose",     desc: "Using every moment for that which benefits this life and the next." },
];

const MODERN_LESSONS = [
  {
    icon: "📱",
    title: "Social Media & Vain Talk",
    sermon: "Imam Ali (ع) warned: 'The tongue is like a beast — if you do not chain it, it will devour you.'",
    modern: "Today, words spread instantly. Backbiting, slander, and rumours travel at the speed of the internet. His warning is more urgent than ever.",
  },
  {
    icon: "💼",
    title: "Materialism & Greed",
    sermon: "He said: 'The world is like a serpent — soft to the touch but full of venom.'",
    modern: "In an era of consumerism and the endless chase for more, this reminder cuts through the noise. Our worth is not our net worth.",
  },
  {
    icon: "🏛️",
    title: "Leadership & Accountability",
    sermon: "'A ruler who is not just is like a river without water.'",
    modern: "Corruption, injustice, and misuse of power are global crises. Imam Ali (ع) modelled leadership as a trust, not a privilege.",
  },
  {
    icon: "😔",
    title: "Anxiety & Mental Health",
    sermon: "'Whoever trusts Allah finds that all his worries are resolved by Him.'",
    modern: "Mental health struggles are at an all-time high. His words point to Tawakkul — trusting Allah — as the foundation of inner peace.",
  },
];

const FAMOUS_QUOTES = [
  { arabic: "قِيمَةُ كُلِّ امْرِئٍ مَا يُحْسِنُهُ", translation: "The value of a person is in what he does well.", source: "Nahjul Balagha — Wisdom 81" },
  { arabic: "كُنْ فِي الفِتْنَةِ كَابْنِ اللَّبُون", translation: "In times of tribulation, be like a young camel — not yet strong enough to be loaded.", source: "Nahjul Balagha — Wisdom 1" },
  { arabic: "لَا تَكُنْ عَبْدَ غَيْرِكَ وَقَدْ جَعَلَكَ اللَّهُ حُرًّا", translation: "Do not be a slave to others when Allah has made you free.", source: "Nahjul Balagha — Letter 31" },
];

const RELATED_ARTICLES = [
  { title: "The Importance of Taqwa in Today's World",          date: "Apr 28, 2024", readTime: "4 min read", imgBg: "from-teal-950 via-stone-900 to-teal-800",     emoji: "🌿", slug: "importance-of-taqwa" },
  { title: "How to Connect with the Quran in Daily Life",       date: "May 12, 2024", readTime: "5 min read", imgBg: "from-amber-950 via-stone-900 to-amber-800",   emoji: "📖", slug: "how-to-connect-with-quran" },
  { title: "Virtues and Benefits of Ziyarat Ahlulbayt (ع)",     date: "May 12, 2024", readTime: "5 min read", imgBg: "from-emerald-950 via-stone-900 to-emerald-800", emoji: "🕌", slug: "virtues-of-ziyarat-ahlulbayt" },
  { title: "Patience and Gratitude: A Path to Inner Peace",     date: "Apr 2, 2024",  readTime: "5 min read", imgBg: "from-yellow-950 via-stone-900 to-yellow-800", emoji: "🕊️", slug: "patience-and-gratitude" },
  { title: "Good Character in Islam (Part 1)",                  date: "Apr 15, 2024", readTime: "4 min read", imgBg: "from-stone-800 via-stone-700 to-stone-900",   emoji: "💡", slug: "good-character-in-islam" },
];

// ─── SHARE BUTTONS ────────────────────────────────────────────────────────────

function ShareButtons() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const btnClass =
    "flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400";
  return (
    <div className="flex items-center gap-3">
      <a href="https://wa.me/?text=Check+this+article" target="_blank" rel="noreferrer"
        className={`${btnClass} hover:border-green-400 hover:text-green-600 dark:hover:border-green-500 dark:hover:text-green-400`}>
        <WhatsAppIcon className="h-4 w-4" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer"
        className={`${btnClass} hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400`}>
        <FacebookIcon className="h-4 w-4" />
      </a>
      <a href="https://x.com" target="_blank" rel="noreferrer"
        className={`${btnClass} hover:border-gray-500 hover:text-gray-900 dark:hover:text-gray-100`}>
        <XIcon className="h-4 w-4" />
      </a>
      <button onClick={handleCopy}
        className={`${btnClass} hover:border-emerald-400 hover:text-emerald-600 dark:hover:border-emerald-500 dark:hover:text-emerald-400`}
        title={copied ? "Copied!" : "Copy link"}>
        <Link2 className="h-4 w-4" />
      </button>
      {copied && <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Copied!</span>}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ImamAliSermonBlogPage() {
  const [activeSection, setActiveSection] = useState("who-was-imam-ali");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
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

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[340px] overflow-hidden bg-[#EDEAE3] dark:bg-[#0A0805] sm:min-h-[380px]">
        <div className="relative z-10 flex md:flex-row-reverse justify-between mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
          {/* Breadcrumb */}
          <div className="w-80 h-80 overflow-hidden rounded-xl mr-10 md:block hidden">
            <Image src={dp} alt="" className="w-full h-full" />
          </div>

          <div>
            <nav className="mb-5 flex flex-wrap items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
              <Link href="/" className="transition hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
              <ChevronRight className="h-3 w-3 opacity-40" />
              <Link href="/blogs"  className="transition hover:text-gray-700 dark:hover:text-gray-300">Blog</Link>
              <ChevronRight className="h-3 w-3 opacity-40" />
              <Link href="/blogs"  className="transition hover:text-gray-700 dark:hover:text-gray-300">Articles &amp; Insights</Link>
              <ChevronRight className="h-3 w-3 opacity-40" />
              <span className="max-w-[200px] truncate text-gray-700 dark:text-gray-400">What Imam Ali (ع) Sermons Teach for Modern Society</span>
            </nav>

            <span className="mb-4 inline-block rounded-full bg-emerald-800 px-3 py-1 text-xs font-semibold text-white dark:bg-emerald-700">
              Ahlulbayt (عليهم السلام)
            </span>

            <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-tight text-gray-900 dark:text-gray-50 sm:text-4xl lg:text-5xl">
              Imam Ali's (ع) Sermons<br />
              <span className="text-emerald-800 dark:text-emerald-500">Teach Modern Society</span>
            </h1>

            <p className="mb-6 max-w-lg text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
              The timeless words of Nahjul Balagha speak directly to the crises, struggles,
              and questions of our modern age — if only we would listen.
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

            {/* Featured banner image */}
              <div className="mb-8 relative rounded-xl overflow-hidden h-64 w-full sm:h-80 lg:h-96 flex items-center justify-center">
                <Image src={banner} alt="Imam Ali as" className="w-full h-full object-cover" width={800} height={800} placeholder="blur" />
              </div>

            {/* Intro */}
            <p className="mb-6 text-sm leading-[1.9] text-gray-700 dark:text-gray-300 sm:text-base">
              Over 1,400 years ago, Imam Ali ibn Abi Talib (ع) —{" "}
              <strong className="font-bold text-gray-900 dark:text-gray-100">the Commander of the Faithful,
              the gate of the city of knowledge, the first Imam of the Shia</strong> — delivered sermons,
              wrote letters, and shared wisdom that were collected in the immortal book{" "}
              <em>Nahjul Balagha</em> (The Peak of Eloquence).
            </p>
            <p className="mb-8 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              What is astonishing is that these words, spoken in 7th-century Arabia, address the exact
              struggles of the 21st century — social injustice, spiritual emptiness, the corruption of
              leaders, the disease of materialism, and the anxiety of modern life. Let us walk through
              some of his most powerful sermons and discover what they mean for us today.
            </p>

            {/* ── 1: Who Was Imam Ali ── */}
            <h2 id="who-was-imam-ali" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              Who Was Imam Ali (ع)?
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Imam Ali (ع) was the cousin and son-in-law of the Prophet Muhammad (ص), and the first
              male to embrace Islam. He was known for his extraordinary bravery, unmatched knowledge,
              and deep connection with Allah. He served as the fourth Caliph and is regarded by Shia
              Muslims as the first rightful successor to the Prophet (ص).
            </p>
            <p className="mb-6 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              He was a man who combined the sword and the pen — a warrior on the battlefield and a
              philosopher in the mosque. His words carry the weight of revelation and the clarity of
              someone who saw the world as it truly is.
            </p>

            {/* Hadith quote */}
            <div className="mb-8 flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900/60">
              <div className="flex-shrink-0 rounded-lg bg-emerald-50 p-2.5 dark:bg-emerald-900/30">
                <BookOpen className="h-5 w-5 text-emerald-700 dark:text-emerald-500" />
              </div>
              <div>
                <p className="mb-2 text-sm italic leading-relaxed text-gray-700 dark:text-gray-300">
                  &ldquo;I am the city of knowledge and Ali is its gate. Whoever wishes to enter the city,
                  let him enter through its gate.&rdquo;
                </p>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-500">
                  — Prophet Muhammad (ص) [Hadith — Al-Hakim, Al-Mustadrak]
                </p>
              </div>
            </div>

            {/* ── 2: Nahjul Balagha ── */}
            <h2 id="nahjul-balagha" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              Nahjul Balagha — A Living Book
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Nahjul Balagha, compiled by Sharif al-Radi in the 10th century CE, is a collection of
              241 sermons, 79 letters, and 480 short sayings of Imam Ali (ع). It is considered one of
              the greatest works of Arabic prose and a treasure trove of Islamic wisdom.
            </p>
            <p className="mb-6 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              The themes of Nahjul Balagha are eternal — they address God-consciousness, social justice,
              inner character, leadership, the fleeting nature of this world, and the importance of knowledge.
              These are not ancient topics. These are today&apos;s headlines.
            </p>

            {/* Theme grid */}
            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {SERMON_THEMES.map((t) => (
                <div key={t.title} className="flex flex-col items-start gap-2 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <span className="text-2xl">{t.icon}</span>
                  <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{t.title}</p>
                  <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{t.desc}</p>
                </div>
              ))}
            </div>

            {/* ── 3: Self-Discipline ── */}
            <h2 id="on-self-discipline" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              Sermon on Self-Discipline
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              In Sermon 176 of Nahjul Balagha, Imam Ali (ع) speaks at length about the importance of
              controlling the self — one&apos;s desires, anger, tongue, and ego. He describes the person
              who has mastered themselves as having achieved the greatest victory.
            </p>

            {/* Pull-quote */}
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 p-6 shadow-md dark:from-emerald-950 dark:to-stone-950">
              <div className="pointer-events-none absolute -right-4 -top-4 text-[120px] leading-none text-emerald-800/30 select-none">&ldquo;</div>
              <p
                className="relative mb-3 text-lg leading-loose text-amber-200 sm:text-xl"
                dir="rtl"
                style={{ fontFamily: "'Scheherazade New','Amiri',serif" }}
              >
                أَعْجَزُ النَّاسِ مَنْ عَجَزَ عَنْ اكْتِسَابِ الإِخْوَانِ، وَأَعْجَزُ مِنْهُ مَنْ أَضَاعَ مَنِ ظَفِرَ بِهِ
              </p>
              <p className="relative mb-2 text-sm italic leading-relaxed text-emerald-200">
                &ldquo;The most incapable of men is he who cannot make friends, and even more incapable is one who loses the friends he has.&rdquo;
              </p>
              <p className="relative text-xs font-semibold text-emerald-400">— Nahjul Balagha, Wisdom 12</p>
            </div>

            <p className="mb-8 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Today, we live in an era of social media where relationships are superficial and loneliness
              is epidemic. Imam Ali (ع) understood that genuine human connection — built on honesty,
              loyalty, and sacrifice — is not optional. It is a fundamental human need and a spiritual duty.
            </p>

            {/* ── 4: Justice ── */}
            <h2 id="on-justice" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              On Justice &amp; Leadership
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Perhaps no other historical figure has spoken more beautifully — or more practically — about
              justice than Imam Ali (ع). His famous letter to Malik al-Ashtar, his governor of Egypt
              (Letter 53 of Nahjul Balagha), is considered a masterpiece of political ethics.
            </p>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              In it, he instructs Malik to see the people not merely as subjects but as brothers and equals —
              human beings made from the same clay. He says to never let power intoxicate you, to listen
              to the poor above the rich, and to know that a just leader will be beloved while an unjust
              one will be cursed by history.
            </p>

            <div className="mb-8 flex items-start gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/40 dark:bg-amber-950/20">
              <div className="flex-shrink-0 rounded-lg bg-amber-100 p-2.5 dark:bg-amber-900/30">
                <span className="text-lg">⚖️</span>
              </div>
              <div>
                <p className="mb-2 text-sm italic leading-relaxed text-gray-700 dark:text-gray-300">
                  &ldquo;Know, O Malik, that I have sent you to a country which in the past has experienced
                  both just and unjust rulers. Men will scrutinise your actions with the same critical
                  eyes which you used to scrutinise the actions of rulers before you.&rdquo;
                </p>
                <p className="text-xs font-semibold text-amber-700 dark:text-amber-500">
                  — Nahjul Balagha, Letter 53 (to Malik al-Ashtar)
                </p>
              </div>
            </div>

            {/* ── 5: World Distractions ── */}
            <h2 id="on-world-distractions" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              On the Distractions of the World
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Imam Ali (ع) repeatedly warned about the dangers of being consumed by the dunya — the
              material world. He described it beautifully in Sermon 32, known as the Sermon of{" "}
              <em>Al-Qasi&apos;ah</em>, as a place that deceives with its beauty and destroys with
              its attachments.
            </p>

            {/* Famous quotes */}
            <div className="mb-8 space-y-4">
              {FAMOUS_QUOTES.map((q) => (
                <div key={q.source} className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
                  <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-800 p-5 text-right">
                    <p
                      className="text-xl leading-loose text-amber-300 sm:text-2xl"
                      dir="rtl"
                      style={{ fontFamily: "'Scheherazade New','Amiri',serif" }}
                    >
                      {q.arabic}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 dark:bg-gray-900/60">
                    <p className="mb-1 text-sm italic text-gray-700 dark:text-gray-300">&ldquo;{q.translation}&rdquo;</p>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-500">— {q.source}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── 6: Death & Purpose ── */}
            <h2 id="on-death-and-purpose" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              On Death &amp; Purpose
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Imam Ali (ع) spoke of death not with fear, but with clarity. He described it as a
              traveller&apos;s arrival home after a long and tiring journey. His words on death are not
              morbid — they are liberating. They free us from the tyranny of this world and redirect our
              energy toward what truly matters.
            </p>

            <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 p-6 shadow-md">
              <div className="pointer-events-none absolute -right-4 -top-4 text-[120px] leading-none text-stone-700/30 select-none">&ldquo;</div>
              <p
                className="relative mb-3 text-xl leading-loose text-amber-200 sm:text-2xl"
                dir="rtl"
                style={{ fontFamily: "'Scheherazade New','Amiri',serif" }}
              >
                وَاللَّهِ لَابْنُ أَبِي طَالِبٍ آنَسُ بِالمَوْتِ مِنَ الطِّفْلِ بِثَدْيِ أُمِّهِ
              </p>
              <p className="relative mb-2 text-sm italic leading-relaxed text-stone-300">
                &ldquo;By Allah, the son of Abu Talib is more familiar with death than a child is with
                its mother&apos;s breast.&rdquo;
              </p>
              <p className="relative text-xs font-semibold text-amber-600">— Nahjul Balagha, Sermon 5</p>
            </div>

            <p className="mb-8 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              In our age of existential crisis — where many people drift through life without purpose —
              this perspective is revolutionary. When we accept death and keep the Hereafter in mind,
              we become free to live with courage, generosity, and meaning.
            </p>

            {/* ── 7: Lessons for Today ── */}
            <h2 id="lessons-for-today" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              Lessons for Today — His Sermons, Our Problems
            </h2>
            <p className="mb-5 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Let&apos;s take four of the greatest modern struggles and see exactly what Imam Ali (ع) said
              about each — centuries before they became the crises they are today.
            </p>

            <div className="mb-8 space-y-5">
              {MODERN_LESSONS.map((lesson) => (
                <div key={lesson.title} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <div className="flex items-center gap-3 border-b border-gray-100 bg-gray-50 px-5 py-3 dark:border-gray-800 dark:bg-gray-800/60">
                    <span className="text-2xl">{lesson.icon}</span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{lesson.title}</h3>
                  </div>
                  <div className="p-5">
                    <div className="mb-3 rounded-lg border-l-4 border-emerald-600 bg-emerald-50/60 py-2 pl-4 pr-3 dark:bg-emerald-900/10 dark:border-emerald-700">
                      <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-1">His Sermon:</p>
                      <p className="text-sm italic text-gray-700 dark:text-gray-300 leading-relaxed">{lesson.sermon}</p>
                    </div>
                    <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50/60 py-2 pl-4 pr-3 dark:bg-amber-950/20 dark:border-amber-700">
                      <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1">Today&apos;s Context:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{lesson.modern}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Conclusion ── */}
            <h2 id="conclusion" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
              Conclusion
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Imam Ali (ع) was not just a historical figure. He was — and remains — a living guide.
              His sermons are not museum pieces. They are prescriptions for a diseased world desperately
              in need of healing.
            </p>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              To engage with Nahjul Balagha is to sit in the company of the greatest mind after the
              Prophet (ص). Every chapter opens a new window of wisdom. Every sentence invites reflection.
              Every sermon is a mirror in which we see ourselves.
            </p>
            <p className="mb-8 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              May Allah (سبحانه وتعالى) bless us with the love of Imam Ali (ع), give us the ability
              to learn from his wisdom, and make us among those who follow him in deed, not just in word. Ameen.
            </p>

            {/* Closing quote */}
            <div className="mb-10 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="relative h-48 w-full bg-linear-to-br from-emerald-950 via-stone-900 to-amber-950 flex flex-col items-center justify-center gap-3 sm:h-62">
                <Image src={lastImg} alt="" width={800} height={600} className="w-full object-cover h-full" />
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-gray-900/60">
                <span className="shrink-0 text-3xl font-bold leading-none text-gray-300 dark:text-gray-700">&ldquo;</span>
                <div>
                  <p className="mb-2 text-sm italic leading-relaxed text-gray-700 dark:text-gray-300">
                    Do not let the world deceive you, for it deceives and cheats and entices and
                    ensnares. Glorified be Allah — how alluring is its enticement, how ruinous are
                    its gifts, how deadly are its arrows!
                  </p>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-500">— Imam Ali (ع), Nahjul Balagha — Sermon 111</p>
                </div>
              </div>
            </div>

            {/* Call to action — learn Nahjul Balagha */}
            <div className="mb-10 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 p-6 text-center sm:flex-row sm:text-left">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-3xl">
                📚
              </div>
              <div className="flex-1">
                <p className="mb-1 text-sm font-bold text-white">Want to Study Nahjul Balagha?</p>
                <p className="text-xs leading-relaxed text-emerald-300">
                  Enroll in our Ziyarat Studies or Ahlulbayt History courses to go deeper into
                  the wisdom of the Imams (عليهم السلام).
                </p>
              </div>
              <Link
                href="/courses"
                className="flex-shrink-0 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-emerald-900 transition hover:bg-emerald-50"
              >
                Explore Courses →
              </Link>
            </div>

            {/* Share this article */}
            <div className="mb-10 border-t border-gray-200 pt-6 dark:border-gray-800">
              <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Share this article</p>
              <ShareButtons />
            </div>

            {/* Prev / Next */}
            <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 dark:border-gray-800 sm:flex-row sm:justify-between">
              <Link href="/blogs/importance-of-taqwa"
                className="group flex max-w-xs items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-emerald-400 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-600">
                <ArrowLeft className="h-5 w-5 flex-shrink-0 text-gray-400 transition group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                <div>
                  <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600">Previous Article</p>
                  <p className="text-xs font-semibold leading-snug text-gray-800 dark:text-gray-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition">
                    The Importance of Taqwa in Today&apos;s World
                  </p>
                </div>
              </Link>

              <Link href="/blogs/life-lessons-from-ahlulbayt"
                className="group flex max-w-xs flex-row-reverse items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-emerald-400 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-600">
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-gray-400 transition group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                <div className="sm:text-right">
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
                <a href="https://wa.me/+923394022926" target="_blank" rel="noreferrer"
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