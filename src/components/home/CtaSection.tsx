
import React from 'react';
import { motion } from 'framer-motion';

const CtaSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-dark/90 z-10"></div>
        <div className="cyber-grid opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-cyber mb-3 sm:mb-4 md:mb-6 glitch" data-text="READY TO HACK THE FUTURE?">
            READY TO HACK THE <span className="neon-text-red">FUTURE</span>?
          </h2>
          <p className="text-sm sm:text-base md:text-xl mb-4 sm:mb-6 md:mb-10 text-gray-300 px-2">
            Join hundreds of innovators at Sentinel Hack 5.0 on April 28-29, 2025 and be part of a transformative tech experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://forms.gle/p7oLpTmREHshymSSA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-cyber bg-cyber-red px-4 sm:px-6 py-2 sm:py-3 md:px-8 md:py-4 rounded clip-slant hover:shadow-neon-red transition-all duration-300 text-sm sm:text-base md:text-lg uppercase tracking-wider"
            >
              Register Now
            </a>
            <a 
              href="mailto:Sentinelhack5.0@ksit.edu.in" 
              className="font-cyber border border-neon-blue px-4 sm:px-6 py-2 sm:py-3 md:px-8 md:py-4 rounded clip-slant hover:shadow-neon-blue transition-all duration-300 text-sm sm:text-base md:text-lg uppercase tracking-wider"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Animated tech elements */}
      <div className="absolute left-0 top-1/4 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 opacity-20 animate-pulse-neon">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF1A3E" d="M41.3,-65.5C54.4,-55.2,66.6,-43.8,73,-28.9C79.4,-14.1,79.9,4.1,75.2,20.6C70.6,37.1,60.7,51.9,47.5,61.1C34.3,70.3,17.2,74,0.1,73.9C-17,73.8,-33.9,69.9,-47.2,60.6C-60.5,51.2,-70.1,36.4,-76.3,19C-82.4,1.6,-85.2,-18.4,-78.5,-34C-71.8,-49.5,-55.6,-60.6,-40,-69C-24.4,-77.3,-9.3,-83,3.8,-88.9C17,-94.9,33.9,-101.2,44.6,-92.3C55.2,-83.3,59.5,-59.1,41.3,-65.5Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="absolute right-0 bottom-1/4 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 opacity-20 animate-pulse-neon">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1ED5FF" d="M47.7,-73.5C62.4,-65.8,75.3,-52.4,82,-36C88.7,-19.6,89.2,-0.3,85,17.5C80.9,35.3,72.2,51.5,59,61.5C45.9,71.5,28.4,75.3,11.3,77C-5.8,78.7,-22.5,78.3,-36.7,71.4C-50.8,64.4,-62.5,50.9,-70.3,35.2C-78.1,19.6,-81.9,1.7,-77.4,-13C-72.8,-27.8,-59.9,-39.4,-46.3,-47.6C-32.7,-55.7,-18.4,-60.4,-1.5,-58.3C15.4,-56.1,32.9,-47.1,47.7,-73.5Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
};

export default CtaSection;
