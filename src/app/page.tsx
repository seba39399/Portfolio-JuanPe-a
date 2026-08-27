import { Header } from "@/components/Header";
import { ProjectCatalog } from "@/components/ProjectCatalog";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <ProjectCatalog />
    </main>
  );
}
