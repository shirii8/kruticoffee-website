import React from 'react';
import coffeeImage from "../assets/frontend_assets/CoffeeOrderGraffiti.png";

const Range = ({ setCategory }) => { 
  // Map these to the actual categories in your MongoDB to make them functional
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

    // Smooth scroll to the menu
    const menuSection = document.getElementById('explore-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  

  return (
    <div id='original-coffee' className="w-full bg-[#b49e94] py-12 px-4 lg:px-20 overflow-x-hidden relative ml-[60px]">
      {/* Background Decor Elements */}
      <div className="absolute top-0 left-0 w-[45vw] h-full bg-[#221512] skew-x-[-12deg] -translate-x-20 z-0 border-r border-[#4c2b23]/30"></div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="relative group/header flex flex-col items-center lg:items-start py-12 transition-all duration-500">
          <div className="relative flex flex-col items-center lg:items-start">
            {/* LAYER 1: Glass Plate */}
            <div className="-z-2 relative z-30 px-6 mb-[-1.2rem] lg:mb-[-1.8rem] ml-0 lg:ml-[-1.5rem] transform group-hover/header:-translate-y-1 transition-transform duration-500">
              <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-sm shadow-[10px_10px_30px_rgba(0,0,0,0.5)]">
                <h3 className="text-[#f4e3d8] text-3xl md:text-5xl font-serif italic tracking-tighter leading-none select-none">
                  Signature
                </h3>
              </div>
            </div>

            {/* LAYER 2: Structural Block */}
            <div className="relative z-20">
              <div className="absolute inset-0 bg-[#47221a] translate-x-1 translate-y-2 md:translate-x-2 md:translate-y-4 rounded-sm" />
              <div className="relative px-8 md:px-16 py-6 md:py-8 bg-[#1a0f0b] border-l-[6px] border-[#b49e94] shadow-2xl overflow-hidden">
                <h2 className="text-[#b49e94] font-sans font-black uppercase text-4xl md:text-7xl tracking-[0.2em] md:tracking-[0.3em] leading-none relative z-10">
                  Roasts
                </h2>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center lg:items-start gap-1">
            <p className="text-[10px] tracking-[0.6em] text-[#b49e94] uppercase font-bold opacity-60">The Koraput Collection</p>
            <p className="text-[#f4e3d8] font-serif italic text-xs">Architectural roasting for the modern soul.</p>
          </div>
        </div>

        {/* Range Bar Container */}
        <div className="-mt-4 flex flex-wrap lg:flex-nowrap items-center justify-between gap-8 rounded-[2rem] bg-[#1a0f0b]/80 backdrop-blur-4xl border border-[#4c2b23] px-8 py-2 lg:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
          {roasts.map((item) => (
            <div key={item.id} className="group relative flex flex-col items-center flex-1 min-w-[200px]">
              <div className="absolute top-4 left-4 w-full h-full bg-[#b49e94] border border-[#b49e94]/10 rounded-2xl transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>

              {/* Card Body - Now Clickable */}
              <div 
                onClick={handleEngagement}
                className="relative z-10 w-full bg-[#221512]/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border-[#b49e94]/40 cursor-pointer"
              >
                <div className="relative h-48 w-full p-6 overflow-hidden">
                  <img
                    src={coffeeImage}
                    alt={`Roast ${item.name}`}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
                  />
                </div>

                <div className="w-full bg-[#1a0f0b]/90 backdrop-blur-md py-5 px-3 flex flex-col items-center border-t border-[#4c2b23]">
                  <span className="text-[8px] font-bold tracking-[0.5em] text-[#b49e94] uppercase opacity-70 mb-2">Artisan Batch</span>
                  <span className="font-serif italic text-[#f4e3d8] text-lg tracking-wide">{item.name}</span>
                  
                  {/* Visual CTA Button inside the card */}
                  <div className="mt-4 px-4 py-1.5 border border-[#b49e94]/20 group-hover:border-[#b49e94] group-hover:bg-[#b49e94] transition-all duration-500">
                    <span className="text-[8px] text-[#b49e94] group-hover:text-[#1a0f0b] font-black uppercase tracking-widest">
                      View Menu
                    </span>
                  </div>
                </div>
              </div>

              {/* Ghost numbering */}
              <span className="absolute -top-8 -right-4 text-6xl font-black text-white/[0.02] italic pointer-events-none group-hover:text-[#b49e94] transition-all duration-500">
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
