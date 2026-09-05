"use client";

import { Project } from "@/types/project";

interface DemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export function DemoModal({ project, onClose }: DemoModalProps) {
  if (!project) return null;

  const imagesToShow =
    project.demoImages && project.demoImages.length > 0
      ? project.demoImages
      : project.imageUrl
        ? [project.imageUrl]
        : [];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-6">
      {/* Contenedor amplio max-w-7xl para máxima visibilidad */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-7xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]">
        {/* Header Modal */}
        <div className="p-4 sm:p-5 border-b border-gray-800 flex justify-between items-center bg-gray-950 shrink-0">
          <div>
            <span className="text-xs font-semibold uppercase text-blue-400 tracking-wider">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 px-4 py-1.5 rounded-lg text-sm transition cursor-pointer font-medium"
          >
            ✕ Close
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-4 sm:p-8 bg-black overflow-y-auto flex-1 space-y-8">
          {/* 1. KPIs Section */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold text-blue-400 tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Key Performance Indicators (KPIs)
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-950 border border-gray-800/80 p-3.5 rounded-xl text-center shadow-md"
                  >
                    <p className="text-sm sm:text-base font-bold text-blue-400">
                      {metric}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. System Overview & Architecture Narrative */}
          {project.demoDescription && (
            <div className="bg-gray-950/60 border-l-4 border-blue-500 border-y border-r border-gray-800/80 p-5 rounded-r-xl space-y-2">
              <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                System Overview & Architecture Narrative
              </h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.demoDescription}
              </p>
            </div>
          )}

          {/* 3. Media Preview Section (Diferencia dinámicamente entre Imagen o Video/Iframe) */}
          {project.demoType === "image" && imagesToShow.length > 0 ? (
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                Interface & Image Previews
              </h4>
              <div className="flex flex-col gap-6 w-full">
                {imagesToShow.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-xl overflow-hidden border border-gray-800 bg-gray-950 p-2 shadow-xl"
                  >
                    <img
                      src={img}
                      alt={`Preview ${idx + 1} - ${project.title}`}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (project.demoType === "iframe" ||
              project.demoType === "video" ||
              project.demoType === "interactive") &&
            project.demoUrl ? (
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                Interface & Video Interactive Preview
              </h4>
              <div className="w-full h-[550px] rounded-xl overflow-hidden border border-gray-800 bg-gray-950 p-2 shadow-xl">
                <iframe
                  src={project.demoUrl}
                  className="w-full h-full border-0 rounded-lg"
                  title={`Demo - ${project.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : null}

          {/* 4. Complemento General Técnico (Aplica para todos los proyectos) */}
          <div className="bg-gray-950 p-5 rounded-xl border border-gray-800/80 space-y-3">
            <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider">
              Key Technical Deliverables & Execution Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">✓</span>
                <p>
                  <strong className="text-white">Modular Architecture:</strong>{" "}
                  Built using clean coding practices, decoupled pipelines, and
                  strict environment isolation.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">✓</span>
                <p>
                  <strong className="text-white">Production Readiness:</strong>{" "}
                  Containerized setups and automated workflows optimized for
                  repeatable deployments.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">✓</span>
                <p>
                  <strong className="text-white">Tech Stack Alignment:</strong>{" "}
                  Integrated using {project.tags.slice(0, 4).join(", ")} and
                  scalable backend tools.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">✓</span>
                <p>
                  <strong className="text-white">Source Verification:</strong>{" "}
                  Fully available code repositories with structured
                  documentation and execution guides.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Footer CTA a GitHub */}
          {project.githubUrl && (
            <div className="pt-4 border-t border-gray-800 flex justify-end">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm px-5 py-2.5 rounded-lg font-semibold transition flex items-center gap-2"
              >
                View Repository on GitHub 🚀
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
