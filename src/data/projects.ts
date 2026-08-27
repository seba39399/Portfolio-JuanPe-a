export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category:
    | "Data Engineering"
    | "MLOps & AI"
    | "Full-Stack & SQL"
    | "Computer Vision";
  tags: string[];
  metrics: string[];
  demoType: "iframe" | "video" | "interactive";
  demoUrl?: string;
  githubUrl: string;
}

export const projectsData: Project[] = [
  {
    id: "DMI-Database-AI",
    title: "Medical Implants Traceability System (DMI-Database-AI)",
    shortDescription:
      "Digitization and migration of legacy paper and Excel-based infrastructure to an SQL database architecture for the traceability of implantable medical devices (IMDs).",
    category: "Full-Stack & SQL",
    tags: ["Python", "SQL", "React (JS)", "Pandas", "NumPy", "Cloud Migration"],
    metrics: [
      "100% digitization of implant cards",
      "96% software adoption rate among medical staff",
      "Data Validation at the Time of Entry",
    ],
    demoType: "video",
    demoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    githubUrl: "https://github.com/seba39399/DMI-Database-AI",
  },
  {
    id: "App-PhysicalRecovery",
    title: "Real-Time Skeleton Tracking & Pose Estimation",
    shortDescription:
      "Modular real-time pose estimation application using the ViTPose+ architecture and an interactive interface for biomechanical and rehabilitation engineering analysis",
    category: "Computer Vision",
    tags: ["Python", "ViTPose+", "Streamlit", "OpenCV", "PyTorch"],
    metrics: [
      "Real-time processing",
      "Decoupled modularization for easy integration",
      "Generation of advanced reports in PDF format about patients",
    ],
    demoType: "iframe",
    demoUrl: "https://streamlit.io", // Cambiar por el link de tu Streamlit
    githubUrl: "https://github.com/miguelfrancor01/App_PhysicalRecovery",
  },
  {
    id: "aws-medallion-etl",
    title: "AWS Medallion Data Lake & PySpark Pipeline",
    shortDescription:
      "Distributed data engineering pipeline with Medallion architecture (Bronze/Silver/Gold), orchestrated with Airflow and queries in Athena.",
    category: "Data Engineering",
    tags: ["PySpark", "Apache Airflow", "AWS S3", "Glue", "Athena", "SQL"],
    metrics: [
      "45% Reduction in Query Latency in Athena",
      "Handling Small Files: Problem with `coalesce()`",
      "Broadcast Joins for Shuffle Elimination",
    ],
    demoType: "interactive",
    githubUrl: "https://github.com/seba39399/ETL-AWS-PROD",
  },
  {
    id: "Biomedical-RAG",
    title: "Biomedical RAG",
    shortDescription:
      "Chatbot using a RAG-type system for the harmonization of Colombian and international regulations on medical devices and biomedical engineering.",
    category: "Full-Stack & SQL",
    tags: ["Python", "Streamlit", "AWS Cloud Formation", "NumPy", "RAG"],
    metrics: [
      "Use of vector databases for information efficiency",
      "35% faster and more efficient than other similar systems.",
      "Deployment on AWS servers for front-end and back-end",
    ],
    demoType: "video",
    demoUrl: "https://www.loom.com/embed/04250c05b8884e3ba5cf3213829333a7",
    githubUrl: "https://github.com/seba39399/Biomedical-RAG",
  },
];
