import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import { useNavigate } from 'react-router-dom';

const FoodDisplay = ({ category }) => {
  const { food_list, cartItems } = useContext(StoreContext);
  const navigate = useNavigate();

  const totalCartItems = Object.values(cartItems || {}).reduce((acc, curr) => acc + curr, 0);

  // 1. LOADING STATE
  if (!food_list || food_list.length === 0) {
    return (
      <div className="w-full bg-[#1a0f0b] py-24 px-6 text-center">
        <p className="font-serif italic text-[#b49e94] animate-pulse">
          Brewing the story of Koraput... (Waiting for data)
        </p>
      </div>
    );
  }

  // 2. FILTER LOGIC (Normalized for safety)
  const filteredList = food_list.filter(item => {
    if (category === "All") return true;
    // This handles casing differences (e.g., "Hot Coffees" vs "hot coffees")
    return item.category?.toLowerCase().trim() === category.toLowerCase().trim();
  });

  return (
    <div className="relative w-full bg-[#1a0f0b] py-8 px-6 lg:px-20" id="food-display">
      
      {/* FLOATING CART INDICATOR */}
      {totalCartItems > 0 && (
        <div 
          onClick={() => navigate('/cart')}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-4 bg-[#b49e94] text-[#1a0f0b] px-6 py-3 rounded-full shadow-2xl cursor-pointer hover:scale-105 transition-all border border-white/20"
        >
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-tighter">View Order</span>
            <span className="font-serif italic text-lg">{totalCartItems} Items</span>
          </div>
          <span className="text-xl">→</span>
        </div>
      )}

      {/* HEADER */}
      <div className="relative mb-24 max-w-[1400px] mx-auto">
        <div className="relative bg-[#1a0f0b] border-l-4 border-[#b49e94] px-10 py-6">
          <h2 className="font-serif italic text-4xl md:text-6xl text-[#f4e3d8]">
            {category === "All" ? "Top" : category} <span className="text-[#b49e94] not-italic font-sans font-black uppercase tracking-tighter">Selection</span>
          </h2>
        </div>
      </div>

      {/* GRID DISPLAY */}
      <div className="relative z-10 mx-auto max-w-[1400px]">
        {filteredList.length > 0 ? (
          <div 
            className="grid gap-x-12 gap-y-20"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
          >
            {filteredList.map((item) => (
              <FoodItem key={item._id} {...item} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center border border-dashed border-[#b49e94]/20 rounded-3xl">
            <p className="text-[#b49e94] font-serif italic text-xl">
              No items found in the "{category}" category.
            </p>
            <button 
               onClick={() => window.location.reload()} 
               className="mt-4 text-[10px] uppercase tracking-widest text-white underline"
            >
              Refresh Data
            </button>
          </div>
        )}
      </div>

      {/* BACKGROUND DECORATION */}
      <div className="absolute -bottom-10 right-0 pointer-events-none opacity-[0.02] select-none">
        <h1 className="font-black text-[15vw] uppercase leading-none text-[#b49e94]">KORAPUT</h1>
      </div>
    </div>
  );
}

export default FoodDisplay;