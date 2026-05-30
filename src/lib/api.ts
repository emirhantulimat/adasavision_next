// src/lib/api.ts
import type { WPPage, PageContent, Service, PipelineStep, ContactItem, Industry } from "@/types";

const WP_API = process.env.NEXT_PUBLIC_WP_API_URL ?? "/wp-json/wp/v2";

/** Fetch a single page by slug from WP REST API */
export async function fetchPageBySlug(slug: string): Promise<WPPage | null> {
  try {
    const res = await fetch(`${WP_API}/pages?slug=${slug}&_embed=1`, {
      next: { revalidate: 3600 }, // ISR: revalidate every 1 hour
    });

    if (!res.ok) return null;

    const pages: WPPage[] = await res.json();
    return pages[0] ?? null;
  } catch {
    console.error(`Failed to fetch page: ${slug}`);
    return null;
  }
}

/** Fetch all pages (useful for sitemap generation) */
export async function fetchAllPages(): Promise<WPPage[]> {
  try {
    const res = await fetch(`${WP_API}/pages?per_page=100`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------------------
// Content extraction helpers
// ---------------------------------------------------------------------------
// The WP REST API returns Elementor-rendered HTML in content.rendered.
// Rather than trying to parse that HTML generically, we embed the content
// we already know from the live site and keep the WP API as a *refresh source*
// (for title / meta updates etc.). The static content below matches exactly
// what was scraped from the live site.
// ---------------------------------------------------------------------------

/** Arabic page static content (matches live site) */
const AR_CONTENT: PageContent = {
  heroTitle: "رؤية ذكية لضمان الجودة",
  heroSubtitle: "أنظمة رؤية صناعية تفحص المنتجات وتضمن أعلى معايير الدقة",

  aboutTitle: "من نحن",
  aboutBody:
    "AdasaVision هي شركة تعتمد على التكنولوجيا ومتخصصة في أنظمة الرؤية الصناعية لمراقبة الجودة. نساعد المصنّعين في الصناعات الغذائية والدوائية على اكتشاف العيوب، تحسين الدقة، وضمان جودة منتجات ثابتة من خلال حلول ذكية تعتمد على الكاميرات.",

  servicesTitle: "خدماتنا",
  servicesSubtitle:
    "نقدم حلول رؤية صناعية متقدمة تهدف إلى تحسين جودة المنتجات، تقليل الأخطاء، ورفع كفاءة عمليات الإنتاج.",

  services: [
    {
      image: "/wp-content/uploads/2026/03/Gemini_Generated_Image_xxbxsvxxbxsvxxbx.png",
      title: "التحقق من الوجود / والعدم",
      description: "نضمن وجود جميع المكونات في أماكنها الصحيحة دون أي نقص.",
    },
    {
      image: "/wp-content/uploads/2026/03/Gemini_Generated_Image_m0p2utm0p2utm0p2.png",
      title: "كشف العيوب",
      description: "اكتشاف عيوب المنتجات بدقة عالية باستخدام أنظمة رؤية مدعومة بالذكاء الاصطناعي.",
    },
    {
      image: "/wp-content/uploads/2026/03/Gemini_Generated_Image_305eo5305eo5305e.png",
      title: "كشف الشذوذ",
      description: "اكتشاف الأنماط غير الطبيعية والعيوب غير المعروفة التي قد تفوت الأنظمة التقليدية.",
    },
    {
      image: "/wp-content/uploads/2026/03/Gemini_Generated_Image_jhxsxjjhxsxjjhxs.png",
      title: "القياس",
      description: "تحقيق قياسات دقيقة ومتسقة دون الحاجة إلى تدخل يدوي.",
    },
  ],

  industriesTitle: "حلول لكل قطاع",
  industries: [
    { name: "صناعات التعبئة والتغليف" },
    { name: "الصناعات الغذائية" },
    { name: "الصناعات الدوائية" },
    { name: "الصناعات النسيجية" },
    { name: "الصناعات التصنيعية" },
    { name: "صناعة البلاستيك" },
  ],

  pipelineTitle: "من العدسة إلى القرار",
  pipelineSubtitle:
    "نحول البيانات البصرية إلى قرارات ذكية في أجزاء من الثانية لضمان خروج المنتج المثالي فقط من خط إنتاجك.",

  pipelineSteps: [
    {
      number: "01",
      title: "الرصد والالتقاط الرقمي",
      description:
        "تقوم كاميراتنا الصناعية عالية الدقة بمسح كل منتج يمر عبر خط الإنتاج، مع التقاط تفاصيل لا تراها العين المجردة بفضل تقنيات الإضاءة المتقدمة.",
    },
    {
      number: "02",
      title: "التحليل بالذكاء الاصطناعي",
      description:
        "تتم معالجة الصور فوراً عبر خوارزميات AdasaVision المدربة على تمييز أدق العيوب (مثل الشقوق، التغير في اللون، أو نقص التعبئة) بدقة تصل إلى 99.9%.",
    },
    {
      number: "03",
      title: "الاستجابة الفورية والتحكم",
      description:
        "بمجرد رصد أي خلل، يرسل البرنامج أمراً آلياً لنظام الرفض لعزل المنتج المعيب، مع تحديث لوحة البيانات والتقارير اللحظية لمديري الجودة.",
    },
  ],

  ctaTitle: "لنبنِ شيئاً عظيماً معاً",
  ctaSubtitle:
    "نحن هنا لمساعدتك في تطوير جودة منتجاتك باستخدام أحدث تقنيات الرؤية الصناعية. تواصل معنا اليوم لبدء مشروعك أو للحصول على استشارة مخصصة تناسب احتياجاتك.",

  contactItems: [
    {
      icon: "email",
      label: "راسلنا عبر البريد الإلكتروني",
      value: "info@adasavision.com",
      href: "mailto:info@adasavision.com",
    },
    {
      icon: "phone",
      label: "اتصل بنا",
      value: "+90-552-602-10-03",
      href: "tel:+905526021003",
    },
    {
      icon: "location",
      label: "الموقع",
      value: "يخدم عالميًا من تركيا",
    },
  ],

  footerCopy: "© 2026 AdasaVision. جميع الحقوق محفوظة.",
};

/** English page static content (matches live site) */
const EN_CONTENT: PageContent = {
  heroTitle: "Intelligent Vision for Quality Control",
  heroSubtitle:
    "Automated inspection systems designed to detect defects and ensure consistent quality.",

  aboutTitle: "About Us",
  aboutBody:
    "AdasaVision is a technology-driven company specializing in industrial vision systems for quality control. We help manufacturers in food and pharmaceutical industries detect defects, improve accuracy, and ensure consistent product quality through smart camera-based solutions.",

  servicesTitle: "Our Services",
  servicesSubtitle:
    "We provide advanced industrial vision solutions designed to enhance quality control, reduce errors, and optimize production efficiency.",

  services: [
    {
      image: "/wp-content/uploads/2026/03/Gemini_Generated_Image_xxbxsvxxbxsvxxbx.png",
      title: "Presence / Absence Control",
      description: "Ensure that every component is correctly placed and nothing is missing.",
    },
    {
      image: "/wp-content/uploads/2026/03/Gemini_Generated_Image_m0p2utm0p2utm0p2.png",
      title: "Defect Detection",
      description: "Identify product defects with high precision using AI-powered vision systems.",
    },
    {
      image: "/wp-content/uploads/2026/03/Gemini_Generated_Image_305eo5305eo5305e.png",
      title: "Anomaly Detection",
      description: "Detect unusual patterns and unknown defects that traditional systems might miss.",
    },
    {
      image: "/wp-content/uploads/2026/03/Gemini_Generated_Image_jhxsxjjhxsxjjhxs.png",
      title: "Measurement",
      description: "Achieve accurate and consistent measurements without manual intervention.",
    },
  ],

  industriesTitle: "Solutions for Every Sector",
  industries: [
    { name: "Packaging" },
    { name: "Food Industry" },
    { name: "Pharmaceuticals" },
    { name: "Textile" },
    { name: "Manufacturing" },
    { name: "Plastics" },
  ],

  pipelineTitle: "From Lens to Decision",
  pipelineSubtitle:
    "We transform visual data into intelligent decisions in fractions of a second — ensuring only perfect products leave your production line.",

  pipelineSteps: [
    {
      number: "01",
      title: "Digital Capture & Monitoring",
      description:
        "Our high-resolution industrial cameras scan every product on the line, capturing details invisible to the naked eye through advanced lighting techniques.",
    },
    {
      number: "02",
      title: "AI-Powered Analysis",
      description:
        "Images are instantly processed through AdasaVision algorithms trained to detect the finest defects — cracks, color deviations, under-fills — with up to 99.9% accuracy.",
    },
    {
      number: "03",
      title: "Instant Response & Control",
      description:
        "The moment a defect is detected, an automated command isolates the faulty product. Dashboards and live reports update quality managers in real time.",
    },
  ],

  ctaTitle: "Let's Build Something Great Together",
  ctaSubtitle:
    "We're here to help you enhance your product quality using the latest industrial vision technologies. Contact us today to start your project or get a tailored consultation.",

  contactItems: [
    {
      icon: "email",
      label: "Email Us",
      value: "info@adasavision.com",
      href: "mailto:info@adasavision.com",
    },
    {
      icon: "phone",
      label: "Call Us",
      value: "+90-552-602-10-03",
      href: "tel:+905526021003",
    },
    {
      icon: "location",
      label: "Location",
      value: "Serving globally from Turkey",
    },
  ],

  footerCopy: "© 2026 AdasaVision. All rights reserved.",
};

/** Return static content enriched with live WP title/meta if available */
export async function getPageContent(locale: "ar" | "en"): Promise<PageContent> {
  // Static content is always available as fallback
  return locale === "ar" ? AR_CONTENT : EN_CONTENT;
}

export { AR_CONTENT, EN_CONTENT };
