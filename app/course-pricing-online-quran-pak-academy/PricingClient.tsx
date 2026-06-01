"use client";

import { useState } from "react";
import { 
  Users, Clock, CheckCircle2, BookOpen, 
  Shield, Calendar, MessageCircle, ChevronDown 
} from "lucide-react";

// --- Configuration ---
const WHATSAPP_URL = "https://wa.me/923394022926";

// --- Types & Data ---
interface CurrencyOptions {
  aud: number;
  eur: number;
  gbp: number;
}

interface PricingPackage {
  title: string;
  price: number;
  weekly: string;
  monthly: string;
  trial: string;
  currency: CurrencyOptions;
  students: number;
  popular?: boolean;
}

const PACKAGES: Record<"individual" | "family", PricingPackage[]> = {
  individual: [
    { title: "Starter", price: 30, weekly: "1 Day/Week", monthly: "4 Days/Month", trial: "1 Day Free Trial", currency: { aud: 43, eur: 26, gbp: 25 }, students: 1 },
    { title: "Basic", price: 35, weekly: "2 Days/Week", monthly: "8 Days/Month", trial: "1 Day Free Trial", currency: { aud: 50, eur: 31, gbp: 26 }, students: 1 },
    { title: "Popular", price: 40, weekly: "3 Days/Week", monthly: "12 Days/Month", trial: "1 Day Free Trial", currency: { aud: 56, eur: 35, gbp: 30 }, students: 1, popular: true },
    { title: "Advanced", price: 50, weekly: "5 Days/Week", monthly: "20 Days/Month", trial: "1 Day Free Trial", currency: { aud: 70, eur: 43, gbp: 37 }, students: 1 },
  ],
  family: [
    { title: "Family Basic", price: 55, weekly: "1 Day/Week", monthly: "4 Days/Month", trial: "2 Days Free Trial", currency: { aud: 77, eur: 48, gbp: 41 }, students: 2 },
    { title: "Family Standard", price: 60, weekly: "2 Days/Week", monthly: "8 Days/Month", trial: "2 Days Free Trial", currency: { aud: 91, eur: 56, gbp: 48 }, students: 2, popular: true },
    { title: "Family Plus", price: 65, weekly: "3 Days/Week", monthly: "12 Days/Month", trial: "2 Days Free Trial", currency: { aud: 84, eur: 52, gbp: 44 }, students: 2 },
    { title: "Family Pro", price: 70, weekly: "5 Days/Week", monthly: "20 Days/Month", trial: "2 Days Free Trial", currency: { aud: 98, eur: 60, gbp: 52 }, students: 2 },
  ]
};

const FAQS = [
  {
    question: "Do I have to pay before the free trial?",
    answer: "No, the free trial is absolutely free. We do not require any credit card or payment information until you decide to enroll in a regular plan after your trial classes."
  },
  {
    question: "Are there female tutors available for sisters and kids?",
    answer: "Yes, we have a dedicated team of highly qualified female Quran tutors for sisters, daughters, and young children to ensure a comfortable learning environment."
  },
  {
    question: "What happens if I miss a scheduled class?",
    answer: "If you inform your tutor in advance, we will do our best to arrange a makeup class during the same week. However, unnotified absences cannot be compensated."
  },
  {
    question: "How do I pay my monthly fee?",
    answer: "We accept secure payments via PayPal, Stripe, Western Union, and direct bank transfers. Our support team will guide you through the process once you choose your plan."
  }
];

const FEATURES = [
  { icon: Shield, title: "Certified Tutors", desc: "Learn from highly qualified, carefully vetted Hafiz and Qari instructors." },
  { icon: Calendar, title: "Flexible Schedule", desc: "Choose class timings that perfectly fit your daily routine and time zone." },
  { icon: BookOpen, title: "Custom Syllabus", desc: "From Noorani Qaida to advanced Tajweed, tailored to your pace." },
  { icon: Users, title: "1-on-1 Sessions", desc: "Undivided attention to ensure perfect pronunciation and rapid progress." },
];

