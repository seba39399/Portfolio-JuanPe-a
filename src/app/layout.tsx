import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan Sebastián Peña | Data & AI Specialist",
  description:
    "Portafolio profesional especializado en Arquitectura de Datos, pipelines ETL distribuidos (AWS / PySpark / Airflow) e integración de soluciones de IA en producción.",
  keywords: [
    "Data Engineer",
    "MLOps",
    "AI Specialist",
    "PySpark",
    "AWS",
    "Biomedical Engineer",
    "Computer Vision",
  ],
  authors: [{ name: "Juan Sebastián Peña" }],

  //
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Juan Sebastián Peña | Data & AI Specialist",
    description:
      "Especialista en arquitectura de datos, pipelines de ETL distribuidos y despliegue de modelos de IA en producción.",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Sebastián Peña | Data & AI Specialist",
    description:
      "Especialista en arquitectura de datos, pipelines de ETL distribuidos y despliegue de modelos de IA en producción.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${inter.className} bg-slate-950 text-slate-100 antialiased min-h-screen selection:bg-blue-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
