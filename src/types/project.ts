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
