"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        {/* Lado izquierdo: Marca y rol */}
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <p className="font-medium text-slate-400">
            Juan Sebastián Peña <span className="text-slate-600">|</span> AI &
            Data Specialist
          </p>
        </div>

        {/* Lado derecho: Copyright y disclaimer discreto */}
        <div className="text-center md:text-right">
          <p>
            © {currentYear} — Engineered with Next.js, Tailwind CSS &
            TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}
