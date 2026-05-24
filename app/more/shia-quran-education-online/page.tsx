"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  MessageCircle,
  BookOpen,
  Heart,
  Brain,
  Star,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Leaf,
  Compass,
  Library
} from "lucide-react";
import logo from "@/public/logo.png";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const EDUCATIONAL_PATHWAYS = [
  { icon: BookOpen, title: "Foundational Literacy", desc: "Master the Arabic alphabet, perfect your Makharij (pronunciation), and learn the rules of Tajweed to read the Quran fluently." },
  { icon: Brain, title: "Comprehension & Tafseer", desc: "Move beyond recitation. Delve into the translation, context, and deep meanings of the verses through authentic Shia Tafseer." },
  { icon: ShieldCheck, title: "Aqaid (Core Beliefs)", desc: "Build an unshakable foundation in Usool-e-Deen (Tawheed, Adalat, Nabuwwat, Imamat, Qiyamat) logically and spiritually." },
  { icon: Compass, title: "Fiqh & Ahkam", desc: "Learn the practical Furoo-e-Deen. Master the rulings of Wudhu, Namaz, Fasting, and daily life according to your Marja." },
  { icon: Heart, title: "Tarbiyah & Akhlaq", desc: "Islamic character building based on the lives, traditions, and moral excellence of the Prophet (s.a.w.w) and his Ahlulbayt (ع)." },
  { icon: Library, title: "History & Seerah", desc: "Inspire the next generation with the profound history of Islam, the sacrifices of Karbala, and the biographies of the Infallibles." },
];

const CORE_VALUES = [
  { icon: Leaf, title: "Holistic Growth", desc: "We focus on both the mind and the soul, ensuring academic knowledge translates to spiritual purity." },
  { icon: ShieldCheck, title: "Authentic Sources", desc: "All teachings strictly adhere to the verified traditions of the Holy Prophet and the Ahlulbayt (ع)." },
  { icon: GraduationCap, title: "Lifelong Learning", desc: "From toddlers learning their first Harf to adults studying complex Tafseer, we have a path for everyone." },
];

const LEARNING_JOURNEY = [
  { phase: "Phase 1", title: "Recitation & Connection", desc: "Learning to read the Quran correctly and establishing a daily habit of reciting the words of Allah." },
  { phase: "Phase 2", title: "Beliefs & Rulings", desc: "Understanding what it means to be a Shia Muslim through the study of Aqaid and essential Fiqh." },
  { phase: "Phase 3", title: "Meaning & Reflection", desc: "Studying translation and Tafseer to apply the Quranic injunctions to modern daily life." },
  { phase: "Phase 4", title: "Practice & Propagation", desc: "Living an Islamic lifestyle (Tarbiyah) and becoming a beacon of light for the community." },
];

const FAQS = [
  { q: "Is this education only for children?", a: "No, education is a lifelong pursuit in Islam. We have specialized educational tracks for children, teenagers, and adults, ensuring the teaching style matches the student's age and maturity." },
  { q: "Do you teach Fiqh according to specific Maraja?", a: "Yes. Our qualified scholars are equipped to teach Ahkam (rulings) according to the verdicts (Fatawa) of major contemporary Maraja-e-Udhma." },
  { q: "How is Tarbiyah (character building) integrated into online classes?", a: "Our teachers are trained to act as mentors. Through storytelling, referencing the Akhlaq of the Ahlulbayt (ع), and gentle guidance, we ensure the class is not just a lecture, but a space for moral development." },
  { q: "Can we customize our educational curriculum?", a: "Absolutely. While we have structured pathways, if you want to focus 70% on Quran and 30% on Islamic History or Fiqh, we will tailor the syllabus to your family's specific educational goals." },
];

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────

export default function ShiaQuranEducationOnlinePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white dark:bg-[#030102] transition-colors duration-300">
      
      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1A0F] via-[#0D1F14] to-[#061008] py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            
            <nav className="mb-6 flex items-center justify-center gap-1.5 text-xs font-medium text-emerald-100/60">
              <Link href="/" className="transition hover:text-emerald-400">Home</Link>
              <ChevronRight className="h-3.5 w-3.5 opacity-50" />
              <span>More</span>
              <ChevronRight className="h-3.5 w-3.5 opacity-50" />
              <span className="text-emerald-400">Shia Quran Education</span>
            </nav>

            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-900/60 px-3 py-1 text-xs font-semibold text-emerald-400 ring-1 ring-emerald-700/50">
              <Leaf className="h-3.5 w-3.5 text-emerald-400" /> Nurturing Minds and Souls
            </div>
            
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Holistic <span className="text-emerald-400">Shia Quran Education</span> Online
            </h1>
            
            <p className="mb-8 text-base leading-relaxed text-emerald-100/70 sm:text-lg">
              We go beyond just reading. Our comprehensive educational system blends Quranic literacy, unwavering Aqaid, practical Fiqh, and Tarbiyah based on the pure teachings of the Ahlulbayt (ع).
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="https://wa.me/+923394022926" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-700 hover:shadow-emerald-900/20">
                <MessageCircle className="h-5 w-5" /> Start Your Educational Journey
              </a>
              <Link href="#pathways"
                className="flex items-center gap-2 rounded-xl border border-emerald-800 bg-transparent px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-900/50">
                Explore Pathways <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EDUCATIONAL PHILOSOPHY (CORE VALUES)
      ══════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-white py-12 dark:border-gray-800 dark:bg-[#030102]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
                <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-500">Our Philosophy</h2>
            </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {CORE_VALUES.map((val, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <val.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">{val.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EDUCATIONAL PATHWAYS
      ══════════════════════════════════════════ */}
      <section id="pathways" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Comprehensive Learning Pathways
          </h2>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Education in Islam is a multifaceted diamond. Build a tailored curriculum that covers all essential aspects of a Shia Muslim's identity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EDUCATIONAL_PATHWAYS.map((path, i) => (
            <div key={i} className="group rounded-3xl border border-gray-200 bg-gray-50 p-8 transition hover:border-emerald-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-500/50">
              <path.icon className="mb-6 h-10 w-10 text-emerald-600 dark:text-emerald-400 transition-transform group-hover:scale-110" />
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                {path.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {path.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          THE LEARNING JOURNEY (TIMELINE)
      ══════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/30 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Text Side */}
                <div>
                    <span className="mb-3 block text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-500 uppercase">
                        The Blueprint
                    </span>
                    <h2 className="mb-8 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        A Structured Journey to Mastery
                    </h2>
                    <p className="mb-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        Whether you are enrolling a 5-year-old child or starting your own adult education, we provide a structured, logical progression that builds confidence and deepens faith step-by-step.
                    </p>
                    
                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:to-transparent">
                        {LEARNING_JOURNEY.map((phase, idx) => (
                            <div key={idx} className="relative flex gap-3 items-start">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-50 dark:border-gray-900 bg-emerald-600 text-white shadow-md shrink-0 z-10">
                                    <Star className="h-4 w-4" />
                                </div>
                                <div className="ml-6 pt-1">
                                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{phase.phase}</span>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1 mb-2">{phase.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{phase.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Graphic Side */}
                <div className="relative">
                    <div className="absolute -inset-4 rounded-3xl bg-emerald-100/50 dark:bg-emerald-900/10 blur-2xl" />
                    <div className="relative overflow-hidden rounded-3xl border border-white dark:border-gray-700 bg-gray-200 dark:bg-gray-800 shadow-2xl aspect-[4/5] sm:aspect-square">
                        {/* Replace with an image showing diverse education (e.g., student reading, teacher explaining) */}
                        <Image src="/images/education-journey.jpg" alt="Comprehensive Islamic Education" fill className="object-cover" />
                        <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                        
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
                                <h4 className="text-xl font-bold text-white mb-2">Empowering Generations</h4>
                                <p className="text-sm text-gray-200">Equipping our students with the knowledge to navigate the modern world with an Islamic perspective.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <span className="pr-4 text-sm font-bold text-gray-900 dark:text-white">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && (
                <div className="border-t border-gray-100 px-6 py-5 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900">
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════ */}
      <section className=" dark:bg-transparent pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 to-emerald-950 shadow-2xl relative">
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 blur-3xl bg-emerald-500"></div>

            <div className="relative flex flex-col items-center gap-8 px-8 py-12 text-center sm:py-16">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
                    <Image src={logo} alt="Shia Quran Pak Academy" width={200} height={200} className="object-contain" />
                </div>
                <div className="max-w-2xl">
                <h3 className="mb-4 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                    Begin Your Educational Journey
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-emerald-200 sm:text-base">
                    Whether you want to focus strictly on Quran recitation or desire a comprehensive Islamic curriculum for your children, we are ready to guide you.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a href="https://wa.me/+923394022926" target="_blank" rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-emerald-900 shadow-xl transition hover:bg-emerald-50 sm:w-auto">
                    <MessageCircle className="h-5 w-5" /> Consult an Academic Advisor
                    </a>
                    <Link href="/pricing"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-700 bg-transparent px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-800 sm:w-auto">
                    View Pricing Plans
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
      </section>

    </div>
  );
}