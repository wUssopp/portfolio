import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center py-20 bg-[#111111] px-4">
      <div className="max-w-4xl mx-auto w-full">
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Experience</h3>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Dodano relative, aby zablokować główną linię w tym kontenerze */}
        <div className="relative space-y-12">
          
          {/* NOWOŚĆ: Ciągła linia w tle, która spaja całe doświadczenie */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-gray-800 -translate-x-1/2 z-0"></div>

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="relative pl-8 md:pl-0 z-10">
            <div className="md:flex items-center justify-between mb-4">
              <div className="md:w-5/12 text-left md:text-right pr-8">
                <h4 className="text-xl font-bold text-gray-200">University of Łódź</h4>
                <div className="text-emerald-500 font-medium mt-1 mb-2 md:mb-0">Network Administrator at Student Dormitory</div>
              </div>
              
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-[#0a0a0a] border-2 border-emerald-500 rounded-full items-center justify-center z-10">
                <FaBriefcase className="text-emerald-500 text-sm" />
              </div>
              
              {/* Usunięto starą, niedziałającą kreskę stąd */}
              
              <div className="md:w-5/12 pl-0 md:pl-8">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <FaCalendarAlt className="mr-2" /> 10/2025 – Current
                </div>
                <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                  <li>Manage and maintain the LAN network infrastructure.</li>
                  <li>Troubleshoot hardware and software connectivity issues.</li>
                  <li>Monitor network performance and ensure stable, secure internet access.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Usunięto zduplikowany margines (mt-12), bo space-y-12 załatwia równe odstępy */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }} className="relative pl-8 md:pl-0 z-10">
            <div className="md:flex items-center justify-between md:flex-row-reverse mb-4">
              <div className="md:w-5/12 text-left pl-0 md:pl-8">
                <h4 className="text-xl font-bold text-gray-200">Merrid Controls</h4>
                <div className="text-cyan-500 font-medium mt-1 mb-2 md:mb-0">Database Administrator Intern</div>
              </div>
              
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-[#0a0a0a] border-2 border-cyan-500 rounded-full items-center justify-center z-10">
                <FaBriefcase className="text-cyan-500 text-sm" />
              </div>
              
              <div className="md:w-5/12 text-left md:text-right pr-8">
                <div className="flex items-center md:justify-end text-gray-500 text-sm mb-3">
                  <FaCalendarAlt className="mr-2" /> 06/2025 – 09/2025 | Łódź, Poland
                </div>
                <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside md:list-none md:pl-0">
                  <li className="md:relative md:pr-4">Administered and maintained MS SQL databases in a production environment.</li>
                  <li className="md:relative md:pr-4">Wrote and optimized SQL queries, stored procedures, and reports.</li>
                  <li className="md:relative md:pr-4">Supported data integrity, backups, and day-to-day database operations.</li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}