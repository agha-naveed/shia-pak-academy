import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#030102] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image/Graphic Side */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-emerald-100/50 dark:bg-emerald-900/10 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden aspect-square sm:aspect-[4/3] border border-gray-100 dark:border-gray-800 shadow-xl bg-gray-50 dark:bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/80 to-transparent z-10" />
              <Image 
                src="/images/about-us.jpg" 
                alt="Shia Quran Pak Academy Learning" 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <p className="text-white font-bold text-lg mb-1">Our Mission</p>
                  <p className="text-emerald-50 text-sm leading-relaxed">
                    To spread the authentic teachings of the Holy Quran and the Ahlulbayt (ع) across the globe through accessible, high-quality online education.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <span className="mb-3 block text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-500 uppercase">
              Welcome to the Academy
            </span>
            <h2 className="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl leading-tight">
              Empowering Souls Through <span className="text-emerald-600">Divine Knowledge</span>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-gray-600 dark:text-gray-400">
              Shia Quran Pak Academy is a premier online institution dedicated to providing authentic Islamic education. We bridge the gap between traditional Hawza learning and modern digital convenience, ensuring that you and your children can connect with the Quran from the comfort of your home.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Hawza Certified Scholars",
                "1-on-1 Interactive Classes",
                "Focus on Shia Aqaid & Fiqh",
                "Dedicated Female Tutors"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/about-shia-quran-pak-academy" className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-500 font-bold hover:text-emerald-700 transition">
              Read Our Full Story <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}