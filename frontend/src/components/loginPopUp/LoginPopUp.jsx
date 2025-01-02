import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const { url, token, setToken } = useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandle = (event) => {
    const { value, name } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currState == "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="fixed w-full h-full bg-[#00000090] grid z-10">
      <form
        onSubmit={onLogin}
        className="place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-6 py-6 p-8 text-[14px] animation rounded-lg"
      >
        <div className="flex justify-between items-center text-black">
          <h2 className="text-[25px]">{currState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            className=" w-4 cursor-pointer"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5">
          {currState == "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              value={data.name}
              name="name"
              onChange={onChangeHandle}
              placeholder="Your Name"
              required
              className=" outline-none border border-[#c9c9c9] p-2.5 rounded"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={data.email}
            onChange={onChangeHandle}
            required
            className=" outline-none border border-[#c9c9c9] p-2.5 rounded"
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={onChangeHandle}
            placeholder="Password"
            required
            className=" outline-none border border-[#c9c9c9] p-2.5 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-[tomato] rounded text-white p-2.5 text-[15px] cursor-pointer"
        >
          {currState == "Sign Up" ? "Crete account" : "Login"}
        </button>
        <div className="flex items-start -mt-4 gap-2">
          <input type="checkbox" className="mt-1" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState == "Login" ? (
          <p>
            Create a new account?
            <span
              className="text-[tomato] pl-1 font-medium cursor-pointer"
              onClick={() => setCurrState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              className="text-[tomato] font-medium cursor-pointer"
              onClick={() => setCurrState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
