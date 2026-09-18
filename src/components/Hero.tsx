"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [logIndex, setLogIndex] = useState(0);

  const logs = [
    "🚀 Initializing Airflow DAG: etl_pyspark_v2...",
    "📦 Loading Vision Model: PyTorch / HuggingFace...",
    "⚡ AWS EC2 Cluster: 4 Worker Nodes Active",
    "✅ Pipeline Status: SUCCESS (Latency: 42ms)",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % logs.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [logs.length]);

  return (
    <section className="pt-36 md:pt-48 pb-12 md:pb-20 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Columna Izquierda: Widget Interactivo MLOps & Data Pipeline */}
        <div className="lg:col-span-5 w-full order-2 lg:order-1">
          <div className="relative group">
            {/* Glow / Resplandor Cyan & Blue tras la consola */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-2xl blur-xl group-hover:opacity-100 transition duration-500 opacity-70" />

            {/* Contenedor Principal de la Consola */}
            <div className="relative bg-slate-950/90 border border-slate-800 rounded-2xl p-5 shadow-2xl backdrop-blur-md text-left font-mono text-xs">
              {/* Top Bar de la Ventana del Terminal */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] text-slate-500 font-semibold">
                  mlops-pipeline.py
                </span>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ACTIVE
                </span>
              </div>

              {/* Grid de Métricas en Tiempo Real */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/60">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                    Model Accuracy
                  </p>
                  <p className="text-base font-bold text-blue-400">98.4%</p>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/60">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                    Cloud Nodes
                  </p>
                  <p className="text-base font-bold text-emerald-400">
                    AWS / Online
                  </p>
                </div>
              </div>

              {/* Barra de Progreso del Pipeline */}
              <div className="space-y-1.5 mb-4">
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>PySpark Batch Processing</span>
                  <span className="text-blue-400 font-semibold">88%</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden border border-slate-800">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-1.5 rounded-full w-[88%] animate-pulse" />
                </div>
              </div>

              {/* Consola de Logs Dinámica */}
              <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800/60 space-y-1 min-h-[64px] flex items-center">
                <div className="text-[11px] text-slate-300 w-full">
                  <span className="text-blue-400 font-bold mr-2">&gt;</span>
                  <span className="transition-all duration-300">
                    {logs[logIndex]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Información de Presentación */}
        <div className="lg:col-span-7 text-center lg:text-right space-y-5 order-1 lg:order-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-900/50 inline-block">
            Biomedical Engineer & AI Specialist
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Juan Sebastián Peña
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:ml-auto lg:mr-0">
            Specialized in data architecture, distributed ETL pipelines (AWS /
            PySpark / Airflow), and production-grade AI / Computer Vision
            integration.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-end pt-2">
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
        </div>
      </div>
    </section>
  );
}
