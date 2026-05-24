"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronRight,
  Star,
  Users,
  BookOpen,
  Globe,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  BadgeCheck,
  GraduationCap,
  ArrowLeft,
  ShieldCheck,
  Calendar,
  Heart,
} from "lucide-react";
import logo from "@/public/logo.png";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const WHAT_YOU_LEARN = [
  { icon: "📖", title: "Quran with Tajweed",    desc: "Perfect your recitation and Makharij in a comfortable, pressure-free environment." },
  { icon: "🌸", title: "Ahkam-e-Niswan",        desc: "Specialized Fiqh (Islamic Law) covering specific rulings and questions for women." },
  { icon: "🔍", title: "Tafseer & Meanings",    desc: "Dive deep into the translation and context of verses with qualified Aalimat." },
  { icon: "📿", title: "Duas & Ziyarat",        desc: "Learn the correct pronunciation and profound meanings of daily supplications." },
  { icon: "💖", title: "Islamic Akhlaq",        desc: "Practical lessons on Islamic ethics, family life, and raising children in the modern era." },
  { icon: "🌙", title: "Aqaid & Beliefs",       desc: "Strengthen your core Shia Islamic beliefs (Tawhid, Imamat, etc.) logically." },
];

const WHY_CHOOSE_FEMALE = [
  { icon: ShieldCheck,   title: "Complete Privacy",    desc: "100% ladies-only sessions ensuring a safe, modest, and comfortable space for sisters." },
  { icon: GraduationCap, title: "Qualified Aalimat",   desc: "Our female teachers are graduates of recognized Shia seminaries (Hawza/Jamiat ul Zahra)." },
  { icon: Heart,         title: "Role Models for Girls",desc: "Excellent spiritual mentors and older-sister figures for young girls growing up today." },
  { icon: Calendar,      title: "Flexible for Mothers",desc: "We understand family commitments. Timings are highly flexible to fit around your routine." },
];

const HOW_STEPS = [
  { n: 1, title: "Message Us",       desc: "Tap the WhatsApp button and let us know you're looking for a female teacher." },
  { n: 2, title: "Discuss Needs",    desc: "We'll discuss your goals—whether it's for yourself, your daughter, or both." },
  { n: 3, title: "Schedule Setup",   desc: "We finalize a convenient time for your private 1-on-1 session." },
  { n: 4, title: "Start Learning",   desc: "Join the WhatsApp call at your scheduled time and begin your spiritual journey!" },
];

