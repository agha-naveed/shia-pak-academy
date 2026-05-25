import { ShieldCheck, GraduationCap, Clock, Users } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/30 border-y border-gray-100 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="mb-3 block text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-500 uppercase">
            The Academy Advantage
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Why Students Worldwide Choose Us
          </h2>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
            We combine spiritual authenticity with professional teaching standards to deliver an unmatched online learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: ShieldCheck, 
              title: "Authentic Teachings", 
              desc: "Learn Quran, Fiqh, and Aqaid strictly according to the authentic traditions of the Ahlulbayt (ع)." 
            },
            { 
              icon: GraduationCap, 
              title: "Expert Scholars", 
              desc: "Our male and female teachers are carefully vetted graduates of recognized Hawza Ilmiyyas." 
            },
            { 
              icon: Clock, 
              title: "Flexible Scheduling", 
              desc: "Classes are available 24/7. Pick the days and times that perfectly fit your family's routine." 
            },
            { 
              icon: Users, 
              title: "Personalized 1-on-1", 
              desc: "Private sessions guarantee 100% of the teacher's attention for rapid progress and correction." 
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-emerald-500/50 transition duration-300 group">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}