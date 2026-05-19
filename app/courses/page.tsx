"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Search,
    ChevronDown,
    BookOpen,
    BarChart2,
    Bookmark,
    LayoutGrid,
    List,
    RefreshCw,
    ChevronRight,
    BookMarked,
    Scale,
    MapPin,
    HandMetal,
    Clock3,
    GraduationCap,
    Languages,
} from "lucide-react";
import quran from "@/public/quran.png"
// ─── DATA ─────────────────────────────────────────────────────────────────────

const CATEGORIES = [
    { icon: LayoutGrid, label: "All Courses" },
    { icon: BookOpen, label: "Quran Studies" },
    { icon: BookMarked, label: "Aqeedah" },
    { icon: Scale, label: "Fiqh" },
    { icon: MapPin, label: "Ziyarat" },
    { icon: HandMetal, label: "Dua & Supplication" },
    { icon: Clock3, label: "Islamic History" },
    { icon: GraduationCap, label: "Personal Development" },
    { icon: Languages, label: "Arabic Language" },
];

type Course = {
    id: number;
    title: string;
    desc: string;
    lessons: number;
    level: "Beginner Level" | "Intermediate" | "Advanced" | "All Levels";
    progress: number;
    badge?: "Bestseller" | "New";
    imgBg: string;
    imgEmoji: string;
    category: string;
    href: string;
};

const COURSES: Course[] = [
    {
        id: 1,
        title: "Tafseer of Quran",
        desc: "Learn Quran with Authentic Tafseer from Ahlulbayt (عليهم السلام).",
        lessons: 15,
        level: "Beginner Level",
        progress: 45,
        badge: "Bestseller",
        imgBg: "from-amber-950 via-stone-900 to-amber-900",
        imgEmoji: "📖",
        category: "Quran Studies",
        href: "/courses/tafseer-of-quran",
    },
    {
        id: 2,
        title: "Aqaid (معنذات)",
        desc: "Understand the beliefs of Shia Islam with authentic references.",
        lessons: 12,
        level: "Beginner Level",
        progress: 60,
        imgBg: "from-teal-950 via-stone-900 to-teal-900",
        imgEmoji: "🌙",
        category: "Aqeedah",
        href: "/courses/aqaid",
    },
    {
        id: 3,
        title: "Fiqh for Beginners",
        desc: "Learn practical Islamic laws for daily life with easy examples.",
        lessons: 18,
        level: "Beginner Level",
        progress: 35,
        imgBg: "from-yellow-950 via-stone-900 to-amber-800",
        imgEmoji: "⚖️",
        category: "Fiqh",
        href: "/courses/fiqh-for-beginners",
    },
    {
        id: 4,
        title: "Life of Imam Ali (ع)",
        desc: "From birth to martyrdom – the complete story of Imam Ali (ع).",
        lessons: 20,
        level: "All Levels",
        progress: 70,
        badge: "New",
        imgBg: "from-stone-900 via-slate-900 to-stone-800",
        imgEmoji: "✨",
        category: "Islamic History",
        href: "/courses/life-of-imam-ali",
    },
    {
        id: 5,
        title: "Ziyarat e Imam Hussain (ع)",
        desc: "Learn the meanings and benefits of Ziyarat e Imam Hussain (ع).",
        lessons: 10,
        level: "All Levels",
        progress: 50,
        imgBg: "from-red-950 via-stone-900 to-red-900",
        imgEmoji: "🏴",
        category: "Ziyarat",
        href: "/courses/ziyarat-imam-hussain",
    },
    {
        id: 6,
        title: "Ziyarat Studies",
        desc: "Explore authentic Ziyarat with meanings and historical background.",
        lessons: 14,
        level: "Intermediate",
        progress: 40,
        imgBg: "from-amber-950 via-stone-800 to-yellow-900",
        imgEmoji: "🕌",
        category: "Ziyarat",
        href: "/courses/ziyarat-studies",
    },
    {
        id: 7,
        title: "Quranic Arabic Basics",
        desc: "Learn Arabic for understanding Quran with grammar and vocabulary.",
        lessons: 16,
        level: "Beginner Level",
        progress: 30,
        imgBg: "from-stone-800 via-stone-700 to-stone-900",
        imgEmoji: "📜",
        category: "Arabic Language",
        href: "/courses/quranic-arabic",
    },
    {
        id: 8,
        title: "Seerah of Prophet (ص)",
        desc: "Complete life and teachings of Prophet Muhammad (ص).",
        lessons: 25,
        level: "All Levels",
        progress: 65,
        imgBg: "from-emerald-950 via-stone-900 to-emerald-800",
        imgEmoji: "🌿",
        category: "Islamic History",
        href: "/courses/seerah-of-prophet",
    },
    {
        id: 9,
        title: "Dua in Daily Life",
        desc: "Connect with Allah through authentic Duas for every moment.",
        lessons: 10,
        level: "All Levels",
        progress: 80,
        imgBg: "from-slate-900 via-stone-900 to-slate-800",
        imgEmoji: "🤲",
        category: "Dua & Supplication",
        href: "/courses/dua-daily-life",
    },
];

