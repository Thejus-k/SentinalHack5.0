
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cyber mb-3 sm:mb-4 md:mb-6">
              ABOUT <span className="neon-text-red">SENTINEL HACK 5.0</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 md:mb-6">
              Sentinel Hack 5.0 is a premier 24-hour state level hackathon designed to bring together the brightest minds
              and innovative thinkers. Taking place on April 28-29, 2025, this event offers participants
              the chance to collaborate, create, and solve real-world challenges through technology.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 md:mb-6">
              With mentorship from industry experts, workshops on cutting-edge technologies, and 
              opportunities to network with tech leaders, Sentinel Hack 5.0 is the perfect platform to showcase
              your skills and push the boundaries of what's possible.
            </p>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-6 md:mt-8">
              <div className="glassmorphism p-2 sm:p-3 md:p-4 text-center border border-white/10">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-cyber neon-text-blue mb-0.5 md:mb-1">500+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-400">PARTICIPANTS</div>
              </div>
              <div className="glassmorphism p-2 sm:p-3 md:p-4 text-center border border-white/10">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-cyber neon-text-red mb-0.5 md:mb-1">24</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-400">HOURS</div>
              </div>
              <div className="glassmorphism p-2 sm:p-3 md:p-4 text-center border border-white/10">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-cyber neon-text-blue mb-0.5 md:mb-1">₹80K</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-400">PRIZES</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glassmorphism p-4 md:p-6 border border-white/10 rounded-lg mt-6 lg:mt-0"
          >
          <div className="mb-4 sm:mb-6 flex justify-center px-4">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-cyber-dark/50 p-4 rounded-lg border border-white/10 text-center">
              <span className="text-lg sm:text-xl md:text-2xl font-cyber neon-text-blue block mb-3 break-words">
                SENTINEL HACK
              </span>
              <div className="w-full aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/bFiLlNWwkz8"
                  title="Sentinel Hack 5.0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
              ></iframe>
              </div>
            </div>
          </div>


            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-cyber-red flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-base sm:text-lg md:text-xl">📅</span>
                </div>
                <div>
                  <h3 className="font-cyber text-sm sm:text-base md:text-lg">Date & Time</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">April 28-29, 2025 • 09:00 AM - 09:00 AM</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-neon-blue flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-base sm:text-lg md:text-xl">📍</span>
                </div>
                <div>
                  <a href="https://maps.app.goo.gl/bWyLk1W3xV9Wxv438" target="_blank" rel="noopener noreferrer" className="underline text-neon-blue hover:text-neon-blue/80 transition">
                  <h3 className="font-cyber text-sm sm:text-base md:text-lg">Venue</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">KSIT Campus, Bengaluru</p>
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-cyber-red flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-base sm:text-lg md:text-xl">👥</span>
                </div>
                <div>
                  <h3 className="font-cyber text-sm sm:text-base md:text-lg">Team Size</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">2-4 members per team</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
