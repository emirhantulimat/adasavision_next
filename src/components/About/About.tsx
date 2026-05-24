// src/components/About/About.tsx
import type { PageContent, Locale } from "@/types";

interface AboutProps {
  content: PageContent;
  locale: Locale;
}

const features = {
  ar: [
    { icon: "🤖", title: "مدعوم بالذكاء الاصطناعي", desc: "خوارزميات متقدمة تضمن دقة لا مثيل لها" },
    { icon: "⚡", title: "في الوقت الفعلي", desc: "كشف فوري ومعالجة في أجزاء من الثانية" },
    { icon: "🔗", title: "تكامل سهل", desc: "يتوافق مع خطوط الإنتاج الحالية بسلاسة" },
    { icon: "📊", title: "تحليلات شاملة", desc: "لوحات تحكم وتقارير تفصيلية للجودة" },
  ],
  en: [
    { icon: "🤖", title: "AI Powered", desc: "Advanced algorithms ensuring unmatched accuracy" },
    { icon: "⚡", title: "Real-Time", desc: "Instant detection and processing in milliseconds" },
    { icon: "🔗", title: "Easy Integration", desc: "Seamlessly integrates with existing production lines" },
    { icon: "📊", title: "Full Analytics", desc: "Detailed dashboards and quality reports" },
  ],
};

export default function About({ content, locale }: AboutProps) {
  const isAr = locale === "ar";
  const feats = isAr ? features.ar : features.en;

  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 bg-dark-900 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text column */}
          <div className={`${isAr ? "lg:order-1" : "lg:order-1"}`}>
            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="section-divider" />
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">
                {isAr ? "من نحن" : "About Us"}
              </span>
            </div>

            <h2
              className={`font-bold text-white mb-6 ${
                isAr ? "text-3xl sm:text-4xl" : "text-3xl sm:text-4xl font-en"
              }`}
            >
              {content.aboutTitle}
            </h2>

            <p className={`text-slate-400 leading-relaxed mb-8 ${isAr ? "text-base" : "text-lg"}`}>
              {content.aboutBody}
            </p>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {feats.map((feat) => (
                <div
                  key={feat.title}
                  className="glass rounded-xl p-4 card-hover border border-slate-700/50"
                >
                  <div className="text-2xl mb-2">{feat.icon}</div>
                  <h3 className="font-semibold text-white text-sm mb-1">{feat.title}</h3>
                  <p className="text-xs text-slate-500">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual column — animated stat cards */}
          <div className={`${isAr ? "lg:order-2" : "lg:order-2"} flex flex-col gap-4`}>
            <div className="glass rounded-2xl p-6 border border-brand-500/15">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  {isAr ? "دقة الكشف" : "Detection Accuracy"}
                </span>
                <span className="text-xs text-brand-400 font-bold">Live</span>
              </div>
              <div className="text-5xl font-bold gradient-text mb-2">99.9%</div>
              {/* Bar */}
              <div className="w-full h-2 bg-dark-600 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent"
                  style={{ width: "99.9%" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: isAr ? "صناعات تخدمها" : "Industries Served", value: "6+", icon: "🏭" },
                { label: isAr ? "حلول متكاملة" : "Integrated Solutions", value: "4+", icon: "🔧" },
                { label: isAr ? "وقت الكشف" : "Detection Speed", value: "<1ms", icon: "⚡" },
                { label: isAr ? "دعم مستمر" : "Continuous Support", value: "24/7", icon: "🛡️" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass rounded-xl p-4 border border-slate-700/40 card-hover"
                >
                  <div className="text-xl mb-2">{item.icon}</div>
                  <div className="text-2xl font-bold text-white">{item.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
