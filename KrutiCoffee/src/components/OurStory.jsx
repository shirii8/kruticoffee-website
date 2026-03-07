import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
  return (
    // Added ID here for the button link
    <section id="our-story-section" className="relative min-h-screen bg-[#1a0f0b] py-24 px-6 lg:px-20 overflow-hidden flex items-center">
      
      {/* ARTISTIC LAYER: Deep Espresso Block */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-20 left-[-10%] w-[50%] h-[70%] bg-[#221512] rounded-[4rem] rotate-6 -z-0 shadow-[40px_40px_80px_rgba(0,0,0,0.9)] hidden lg:block" 
      />

      {/* ARTISTIC LAYER: Mocha Accent Block */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.2 }}
        viewport={{ once: true }}
        className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#4c2b23] rounded-full blur-[120px] -z-0" 
      />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* LEFT SIDE: The Visual Composition */}
        <div className="lg:col-span-5 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-20"
          >
            {/* Main Imagery with stylized shadow */}
            <div className="relative rounded-lg overflow-hidden shadow-[30px_30px_0px_#4c2b23]">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" 
                alt="Roasting Craft" 
                className="w-full h-[600px] object-cover filter sepia-[0.2] contrast-125"
              />
              {/* Glassmorphic Overlay on Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0b] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Stats Card (Glassmorphism) */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="absolute -bottom-8 -left-8 md:-left-12 p-8 bg-[#b49e94]/10 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl z-30"
            >
              <p className="text-[#b49e94] font-serif text-5xl mb-1">01</p>
              <p className="text-white text-[10px] uppercase tracking-[0.3em] opacity-70">World Class Roastery</p>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: The Narrative Card */}
        <div className="lg:col-span-7 lg:pl-10">
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group"
          >
            {/* Contrast Color Block behind text */}
            <div className="absolute -inset-4 bg-[#221512] rounded-3xl -rotate-1 group-hover:rotate-0 transition-transform duration-700 -z-10 shadow-2xl" />
            
            {/* The Glass Container */}
            <div className="bg-white/[0.03] backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/[0.05]">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-[1px] bg-[#b49e94]" />
                <span className="text-[#b49e94] text-xs font-bold uppercase tracking-[0.5em]">The Origin</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1]">
                Crafting <br />
                <span className="text-[#b49e94] italic font-light">Dark Alchemy.</span>
              </h2>

              <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
                <p>
                  Established in 2026, we began with a singular obsession: the molecular 
                  transition of the green bean into the <span className="text-[#b49e94] font-medium">perfect extraction</span>.
                </p>
                <p className="border-l-2 border-[#4c2b23] pl-6 italic">
                  "We don't just serve coffee; we curate the moment between 
                  the bean's heat and your first breath."
                </p>
              </div>

              {/* Bottom Decorative Block */}
              <div className="mt-12 pt-10 border-t border-white/5 flex flex-wrap gap-8">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl font-serif">2026</span>
                  <span className="text-[#b49e94] text-[10px] uppercase tracking-widest">Inception</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl font-serif">Global</span>
                  <span className="text-[#b49e94] text-[10px] uppercase tracking-widest">Sourcing</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;