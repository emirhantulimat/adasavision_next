import Image from "next/image";
import type { PageContent, Locale } from "@/types";

interface IndustriesProps {
  content: PageContent;
  locale: Locale;
}

const industryImages = [
  "/wp-content/uploads/2026/03/Gemini_Generated_Image_xxbxsvxxbxsvxxbx.png",
  "/wp-content/uploads/2026/03/Gemini_Generated_Image_m0p2utm0p2utm0p2.png",
  "/wp-content/uploads/2026/03/Gemini_Generated_Image_305eo5305eo5305e.png",
  "/wp-content/uploads/2026/03/Gemini_Generated_Image_jhxsxjjhxsxjjhxs.png",
];

export default function Industries({ content, locale }: IndustriesProps) {
  const isAr = locale === "ar";

  return (
    <section id="industries" className="relative py-20 lg:py-32 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-12 lg:mb-16 ${isAr ? "text-right" : "text-center"}`}>
          <div className={`flex items-center gap-3 mb-4 ${isAr ? "justify-end flex-row-reverse" : "justify-center"}`}>
            <div className="section-divider" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">
              {isAr ? "القطاعات" : "Industries"}
            </span>
          </div>
          <h2 className={`font-bold text-[#152D49] ${isAr ? "text-3xl sm:text-4xl" : "text-3xl sm:text-4xl font-en"}`}>
            {content.industriesTitle}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {content.industries.map((industry, idx) => (
            <div
              key={industry.name}
              className="glass rounded-xl p-3 border border-[#d9e2e8] flex flex-col items-center text-center gap-3"
            >
              <div className="relative w-full h-20 rounded-lg overflow-hidden">
                <Image
                  src={industryImages[idx % industryImages.length]}
                  alt={industry.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 16vw"
                />
              </div>
              <span className={`font-medium text-[#152D49] ${isAr ? "text-xs leading-relaxed" : "text-xs font-en"}`}>
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

