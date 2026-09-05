import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactModal from "./components/ContactModal";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar setIsContactOpen={setIsContactOpen} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <ContactModal isContactOpen={isContactOpen} setIsContactOpen={setIsContactOpen} />
    </div>
  );
}

export default App;