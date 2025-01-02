import React from "react";
import { assets } from "../../admin_assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[4%] py-2">
      <img src={assets.logo} alt="w-[max(10%,80px)]" />
      <img src={assets.profile_image} className="w-[50px]" alt="" />
    </div>
  );
};

export default Navbar;
