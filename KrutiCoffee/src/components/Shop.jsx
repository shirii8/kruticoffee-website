import React from "react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();

  const shopSections = [
    {
      header: "Premium Collection",
      title: "Single Originals",
      footer: "Explore Origin",
      img: "https://kruticoffee.com/cdn/shop/files/Square_Tile_1500_x_1500_px_9_cf952ad4-c617-4ea3-8063-96365a346b24_540x.png?v=1764746408",
      category: "single-origin", // Clean string for the URL
    },
    {
      header: "Artisan Blends",
      title: "Signature Blends",
      footer: "Explore Blends",
      img: "https://kruticoffee.com/cdn/shop/files/Square_Tile_1500_x_1500_px_9_cf952ad4-c617-4ea3-8063-96365a346b24_540x.png?v=1764746408",
      category: "signature-blends",
    },
    {
      header: "Gift Sets",
      title: "Gifting Collection",
      footer: "Explore Gifts",
      img: "https://kruticoffee.com/cdn/shop/files/Square_Tile_1500_x_1500_px_9_cf952ad4-c617-4ea3-8063-96365a346b24_540x.png?v=1764746408",
      category: "gifting",
    },
    {
      header: "Quick Brew",
      title: "Drip Bags",
      footer: "Explore Drips",
      img: "https://kruticoffee.com/cdn/shop/files/Square_Tile_1500_x_1500_px_9_cf952ad4-c617-4ea3-8063-96365a346b24_540x.png?v=1764746408",
      category: "drip-bags",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 p-10 bg-gradient-to-b from-[#b49e94]/40 to-[#1a0f0a]/40 backdrop-blur-4xl rounded-t-4xl border-t-2 border-t-[#b49e94] ml-[60px]">
      {shopSections.map((item, index) => (
        <div
          key={index}
          onClick={() => navigate(`/shop/${item.category}`)} // DYNAMIC NAVIGATION
          className="group relative w-72 overflow-hidden rounded-xl bg-[#1a0f0a] border border-white/10 transition-all duration-500 hover:border-[#b49e94]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer"
        >
          {/* Image Container */}
          <div className="relative overflow-hidden aspect-4/5">
            <img
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              src={item.img}
              alt={item.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a] via-transparent to-transparent opacity-60" />
          </div>

          {/* Content Area */}
          <div className="relative z-10 -mt-12 px-6 pb-8">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6 shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-[#b49e94]/10 group-hover:border-[#b49e94]/30">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-[#b49e94] mb-2 font-medium">
                {item.header}
              </span>

              <h3 className="text-xl font-light tracking-wide text-white transition-colors duration-300 group-hover:text-[#d4c3bc]">
                {item.title}
              </h3>

              <div className="mt-4 inline-flex items-center text-[11px] uppercase tracking-widest text-[#b49e94] group-hover:text-white transition-colors">
                {item.footer}
                <svg className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;