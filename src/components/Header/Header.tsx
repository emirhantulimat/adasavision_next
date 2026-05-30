// src/components/Header/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/types";

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const isAr = locale === "ar";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const otherLocale = isAr ? "en" : "ar";
  const otherHref   = isAr ? "/en" : "/";
  const otherLabel  = isAr ? "English 🇺🇸" : "العربية 🇸🇦";

  const navLinks = isAr
    ? [
        { label: "من نحن",     href: "#about" },
        { label: "خدماتنا",    href: "#services" },
        { label: "القطاعات",   href: "#industries" },
        { label: "تواصل معنا", href: "#contact" },
      ]
    : [
        { label: "About",     href: "#about" },
        { label: "Services",  href: "#services" },
        { label: "Industries",href: "#industries" },
        { label: "Contact",   href: "#contact" },
      ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-[#d9e2e8]"
          : "bg-[#F2F2F2]/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link
            href={isAr ? "/" : "/en"}
            className="flex items-center gap-3 shrink-0"
          >
            <div className="relative w-[140px] h-[40px]">
              <Image
                src="/wp-content/uploads/2026/05/logotemp.png"
                alt="Adasa Vision"
                fill
                className="object-contain object-start"
                priority
                unoptimized={false}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#152D49] hover:text-[#67BBBD] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language switcher + mobile hamburger */}
          <div className="flex items-center gap-3">
            {/* Language button */}
            <Link
              href={otherHref}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold
                         rounded-full border border-[#67BBBD] text-[#152D49]
                         hover:bg-[#67BBBD]/15
                         transition-all duration-200"
            >
              {otherLabel}
            </Link>

            {/* Hamburger (mobile) */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-md text-[#152D49] hover:text-[#152D49]
                         hover:bg-[#67BBBD]/15 transition"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="w-5 flex flex-col gap-1">
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white/98 backdrop-blur-xl border-t border-[#d9e2e8] px-4 py-4">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-[#152D49]
                           hover:text-[#152D49] hover:bg-[#67BBBD]/15
                           rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Link
            href={otherHref}
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5
                       text-sm font-semibold rounded-full
                       border border-[#67BBBD] text-[#152D49]
                       hover:bg-[#67BBBD]/15 transition"
          >
            {otherLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
