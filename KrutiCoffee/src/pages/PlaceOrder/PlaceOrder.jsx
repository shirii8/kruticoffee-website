import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount, cartItems, token, food_list, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

//save data from inputs
const onChangeHandler=(event)=>{
  const name=event.target.name;
  const value=event.target.value;
  setData(data=>({...data, [name]:value}))
}

useEffect(()=>{
  console.log(data)
}, [data])


  // Calculate totals
  const deliveryFee = 2;
  const subtotal = food_list.reduce(
    (total, item) => total + (cartItems[item._id] || 0) * item.price,
    0,
  );
  const total = subtotal + deliveryFee;

  return (
    <form className="w-full bg-[#221512] p-10 shadow-2xl flex flex-col md:flex-row gap-10">
      {/* Left: Delivery Info */}
      <div className="place-order-left flex-1 bg-[#291a15] rounded-xl p-8 shadow-lg border border-[#3d2a22]">
        <h2 className="title text-2xl font-bold text-[#dab988] mb-6 tracking-wide">
          Delivery Information
        </h2>
        <div className="multi-fields flex gap-4">
          <input name='firstName'
          onChange={onChangeHandler}
          value={data.firstName}
            type="text"
            placeholder="First Name"
            className="flex-1 px-5 py-3 rounded-lg bg-[#332421] text-[#f4e3d8] border border-[#7d6654] font-medium focus:outline-none mb-3"
          />
          <input name='lastName'
          onChange={onChangeHandler}
          value={data.lastName}
            type="text"
            placeholder="Last Name"
            className="flex-1 px-5 py-3 rounded-lg bg-[#332421] text-[#f4e3d8] border border-[#7d6654] font-medium focus:outline-none mb-3"
          />
        </div>

        <input name='email'
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          placeholder="Email address"
          className="w-full px-5 py-3 rounded-lg bg-[#332421] text-[#f4e3d8] border border-[#7d6654] font-medium focus:outline-none mb-3"
        />
        <input name='street'
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="Street"
          className="w-full px-5 py-3 rounded-lg bg-[#332421] text-[#f4e3d8] border border-[#7d6654] font-medium focus:outline-none mb-3"
        />

        <div className="multi-fields flex gap-4">
          <input name='city'
          onChange={onChangeHandler}
          value={data.city}
            type="text"
            placeholder="City"
            className="flex-1 px-5 py-3 rounded-lg bg-[#332421] text-[#f4e3d8] border border-[#7d6654] font-medium focus:outline-none mb-3"
          />
          <input name='state'
          onChange={onChangeHandler}
          value={data.state}
            type="text"
            placeholder="State"
            className="flex-1 px-5 py-3 rounded-lg bg-[#332421] text-[#f4e3d8] border border-[#7d6654] font-medium focus:outline-none mb-3"
          />
        </div>
        <div className="multi-fields flex gap-4">
          <input name='zipCode'
          onChange={onChangeHandler}
          value={data.zipCode}
            type="text"
            placeholder="Zip Code"
            className="flex-1 px-5 py-3 rounded-lg bg-[#332421] text-[#f4e3d8] border border-[#7d6654] font-medium focus:outline-none mb-3"
          />
          <inputv name='country'
          onChange={onChangeHandler}
          value={data.country}
            type="text"
            placeholder="Country"
            className="flex-1 px-5 py-3 rounded-lg bg-[#332421] text-[#f4e3d8] border border-[#7d6654] font-medium focus:outline-none mb-3"
          />
        </div>
        <input name='phone'
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="Phone"
          className="w-full px-5 py-3 rounded-lg bg-[#332421] text-[#f4e3d8] border border-[#7d6654] font-medium focus:outline-none mb-3"
        />
      </div>

      {/* Right: Cart Totals, Checkout, Promo */}
      <div className="place-order-right flex-1 bg-[#291a15] rounded-xl p-8 shadow-lg border border-[#3d2a22]">
        <h2 className="font-bold text-[#dab988] text-2xl mb-4">Cart Totals</h2>
        <div className="flex justify-between items-center mb-2 text-[#b49e94] text-lg">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mb-2 text-[#b49e94] text-lg">
          <span>Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mt-5 text-[#dab988] text-xl font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        {/* Promo Code Section */}
        <div className="rounded-xl p-5 mt-8 bg-[#332421] shadow flex flex-col">
          <p className="text-lg text-[#f4e3d8] font-medium mb-3">
            Have a promo code?
          </p>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="promo-code"
              className="px-4 py-2 rounded-lg bg-[#291a15] text-[#f4e3d8] border border-[#ad8656] focus:outline-none font-mono"
            />
            <button className="bg-gradient-to-r from-[#ad8656] to-[#b49e94] hover:text-[#f4e3d8] hover:bg-[#221512] text-[#43322b] font-bold px-5 py-2 rounded-lg shadow transition-colors duration-200">
              Submit
            </button>
          </div>
        </div>
        <button className="mt-8 bg-gradient-to-r from-[#ad8656] to-[#b49e94] text-[#43322b] hover:text-[#f4e3d8] hover:bg-[#221512] font-bold rounded-xl px-8 py-3 shadow-xl transition-all text-lg tracking-wide">
          PROCEED TO PAYMENT
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
