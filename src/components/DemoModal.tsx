"use client";

import { Project } from "@/types/project";

interface DemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export function DemoModal({ project, onClose }: DemoModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl">
        {/* Header modal */}
        <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gray-950">
          <div>
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
            <p className="text-xs text-blue-400">
              Interactive demo & visualization
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white bg-gray-800 px-3 py-1 rounded-lg text-sm transition"
          >
            ✕ Close
          </button>
        </div>

        {/* Iframe load */}
        <div className="p-4 h-[500px] bg-black">
          {project.demoType === "iframe" && project.demoUrl ? (
            <iframe
              src={project.demoUrl}
              className="w-full h-full border-0 rounded-lg"
              title={`Demo - ${project.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 text-gray-400">
              <p className="mb-4 text-sm">
                This demo is optimized to run locally or via the technical
                documentation.
              </p>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white text-xs px-4 py-2 rounded-lg font-semibold hover:bg-blue-500 transition"
              >
                Check on GitHub 🚀
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
