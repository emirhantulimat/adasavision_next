// src/app/en/layout.tsx
// Minimal layout wrapper — lets /en share the same globals.css
export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
