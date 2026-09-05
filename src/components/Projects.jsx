import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-20 bg-[#0a0a0a] px-4">
      <div className="max-w-6xl mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Projects</h3>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-16">
          
          {/* Projekt 1: F1RaceLiveDashboard */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden md:flex items-center hover:border-cyan-500 transition-colors duration-300 group p-6 md:p-8 gap-8"
          >
            <div className="md:w-1/2 w-full aspect-video rounded-xl overflow-hidden bg-[#161616] relative shadow-lg">
              <img 
                src="/img/f1-preview.gif" 
                alt="F1RaceLiveDashboard Preview" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="flex items-center space-x-3 mb-3">
                <h4 className="text-2xl font-bold text-gray-200 group-hover:text-cyan-400 transition-colors">F1RaceLiveDashboard</h4>
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/20">Web App</span>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                A web application combining two of my biggest passions: software development and Formula 1. It processes and visualizes live race telemetry data, providing real-time insights and statistics directly in the browser.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["C#", ".NET", "JavaScript", "HTML/CSS", "F1 Telemetry"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-[#1a1a1a] text-cyan-400 rounded-md text-xs border border-gray-800">{tech}</span>
                ))}
              </div>

              <div>
                <a href="https://github.com/wUssopp/F1RaceLiveDashboard" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-white bg-[#1a1a1a] hover:bg-cyan-500 hover:text-black px-4 py-2 rounded-lg border border-gray-800 transition-all duration-300">
                  <FaGithub className="mr-2 text-lg" /> Source Code
                </a>
              </div>
            </div>
          </motion.div>

          {/* Projekt 2: oGames */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden md:flex items-center md:flex-row-reverse hover:border-emerald-500 transition-colors duration-300 group p-6 md:p-8 gap-8"
          >
            <div className="md:w-1/2 w-full aspect-video rounded-xl overflow-hidden bg-[#161616] relative shadow-lg">
              <img 
                src="/img/ogames-preview.gif" 
                alt="oGames Preview" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="flex items-center space-x-3 mb-3">
                <h4 className="text-2xl font-bold text-gray-200 group-hover:text-emerald-400 transition-colors">oGames</h4>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20">Web App</span>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                A robust web-based gaming management platform and digital storefront developed in C# and ASP.NET Core MVC. Built with clean architecture and solid backend foundations to handle data efficiently.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["C#", "ASP.NET Core MVC", "JavaScript", "HTML/CSS"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-[#1a1a1a] text-emerald-400 rounded-md text-xs border border-gray-800">{tech}</span>
                ))}
              </div>

              <div>
                <a href="https://github.com/wUssopp/oGames" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-white bg-[#1a1a1a] hover:bg-emerald-500 hover:text-black px-4 py-2 rounded-lg border border-gray-800 transition-all duration-300">
                  <FaGithub className="mr-2 text-lg" /> Source Code
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Link do wszystkich projektów na GitHubie */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/wUssopp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-400 hover:text-emerald-400 font-medium transition-colors duration-300 group text-lg"
          >
            View all my projects on GitHub
            <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}