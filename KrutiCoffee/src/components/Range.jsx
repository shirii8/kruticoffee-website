import React from 'react';
import coffeeImage from "../assets/frontend_assets/CoffeeOrderGraffiti.png";

const Range = ({ setCategory }) => { 
  const roasts = [
    { id: 1, name: "Hot Coffees" },
    { id: 2, name: "Coffees Served Cold" },
    { id: 3, name: "Manual Brews" },
    { id: 4, name: "Savory Selection" },
    { id: 5, name: "Coffee Mocktails" }
  ];

  const handleEngagement = (categoryName) => {
    if (setCategory) {
      setCategory(categoryName); 
    }
    const menuSection = document.getElementById('explore-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    /* Removed ml-[60px] to prevent mobile overflow */
    <div id='original-coffee' className="w-full bg-[#b49e94] py-12 px-6 md:px-12 ml-[70px] overflow-hidden relative">
      
      {/* Background Decor Elements - Made full-width on mobile */}
      <div className="absolute top-0 left-0 w-full lg:w-[45vw] h-full bg-[#221512] lg:skew-x-[-12deg] lg:-translate-x-20 z-0 border-r border-[#4c2b23]/30"></div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="relative group/header flex flex-col items-center lg:items-start py-8 md:py-12 transition-all duration-500">
          <div className="relative flex flex-col items-center lg:items-start">
            
            {/* LAYER 1: Signature Tag */}
            <div className="relative z-30 px-4 mb-[-1rem] lg:mb-[-1.8rem] transform group-hover/header:-translate-y-1 transition-transform duration-500">
              <div className="inline-block px-4 py-1 md:px-6 md:py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-sm shadow-xl">
                <h3 className="text-[#f4e3d8] text-2xl md:text-5xl font-serif italic tracking-tighter leading-none">
                  Signature
                </h3>
              </div>
            </div>

            {/* LAYER 2: Roasts Title */}
            <div className="relative z-20">
              <div className="absolute inset-0 bg-[#47221a] translate-x-1 translate-y-1 md:translate-x-2 md:translate-y-4 rounded-sm" />
              <div className="relative px-6 py-4 md:px-16 md:py-8 bg-[#1a0f0b] border-l-[4px] md:border-l-[6px] border-[#b49e94] shadow-2xl">
                <h2 className="text-[#b49e94] font-sans font-black uppercase text-3xl md:text-7xl tracking-[0.15em] md:tracking-[0.3em] leading-none">
                  Roasts
                </h2>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center lg:items-start gap-1 text-center lg:text-left">
            <p className="text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] text-[#b49e94] uppercase font-bold opacity-60">The Koraput Collection</p>
            <p className="text-[#f4e3d8] font-serif italic text-xs md:text-sm">Architectural roasting for the modern soul.</p>
          </div>
        </div>

        {/* Range Bar Container - Switched to Responsive Grid */}
        <div className="mt-4 -ml-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 sm:gap-8 rounded-3xl lg:rounded-[2rem] bg-[#1a0f0b]/80 backdrop-blur-xl border border-[#4c2b23] p-10 lg:p-12 shadow-2xl">
          {roasts.map((item) => (
            <div key={item.id} className="group relative flex flex-col items-center">
              
              {/* (RESTORED) Background Shadow Card - Made visible on all screen sizes */}
              <div className="absolute top-3 left-3 w-full h-full bg-[#b49e94] border border-[#b49e94]/10 rounded-2xl transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>

              {/* Main Clickable Card Body */}
              <div 
                onClick={() => handleEngagement(item.name)}
                className="relative z-10 w-full bg-[#221512]/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border-[#b49e94]/40 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-40 md:h-48 w-full p-4 md:p-6 overflow-hidden flex justify-center">
                  <img
                    src={coffeeImage}
                    alt={item.name}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>

                {/* Card Info */}
                <div className="w-full bg-[#1a0f0b]/90 backdrop-blur-md py-4 px-2 flex flex-col items-center border-t border-[#4c2b23]">
                  <span className="text-[7px] md:text-[8px] font-bold tracking-[0.4em] text-[#b49e94] uppercase opacity-70 mb-1">Artisan Batch</span>
                  <span className="font-serif italic text-[#f4e3d8] text-sm md:text-base lg:text-lg text-center">{item.name}</span>
                  
                  {/* View Menu CTA Button */}
                  <div className="mt-3 px-3 py-1 md:px-4 md:py-1.5 border border-[#b49e94]/20 group-hover:border-[#b49e94] group-hover:bg-[#b49e94] transition-all duration-500">
                    <span className="text-[7px] md:text-[8px] text-[#b49e94] group-hover:text-[#1a0f0b] font-black uppercase tracking-widest">
                      View Menu
                    </span>
                  </div>
                </div>
              </div>

              {/* (RESTORED) Ghost numbering - Adjusted positioning for mobile grid spacing */}
              <span className="absolute -top-10 sm:-top-8 -right-4 text-7xl font-black text-white/[0.02] italic pointer-events-none group-hover:text-[#b49e94] transition-all duration-500">
                0{item.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Range;

// import React from "react";

// const Ranges = [
//   { title: "Single Origins", img: "/images/SingleOrigins.jpg" },
//   { title: "Signature Blends", img: "/images/SignatureBlends.jpg" },
//   { title: "Gifting Collection", img: "/images/GiftCollection.jpg" },
//   { title: "Drip Bags", img: "/images/DripBags.jpg" },
// ];

// const Range = () => (
//   // Wide rectangle bar under the navbar/sidebar
//   <div className="flex-1 flex items-center justify-center">
//     <div className="w-[90vw] max-w-[1800px] h-[32vh] min-h-[350px] rounded-3xl border-2 border-[#b49e94]
//      shadow-[0_0_40px_rgba(180,158,148,0.2)] flex flex-col justify-start items-center px-8 relative">
//       {/* Heading */}
//       <h2 className="range text-[#b49e94] text-4xl italic mb-4 tracking-widest text-center">
//         Ranges
//       </h2>
//       {/* Ranges Cards Row */}
//       <div className="flex flex-row gap-12 justify-center items-center w-full">
//         {Ranges.map((range, idx) => (
//           <div
//             key={idx}
//             className="bg-[#2e1c18] p-4 rounded-2xl shadow-[0_0_16px_rgba(0,0,0,0.5)] border
//              border-[#b49e94]/40 flex flex-col items-center hover:scale-105"
//             style={{ minWidth: "210px" }}
//           >
//             <div className="p-2 mb-3 flex items-center justify-center">
//               <img
//                 src={range.img}
//                 alt={range.title}
//                 className="w-48 h-48 object-cover rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.2)] bg-transparent"
//               />
//             </div>

//             <p className="text-[#f5e0c6] text-lg font-medium italic mt-1">
//               {range.title}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );

// export default Range;
