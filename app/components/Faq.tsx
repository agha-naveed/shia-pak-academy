"use client"

import { ChevronDown } from "lucide-react";
import { useState } from "react";


export default function Faq({FAQS}: any) {
    const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq: any) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
            }}
        />
        <section className="bg-gray-50 py-16 dark:bg-gray-900/30 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-3">
            {FAQS.map((faq:any, i:number) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <h3 className="pr-4 text-sm font-bold text-gray-900 dark:text-white">{faq.q}</h3>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="border-t border-gray-100 px-6 py-5 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900">
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
    )
}
