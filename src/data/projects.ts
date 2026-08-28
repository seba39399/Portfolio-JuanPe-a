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
    demoUrl: "https://streamlit.io",
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
    title: "Biomedical Auditory and AI RAG system",
    shortDescription:
      "Chatbot using a RAG-type system for the harmonization of Colombian and international regulations on medical devices and biomedical engineering. Implemented using modern tools and can be applied to any kind of science.",
    category: "MLOps & AI",
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
  {
    id: "Audio-MAE",
    title: "AudioMAE Masked Autoencoders that listen - Implementation",
    shortDescription:
      "This project implements the inference pipeline for AudioMAE (Masked Autoencoders that Listen), a state-of-the-art self-supervised model architecture presented at NeurIPS 2022 by Meta AI.",
    category: "MLOps & AI",
    tags: ["Python", "Streamlit", "Pandas", "NumPy", "Transformer"],
    metrics: [
      "Use of vector databases for information efficiency",
      "35% faster and more efficient than other similar systems.",
      "Deployment on AWS servers for front-end and back-end",
    ],
    demoType: "video",
    demoUrl: "https://www.loom.com/embed/04250c05b8884e3ba5cf3213829333a7",
    githubUrl:
      "https://github.com/seba39399/Audio-Mae-Implementation/tree/main",
  },
  {
    id: "AI-Mammography",
    title: "Classification of Breast Tissue using Radiomics Algorithms",
    shortDescription:
      "This is a radiomics-based project focused on extracting quantitative imaging biomarkers from mammography scans to support supervised classification tasks.",
    category: "Data Engineering",
    tags: ["Python", "Sklearn", "Pandas", "NumPy", "Radiomics"],
    metrics: [
      "Training phase adquired 89.1% accuracy within test data",
      "KNN Neighbors model used for training purposes",
      "Made it possible to distinguish between three types of tissue (normal, benign, and malignant)",
    ],
    demoType: "video",
    demoUrl: "https://www.loom.com/embed/04250c05b8884e3ba5cf3213829333a7",
    githubUrl:
      "https://github.com/seba39399/Medical-Image-Analysis-with-AI-Mammography",
  },
  {
    id: "Landmark-Detection",
    title: "Cephalometric Landmark Detection - Ricketts Line Autodetection",
    shortDescription:
      "Automatic detection of nasal and soft pogonion points in cephalometric images and visualization of the Ricketts aesthetic line using image processing and optimization techniques.",
    category: "Data Engineering",
    tags: ["Python", "DICOM", "Pandas", "NumPy", "Sklearn", "OpenCV"],
    metrics: [
      "Identification of anatomical points of interest within a margin of error of 3 mm",
      "Automatic method with low RAM usage and no AI model integrated",
      "Dental practice using traditional computer vision",
    ],
    demoType: "video",
    demoUrl: "https://www.loom.com/embed/04250c05b8884e3ba5cf3213829333a7",
    githubUrl:
      "https://github.com/seba39399/Cephalometric-Landmark-Detection-Image-Processing/tree/main",
  },
];
