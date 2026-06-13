// src/components/Footer/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import type { PageContent, Locale } from "@/types";

interface FooterProps {
  content: PageContent;
  locale: Locale;
}

export default function Footer({ content, locale }: FooterProps) {
  const isAr = locale === "ar";

  return (
    <footer className="relative bg-white border-t border-[#d9e2e8] overflow-hidden">
      {/* Top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div
          className={`grid md:grid-cols-3 gap-10 mb-10 ${isAr ? "text-right" : "text-left"}`}
        >
          {/* Brand column */}
          <div
            className={`md:col-span-1 ${isAr ? "order-3 md:order-1" : "order-1"}`}
          >
            <Link href={isAr ? "/" : "/en"} className="inline-block mb-4">
              <div className="relative w-[130px] h-[36px]">
                <Image
                  src="/wp-content/uploads/2026/05/logotemp.png"
                  alt="Adasa Vision"
                  fill
                  className="object-contain object-start"
                />
              </div>
            </Link>
            <p className="text-sm text-[#152D49]/75 leading-relaxed max-w-xs">
              {isAr
                ? "أنظمة رؤية صناعية ذكية لمراقبة جودة منتجاتك في الوقت الفعلي."
                : "Smart industrial vision systems for real-time product quality monitoring."}
            </p>

            <div className="mt-6 flex items-center gap-3">
              {/* Social placeholders */}
              {["linkedin", "twitter", "email"].map((s) => (
                <a
                  key={s}
                  href={s === "email" ? "mailto:info@adasavision.com" : "#"}
                  aria-label={s}
                  className="w-8 h-8 rounded-lg border border-[#d9e2e8] flex items-center justify-center
                             text-[#152D49]/70 hover:text-[#152D49] hover:border-[#67BBBD] transition-colors"
                >
                  {s === "linkedin" && (
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {s === "twitter" && (
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {s === "email" && (
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className={`${isAr ? "order-2" : "order-2"}`}>
            <h4 className="text-sm font-semibold text-[#152D49] mb-4 uppercase tracking-widest">
              {isAr ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="space-y-2">
              {(isAr
                ? [
                    { label: "من نحن", href: "#about" },
                    { label: "خدماتنا", href: "#services" },
                    { label: "القطاعات", href: "#industries" },
                    { label: "كيف يعمل النظام", href: "#how-it-works" },
                    { label: "تواصل معنا", href: "#contact" },
                  ]
                : [
                    { label: "About", href: "#about" },
                    { label: "Services", href: "#services" },
                    { label: "Industries", href: "#industries" },
                    { label: "How It Works", href: "#how-it-works" },
                    { label: "Contact", href: "#contact" },
                  ]
              ).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#152D49]/75 hover:text-[#152D49] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Language switcher */}
          <div className={`${isAr ? "order-1 md:order-3" : "order-3"}`}>
            <h4 className="text-sm font-semibold text-[#152D49] mb-4 uppercase tracking-widest">
              {isAr ? "اللغة" : "Language"}
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className={`inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg transition-all
                            ${
                              isAr
                                ? "bg-brand-500/10 text-brand-400 border border-brand-500/30"
                                : "text-[#152D49]/75 hover:text-[#152D49] hover:bg-[#67BBBD]/10"
                            }`}
              >
                🇸🇦 العربية
              </Link>
              <Link
                href="/en"
                className={`inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg transition-all
                            ${
                              !isAr
                                ? "bg-brand-500/10 text-brand-400 border border-brand-500/30"
                                : "text-[#152D49]/75 hover:text-[#152D49] hover:bg-[#67BBBD]/10"
                            }`}
              >
                🇺🇸 English
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`border-t border-[#d9e2e8] pt-6 flex flex-col sm:flex-row items-center justify-center 
                         ${isAr ? "sm:flex-row-reverse text-right" : "text-left"}`}
        >
          <p className="text-xs text-[#152D49]/70">{content.footerCopy}</p>
        </div>
      </div>
    </footer>
  );
}
