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
  Moon,
} from "lucide-react";
import Image from "next/image";
// Replace these imports with your actual image paths
import banner from "@/public/images/blogs/iftari-banner.jpg";
import dp from "@/public/images/blogs/ramzan.jpg";
import lastImg from "@/public/images/blogs/madina.jpg";
import logo from "@/public/logo.png";

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
  { id: "what-is-ramadan",        label: "What Is Ramadan?" },
  { id: "the-fast-of-the-soul",   label: "The Fast of the Soul" },
  { id: "night-of-power",         label: "Laylat al-Qadr — Night of Power" },
  { id: "quran-and-ramadan",      label: "Quran & Ramadan" },
  { id: "charity-and-zakat",      label: "Charity, Zakat & Compassion" },
  { id: "transformation",         label: "Transformation Beyond the Month" },
  { id: "lessons-for-today",      label: "Ramadan in the Modern World" },
  { id: "conclusion",             label: "Conclusion" },
];

const PILLARS_OF_RAMADAN = [
  { icon: "🌙", title: "Sawm (Fasting)",        desc: "Abstaining from food, drink, and sinful acts from Fajr to Maghrib as an act of worship and gratitude." },
  { icon: "📖", title: "Tilawat al-Quran",      desc: "Reciting and reflecting on the Quran — the month in which it was first revealed to the Prophet (ص)." },
  { icon: "🤲", title: "Du'a & Dhikr",          desc: "Intensifying supplications and remembrance of Allah, softening the heart through constant connection." },
  { icon: "🕌", title: "Tarawih & Qiyam",       desc: "Standing in the night prayers, drawing closer to Allah in the blessed hours before dawn." },
  { icon: "💛", title: "Sadaqah & Zakat",       desc: "Giving generously to the poor — Ramadan multiplies rewards and purifies both wealth and the giver." },
  { icon: "🧘", title: "I'tikaf",               desc: "Spiritual seclusion in the masjid during the last ten nights, stripping away all worldly distraction." },
];

const MODERN_REFLECTIONS = [
  {
    icon: "📱",
    title: "Fasting from Screens",
    ramadan: "The Prophet (ص) said: 'Many a fasting person gains nothing from his fast except hunger and thirst.'",
    modern:
      "Fasting is not only physical. Mindless scrolling, consuming harmful content, and digital distraction can rob the fast of its soul. Ramadan invites us to fast with all of our senses.",
  },
  {
    icon: "🍽️",
    title: "Gratitude Over Gluttony",
    ramadan: "The Quran says: 'If you are grateful, I will surely increase you [in favour].' (Surah Ibrahim: 7)",
    modern:
      "When food is withheld until Iftar, the simplest meal becomes a miracle. Hunger is the greatest teacher of gratitude — a lesson our overabundant age desperately needs.",
  },
  {
    icon: "🤝",
    title: "Community & Solidarity",
    ramadan: "The Prophet (ص) described Ramadan as the month of his Ummah — a collective act of worship.",
    modern:
      "In a world of increasing isolation, Iftar tables bring people together. Shared hunger builds empathy. The suffering of the poor becomes real to those who feel hunger voluntarily.",
  },
  {
    icon: "💪",
    title: "Willpower & Self-Mastery",
    ramadan: "Allah (سبحانه وتعالى) says: 'Fasting is for Me, and I shall reward it.' (Hadith Qudsi)",
    modern:
      "Modern psychology now confirms what Islam has taught for 1,400 years — self-control is a muscle. Ramadan is its most disciplined training ground, reshaping habits in just 30 days.",
  },
];

const QURAN_VERSES = [
  {
    arabic: "شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ",
    translation: "The month of Ramadan is the one in which the Quran was revealed as guidance for mankind.",
    source: "Surah Al-Baqarah — 2:185",
  },
  {
    arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ",
    translation: "And when My servants ask you about Me — indeed I am near.",
    source: "Surah Al-Baqarah — 2:186",
  },
  {
    arabic: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ",
    translation: "Indeed, We sent it (the Quran) down on the Night of Decree.",
    source: "Surah Al-Qadr — 97:1",
  },
];

