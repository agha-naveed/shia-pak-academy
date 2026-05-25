"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Search,
    ChevronDown,
    BookOpen,
    LayoutGrid,
    List,
    RefreshCw,
    ChevronRight,
    BookMarked,
    Clock3,
} from "lucide-react";
import quran from "@/public/quran.png"

// ─── DATA ─────────────────────────────────────────────────────────────────────

const CATEGORIES = [
    { icon: LayoutGrid, label: "All Courses" },
    { icon: BookOpen, label: "Quran Studies" },
    { icon: BookMarked, label: "Aqeedah" },
    { icon: Clock3, label: "Islamic History" },
];

const LEVELS = ["All Levels", "Beginner Level", "Intermediate", "Advanced"];

type Course = {
    id: number;
    title: string;
    desc: string;
    level: "Beginner Level" | "Intermediate" | "Advanced" | "All Levels";
    badge?: "Bestseller" | "New";
    imgBg: string;
    image: string;
    category: string;
    href: string;
};

const COURSES: Course[] = [
    {
        id: 1,
        title: "Shia Yassarnal Quran Course Online",
        desc: "Start your journey of Quran learning with proper pronunciation and correct Makharij with Yassarnal Quran Course Online.",
        level: "Beginner Level",
        badge: "New",
        imgBg: "from-stone-900 via-emerald-950 to-stone-800",
        image: "/images/courses/yassarnal-quran-qaida.webp",
        category: "Quran Studies",
        href: "/courses/online-shia-yassarnal-quran-course",
    },
    {
        id: 2,
        title: "Shia Tajweed e Quran Course Online",
        desc: "Improve your Quran recitation and learn the essential rules of Tajweed with guidance from a qualified live teacher.",
        level: "Intermediate",
        badge: "Bestseller",
        imgBg: "from-emerald-950 via-stone-900 to-amber-900",
        image: "/images/courses/tajweed-course.jpg",
        category: "Quran Studies",
        href: "/courses/online-shia-quran-tajweed-course",
    },
    {
        id: 3,
        title: "Shia Tafseer e Quran Course Online",
        desc: "Unveil the depths of the Quran through authentic teachings of Ahlulbayt (عليهم السلام).",
        level: "All Levels",
        badge: "Bestseller",
        imgBg: "from-amber-950 via-stone-900 to-amber-900",
        image: "/images/courses/tafseer-course.webp",
        category: "Quran Studies",
        href: "/courses/online-shia-tafseer-e-quran-course",
    },
    {
        id: 4,
        title: "Shia Quran Memorization (Hifz) Course Online",
        desc: "Commit the words of Allah to your heart with proven retention and revision techniques.",
        level: "All Levels",
        imgBg: "from-amber-950 via-stone-900 to-yellow-950",
        image: "/images/courses/quran-memorization.png",
        category: "Quran Studies",
        href: "/courses/online-shia-quran-memorization-course",
    },
    {
        id: 5,
        title: "Shia Quran Translation (Tarjuma) Course Online",
        desc: "Understand the direct word-for-word meaning of the Holy Quran and your daily prayers.",
        level: "Beginner Level",
        imgBg: "from-yellow-950 via-stone-900 to-amber-950",
        image: "/images/courses/quran-translation.webp",
        category: "Quran Studies",
        href: "/courses/online-shia-quran-translation-course",
    },
    {
        id: 6,
        title: "Nahjul Balagha Course Online",
        desc: "Explore the peak of eloquence, justice, and wisdom of Imam Ali (عليه السلام).",
        level: "Intermediate",
        badge: "New",
        imgBg: "from-stone-800 via-stone-700 to-stone-900",
        image: "/images/courses/nehjul-balagha.webp",
        category: "Islamic History", 
        href: "/courses/nahjul-balagha-course",
    },
    {
        id: 7,
        title: "Shia Islamic Studies Course Online",
        desc: "Comprehensive guide to Beliefs (Aqaid), Laws (Fiqh), History, and Ethics (Akhlaq).",
        level: "Beginner Level",
        badge: "Bestseller",
        imgBg: "from-emerald-900 via-stone-800 to-amber-950",
        image: "/images/courses/shia-study.jpg",
        category: "Aqeedah",
        href: "/courses/shia-islamic-studies-course",
    }
];

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function CourseCard({ course, view }: { course: Course; view: "grid" | "list" }) {
    if (view === "list") {
        return (
            <Link
                href={course.href}
                className="group flex flex-col sm:flex-row gap-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
                {/* Thumb */}
                <div className={`relative h-48 sm:h-auto sm:w-72 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br ${course.imgBg}`}>
                    <Image 
                        src={course.image} 
                        alt={course.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    {course.badge && (
                        <span className={`absolute left-3 top-3 z-10 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md ${course.badge === "Bestseller" ? "bg-amber-500" : "bg-emerald-500"}`}>
                            {course.badge}
                        </span>
                    )}
                </div>
                
                {/* Info */}
                <div className="flex flex-1 flex-col justify-center py-2 pr-4">
                    {/* Added Content: Category & Level Tags */}
                    <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">
                            {course.category}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-500"></span>
                            {course.level}
                        </span>
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-gray-100 dark:group-hover:text-emerald-400">
                        {course.title}
                    </h3>
                    
                    <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
                        {course.desc}
                    </p>

                    {/* Added Content: Call to Action */}
                    <div className="mt-auto flex items-center gap-2">
                        <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-500">
                            Explore Course Details
                        </span>
                        <ChevronRight className="h-4 w-4 text-emerald-600 transition-transform group-hover:translate-x-1 dark:text-emerald-500" />
                    </div>
                </div>
            </Link>
        );
    }

    // GRID VIEW
    return (
        <Link
            href={course.href}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
        >
            {/* Thumbnail */}
            <div className={`relative h-56 w-full bg-gradient-to-br ${course.imgBg} flex items-center justify-center overflow-hidden`}>
                {course.badge && (
                    <span className={`absolute left-4 top-4 z-10 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md ${course.badge === "Bestseller" ? "bg-amber-500" : "bg-emerald-500"}`}>
                        {course.badge}
                    </span>
                )}
                <Image 
                    src={course.image} 
                    alt={course.title} 
                    fill 
                    className="object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100" 
                />
                {/* Subtle overlay on hover for a premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-5">
                {/* Added Content: Category & Level Tags */}
                <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 dark:bg-gray-800">
                        {course.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                        {course.level}
                    </span>
                </div>

                <h3 className="mb-2 text-lg font-bold leading-tight text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-gray-100 dark:group-hover:text-emerald-400">
                    {course.title}
                </h3>
                
                <p className="mb-6 text-sm leading-relaxed text-gray-600 line-clamp-2 dark:text-gray-400 flex-1">
                    {course.desc}
                </p>

                {/* Added Content: Footer Action Bar */}
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-500">
                        View Course
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-900/30 dark:text-emerald-400 dark:group-hover:bg-emerald-600 dark:group-hover:text-white">
                        <ChevronRight className="h-4 w-4" />
                    </div>
                </div>
            </div>
        </Link>
    );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function CoursesPage() {
    const [activeCategory, setActiveCategory] = useState("All Courses");
    const [activeLevel, setActiveLevel] = useState("All Levels"); // NEW: Track selected level
    const [openDropdown, setOpenDropdown] = useState<"category" | "level" | null>(null); // NEW: Track which dropdown is open

    const [view, setView] = useState<"grid" | "list">("grid");
    const [search, setSearch] = useState("");
    const [visibleCount, setVisibleCount] = useState(9);

    // UPDATED FILTER LOGIC: Now checks both Category AND Level
    const filtered = COURSES.filter((c) => {
        const matchesCategory = activeCategory === "All Courses" || c.category === activeCategory;
        const matchesLevel = activeLevel === "All Levels" || c.level === activeLevel;
        const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
            c.desc.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesLevel && matchesSearch;
    });

    const visible = filtered.slice(0, visibleCount);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300" onClick={() => setOpenDropdown(null)}>

            {/* ══════════════════════════════════════════
          BREADCRUMB + HERO BANNER
      ══════════════════════════════════════════ */}
            <section className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
                <div className="mx-auto max-w-7xl px-4 pt-5 pb-0">
                    <nav className="mb-4 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                        <Link href="/" className="transition hover:text-gray-800 dark:hover:text-gray-200">Home</Link>
                        <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                        <span className="font-medium text-gray-900 dark:text-gray-100">Courses</span>
                    </nav>

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
                        <div className="relative hidden lg:block">
                            <div className="h-36 w-64 flex items-center justify-center text-7xl">
                                <Image src={quran} alt="Quran e Kareem" width={200} height={200} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
          FILTER BAR (WITH FUNCTIONAL DROPDOWNS)
      ══════════════════════════════════════════ */}
            <section className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 transition-colors">
                <div className="mx-auto max-w-7xl px-4 py-3">
                    <div className="flex flex-wrap items-center gap-3">
                        {/* Search */}
                        <div className="flex flex-1 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-700 dark:bg-gray-900 min-w-[160px]">
                            <Search className="h-4 w-4 shrink-0 text-gray-400" />
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                type="text"
                                placeholder="Search courses..."
                                className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none dark:text-gray-200 dark:placeholder-gray-500"
                            />
                        </div>

                        {/* Category Dropdown */}
                        <div className="relative" onClick={(e) => e.stopPropagation()}>
                            <button aria-label="Set Category"
                                onClick={() => setOpenDropdown(openDropdown === "category" ? null : "category")}
                                className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600 transition hover:border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-600"
                            >
                                {activeCategory === "All Courses" ? "All Categories" : activeCategory}
                                <ChevronDown className={`h-3.5 w-3.5 opacity-50 transition-transform ${openDropdown === "category" ? "rotate-180" : ""}`} />
                            </button>
                            
                            {openDropdown === "category" && (
                                <div className="absolute left-0 mt-2 w-48 flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-gray-900">
                                    {CATEGORIES.map((cat) => (
                                        <button
                                            aria-label={`choose ${cat.label} category`}
                                            key={cat.label}
                                            onClick={() => {
                                                setActiveCategory(cat.label);
                                                setVisibleCount(9);
                                                setOpenDropdown(null);
                                            }}
                                            className={`text-left px-3 py-2 text-sm rounded-lg transition-colors ${activeCategory === cat.label ? "bg-emerald-50 text-emerald-700 font-medium dark:bg-emerald-900/30 dark:text-emerald-400" : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"}`}
                                        >
                                            {cat.label === "All Courses" ? "All Categories" : cat.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Level Dropdown */}
                        <div className="relative" onClick={(e) => e.stopPropagation()}>
                            <button
                                aria-label="choose level"
                                onClick={() => setOpenDropdown(openDropdown === "level" ? null : "level")}
                                className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600 transition hover:border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-600"
                            >
                                {activeLevel}
                                <ChevronDown className={`h-3.5 w-3.5 opacity-50 transition-transform ${openDropdown === "level" ? "rotate-180" : ""}`} />
                            </button>
                            
                            {openDropdown === "level" && (
                                <div className="absolute left-0 mt-2 w-40 flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-gray-900">
                                    {LEVELS.map((level) => (
                                        <button
                                            aria-label={"set level "+level}
                                            key={level}
                                            onClick={() => {
                                                setActiveLevel(level);
                                                setVisibleCount(9);
                                                setOpenDropdown(null);
                                            }}
                                            className={`text-left px-3 py-2 text-sm rounded-lg transition-colors ${activeLevel === level ? "bg-emerald-50 text-emerald-700 font-medium dark:bg-emerald-900/30 dark:text-emerald-400" : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"}`}
                                        >
                                            {level}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

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
                            onClick={() => setView("grid")} aria-label="Set Grid View"
                            className={`rounded-md p-1.5 transition ${view === "grid" ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
                        >
                            <LayoutGrid className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => setView("list")} aria-label="Set List View"
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
                        <p className="mt-1 text-sm text-gray-400">Try a different search or filter.</p>
                    </div>
                )}

                {/* ══════════════════════════════════════════
            LOAD MORE BUTTON
        ══════════════════════════════════════════ */}
                {visibleCount < filtered.length && (
                    <div className="mt-10 flex justify-center">
                        <button aria-label="Load More Courses"
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