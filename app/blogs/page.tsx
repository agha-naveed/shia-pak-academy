"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import blogBg from "@/public/images/blog.png"
import {
  Search,
  BookOpen,
  Users,
  MapPin,
  Heart,
  Leaf,
  HelpCircle,
  Flame,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const FILTER_CATEGORIES = [
  "All Articles",
  "Quran",
  "Ahlulbayt (عليهم السلام)",
  "Dinyaat",
  "Ziyarat",
  "Akhlaq (Ethics)",
  "Lifestyle",
  "Q&A",
];

const SIDEBAR_CATEGORIES = [
  { label: "All Articles", count: 56, icon: BookOpen },
  { label: "Quran", count: 12, icon: BookOpen },
  { label: "Ahlulbayt (عليهم السلام)", count: 14, icon: Users },
  { label: "Dinyaat", count: 10, icon: MapPin },
  { label: "Ziyarat", count: 8, icon: Heart },
  { label: "Akhlaq (Ethics)", count: 6, icon: Leaf },
  { label: "Lifestyle", count: 4, icon: Heart },
  { label: "Questions & Answers", count: 2, icon: HelpCircle },
];

const ARTICLES = [
  {
    title: "How to Connect with the Quran in Daily Life",
    desc: "Practical ways to build a strong and lasting connection with the words of Allah.",
    category: "Quran",
    date: "May 12, 2024",
    readTime: "5 min read",
    image: "/images/blogs/quran.jpg",
  },
  {
    title: "Life Lessons from the Sayings of Ahlulbayt (عليهم السلام)",
    desc: "Timeless wisdom from our Imams (عليهم السلام) for a better life.",
    category: "Ahlulbayt (عليهم السلام)",
    date: "May 5, 2024",
    readTime: "6 min read",
    image: "/images/blogs/rasool.webp",
  },
  {
    title: "The Importance of Taqwa in Today's World",
    desc: "Understanding Taqwa and how it guides us through modern-day challenges.",
    category: "Dinyaat",
    date: "Apr 28, 2024",
    readTime: "4 min read",
    image: "/images/blogs/taqwa.jpg",
  },
];

const POPULAR_ARTICLES = [
  {
    id: 1,
    title: "The Power of Istighfar in Our Lives",
    date: "May 1, 2024",
    image: "/images/pop-1.jpg",
  },
  {
    id: 2,
    title: "Dua: The Weapon of a Believer",
    date: "Apr 24, 2024",
    image: "/images/pop-2.jpg",
  },
  {
    id: 3,
    title: "Who are the Ahlulbayt (عليهم السلام)?",
    date: "Apr 18, 2024",
    image: "/images/pop-3.jpg",
  },
  {
    id: 4,
    title: "Dealing with Anxiety from an Islamic Perspective",
    date: "Apr 11, 2024",
    image: "/images/pop-4.jpg",
  },
  {
    id: 5,
    title: "Ramadan: A Month of Transformation",
    date: "Apr 3, 2024",
    image: "/images/pop-5.jpg",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");

  // Filter articles based on active category
  const filteredArticles =
    activeCategory === "All Articles"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300 dark:bg-[#030102]">

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative h-[300px] w-full overflow-hidden sm:h-[350px] lg:h-[400px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* Gradient Overlay for text readability */}
          {/* <Image src={blogBg} alt="" fill priority className="" /> */}
          <div className="absolute inset-0 bg-[#DABB99]" />
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto flex z-10 h-full max-w-[1400px] flex-col justify-center px-4 sm:px-6 lg:px-8">
          <Image
            src={blogBg}
            alt="Articles and Insights Background"
            width={900}
            height={900}
            className="z-10 h-full w-fit absolute right-0"
          />
          <div className="max-w-2xl z-20">
            <span className="mb-3 inline-block rounded-full bg-emerald-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              Blog
            </span>
            <h1 className="mb-4 text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
              Articles & Insights
            </h1>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              Explore authentic articles on Quran, Dinyaat, Ahlulbayt (عليهم السلام),
              Ziyarat and more to strengthen your knowledge and faith.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MAIN CONTENT LAYOUT
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="flex flex-col gap-8 xl:flex-row xl:gap-12">

          {/* ─── LEFT COLUMN (Articles Grid) ─── */}
          <div className="flex-1">

            {/* Filter Pills */}
            <div className="mb-8 flex flex-wrap gap-2 sm:gap-3">
              {FILTER_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${activeCategory === cat
                    ? "bg-emerald-900 text-white shadow-sm dark:bg-emerald-600"
                    : "bg-white text-gray-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
                    } border border-transparent dark:border-gray-800`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <article
                  key={article.title}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                >
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden sm:h-52">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Category Badge overlay on image */}
                    <div className="absolute bottom-3 left-3 rounded bg-emerald-900/90 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm dark:bg-emerald-700/90">
                      {article.category}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-gray-100">
                      {article.title}
                    </h3>
                    <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {article.desc}
                    </p>

                    {/* Footer Meta */}
                    <div className="mt-auto flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-500">
                      <span>{article.date}</span>
                      <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-12 flex justify-center">
              <button className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800">
                Load More Articles
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* ─── RIGHT COLUMN (Sidebar) ─── */}
          <aside className="w-full xl:w-[320px] 2xl:w-[360px]">
            <div className="sticky top-24 space-y-8">

              {/* Search Box */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-emerald-500"
                />
              </div>

              {/* Categories Block */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-gray-900 dark:text-white">
                  <BookOpen className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                  Categories
                </h3>
                <ul className="space-y-1">
                  {SIDEBAR_CATEGORIES.map((cat) => (
                    <li key={cat.label}>
                      <button
                        onClick={() => setActiveCategory(cat.label)}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition ${activeCategory === cat.label
                          ? "bg-emerald-50 text-emerald-700 font-semibold dark:bg-emerald-900/30 dark:text-emerald-400"
                          : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <cat.icon className="h-4 w-4 opacity-70" />
                          <span>{cat.label}</span>
                        </div>
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                          {cat.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Articles Block */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <h3 className="mb-5 flex items-center gap-2 text-base font-bold text-gray-900 dark:text-white">
                  <Flame className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                  Popular Articles
                </h3>
                <div className="space-y-4">
                  {POPULAR_ARTICLES.map((article) => (
                    <Link
                      href="#"
                      key={article.id}
                      className="group flex items-center gap-4"
                    >
                      {/* Thumbnail with Number Badge */}
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 flex h-4 w-4 items-center justify-center rounded-tr-lg bg-emerald-800 text-[10px] font-bold text-white dark:bg-emerald-600">
                          {article.id}
                        </div>
                      </div>

                      {/* Title & Date */}
                      <div className="flex flex-col justify-center">
                        <p className="line-clamp-2 text-sm font-semibold leading-snug text-gray-800 transition group-hover:text-emerald-600 dark:text-gray-200 dark:group-hover:text-emerald-400">
                          {article.title}
                        </p>
                        <p className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-500">
                          {article.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Have Questions CTA Block */}
              <div className="rounded-2xl bg-emerald-50 p-6 text-center dark:bg-emerald-900/10 dark:border dark:border-emerald-900/30">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-white shadow-sm dark:bg-emerald-600">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">
                  Have Questions?
                </h3>
                <p className="mb-5 text-sm text-gray-600 dark:text-gray-400">
                  We&apos;re here to help you on your learning journey.
                </p>
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noreferrer"
                  className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-700 bg-transparent px-4 py-2.5 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-700 hover:text-white dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-600 dark:hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <p className="text-sm font-bold text-emerald-900 dark:text-emerald-500">
                  +1 (555) 123-4567
                </p>
              </div>

            </div>
          </aside>

        </div>
      </section>

    </div>
  );
}