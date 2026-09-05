import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function ContactModal({ isContactOpen, setIsContactOpen }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault(); 
    setIsSubmitting(true);
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
    setIsSubmitting(false);
  };

  return (
    <AnimatePresence>
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#111111] border border-gray-800 rounded-2xl w-full max-w-lg p-8 relative shadow-2xl text-white"
          >
            <button 
              onClick={() => {
                setIsContactOpen(false);
                setTimeout(() => setIsSubmitted(false), 300);
              }}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <FaCheckCircle className="text-6xl text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400 mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => {
                    setIsContactOpen(false);
                    setTimeout(() => setIsSubmitted(false), 300);
                  }}
                  className="px-8 py-3 bg-[#1a1a1a] hover:bg-emerald-500 hover:text-black text-white font-semibold rounded-lg border border-gray-800 transition-all duration-300"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                <p className="text-gray-400 text-sm mb-6">Have a question or want to work together? Drop me a message.</p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <input type="hidden" name="access_key" value="d71aa9ee-5f8c-4d2b-86ae-e4a6c3af916b" />

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Your Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Message</label>
                    <textarea 
                      name="message" 
                      rows="4" 
                      required 
                      className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-3 ${isSubmitting ? 'bg-gray-600' : 'bg-emerald-500 hover:bg-emerald-600'} text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-pointer`}
                  >
                    <FaPaperPlane className="mr-2 text-sm" /> 
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}