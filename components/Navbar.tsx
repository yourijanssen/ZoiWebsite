"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [language, setLanguage] = useState<"en" | "el">("en"); // "en" or "el"

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "el" : "en");
  };

  const navLinks = {
    en: {
      about: "Who is Zoi?",
      therapy: "Psychotherapy",
      contact: "Contact",
    },
    el: {
      about: "Ποια είναι η Ζωή;",
      therapy: "Ψυχοθεραπεία",
      contact: "Επικοινωνία",
    },
  };

  return (
    <header className="w-full">
      <div className="w-full h-1 bg-[#0D5EAF]"></div>

      <nav className="w-full h-14 flex items-center justify-between bg-white px-4 sm:px-8 shadow-md">
        
        {/* Spacer for balance */}
        <div className="w-16 hidden sm:block"></div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-10">
          <li>
            <Link
              href="/generalInfo"
              className="px-4 py-2 text-sm font-semibold tracking-wide text-[#0D5EAF]
                         border-2 border-[#0D5EAF] rounded
                         hover:bg-[#0D5EAF] hover:text-white
                         transition-all duration-300"
            >
              {navLinks[language].about}
            </Link>
          </li>
          <li>
            <Link
              href="/psygotherapie"
              className="px-4 py-2 text-sm font-semibold tracking-wide text-[#0D5EAF]
                         border-2 border-[#0D5EAF] rounded
                         hover:bg-[#0D5EAF] hover:text-white
                         transition-all duration-300"
            >
              {navLinks[language].therapy}
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-semibold tracking-wide text-[#0D5EAF]
                         border-2 border-[#0D5EAF] rounded
                         hover:bg-[#0D5EAF] hover:text-white
                         transition-all duration-300"
            >
              {navLinks[language].contact}
            </Link>
          </li>
        </ul>

        {/* Language Switcher */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#0D5EAF] 
                     border border-[#0D5EAF]/30 rounded-full
                     hover:bg-[#0D5EAF]/10 transition-all duration-300"
          aria-label="Toggle language"
        >
          <span className={language === "en" ? "opacity-100" : "opacity-40"}>EN</span>
          <span className="text-[#0D5EAF]/30">|</span>
          <span className={language === "el" ? "opacity-100" : "opacity-40"}>ΕΛ</span>
        </button>
      </nav>

      <div className="w-full h-1 bg-[#0D5EAF]"></div>
    </header>
  );
}