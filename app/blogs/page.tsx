"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";

import BlogHero from "../components/BlogHero";
import BlogSidebar from "../components/BlogSidebar";

// ─── CATEGORIES ─────────────────────────────────────────────

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

// ─── ARTICLES ────────────────────────────────────────────────

const ARTICLES = [
  {
    title: "How to Connect with the Quran in Daily Life",
    desc: "Practical ways to build a strong and lasting connection with the words of Allah.",
    category: "Quran",
    date: "May 12, 2026",
    readTime: "5 min read",
    image: "/images/blogs/quran.jpg",
    slug: "how-to-connect-with-quran",
  },
  {
    title: "What Imam Ali’s Sermons Teach Modern Society",
    desc: "Timeless lessons from the sermons of Imam Ali for today’s world.",
    category: "Ahlulbayt (عليهم السلام)",
    date: "May 5, 2026",
    readTime: "6 min read",
    image: "/images/blogs/imam-ali-roza.webp",
    slug: "what-imam-ali-sermons-teach-modern-society",
  },
  {
    title: "Life Lessons from the Sayings of Ahlulbayt (عليهم السلام)",
    desc: "Timeless wisdom from our Imams (عليهم السلام) for a better life.",
    category: "Ahlulbayt (عليهم السلام)",
    date: "May 5, 2026",
    readTime: "6 min read",
    image: "/images/blogs/rasool.webp",
    slug: "life-lessons-from-ahlulbayt",
  },
  {
    title: "The Importance of Taqwa in Today's World",
    desc: "Understanding Taqwa and how it guides us through modern-day challenges.",
    category: "Dinyaat",
    date: "Apr 28, 2026",
    readTime: "4 min read",
    image: "/images/blogs/taqwa.jpg",
    slug: "the-importance-of-taqwa-in-todays-world",
  },
  {
    title: "Ramadan: A Month of Transformation",
    desc: "A Month of Allah, and Our Transformation.",
    category: "Akhlaq (Ethics)",
    date: "Mar 10, 2026",
    readTime: "4 min read",
    image: "/images/blogs/ramzan.jpg",
    slug: "ramadan-a-month-of-transformation",
  },
];

// ─── PAGE ────────────────────────────────────────────────────

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");

  // filter is purely client-side (design unchanged)
  const filteredArticles = useMemo(() => {
    if (activeCategory === "All Articles") return ARTICLES;
    return ARTICLES.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <BlogHero
        badge="Blog"
        title="Articles & Insights"
        description="Explore authentic articles on Quran, Dinyaat, Ahlulbayt (عليهم السلام), Ziyarat and more to strengthen your knowledge and faith."
      />

      <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="flex flex-col gap-8 xl:flex-row xl:gap-12">
          
          {/* MAIN CONTENT */}
          <div className="w-full flex-1">

            {/* FILTER BUTTONS */}
            <div className="mb-8 flex flex-wrap gap-2 sm:gap-3">
              {FILTER_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all border ${
                    activeCategory === cat
                      ? "bg-emerald-900 text-white border-emerald-900"
                      : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* ARTICLES GRID */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {filteredArticles.map((article) => (
                <Link
                  href={`/blogs/${article.slug}`}
                  key={article.slug}
                  className="group flex h-full flex-col"
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">

                    <div className="relative h-48 w-full overflow-hidden sm:h-52">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        quality={85}
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute bottom-3 left-3 rounded bg-emerald-900/90 px-2.5 py-1 text-[11px] font-semibold text-white">
                        {article.category}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-gray-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-500">
                        {article.title}
                      </h3>

                      <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {article.desc}
                      </p>

                      <div className="mt-auto flex items-center gap-2 text-xs text-gray-500">
                        <span>{article.date}</span>
                        <span className="h-1 w-1 rounded-full bg-gray-300" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                  </article>
                </Link>
              ))}
            </div>

          </div>

          {/* SIDEBAR */}
          <aside className="w-full xl:w-[320px]">
            <BlogSidebar />
          </aside>

        </div>
      </section>
    </>
  );
}