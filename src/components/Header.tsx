export function Header() {
  return (
    <header className="w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <span className="text-xs font-semibold tracking-widest text-blue-500 uppercase">
            Biomedical Engineer & MLOps / Data & AI Specialist
          </span>
          <h1 className="text-3xl font-extrabold text-white mt-1">
            Juan Sebastián Peña
          </h1>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            Specialized in data architecture and distributed pipelines (AWS /
            PySpark / Airflow) and the integration of AI solutions into
            production.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="https://github.com/seba39399"
            target="_blank"
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/juan-sebasti%C3%A1n-pe%C3%B1a-valderrama-1a8246276/"
            target="_blank"
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition shadow-lg shadow-blue-500/20"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
