import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  const navigate = useNavigate();

  // Calculate totals
  const deliveryFee = 2;
  const subtotal = food_list.reduce(
    (total, item) => total + (cartItems[item._id] || 0) * item.price,
    0
  );
  const total = subtotal + deliveryFee;

  return (
    <div className="w-full min-h-screen bg-[#21120e] py-12 px-0 sm:px-16">
  <div className="max-w-5xl mx-auto">
    {/* Cart Header */}
    <div className="mb-4">
      <h1 className="text-3xl font-bold text-[#b49e94] tracking-tight mb-6">Your Cart</h1>
    </div>

    {/* Cart Items List */}
    <div className="flex flex-col gap-6">
      {food_list.map(item =>
        cartItems[item._id] > 0 && (
          <div
            key={item._id}
            className="flex items-center gap-6 bg-[#331F18] rounded-2xl px-6 py-6 shadow-lg hover:bg-[#140803] hover:shadow-xl transition-all"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="h-20 w-20 object-cover rounded-2xl shadow-md border border-[#5a4232]"
            />
            {/* Details */}
            <div className="flex-1 flex flex-col gap-2">
              <h2 className="text-xl font-semibold tracking-wide text-[#f4e3d8]">{item.name}</h2>
              <p className="text-[#b49e94] font-normal text-base">${item.price} <span className="mx-2">|
                </span> Qty: <span className="font-mono">{cartItems[item._id]}</span></p>
            </div>
            {/* Total */}
            <div className="flex flex-col gap-2 items-end min-w-[100px]">
              <span className="text-[#b49e94] text-lg font-bold">${(item.price * cartItems[item._id]).toFixed(2)}</span>
              <button
                onClick={() => removeFromCart(item._id)}
                className="bg-[#ad8656] text-white w-8 h-8 text-lg flex justify-center items-center rounded-full shadow hover:bg-[#7a5d39] transition"
                aria-label={`Remove ${item.name}`}
              >×</button>
            </div>
          </div>
        )
      )}
    </div>

    {/* Cart Totals + Checkout */}
    <div className="flex flex-col md:flex-row gap-6 mt-10">
      <div className="flex-1 bg-[#291a15] rounded-2xl p-8 shadow-xl border border-[#3d2a22] min-w-[260px]">
        <h2 className="font-bold text-[#b49e94] text-2xl mb-4">Cart Totals</h2>
        <div className="flex justify-between items-center mb-2 text-[#b49e94] text-lg">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mb-2 text-[#b49e94] text-lg">
          <span>Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mt-5 text-[#b49e94] text-xl font-bold">
          <span>Total</span>
          <span>${subtotal===0? 0 : 2}</span>
        </div>

 {/* Promo Code Section */}
      <div className="flex-1 bg-[#291a15] rounded-2xl p-4 mt-8 shadow-xl border border-[#3d2a22] flex flex-col justify-between">
        <p className="text-lg text-[#f4e3d8] font-medium mb-3">Have a promo code?</p>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="promo-code"
            className="px-4 py-2 rounded-lg bg-[#221512] text-[#f4e3d8] border border-[#ad8656] focus:outline-none font-mono"
          />
          <button
            className="bg-linear-to-r from-[#ad8656] to-[#b49e94] hover:text-[#f4e3d8] hover:bg-[#221512] text-[#43322b] font-bold px-5 py-2 rounded-lg shadow transition"
          >Submit</button>
        </div>
      </div>

        <button onClick={()=>navigate('/order')} className="mt-8 bg-linear-to-r from-[#ad8656] to-[#b49e94]
          text-[#43322b] hover:text-[#f4e3d8] hover:bg-[#221512] font-bold rounded-xl px-8 py-3 shadow-xl transition-all text-lg tracking-wide">
          PROCEED TO CHECKOUT
        </button>

        
      </div>
     
    </div>
  </div>
</div>

  )
}

export default Cart;
