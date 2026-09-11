import { Hero } from "../components/hero";
import { About } from "../components/about";
import { Experience } from "../components/experience";
import { Certifications } from "../components/certifications";
import { Projects } from "../components/projects";
import { Contact } from "../components/contact";
import { Navigation } from "../components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Certifications />
      <Contact />
    </main>
  );
}
