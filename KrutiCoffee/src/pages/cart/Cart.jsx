import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, url } = useContext(StoreContext);
  const navigate = useNavigate();

  const subtotal = food_list.reduce(
    (total, item) => total + (cartItems[item._id] || 0) * item.price,
    0
  );
  const deliveryFee = subtotal === 0 ? 0 : 2;
  const total = subtotal + deliveryFee;

  return (
    <div className="relative min-h-screen bg-[#1a0f0b] text-[#f4e3d8] overflow-hidden selection:bg-[#b49e94] selection:text-[#1a0f0b]">
      
      {/* ARTISTIC BACKGROUND ELEMENTS */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#221512] z-0 opacity-50"></div>
      <div className="absolute top-[10%] left-[-5%] w-64 h-64 bg-[#4c2b23]/20 rounded-full blur-[120px]"></div>
      
      {/* PREMIUM FONTS STYLE */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Playfair+Display:ital,wght@0,600;1,600&family=Inter:wght@200;400;600&display=swap');
        .font-brand { font-family: 'Syncopate', sans-serif; }
        .font-serif-accent { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .glass-panel { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.05); }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6 lg:px-12 font-body">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#4c2b23] pb-8">
          <div>
            <span className="font-brand text-[10px] tracking-[0.6em] text-[#b49e94] uppercase">Your Selection</span>
            <h1 className="font-serif-accent italic text-6xl lg:text-7xl mt-2 tracking-tighter">The <span className="opacity-40">Cart</span></h1>
          </div>
          <p className="text-[#b49e94] text-xs font-brand tracking-widest mt-4 md:mt-0 uppercase opacity-60">
            {food_list.filter(i => cartItems[i._id] > 0).length} Items Selected
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LEFT: CART ITEMS (THE FLOATING SLIDES) */}
          <div className="flex-[1.5] space-y-6">
            {food_list.map((item) => cartItems[item._id] > 0 && (
              <div key={item._id} className="group relative flex items-center gap-8 glass-panel p-6 transition-all duration-500 hover:bg-white/5">
                {/* Image with Artistic Shadow */}
                <div className="relative w-24 h-24 overflow-hidden shadow-[10px_10px_0px_#4c2b23]">
                  <img src={url+"/images/"+item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>

                <div className="flex-1">
                  <h3 className="font-brand text-[11px] tracking-[0.3em] uppercase text-[#b49e94] mb-1">{item.name}</h3>
                  <p className="font-serif-accent italic text-xl text-[#f4e3d8]">${item.price}</p>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] font-brand opacity-30">QTY</span>
                  <span className="text-2xl font-light">{cartItems[item._id]}</span>
                </div>

                <div className="text-right min-w-[80px]">
                  <p className="font-brand text-xs tracking-widest text-[#b49e94]">${(item.price * cartItems[item._id]).toFixed(2)}</p>
                  <button 
                    onClick={() => removeFromCart(item._id)}
                    className="mt-2 text-[10px] font-brand tracking-widest text-red-900 hover:text-red-500 transition-colors uppercase"
                  >
                    Remove
                  </button>
                </div>

                {/* Vertical Acccent line */}
                <div className="absolute left-0 top-1/4 w-[2px] h-1/2 bg-[#b49e94] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          {/* RIGHT: SUMMARY (THE GEOMETRIC BLOCK) */}
          <div className="flex-1 space-y-8">
            <div className="bg-[#221512] p-10 relative overflow-hidden shadow-[30px_30px_80px_rgba(0,0,0,0.5)] border border-white/5">
              {/* Geometric Decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#4c2b23] -rotate-45 translate-x-12 -translate-y-12"></div>
              
              <h2 className="font-brand text-xs tracking-[0.5em] uppercase text-[#b49e94] mb-12 border-b border-white/10 pb-4">Order Summary</h2>

              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-brand tracking-[0.2em] opacity-40 uppercase">Subtotal</span>
                  <span className="text-xl font-light">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-brand tracking-[0.2em] opacity-40 uppercase">Logistics</span>
                  <span className="text-xl font-light">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="pt-8 mt-8 border-t border-white/10 flex justify-between items-center">
                  <span className="font-brand text-xs tracking-[0.4em] text-[#b49e94]">Grand Total</span>
                  <span className="text-4xl font-serif-accent italic">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Promo Code - Minimalist */}
              <div className="mt-12 flex items-center border border-white/10 p-1">
                <input 
                  type="text" 
                  placeholder="PROMO CODE" 
                  className="bg-transparent flex-1 px-4 py-3 text-[10px] font-brand tracking-widest outline-none placeholder:opacity-20"
                />
                <button className="bg-[#b49e94] text-[#1a0f0b] px-6 py-3 font-brand text-[10px] font-bold hover:bg-white transition-all">
                  APPLY
                </button>
              </div>

              <button 
                onClick={() => navigate('/order')} 
                className="w-full mt-10 bg-[#f4e3d8] text-[#1a0f0b] py-5 font-brand text-xs font-bold tracking-[0.3em] hover:bg-[#b49e94] transition-all duration-500 shadow-2xl"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>

            {/* Aesthetic Side Note */}
            <div className="p-6 border border-[#4c2b23] flex items-center gap-4">
               <div className="w-10 h-[1px] bg-[#b49e94]"></div>
               <p className="text-[9px] font-brand tracking-widest opacity-40 uppercase">Secure encrypted checkout</p>
            </div>
          </div>
        </div>
      </div>

      {/* BIG VERTICAL GHOST TEXT */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none">
        <h1 className="font-brand text-[12vw] uppercase leading-none vertical-text tracking-tighter">
          KRUTI
        </h1>
      </div>
    </div>
  );
}

export default Cart;