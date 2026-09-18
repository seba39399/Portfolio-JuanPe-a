"use client";

export function Hero() {
  return (
    <section className="py-16 md:py-24 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
      <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-900/50 mb-6">
        Biomedical Engineer & AI Specialist
      </span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
        Juan Sebastián Peña
      </h1>
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mt-4 mb-8">
        Specialized in data architecture, distributed ETL pipelines (AWS /
        PySpark / Airflow), and production-grade AI / Computer Vision
        integration.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-xs sm:text-sm transition shadow-lg shadow-blue-500/20"
        >
          Get in Touch / Services 🚀
        </a>
        <a
          href="#projects"
          className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold rounded-xl text-xs sm:text-sm transition border border-slate-800"
        >
          Explore Case Studies
        </a>
      </div>
    </section>
  );
}
