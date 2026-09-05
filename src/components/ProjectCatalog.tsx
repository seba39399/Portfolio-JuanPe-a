"use client";

import { useState } from "react";
import { projectsData, Project } from "@/data/projects";
import { DemoModal } from "./DemoModal"; // 👈 Importamos el DemoModal completo

export function ProjectCatalog() {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(
    null,
  );

  const allTags = [
    "All",
    ...Array.from(new Set(projectsData.flatMap((p) => p.tags))),
  ];

  const filteredProjects =
    selectedTag === "All"
      ? projectsData
      : projectsData.filter((p) => p.tags.includes(selectedTag));

  return (
    <section className="py-12 max-w-6xl mx-auto px-6">
      {/* Paragraph */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          Project Portfolio & Case Studies
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Data Science and Artificial Intelligence (AI) Specialist with over 2
          years of experience developing production-ready software solutions in
          ecosystems such as AWS and Azure. Expert in machine learning models,
          deep learning, computer vision algorithms, natural language processing
          (NLP), RAG systems, and LLM models, with experience developing ETL
          algorithms using orchestrators such as Apache Airflow and applying
          data processing tools such as Apache Spark (PySpark). Contact me for
          more information about my services.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedTag === tag
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "bg-slate-900 text-slate-400 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          // Verificamos si el proyecto tiene algún tipo de demo disponible
          const hasDemo =
            Boolean(project.demoUrl) ||
            Boolean(project.imageUrl) ||
            Boolean(project.demoImages && project.demoImages.length > 0);

          return (
            <div
              key={project.id}
              className="bg-slate-900 border border-slate-800/80 rounded-xl p-5 flex flex-col justify-between hover:border-blue-500/40 transition"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-900/50">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-3 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs mb-4 leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="mb-4 bg-slate-950 p-3 rounded-lg border border-slate-800/50">
                  <p className="text-[11px] font-semibold text-slate-300 mb-1">
                    🎯 Results and impact:
                  </p>
                  <ul className="list-disc list-inside text-[11px] text-slate-400 space-y-1">
                    {project.metrics.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-slate-800/80">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="flex-1 text-center py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition"
                >
                  Code (GitHub)
                </a>
                {hasDemo && (
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition cursor-pointer"
                  >
                    See demo 🚀
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal para Demos (Soporta Videos, iFrames e Imágenes) */}
      <DemoModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
