import React, { useContext, useMemo } from "react";
import { motion } from "framer-motion";
import { StoreContext } from "../../context/StoreContext";

const fallbackMenuList = [
  { menu_name: "Hot Coffees" },
  { menu_name: "Coffees Served Cold" },
  { menu_name: "Manual Brews" },
  { menu_name: "Signature Cakes & Desserts" },
  { menu_name: "Savory Selection" },
  { menu_name: "Coffee Mocktails" },
];

const normalizeCategory = (value) => {
  if (!value) return "";
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
};

const ExploreMenu = ({ category, setCategory }) => {
  const { food_list } = useContext(StoreContext);

  const menuList = useMemo(() => {
    const categories = (food_list || [])
      .map((item) => item.category)
      .filter(Boolean);

    const uniqueCategories = [...new Set(categories)];
    return uniqueCategories.length > 0
      ? uniqueCategories.map((name) => ({ menu_name: name }))
      : fallbackMenuList;
  }, [food_list]);

  const selectedCategory = normalizeCategory(category);

  return (
    // Reduced padding from py-16 to py-6
    <div className="bg-[#1a0f0b] py-6 px-8 lg:px-20 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif italic text-3xl text-[#f4e3d8]"
            >
              Explore <span className="text-[#b49e94] not-italic font-sans font-black uppercase text-xl tracking-widest ml-1">Menu</span>
            </motion.h1>
            <p className="text-[#b49e94]/50 text-[10px] tracking-widest uppercase mt-1">
              Curated Koraput delicacies.
            </p>
          </div>
        </div>

        {/* COMPACT SLIDER */}
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {menuList.map((item, idx) => {
            const isActive = normalizeCategory(item.menu_name) === selectedCategory;
            return (
              <div
                key={`${item.menu_name}-${idx}`}
                onClick={() => setCategory(isActive ? "All" : item.menu_name)}
                className="flex flex-col items-center gap-2 cursor-pointer group min-w-[120px]"
              >
                <div className={`
                  relative px-4 py-2 rounded-full flex items-center justify-center
                  transition-all duration-300 border text-center
                  ${isActive
                    ? "bg-[#b49e94] border-[#b49e94] shadow-lg"
                    : "bg-white/5 border-white/10 hover:border-[#b49e94]/50"}
                `}>
                  <p className={`
                    text-[9px] tracking-[0.1em] font-bold uppercase whitespace-nowrap
                    ${isActive ? "text-[#1a0f0b]" : "text-[#b49e94]/60"}
                  `}>
                    {item.menu_name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;