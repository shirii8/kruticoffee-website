import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  // Add getTotalCartAmount from context - it's more reliable than local calculation
  const { cartItems, food_list, removeFromCart, url, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  // Use the context function for the subtotal
  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 25; // Adjusted to a more realistic currency value
  const total = subtotal + deliveryFee;

  return (
    <div className="relative min-h-screen bg-[#1a0f0b] text-[#f4e3d8] overflow-hidden selection:bg-[#b49e94] selection:text-[#1a0f0b]">
      {/* ... Your styles and background elements stay the same ... */}

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6 lg:px-12 font-body">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#4c2b23] pb-8">
          <div>
            <span className="font-brand text-[10px] tracking-[0.6em] text-[#b49e94] uppercase">Your Selection</span>
            <h1 className="font-serif-accent italic text-6xl lg:text-7xl mt-2 tracking-tighter">The <span className="opacity-40">Cart</span></h1>
          </div>
          <p className="text-[#b49e94] text-xs font-brand tracking-widest mt-4 md:mt-0 uppercase opacity-60">
            {/* Filter using _id specifically */}
            {food_list.filter(i => cartItems[i._id] > 0).length} Items Selected
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LEFT: CART ITEMS */}
          <div className="flex-[1.5] space-y-6">
            {food_list.map((item) => {
              // Vital Check: Does this item exist in our cart?
              if (cartItems[item._id] > 0) {
                return (
                  <div key={item._id} className="group relative flex items-center gap-8 glass-panel p-6 transition-all duration-500 hover:bg-white/5">
                    
                    <div className="relative w-24 h-24 overflow-hidden shadow-[10px_10px_0px_#4c2b23]">
                      {/* Fixed Image Logic: Handle Cloudinary and Local URLs */}
                      <img 
                        src={item.image.startsWith("http") ? item.image : `${url}/images/${item.image}`} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-all duration-700" 
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-brand text-[11px] tracking-[0.3em] uppercase text-[#b49e94] mb-1">{item.name}</h3>
                      <p className="font-serif-accent italic text-xl text-[#f4e3d8]">₹{item.price}</p>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[10px] font-brand opacity-30">QTY</span>
                      <span className="text-2xl font-light">{cartItems[item._id]}</span>
                    </div>

                    <div className="text-right min-w-[80px]">
                      <p className="font-brand text-xs tracking-widest text-[#b49e94]">₹{(item.price * cartItems[item._id]).toFixed(2)}</p>
                      <button 
                        onClick={() => removeFromCart(item._id)}
                        className="mt-2 text-[10px] font-brand tracking-widest text-red-900 hover:text-red-400 transition-colors uppercase"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              }
              return null;
            })}

            {subtotal === 0 && (
              <div className="py-20 text-center glass-panel">
                <p className="font-serif-accent italic text-2xl opacity-40">Your coffee cup is empty.</p>
                <button onClick={() => navigate('/')} className="mt-4 text-[#b49e94] font-brand text-[10px] tracking-widest uppercase">Start Exploring →</button>
              </div>
            )}
          </div>

          {/* RIGHT: SUMMARY */}
          <div className="flex-1 space-y-8">
            <div className="bg-[#221512] p-10 relative overflow-hidden shadow-[30px_30px_80px_rgba(0,0,0,0.5)] border border-white/5">
              <h2 className="font-brand text-xs tracking-[0.5em] uppercase text-[#b49e94] mb-12 border-b border-white/10 pb-4">Order Summary</h2>

              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-brand tracking-[0.2em] opacity-40 uppercase">Subtotal</span>
                  <span className="text-xl font-light">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-brand tracking-[0.2em] opacity-40 uppercase">Delivery</span>
                  <span className="text-xl font-light">₹{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="pt-8 mt-8 border-t border-white/10 flex justify-between items-center">
                  <span className="font-brand text-xs tracking-[0.4em] text-[#b49e94]">Grand Total</span>
                  <span className="text-4xl font-serif-accent italic">₹{total.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={() => navigate('/order')} 
                disabled={subtotal === 0}
                className={`w-full mt-10 py-5 font-brand text-xs font-bold tracking-[0.3em] transition-all duration-500 shadow-2xl ₹{
                  subtotal === 0 ? "bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-[#f4e3d8] text-[#1a0f0b] hover:bg-[#b49e94]"
                }`}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;