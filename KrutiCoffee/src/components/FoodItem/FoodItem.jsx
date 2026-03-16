import React, { useContext } from "react";
import addIconWhite from "../../assets/frontend_assets/add_icon_white.png";
import removeIconRed from "../../assets/frontend_assets/remove_icon_red.png";
import addIconGreen from "../../assets/frontend_assets/add_icon_green.png";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="group relative w-full transition-all duration-500">
      {/* OFFSET FOUNDATION (Matches Range Section) */}
      <div className="absolute inset-0 bg-[#221512] translate-x-3 translate-y-3 rounded-tl-[40px] rounded-br-[40px] z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>

      {/* MAIN BODY (Glass + Blueprint) */}
      <div className="relative z-10 overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-tl-[40px] rounded-br-[40px] shadow-2xl flex flex-col h-full">
        {/* IMAGE: Grayscale to Color Transition */}
        <div className="relative h-56 w-full overflow-hidden">
          {/* <img 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
            src={url + "/images/" + image} 
            alt={name} 
          /> */}
          <img
            className="..."
            // If the image string starts with "http", it's from Cloudinary.
            // Otherwise, it's a local file from your old setup.
            src={image.startsWith("http") ? image : `${url}/images/${image}`}
            alt={name}
          />

          {/* FLOATING ACTION PILL (Glassmorphic) */}
          <div className="absolute bottom-4 right-4 z-20">
            {!cartItems[id] ? (
              <button
                onClick={() => addToCart(id)}
                className="flex h-10 w-10 items-center justify-center bg-[#b49e94] rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all"
              >
                <img className="h-4 w-4" src={addIconWhite} alt="add" />
              </button>
            ) : (
              <div className="flex items-center gap-3 bg-[#1a0f0b]/90 backdrop-blur-xl border border-[#b49e94]/30 p-1.5 rounded-full shadow-2xl">
                <img
                  className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => removeFromCart(id)}
                  src={removeIconRed}
                  alt="minus"
                />
                <p className="text-[10px] font-black text-[#f4e3d8] min-w-[12px] text-center">
                  {cartItems[id]}
                </p>
                <img
                  className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => addToCart(id)}
                  src={addIconGreen}
                  alt="plus"
                />
              </div>
            )}
          </div>
        </div>

        {/* CONTENT PLATE */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-[#b49e94] text-[10px] font-black tracking-[0.3em] uppercase max-w-[70%]">
                {name}
              </h3>
              <p className="text-[#f4e3d8] font-serif italic text-xl leading-none">
                ${price}
              </p>
            </div>

            <div className="w-8 h-[1px] bg-[#4c2b23] mb-4 group-hover:w-full transition-all duration-700"></div>

            <p className="text-[11px] text-[#b49e94]/50 leading-relaxed italic line-clamp-2">
              {description}
            </p>
          </div>

          {/* CARD FOOTER: Blueprint Detail */}
          <div className="mt-6 flex justify-between items-center opacity-30 group-hover:opacity-100 transition-opacity">
            <span className="text-[8px] tracking-[0.5em] text-[#b49e94] uppercase font-bold">
              BATCH.26
            </span>
            <div className="h-2 w-2 rounded-full border border-[#b49e94] rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
