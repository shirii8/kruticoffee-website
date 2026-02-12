import { useState } from "react";
import { motion } from "framer-motion";

const menuList = [
  { menu_name: "Salad", menu_image: "🥗" },
  { menu_name: "Rolls", menu_image: "🌯" },
  { menu_name: "Desserts", menu_image: "🍰" },
  { menu_name: "Sandwich", menu_image: "🥪" },
  { menu_name: "Cake", menu_image: "🎂" },
  { menu_name: "Pure Veg", menu_image: "🥬" },
  { menu_name: "Pasta", menu_image: "🍝" },
  { menu_name: "Noodles", menu_image: "🍜" },
];

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="bg-[#221512] font-mono p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-amber-100 mb-3"
      >
        Explore our menu
      </motion.h1>

      <p className="text-amber-200/70 mb-8 max-w-md">
        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients
      </p>

      <div className="flex gap-6 overflow-x-auto pb-4 pt-12 scrollbar-hide">
        {menuList.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() =>
              setCategory(category === item.menu_name ? "All" : item.menu_name)
            }
            className="flex flex-col items-center gap-2 cursor-pointer group min-w-20"
          >
            <div
              className={`
                w-20 h-20 rounded-full flex items-center justify-center text-4xl
                transition-all duration-300 border-4
                ${
                  category === item.menu_name
                    ? "border-amber-500 bg-amber-900/50 scale-110 shadow-lg shadow-amber-500/30"
                    : "border-amber-800/50 bg-amber-950/50 hover:border-amber-600 hover:bg-amber-900/30"
                }
              `}
            >
              {item.menu_image}
            </div>

            <p
              className={`
                text-sm transition-colors duration-300 p-4
                ${
                  category === item.menu_name
                    ? "text-amber-400 font-semibold"
                    : "text-amber-200/60 group-hover:text-amber-300"
                }
              `}
            >
              {item.menu_name}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-amber-700/50 to-transparent" />
    </div>
  );
};

export default ExploreMenu;
