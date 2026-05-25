import Link from "next/link";
import { BookOpen, MessageCircle } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#030102]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 via-emerald-900 to-gray-900 shadow-2xl">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-emerald-500 opacity-20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-emerald-600 opacity-20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 px-6 py-16 sm:px-16 sm:py-20 text-center">
            <BookOpen className="h-12 w-12 text-emerald-400 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Begin Your Spiritual Journey Today
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-emerald-100/80 mb-10 leading-relaxed">
              Whether you are a beginner taking your first steps in reading the Qaida, or seeking deep Tafseer knowledge, we are here to guide you. Book a complimentary trial class and experience our methodology firsthand.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://wa.me/+923394022926" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-gray-100 transition"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
              <Link 
                href="/courses"
                className="w-full sm:w-auto flex items-center justify-center gap-2 border border-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-800/50 transition"
              >
                Explore Courses
              </Link>
            </div>
            <p className="mt-6 text-xs text-emerald-300/60 font-medium tracking-wide">
              NO CREDIT CARD REQUIRED FOR TRIAL CLASS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}