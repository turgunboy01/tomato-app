import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, cartItems, removeFromItem, getTotalCartAmount, url } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div>
      <div className="">
        <div className="grid grid-cols-6 text-[#c6c6c6] gap-4 ">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="my-2" />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="grid grid-cols-6 items-center text-[#00000080] gap-5 ">
                  <img
                    src={url + "/images/" + item.image}
                    alt=""
                    className="w-[80px]"
                  />

                  <p>{item.name}</p>
                  <p> ${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromItem(item._id)}
                    className="text-[13px]"
                  >
                    {" "}
                    X
                  </p>
                </div>
                <hr className="my-2" />
              </div>
            );
          }
        })}
      </div>
      <div className="mt-20 flex md:flex-row flex-col justify-between gap-[max(12vw,20px)]">
        <div className="flex-1 flex flex-col gap-5">
          <h2>Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-2.5" />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Free</p>
              <p>${getTotalCartAmount() == 0 ? 0 : 2}</p>
            </div>
            <hr className="my-2.5" />{" "}
            <div className="flex justify-between text-[#555] font-semibold">
              <p>Total</p>
              <p>
                ${getTotalCartAmount() + (getTotalCartAmount() == 0 ? 0 : 2)}
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="text-white bg-[tomato] cursor-pointer py-3 rounded w-[max(12vw,200px)]"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-1">
          <div>
            <p className="text-[#555]">
              If you have a promo code, Enter it here
            </p>
            <div className="mt-2.5 flex justify-between items-center bg-[#eaeaea] rounded">
              <input
                className="outline-none bg-transparent pl-2.5"
                type="text"
                placeholder="promom code"
              />
              <button className="py-3 px-1.5 bg-black  text-white w-[max(10vw,150px)] md:w-[max(10vw,120px)] lg:w-[max(10vw,150px)] rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
