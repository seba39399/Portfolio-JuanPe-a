"use client";

import { useState } from "react";

interface Experience {
  id: string;
  role: string;
  organization: string;
  type: "Research Group" | "Industry" | "Academic";
  period: string;
  location: string;
  summary: string;
  keyDeliverables: string[];
  techStack: string[];
  metrics?: string;
}

const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "AI Specialist & Data Engineer",
    organization: "Subocol S.A.",
    type: "Industry",
    period: "2026 - Present",
    location: "Remote",
    summary:
      "Developing services for enterprise software based on data engineering and artificial intelligence techniques (Machine and Deep Learning) to create distinctive service offerings that substantially improve key aspects—such as the user experience in production environments, internal process optimization, and applicable automation.",
    keyDeliverables: [
      "Manage projects for the development of data- and machine learning-based services across all stages, in accordance with requirements.",
      "Design and execute experimentation processes to validate proposed hypotheses.",
      "Develop and deploy production-grade LLM/RAG pipelines, PySpark data lakehouses, and containerized microservices in AWS.",
      "Perform maintenance, monitoring, and continuous improvement of already developed solutions, taking into account business feedback and data fluctuations.",
    ],
    techStack: [
      "AWS",
      "PySpark",
      "FastAPI",
      "Docker",
      "GitHub Actions",
      "LangChain",
      "LlamaIndex",
      "OpenAI API",
      "HuggingFace Transformers",
    ],
    metrics: "Adapted machine learning algorithms",
  },
  {
    id: "exp-2",
    role: "Web Technical Support Specialist",
    organization: "TaskUs S.A.S.",
    type: "Industry",
    period: "2024 - 2026",
    location: "Cali, Colombia",
    summary:
      "Managing and troubleshooting production web infrastructure, application-layer routing, and complex DNS environments. Focused on automating network connectivity diagnostics, monitoring system reliability (SRE), and optimizing backend API integrations to ensure high platform availability and maintain strict SLA compliance.",
    keyDeliverables: [
      "Engineered automated troubleshooting scripts and health-check pipelines to diagnose DNS propagation delays, SSL/TLS handshake failures, and routing anomalies in production.",
      "Managed application-layer routing and edge load balancing, maintaining 99.9%+ uptime and strict SLA compliance across core web services.",
      "Optimized cross-service API gateways and proxy configurations, reducing connection timeouts and backend latency under high traffic loads.",
      "Implemented real-time observability dashboards and automated alerting protocols, significantly reducing Mean Time to Resolution (MTTR) for critical network incidents.",
      "Conducted post-mortem analyses for edge-network outages, hardening DNS failover policies and application routing rules against single points of failure.",
    ],
    techStack: [
      "JavaScript",
      "HTML",
      "Zendesk",
      "HelpDesk",
      "CSS",
      "DNS",
      "SSL/TLS",
      "API Gateways",
    ],
    metrics: "2 Clients with 99.9%+ uptime",
  },
  {
    id: "exp-3",
    role: "Biomedical Data Engineer & Cloud Migration Specialist",
    organization: "Fundación Clínica Infantil Club Noel",
    type: "Industry",
    period: "2024",
    location: "Cali, Colombia",
    summary:
      "Mdernizing legacy infrastructure by designing and deploying a cloud-native microservices architecture on AWS. Focused on automating development workflows using containerization (Docker) and CI/CD pipelines, integrating LLMs for automated data processing, and developing secure relational database systems. Also managed system reliability and availability for critical institution hardware.",
    keyDeliverables: [
      "Architected and deployed a containerized microservices infrastructure on AWS, migrating monolithic legacy applications into scalable, decoupled cloud services.",
      "Built end-to-end CI/CD automation pipelines with Docker and GitHub Actions, reducing deployment cycle times and enabling zero-downtime updates.",
      "Designed and integrated LLM-driven processing pipelines to automate structured data extraction from legacy records and unstructured documents.",
      "Designed and implemented encrypted, high-availability PostgreSQL/MySQL databases with automated daily backup strategies and strict role-based access control (RBAC).",
      "Established real-time monitoring and failover protocols for critical institutional hardware, ensuring high availability and proactive incident management.",
    ],
    techStack: [
      "PostgreSQL",
      "Python",
      "AWS S3",
      "Pandas",
      "NumPy",
      "FastAPI",
      "Docker",
      "GitHub Actions",
    ],
    metrics: "100% digitization of records",
  },
  {
    id: "exp-4",
    role: "Research Assistant",
    organization: "Universidad Autónoma de Occidente",
    type: "Academic",
    period: "2023 - 2024",
    location: "Cali, Colombia",
    summary:
      "Development of computational algorithms for the digital processing of medical images in a radiological context—working with X-rays or computed tomography scans—to improve workflows in dental practices, general dentistry, and orthodontic procedures. Application of advanced computer vision utilizing machine learning, deep learning, and both manual and automated mathematical methods.",
    keyDeliverables: [
      "Engineered Deep Learning pipelines (CNNs and Transformers) for automated landmark detection and structure segmentation on dental X-rays and CT scans.",
      "Developed mathematical image-processing models for automatic landmarking (e.g., Ricketts E-Line detection), significantly reducing diagnostic time for orthodontists.",
      "Implemented hybrid image enhancement workflows using advanced spatial filtering, contrast optimization, and intensity normalization to improve diagnostic accuracy on noisy radiographs.",
      "Integrated computer vision inference engines into interactive user interfaces (e.g., Streamlit/Web APIs), streamlining image analysis and automated PDF reporting for dental practices.",
      "Evaluated model performance against expert radiologist ground truth, ensuring high geometric accuracy and reproducibility across diverse imaging devices.",
    ],
    techStack: [
      "gRPC",
      "Streamlit",
      "TensorFlow",
      "OpenCV",
      "PyTorch",
      "Python",
      "MatLab",
      "NumPy",
      "Pandas",
    ],
    metrics: "Algorithms within the gold standard",
  },
  {
    id: "exp-5",
    role: "Young Researcher / Consultant",
    organization: "Biomedical Applications Research Group (G-Bio)",
    type: "Research Group",
    period: "2022 - 2023",
    location: "Cali, Colombia",
    summary:
      "Embedded systems developer; application and implementation of sequential data processing algorithms; prototyping of biomedical research systems. Software system development for an electrical impedance meter prototype for epithelial cells.",
    keyDeliverables: [
      "Programmed embedded firmware for real-time electrical impedance measurement and sequential signal acquisition across cellular micro-arrays.",
      "Developed digital signal filtering and time-series extraction algorithms to quantify epithelial cell layer resistance and capacitance changes.",
      "Built custom low-level communication protocols (SPI/I2C/UART) to interface embedded microcontrollers with digital sensing front-ends and data logging interfaces.",
      "Designed and validated a functional biomedical laboratory prototype for electrical impedance spectroscopy (EIS), ensuring high signal-to-noise ratio (SNR) and measurement repeatability.",
      "Created interactive software tooling for real-time visualization, calibration, and automated export of impedance curves for bioengineering analysis.",
    ],
    techStack: [
      "C-Language",
      "Tiva C-Series",
      "Python",
      "MatLab",
      "NumPy",
      "Pandas",
      "OpenCV",
    ],
    metrics: "Adaptable and detachable system",
  },
];

