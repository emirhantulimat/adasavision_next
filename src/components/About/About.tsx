import Image from "next/image";
import type { PageContent, Locale } from "@/types";

interface AboutProps {
  content: PageContent;
  locale: Locale;
}

export default function About({ content, locale }: AboutProps) {
  const isAr = locale === "ar";

  return (
    <section id="about" className="bg-[#F2F2F2] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative min-h-[56vh] overflow-hidden rounded-2xl border border-[#2a3a4f] md:min-h-[60vh]">
          <Image
            src="/wp-content/uploads/2026/05/WhatsApp-Image-2025-12-11-at-16.28.36_eb002295-scaled.jpg"
            alt={isAr ? "من نحن" : "About us background"}
            fill
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/72 via-[#152D49]/70 to-[#000000]/76" />
          <div className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-[#000000]/72 to-transparent blur-xl" />
          <div className="absolute inset-y-0 right-0 w-[18%] bg-gradient-to-l from-[#000000]/72 to-transparent blur-xl" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(103,187,189,0.1)_0_1px,transparent_1px_24px)] opacity-35" />

          <div className={`relative z-10 flex min-h-[56vh] items-center justify-center p-6 text-center md:min-h-[60vh] md:p-10 ${isAr ? "font-ar" : "font-en"}`}>
            <div className="max-w-3xl">
              <div className="absolute left-1/2 top-1/2 -z-10 h-[72%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[28px] bg-[#152D49]/38 blur-xl" />
              <div className="absolute left-1/2 top-1/2 -z-10 h-[70%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-[#67BBBD]/20 bg-[#67BBBD]/8 backdrop-blur-[2px]" />
              <div className="mb-4 inline-flex items-center rounded-full border border-[#67BBBD]/45 bg-[#152D49]/35 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#67BBBD]">
                {isAr ? "من نحن" : "About Us"}
              </div>
              <h2 className={`mb-5 font-bold leading-tight text-white ${isAr ? "font-ar text-4xl sm:text-5xl" : "text-3xl sm:text-4xl lg:text-5xl"}`}>
                {content.aboutTitle}
              </h2>
              <p className={`mx-auto text-white/90 ${isAr ? "font-ar text-lg sm:text-xl leading-9 sm:leading-10" : "text-base leading-7 sm:text-lg"}`}>
                {content.aboutBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
