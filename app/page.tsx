"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BookOpen,
  MapPin,
  ChevronDown,
  Search,
  Moon,
  ChevronRight,
  ArrowRight,
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
import logo from "@/public/logo.png"
// import myVideo from "@/public/"

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Quran", href: "/quran" },
  { label: "Dinyaat", href: "/dinyaat", dropdown: true },
  { label: "Ziyarat", href: "/ziyarat" },
  { label: "Courses", href: "/courses" },
  { label: "Library", href: "/library" },
  { label: "Kids", href: "/kids" },
  { label: "Resources", href: "/resources", dropdown: true },
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
  {
    title: "Ziyarat e Ashura",
    sub: "Imam Hussain (ع)",
    bg: "from-amber-900/80 to-black/60",
    imgBg: "bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900",
  },
  {
    title: "Ziyarat e Warith",
    sub: "Imam Hussain (ع)",
    bg: "from-emerald-900/80 to-black/60",
    imgBg: "bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-800",
  },
  {
    title: "Ziyarat e Nahiya",
    sub: "Ahlulbayt (ع)",
    bg: "from-sky-900/80 to-black/60",
    imgBg: "bg-gradient-to-br from-sky-950 via-stone-900 to-sky-800",
  },
  {
    title: "Ziyarat e Ameenullah",
    sub: "Imam Ali (ع)",
    bg: "from-yellow-900/80 to-black/60",
    imgBg: "bg-gradient-to-br from-yellow-950 via-stone-900 to-yellow-800",
  },
  {
    title: "Ziyarat e Imam Hussain (ع)",
    sub: "Full Ziyarat",
    bg: "from-red-900/80 to-black/60",
    imgBg: "bg-gradient-to-br from-red-950 via-stone-900 to-red-900",
  },
  {
    title: "Ziyarat e Makkah",
    sub: "Makkah Mukarramah",
    bg: "from-stone-900/80 to-black/60",
    imgBg: "bg-gradient-to-br from-stone-800 via-stone-900 to-stone-700",
  },
];

const COURSES = [
  {
    title: "Tafseer of Quran",
    sub: "Learn Quran with Authentic Tafseer",
    progress: 45,
    badge: "Bestseller",
    badgeColor: "bg-emerald-600",
    imgBg: "bg-gradient-to-br from-emerald-950 via-stone-900 to-amber-900",
    emoji: "📖",
  },
  {
    title: "Aqaid (عقائد)",
    sub: "Shia Beliefs Made Easy",
    progress: 60,
    badge: null,
    imgBg: "bg-gradient-to-br from-stone-900 via-amber-950 to-stone-800",
    emoji: "🌙",
  },
  {
    title: "Fiqh for Beginners",
    sub: "Practical Islamic Laws",
    progress: 35,
    badge: null,
    imgBg: "bg-gradient-to-br from-amber-950 via-stone-900 to-yellow-950",
    emoji: "⚖️",
  },
  {
    title: "Life of Imam Ali (ع)",
    sub: "From Birth to Martyrdom",
    progress: 70,
    badge: "New",
    badgeColor: "bg-emerald-500",
    imgBg: "bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-800",
    emoji: "✨",
  },
  {
    title: "Ziyarat Studies",
    sub: "Meaning & Benefits",
    progress: 50,
    badge: null,
    imgBg: "bg-gradient-to-br from-yellow-950 via-stone-900 to-amber-950",
    emoji: "🏛️",
  },
];

const LEARNING_PATHS = [
  {
    icon: "🌱",
    title: "Beginner Path",
    desc: "Start your journey with the basics of Islam and Shia Dinyaat.",
    href: "/paths/beginner",
  },
  {
    icon: "📘",
    title: "Intermediate Path",
    desc: "Strengthen your understanding of beliefs, fiqh, and Ahlulbayt teachings.",
    href: "/paths/intermediate",
  },
  {
    icon: "🎓",
    title: "Advanced Path",
    desc: "Deepen your knowledge with advanced topics and scholarly resources.",
    href: "/paths/advanced",
  },
];

const FEATURES = [
  { icon: ShieldCheck, title: "Authentic Content", desc: "Verified from reliable Shia scholars and sources." },
  { icon: Users, title: "Easy to Understand", desc: "Simple language for all age groups." },
  { icon: Volume2, title: "Audio Support", desc: "Listen to Ziyarats and lessons on the go." },
  { icon: Smartphone, title: "Learn Anytime", desc: "Access lessons and resources anytime." },
  { icon: BookOpen, title: "Ad-Free Learning", desc: "Focus on your learning without distractions." },
];

