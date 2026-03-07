import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#1a0f0b] flex flex-col lg:flex-row overflow-hidden">
      {/* LEFT CANVAS: THE BRAND NARRATIVE */}
      <div className="relative w-full lg:w-[45%] flex flex-col justify-center px-8 lg:px-20 py-24 z-10">
        {/* Abstract Background Block */}
        <div className="absolute top-0 left-0 w-full h-[70%] bg-[#221512] -skew-y-6 -translate-y-20 -z-10 border-b border-[#4c2b23]/20"></div>

        {/* Floating Tag */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-[#b49e94]"></div>
          <span className="text-[#b49e94] text-[10px] tracking-[0.5em] font-bold uppercase">
            Est. 2026 — Odisha
          </span>
        </div>

        {/* The "Power Typography" Header */}
        <h1 className="flex flex-col mb-10">
          <span className="text-white text-7xl md:text-9xl font-black leading-none tracking-tighter uppercase">
            Kruti
          </span>
          <span className="text-[#b49e94] text-5xl md:text-7xl font-serif italic leading-none -mt-4 ml-8 md:ml-16">
            Coffee
          </span>
        </h1>

        {/* Narrative Description */}
        <p className="text-[#f4e3d8]/60 text-sm md:text-base leading-relaxed max-w-md mb-12 border-l-2 border-[#4c2b23] pl-6">
          Beyond the brew. We bring the architectural soul of Koraput’s
          highlands directly to your cup through a curated, artistic roasting
          process.
        </p>

        {/* Action Blocks */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => navigate("/menu")}
            className="px-10 py-4 bg-[#b49e94] text-[#1a0f0b] font-black tracking-widest uppercase text-xs hover:bg-white transition-all shadow-[8px_8px_0px_#4c2b23]"
          >
            Explore Range
          </button>
          <button
            onClick={() => {
              const section = document.getElementById("our-story-section");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              } else {
                console.warn("Our Story section not found on this page.");
              }
            }}
            className="px-10 py-4 border border-[#b49e94]/30 text-[#b49e94] font-bold tracking-widest uppercase text-xs hover:bg-[#4c2b23] hover:rounded-2xl transition-all"
          >
            Our Story
          </button>
        </div>
      </div>

      {/* RIGHT CANVAS: THE VISUAL IMPACT */}
      <div className="relative w-full lg:w-[55%] h-[50vh] lg:h-screen">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bgCover.avif"
            alt="Artistic Coffee"
            className="w-full h-full object-cover grayscale opacity-40 lg:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f0b] via-transparent to-transparent"></div>
        </div>

        {/* Oolticx-Style Content Blocks */}
        <div className="absolute bottom-12 right-0 lg:right-12 z-20 flex flex-col sm:flex-row gap-0 lg:gap-1">
          <div className="w-48 h-48 bg-[#4c2b23] p-8 flex flex-col justify-end group cursor-crosshair">
            <span className="text-[8px] text-white/50 tracking-widest mb-2 uppercase">
              Vibe 01
            </span>
            <h4 className="text-white font-serif italic text-2xl group-hover:translate-x-2 transition-transform">
              Focus.
            </h4>
            <div className="w-0 h-[1px] bg-white mt-2 group-hover:w-full transition-all"></div>
          </div>

          <div className="w-48 h-48 bg-white/5 backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-end group">
            <span className="text-[8px] text-[#b49e94] tracking-widest mb-2 uppercase">
              Vibe 02
            </span>
            <h4 className="text-[#f4e3d8] font-serif italic text-2xl group-hover:translate-x-2 transition-transform">
              Soul.
            </h4>
            <div className="w-0 h-[1px] bg-[#b49e94] mt-2 group-hover:w-full transition-all"></div>
          </div>
        </div>

        <div className="absolute top-0 right-[20%] w-[1px] h-full bg-[#b49e94]/20 hidden lg:block"></div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#b49e94] to-transparent"></div>
        <span className="text-[8px] tracking-[0.4em] text-[#b49e94] uppercase animate-bounce">
          Scroll
        </span>
      </div>
    </div>
  );
};

export default Hero;