const LEVEL_COLORS: Record<string, string> = {
    "Beginner Level": "text-emerald-600",
    "Intermediate": "text-amber-600",
    "Advanced": "text-red-600",
    "All Levels": "text-sky-600",
};

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function ProgressBar({ value }: { value: number }) {
    return (
        <div className="h-0.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <div
                className="h-full rounded-full bg-gray-800 dark:bg-gray-200 transition-all"
                style={{ width: `${value}%` }}
            />
        </div>
    );
}

function CourseCard({ course, view }: { course: Course; view: "grid" | "list" }) {
    if (view === "list") {
        return (
            <Link
                href={course.href}
                className="group flex gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600"
            >
                {/* Thumb */}
                <div className={`relative h-24 w-36 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br ${course.imgBg} flex items-center justify-center text-4xl`}>
                    {course.imgEmoji}
                    {course.badge && (
                        <span className={`absolute left-2 top-2 rounded-md px-2 py-0.5 text-[10px] font-bold text-white ${course.badge === "Bestseller" ? "bg-emerald-600" : "bg-emerald-500"}`}>
                            {course.badge}
                        </span>
                    )}
                </div>
                {/* Info */}
                <div className="flex flex-1 flex-col justify-between">
                    <div>
                        <h3 className="mb-1 text-sm font-bold text-gray-900 dark:text-gray-100">{course.title}</h3>
                        <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{course.desc}</p>
                    </div>
                    <div className="mt-2 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" />{course.lessons}+ Lessons</span>
                        <span className={`flex items-center gap-1 font-medium ${LEVEL_COLORS[course.level]}`}><BarChart2 className="h-3 w-3" />{course.level}</span>
                    </div>
                    <div className="mt-2">
                        <ProgressBar value={course.progress} />
                        <p className="mt-1 text-[10px] text-gray-400 dark:text-gray-500">{course.progress}% Complete</p>
                    </div>
                </div>
                <button
                    onClick={(e) => e.preventDefault()}
                    className="flex-shrink-0 self-start rounded-md p-1.5 text-gray-300 transition hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-300"
                >
                    <Bookmark className="h-4 w-4" />
                </button>
            </Link>
        );
    }

    return (
        <Link
            href={course.href}
            className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600"
        >
            {/* Thumbnail */}
            <div className={`relative h-44 w-full bg-gradient-to-br ${course.imgBg} flex items-center justify-center text-6xl`}>
                {course.badge && (
                    <span className={`absolute left-3 top-3 z-10 rounded-md px-2.5 py-1 text-[11px] font-bold text-white shadow ${course.badge === "Bestseller" ? "bg-emerald-600" : "bg-emerald-500"}`}>
                        {course.badge}
                    </span>
                )}
                <span className="opacity-60 transition-transform duration-300 group-hover:scale-110">
                    {course.imgEmoji}
                </span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-1 text-sm font-bold text-gray-900 dark:text-gray-100 leading-snug">
                    {course.title}
                </h3>
                <p className="mb-3 text-xs leading-relaxed text-gray-500 dark:text-gray-400 flex-1">
                    {course.desc}
                </p>

                {/* Meta */}
                <div className="mb-3 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                        <BookOpen className="h-3.5 w-3.5" />
                        {course.lessons}+ Lessons
                    </span>
                    <span className={`flex items-center gap-1 font-medium ${LEVEL_COLORS[course.level]}`}>
                        <BarChart2 className="h-3.5 w-3.5" />
                        {course.level}
                    </span>
                </div>

                {/* Progress */}
                <div>
                    <ProgressBar value={course.progress} />
                    <div className="mt-1.5 flex items-center justify-between">
                        <p className="text-[11px] text-gray-400 dark:text-gray-500">{course.progress}% Complete</p>
                        <button
                            onClick={(e) => e.preventDefault()}
                            className="rounded-md p-1 text-gray-300 transition hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-300"
                        >
                            <Bookmark className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function CoursesPage() {
    const [activeCategory, setActiveCategory] = useState("All Courses");
    const [view, setView] = useState<"grid" | "list">("grid");
    const [search, setSearch] = useState("");
    const [visibleCount, setVisibleCount] = useState(9);

    const filtered = COURSES.filter((c) => {
        const matchesCategory = activeCategory === "All Courses" || c.category === activeCategory;
        const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
            c.desc.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const visible = filtered.slice(0, visibleCount);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">

            {/* ══════════════════════════════════════════
          BREADCRUMB + HERO BANNER
      ══════════════════════════════════════════ */}
            <section className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
                <div className="mx-auto max-w-7xl px-4 pt-5 pb-0">
                    {/* Breadcrumb */}
                    <nav className="mb-4 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                        <Link href="/" className="transition hover:text-gray-800 dark:hover:text-gray-200">Home</Link>
                        <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                        <span className="font-medium text-gray-900 dark:text-gray-100">Courses</span>
                    </nav>

                    {/* Hero row */}
                    <div className="flex items-end justify-between pb-8">
                        <div className="max-w-lg">
                            <h1 className="mb-3 text-4xl font-extrabold text-gray-900 dark:text-gray-50 sm:text-5xl">
                                All Courses
                            </h1>
                            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                Explore our comprehensive collection of courses designed to deepen your understanding
                                of Islam and strengthen your faith.
                            </p>
                        </div>

                        {/* Decorative Quran image — hidden on mobile */}
                        <div className="relative hidden lg:block">
                            <div className="h-36 w-64 flex items-center justify-center text-7xl">
                                <Image src={quran} alt="Quran" width={200} height={200} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
          FILTER BAR
      ══════════════════════════════════════════ */}
            <section className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 transition-colors">
                <div className="mx-auto max-w-7xl px-4 py-3">
                    <div className="flex flex-wrap items-center gap-3">
                        {/* Search */}
                        <div className="flex flex-1 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-700 dark:bg-gray-900 min-w-[160px]">
                            <Search className="h-4 w-4 flex-shrink-0 text-gray-400" />
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                type="text"
                                placeholder="Search courses..."
                                className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none dark:text-gray-200 dark:placeholder-gray-500"
                            />
                        </div>

                        {/* Dropdowns */}
                        {["All Categories", "All Levels", "All Instructors"].map((label) => (
                            <button
                                key={label}
                                className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600 transition hover:border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-600"
                            >
                                {label} <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                            </button>
                        ))}

                        {/* Sort */}
                        <button className="ml-auto flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                            Sort By: Popular <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                        </button>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-7xl px-4 py-6">

                {/* ══════════════════════════════════════════
            CATEGORY PILLS
        ══════════════════════════════════════════ */}
                <div className="mb-6 flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
                    {CATEGORIES.map((cat) => {
                        const active = activeCategory === cat.label;
                        return (
                            <button
                                key={cat.label}
                                onClick={() => { setActiveCategory(cat.label); setVisibleCount(9); }}
                                className={`flex flex-shrink-0 flex-col items-center gap-1.5 rounded-xl border px-4 py-3 text-xs font-medium transition
                  ${active
                                        ? "border-gray-900 bg-white text-gray-900 shadow-sm dark:border-gray-100 dark:bg-gray-900 dark:text-gray-100"
                                        : "border-gray-200 bg-white text-gray-500 hover:border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-gray-600"
                                    }`}
                            >
                                <cat.icon className={`h-5 w-5 ${active ? "text-gray-900 dark:text-gray-100" : "text-gray-400"}`} strokeWidth={1.5} />
                                <span className="whitespace-nowrap">{cat.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* ══════════════════════════════════════════
            RESULTS META + VIEW TOGGLE
        ══════════════════════════════════════════ */}
                <div className="mb-5 flex items-center justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Showing{" "}
                        <span className="font-semibold text-gray-900 dark:text-gray-100">
                            1–{Math.min(visible.length, filtered.length)}
                        </span>{" "}
                        of{" "}
                        <span className="font-semibold text-gray-900 dark:text-gray-100">
                            {filtered.length}
                        </span>{" "}
                        courses
                    </p>

                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400 dark:text-gray-500">View as:</span>
                        <button
                            onClick={() => setView("grid")}
                            className={`rounded-md p-1.5 transition ${view === "grid" ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
                        >
                            <LayoutGrid className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => setView("list")}
                            className={`rounded-md p-1.5 transition ${view === "list" ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
                        >
                            <List className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* ══════════════════════════════════════════
            COURSE GRID / LIST
        ══════════════════════════════════════════ */}
                {visible.length > 0 ? (
                    <div className={
                        view === "grid"
                            ? "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                            : "flex flex-col gap-4"
                    }>
                        {visible.map((course) => (
                            <CourseCard key={course.id} course={course} view={view} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <span className="mb-4 text-6xl">🔍</span>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">No courses found</p>
                        <p className="mt-1 text-sm text-gray-400">Try a different search or category.</p>
                    </div>
                )}

                {/* ══════════════════════════════════════════
            LOAD MORE BUTTON
        ══════════════════════════════════════════ */}
                {visibleCount < filtered.length && (
                    <div className="mt-10 flex justify-center">
                        <button
                            onClick={() => setVisibleCount((n) => n + 6)}
                            className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-gray-400 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-500"
                        >
                            Load More Courses
                            <RefreshCw className="h-4 w-4" />
                        </button>
                    </div>
                )}

                {/* All loaded message */}
                {visibleCount >= filtered.length && filtered.length > 0 && (
                    <p className="mt-8 text-center text-sm text-gray-400 dark:text-gray-600">
                        You&apos;ve seen all {filtered.length} courses.
                    </p>
                )}
            </div>
        </div>
    );
}