// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en" dir="rtl">
      <body className="min-h-screen bg-dark-900 flex items-center justify-center font-en">
        <div className="text-center px-4">
          <div className="text-8xl font-bold gradient-text mb-4">404</div>
          <h1 className="text-2xl font-bold text-white mb-3">Page Not Found</h1>
          <p className="text-slate-500 mb-8">The page you're looking for doesn't exist.</p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/" className="btn-primary">Arabic Home</Link>
            <Link href="/en" className="btn-primary">English Home</Link>
          </div>
        </div>
      </body>
    </html>
  );
}