const FAQS = [
  {
    q: "Do I have to turn my camera on during the class?",
    a: "Not at all. While video can help the teacher correct your pronunciation (Makharij), it is entirely optional. You can choose to have audio-only classes via WhatsApp.",
  },
  {
    q: "What age groups do the female teachers teach?",
    a: "Our female scholars teach girls of all ages (from 5 years old) and adult women. We have specialized teachers who are great with young kids, as well as scholars for advanced adult learning.",
  },
  {
    q: "Do you teach specific Fiqh rulings for women?",
    a: "Yes. Many sisters feel more comfortable asking female-specific Fiqh questions (Ahkam-e-Niswan) to a female scholar. Our Aalimat are fully equipped to guide you on these matters according to your Marja.",
  },
  {
    q: "What if my schedule changes because of my kids or work?",
    a: "We completely understand that life gets busy, especially for mothers and professionals. Our teachers are highly accommodating and sessions can be rescheduled with simple prior notice.",
  },
  {
    q: "Is there a trial class available?",
    a: "Yes! We offer a free introductory session so you can meet your Aalima, experience her teaching style, and ensure you feel completely comfortable.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function FemaleTeachersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white dark:bg-[#030102] transition-colors duration-300">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A0B12] via-[#14080D] to-[#0A0406]">
        {/* Subtle radial glow matching the Rose theme for Sisters */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(225,29,72,0.08)_0%,transparent_65%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          {/* Back + Breadcrumb */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <nav className="flex items-center gap-1.5 text-xs text-gray-500">
              <Link href="/" className="transition hover:text-gray-300">Home</Link>
              <ChevronRight className="h-3 w-3 opacity-40" />
              <Link href="/teachers" className="transition hover:text-gray-300">Teachers</Link>
              <ChevronRight className="h-3 w-3 opacity-40" />
              <span className="text-rose-400">Female Teachers</span>
            </nav>
            <Link href="/teachers"
              className="flex items-center gap-1.5 text-xs font-medium text-gray-400 transition hover:text-rose-400">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Teachers
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-900/60 px-3 py-1 text-xs font-semibold text-rose-300 ring-1 ring-rose-700/50">
                  <BadgeCheck className="h-3.5 w-3.5" /> For Sisters & Girls
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-900/40 px-3 py-1 text-xs font-semibold text-emerald-400 ring-1 ring-emerald-700/40">
                  <MessageCircle className="h-3.5 w-3.5" /> Online via WhatsApp
                </span>
              </div>

              <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Online Shia<br />
                <span className="text-rose-400">Female Quran Teachers</span>
              </h1>
              <p className="mb-6 max-w-lg text-sm leading-relaxed text-gray-400 sm:text-base">
                A comfortable, private, and inspiring learning environment for sisters.
                Learn Quran, Fiqh (Ahkam-e-Niswan), and Dinyaat from qualified female scholars (Aalimat).
              </p>

              {/* Key stats */}
              <div className="mb-8 flex flex-wrap gap-6">
                {[
                  { icon: ShieldCheck, val: "100%",  label: "Private" },
                  { icon: Star,        val: "4.9",   label: "Avg Rating" },
                  { icon: Globe,       val: "15+",   label: "Countries" },
                  { icon: BookOpen,    val: "Free",  label: "Trial Class" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <s.icon className="h-4 w-4 text-rose-500" />
                    <div>
                      <p className="text-base font-extrabold leading-none text-white">{s.val}</p>
                      <p className="text-[10px] tracking-wider text-gray-500 uppercase">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/+923394022926" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-700">
                  <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
                </a>
              </div>
            </div>

            {/* Right — Hero Image */}
            <div className="hidden lg:block">
              <div className="relative ml-auto h-[400px] w-[90%] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-rose-800/30">
                <Image
                  src="/images/teachers/female-teacher.webp" // Ensure this image is added to your public folder!
                  alt="Online Shia Female Quran Teacher"
                  fill
                  placeholder="blur"
                  blurDataURL="/images/teachers/female-teacher.webp"
                  className="object-cover"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B12] via-transparent to-transparent opacity-90" />
                
                {/* Floating Glassmorphism Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full text-white text-xl">
                      <Image src={logo} alt="Shia Quran Pak Academy Logo" width={100} height={100} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Dedicated Aalimat</p>
                      <p className="text-xs text-rose-200">Patient, Caring, and Qualified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT YOU'LL LEARN
      ══════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-[#030102]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-3xl">
              Subjects Taught by Our Aalimat
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              A comprehensive curriculum tailored for sisters and young girls.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_YOU_LEARN.map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-rose-50/30 p-5 transition hover:border-rose-300 dark:border-gray-800 dark:bg-gray-900/50">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-2xl shadow-sm dark:bg-gray-800">
                  {item.icon}
                </span>
                <div>
                  <p className="mb-1 text-sm font-bold text-gray-900 dark:text-gray-100">{item.title}</p>
                  <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE FEMALE TEACHERS
      ══════════════════════════════════════════ */}
      <section className="bg-gray-50 py-14 dark:bg-gray-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-3xl">
              Why Choose Our Female Scholars?
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Empowering sisters with authentic Islamic knowledge in a safe environment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_FEMALE.map((w) => (
              <div key={w.title} className="flex flex-col items-center text-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400">
                  <w.icon className="h-6 w-6" />
                </div>
                <p className="mb-2 text-sm font-bold text-gray-900 dark:text-gray-100">{w.title}</p>
                <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-3xl">
            How to Get Started
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            A simple process to connect with the right teacher.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-5 hidden h-px border-t-2 border-dashed border-gray-200 dark:border-gray-700 lg:block" />

          {HOW_STEPS.map((step) => (
            <div key={step.n} className="flex flex-col items-center text-center">
              <div className="relative z-10 mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-rose-600 text-sm font-black text-white shadow-md border-4 border-white dark:border-[#030102]">
                {step.n}
              </div>
              <p className="mb-1.5 text-sm font-bold text-gray-900 dark:text-gray-100">{step.title}</p>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="bg-gray-50 py-14 dark:bg-gray-900/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Have concerns about privacy or timing? Chat with us on WhatsApp.
            </p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <span className="pr-4 text-sm font-semibold text-gray-900 dark:text-gray-100">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 flex-shrink-0 text-gray-400 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="border-t border-gray-100 px-5 py-4 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900">
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 shadow-2xl relative">
          {/* Subtle background decoration */}
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 blur-2xl bg-rose-400"></div>

          <div className="relative flex flex-col items-center gap-6 px-8 py-10 text-center sm:flex-row sm:text-left">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
                <Image src={logo} alt="Shia Quran Pak Academy Logo" width={200} height={200} className="object-contain" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 text-xl font-extrabold text-white sm:text-2xl">
                Start Learning with a Verified Female Scholar Today
              </h3>
              <p className="text-sm leading-relaxed text-emerald-200">
                Comfortable, private, and flexible classes. Request a free trial to ensure she is the perfect fit for you or your daughter.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-shrink-0">
              <a href="https://wa.me/+923394022926" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-emerald-900 shadow-lg transition hover:bg-emerald-50">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
              <p className="text-xs font-semibold text-emerald-400">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}