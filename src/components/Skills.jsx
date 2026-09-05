import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaServer, FaTools } from "react-icons/fa";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    // Zmienione klasy: dodano min-h-screen flex flex-col justify-center
    <section id="skills" className="min-h-screen flex flex-col justify-center py-20 bg-[#0a0a0a] px-4">
      <div className="max-w-6xl mx-auto w-full">
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h3>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Programming */}
          <motion.div variants={itemVariants} className="bg-[#111111] border border-gray-800 p-8 rounded-2xl hover:border-emerald-500 transition-colors duration-300 group">
            <div className="flex items-center mb-6">
              <FaCode className="text-3xl text-emerald-500 mr-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold text-gray-200">Programming</h4>
            </div>
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-emerald-400 font-semibold block mb-1">Advanced / Proficient</span>
                <div className="flex flex-wrap gap-2">
                  {["C#", "Python"].map((s) => <span key={s} className="px-3 py-1 bg-[#1a1a1a] text-gray-300 rounded-md border border-gray-800">{s}</span>)}
                </div>
              </div>
              <div>
                <span className="text-cyan-400 font-semibold block mb-1">Intermediate</span>
                <div className="flex flex-wrap gap-2">
                  {["Java", "C++", "JavaScript", "PHP (Laravel)", "HTML/CSS"].map((s) => <span key={s} className="px-3 py-1 bg-[#1a1a1a] text-gray-300 rounded-md border border-gray-800">{s}</span>)}
                </div>
              </div>
              <div>
                <span className="text-purple-400 font-semibold block mb-1">Basic</span>
                <div className="flex flex-wrap gap-2">
                  {["React", "Tailwind CSS"].map((s) => <span key={s} className="px-3 py-1 bg-[#1a1a1a] text-gray-300 rounded-md border border-gray-800">{s}</span>)}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div variants={itemVariants} className="bg-[#111111] border border-gray-800 p-8 rounded-2xl hover:border-cyan-500 transition-colors duration-300 group">
            <div className="flex items-center mb-6">
              <FaDatabase className="text-3xl text-cyan-500 mr-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold text-gray-200">Databases</h4>
            </div>
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-emerald-400 font-semibold block mb-1">Advanced / Proficient</span>
                <div className="flex flex-wrap gap-2">
                  {["MS SQL", "T-SQL"].map((s) => <span key={s} className="px-3 py-1 bg-[#1a1a1a] text-gray-300 rounded-md border border-gray-800">{s}</span>)}
                </div>
              </div>
              <div>
                <span className="text-cyan-400 font-semibold block mb-1">Intermediate</span>
                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL", "Oracle SQL", "MySQL"].map((s) => <span key={s} className="px-3 py-1 bg-[#1a1a1a] text-gray-300 rounded-md border border-gray-800">{s}</span>)}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Networking & IT */}
          <motion.div variants={itemVariants} className="bg-[#111111] border border-gray-800 p-8 rounded-2xl hover:border-purple-500 transition-colors duration-300 group">
            <div className="flex items-center mb-6">
              <FaServer className="text-3xl text-purple-500 mr-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold text-gray-200">Networking & IT</h4>
            </div>
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-cyan-400 font-semibold block mb-1">Intermediate</span>
                <div className="flex flex-wrap gap-2">
                  {["LAN Administration", "Windows Server", "Linux"].map((s) => <span key={s} className="px-3 py-1 bg-[#1a1a1a] text-gray-300 rounded-md border border-gray-800">{s}</span>)}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div variants={itemVariants} className="bg-[#111111] border border-gray-800 p-8 rounded-2xl hover:border-blue-500 transition-colors duration-300 group">
            <div className="flex items-center mb-6">
              <FaTools className="text-3xl text-blue-500 mr-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold text-gray-200">Tools</h4>
            </div>
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-cyan-400 font-semibold block mb-1">Intermediate</span>
                <div className="flex flex-wrap gap-2">
                  {["Git", "VirtualBox"].map((s) => <span key={s} className="px-3 py-1 bg-[#1a1a1a] text-gray-300 rounded-md border border-gray-800">{s}</span>)}
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}