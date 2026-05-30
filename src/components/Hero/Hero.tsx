import Image from "next/image";
import type { PageContent, Locale } from "@/types";

interface HeroProps {
  content: PageContent;
  locale: Locale;
}

type StatItem = { value: string; label: string };

export default function Hero({ content, locale }: HeroProps) {
  const isAr = locale === "ar";

  const stats: StatItem[] = isAr
    ? [
        { value: "دقة الكشف تصل إلى 99.9%", label: "" },
        { value: "المراقبة مستمرة على مدار 24/7", label: "" },
        { value: "زمن الاستجابة أقل من 20 ms", label: "" },
      ]
    : [
        { value: "99.9%", label: "Detection Accuracy" },
        { value: "24/7", label: "Continuous Monitoring" },
        { value: "<1ms", label: "Response Time" },
      ];

  return (
    <section
      className="relative mt-16 overflow-hidden bg-[#F2F2F2] lg:mt-20"
      aria-label={isAr ? "القسم الرئيسي" : "Hero section"}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/wp-content/uploads/2026/05/5u.png"
            alt="Hero background desktop"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "center 65%" }}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-x-0 top-0 h-[74%] md:hidden">
          <Image
            src="/wp-content/uploads/2026/05/a29ebc12-16cf-4c5b-bc92-d45af97e6843.jpg"
            alt="Hero background mobile"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "center 5%" }}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(21,45,73,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(21,45,73,0.04)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30" />
      </div>

      <div className="relative z-10 flex min-h-[calc(100vh+6rem)] flex-col md:min-h-[calc(100vh-5rem)]">
        {/* DÜZENLEME: Mobilde üstte (justify-start), büyük ekranda aşağıda (md:justify-end) durması için flex hizalaması değiştirildi. pt-6 ile mobilde daha yukarı çekildi. */}
        <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-start md:justify-end px-4 pb-12 pt-6 sm:px-8 md:pt-12 md:pb-[15vh] lg:px-12 lg:pb-[20vh] xl:pb-[22vh]">
          <div
            className={`relative w-full md:w-[60%] lg:w-[45%] max-w-[700px] ${
              isAr ? "ms-auto text-right font-ar" : "me-auto text-left"
            }`}
          >
            <div className="pointer-events-none absolute inset-[-3rem] hidden -z-10 rounded-[36px] md:block">
              <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(ellipse_at_center,rgba(103,187,189,0.32)_0%,rgba(103,187,189,0.18)_45%,rgba(103,187,189,0)_78%)] blur-xl" />
              <div className="absolute inset-0 rounded-[36px] bg-[repeating-linear-gradient(90deg,rgba(21,45,73,0.08)_0_1px,transparent_1px_18px)] opacity-35" />
            </div>

            <div className="inline-flex items-center rounded-full border border-[#67BBBD]/50 bg-white/85 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#152D49]">
              {isAr ? "رؤية صناعية ذكية" : "Industrial AI Vision"}
            </div>

            <h1
              className={`mt-4 sm:mt-5 font-bold text-[#152D49] ${
                isAr
                  ? "text-3xl leading-[1.3] sm:text-4xl sm:leading-[1.2] md:text-5xl lg:text-6xl"
                  : "font-en text-3xl leading-[1.1] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
              }`}
            >
              {content.heroTitle}
            </h1>

            <p
              className={`mt-3 sm:mt-5 text-[#152D49]/80 ${
                isAr
                  ? "ms-auto text-base leading-relaxed sm:text-lg sm:leading-9 md:text-xl md:leading-10"
                  : "text-base sm:text-lg md:text-xl"
              }`}
            >
              {content.heroSubtitle}
            </p>

            <div className="mt-8 hidden md:block">
              <div
                className={`flex flex-wrap gap-3 ${isAr ? "justify-end" : "justify-start"}`}
              >
                <a href="#contact" className="btn-primary">
                  {isAr ? "تواصل معنا" : "Get In Touch"}
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center rounded-lg border border-[#cfd7df] bg-white/90 px-6 py-3 text-sm font-semibold text-[#152D49] transition-colors hover:border-[#67BBBD]"
                >
                  {isAr ? "خدماتنا" : "Our Services"}
                </a>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={`${stat.value}-${index}`}
                    className="rounded-lg border border-[#d9e2e8] bg-white/85 px-3 py-3 sm:px-4"
                  >
                    {isAr ? (
                      <div className="text-sm font-semibold leading-7 text-[#152D49]">
                        {stat.value}
                      </div>
                    ) : (
                      <>
                        <bdi
                          className="text-xl font-bold text-[#152D49]"
                          dir="ltr"
                        >
                          {stat.value}
                        </bdi>
                        <div className="text-xs text-[#152D49]/70">
                          {stat.label}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 pb-6 sm:px-6 md:hidden">
          <div className="mx-auto max-w-7xl rounded-2xl border border-[#d9e2e8] bg-white/95 p-4 shadow-[0_14px_40px_rgba(21,45,73,0.12)] backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              {/* Arapça ise font-ar sınıfı eklendi */}
              <div
                className={`text-[10px] font-bold uppercase tracking-[0.2em] text-[#152D49]/50 ${isAr ? "font-ar" : ""}`}
              >
                {isAr ? "بدء سريع" : "Quick Start"}
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-[#67BBBD]/60 to-transparent" />
            </div>

            {/* Butonlar: Fontu zorlamak için !font-ar ve !font-bold eklendi */}
            <div className="flex gap-3">
              <a
                href="#contact"
                className={`btn-primary flex-[2] justify-center py-3 text-sm font-bold text-center shadow-sm ${isAr ? "!font-ar" : ""}`}
              >
                {isAr ? "تواصل معنا" : "Get In Touch"}
              </a>
              <a
                href="#services"
                className={`flex flex-[1] items-center justify-center rounded-lg border border-[#cfd7df] bg-white py-3 text-sm font-bold text-[#152D49] transition-all hover:border-[#67BBBD] hover:bg-[#F8FBFB] text-center ${isAr ? "!font-ar" : ""}`}
              >
                {isAr ? "خدماتنا" : "Services"}
              </a>
            </div>

            {/* İstatistikler */}
            <div className="mt-5 grid grid-cols-3 gap-2">
              {stats.map((stat, index) => (
                <div
                  key={`${stat.value}-${index}`}
                  className="flex flex-col items-center justify-center rounded-xl border border-[#eef2f5] bg-[#F8FBFB] p-2.5"
                >
                  {isAr ? (
                    // Arapça için fontu ve kalınlığı zorla
                    <div className="font-ar !font-black text-[14px] leading-tight text-[#152D49]">
                      {stat.value}
                    </div>
                  ) : (
                    <>
                      <bdi
                        className="block text-[15px] !font-black leading-none text-[#152D49]"
                        dir="ltr"
                      >
                        {stat.value}
                      </bdi>
                      <div className="mt-1.5 text-[9px] font-bold uppercase tracking-wide text-[#152D49]/60">
                        {stat.label}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
