// src/types/index.ts

export type Locale = "ar" | "en";

export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  yoast_head_json?: {
    title?: string;
    description?: string;
    og_image?: Array<{ url: string }>;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface PageContent {
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutBody: string;
  servicesTitle: string;
  servicesSubtitle: string;
  services: Service[];
  industriesTitle: string;
  industries: Industry[];
  pipelineTitle: string;
  pipelineSubtitle: string;
  pipelineSteps: PipelineStep[];
  ctaTitle: string;
  ctaSubtitle: string;
  contactItems: ContactItem[];
  footerCopy: string;
}

export interface Service {
  image: string;
  title: string;
  description: string;
}

export interface Industry {
  name: string;
}

export interface PipelineStep {
  number: string;
  title: string;
  description: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
  icon: "email" | "phone" | "location";
}
