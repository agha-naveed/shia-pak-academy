"use client";

import Link from "next/link";
import Image from "next/image";
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
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

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

const POPULAR_ARTICLES = [
  {
    id: 1,
    title: "How to Connect with the Quran in Daily Life",
    date: "May 12, 2026",
    image: "/images/blogs/quran.jpg",
    navig: "how-to-connect-with-quran"
  },
  {
    id: 2,
    title: "What Imam Ali's Sermons Teach Modern Society",
    date: "May 5, 2026",
    image: "/images/blogs/imam-ali-roza.webp",
    navig: "what-imam-ali-sermons-teach-modern-society"
  },
  {
    id: 3,
    title: "Life Lessons from the Sayings of Ahlulbayt (عليهم السلام)?",
    date: "Apr 5, 2026",
    image: "/images/blogs/rasool.webp",
    navig: "life-lessons-from-ahlulbayt"
  },
  {
    id: 4,
    title: "The Importance of Taqwa in Today's World",
    date: "Apr 28, 2026",
    image: "/images/blogs/taqwa.jpg",
    navig: "the-importance-of-taqwa-in-todays-world"
  },
  {
    id: 5,
    title: "Ramadan: A Month of Transformation",
    date: "Mar 10, 2026",
    image: "/images/blogs/ramzan.jpg",
    navig: "ramadan-a-month-of-transformation"
  },
];

export default function BlogSidebar() {

  return (
    <aside className="w-full xl:w-[320px] 2xl:w-[360px]">
      <div className="sticky top-24 space-y-8">

        {/* Popular Articles Block */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-5 flex items-center gap-2 text-base font-bold text-gray-900 dark:text-white">
            <Flame className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
            Popular Articles
          </h3>
          <div className="space-y-4">
            {POPULAR_ARTICLES.map((article) => (
              <Link href={"/blogs/"+article.navig} key={article.id} className="group flex items-center gap-4">
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
            href="https://wa.me/+923394022926"
            target="_blank"
            rel="noreferrer"
            className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-700 bg-transparent px-4 py-2.5 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-700 hover:text-white dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-600 dark:hover:text-white"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
          <p className="text-sm font-bold text-emerald-900 dark:text-emerald-500">
            +92 339 4022926
          </p>
        </div>
      </div>
    </aside>
  );
}