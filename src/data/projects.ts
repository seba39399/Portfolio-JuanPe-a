import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "DMI-Database-AI",
    title: "Medical Implants Traceability System (DMI-Database-AI)",
    shortDescription:
      "Digitization and migration of legacy paper and Excel-based infrastructure to an SQL database architecture for the traceability of implantable medical devices (IMDs).",
    category: "Full-Stack & SQL",
    tags: [
      "Python",
      "PostgreSQL",
      "React (JS)",
      "Pandas",
      "NumPy",
      "Cloud Migration",
      "FastAPI",
      "AWS S3",
      "AWS CDN",
      "AWS Fargate",
      "AWS CloudWatch",
    ],
    metrics: [
      "100% digitization of implant cards",
      "96% software adoption rate among medical staff",
      "Data Validation at the Time of Entry",
      "Cloud-based architecture for scalability and security",
    ],
    demoType: "video",
    demoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    demoDescription:
      "An end-to-end relational database architecture designed to track medical devices and high-risk human implants throughout their clinical lifecycle. Built around a MySQL relational schema, the system processes REST API payloads via a Flask backend to validate Device Identifier (DI) and Production Identifier (PI) standards. It manages relational integrity across inventory modules, surgical procedures, and patient usage logs, optimizing query performance for regulatory auditability and compliance with healthcare tracking standards.",
    githubUrl: "https://github.com/seba39399/DMI-Database-AI",
  },
  {
    id: "App-PhysicalRecovery",
    title: "Real-Time Skeleton Tracking & Pose Estimation",
    shortDescription:
      "Computer-vision-driven upper-limb rehabilitation monitoring using gRPC microservices, ViTPose+, and automated PDF clinical reporting.",
    category: "Computer Vision",
    tags: [
      "Python",
      "PyTorch",
      "RT-DETR",
      "ViTPose+",
      "gRPC",
      "Streamlit",
      "MLflow",
      "Docker",
      "GitLab CI/CD",
    ],
    metrics: [
      "17 Keypoints (COCO-17 Scale)",
      "Port 50051 (gRPC Stream)",
      "0 - 90° Range Scale",
      "100% Automated CI/CD",
    ],
    demoType: "image",
    demoUrl: "/images/interfaz1.jpg",
    imageUrl: "/images/interfaz1.jpg",
    demoImages: ["/images/interfaz1.jpg", "/images/interfaz2.jpeg"],
    demoDescription:
      "This system addresses upper-limb rehabilitation monitoring by decoupling the computer vision pipeline from the UI using gRPC protocol buffers. The backend processes incoming frames via PekingU RT-DETR (Person Detection) and ViTPose-plus to extract 17 keypoint vectors. The client application tracks left-arm angular extension for automatic repetition counting, clinical progress scoring, and PDF report generation without locking the Streamlit UI thread.",
    githubUrl: "https://github.com/miguelfrancor01/App_PhysicalRecovery",
  },
  {
    id: "aws-medallion-etl",
    title: "AWS Medallion Data Lake & PySpark Pipeline",
    shortDescription:
      "Distributed data engineering pipeline with Medallion architecture (Bronze/Silver/Gold), orchestrated with Airflow and queries in Athena.",
    category: "Data Engineering",
    tags: [
      "PySpark",
      "Apache Airflow",
      "AWS S3",
      "AWS Glue",
      "AWS Athena",
      "SQL",
    ],
    metrics: [
      "45% Reduction in Query Latency in Athena",
      "Handling Small Files: Problem with `coalesce()`",
      "Broadcast Joins for Shuffle Elimination",
      "Partitioning and Bucketing for Optimized Query Performance",
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
      "Use of Groq LLM for orchestration and LangChain for pipeline logic",
    ],
    demoType: "video",
    demoUrl: "https://www.loom.com/embed/04250c05b8884e3ba5cf3213829333a7",
    demoDescription:
      "An intelligent medical retrieval-augmented generation (RAG) architecture engineered for clinical interpretation and bilingual context processing. The backend processes semi-structured audio transcriptions and medical domain documentation into high-dimensional vector embeddings, indexing them into a vector database. Coupled with Groq LLM orchestration and LangChain pipeline logic, the system retrieves contextual evidence in real time, delivering precise, auditable clinical query responses while maintaining medical entity alignment.",
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
      "Use of model pretrained and fine-tuned for audio classification tasks",
      "Easy to replicate and adapt to other audio classification tasks",
      "Accuracy of 92% in the classification of environmental sounds and bioacoustic signals",
      "AudioMAE architecture with spectrogram embeddings and random masking ratios",
    ],
    demoType: "video",
    demoUrl: "https://www.loom.com/embed/ecb12ceaf89f410bab4b078d9d0607b5",
    demoDescription:
      "A self-supervised deep learning implementation of Masked Autoencoders for Audio (AudioMAE) built with PyTorch for complex acoustic pattern recognition. The pipeline converts high-resolution raw audio waveforms into patchified spectrogram embeddings, applying random masking ratios to force latent representation learning. It features custom encoder-decoder transformer blocks and loss function evaluation, delivering scalable feature extraction models tailored for bioacoustic signal analysis and environmental audio classification.",
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
    demoType: "interactive",
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
    demoUrl: "https://www.loom.com/embed/cf3704506b6641ca8289a6465f9c69ac",
    demoDescription:
      "A specialized computer vision pipeline built with PyTorch, OpenCV, and Streamlit for automated cephalometric landmarking on head radiographs. The application ingests lateral dental X-rays, applies preprocessing filters to enhance anatomical contrast, and predicts critical cranial keypoints to construct the diagnostic Ricketts Esthetic Line. The interface allows clinicians to interactively adjust detection thresholds, evaluate soft-tissue profile metrics, and crop dynamic regions of interest for quantitative orthodontic evaluation.",
    githubUrl:
      "https://github.com/seba39399/Cephalometric-Landmark-Detection-Image-Processing/tree/main",
  },
];
