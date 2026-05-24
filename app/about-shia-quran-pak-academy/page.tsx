"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  BookOpen,
  Users,
  Globe,
  MessageCircle,
  ShieldCheck,
  Target,
  Heart,
  Award,
  CheckCircle2,
} from "lucide-react";
import logo from "@/public/logo.png";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Authentic Teachings",
    desc: "We strictly follow the pure teachings of the Holy Quran and the Ahlulbayt (عليهم السلام), ensuring our students receive verified and accurate knowledge.",
  },
  {
    icon: Users,
    title: "Qualified Scholars",
    desc: "Our male and female teachers are vetted Hawza graduates and experts in Tajweed, Fiqh, and Tafseer, dedicated to nurturing every student.",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    desc: "Through WhatsApp and Zoom, we break down geographical barriers, making high-quality Shia Islamic education accessible from any country.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    desc: "Every student learns differently. We offer tailored 1-on-1 sessions and pace our lessons to fit the individual needs of kids, adults, and beginners.",
  },
];

const STATS = [
  { value: "500+", label: "Happy Students" },
  { value: "39+", label: "Qualified Teachers" },
  { value: "15+", label: "Countries Reached" },
  { value: "5k+", label: "Classes Delivered" },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-[#030102] transition-colors duration-300">

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1A0F] via-[#0D1F14] to-[#061008]">
        {/* Subtle radial glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(16,185,129,0.1)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          
          {/* Breadcrumb */}
          <div className="mb-8 flex justify-center sm:justify-start">
            <nav className="flex items-center gap-1.5 text-xs font-medium text-emerald-100/60">
              <Link href="/" className="transition hover:text-emerald-400">Home</Link>
              <ChevronRight className="h-3.5 w-3.5 opacity-50" />
              <span className="text-emerald-400">About Us</span>
            </nav>
          </div>

          <div className="text-center sm:text-left">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-2 shadow-xl sm:mx-0">
              <Image src={logo} alt="Shia Quran Pak Academy Logo" width={200} height={200} className="object-contain" />
            </div>
            
            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              About <span className="text-emerald-400">Shia Quran Pak Academy</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-emerald-100/70 sm:mx-0 sm:text-lg">
              A dedicated online platform on a mission to spread the authentic teachings of the Holy Quran and the Ahlulbayt (عليهم السلام) to Momineen all over the world.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OUR STORY / WHO WE ARE
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          
          {/* Left Text */}
          <div>
            <span className="mb-3 block text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-500 uppercase">
              Who We Are
            </span>
            <h2 className="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Empowering Minds with Divine Knowledge
            </h2>
            <div className="space-y-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
              <p>
                In today's fast-paced, digital world, finding authentic, reliable, and accessible Shia Islamic education can be a challenge. <strong>Shia Quran Pak Academy</strong> was founded with a single, profound goal: to connect Momineen and their children with the true essence of Islam, right from the comfort of their homes.
              </p>
              <p>
                We believe that learning the Quran is not just about reading Arabic text; it is about understanding the message, reciting it beautifully with Tajweed, and living by the ethics (Akhlaq) demonstrated by Prophet Muhammad (ﷺ) and his pure Household (ع).
              </p>
              <p>
                Whether you are a parent looking for a patient tutor for your child, a sister seeking a comfortable learning environment with an Aalima, or an adult wanting to deeply study Nahjul Balagha and Fiqh, we have tailored our academy to meet your exact needs.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="border-l-2 border-emerald-500 pl-4">
                  <p className="text-2xl font-black text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image / Graphic */}
          <div className="relative">
            {/* Background decorative blob */}
            <div className="absolute -inset-4 rounded-3xl bg-emerald-50 dark:bg-emerald-900/10 blur-2xl" />
            
            <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-2 shadow-xl dark:border-gray-800 dark:bg-gray-900">
              <div className="w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                <Image 
                  src="/images/about-hero.png" // Place an appropriate image in your public/images folder
                  alt="Islamic Studies at Shia Quran Pak Academy" 
                  width={800} 
                  height={600} 
                  className="h-full w-full object-contain"
                  loading="lazy"
                  fetchPriority="low"
                  placeholder="blur"
                  blurDataURL="/images/about-hero.png" // Place an appropriate image in your public/images folder
                />
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl dark:border-gray-800 dark:bg-gray-900 sm:p-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Learn. Believe. Practice.</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Our guiding philosophy</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          MISSION & VISION
      ══════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/30 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            
            {/* Mission Card */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900 sm:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                To provide a highly personalized, authentic, and accessible platform for online Shia Islamic education. We strive to instill a profound love for the Quran and the teachings of the Ahlulbayt (ع) in the hearts of our students, helping them build a strong spiritual foundation that guides their everyday lives.
              </p>
            </div>

            {/* Vision Card */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900 sm:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                <Globe className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                To become the most trusted global online academy for Shia Muslims. We envision a future where geographical boundaries do not prevent any Momin from learning authentic Fiqh, Tajweed, and Dinyaat directly from verified scholars and highly qualified teachers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CORE VALUES
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 text-center">
          <span className="mb-3 block text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-500 uppercase">
            Why We Are Different
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((val) => (
            <div key={val.title} className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 text-emerald-600 transition-transform hover:scale-110 dark:bg-gray-900 dark:text-emerald-500">
                <val.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">{val.title}</h3>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW WE OPERATE (Simplified)
      ══════════════════════════════════════════ */}
      <section className="border-t border-gray-100 bg-white py-16 dark:border-gray-800 dark:bg-[#030102] lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gray-50 dark:bg-gray-900">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                <h3 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">
                  Simple, Flexible, and Effective Learning
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                  We have eliminated complicated software and login portals. We utilize tools you already use every day, like WhatsApp and Zoom, to make connecting with your teacher seamless. 
                </p>
                <ul className="space-y-4">
                  {[
                    "Live 1-on-1 or small group sessions",
                    "Choice of Male or Female teachers",
                    "Customized pace and curriculum",
                    "Flexible scheduling across all timezones",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Graphic Side */}
              <div className="relative min-h-[300px] bg-emerald-900 lg:min-h-full">
                {/* <div className="absolute inset-0 opacity-10 mix-blend-overlay" /> */}
                
                <Image 
                  src="/images/with_whatsapp.png" // Place an appropriate image in your public/images folder
                  alt="Islamic Studies at Shia Quran Pak Academy" 
                  width={800} 
                  height={600} 
                  className="h-full w-full object-contain"
                  loading="lazy"
                  fetchPriority="low"
                  placeholder="blur"
                  blurDataURL="/images/with_whatsapp.png" // Place an appropriate image in your public/images folder
                />
                {/* <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <h4 className="mb-2 text-xl font-bold text-white">Learn via WhatsApp</h4>
                  <p className="text-sm text-emerald-100/80">Direct, accessible, and hassle-free education.</p>
                </div> */}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 to-emerald-950 shadow-2xl relative">
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 blur-3xl bg-emerald-500"></div>

          <div className="relative flex flex-col items-center gap-8 px-8 py-12 text-center sm:py-16">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
                <Image src={logo} alt="Shia Quran Pak Academy Logo" width={200} height={200} className="object-contain" />
            </div>
            <div className="max-w-2xl">
              <h3 className="mb-4 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Ready to Start Your Journey?
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-emerald-200 sm:text-base">
                Join our growing family of students. Whether you are seeking a foundation in Quran reading or advanced Fiqh studies, we are here to guide you.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-emerald-900 shadow-xl transition hover:bg-emerald-50 sm:w-auto">
                  <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
                </a>
                <Link href="/courses"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-700 bg-transparent px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-800 sm:w-auto">
                  Explore Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}