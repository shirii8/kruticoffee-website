import React from "react";
import { motion } from "framer-motion";

const Skills = [".KRUTI", ".COFFEE", ".KRUTI", ".COFFEE", ".KRUTI", ".COFFEE"];

const Marquee = () => {
  const duplicatedSkills = [...Skills, ...Skills, ...Skills]; // Triple for smoother infinite loop

  return (
    <div className="relative w-full bg-[#1a0f0b] overflow-hidden py-20 lg:py-32">
      
      {/* ARTISTIC BACKGROUND BLOCK (The Contrast Slice) */}
      <div className="absolute top-1/2 left-0 w-full h-[40%] bg-[#221512] -translate-y-1/2 z-0 opacity-50 shadow-[0_0_100px_rgba(0,0,0,0.5)]"></div>
      
      {/* TOP & BOTTOM ACCENT LINES */}
      <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4c2b23] to-transparent z-10"></div>
      <div className="absolute bottom-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4c2b23] to-transparent z-10"></div>

      {/* GLASSMORPHIC EDGE GRADIENTS (The "Unique" Fade) */}
      <div className="absolute top-0 left-0 w-[15%] h-full bg-gradient-to-r from-[#1a0f0b] to-transparent z-30 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[15%] h-full bg-gradient-to-l from-[#1a0f0b] to-transparent z-30 pointer-events-none"></div>

      <div className="relative z-20 flex flex-col gap-0 border-y border-[#4c2b23]/30 py-4 backdrop-blur-[2px]">
        
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div key={index} className="flex items-center group">
              {/* PRIMARY TEXT: Modernist Outline + Solid Fill Mix */}
              <h1 className="font-brand text-[12vw] md:text-[8vw] leading-none font-black uppercase tracking-tighter px-8 transition-all duration-700">
                <span className="text-transparent stroke-text group-hover:text-[#f4e3d8] transition-all duration-700">
                  {skill}
                </span>
              </h1>

              {/* ARTISTIC SEPARATOR: Rotating Diamond */}
              <div className="relative w-4 h-4 md:w-6 md:h-6 border border-[#b49e94] rotate-45 flex items-center justify-center overflow-hidden group-hover:bg-[#b49e94] transition-all duration-500">
                 <div className="w-1 h-1 bg-[#b49e94] group-hover:bg-[#1a0f0b]"></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* STYLES FOR TEXT OUTLINE */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
        .font-brand { font-family: 'Syncopate', sans-serif; }
        
        .stroke-text {
          -webkit-text-stroke: 1px rgba(180, 158, 148, 0.4);
          letter-spacing: -0.05em;
        }

        /* Glassmorphism for the moving row container */
        .glass-marquee {
          background: rgba(26, 15, 11, 0.2);
          backdrop-filter: blur(4px);
        }
      `}</style>

      {/* FLOATING GHOST ELEMENT (The "Premium" Touch) */}
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-40">
        <span className="text-[10px] font-brand tracking-[1.5em] text-[#b49e94] opacity-20 uppercase whitespace-nowrap">
          Artisanal Coffee Heritage
        </span>
      </div>
    </div>
  );
};

export default Marquee;