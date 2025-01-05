import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalCartAmount, url, food_list, cartItems, token } =
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

  const onCHangeHandler = (e) => {
    const { value, name } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      let itemInfo = item;
      itemInfo["quantity"] = cartItems[item._id];
      orderItems.push(itemInfo);
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount(),
    };
    console.log(orderData);

    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });

    console.log(response.data);

    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      // alert("Error");
      // console.log(Error);
    }
  };

  return (
    <div>
      <form
        onSubmit={placeOrder}
        className="flex items-start justify-between gap-12 mt-24"
      >
        <div className="w-full max-w-[max(30%,500px)]">
          <p className="text-[30px] mb-24 font-semibold">
            Delivery Information
          </p>
          <div className="flex gap-2.5">
            <input
              type="text"
              required
              className="w-full p-2.5 mb-4 rounded border border-[#c4c4c4] outline-[tomato]"
              placeholder="First Name"
              name="firstName"
              value={data.firstName}
              onChange={onCHangeHandler}
            />
            <input
              type="text"
              required
              className="w-full p-2.5 mb-4 rounded border border-[#c4c4c4] outline-[tomato]"
              placeholder="Last Name"
              value={data.lastName}
              name="lastName"
              onChange={onCHangeHandler}
            />
          </div>
          <input
            type="text"
            className="w-full p-2.5 mb-4 rounded border border-[#c4c4c4] outline-[tomato]"
            placeholder="Email Adress"
            name="email"
            required
            onChange={onCHangeHandler}
            value={data.email}
          />
          <input
            type="text"
            className="w-full p-2.5 mb-4 rounded border border-[#c4c4c4] outline-[tomato]"
            placeholder="Street"
            value={data.street}
            required
            name="street"
            onChange={onCHangeHandler}
          />
          <div className="flex gap-2.5">
            <input
              type="text"
              className="w-full p-2.5 mb-4 rounded border border-[#c4c4c4] outline-[tomato]"
              placeholder="City"
              name="city"
              required
              value={data.city}
              onChange={onCHangeHandler}
            />
            <input
              type="text"
              className="w-full p-2.5 mb-4 rounded border border-[#c4c4c4] outline-[tomato]"
              placeholder="State"
              required
              name="state"
              value={data.state}
              onChange={onCHangeHandler}
            />
          </div>{" "}
          <div className="flex gap-2.5">
            <input
              type="text"
              className="w-full p-2.5 mb-4 rounded border border-[#c4c4c4] outline-[tomato]"
              placeholder="Zip Code"
              name="zipcode"
              required
              value={data.zipcode}
              onChange={onCHangeHandler}
            />
            <input
              type="text"
              className="w-full p-2.5 mb-4 rounded border border-[#c4c4c4] outline-[tomato]"
              placeholder="Country"
              name="country"
              value={data.country}
              required
              onChange={onCHangeHandler}
            />
          </div>
          <input
            type="number"
            className="w-full p-2.5 mb-4 rounded border border-[#c4c4c4] outline-[tomato]"
            placeholder="Phone"
            name="phone"
            required
            value={data.phone}
            onChange={onCHangeHandler}
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
            <button
              type="submit"
              className="text-white mt-8 bg-[tomato] cursor-pointer py-3 rounded w-[max(12vw,250px)]"
            >
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
