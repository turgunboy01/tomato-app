import React, { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, price, name, description, image }) => {
  const { cartItems, addToCart, removeFromItem, url } =
    useContext(StoreContext);

  return (
    <div className="w-full m-auto rounded-2xl shadow-xl shadow-[#00000015] transition-[.3s] animation">
      <div className="relative">
        <img
          className=" w-full rounded-t-[15px] "
          src={url + "/images/" + image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            className=" w-[35px] absolute bottom-[15px] right-[15px] rounded-full cursor-pointer"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="absolute bottom-[15px] right-[15px] flex items-center gap-3 p-2 bg-white rounded-full">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromItem(id)}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-5 justify-between items-start lg:items-center mb-2.5">
          <p className="text-[20px] font-medium">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[12px] text-[#676767]">{description}</p>
        <p className="text-[tomato] my-2.5 font-medium text-[22px]">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
