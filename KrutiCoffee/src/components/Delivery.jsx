import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const Delivery = () => {
  const navigate = useNavigate();
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main id="delivery" className="ml-[120px] relative min-h-screen bg-[#1a0f0b] text-[#b49e94] font-sans overflow-hidden">
      {/* Structural Accents */}
      <div className="absolute top-0 right-0 w-[50vw] h-full bg-[#221512] -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#4c2b23] opacity-10 blur-[120px]" />

      <nav className="p-10 lg:p-16 relative z-50">
        <button onClick={() => navigate("/")} className="flex items-center gap-4 text-[10px] tracking-[0.6em] font-black uppercase hover:text-white transition-all">
           Back to Terminal
        </button>
      </nav>

      <div className="container mx-auto px-6 lg:px-24 py-10 relative z-10">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
          
          <div className="lg:col-span-7">
            <motion.h1 
              initial={{ x: -50, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }}
              className="text-7xl md:text-[11vw] font-black text-white uppercase leading-[0.8] tracking-tighter mb-12"
            >
              Direct <br/> <span className="text-[#4c2b23]">Path.</span>
            </motion.h1>
            
            <div className="relative mt-20 group">
              <div className="absolute -inset-4 bg-[#4c2b23]/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <img 
                src="https://images.unsplash.com/photo-1521220504249-bc35ad625c02?auto=format&fit=crop&q=80" 
                className="relative w-full h-[400px] object-cover grayscale shadow-2xl border border-white/5" 
                alt="Logistics"
              />
              <div className="absolute bottom-0 left-0 bg-[#b49e94] p-10 translate-x-10 translate-y-10 shadow-2xl">
                <p className="text-[#1a0f0b] font-black text-xs tracking-widest uppercase">Freshness Timeline: 48 Hours from Roast</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-16 mt-32 lg:mt-64">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-[#1a0f0b] border border-[#4c2b23] p-12 shadow-[30px_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-2 h-full bg-[#4c2b23]" />
              <h2 className="text-white text-3xl font-serif italic mb-8 uppercase tracking-tighter">Global <br/> Reach.</h2>
              
              <ul className="space-y-8 text-sm tracking-wide">
                <li className="flex justify-between border-b border-white/5 pb-4">
                  <span className="opacity-40 uppercase">Odisha Domestic</span>
                  <span className="text-white uppercase">Next Day</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-4">
                  <span className="opacity-40 uppercase">Pan-India</span>
                  <span className="text-white uppercase">3-5 Business Days</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-4">
                  <span className="opacity-40 uppercase">International</span>
                  <span className="text-white uppercase">7-12 Business Days</span>
                </li>
              </ul>

              <p className="mt-12 text-xs leading-relaxed opacity-60">
                We use climate-controlled packaging to ensure the volatile aromatics of the Koraput bean remain trapped until you break the seal.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
};


export default Delivery