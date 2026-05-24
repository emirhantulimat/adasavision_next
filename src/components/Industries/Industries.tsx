// src/components/Industries/Industries.tsx
import type { PageContent, Locale } from "@/types";

interface IndustriesProps {
  content: PageContent;
  locale: Locale;
}

// Industry icon map
const industryIcons: Record<string, string> = {
  // Arabic
  "صناعات التعبئة والتغليف": "📦",
  "الصناعات الغذائية": "🍎",
  "الصناعات الدوائية": "💊",
  "الصناعات النسيجية": "🧵",
  "الصناعات التصنيعية": "⚙️",
  "صناعة البلاستيك": "🧴",
  // English
  "Packaging": "📦",
  "Food Industry": "🍎",
  "Pharmaceuticals": "💊",
  "Textile": "🧵",
  "Manufacturing": "⚙️",
  "Plastics": "🧴",
};

export default function Industries({ content, locale }: IndustriesProps) {
  const isAr = locale === "ar";

  return (
    <section
      id="industries"
      className="relative py-20 lg:py-32 bg-dark-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className={`mb-12 lg:mb-16 ${isAr ? "text-right" : "text-center"}`}>
          <div className={`flex items-center gap-3 mb-4 ${isAr ? "justify-end flex-row-reverse" : "justify-center"}`}>
            <div className="section-divider" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">
              {isAr ? "القطاعات" : "Industries"}
            </span>
          </div>

          <h2
            className={`font-bold text-white ${
              isAr ? "text-3xl sm:text-4xl" : "text-3xl sm:text-4xl font-en"
            }`}
          >
            {content.industriesTitle}
          </h2>

          {!isAr && (
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Advanced industrial vision solutions tailored for a wide range of sectors.
            </p>
          )}
          {isAr && (
            <p className="mt-4 text-slate-400 max-w-2xl ms-auto">
              نقدم حلول رؤية صناعية متقدمة مصممة لتلبية احتياجات مجموعة واسعة من القطاعات.
            </p>
          )}
        </div>

        {/* Industries grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {content.industries.map((industry, idx) => (
            <div
              key={industry.name}
              className="group glass rounded-2xl p-5 border border-slate-700/40 card-hover
                         flex flex-col items-center justify-center text-center gap-3
                         cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl
                           bg-brand-500/10 border border-brand-500/20
                           group-hover:bg-brand-500/20 group-hover:border-brand-400/40
                           transition-all duration-300"
              >
                {industryIcons[industry.name] ?? "🏭"}
              </div>
              <span
                className={`font-medium text-slate-300 group-hover:text-white transition-colors
                            ${isAr ? "text-xs leading-relaxed" : "text-xs font-en"}`}
              >
                {industry.name}
              </span>
            </div>
          ))}
        </div>

        {/* Wide image banner */}
        <div className="mt-16 relative rounded-2xl overflow-hidden h-56 lg:h-80 glass border border-brand-500/15">
          {/* Placeholder gradient since we don't have a wide banner image */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-800 via-brand-950/30 to-dark-800" />

          {/* Animated scan lines for industrial feel */}
          <div className="absolute inset-0 flex flex-col justify-around opacity-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-px bg-brand-400/40" />
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`text-center ${isAr ? "font-ar" : "font-en"}`}>
              <div className="text-4xl lg:text-6xl font-bold gradient-text mb-3">
                {isAr ? "كل قطاع. كل منتج." : "Every Sector. Every Product."}
              </div>
              <p className="text-slate-400 text-sm lg:text-base">
                {isAr ? "رؤية ذكية تضمن الجودة في كل مكان" : "Intelligent vision ensuring quality everywhere"}
              </p>
            </div>
          </div>

          {/* Corner markers */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-brand-400/50" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-brand-400/50" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-brand-400/50" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-brand-400/50" />
        </div>
      </div>
    </section>
  );
}
