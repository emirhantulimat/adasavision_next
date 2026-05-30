// src/app/en/page.tsx
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
  title: "Intelligent Vision for Quality Control",
  description:
    "AdasaVision provides AI-powered industrial vision systems for defect detection, quality control, and production monitoring.",
  alternates: {
    canonical: "/en",
    languages: { ar: "/" },
  },
  openGraph: {
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    title: "AdasaVision – Intelligent Vision for Quality Control",
    description:
      "Automated inspection systems designed to detect defects and ensure consistent quality.",
  },
};

export default async function EnglishHomePage() {
  const content = await getPageContent("en");

  return (
    <html lang="en" dir="rtl">
      <body className="font-en">
        <Header locale="en" />
        <main id="main">
          <Hero content={content} locale="en" />
          <About content={content} locale="en" />
          <Services content={content} locale="en" />
          <Industries content={content} locale="en" />
          <Pipeline content={content} locale="en" />
          <Contact content={content} locale="en" />
        </main>
        <Footer content={content} locale="en" />
      </body>
    </html>
  );
}
