// src/components/Services/Services.tsx
import Image from "next/image";
import type { PageContent, Locale } from "@/types";

interface ServicesProps {
  content: PageContent;
  locale: Locale;
}

export default function Services({ content, locale }: ServicesProps) {
  const isAr = locale === "ar";

  return (
    <section
      id="services"
      className="relative py-20 lg:py-32 bg-[#FFFFFF] overflow-hidden"
    >
      {/* Subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500/25 to-transparent" />

      {/* Background mesh */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(0,174,219,1) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className={`mb-12 lg:mb-16 ${isAr ? "text-right" : "text-left"}`}>
          <div className={`flex items-center gap-3 mb-4 ${isAr ? " " : ""}`}>
            <div className="section-divider" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">
              {isAr ? "خدماتنا" : "Our Services"}
            </span>
          </div>

          <h2
            className={`font-bold text-[#152D49] mb-4 ${
              isAr ? "text-3xl sm:text-4xl" : "text-3xl sm:text-4xl font-en"
            }`}
          >
            {content.servicesTitle}
          </h2>
          <p
            className={`max-w-2xl text-[#152D49]/80 ${isAr ? "text-base text-right me-auto" : "text-lg"}`}
          >
            {content.servicesSubtitle}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.services.map((service, idx) => (
            <article
              key={service.title}
              className="group relative glass rounded-2xl overflow-hidden border border-[#d9e2e8]
                         card-hover flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-[#F2F2F2] shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#152D49]/20 via-transparent to-transparent" />

                {/* Number badge */}
                <div
                  className={`absolute top-3 w-7 h-7 rounded-full
                bg-brand-500/20 border border-brand-500/40
                flex items-center justify-center 
                ${isAr ? "right-3" : "left-3"}`} // Dil kontrolüne göre sağa veya sola yasladık
                >
                  <span className="text-xs font-bold text-brand-400">
                    {String(idx + 1).padStart(2)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className={`p-5 flex-1 flex flex-col ${isAr ? "text-right" : "text-left"}`}
              >
                <h3
                  className={`font-semibold text-[#152D49] mb-2 ${isAr ? "text-base" : "text-md font-en"}`}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-[#152D49]/70 leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Bottom accent line on hover */}
                <div
                  className="mt-4 h-0.5 w-0 bg-gradient-to-r from-brand-500 to-accent
                                group-hover:w-full transition-all duration-500 rounded-full"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
