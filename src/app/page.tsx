import { BackgroundEffect } from "@/components/BackgroundEffect";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectCatalog } from "@/components/ProjectCatalog";
import { ExperienceMatrix } from "@/components/ExperienceMatrix";
import { Timeline } from "@/components/Timeline";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      {/* Fondo de Partículas Interconectadas */}
      <BackgroundEffect />

      {/* Capa de Contenido por encima del Canvas */}
      <div className="relative z-10">
        <Header />
        <Hero />

        <SectionDivider />

        <div id="projects">
          <ProjectCatalog />
        </div>

        <SectionDivider />

        <ExperienceMatrix />

        <SectionDivider />

        <Timeline />

        <SectionDivider />

        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
