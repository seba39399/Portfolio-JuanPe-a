"use client";

interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
}

const timelineData: ExperienceItem[] = [
  {
    period: "2025 - 2026",
    role: "Specialization in Artificial Intelligence | Postgraduate Degree",
    organization: "Universidad Autónoma de Occidente",
    description:
      "Advanced certification focused on machine learning and deep learning architectures, computer vision models, and production MLOps workflows. Core expertise includes deploying advanced algorithms, designing neural networks, and optimizing intelligent systems for real-world data processing applications.",
    highlights: [
      "Deep Learning & Computer Vision",
      "MLOps & Cloud Infrastructure",
      "Full Stack AI Development",
      "Neural Network Optimization",
    ],
  },
  {
    period: "2023",
    role: "IoT & AI for Healthcare | Research Internship",
    organization: "Universidad de Guadalajara",
    description:
      "Designed and developed an Internet of Things (IoT) edge algorithm for real-time continuous monitoring of physiological variables under international scientific consultancy. embedded systems data pipeline efficiency, sensor integration, and secure data transmission protocols for critical healthcare applications.",
    highlights: [
      "IoT & Edge Computing",
      "Real-time Physiological Monitoring",
      "Secure Data Transmission",
      "Sensor Integration & Data Pipeline",
    ],
  },
  {
    period: "2020 - 2024",
    role: "Biomedical Engineering | Bachelor's Degree",
    organization: "Universidad Autónoma de Occidente",
    description:
      "Undergraduate program focused on the intersection of healthcare technology, biological data science, and physical computing. Specialized in Computer Vision and medical image processing (DICOM/Radiomics), biomechanics keypoint tracking, and software development using machine learning and deep learning approaches.",
    highlights: [
      "Sequential Data Processing",
      "Medical Devices & Imaging",
      "Machine Learning Approaches",
      "Electronic Design & Embedded Systems",
    ],
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-16 max-w-4xl mx-auto px-6">
      {/* Encabezado con espaciado corregido */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 px-3.5 py-1 rounded-full border border-blue-900/50 inline-block">
          // ACADEMIC HISTORY
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Education & Background
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-2">
          Academic and professional background
        </p>
      </div>

      <div className="relative border-l border-slate-800 ml-4 sm:ml-32 space-y-8">
        {timelineData.map((item, index) => (
          <div key={index} className="relative pl-6 sm:pl-8">
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-slate-950" />

            <span className="sm:absolute sm:-left-32 sm:top-1 text-xs font-semibold text-blue-400 block mb-1 sm:mb-0">
              {item.period}
            </span>

            <div className="bg-slate-900 border border-slate-800/80 p-5 rounded-xl space-y-2">
              <h3 className="text-base font-bold text-white">{item.role}</h3>
              <p className="text-xs font-semibold text-blue-400">
                {item.organization}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
