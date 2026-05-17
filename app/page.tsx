"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BookOpen,
  MapPin,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  Search,
  Users,
  BookMarked,
  Landmark,
  GraduationCap,
  Volume2,
  Smartphone,
  ShieldCheck,
  MessageCircle,
  Phone,
} from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.png";

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Ziyarat", href: "/ziyarat" },
  { label: "Dinyaat", href: "/dinyaat", dropdown: true },
  { label: "Teachers", href: "/about" },
  { label: "Blogs", href: "/resources", dropdown: true },
  { label: "About", href: "/about" },
];

const CATEGORIES = [
  { emoji: "📖", label: "Quran", sub: "Read, Learn & Reflect", href: "/quran" },
  { emoji: "🕌", label: "Dinyaat", sub: "Beliefs, Laws & Teachings", href: "/dinyaat" },
  { emoji: "🏛️", label: "Ziyarat", sub: "Authentic Ziyarats with Audio", href: "/ziyarat" },
  { emoji: "🎓", label: "Courses", sub: "Structured Learning Paths", href: "/courses" },
  { emoji: "📚", label: "Library", sub: "Books, Articles & Resources", href: "/library" },
  { emoji: "👦", label: "Kids", sub: "Interactive Islamic Learning", href: "/kids" },
];

const ZIYARATS = [
  { title: "Ziyarat e Ashura", sub: "Imam Hussain (ع)", bg: "from-amber-900/80 via-black/20 to-transparent", image: "/images/zyarat-e-ashura.jpg" },
  { title: "Ziyarat e Warith", sub: "Imam Hussain (ع)", bg: "from-emerald-900/80 via-black/20 to-transparent", image: "/images/warisa.jpg" },
  { title: "Ziyarat e Nahiya", sub: "Ahlulbayt (ع)", bg: "from-sky-900/80 via-black/20 to-transparent", image: "/images/nahiya.jpg" },
  { title: "Ziyarat e Ameenullah", sub: "Imam Ali (ع)", bg: "from-yellow-900/80 via-black/20 to-transparent", image: "/images/ameenullah.jpg" },
  { title: "Ziyarat e Imam Hussain (ع)", sub: "Full Ziyarat", bg: "from-red-900/80 via-black/20 to-transparent", image: "/images/imamhussain.jpg" },
  { title: "Ziyarat e Imam Ali Raza (ع)", sub: "Mashhad e Muqaddas", bg: "from-stone-900/80 via-black/20 to-transparent", image: "/images/mashhad.jpg" },
];

const COURSES = [
  { title: "Tafseer of Quran", sub: "Learn Quran with Authentic Tafseer", progress: 45, badge: "Bestseller", badgeColor: "bg-emerald-600", imgBg: "bg-gradient-to-br from-emerald-950 via-stone-900 to-amber-900", emoji: "📖" },
  { title: "Aqaid (عقائد)", sub: "Shia Beliefs Made Easy", progress: 60, badge: null, imgBg: "bg-gradient-to-br from-stone-900 via-amber-950 to-stone-800", emoji: "🌙" },
  { title: "Fiqh for Beginners", sub: "Practical Islamic Laws", progress: 35, badge: null, imgBg: "bg-gradient-to-br from-amber-950 via-stone-900 to-yellow-950", emoji: "⚖️" },
  { title: "Yassarnal Quran", sub: "Qaida for Beginners", progress: 70, badge: "New", badgeColor: "bg-emerald-500", imgBg: "bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-800", emoji: "✨" },
  { title: "Ziyarat Studies", sub: "Meaning & Benefits", progress: 50, badge: null, imgBg: "bg-gradient-to-br from-yellow-950 via-stone-900 to-amber-950", emoji: "🏛️" },
];

const LEARNING_PATHS = [
  { icon: "🌱", title: "Beginner Path", desc: "Start your journey with the basics of Islam and Shia Dinyaat.", href: "/paths/beginner" },
  { icon: "📘", title: "Intermediate Path", desc: "Strengthen your understanding of beliefs, fiqh, and Ahlulbayt teachings.", href: "/paths/intermediate" },
  { icon: "🎓", title: "Advanced Path", desc: "Deepen your knowledge with advanced topics and scholarly resources.", href: "/paths/advanced" },
];

