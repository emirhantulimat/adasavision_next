// src/app/page.tsx
import type { Metadata } from "next";
import { getPageContent } from "@/lib/api";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Industries from "@/components/Industries/Industries";
import Pipeline from "@/components/Pipeline/Pipeline";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "رؤية ذكية لضمان الجودة",
  description:
    "AdasaVision – أنظمة رؤية صناعية تفحص المنتجات وتضمن أعلى معايير الدقة للصناعات الغذائية والدوائية.",
  alternates: {
    canonical: "/",
    languages: { en: "/en" },
  },
  openGraph: {
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    title: "AdasaVision – رؤية ذكية لضمان الجودة",
    description:
      "أنظمة رؤية صناعية تفحص المنتجات وتضمن أعلى معايير الدقة.",
  },
};

export default async function ArabicHomePage() {
  const content = await getPageContent("ar");

  return (
    <html lang="ar" dir="rtl">
      <body className="font-ar">
        <Header locale="ar" />
        <main id="main">
          <Hero content={content} locale="ar" />
          <About content={content} locale="ar" />
          <Services content={content} locale="ar" />
          <Industries content={content} locale="ar" />
          <Pipeline content={content} locale="ar" />
          <Contact content={content} locale="ar" />
        </main>
        <Footer content={content} locale="ar" />
      </body>
    </html>
  );
}
