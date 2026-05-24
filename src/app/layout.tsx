// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://adasavision.com"),
  title: {
    template: "%s | AdasaVision",
    default: "AdasaVision – Industrial Vision for Quality Control",
  },
  description:
    "AdasaVision provides AI-powered industrial vision systems for defect detection, quality control, and production monitoring.",
  openGraph: {
    type: "website",
    siteName: "AdasaVision",
    images: [
      {
        url: "https://adasavision.com/wp-content/uploads/2026/05/logotemp.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: "https://adasavision.com/wp-content/uploads/2026/05/cropped-icontemp-270x270.png",
    apple: "https://adasavision.com/wp-content/uploads/2026/05/cropped-icontemp-270x270.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // lang/dir are set per-page via generateMetadata / html attributes in each page
    <html suppressHydrationWarning>
      <head />
      <body>{children}</body>
    </html>
  );
}
