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
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <Hero />
      <SectionDivider />
      <div id="projects">
        <ProjectCatalog />
      </div>
      <SectionDivider />
      <Timeline />
      <SectionDivider />
      <ExperienceMatrix />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </main>
  );
}
