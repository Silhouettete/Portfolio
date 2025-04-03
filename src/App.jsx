import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Experiences from "./components/Experiences.jsx";

export default function App() {
  return (
    <main className="text-gray-400 bg-grey-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Experiences />
      <Contact />
    </main>
  );
}
