"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Play, BookOpen, ChevronDown, MapPin, Heart } from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const CATEGORIES = ["All Ziyarats", "Aimma (ع)", "Anbiya (ع)", "Karbala", "Mashhad", "Other Sites"];

const ZIYARATS = [
  { title: "Ziyarat e Ashura", sub: "Imam Hussain (ع)", category: "Karbala", image: "/images/zyarat-e-ashura.jpg", audioUrl: "/ziyarat/ziyarat-e-ashura" },
  { title: "Ziyarat e Warith", sub: "Imam Hussain (ع)", category: "Karbala", image: "/images/warisa.jpg", audioUrl: "/ziyarat/ziyarat-e-ashura" },
  { title: "Ziyarat e Nahiya", sub: "Ahlulbayt (ع)", category: "Karbala", image: "/images/nahiya.jpg", audioUrl: "/ziyarat/ziyarat-e-ashura" },
  { title: "Ziyarat e Ameenullah", sub: "Imam Ali (ع)", category: "Aimma (ع)", image: "/images/ameenullah.jpg", audioUrl: "/ziyarat/ziyarat-e-ashura" },
  { title: "Ziyarat e Imam Ali Raza (ع)", sub: "Mashhad e Muqaddas", category: "Mashhad", image: "/images/mashhad.jpg", audioUrl: "/ziyarat/ziyarat-e-ashura" },
  { title: "Ziyarat e Jamea Kabira", sub: "All Aimma (ع)", category: "Aimma (ع)", image: "/images/jamea-kabira.jpg", audioUrl: "/ziyarat/ziyarat-e-ashura" },
];

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────

export default function ZiyaratPage() {
  const [activeCategory, setActiveCategory] = useState("All Ziyarats");
  const [search, setSearch] = useState("");

  const filtered = ZIYARATS.filter((z) => {
    const matchesCat = activeCategory === "All Ziyarats" || z.category === activeCategory;
    const matchesSearch = z.title.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#030102] transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-emerald-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">Ziyarat & Sacred Sites</h1>
          <p className="mx-auto max-w-xl text-emerald-100/80">
            Connect your heart with the Ahlulbayt (ع) through these authentic Ziyarats, available with audio recitations.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/90">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Ziyarat..."
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm dark:border-gray-700 dark:bg-gray-900 outline-none"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition ${
                  activeCategory === cat
                    ? "bg-emerald-600 text-white"
                    : "bg-white border border-gray-200 text-gray-600 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((z, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
              <div className="relative h-56 w-full">
                <Image src={z.image} alt={z.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xl font-bold">{z.title}</p>
                  <p className="text-sm opacity-90">{z.sub}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-4">
                <Link href={z.audioUrl} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-50 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400">
                  <BookOpen className="h-4 w-4" /> Read
                </Link>
                <Link href={z.audioUrl} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-100 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300">
                  <Play className="h-4 w-4" /> Listen
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}