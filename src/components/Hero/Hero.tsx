// src/components/Hero/Hero.tsx
import type { PageContent, Locale } from "@/types";
import Image from "next/image";

interface HeroProps {
  content: PageContent;
  locale: Locale;
}

export default function Hero({ content, locale }: HeroProps) {
  const isAr = locale === "ar";

  return (
    <section
      className="relative min-h-screen flex items-center hero-bg overflow-hidden pt-16"
      aria-label={isAr ? "القسم الرئيسي" : "Hero section"}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,174,219,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />

      {/* Orb glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-brand-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left / Text column */}
          <div className={`${isAr ? "lg:order-2" : "lg:order-1"}`}>

            {/* Tag chip */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5
                            bg-brand-500/10 border border-brand-500/25 rounded-full
                            text-xs font-semibold text-brand-400 uppercase tracking-widest
                            animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              {isAr ? "رؤية صناعية ذكية" : "Industrial AI Vision"}
            </div>

            {/* Main heading */}
            <h1
              className={`font-bold leading-tight mb-6 animate-fade-up opacity-0 delay-100
                          ${isAr
                            ? "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
                            : "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-en"
                          }`}
            >
              <span className="text-white">{content.heroTitle.split(" ").slice(0, isAr ? 2 : 2).join(" ")} </span>
              <span className="gradient-text">{content.heroTitle.split(" ").slice(isAr ? 2 : 2).join(" ")}</span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-slate-400 max-w-lg mb-8 leading-relaxed animate-fade-up opacity-0 delay-200
                          ${isAr ? "text-lg" : "text-xl"}`}
            >
              {content.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className={`flex flex-wrap gap-4 animate-fade-up opacity-0 delay-300 ${isAr ? "justify-start" : "justify-start"}`}>
              <a href="#contact" className="btn-primary">
                {isAr ? "تواصل معنا" : "Get In Touch"}
                <svg className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold
                           rounded-lg border border-slate-600 text-slate-300
                           hover:border-brand-500/50 hover:text-brand-400
                           transition-all duration-200"
              >
                {isAr ? "خدماتنا" : "Our Services"}
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-12 grid grid-cols-3 gap-6 animate-fade-up opacity-0 delay-400">
              {(isAr
                ? [{ num: "99.9%", label: "دقة الكشف" }, { num: "24/7", label: "مراقبة مستمرة" }, { num: "ms", label: "وقت الاستجابة" }]
                : [{ num: "99.9%", label: "Detection Accuracy" }, { num: "24/7", label: "Continuous Monitoring" }, { num: "<1ms", label: "Response Time" }]
              ).map((stat) => (
                <div key={stat.label} className={`${isAr ? "text-right" : "text-left"}`}>
                  <div className="text-2xl font-bold gradient-text">{stat.num}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right / Visual column */}
          <div className={`${isAr ? "lg:order-1" : "lg:order-2"} flex justify-center`}>
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Outer glow ring */}
              <div className="absolute -inset-6 rounded-3xl bg-brand-500/5 blur-2xl animate-glow" />

              {/* Image frame */}
              <div className="relative glass rounded-2xl p-2 overflow-hidden">
                {/* Scan line effect */}
                <div
                  className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-brand-400/80 to-transparent animate-scan z-10 pointer-events-none"
                />

                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-dark-700">
                  <Image
                    src="https://adasavision.com/wp-content/uploads/2026/04/Gemini_Generated_Image_5w3hf85w3hf85w3h.png"
                    alt={isAr ? "نظام رؤية صناعية" : "Industrial vision system"}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
                </div>

                {/* Corner accent lines */}
                <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-brand-400/70 rounded-tl-sm" />
                <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-brand-400/70 rounded-tr-sm" />
                <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-brand-400/70 rounded-bl-sm" />
                <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-brand-400/70 rounded-br-sm" />
              </div>

              {/* Floating badge */}
              <div className={`absolute -bottom-4 ${isAr ? "-left-4" : "-right-4"}
                               glass rounded-xl px-4 py-3 border border-brand-500/20`}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-semibold text-brand-300">
                    {isAr ? "الذكاء الاصطناعي نشط" : "AI Active"}
                  </span>
                </div>
                <div className="text-xl font-bold text-white mt-0.5">99.9%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
    </section>
  );
}
