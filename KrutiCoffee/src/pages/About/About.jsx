import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const principles = [
    {
      id: "01",
      title: "CULTURAL ARCHITECTURE",
      content: "We don't just build cafes; we design sensory sanctuaries that honor the heritage of Koraput. Every pillar and pour is a tribute to the soil.",
      color: "#4c2b23"
    },
    {
      id: "02",
      title: "MOLECULAR PRECISION",
      content: "Our roasting is a calculated science. We control heat at a granular level to ensure the 'Soul' of the bean is never compromised by the flame.",
      color: "#221512"
    },
    {
      id: "03",
      title: "ETHICAL LINEAGE",
      content: "100% Traceability. We bridge the gap between tribal excellence and urban luxury, ensuring the value returns to the highlands.",
      color: "#b49e94"
    }
  ];

  return (
    <main className="ml-[120px] relative min-h-screen bg-[#1a0f0b] text-[#b49e94] overflow-x-hidden font-sans overflow-x-hidden">
      
      {/* 1. LAYERED BACKGROUND SYSTEM (No Gradients) */}
      <div className="absolute top-0 right-0 w-[35%] h-full bg-[#221512] z-0 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]" />
      <div className="absolute top-[15%] left-[-5%] w-72 h-[120%] bg-[#4c2b23] rotate-3 z-0 opacity-40 shadow-2xl" />
      
      <nav className="relative z-50 p-10">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-4 text-[10px] tracking-[0.6em] font-black uppercase hover:text-white transition-colors"
        >
          <span className="w-12 h-[2px] bg-[#b49e94]"></span>
          Back to Terminal
        </button>
      </nav>

      <div className="container mx-auto px-6 lg:px-20 relative z-10 py-10">
        
        {/* 2. HERO HEADER SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-32">
          <div className="lg:col-span-8">
            <motion.h1 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-7xl md:text-[10rem] font-black uppercase leading-[0.8] tracking-tighter text-white"
            >
              The <br /> <span className="text-[#b49e94] ml-12 md:ml-24 flex relative">Manifesto.</span>
            </motion.h1>
          </div>
          <div className="lg:col-span-4 flex items-end absolute -top-8 right-12">
            <div className="bg-[#b49e94]/10 backdrop-blur-2xl ml-12 p-8 border border-white/10 shadow-[20px_20px_0px_#4c2b23]">
              <p className="text-xs uppercase tracking-[0.3em] leading-relaxed">
                Kruti Coffee is an architectural exploration of flavor. Founded 2026. Born in Odisha. Perfected in the Roast.
              </p>
            </div>
          </div>
        </section>

        {/* 3. COMPLEX 3D CARDS SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
          {principles.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="relative group"
            >
              {/* Offset Shadow Block */}
              <div className="absolute inset-0 bg-[#b49e94] translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
              
              <div className="bg-[#1a0f0b] border border-[#4c2b23] p-10 h-full flex flex-col justify-between shadow-2xl">
                <div>
                  <span className="text-6xl font-black text-[#4c2b23] block mb-6 leading-none">
                    {item.id}
                  </span>
                  <h3 className="text-white font-bold tracking-[0.2em] text-lg mb-6">
                    {item.title}
                  </h3>
                  <p className="text-[#b49e94]/60 text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>
                <div className="mt-12 w-8 h-[2px] bg-[#b49e94]" />
              </div>
            </motion.div>
          ))}
        </section>

        {/* 4. THE CORE "ABOUT" COMPOSITION (Layered Elements) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Stack */}
          <div className="lg:col-span-6 relative">
             {/* Decorative Background Blocks */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#4c2b23] -z-10 shadow-2xl" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#221512] -z-10 shadow-2xl" />
            
            <div className="relative overflow-hidden border-4 border-[#b49e94]/20 shadow-[40px_40px_0px_rgba(0,0,0,0.5)]">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" 
                alt="Koraput Highlands" 
                className="w-full h-[600px] object-cover grayscale brightness-50"
              />
              <div className="absolute inset-0 border-[20px] border-[#1a0f0b]/50 pointer-events-none" />
            </div>
          </div>

          {/* Narrative Glass Stack */}
          <div className="lg:col-span-6 lg:-ml-20 z-20">
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="bg-[#b49e94]/5 backdrop-blur-[64px] border border-white/10 p-12 lg:p-20 shadow-[50px_50px_100px_rgba(0,0,0,0.8)]"
            >
              <h2 className="text-white text-5xl font-serif italic mb-8">Architecting <br /> the <span className="text-[#b49e94]">Perfect Pour.</span></h2>
              
              <div className="space-y-8 text-lg text-[#f4e3d8]/70 font-light leading-relaxed">
                <p>
                  At Kruti Coffee, "About Us" isn't a history lesson; it's a structural commitment. We believe coffee is a bridge between the raw geography of the <b>Koraput highlands</b> and the sophisticated pulse of the modern city.
                </p>
                <div className="flex gap-8 items-start bg-[#1a0f0b] p-6 border-l-4 border-[#4c2b23] shadow-lg">
                  <span className="text-4xl">“</span>
                  <p className="text-white italic font-serif">
                    We engineer the transition from soil to soul. 
                    Every bean is a brick in our cultural architecture.
                  </p>
                </div>
                <p className="text-sm opacity-50 uppercase tracking-widest">
                  Est. 2026 // Odisha // Global Impact
                </p>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="mt-12 py-5 px-12 bg-[#b49e94] text-[#1a0f0b] font-black uppercase tracking-[0.4em] text-[10px] shadow-[10px_10px_0px_#4c2b23] hover:shadow-[15px_15px_0px_#4c2b23] transition-all"
              >
                Join the Ritual
              </motion.button>
            </motion.div>
          </div>
        </section>

      </div>

      {/* FOOTER ACCENT */}
      <div className="w-full h-32 bg-[#221512] mt-40 flex items-center px-10 border-t border-white/5">
         <span className="text-[10px] tracking-[1em] uppercase opacity-20">Kruti Coffee Architecture Group © 2026</span>
      </div>
    </main>
  );
};

export default About;