
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, DollarSign, Clock, Coffee, Users, ClipboardCheck, HelpCircle, Laptop, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'When and Where?',
    answer: (
      <>
        Sentinel Hack will take place on April 28th and 29th at K.S Institute of Technology, 14, Kanakapura Main Road, Municipal Corporation Layout, Raghuvanahalli, Bengaluru, Karnataka 560109.{" "}
        <a
          href="https://maps.app.goo.gl/bWyLk1W3xV9Wxv438"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-neon-blue hover:text-neon-blue/80 transition"
        >
          Click here for the map.
        </a>
      </>
    ),
        icon: <MapPin className="h-4 w-4 text-neon-blue" />
  },
  {
    question: 'How much will it cost?',
    answer: "The participation cost per head is Rs.200",
    icon: <DollarSign className="h-4 w-4 text-neon-blue" />
  },
  {
    question: 'Duration?',
    answer: "You will have 24 hours to build your product. The event starts Thursday morning and runs until Friday morning. A detailed schedule will be released closer to the event.",
    icon: <Clock className="h-4 w-4 text-neon-blue" />
  },
  {
    question: 'Food?',
    answer: "We will provide free grub to keep you hacking for 24 hours. There will also be stalls for your convenience.",
    icon: <Coffee className="h-4 w-4 text-neon-blue" />
  },
  {
    question: 'How do teams work?',
    answer: "Teams can have 2-4 members. Cross-college teams are allowed and members can be from different colleges.",
    icon: <Users className="h-4 w-4 text-neon-blue" />
  },
  {
    question: 'How does registration work?',
    answer: "Apply via the provided Google form. Payment is made through online apps and a transaction screenshot must be uploaded. Confirmation will be sent via email.",
    icon: <ClipboardCheck className="h-4 w-4 text-neon-blue" />
  },
  {
    question: 'What if this is my first hackathon?',
    answer: "Don't worry – there will be mentors to help you. Plus, we have fun surprises for newcomers.",
    icon: <HelpCircle className="h-4 w-4 text-neon-blue" />
  },
  {
    question: 'What should I bring?',
    answer: "Bring your college ID, laptop, charger, and spike busters.",
    icon: <Laptop className="h-4 w-4 text-neon-blue" />
  },
  {
    question: 'Anything else?',
    answer: "Feel free to email us or reach out on Instagram if you have any questions.",
    icon: <MessageCircle className="h-4 w-4 text-neon-blue" />
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cyber mb-3 sm:mb-4 md:mb-6">
            FREQUENTLY <span className="neon-text-blue">ASKED QUESTIONS</span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-300">
            Everything you need to know about Sentinel Hack 5.0. Can't find the answer you're looking for? Contact our team.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left glassmorphism p-3 sm:p-4 md:p-5 rounded-lg border ${
                  activeIndex === index ? 'border-neon-blue' : 'border-white/10'
                } transition-all duration-300`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    {faq.icon}
                    <h3 className="font-cyber text-sm sm:text-base md:text-lg pr-3">{faq.question}</h3>
                  </div>
                  <ChevronDown 
                    className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 transition-transform ${
                      activeIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 sm:mt-4 text-gray-300 text-xs sm:text-sm md:text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
