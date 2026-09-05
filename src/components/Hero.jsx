import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen px-4 text-center pt-16">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-gray-400 text-xl md:text-2xl mb-2">
        Hi, I'm
      </motion.h2>
      
      <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 pb-2">
        Filip Marciniak
      </motion.h1>
      
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed font-light">
        Computer Science Student & Junior Developer with hands-on experience in backend programming, database administration, and IT infrastructure.
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex space-x-4">
        <a 
          href="/cv/Filip_Marciniak_CV.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-emerald-500 text-[#0a0a0a] font-semibold rounded-md hover:bg-emerald-400 transition-colors duration-300 inline-flex items-center justify-center cursor-pointer"
        >
          View My CV
        </a>
        <a href="#about" className="px-8 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-colors duration-300">
          Learn More
        </a>
      </motion.div>
    </section>
  );
}