const ARTICLES = [
  {
    title: "The Importance of Ziyarat",
    desc: "Understand the spiritual benefits of visiting the Ahlulbayt (ع).",
    imgBg: "bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900",
    emoji: "📿",
  },
  {
    title: "Who are Ahlulbayt (ع)?",
    desc: "A brief introduction to the blessed household of Prophet (ص).",
    imgBg: "bg-gradient-to-br from-emerald-900 via-stone-800 to-amber-950",
    emoji: "🕌",
  },
  {
    title: "Dua in Daily Life",
    desc: "How Dua connects us with Allah in every moment.",
    imgBg: "bg-gradient-to-br from-amber-950 via-stone-800 to-stone-900",
    emoji: "🤲",
  },
  {
    title: "How to Understand Quran?",
    desc: "Simple steps to build a strong connection with Quran.",
    imgBg: "bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800",
    emoji: "📖",
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="mt-2">
      <div className="h-1 w-full rounded-full bg-gray-200">
        <div
          className="h-1 rounded-full bg-emerald-600 transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
      <p className="mt-1 text-xs text-gray-500">{value}% Complete</p>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">

      {/* ─── NAVBAR ─── */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center">
              <Image src={logo} alt="Logo" width={200} height={200} />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-gray-900">Shia Dinyaat</p>
              <p className="text-[10px] text-gray-400">Learn. Believe. Practice.</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center gap-0.5 rounded-md px-3 py-1.5 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="h-3 w-3 opacity-50" />}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button className="hidden rounded-md p-2 text-gray-500 hover:bg-gray-100 lg:block">
              <Search className="h-4 w-4" />
            </button>
            <button className="hidden rounded-md p-2 text-gray-500 hover:bg-gray-100 lg:block">
              <Moon className="h-4 w-4" />
            </button>
            <Link
              href="/login"
              className="hidden rounded-md border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 lg:inline-flex"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-md bg-emerald-600 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[420px] overflow-hidden bg-[#030102]">
        {/* Background gradient (replace with actual shrine image via CSS background-image) */}

        {/* Decorative glow */}
        <div className="absolute right-1 top-0 h-full w-1/2 z-20
        bg-gradient-to-l from-amber-900/20 via-transparent to-transparent
        " />

        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Left */}
            <div className="z-20">
              <h1 className="mb-3 text-4xl font-extrabold leading-tight text-white lg:text-5xl">
                Learn. Understand.
                <br />
                <span className="text-emerald-400">Live the Truth.</span>
              </h1>
              <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-400">
                A complete platform to learn Quran, Shia Dinyaat, Ziyarat and
                the teachings of Ahlulbayt (عليهم السلام).
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/courses"
                  className="flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-emerald-700"
                >
                  <BookOpen className="h-4 w-4" />
                  Start Learning
                </Link>
                <Link
                  href="/ziyarat"
                  className="flex items-center gap-2 rounded-lg border border-gray-600 px-5 py-2.5 text-sm font-semibold text-gray-200 transition hover:border-emerald-500 hover:text-emerald-400"
                >
                  <MapPin className="h-4 w-4" />
                  Explore Ziyarat
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-10 flex flex-wrap gap-8">
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
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
              
            <div className="relative">
              <div className="absolute top-[-27%] right-[-15%] z-0 w-[175%] pointer-events-none select-none">
                <Image src={"/karbala-bg.jpg"} alt="Karbala image" width={1200} height={1200} className="w-full opacity-100 pointer-events-none select-none" />
              </div>
              {/* Right — Arabic Ayah */}
              <div className="flex flex-col items-end relative z-10 justify-center text-right">
                <p
                  className="mb-3 font-arabic text-4xl leading-loose text-amber-300 lg:text-5xl"
                  dir="rtl"
                  style={{ fontFamily: "'Scheherazade New', 'Amiri', serif" }}
                >
                  وَقُل رَّبِّ زِدۡنِي عِلۡمًا
                </p>
                <p className="text-sm italic text-gray-400">
                  And say, "My Lord, increase me in knowledge."
                </p>
                <p className="mt-1 text-xs text-gray-600">(Quran 20:114)</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="border-b border-gray-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="group flex flex-col items-center gap-2 rounded-xl border border-gray-100 p-4 text-center transition hover:border-emerald-200 hover:bg-emerald-50"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 text-3xl shadow-sm transition group-hover:bg-white">
                  {cat.emoji}
                </div>
                <p className="text-sm font-semibold text-gray-800">{cat.label}</p>
                <p className="text-[11px] leading-tight text-gray-400">{cat.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPLORE ZIYARATS ─── */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Explore Ziyarats</h2>
            <Link href="/ziyarat" className="flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {ZIYARATS.map((z) => (
              <Link
                key={z.title}
                href="/ziyarat"
                className="group relative overflow-hidden rounded-xl"
              >
                {/* Image placeholder */}
                <div className={`h-40 w-full ${z.imgBg} flex items-center justify-center text-4xl`}>
                  🏛️
                </div>
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${z.bg} flex flex-col justify-end p-3`}
                >
                  <p className="text-xs font-bold leading-tight text-white">{z.title}</p>
                  <p className="text-[10px] text-gray-300">{z.sub}</p>
                </div>
                {/* Arrow */}
                <div className="absolute bottom-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  <ChevronRight className="h-3 w-3 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POPULAR COURSES ─── */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Popular Courses</h2>
            <Link href="/courses" className="flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {COURSES.map((c) => (
              <Link
                key={c.title}
                href="/courses"
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                {/* Thumb */}
                <div className={`relative h-36 w-full ${c.imgBg} flex items-center justify-center text-5xl`}>
                  {c.emoji}
                  {c.badge && (
                    <span
                      className={`absolute left-2 top-2 rounded-md px-2 py-0.5 text-[10px] font-bold text-white ${c.badgeColor}`}
                    >
                      {c.badge}
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold text-gray-900 leading-tight">{c.title}</p>
                  <p className="mt-0.5 text-[11px] text-gray-500">{c.sub}</p>
                  <ProgressBar value={c.progress} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STRUCTURED LEARNING PATHS ─── */}
      <section className="border-y border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-2">
            <h2 className="text-xl font-bold text-gray-900">Structured Learning Paths</h2>
            <p className="mt-1 text-sm text-gray-500">
              Follow step-by-step paths to build strong knowledge from basics to advanced levels.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-0 divide-y divide-gray-100 rounded-2xl border border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {LEARNING_PATHS.map((p, i) => (
              <div key={p.title} className="flex flex-col items-start gap-3 p-6">
                {/* icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-2xl shadow-sm">
                  {p.icon}
                </div>
                {/* arrow between */}
                <div>
                  <p className="text-sm font-semibold text-gray-900">{p.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">{p.desc}</p>
                </div>
                <Link
                  href={p.href}
                  className="mt-auto rounded-lg border border-gray-300 px-4 py-1.5 text-xs font-semibold text-gray-700 transition hover:border-emerald-500 hover:text-emerald-600"
                >
                  Start Now
                </Link>
                {i < 2 && (
                  <div className="absolute hidden sm:block" style={{ right: 0, top: "50%", transform: "translateY(-50%)" }}>
                    <ArrowRight className="h-4 w-4 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY LEARN WITH US ─── */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-xl font-bold text-gray-900">Why Learn with Shia Dinyaat?</h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex flex-col items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{f.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-gray-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LATEST ARTICLES ─── */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Latest Articles & Resources</h2>
            <Link href="/library" className="flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ARTICLES.map((a) => (
              <div
                key={a.title}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className={`h-36 w-full ${a.imgBg} flex items-center justify-center text-5xl`}>
                  {a.emoji}
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-gray-900 leading-tight">{a.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">{a.desc}</p>
                  <button className="mt-3 rounded-md border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 transition hover:border-emerald-400 hover:text-emerald-600">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-gray-950 text-gray-400">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-900 text-base font-bold text-amber-300">
                  ن
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
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {["Quran", "Dinyaat", "Ziyarat", "Courses", "Library", "Kids", "Resources", "About Us", "Contact Us"].map(
                  (l) => (
                    <Link
                      key={l}
                      href={`/${l.toLowerCase().replace(" ", "-")}`}
                      className="text-xs text-gray-600 transition hover:text-emerald-400"
                    >
                      {l}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Spacer col */}
            <div className="hidden lg:block" />

            {/* Need Help */}
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
                Need Help?
              </h3>
              <div className="rounded-xl border border-gray-800 bg-gray-900 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-medium text-white">Chat with us on WhatsApp</span>
                </div>
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <Phone className="h-4 w-4" />
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="mx-auto max-w-7xl px-4 py-4 text-center">
            <p className="text-xs text-gray-700">
              © 2024 Shia Dinyaat. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}