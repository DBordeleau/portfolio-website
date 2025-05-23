import About from "@/components/about";
import Divider from "@/components/divider";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";


export default function Home() {
  return <main className="flex flex-col items-center px-4">
    <Intro />
    <Divider />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </main>;
}