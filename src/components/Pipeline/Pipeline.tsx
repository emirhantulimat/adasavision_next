// src/components/Pipeline/Pipeline.tsx
import type { PageContent, Locale } from "@/types";

interface PipelineProps {
  content: PageContent;
  locale: Locale;
}

const stepIcons = ["📷", "🧠", "⚡"];

export default function Pipeline({ content, locale }: PipelineProps) {
  const isAr = locale === "ar";

  return (
    <section
      id="how-it-works"
      className="relative py-20 lg:py-32 bg-dark-800 overflow-hidden"
    >
      {/* Decorative top/bottom borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className={`mb-16 ${isAr ? "text-right" : "text-center"}`}>
          <div className={`flex items-center gap-3 mb-4 ${isAr ? "justify-end flex-row-reverse" : "justify-center"}`}>
            <div className="section-divider" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">
              {isAr ? "كيف يعمل النظام" : "How It Works"}
            </span>
          </div>

          <h2
            className={`font-bold text-white mb-4 ${
              isAr ? "text-3xl sm:text-4xl" : "text-3xl sm:text-4xl font-en"
            }`}
          >
            {content.pipelineTitle}
          </h2>
          <p className={`text-slate-400 max-w-2xl ${isAr ? "ms-auto text-base" : "mx-auto text-lg"}`}>
            {content.pipelineSubtitle}
          </p>
        </div>

        {/* Pipeline steps */}
        <div className="relative">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 inset-x-0 h-px
                          bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {content.pipelineSteps.map((step, idx) => (
              <div
                key={step.number}
                className={`relative flex flex-col ${isAr ? "items-end text-right" : "items-start text-left"}`}
              >
                {/* Step number circle */}
                <div
                  className="relative z-10 w-24 h-24 rounded-2xl
                              flex flex-col items-center justify-center gap-1
                              bg-dark-700 border-2 border-brand-500/30
                              mb-6 shrink-0
                              shadow-[0_0_30px_rgba(0,174,219,0.15)]"
                >
                  <span className="text-2xl">{stepIcons[idx]}</span>
                  <span className="text-xs font-bold text-brand-400">{step.number}</span>
                </div>

                {/* Content card */}
                <div className="glass rounded-2xl p-6 border border-slate-700/40 card-hover w-full">
                  <h3
                    className={`font-bold text-white mb-3 ${
                      isAr ? "text-lg" : "text-lg font-en"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-brand-500 to-accent rounded-full" />
                    <div className="w-2 h-0.5 bg-brand-500/30 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accuracy callout */}
        <div className="mt-16 glass rounded-2xl p-8 border border-brand-500/20 text-center
                        bg-gradient-to-r from-brand-950/20 via-dark-800 to-brand-950/20">
          <div className="text-6xl font-bold gradient-text mb-2">99.9%</div>
          <p className="text-slate-300 font-medium">
            {isAr ? "دقة الكشف عن العيوب — مضمونة" : "Defect Detection Accuracy — Guaranteed"}
          </p>
        </div>
      </div>
    </section>
  );
}
