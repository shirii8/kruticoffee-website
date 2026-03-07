import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Privacypolicy = () => {
  const navigate = useNavigate();
  useEffect(() => window.scrollTo(0, 0), []);

  const sections = [
    { title: "Data Architecture", content: "We collect only the essential 'minerals' of your digital footprint to provide a seamless ritual experience." },
    { title: "Encrypted Vaults", content: "Your personal details are stored in isolated, high-security digital layers, protected by industry-standard encryption." },
    { title: "Third-Party Ethics", content: "We never trade your lineage. Your data stays within the Kruti ecosystem, shared only with logistics partners." }
  ];

  return (
    <main id="privacypolicy" className="ml-[120px] relative min-h-screen bg-[#1a0f0b] text-[#b49e94] font-sans overflow-x-hidden">
      {/* Background Accents */}
      <div className="fixed top-0 left-0 w-[30vw] h-screen bg-[#221512] -z-10 opacity-40 shadow-[50px_0_100px_rgba(0,0,0,0.5)]" />
      
      <nav className="p-10 lg:p-16 relative z-50">
        <button onClick={() => navigate("/")} className="flex items-center gap-4 text-[10px] tracking-[0.6em] font-black uppercase hover:text-white transition-all">
          <span className="w-8 h-[1px] bg-[#b49e94]"></span> Back to Origin
        </button>
      </nav>

      <div className="container mx-auto px-6 lg:px-24 py-10 relative z-10">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-[10vw] font-black text-white uppercase leading-none mb-20 tracking-tighter"
        >
          Privacy <br/> <span className="italic font-serif lowercase text-[#b49e94] tracking-normal">Protocol.</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-12">
            {sections.map((s, i) => (
              <motion.div key={i} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.2 }} className="border-l-2 border-[#4c2b23] pl-8">
                <h3 className="text-white text-xs tracking-[0.3em] font-bold mb-4 uppercase">{s.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{s.content}</p>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-[#221512]/60 backdrop-blur-[60px] border border-white/5 p-12 lg:p-20 shadow-[40px_40px_0px_#4c2b23]"
            >
              <h2 className="text-2xl text-white mb-10 font-serif italic">The Transparency Clause</h2>
              <div className="space-y-8 text-lg font-light leading-relaxed opacity-80">
                <p>Kruti Coffee operates on a philosophy of absolute traceability. Just as we trace our beans to the specific plot in Koraput, we treat your data with the same granular respect.</p>
                <p>By interacting with our digital terminal, you agree to the structural collection of cookies used to refine our roasting algorithms and delivery precision.</p>
                <div className="pt-10 border-t border-white/10 flex justify-between items-center">
                  <span className="text-[10px] tracking-widest opacity-40 uppercase">Revised March 2026</span>
                  <div className="w-3 h-3 bg-[#b49e94] rotate-45" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Privacypolicy