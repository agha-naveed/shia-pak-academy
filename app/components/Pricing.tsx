"use client";

import { useState } from "react";
import { Users, Clock } from "lucide-react";

const PACKAGES = {
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

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"individual" | "family">("individual");

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#030102]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">Choose Your Plan</h2>
          <div className="inline-flex rounded-xl bg-gray-200 dark:bg-gray-800 p-1">
            <button 
              onClick={() => setActiveTab("individual")}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition ${activeTab === "individual" ? "bg-white dark:bg-gray-700 shadow text-emerald-600" : "text-gray-600 dark:text-gray-400"}`}>
              Individual
            </button>
            <button 
              onClick={() => setActiveTab("family")}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition ${activeTab === "family" ? "bg-white dark:bg-gray-700 shadow text-emerald-600" : "text-gray-600 dark:text-gray-400"}`}>
              Family
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES[activeTab].map((p, i) => (
            <div key={i} className={`relative rounded-2xl p-6 border flex flex-col ${p.popular ? "border-emerald-500 bg-white dark:bg-gray-900 shadow-xl" : "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"}`}>
              {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Recommended</span>}
              
              <div className="text-center mb-6">
                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-2">{p.title}</h3>
                <div className="text-4xl font-extrabold text-gray-900 dark:text-white">${p.price}</div>
                <p className="text-xs text-emerald-600 font-semibold mt-2">{p.trial}</p>
              </div>

              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Clock className="h-4 w-4 text-emerald-500" /> {p.weekly} / {p.monthly}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Users className="h-4 w-4 text-emerald-500" /> {p.students} Student{p.students > 1 ? 's' : ''}
                </div>
              </div>

              {/* Improved Currency Visibility */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mt-auto">
                <p className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Also Available In</p>
                {p.currency.aud > 0 ? (
                   <div className="flex flex-wrap gap-2 text-[12px] font-bold text-gray-800 dark:text-white">
                      <span>AUD ${p.currency.aud}</span>
                      <span>•</span>
                      <span>€{p.currency.eur}</span>
                      <span>•</span>
                      <span>£{p.currency.gbp}</span>
                   </div>
                ) : (
                  <p className="text-[12px] text-gray-400">Currency options on request</p>
                )}
              </div>

              <a href="https://wa.me/+923394022926" className="mt-6 block w-full text-center py-3 bg-emerald-600 text-white text-sm font-bold rounded-xl hover:bg-emerald-700 transition">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}