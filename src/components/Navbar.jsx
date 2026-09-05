import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ setIsContactOpen }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleMobileNav = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMobileContact = () => {
    setIsMobileMenuOpen(false);
    setIsContactOpen(true);
  };

  return (
    <>
      <nav className="fixed top-0 inset-x-0 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 md:px-4 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-xl font-bold tracking-wider cursor-pointer z-50">
            <a href="#hero" onClick={handleMobileNav}>FM</a><span className="text-emerald-500">.</span>
          </div>
          
          {/* Nawigacja Desktopowa */}
          <ul className="hidden md:flex space-x-8 text-sm text-gray-300 font-medium">
            <li className="hover:text-emerald-400 cursor-pointer transition-colors duration-300"><a href="#about">About</a></li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors duration-300"><a href="#skills">Skills</a></li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors duration-300"><a href="#experience">Experience</a></li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors duration-300"><a href="#projects">Projects</a></li>
          </ul>
          
          {/* Przycisk Contact (Desktop) */}
          <div className="hidden md:block">
            <button 
              onClick={() => setIsContactOpen(true)}
              className="px-4 py-2 border border-gray-700 hover:border-emerald-500 hover:text-emerald-400 rounded-md transition-all duration-300 text-sm cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Ikona Menu (Hamburger) */}
          <div className="md:hidden z-50 flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2 text-gray-300 hover:text-white focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Modal Menu Mobilnego */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center h-[100dvh] w-full md:hidden"
          >
            <ul className="flex flex-col space-y-6 text-2xl text-gray-300 font-medium text-center w-full">
              <li className="hover:text-emerald-400 transition-colors duration-300">
                <a href="#about" onClick={handleMobileNav} className="block w-full py-4">About</a>
              </li>
              <li className="hover:text-emerald-400 transition-colors duration-300">
                <a href="#skills" onClick={handleMobileNav} className="block w-full py-4">Skills</a>
              </li>
              <li className="hover:text-emerald-400 transition-colors duration-300">
                <a href="#experience" onClick={handleMobileNav} className="block w-full py-4">Experience</a>
              </li>
              <li className="hover:text-emerald-400 transition-colors duration-300">
                <a href="#projects" onClick={handleMobileNav} className="block w-full py-4">Projects</a>
              </li>
              <li className="pt-4">
                <button 
                  onClick={handleMobileContact}
                  className="px-12 py-3 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white rounded-md transition-all duration-300 cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}