// --- Sub-components ---
const PricingCard = ({ p }: { p: PricingPackage }) => (
  <div className={`relative rounded-2xl p-6 border flex flex-col h-full ${p.popular ? "border-emerald-500 bg-white dark:bg-gray-900 shadow-xl scale-105 z-10" : "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"}`}>
    {p.popular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        Most Popular
      </span>
    )}
    
    <div className="text-center mb-6">
      <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-2">{p.title}</h3>
      <div className="text-4xl font-extrabold text-gray-900 dark:text-white">${p.price}<span className="text-sm font-medium text-gray-400">/mo</span></div>
      <p className="text-xs text-emerald-600 font-semibold mt-2 bg-emerald-50 dark:bg-emerald-900/30 py-1 rounded-full">{p.trial}</p>
    </div>

    <div className="space-y-4 mb-6 flex-grow">
      <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
        <Clock className="h-5 w-5 text-emerald-500 flex-shrink-0" aria-hidden="true" /> 
        <span><strong className="text-gray-900 dark:text-white">{p.weekly}</strong> ({p.monthly})</span>
      </div>
      <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
        <Users className="h-5 w-5 text-emerald-500 flex-shrink-0" aria-hidden="true" /> 
        <span>Valid for <strong className="text-gray-900 dark:text-white">{p.students} Student{p.students > 1 ? 's' : ''}</strong></span>
      </div>
      <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
        <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" aria-hidden="true" /> 
        <span>1-on-1 Live Sessions</span>
      </div>
    </div>

    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mt-auto border border-gray-100 dark:border-gray-700">
      <p className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 text-center">Equivalent To</p>
      {p.currency.aud > 0 ? (
         <div className="flex justify-center gap-3 text-[13px] font-bold text-gray-700 dark:text-gray-300">
            <span>AUD ${p.currency.aud}</span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span>€{p.currency.eur}</span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span>£{p.currency.gbp}</span>
         </div>
      ) : (
        <p className="text-[12px] text-center text-gray-400">Custom rates available</p>
      )}
    </div>

    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`mt-6 block w-full text-center py-3 text-sm font-bold rounded-xl transition ${p.popular ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-600/20" : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"}`}>
      Enroll Now
    </a>
  </div>
);

// --- Main Page Component ---
export default function CoursePricingPage() {
  const [activeTab, setActiveTab] = useState<"individual" | "family">("individual");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#030102] selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* 1. HERO SECTION */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
          Affordable Online Quran Classes <br className="hidden md:block" /> 
          <span className="text-emerald-600">For The Whole Family</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Start your journey of learning the Holy Quran with expert tutors. Choose a plan that fits your schedule. No hidden fees, cancel anytime.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#pricing" className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition">
            View Pricing Plans
          </a>
          <a href={WHATSAPP_URL} className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5 text-emerald-500" />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* 2. VALUE PROPS / FEATURES */}
      <section className="py-12 bg-white dark:bg-[#0a0708] border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-4">
                  <feat.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRICING SECTION */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">Transparent Tuition Fees</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">All plans include 1-on-1 live interactive sessions, monthly progress reports, and access to learning materials.</p>
          
          {/* Custom Tab Toggle */}
          <div className="inline-flex rounded-full bg-white dark:bg-gray-800 p-1.5 shadow-sm border border-gray-200 dark:border-gray-700" role="tablist">
            <button 
              role="tab"
              aria-selected={activeTab === "individual"}
              onClick={() => setActiveTab("individual")}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === "individual" ? "bg-emerald-600 text-white shadow-md" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`}>
              Individual Plans
            </button>
            <button 
              role="tab"
              aria-selected={activeTab === "family"}
              onClick={() => setActiveTab("family")}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === "family" ? "bg-emerald-600 text-white shadow-md" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`}>
              Family Plans (Save 15%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {PACKAGES[activeTab].map((pkg, index) => (
            <PricingCard key={`${activeTab}-${index}`} p={pkg} />
          ))}
        </div>
      </section>

      {/* 4. HOW IT WORKS (Timeline) */}
      <section className="py-16 bg-white dark:bg-[#0a0708]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-12">How to Get Started?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gray-200 dark:bg-gray-800 -z-10"></div>
            
            {[
              { step: "1", title: "Book a Trial", desc: "Contact us on WhatsApp to schedule your free trial class." },
              { step: "2", title: "Take Assessment", desc: "Meet your tutor and find the right learning level for you." },
              { step: "3", title: "Start Learning", desc: "Choose a pricing plan above and begin your regular classes." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center bg-white dark:bg-[#0a0708] z-10">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 text-2xl font-bold mb-4 border-4 border-white dark:border-[#0a0708]">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-400">Got questions? We've got answers.</p>
        </div>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-[#0a0708] overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`} />
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-16 px-4 bg-emerald-600 dark:bg-emerald-900 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to start your Quran journey?</h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">
            Join hundreds of satisfied students globally. Claim your free trial classes today with no obligations.
          </p>
          <a href={WHATSAPP_URL} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold rounded-full hover:bg-gray-50 transition shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
            <MessageCircle className="w-5 h-5" />
            Message Us on WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}