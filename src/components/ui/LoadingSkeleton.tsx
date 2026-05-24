// src/components/ui/LoadingSkeleton.tsx
export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-dark-900 animate-pulse">
      {/* Header placeholder */}
      <div className="h-20 bg-dark-800 border-b border-slate-700/30" />

      {/* Hero placeholder */}
      <div className="h-screen bg-gradient-to-b from-dark-800 to-dark-900" />
    </div>
  );
}