const FEATURES = [
  { icon: ShieldCheck, title: "Authentic Content", desc: "Verified from reliable Shia scholars and sources." },
  { icon: Users, title: "Easy to Understand", desc: "Simple language for all age groups." },
  { icon: Volume2, title: "Audio Support", desc: "Listen to Ziyarats and lessons on the go." },
  { icon: Smartphone, title: "Learn Anytime", desc: "Access lessons and resources anytime." },
  { icon: BookOpen, title: "Ad-Free Learning", desc: "Focus on your learning without distractions." },
];

const ARTICLES = [
  { title: "The Importance of Ziyarat", desc: "Understand the spiritual benefits of visiting the Ahlulbayt (ع).", imgBg: "bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900", emoji: "📿" },
  { title: "Who are Ahlulbayt (ع)?", desc: "A brief introduction to the blessed household of Prophet (ص).", imgBg: "bg-gradient-to-br from-emerald-900 via-stone-800 to-amber-950", emoji: "🕌" },
  { title: "Dua in Daily Life", desc: "How Dua connects us with Allah in every moment.", imgBg: "bg-gradient-to-br from-amber-950 via-stone-800 to-stone-900", emoji: "🤲" },
  { title: "How to Understand Quran?", desc: "Simple steps to build a strong connection with Quran.", imgBg: "bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800", emoji: "📖" },
];

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function ProgressBar({ value, dark }: { value: number; dark: boolean }) {
  return (
    <div className="mt-2">
      <div className={`h-1 w-full rounded-full ${dark ? "bg-gray-700" : "bg-gray-200"}`}>
        <div
          className="h-1 rounded-full bg-emerald-600 transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
      <p className={`mt-1 text-xs ${dark ? "text-gray-500" : "text-gray-500"}`}>{value}% Complete</p>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // ── helpers so class strings stay readable ──
  const bg    = dark ? "bg-gray-950" : "bg-white";
  const bgAlt = dark ? "bg-gray-900" : "bg-gray-50";
  const border = dark ? "border-gray-800" : "border-gray-100";
  const border2 = dark ? "border-gray-700" : "border-gray-200";
  const text  = dark ? "text-gray-100" : "text-gray-900";
  const textMd = dark ? "text-gray-300" : "text-gray-600";
  const textSm = dark ? "text-gray-400" : "text-gray-500";
  const card  = dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200";
  const cardHover = dark ? "hover:bg-gray-800" : "hover:bg-emerald-50";
  const inputBg = dark ? "bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-700 placeholder-gray-400";
  const divider = dark ? "divide-gray-800" : "divide-gray-50";
  const pathCard = dark ? "bg-gray-900 border-gray-700 divide-gray-800" : "bg-gray-50 border-gray-200 divide-gray-100";
  const iconBg = dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200";

  return (
    // Root: we drive dark mode purely by toggling classes on this wrapper
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${bg} ${text}`}>

      {/* ══════════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════════ */}
      <header className={`sticky top-0 z-50 border-b ${border} ${dark ? "bg-gray-950" : "bg-white"} shadow-sm transition-colors duration-300`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

          {/* Logo */}
          <Link href="/" className="flex flex-shrink-0 items-center gap-2">
            <div className="flex h-10 w-10 items-center">
              <Image src={logo} alt="Logo" width={200} height={200} />
            </div>
            <div className="leading-tight">
              <p className={`text-sm font-bold ${text}`}>Shia Dinyaat</p>
              <p className={`text-[10px] ${textSm}`}>Learn. Believe. Practice.</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-0.5 rounded-md px-3 py-1.5 text-sm ${textMd} transition ${dark ? "hover:bg-gray-800 hover:text-gray-100" : "hover:bg-gray-50 hover:text-gray-900"}`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="h-3 w-3 opacity-50" />}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* 🌙 / ☀️ Theme toggle — always visible */}
            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
              className={`flex items-center justify-center rounded-md p-2 transition ${dark ? "bg-gray-800 text-amber-400 hover:bg-gray-700" : "text-gray-500 hover:bg-gray-100"}`}
            >
              {dark
                ? <Sun className="h-4 w-4" />
                : <Moon className="h-4 w-4" />
              }
            </button>

            {/* Login — desktop only */}
            <Link
              href="/login"
              className={`hidden rounded-md border ${border2} px-4 py-1.5 text-sm font-medium ${textMd} transition ${dark ? "hover:bg-gray-800" : "hover:bg-gray-50"} lg:inline-flex`}
            >
              Login
            </Link>

            {/* Sign Up */}
            <Link
              href="/signup"
              className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:px-4"
            >
              Sign Up
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className={`flex items-center justify-center rounded-md p-2 ${textMd} transition ${dark ? "hover:bg-gray-800" : "hover:bg-gray-100"} lg:hidden`}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* ── Mobile drawer ── */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className={`border-t ${border} px-4 pb-5 pt-3 ${dark ? "bg-gray-950" : "bg-white"}`}>
            {/* Search */}
            <div className={`mb-4 flex items-center gap-2 rounded-xl border ${inputBg} px-3 py-2.5`}>
              <Search className="h-4 w-4 flex-shrink-0 opacity-50" />
              <input
                type="text"
                placeholder="Search courses, ziyarat…"
                className="flex-1 bg-transparent text-sm outline-none"
              />
            </div>

            {/* Links */}
            <ul className={`mb-4 divide-y ${divider}`}>
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3 text-sm font-medium ${text} hover:text-emerald-500`}
                  >
                    {item.label}
                    {item.dropdown
                      ? <ChevronDown className="h-4 w-4 opacity-40" />
                      : <ChevronRight className="h-4 w-4 opacity-20" />
                    }
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex gap-3">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex-1 rounded-xl border ${border2} py-2.5 text-center text-sm font-semibold ${text} ${dark ? "hover:bg-gray-800" : "hover:bg-gray-50"}`}
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 rounded-xl bg-emerald-600 py-2.5 text-center text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          HERO — always dark bg (shrine night photo)
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#030102]">
        {/* Mobile background image */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="/karbala-bg.jpg"
            alt="Karbala"
            fill
            priority
            className="object-cover object-center opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
        </div>

        {/* Amber glow */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-1/2 bg-gradient-to-l from-amber-900/20 via-transparent to-transparent lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">

            {/* Left */}
            <div className="relative z-10">
              <h1 className="mb-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Learn. Understand.
                <br />
                <span className="text-emerald-400">Live the Truth.</span>
              </h1>
              <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-300">
                A complete platform to learn Quran, Shia Dinyaat, Ziyarat and
                the teachings of Ahlulbayt&nbsp;(عليهم السلام).
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/courses" className="flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-emerald-700">
                  <BookOpen className="h-4 w-4" /> Start Learning
                </Link>
                <Link href="/ziyarat" className="flex items-center gap-2 rounded-lg border border-gray-500 px-5 py-2.5 text-sm font-semibold text-gray-200 transition hover:border-emerald-500 hover:text-emerald-400">
                  <MapPin className="h-4 w-4" /> Explore Ziyarat
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-6 sm:gap-8">
                {[
                  { icon: Users, value: "10K+", label: "Students" },
                  { icon: BookMarked, value: "500+", label: "Lessons" },
                  { icon: Landmark, value: "100+", label: "Ziyarats" },
                  { icon: GraduationCap, value: "50+", label: "Scholars" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <s.icon className="h-5 w-5 text-emerald-500" />
                    <div>
                      <p className="text-base font-bold text-white">{s.value}</p>
                      <p className="text-xs text-gray-400">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Desktop image + ayah */}
            <div className="relative hidden lg:block">
              <div
                aria-hidden
                className="xl:w-[170%] w-[210%]"
                style={{ position: "absolute", top: "-39%", right: "-18%", zIndex: 0, pointerEvents: "none", userSelect: "none" }}
              >
                <Image src="/karbala-bg.jpg" alt="Karbala" width={900} height={600} priority className="w-full opacity-80" sizes="60vw" />
              </div>
              <div className="relative z-10 flex flex-col items-end py-16 text-right">
                <p className="mb-3 text-4xl leading-loose text-amber-300 lg:text-5xl" dir="rtl" style={{ fontFamily: "'Scheherazade New', 'Amiri', serif" }}>
                  وَقُل رَّبِّ زِدۡنِي عِلۡمًا
                </p>
                <p className="text-sm italic text-gray-400">And say, "My Lord, increase me in knowledge."</p>
                <p className="mt-1 text-xs text-gray-600">(Quran 20:114)</p>
              </div>
            </div>

            {/* Ayah — Mobile */}
            <div className="relative z-10 text-center lg:hidden">
              <p className="mb-2 text-3xl leading-loose text-amber-300" dir="rtl" style={{ fontFamily: "'Scheherazade New', 'Amiri', serif" }}>
                وَقُل رَّبِّ زِدۡنِي عِلۡمًا
              </p>
              <p className="text-xs italic text-gray-400">"My Lord, increase me in knowledge." — Quran 20:114</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CATEGORIES
      ══════════════════════════════════════════ */}
      <section className={`border-b ${border} ${bg} py-10 transition-colors duration-300`}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className={`group flex flex-col items-center gap-2 rounded-xl border ${border} p-3 text-center transition hover:border-emerald-500 ${cardHover} sm:p-4`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${dark ? "bg-gray-800" : "bg-gray-50"} text-2xl shadow-sm transition group-hover:scale-105 sm:h-14 sm:w-14 sm:text-3xl`}>
                  {cat.emoji}
                </div>
                <p className={`text-xs font-semibold sm:text-sm ${text}`}>{cat.label}</p>
                <p className={`hidden text-[11px] leading-tight sm:block ${textSm}`}>{cat.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EXPLORE ZIYARATS
      ══════════════════════════════════════════ */}
      <section className={`${bg} py-12 transition-colors duration-300`}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className={`text-xl font-bold ${text}`}>Explore Ziyarats</h2>
            <Link href="/ziyarat" className="flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-500">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {ZIYARATS.map((z) => (
              <Link key={z.title} href="/ziyarat" className="group relative overflow-hidden rounded-xl">
                <div className="relative h-40 w-full">
                  <Image
                    src={z.image}
                    alt={z.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t ${z.bg} flex flex-col justify-end p-3`}>
                  <p className="text-xs font-bold leading-tight text-white transition-all group-hover:-translate-y-1">{z.title}</p>
                  <p className="text-[10px] text-gray-300 transition-all group-hover:-translate-y-1">{z.sub}</p>
                </div>
                <div className="absolute bottom-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  <ChevronRight className="h-3 w-3 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          POPULAR COURSES
      ══════════════════════════════════════════ */}
      <section className={`${bgAlt} py-12 transition-colors duration-300`}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className={`text-xl font-bold ${text}`}>Popular Courses</h2>
            <Link href="/courses" className="flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-500">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {COURSES.map((c) => (
              <Link
                key={c.title}
                href="/courses"
                className={`group overflow-hidden rounded-xl border ${dark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"} shadow-sm transition hover:shadow-md`}
              >
                <div className={`relative h-32 w-full ${c.imgBg} flex items-center justify-center text-4xl sm:h-36 sm:text-5xl`}>
                  {c.emoji}
                  {c.badge && (
                    <span className={`absolute left-2 top-2 rounded-md px-2 py-0.5 text-[10px] font-bold text-white ${c.badgeColor}`}>
                      {c.badge}
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <p className={`text-xs font-semibold leading-tight sm:text-sm ${text}`}>{c.title}</p>
                  <p className={`mt-0.5 text-[10px] sm:text-[11px] ${textSm}`}>{c.sub}</p>
                  <ProgressBar value={c.progress} dark={dark} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STRUCTURED LEARNING PATHS
      ══════════════════════════════════════════ */}
      <section className={`border-y ${border} ${bg} py-12 transition-colors duration-300`}>
        <div className="mx-auto max-w-7xl px-4">
          <h2 className={`text-xl font-bold ${text}`}>Structured Learning Paths</h2>
          <p className={`mt-1 text-sm ${textSm}`}>
            Follow step-by-step paths to build strong knowledge from basics to advanced levels.
          </p>
          <div className={`mt-8 grid grid-cols-1 divide-y rounded-2xl border ${pathCard} sm:grid-cols-3 sm:divide-x sm:divide-y-0`}>
            {LEARNING_PATHS.map((p) => (
              <div key={p.title} className="flex flex-col items-start gap-3 p-5 sm:p-6">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl border text-2xl shadow-sm ${iconBg}`}>
                  {p.icon}
                </div>
                <div>
                  <p className={`text-sm font-semibold ${text}`}>{p.title}</p>
                  <p className={`mt-1 text-xs leading-relaxed ${textSm}`}>{p.desc}</p>
                </div>
                <Link
                  href={p.href}
                  className={`mt-auto rounded-lg border px-4 py-1.5 text-xs font-semibold transition hover:border-emerald-500 hover:text-emerald-500 ${border2} ${textMd}`}
                >
                  Start Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY LEARN WITH US
      ══════════════════════════════════════════ */}
      <section className={`${bg} py-12 transition-colors duration-300`}>
        <div className="mx-auto max-w-7xl px-4">
          <h2 className={`mb-8 text-xl font-bold ${text}`}>Why Learn with Shia Dinyaat?</h2>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex flex-col items-start gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${dark ? "bg-emerald-900/40 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}>
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className={`text-sm font-semibold ${text}`}>{f.title}</p>
                  <p className={`mt-0.5 text-xs leading-relaxed ${textSm}`}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LATEST ARTICLES
      ══════════════════════════════════════════ */}
      <section className={`${bgAlt} py-12 transition-colors duration-300`}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className={`text-xl font-bold ${text}`}>Latest Articles & Resources</h2>
            <Link href="/library" className="flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-500">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {ARTICLES.map((a) => (
              <div
                key={a.title}
                className={`overflow-hidden rounded-xl border ${dark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"} shadow-sm transition hover:shadow-md`}
              >
                <div className={`h-36 w-full ${a.imgBg} flex items-center justify-center text-5xl`}>
                  {a.emoji}
                </div>
                <div className="p-4">
                  <p className={`text-sm font-semibold leading-tight ${text}`}>{a.title}</p>
                  <p className={`mt-1 text-xs leading-relaxed ${textSm}`}>{a.desc}</p>
                  <button className={`mt-3 rounded-md border px-3 py-1 text-xs font-medium transition hover:border-emerald-500 hover:text-emerald-500 ${border2} ${textMd}`}>
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER — always dark
      ══════════════════════════════════════════ */}
      <footer className="bg-gray-950 text-gray-400">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center">
                  <Image src={logo} alt="Logo" width={100} height={100} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Shia Dinyaat</p>
                  <p className="text-[10px] text-gray-600">Learn. Believe. Practice.</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-gray-600">
                A platform dedicated to spreading the teachings of Quran and Ahlulbayt (ع) for a better tomorrow.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">Quick Links</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {["Quran", "Dinyaat", "Ziyarat", "Courses", "Library", "Kids", "Resources", "About Us", "Contact Us"].map((l) => (
                  <Link key={l} href={`/${l.toLowerCase().replace(" ", "-")}`} className="text-xs text-gray-600 transition hover:text-emerald-400">
                    {l}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden lg:block" />

            {/* Need Help */}
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">Need Help?</h3>
              <div className="rounded-xl border border-gray-800 bg-gray-900 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-medium text-white">Chat with us on WhatsApp</span>
                </div>
                <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300">
                  <Phone className="h-4 w-4" />
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="mx-auto max-w-7xl px-4 py-4 text-center">
            <p className="text-xs text-gray-700">© 2024 Agha Naveed. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}