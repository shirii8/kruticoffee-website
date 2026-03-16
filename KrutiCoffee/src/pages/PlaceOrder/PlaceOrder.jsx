import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount, cartItems, token, food_list, url } = useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "", lastName: "", email: "", street: "",
    city: "", state: "", zipcode: "", country: "", phone: ""
  });

  const onChangeHandler = (e) => setData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 2;
  const total = getTotalCartAmount() + deliveryFee;

  const inputClass = "w-full px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-0 border-b-white/30 text-[#f4e3d8] focus:border-[#ad8656] focus:bg-white/10 transition-all duration-500 outline-none placeholder:text-white/20 placeholder:uppercase placeholder:text-[10px] placeholder:tracking-[0.2em]";

  const navigate=useNavigate();

  useEffect(()=>{
      if(!token){
        navigate('/cart')
      }
      else if(getTotalCartAmount===0){
        navigate('/cart');
      }
  },[token])

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden font-sans text-[#f4e3d8] selection:bg-[#b49e94] selection:text-black">
      
      {/* ARTISTIC BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[70%] bg-[#ad8656]/5 rotate-12 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] bg-white/5 -rotate-12 blur-[100px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[1px] h-[60%] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-20 px-6 lg:px-12">
        <form className="flex flex-col lg:flex-row gap-0 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">
          
          {/* LEFT PANEL: The Geometric Form */}
          <div className="flex-[1.5] bg-[#1a0f0a] p-8 lg:p-16 relative">
             {/* Decorative Corner */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#ad8656]/40"></div>
            
            <header className="mb-12">
              <span className="text-[#b49e94] text-[10px] tracking-[0.5em] uppercase font-bold">Secure Checkout</span>
              <h2 className="text-5xl lg:text-6xl font-serif mt-2 tracking-tighter">Shipping <br/><span className="italic opacity-50">Information</span></h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              <div className="group relative">
                <input required name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First Name" className={inputClass} />
              </div>
              <div className="group relative">
                <input required name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last Name" className={inputClass} />
              </div>
              <div className="md:col-span-2">
                <input required name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Email Address" className={inputClass} />
              </div>
              <div className="md:col-span-2">
                <input required name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder="Street" className={inputClass} />
              </div>
              <input required name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder="City" className={inputClass} />
              <input required name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder="State" className={inputClass} />
              <input required name="zipcode" onChange={onChangeHandler} value={data.zipcode} type="text" placeholder="Zip Code" className={inputClass} />
              <input required name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder="Country" className={inputClass} />
              <div className="md:col-span-2">
                <input required name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder="Phone" className={inputClass} />
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: The High-Contrast Summary */}
          <div className="flex-1 bg-[#b49e94] text-[#0a0a0a] p-8 lg:p-16 flex flex-col justify-between relative">
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none contrast-150 grayscale" style={{backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')`}}></div>

            <div className="relative z-10">
              <h3 className="text-[10px] tracking-[0.4em] uppercase font-black mb-10 border-b border-black/20 pb-4">Your Selection</h3>
              
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-medium uppercase tracking-widest opacity-70">Subtotal</span>
                  <span className="text-2xl font-serif font-bold">${getTotalCartAmount().toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-sm font-medium uppercase tracking-widest opacity-70">Logistics</span>
                  <span className="text-2xl font-serif font-bold">${deliveryFee.toFixed(2)}</span>
                </div>
                
                <div className="pt-8 mt-8 border-t-2 border-black/10">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black uppercase tracking-[0.3em]">Total amount</span>
                    <span className="text-5xl font-serif font-bold tracking-tighter">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="relative z-10 mt-16 w-full bg-[#1a0f0a] text-white py-6 rounded-none font-bold tracking-[0.3em] uppercase text-xs hover:bg-white hover:text-black transition-all duration-700 shadow-[0_20px_40px_rgba(0,0,0,0.3)] group overflow-hidden">
              <span className="relative z-20">Complete Order</span>
              <div className="absolute top-0 -left-[100%] w-full h-full bg-[#b49e94] group-hover:left-0 transition-all duration-500 z-10 opacity-20"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;