
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Participation } from "@/components/Participation";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Certifications />
      <Participation />
      <Contact />
    </div>
  );
};

export default Index;
