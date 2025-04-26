
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

// Set the hackathon date - April 28-29, 2025
const hackathonDate = new Date('2025-04-28T09:00:00');

const HeroSection = () => {
  const [glitching, setGlitching] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Create random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-10">
      <div className="absolute inset-0 z-0 cyber-grid opacity-30"></div>
      
      <div className="container mx-auto px-4 z-10 mt-12">
        {/* Institution header - Now centered */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-12">
          <div className="flex flex-row items-center justify-center gap-4 md:gap-6 lg:gap-10">
            {/* Left logo (KSIT) - Updated with new image */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <img 
                src="/lovable-uploads/492532dc-e4ce-49f8-8c94-b287bed8e7d8.png" 
                alt="KSIT Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Center text - Now properly centered */}
            <div className="text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-cyber font-bold mb-1 md:mb-2">
                K S INSTITUTE OF TECHNOLOGY
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-1 md:mb-2">
                Department of Computer Science and Engineering
              </p>
              <p className="text-base sm:text-lg md:text-xl text-cyber-red font-cyber">
                Firefox Club Presents
              </p>
            </div>
            
            {/* Right logo (25 years) */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <img 
                src="/lovable-uploads/92996f96-6f31-4d68-9605-95e799b79c7d.png" 
                alt="25 Years Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        
        {/* Sentinel Hack 5.0 Logo - Made smaller */}
        <div className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[220px] mx-auto mb-6 sm:mb-8">
          <img 
            src="/lovable-uploads/4a4281f1-17f9-45e0-ad93-43017c48b04d.png" 
            alt="Sentinel Hack 5.0" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="mb-6 sm:mb-8"
          >
            <h1 
              className={`text-3xl sm:text-5xl md:text-7xl font-cyber font-black mb-3 sm:mb-4 ${glitching ? 'glitch' : ''}`}
              data-text="SENTINEL HACK 5.0"
            >
              <span className="neon-text-red">SENTINEL</span> 
              <span className="text-white">HACK</span> 
              <span className="text-white">5.0</span>
            </h1>
            <CountdownTimer targetDate={hackathonDate} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8"
          >
            <span
              className="font-cyber bg-gray-600 px-6 sm:px-8 py-3 rounded clip-slant hover:shadow-neon-red transition-all duration-300 text-sm sm:text-lg uppercase tracking-wider"
            >
              Registrations Closed
            </span>
            <button 
              onClick={() => scrollToSection('tracks')}
              className="font-cyber border border-cyber-red/50 px-6 sm:px-8 py-3 rounded clip-slant hover:shadow-neon-red transition-all duration-300 text-sm sm:text-lg uppercase tracking-wider"
            >
              Explore Tracks
            </button>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.button 
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 10, 0] }} 
          transition={{ 
            repeat: Infinity, 
            duration: 1.5 
          }}
          className="cursor-pointer bg-transparent border-none text-cyber-red hover:text-white transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={30} strokeWidth={2.5} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
