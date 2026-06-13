// src/components/Contact/Contact.tsx
"use client";

import { useState, type FormEvent } from "react";
import type { PageContent, Locale } from "@/types";

interface ContactProps {
  content: PageContent;
  locale: Locale;
}

const icons = {
  email: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  phone: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  ),
  location: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
};

export default function Contact({ content, locale }: ContactProps) {
  const isAr = locale === "ar";

  // Form state yönetimi
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Formu sıfırla
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-32 bg-[#F2F2F2] overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA header */}
        <div className={`mb-12 lg:mb-16 ${isAr ? "text-right" : "text-left"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">
              {isAr ? "تواصل معنا" : "Contact"}
            </span>
          </div>

          <h2
            className={`font-bold text-[#152D49] mb-4 ${
              isAr ? "text-3xl sm:text-4xl" : "text-3xl sm:text-4xl font-en"
            }`}
          >
            {content.ctaTitle}
          </h2>
          <p
            className={`text-[#152D49]/80 max-w-2xl ${isAr ? "me-auto text-right text-base" : " text-lg"}`}
          >
            {content.ctaSubtitle}
          </p>
        </div>

        {/* Two-column: contact info + form */}
        <div
          dir={isAr ? "rtl" : "ltr"}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start"
        >
          {/* Contact info */}
          <div className="space-y-4">
            {content.contactItems.map((item) => (
              <div
                key={item.label}
                className={`glass rounded-2xl p-6 border border-[#d9e2e8] card-hover
                  flex items-center gap-5 ${isAr ? " text-right" : ""}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0
                    bg-brand-500/10 border border-brand-500/20 text-brand-400"
                >
                  {icons[item.icon as keyof typeof icons]}
                </div>

                <div
                  className={
                    isAr ? "flex-1 min-w-0 text-right" : "flex-1 min-w-0"
                  }
                >
                  <p className="text-xs text-[#152D49]/65 mb-1">{item.label}</p>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-semibold text-[#152D49] hover:text-[#67BBBD] transition-colors"
                    >
                      {isAr ? (
                        <span dir="ltr" className="inline-block">
                          {item.value}
                        </span>
                      ) : (
                        item.value
                      )}
                    </a>
                  ) : (
                    <p className="font-semibold text-[#152D49]">
                      {isAr ? (
                        <span dir="ltr" className="inline-block">
                          {item.value}
                        </span>
                      ) : (
                        item.value
                      )}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick message form */}
          <div>
            <div className="glass rounded-2xl p-8 border border-[#d9e2e8]">
              <h3
                className={`font-bold text-[#152D49] mb-6 ${isAr ? "text-lg text-right" : "text-lg font-en"}`}
              >
                {isAr ? "أرسل رسالة سريعة" : "Send a Quick Message"}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className={`block text-xs text-[#152D49]/65 mb-1.5 ${isAr ? "text-right" : ""}`}
                  >
                    {isAr ? "الاسم" : "Name"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder={isAr ? "اسمك الكريم" : "Your name"}
                    className={`w-full px-4 py-3 rounded-lg bg-white border border-[#d9e2e8]
                               text-[#152D49] placeholder-[#152D49]/40 text-sm
                               focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/30
                               transition-colors ${isAr ? "text-right" : ""}`}
                    dir={isAr ? "rtl" : "ltr"}
                  />
                </div>

                <div>
                  <label
                    className={`block text-xs text-[#152D49]/65 mb-1.5 ${isAr ? "text-right" : ""}`}
                  >
                    {isAr ? "البريد الإلكتروني" : "Email"}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={isAr ? "بريدك الإلكتروني" : "your@email.com"}
                    className={`w-full px-4 py-3 rounded-lg bg-white border border-[#d9e2e8]
                               text-[#152D49] placeholder-[#152D49]/40 text-sm
                               focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/30
                               transition-colors ${isAr ? "text-right" : ""}`}
                    dir={isAr ? "rtl" : "ltr"}
                  />
                </div>

                <div>
                  <label
                    className={`block text-xs text-[#152D49]/65 mb-1.5 ${isAr ? "text-right" : ""}`}
                  >
                    {isAr ? "رسالتك" : "Message"}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={
                      isAr ? "كيف يمكننا مساعدتك؟" : "How can we help you?"
                    }
                    className={`w-full px-4 py-3 rounded-lg bg-white border border-[#d9e2e8]
                               text-[#152D49] placeholder-[#152D49]/40 text-sm resize-none
                               focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/30
                               transition-colors ${isAr ? "text-right" : ""}`}
                    dir={isAr ? "rtl" : "ltr"}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full btn-primary justify-center disabled:opacity-50"
                >
                  {status === "loading" ? (
                    isAr ? (
                      "جاري الإرسال..."
                    ) : (
                      "Sending..."
                    )
                  ) : (
                    <>
                      {isAr ? "إرسال الرسالة" : "Send Message"}
                      <svg
                        className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </>
                  )}
                </button>

                {/* Dinamik Durum Bildirimleri */}
                {status === "success" && (
                  <p
                    className={`text-sm font-semibold text-green-600 ${isAr ? "text-right" : ""}`}
                  >
                    {isAr
                      ? "تم إرسال رسالتك بنجاح!"
                      : "Your message has been sent successfully!"}
                  </p>
                )}
                {status === "error" && (
                  <p
                    className={`text-sm font-semibold text-red-600 ${isAr ? "text-right" : ""}`}
                  >
                    {isAr
                      ? "حدث خطأ ما، يرجى المحاولة مرة أخرى."
                      : "Something went wrong, please try again."}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
