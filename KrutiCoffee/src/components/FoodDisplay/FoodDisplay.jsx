import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {
  // Destructure with a fallback to avoid the 'undefined' error
  const context = useContext(StoreContext);
  const food_list = context?.food_list;

  // ARTISTIC LOADING STATE
  // If the context isn't ready, show a poetic placeholder instead of crashing
  if (!food_list) {
    return (
      <div className="w-full bg-[#1a0f0b] py-24 px-6 text-center">
        <p className="font-serif italic text-[#b49e94] animate-pulse">
          Brewing the story of Koraput...
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full bg-[#1a0f0b] py-24 px-6 lg:px-20 overflow-hidden" id="food-display">
      
      {/* PERSISTENT SECTION HEADER */}
      <div className="relative mb-24 flex flex-col items-center lg:items-start max-w-[1400px] mx-auto">
        <div className="absolute -left-10 top-0 w-32 h-32 bg-[#221512] -z-10 rounded-full blur-[100px] opacity-50"></div>
        
        <div className="relative">
            <div className="absolute inset-0 bg-[#221512] translate-x-3 translate-y-3"></div>
            <div className="relative bg-[#1a0f0b] border-l-4 border-[#b49e94] px-10 py-6">
                <h2 className="font-serif italic text-4xl md:text-6xl text-[#f4e3d8]">
                    Top <span className="text-[#b49e94] not-italic font-sans font-black uppercase tracking-tighter">Selection</span>
                </h2>
            </div>
        </div>
      </div>

      {/* GRID DISPLAY */}
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div 
          className="grid gap-x-12 gap-y-20"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
        >
          {food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <div key={item._id || index} className="animate-fadeIn" style={{ animationDelay: `${index * 50}ms` }}>
                  <FoodItem 
                    id={item._id} 
                    name={item.name} 
                    description={item.description} 
                    price={item.price} 
                    image={item.image} 
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* BACKGROUND GHOST TYPOGRAPHY */}
      <div className="absolute -bottom-10 right-0 pointer-events-none opacity-[0.02] select-none">
        <h1 className="font-black text-[15vw] uppercase leading-none tracking-tighter text-[#b49e94]">
          KORAPUT
        </h1>
      </div>
    </div>
  )
}

export default FoodDisplay;