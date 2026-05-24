import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import logo from "@/public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center">
                <Image src={logo} alt="Logo" width={100} height={100} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Shia Quran Pak Academy</p>
                <p className="text-[10px] text-gray-600">Learn. Believe. Practice.</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-gray-600">
              A platform dedicated to spreading the teachings of Quran and Ahlulbayt (ع) for a better tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {["Quran", "Courses", "Ziyarat", "Teachers", "Blogs", "About Us", "Contact Us"].map((l) => (
                <Link
                  key={l}
                  href={`/${l.toLowerCase().replace(" ", "-")}`}
                  className="text-xs text-gray-600 transition hover:text-emerald-400"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:block" />

          {/* Need Help */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Need Help?
            </h3>
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-4">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <span className="text-xs font-medium text-white">Chat with us on WhatsApp</span>
              </div>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <Phone className="h-4 w-4" />
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex md:flex-row flex-col gap-2 max-w-7xl items-center justify-between px-4 py-5 text-center text-xs text-gray-700">
          <div>
            © 2026&nbsp;
            Shia Quran Pak Academy
            &nbsp;. All Rights Reserved.
          </div>
          <div className="group relative inline-flex justify-center">
            Developer:&nbsp;
            <Link 
              href={"https://aghanaveed.vercel.app"} 
              target="_blank"
              className="font-medium text-gray-600 transition-colors hover:text-emerald-400"
            >
              Agha Naveed
            </Link>

            {/* Popup Card */}
            <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-3 w-48 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:translate-y-1 group-hover:opacity-100">
              <div className="relative rounded-xl border border-gray-700 bg-gray-900 p-3 shadow-xl">
                <p className="text-sm font-bold text-white">Syed Naveed Abbas</p>
                <p className="mt-0.5 text-[10px] text-gray-400">Full-Stack Engineer & AI Architect</p>
                
                <div className="mt-2 flex flex-wrap justify-center gap-1.5">
                  <span className="rounded bg-emerald-900/30 px-1.5 py-0.5 text-[9px] font-medium tracking-wide text-emerald-400 border border-emerald-800/50">Next.js</span>
                  <span className="rounded bg-emerald-900/30 px-1.5 py-0.5 text-[9px] font-medium tracking-wide text-emerald-400 border border-emerald-800/50">MERN</span>
                </div>
                
                {/* Tooltip Triangle Arrow */}
                <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-gray-700 bg-gray-900" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}