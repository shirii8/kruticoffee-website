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
    <div className="bg-[#1a0f0b] py-16 px-8 lg:px-20 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-serif italic text-4xl md:text-5xl text-[#f4e3d8] mb-4"
        >
          Explore <span className="text-[#b49e94] not-italic font-sans font-black uppercase text-3xl tracking-widest ml-2">Menu</span>
        </motion.h1>

        <p className="text-[#b49e94]/60 text-xs tracking-widest uppercase mb-12 max-w-md">
          Curated selection of Koraput inspired delicacies.
        </p>

        {/* GLASSMORPHIC SLIDER */}
        <div className="flex gap-8 overflow-x-auto pb-8 pt-4 scrollbar-hide">
          {menuList.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setCategory(category === item.menu_name ? "All" : item.menu_name)}
              className="flex flex-col items-center gap-4 cursor-pointer group min-w-[100px]"
            >
              <div className={`
                relative w-20 h-20 rounded-2xl flex items-center justify-center text-3xl
                transition-all duration-500 border
                ${category === item.menu_name 
                  ? "bg-[#b49e94] border-[#b49e94] shadow-[0_10px_30px_rgba(180,158,148,0.3)] rotate-3" 
                  : "bg-white/5 border-white/10 backdrop-blur-md hover:border-[#b49e94]/50 hover:-translate-y-2"}
              `}>
                {/* Visual indicator for active category */}
                {category === item.menu_name && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#4c2b23] rounded-full animate-ping"></div>
                )}
                <span className={`${category === item.menu_name ? "grayscale-0" : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"} transition-all duration-500`}>
                  {item.menu_image}
                </span>
              </div>

              <p className={`
                text-[10px] tracking-[0.3em] font-black uppercase transition-all duration-300
                ${category === item.menu_name ? "text-[#b49e94]" : "text-[#b49e94]/40 group-hover:text-[#b49e94]/80"}
              `}>
                {item.menu_name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;