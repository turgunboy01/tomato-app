import React from "react";
import { assets } from "../../admin_assets/assets";
import { NavLink } from "react-router-dom";
const Sitebar = () => {
  return (
    <div className="w-[18%] min-h-[100vh] border border-[#a9a9a9] border-t-0 text-[max(1vw,10px)]">
      <div className="flex flex-col gap-5 pt-[50px]  pl-[20%]">
        <NavLink
          to={"/add"}
          className="flex items-center gap-3 border border-[#a9a9a9] border-r-0 px-2.5 py-2 rounded-tl-[3px] rounded-bl-[3px] cursor-pointer"
        >
          <img src={assets.add_icon} alt="" />
          <p className=" hidden lg:block">Add Items</p>
        </NavLink>
        <NavLink
          to={"/list"}
          className="flex items-center gap-3 border border-[#a9a9a9] border-r-0 px-2.5 py-2 rounded-tl-[3px] rounded-bl-[3px] cursor-pointer"
        >
          <img src={assets.order_icon} alt="" />
          <p className=" hidden lg:block">List Items</p>
        </NavLink>{" "}
        <NavLink
          to={"/orders"}
          className="flex items-center gap-3 border border-[#a9a9a9] border-r-0 px-2.5 py-2 rounded-tl-[3px] rounded-bl-[3px] cursor-pointer"
        >
          <img src={assets.order_icon} alt="" />
          <p className=" hidden lg:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sitebar;
