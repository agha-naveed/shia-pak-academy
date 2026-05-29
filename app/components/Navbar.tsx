"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import logo from "@/public/logo.png";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Courses",
    href: "/courses",
    dropdownItems: [
      { label: "Shia Yassarnal Quran Course Online", href: "/courses/online-shia-yassarnal-quran-course" },
      { label: "Shia Tajweed e Quran Course Online", href: "/courses/online-shia-quran-tajweed-course" },
      { label: "Shia Tafseer e Quran Course Online", href: "/courses/online-shia-tafseer-e-quran-course" },
      { label: "Shia Quran Memorization Course Online", href: "/courses/online-shia-quran-memorization-course" },
      { label: "Shia Quran Translation Course Online", href: "/courses/online-shia-quran-translation-course" },
      { label: "Shia Nehjul Balagha Course Online", href: "/courses/nahjul-balagha-course" },
      { label: "Shia Islamic Study Course Online", href: "/courses/shia-islamic-studies-course" },
    ],
  },
  { label: "Ziyarat", href: "/ziyarat" },
  {
    label: "Teachers",
    href: "/teachers",
    dropdownItems: [
      { label: "Shia Male Quran Teacher Online", href: "/teachers/shia-male-teacher" },
      { label: "Shia Female Quran Teacher Online", href: "/teachers/shia-female-teacher" },
      { label: "Shia Quran Tutors Online", href: "/teachers/online-shia-tutors" },
    ],
  },
  { label: "Blogs", href: "/blogs" },
  { label: "About", href: "/about-shia-quran-pak-academy" },
  {
    label: "More",
    href: "#",
    dropdownItems: [
      { label: "Online Shia Quran Classes", href: "/more/shia-quran-classes-online" },
      { label: "Online Shia Quran Lesson", href: "/more/shia-quran-lesson-online" },
      { label: "Online Shia Quran Education", href: "/more/shia-quran-education-online" },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering the theme toggle after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleMobileDropdown = (label: string) => {
    setActiveMobileDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-white border-gray-100 transition-colors duration-300 dark:bg-gray-950 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          
          {/* Logo */}
          <div className="flex shrink-0 items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center">
                <Image src={logo} alt="Shia Quran Pak Academy Logo" width={100} height={100} />
              </div>
              <span className="text-lg font-bold leading-4 text-gray-900 dark:text-gray-100">
                Shia Quran <br /> <span className="text-[13px] tracking-[1.10px] dark:text-gray-400 text-black/70 font-medium">Pak Academy</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-5 lg:gap-8">
            {NAV_ITEMS.map((item, index) => {
              // Menus on the right half of the navbar open towards the left to prevent overflow
              const dropdownAlignment = index > 2 ? "right-0" : "left-0";

              return (
                <div key={item.label} className="group relative py-4">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400"
                  >
                    {item.label}
                    {item.dropdownItems && (
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Desktop Dropdown Menu */}
                  {item.dropdownItems && (
                    <div className={`absolute top-full invisible flex w-64 translate-y-2 flex-col gap-1 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-gray-800 dark:bg-gray-900 ${dropdownAlignment}`}>
                      {item.dropdownItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-emerald-400"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2">

            <button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-gray-900 transition-colors hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle Dark Mode"
            >
              {mounted ? (
                currentTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />
              ) : (
                <div className="h-5 w-5" /> // Placeholder to prevent layout shift
              )}
            </button>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-900 transition-colors hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b bg-white border-gray-200 transition-colors dark:bg-gray-900 dark:border-gray-800">
          <div className="space-y-1 px-4 pb-4 pt-2 max-h-[80vh] overflow-y-auto">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col">
                <div className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <Link
                    href={item.href}
                    onClick={() => {
                      if (!item.dropdownItems) setMobileMenuOpen(false);
                    }}
                    className="text-base font-medium text-gray-600 dark:text-gray-400 flex-1"
                  >
                    {item.label}
                  </Link>
                  {item.dropdownItems && (
                    <button
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="p-1 text-gray-500 dark:text-gray-400"
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          activeMobileDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Submenu Dropdown */}
                {item.dropdownItems && activeMobileDropdown === item.label && (
                  <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-emerald-100 pl-3 dark:border-gray-700">
                    {item.dropdownItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}