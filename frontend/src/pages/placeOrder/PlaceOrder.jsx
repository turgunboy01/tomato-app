import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div>
      <form className="flex items-start justify-between gap-12 mt-24">
        <div className="w-full max-w-[max(30%,500px)]">
          <p className="text-[30px] mb-24 font-semibold">
            Delivery Information
          </p>
          <div className="flex gap-2.5">
            <input
              type="text"
              className="w-full p-2.5 mb-4 rounded border border-[#c4c4c4] outline-[tomato]"
              placeholder="First Name"
            />
            <input
              type="text"
              className="w-full p-2.5 mb-4 rounded border border-[#c4c4c4] outline-[tomato]"
              placeholder="Last Name"
            />
          </div>
          <input
            type="text"
            className="w-full p-2.5 mb-4 rounded border border-[#c4c4c4] outline-[tomato]"
            placeholder="Email Adress"
          />
          <input
            type="text"
            className="w-full p-2.5 mb-4 rounded border border-[#c4c4c4] outline-[tomato]"
            placeholder="Street"
          />
          <div className="flex gap-2.5">
            <input
              type="text"
              className="w-full p-2.5 mb-4 rounded border border-[#c4c4c4] outline-[tomato]"
              placeholder="City"
            />
            <input
              type="text"
              className="w-full p-2.5 mb-4 rounded border border-[#c4c4c4] outline-[tomato]"
              placeholder="State"
            />
          </div>{" "}
          <div className="flex gap-2.5">
            <input
              type="text"
              className="w-full p-2.5 mb-4 rounded border border-[#c4c4c4] outline-[tomato]"
              placeholder="Zip Code"
            />
            <input
              type="text"
              className="w-full p-2.5 mb-4 rounded border border-[#c4c4c4] outline-[tomato]"
              placeholder="Country"
            />
          </div>
          <input
            type="text"
            className="w-full p-2.5 mb-4 rounded border border-[#c4c4c4] outline-[tomato]"
            placeholder="Phone"
          />
        </div>
        <div className="w-full max-w-[max(40%,500px)]">
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
            <button className="text-white mt-8 bg-[tomato] cursor-pointer py-3 rounded w-[max(12vw,250px)]">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
