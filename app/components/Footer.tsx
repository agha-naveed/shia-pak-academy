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
                  href={l == "About Us" ? "/about-shia-quran-pak-academy" : `/${l.toLowerCase().replace(" ", "-")}`}
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
                href="https://wa.me/+923394022926"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <Phone className="h-4 w-4" />
                +92 339 4022926
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
            
          </div>
        </div>
      </div>
    </footer>
  );
}