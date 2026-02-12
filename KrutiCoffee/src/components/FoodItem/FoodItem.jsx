import React, { useContext, useState } from "react";
import "./FoodItem.css";
import addIconWhite from "../../assets/frontend_assets/add_icon_white.png";
import removeIconRed from "../../assets/frontend_assets/remove_icon_red.png";
import addIconGreen from "../../assets/frontend_assets/add_icon_green.png";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
    // const [itemCount, setItemCount]= useState(0);
   const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div
      className="food-item w-full m-auto rounded-4xl shadow-2xl bg-[#36211d]"
      style={{ transition: "0.3s", animation: "fadeIn 1s" }}
    >
      <div className="food-item-image-container relative">
        <img className="food-item-image w-100% rounded-3xl" src={url+"/images/"+image} alt="" />
        {!cartItems[id] ? <img className="add absolute bottom-3.5 right-3 bg-amber-950 rounded-full cursor h-8 w-8 mx-4 my-2" 
        onClick={()=>addToCart(id)} src={addIconWhite}/>
        : <div className="food-item-counter absolute bottom-3.5 right-3 p-1.5  flex gap-4 justify-between m-2 
        text-[#c8b1a7] bg-amber-900 rounded-full items-center">
            <img className="h-6 w-6" onClick={()=>removeFromCart(id)} src={removeIconRed}/>
            <p>{cartItems[id]}</p>
            <img className="h-6 w-6" onClick={()=>addToCart(id)} src={addIconGreen}/>
        </div>

        }
      </div>
      <div className="food-item-info p-4 text-[#c8b1a7]">
        <div className="food-item-name-rating flex justify-between items-center mb-2">
          <p className="font-mono"> {name}</p>
          {/* <img className="w-[70px] " src={assets.rating_starts} alt="" /> */}
        </div>
        <p className="food-item-desc font-light">{description}</p>
        <p className="food-item-price font-medium">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
