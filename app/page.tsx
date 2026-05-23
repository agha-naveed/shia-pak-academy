"use client";

import Link from "next/link";
import {
  BookOpen,
  MapPin,
  ChevronRight,
  Users,
  BookMarked,
  Landmark,
  GraduationCap,
  Volume2,
  Smartphone,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

// ─── DATA ────────────────────────────────────────────────────────────────────
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
  { title: "Yassarnal Quran", sub: "Qaida for Beginners", badge: null, badgeColor: "bg-emerald-500", imgBg: "bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-800", emoji: "✨" },
  { title: "Tajweed Quran", sub: "Perfect Your Recitation", badge: "Popular", badgeColor: "bg-emerald-500", imgBg: "bg-gradient-to-br from-emerald-950 via-stone-900 to-amber-900", emoji: "🎙️" },
  { title: "Tafseer Course", sub: "Understand the Divine Words", badge: null, badgeColor: "bg-emerald-600", imgBg: "bg-gradient-to-br from-stone-900 via-amber-950 to-stone-800", emoji: "📖" },
  { title: "Nehjul Balagh", sub: "Sermons of Imam Ali (ع)", badge: "New", badgeColor: "bg-emerald-500", imgBg: "bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900", emoji: "📜" },
  { title: "Shia Islamic Study", sub: "Comprehensive Dinyaat", badge: null, badgeColor: "", imgBg: "bg-gradient-to-br from-emerald-900 via-stone-800 to-amber-950", emoji: "📚" },
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
  { title: "What Imam Ali’s Sermons Teach Modern Society", desc: "Timeless lessons from the sermons of Imam Ali for today’s world.", image: "/images/blogs/imam-ali-roza.webp" , url: "/blogs/what-imam-ali-sermons-teach-modern-society" },
  { title: "Life Lessons from the Sayings of Ahlulbayt (عليهم السلام)", desc: "Timeless wisdom from our Imams (عليهم السلام) for a better life.", image: "/images/blogs/rasool.webp", url: "/blogs/life-lessons-from-ahlulbayt" },
  { title: "How to Connect with the Quran in Daily Life", desc: "Practical ways to build a strong and lasting connection with the words of Allah.", image: "/images/blogs/quran.jpg", url: "/blogs/how-to-connect-with-quran" },
  { title: "The Importance of Taqwa in Today's World", desc: "Understanding Taqwa and how it guides us through modern-day challenges.", image: "/images/blogs/taqwa.jpg", url: "/blogs/the-importance-of-taqwa-in-todays-world" },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="w-full">
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#030102]">
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

        <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-1/2 bg-gradient-to-l from-amber-900/20 via-transparent to-transparent lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div className="relative z-10">
              <h1 className="mb-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Learn. Understand.
                <br />
                <span className="text-emerald-400">Live the Truth.</span>
              </h1>
              <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-300">
                A complete platform to learn Quran, Shia Islamic Study, Ziyarat and
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
      <section className="border-b bg-white border-gray-100 py-10 transition-colors duration-300 dark:bg-gray-950 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="group flex flex-col items-center gap-2 rounded-xl border border-gray-100 p-3 text-center transition hover:border-emerald-500 hover:bg-emerald-50 dark:border-gray-800 dark:hover:bg-gray-800 sm:p-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-2xl shadow-sm transition group-hover:scale-105 dark:bg-gray-800 sm:h-14 sm:w-14 sm:text-3xl">
                  {cat.emoji}
                </div>
                <p className="text-xs font-semibold sm:text-sm">{cat.label}</p>
                <p className="hidden text-[11px] leading-tight text-gray-500 dark:text-gray-400 sm:block">{cat.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EXPLORE ZIYARATS
      ══════════════════════════════════════════ */}
      <section className="bg-white py-12 transition-colors duration-300 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold">Explore Ziyarats</h2>
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
      <section className="bg-gray-50 py-12 transition-colors duration-300 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold">Popular Courses</h2>
            <Link href="/courses" className="flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-500">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {COURSES.map((c) => (
              <Link
                key={c.title}
                href="/courses"
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
              >
                <div className={`relative h-32 w-full ${c.imgBg} flex items-center justify-center text-4xl sm:h-36 sm:text-5xl`}>
                  {c.emoji}
                  {c.badge && (
                    <span className={`absolute left-2 top-2 rounded-md px-2 py-0.5 text-[10px] font-bold text-white ${c.badgeColor}`}>
                      {c.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold leading-tight sm:text-sm">{c.title}</p>
                  <p className="mt-1 text-[10px] leading-relaxed text-gray-500 dark:text-gray-400 sm:text-[11px]">{c.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STRUCTURED LEARNING PATHS
      ══════════════════════════════════════════ */}
      <section className="border-y border-gray-100 bg-white py-12 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-xl font-bold">Structured Learning Paths</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Follow step-by-step paths to build strong knowledge from basics to advanced levels.
          </p>
          <div className="mt-8 grid grid-cols-1 divide-y divide-gray-100 rounded-2xl border border-gray-200 bg-gray-50 dark:divide-gray-800 dark:border-gray-700 dark:bg-gray-900 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {LEARNING_PATHS.map((p) => (
              <div key={p.title} className="flex flex-col items-start gap-3 p-5 sm:p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-2xl shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  {p.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold">{p.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY LEARN WITH US
      ══════════════════════════════════════════ */}
      <section className="bg-white py-12 transition-colors duration-300 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-xl font-bold">Why Learn with Shia Quran Pak Academy?</h2>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex flex-col items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{f.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LATEST ARTICLES
      ══════════════════════════════════════════ */}
      <section className="bg-gray-50 py-12 transition-colors duration-300 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold">Latest Articles & Blogs</h2>
            <Link href="/blogs" className="flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-500">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {ARTICLES.map((a) => (
              <div
                key={a.title}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
              >
                <div className={`h-36 w-full flex items-center justify-center text-5xl`}>
                  <Image src={a.image} width={200} height={200} className="w-full object-cover h-full" alt="" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold leading-tight">{a.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{a.desc}</p>
                  <Link href={a.url} className="mt-3 block w-fit rounded-md border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 transition hover:border-emerald-500 hover:text-emerald-500 dark:border-gray-700 dark:text-gray-300">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}