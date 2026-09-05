import { motion } from "framer-motion";
import { FaCameraRetro } from "react-icons/fa";

export default function About() {
  return (
    // Zmienione: wyrzucone justify-center, dodane pt-32 żeby zachować odstęp od navbaru
    <section id="about" className="min-h-screen flex flex-col pt-32 pb-20 bg-[#111111] px-4 md:px-8">
      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          // Zmienione: zwiększony dolny margines, żeby odepchnąć tekst i zdjęcie w dół
          className="text-center mb-20 md:mb-28"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">About Me</h3>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Lewa kolumna: Miejsce na zdjęcie */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }} 
            className="w-full md:w-5/12 lg:w-4/12 flex justify-center"
          >
            <div className="w-full max-w-sm aspect-[4/5] bg-[#161616] rounded-2xl border-2 border-dashed border-gray-700 flex flex-col items-center justify-center text-gray-500 relative group overflow-hidden hover:border-emerald-500 transition-colors duration-300">
              <FaCameraRetro className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 text-gray-600 group-hover:text-emerald-500" />
              <span className="text-sm font-medium tracking-wider">PHOTO COMING SOON</span>
            </div>
          </motion.div>

          {/* Prawa kolumna: Tekst */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            // Zmienione: pr-4 lg:pr-12 (odsunięcie od prawej), space-y-10 (rozciągnięcie w dół), leading-loose (luźniejszy tekst)
            className="w-full md:w-7/12 lg:w-8/12 space-y-10 text-gray-300 leading-loose text-lg md:text-xl text-justify pr-4 lg:pr-12"
          >
            <p>
              I am a third-year Computer Science student at the University of Łódź with hands-on experience in database administration and network management. I enjoy solving real-world problems and thrive in environments where I can learn quickly and apply new technologies. Currently, I am actively developing my skills in AI and LLM technologies through my engineering thesis project.
            </p>
            <p>
              My technical background bridges the gap between software development and IT infrastructure. Whether it's writing and optimizing SQL queries, managing LAN network infrastructure, or diving into backend development with Python and C#, I focus on creating stable, secure, and efficient systems.
            </p>
            <p>
              Beyond the screen, my passions are deeply tied to technology and performance. I am a huge Formula 1 fan and enjoy exploring F1 telemetry data analysis. I also love building and optimizing PC hardware, as well as pushing limits in sim racing. When I need to disconnect, you can find me maintaining an active lifestyle - strength training or mountain hiking - or relaxing with a good Sci-Fi or fantasy books and games.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}