export function ExperienceMatrix() {
  const [selectedExp, setSelectedExp] = useState<Experience>(experiences[0]);

  return (
    <section id="experience" className="py-20 max-w-6xl mx-auto px-6">
      {/* Encabezado de la sección */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 px-3.5 py-1 rounded-full border border-blue-900/50 inline-block">
          // TRACK RECORD & RESEARCH
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Professional & Research Experience
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          Select a node from the terminal menu to inspect key deliverables, tech
          stacks, and impact metrics.
        </p>
      </div>

      {/* Interfaz Estilo IDE / Terminal */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Panel Izquierdo: Lista de Experiencias (5 Nodos) */}
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-950/50 p-4 space-y-2">
          <div className="text-[10px] font-mono text-slate-500 uppercase px-3 py-2 flex items-center justify-between">
            <span>Nodes Loaded ({experiences.length})</span>
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          {experiences.map((exp) => {
            const isSelected = selectedExp.id === exp.id;
            return (
              <button
                key={exp.id}
                onClick={() => setSelectedExp(exp)}
                className={`w-full text-left p-3.5 rounded-xl transition duration-150 flex flex-col gap-1 border ${
                  isSelected
                    ? "bg-slate-800/90 border-blue-500/50 shadow-md"
                    : "bg-slate-900/40 border-slate-800/60 hover:bg-slate-800/40 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                      exp.type === "Research Group"
                        ? "bg-purple-950 text-purple-300 border border-purple-800/50"
                        : exp.type === "Industry"
                          ? "bg-blue-950 text-blue-300 border border-blue-800/50"
                          : "bg-slate-800 text-slate-300"
                    }`}
                  >
                    {exp.type}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xs font-bold text-white mt-1 line-clamp-1">
                  {exp.role}
                </h3>
                <p className="text-[11px] text-slate-400 line-clamp-1">
                  {exp.organization}
                </p>
              </button>
            );
          })}
        </div>

        {/* Panel Derecho: Inspector de Detalles */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-slate-900/40 space-y-6">
          <div className="space-y-4">
            {/* Cabecera del detalle */}
            <div className="border-b border-slate-800 pb-4 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-blue-400 font-semibold">
                  {selectedExp.period} — {selectedExp.location}
                </span>
                {selectedExp.metrics && (
                  <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800/50 px-2.5 py-1 rounded-md">
                    ⚡ {selectedExp.metrics}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-extrabold text-white">
                {selectedExp.role}
              </h3>
              <p className="text-xs font-semibold text-slate-400">
                {selectedExp.organization}
              </p>
            </div>

            {/* Resumen */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedExp.summary}
            </p>

            {/* Entregables Clave */}
            <div className="space-y-2 pt-2">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                Key Deliverables & Contributions
              </h4>
              <ul className="space-y-2">
                {selectedExp.keyDeliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-slate-300 flex items-start gap-2"
                  >
                    <span className="text-blue-400 mt-0.5">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="pt-4 border-t border-slate-800/80">
            <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2">
              Technologies & Methodologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {selectedExp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono bg-slate-950 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
