
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {RegisterButton} from '../ui/RegisterButton'

const navItems = [
  { name: 'Home', path: '/', id: 'home' },
  { name: 'About', path: '/#about', id: 'about' },
  { name: 'Tracks', path: '/#tracks', id: 'tracks' },
  { name: 'Sponsors', path: '/#sponsors', id: 'sponsors' },
  { name: 'FAQs', path: '/#faqs', id: 'faqs' },
  { name: 'Contact', path: '/#contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false); // Close the mobile menu
    
    // Adding a slight delay to ensure the menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        // Using a more robust scrolling method
        window.scrollTo({
          top: element.offsetTop - 80, // Offset to account for navbar height
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glassmorphism py-2' : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="font-cyber text-base sm:text-xl md:text-2xl font-bold neon-text-red">
                SENTINEL
              </span>
              <span className="font-cyber text-base sm:text-xl md:text-2xl font-bold neon-text-blue">
                HACK
              </span>
              <span className="font-cyber text-base sm:text-xl md:text-2xl font-bold text-white">
                5.0
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="font-cyber text-sm uppercase tracking-wider hover:text-neon-red transition-colors duration-300 px-1"
              >
                {item.name}
              </button>
            ))}
          <span
            className="font-cyber text-sm uppercase tracking-wider ml-1 bg-gray-600 px-3 lg:px-6 py-2 rounded clip-slant cursor-not-allowed opacity-75"
          >
            Registrations Closed
          </span>

          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden inset-0 top-[57px] backdrop-blur-lg bg-cyber-dark/70 z-50 overflow-auto"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-5">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="font-cyber text-base uppercase tracking-wider py-3 text-left hover:text-neon-red transition-colors duration-300 border-b border-cyber-red/20"
                >
                  {item.name}
                </button>
              ))}
              <span
                className="font-cyber text-sm uppercase tracking-wider ml-1 bg-gray-600 px-3 lg:px-6 py-2 rounded clip-slant cursor-not-allowed opacity-75"
              >
                Registrations Closed
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
