import Image from "next/image";
import type { PageContent, Locale } from "@/types";

interface IndustriesProps {
  content: PageContent;
  locale: Locale;
}

const industryImages = [
  "/wp-content/uploads/2026/06/packaging-industry.jpg",
  "/wp-content/uploads/2026/06/food-industry.jpg",
  "/wp-content/uploads/2026/06/pharmaceuticals-industry.jpg",
  "/wp-content/uploads/2026/06/textile-industry.jpg",
  "/wp-content/uploads/2026/06/manufacturing-industry.jpg",
  "/wp-content/uploads/2026/06/plastics-industry.jpg",
];

export default function Industries({ content, locale }: IndustriesProps) {
  const isAr = locale === "ar";

  return (
    <section id="industries" className="relative py-20 lg:py-32 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık Alanı */}
        <div className={` mb-12 lg:mb-16 ${isAr ? "text-right" : "text-left"}`}>
          <div className={`flex items-center gap-3 mb-4 ${isAr ? "" : ""}`}>
            <div className="section-divider" />
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-400">
              {isAr ? "القطاعات" : "Industries"}
            </span>
          </div>
          <h2
            className={`font-bold text-[#152D49] text-2xl sm:text-3xl md:text-4xl ${!isAr && "font-en"}`}
          >
            {content.industriesTitle}
          </h2>
        </div>

        {/* Yenilenen Grid Yapısı (6'lı sıkışık yapıdan 3'lü/4'lü ferah yapıya geçiş) */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content.industries.map((industry, idx) => (
            <div
              key={industry.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-[#e5ecf0] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Görsel Alanı: Yükseklik h-48/h-56 yapılarak görsel görünürlüğü ciddi oranda artırıldı */}
              <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-gray-100">
                <Image
                  src={industryImages[idx % industryImages.length]}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Görselin üstüne hafif bir overlay ekleyerek derinlik kazandırdık */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>

              {/* Yazı Alanı */}
              <div
                className={`p-5 flex items-center justify-between ${isAr ? "" : "flex-row"}`}
              >
                <span
                  className={`font-semibold text-lg text-[#152D49] transition-colors duration-300 group-hover:text-brand-500 ${isAr ? "text-right leading-relaxed" : "text-left font-en"}`}
                >
                  {industry.name}
                </span>

                {/* Şık bir mini ok/ikon (Görsel görünürlüğünü ve premium hissi destekler) */}
                <span
                  className={`text-xl transition-transform duration-300 ${isAr ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"}`}
                >
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