const RELATED_ARTICLES = [
  { title: "The Importance of Taqwa in Today's World",          date: "Apr 28, 2024", readTime: "4 min read", imgBg: "from-teal-950 via-stone-900 to-teal-800",      emoji: "🌿", slug: "importance-of-taqwa" },
  { title: "How to Connect with the Quran in Daily Life",       date: "May 12, 2024", readTime: "5 min read", imgBg: "from-amber-950 via-stone-900 to-amber-800",    emoji: "📖", slug: "how-to-connect-with-quran" },
  { title: "Patience and Gratitude: A Path to Inner Peace",     date: "Apr 2, 2024",  readTime: "5 min read", imgBg: "from-yellow-950 via-stone-900 to-yellow-800",  emoji: "🕊️", slug: "patience-and-gratitude" },
  { title: "Good Character in Islam (Part 1)",                  date: "Apr 15, 2024", readTime: "4 min read", imgBg: "from-stone-800 via-stone-700 to-stone-900",    emoji: "💡", slug: "good-character-in-islam" },
  { title: "Virtues and Benefits of Ziyarat Ahlulbayt (ع)",    date: "May 12, 2024", readTime: "5 min read", imgBg: "from-emerald-950 via-stone-900 to-emerald-800", emoji: "🕌", slug: "virtues-of-ziyarat-ahlulbayt" },
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
      <a
        href="https://wa.me/?text=Check+this+article"
        target="_blank"
        rel="noreferrer"
        className={`${btnClass} hover:border-green-400 hover:text-green-600 dark:hover:border-green-500 dark:hover:text-green-400`}
      >
        <WhatsAppIcon className="h-4 w-4" />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className={`${btnClass} hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400`}
      >
        <FacebookIcon className="h-4 w-4" />
      </a>
      <a
        href="https://x.com"
        target="_blank"
        rel="noreferrer"
        className={`${btnClass} hover:border-gray-500 hover:text-gray-900 dark:hover:text-gray-100`}
      >
        <XIcon className="h-4 w-4" />
      </a>
      <button
        onClick={handleCopy}
        className={`${btnClass} hover:border-emerald-400 hover:text-emerald-600 dark:hover:border-emerald-500 dark:hover:text-emerald-400`}
        title={copied ? "Copied!" : "Copy link"}
      >
        <Link2 className="h-4 w-4" />
      </button>
      {copied && (
        <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
          Copied!
        </span>
      )}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function RamadanTransformationBlogPage() {
  const [activeSection, setActiveSection] = useState("what-is-ramadan");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
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

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[340px] overflow-hidden bg-[#EDEAE3] dark:bg-[#0A0805] sm:min-h-[380px]">
        <div className="relative z-10 flex md:flex-row-reverse justify-between mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-18">

          {/* Hero image / illustration */}
          <div className="w-80 h-80 overflow-hidden rounded-xl mr-10 md:block hidden">
            {/* Replace with your actual image */}
            <Image src={dp} alt="" className="w-full h-full" />
            {/* <div className="w-full h-full bg-gradient-to-br from-emerald-950 via-stone-900 to-amber-950 flex items-center justify-center text-8xl select-none">
            </div> */}
          </div>

          <div>
            {/* Breadcrumb */}
            <nav className="mb-5 flex flex-wrap items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
              <Link href="/" className="transition hover:text-gray-700 dark:hover:text-gray-300">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 opacity-40" />
              <Link href="/blogs" className="transition hover:text-gray-700 dark:hover:text-gray-300">
                Blog
              </Link>
              <ChevronRight className="h-3 w-3 opacity-40" />
              <Link href="/blogs" className="transition hover:text-gray-700 dark:hover:text-gray-300">
                Articles &amp; Insights
              </Link>
              <ChevronRight className="h-3 w-3 opacity-40" />
              <span className="max-w-[200px] truncate text-gray-700 dark:text-gray-400">
                Ramadan: A Month of Transformation
              </span>
            </nav>

            <span className="mb-4 inline-block rounded-full bg-emerald-800 px-3 py-1 text-xs font-semibold text-white dark:bg-emerald-700">
              Islamic Months &amp; Worship
            </span>

            <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-tight text-gray-900 dark:text-gray-50 sm:text-4xl lg:text-5xl">
              Ramadan: A Month of<br />
              <span className="text-emerald-800 dark:text-emerald-500">Transformation</span>
            </h1>

            <p className="mb-6 max-w-lg text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
              More than hunger and thirst — Ramadan is Allah's invitation to shed the old self,
              revive the heart, and return to your truest purpose.
            </p>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center">
                <Image src={logo} width={200} height={200} alt="" />
                {/* <div className="h-9 w-9 rounded-full bg-emerald-800 flex items-center justify-center">
                  <Moon className="h-4 w-4 text-white" />
                </div> */}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Shia Quran Pak Academy
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                  <span>May 24, 2026</span>
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
            <div className="mb-8 relative rounded-xl overflow-hidden h-64 w-full sm:h-80 lg:h-96 flex items-center justify-center bg-gradient-to-br from-emerald-950 via-stone-900 to-amber-950">
              {/* Replace with your actual banner: */}
              <Image src={banner} alt="Ramadan" className="w-full h-full absolute opacity-20 z-0 object-cover" width={800} height={800} placeholder="blur" />
              <div className="flex flex-col items-center gap-3 select-none z-20">
                <p
                  className="text-2xl text-amber-300 sm:text-4xl"
                  style={{ fontFamily: "'Scheherazade New','Amiri',serif" }}
                >
                  رَمَضَانُ شَهْرُ اللَّهِ
                </p>
                <p className="text-sm text-stone-400 italic">Ramadan — The Month of Allah</p>
              </div>
            </div>

            {/* ── Intro ── */}
            <p className="mb-6 text-sm leading-[1.9] text-gray-700 dark:text-gray-300 sm:text-base">
              Every year, one billion Muslims around the world pause. They put down their food,
              their drink, their distractions — and they turn entirely toward Allah (سبحانه وتعالى).
              For 30 days, the{" "}
              <strong className="font-bold text-gray-900 dark:text-gray-100">
                rhythm of life changes
              </strong>
              . The darkness before dawn becomes sacred. The setting sun becomes a moment of
              overwhelming gratitude. And the heart — often buried beneath the noise of daily life —
              finally has room to breathe.
            </p>
            <p className="mb-8 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              But Ramadan is not merely an annual ritual of hunger. It is a{" "}
              <em>school of the soul</em> — a divinely designed curriculum for transformation. Allah
              did not simply tell us to fast. He told us to fast so that we may attain{" "}
              <strong className="font-bold text-gray-900 dark:text-gray-100">Taqwa</strong> —
              God-consciousness, the highest station of the human heart. Let us explore what this
              blessed month truly holds.
            </p>

            {/* ── 1: What Is Ramadan ── */}
            <h2
              id="what-is-ramadan"
              className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl"
            >
              What Is Ramadan?
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Ramadan is the ninth month of the Islamic lunar calendar. It is the month in which
              the first verses of the Holy Quran descended upon the Prophet Muhammad (ص) through
              the Angel Jibreel (ع) — making it the most sacred month in the Islamic year.
            </p>
            <p className="mb-6 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Allah (سبحانه وتعالى) Himself speaks of this month in the Quran, describing fasting
              as obligatory upon every believer — not as a punishment, but as a path to a higher
              consciousness. It is among the five pillars of Islam, a collective act of worship
              that unites the Ummah across every continent and culture.
            </p>

            {/* Quran verse callout */}
            <div className="mb-8 flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900/60">
              <div className="flex-shrink-0 rounded-lg bg-emerald-50 p-2.5 dark:bg-emerald-900/30">
                <BookOpen className="h-5 w-5 text-emerald-700 dark:text-emerald-500" />
              </div>
              <div>
                <p
                  className="mb-2 text-lg leading-loose text-right text-gray-800 dark:text-amber-300"
                  dir="rtl"
                  style={{ fontFamily: "'Scheherazade New','Amiri',serif" }}
                >
                  يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ
                </p>
                <p className="mb-2 text-sm italic leading-relaxed text-gray-700 dark:text-gray-300">
                  &ldquo;O you who have believed, decreed upon you is fasting as it was decreed upon
                  those before you — that you may become righteous (attain Taqwa).&rdquo;
                </p>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-500">
                  — Surah Al-Baqarah, 2:183
                </p>
              </div>
            </div>

            {/* ── 2: The Fast of the Soul ── */}
            <h2
              id="the-fast-of-the-soul"
              className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl"
            >
              The Fast of the Soul
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              The Prophet Muhammad (ص) warned: <em>"Many a person fasting has nothing from his fast
              except hunger and thirst."</em> This profound statement reveals that physical fasting
              is merely the outer shell. The inner fast — the fast of the soul — is the real prize
              of Ramadan.
            </p>
            <p className="mb-6 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              The soul fasts from arrogance, backbiting, jealousy, and anger. The eyes fast from
              looking at the forbidden. The tongue fasts from lies, slander, and vain speech. The
              hands fast from harming others. When all of these come together, the Muslim becomes
              a complete fast — and the transformation Allah intended becomes possible.
            </p>

            {/* Pillars grid */}
            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {PILLARS_OF_RAMADAN.map((p) => (
                <div
                  key={p.title}
                  className="flex flex-col items-start gap-2 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                  <span className="text-2xl">{p.icon}</span>
                  <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{p.title}</p>
                  <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* ── 3: Laylat al-Qadr ── */}
            <h2
              id="night-of-power"
              className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl"
            >
              Laylat al-Qadr — The Night of Power
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Hidden within the last ten nights of Ramadan lies the most extraordinary night in the
              Islamic calendar — Laylat al-Qadr. Allah describes it as{" "}
              <em>"better than a thousand months"</em> — meaning that a single night of worship
              on Laylat al-Qadr outweighs over 83 years of continuous worship.
            </p>

            {/* Pull-quote */}
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-950 p-6 shadow-md">
              <div className="pointer-events-none absolute -right-4 -top-4 text-[120px] leading-none text-stone-700/30 select-none">
                &ldquo;
              </div>
              <p
                className="relative mb-3 text-xl leading-loose text-amber-200 sm:text-2xl"
                dir="rtl"
                style={{ fontFamily: "'Scheherazade New','Amiri',serif" }}
              >
                لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ
              </p>
              <p className="relative mb-2 text-sm italic leading-relaxed text-stone-300">
                &ldquo;The Night of Decree is better than a thousand months.&rdquo;
              </p>
              <p className="relative text-xs font-semibold text-emerald-400">
                — Surah Al-Qadr, 97:3
              </p>
            </div>

            <p className="mb-8 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              The scholars have said it is most likely on one of the odd-numbered nights — the
              21st, 23rd, 25th, 27th, or 29th of Ramadan. The believer is encouraged to
              intensify worship across all of them, seeking the divine gift with desperation and
              hope. For on this night, destinies are written, mercy descends, and the gates of
              heaven open wide.
            </p>

            {/* ── 4: Quran and Ramadan ── */}
            <h2
              id="quran-and-ramadan"
              className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl"
            >
              The Quran &amp; Ramadan — An Inseparable Bond
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              The Quran was not merely revealed <em>during</em> Ramadan — it was revealed{" "}
              <em>for</em> this month. Every Ramadan, the Angel Jibreel (ع) would review the
              entire Quran with the Prophet (ص). The Salaf (righteous predecessors) would seal
              the Quran multiple times throughout the month, pouring over its verses with renewed
              understanding each year.
            </p>
            <p className="mb-6 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Ramadan is the ideal time to reset your relationship with the Book of Allah. Not
              racing through it, but sitting with it — one Surah, one Ayah, one word at a time —
              letting it reshape your worldview, your heart, and your character.
            </p>

            {/* Famous Quran verses */}
            <div className="mb-8 space-y-4">
              {QURAN_VERSES.map((v) => (
                <div
                  key={v.source}
                  className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <div className="bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-800 p-5 text-right">
                    <p
                      className="text-xl leading-loose text-amber-300 sm:text-2xl"
                      dir="rtl"
                      style={{ fontFamily: "'Scheherazade New','Amiri',serif" }}
                    >
                      {v.arabic}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 dark:bg-gray-900/60">
                    <p className="mb-1 text-sm italic text-gray-700 dark:text-gray-300">
                      &ldquo;{v.translation}&rdquo;
                    </p>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-500">
                      — {v.source}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── 5: Charity and Zakat ── */}
            <h2
              id="charity-and-zakat"
              className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl"
            >
              Charity, Zakat &amp; the Heart of Compassion
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              The Prophet Muhammad (ص) was described as the most generous of people — and in
              Ramadan, his generosity was said to surpass the speed of the wind. This tradition of
              radical giving is one of Ramadan&apos;s most powerful dimensions.
            </p>

            <div className="mb-8 flex items-start gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/40 dark:bg-amber-950/20">
              <div className="flex-shrink-0 rounded-lg bg-amber-100 p-2.5 dark:bg-amber-900/30">
                <span className="text-lg">💛</span>
              </div>
              <div>
                <p className="mb-2 text-sm italic leading-relaxed text-gray-700 dark:text-gray-300">
                  &ldquo;Charity does not decrease wealth. No one forgives except that Allah
                  increases his honour, and no one humbles himself for the sake of Allah except
                  that Allah raises his status.&rdquo;
                </p>
                <p className="text-xs font-semibold text-amber-700 dark:text-amber-500">
                  — Prophet Muhammad (ص) [Sahih Muslim]
                </p>
              </div>
            </div>

            <p className="mb-8 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Zakat al-Fitr — the obligatory charity before Eid al-Fitr — ensures that the
              poorest members of the community can celebrate with dignity. Ramadan teaches that
              our blessings are not our private property; they are a trust given to us to be
              shared. The one who fasts and gives is not losing — they are multiplying.
            </p>

            {/* ── 6: Transformation Beyond ── */}
            <h2
              id="transformation"
              className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl"
            >
              Transformation Beyond the Month
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              The greatest tragedy of Ramadan is when it ends and nothing changes. The scholars
              say that the sign of an accepted Ramadan is that the person you are on the 1st of
              Shawwal is better than the person you were on the last night of Sha&apos;ban.
              Transformation, not just observance, is the measure.
            </p>

            <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 p-6 shadow-md dark:from-emerald-950 dark:to-stone-950">
              <div className="pointer-events-none absolute -right-4 -top-4 text-[120px] leading-none text-emerald-800/30 select-none">
                &ldquo;
              </div>
              <p
                className="relative mb-3 text-lg leading-loose text-amber-200 sm:text-xl"
                dir="rtl"
                style={{ fontFamily: "'Scheherazade New','Amiri',serif" }}
              >
                اللَّهُمَّ بَلِّغْنَا رَمَضَانَ
              </p>
              <p className="relative mb-2 text-sm italic leading-relaxed text-emerald-200">
                &ldquo;O Allah, allow us to reach Ramadan.&rdquo;
              </p>
              <p className="relative text-xs font-semibold text-emerald-400">
                — Du&apos;a of the Salaf, recited months before Ramadan
              </p>
            </div>

            <p className="mb-8 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              The righteous predecessors would begin preparing for Ramadan six months in advance —
              and spend the six months after it praying for its acceptance. For them, Ramadan
              was not a 30-day sprint. It was a turning point, a rebirth — the central spiritual
              event of their year and their lives.
            </p>

            {/* ── 7: Lessons for Today ── */}
            <h2
              id="lessons-for-today"
              className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl"
            >
              Ramadan in the Modern World
            </h2>
            <p className="mb-5 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Modern life has never been more at odds with the spirit of Ramadan — and yet, its
              lessons have never been more urgently needed. Here are four ways Ramadan speaks
              directly to our greatest contemporary struggles.
            </p>

            <div className="mb-8 space-y-5">
              {MODERN_REFLECTIONS.map((lesson) => (
                <div
                  key={lesson.title}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="flex items-center gap-3 border-b border-gray-100 bg-gray-50 px-5 py-3 dark:border-gray-800 dark:bg-gray-800/60">
                    <span className="text-2xl">{lesson.icon}</span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                      {lesson.title}
                    </h3>
                  </div>
                  <div className="p-5">
                    <div className="mb-3 rounded-lg border-l-4 border-emerald-600 bg-emerald-50/60 py-2 pl-4 pr-3 dark:bg-emerald-900/10 dark:border-emerald-700">
                      <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
                        The Islamic Perspective:
                      </p>
                      <p className="text-sm italic text-gray-700 dark:text-gray-300 leading-relaxed">
                        {lesson.ramadan}
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50/60 py-2 pl-4 pr-3 dark:bg-amber-950/20 dark:border-amber-700">
                      <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1">
                        Today&apos;s Context:
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {lesson.modern}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Conclusion ── */}
            <h2
              id="conclusion"
              className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl"
            >
              Conclusion
            </h2>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              Ramadan is not a month we observe. It is a month that observes us — testing what
              we are made of, revealing our attachments, and gently illuminating everything that
              needs to change. Allah in His infinite mercy gave this month to the Ummah as a
              gift — a door flung wide open to His mercy, forgiveness, and proximity.
            </p>
            <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              The person who enters Ramadan with sincerity and exits it without transformation
              has missed the greatest opportunity of the year. But the person who emerges
              lighter — in ego, in sin, in attachment to the dunya — has received something
              the world cannot give: a renewed heart, a cleaner soul, and a closer Lord.
            </p>
            <p className="mb-8 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
              May Allah (سبحانه وتعالى) bless us with many Ramadans. May He accept our fasts,
              our prayers, and our tears. May He make us of those who emerge from this blessed
              month truly transformed — and not merely hungry. Ameen.
            </p>

            {/* Closing quote image block */}
            <div className="mb-10 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="relative h-48 w-full bg-gradient-to-br from-emerald-950 via-stone-900 to-amber-950 flex flex-col items-center justify-center gap-3 sm:h-56">
                <Image src={lastImg} alt="" width={800} height={600} className="w-full absolute z-0 object-cover h-full opacity-15" />
                <p
                  className="text-3xl z-10 text-white"
                  style={{ fontFamily: "'Scheherazade New','Amiri',serif" }}
                >
                  رَمَضَانُ شَهْرُ الرَّحْمَةِ وَالْمَغْفِرَةِ
                </p>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-gray-900/60">
                <span className="shrink-0 text-3xl font-bold leading-none text-gray-300 dark:text-gray-700">
                  &ldquo;
                </span>
                <div>
                  <p className="mb-2 text-sm italic leading-relaxed text-gray-700 dark:text-gray-300">
                    The first [ten days] of Ramadan is mercy, its middle is forgiveness, and its
                    last is liberation from the Fire.
                  </p>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-500">
                    — Prophet Muhammad (ص) [Bihar al-Anwar]
                  </p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="mb-10 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 p-6 text-center sm:flex-row sm:text-left">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-3xl">
                📖
              </div>
              <div className="flex-1">
                <p className="mb-1 text-sm font-bold text-white">
                  Deepen Your Understanding of the Quran This Ramadan
                </p>
                <p className="text-xs leading-relaxed text-emerald-300">
                  Enroll in our Quran Recitation or Tafsir courses and let this Ramadan be the
                  one that truly changes you — one Ayah at a time.
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
              <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Share this article
              </p>
              <ShareButtons />
            </div>

            {/* Prev / Next */}
            <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 dark:border-gray-800 sm:flex-row sm:justify-between">
              <Link
                href="/blogs/importance-of-taqwa"
                className="group flex max-w-xs items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-emerald-400 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-600"
              >
                <ArrowLeft className="h-5 w-5 flex-shrink-0 text-gray-400 transition group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                <div>
                  <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600">
                    Previous Article
                  </p>
                  <p className="text-xs font-semibold leading-snug text-gray-800 dark:text-gray-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition">
                    The Importance of Taqwa in Today&apos;s World
                  </p>
                </div>
              </Link>

              <Link
                href="/blogs/how-to-connect-with-quran"
                className="group flex max-w-xs flex-row-reverse items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-emerald-400 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-600"
              >
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-gray-400 transition group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                <div className="sm:text-right">
                  <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600">
                    Next Article
                  </p>
                  <p className="text-xs font-semibold leading-snug text-gray-800 dark:text-gray-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition">
                    How to Connect with the Quran in Daily Life
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
                <h3 className="mb-4 text-sm font-bold text-gray-900 dark:text-gray-100">
                  On This Page
                </h3>
                <ul className="relative space-y-1 pl-4">
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
                          <span
                            className={`absolute -left-[9px] h-2 w-2 rounded-full border-2 transition-all
                              ${isActive
                                ? "border-emerald-600 bg-emerald-600 dark:border-emerald-400 dark:bg-emerald-400"
                                : "border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-900"
                              }`}
                          />
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Share */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <h3 className="mb-4 text-sm font-bold text-gray-900 dark:text-gray-100">
                  Share this article
                </h3>
                <ShareButtons />
              </div>


              {/* Have Questions */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                      Have Questions?
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      We&apos;re here to help you on your learning journey.
                    </p>
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