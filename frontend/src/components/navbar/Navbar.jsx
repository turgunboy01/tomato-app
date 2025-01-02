import { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const handleMenu = (menu) => {
    setMenu(menu);
  };

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="py-5  flex justify-between items-center">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="w-[150px]" />
      </Link>
      <ul className="flex justify-between items-center gap-5 text-[#49558e]  text-[18px] font-outfit">
        <Link
          to={"/"}
          onClick={() => handleMenu("home")}
          className={`${
            menu == "home"
              ? "border-b-[2px] border-[#49557e] pb-[2px] cursor-pointer"
              : "cursor-pointer"
          }`}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => handleMenu("menu")}
          className={`${
            menu == "menu"
              ? "border-b-[2px] border-[#49557e]  pb-[2px] cursor-pointer"
              : "cursor-pointer"
          }`}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => handleMenu("mobile")}
          className={`${
            menu == "mobile"
              ? "border-b-[2px] border-[#49557e] pb-[2px] cursor-pointer"
              : "cursor-pointer"
          }`}
        >
          mobile-menu
        </a>
        <a
          href="#footer"
          onClick={() => handleMenu("contact")}
          className={`${
            menu == "contact"
              ? "border-b-[2px] border-[#49557e] pb-[2px] cursor-pointer"
              : "cursor-pointer"
          }`}
        >
          contact us
        </a>
      </ul>
      <div className="flex  items-center gap-10">
        <div className="flex gap-10">
          <img src={assets.search_icon} alt="" />
          <Link to={"/cart"} className="relative">
            <img src={assets.basket_icon} alt="" />
            <div
              className={
                getTotalCartAmount() === 0
                  ? ""
                  : "absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-full -top-2 -right-2"
              }
            ></div>
          </Link>
        </div>
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-transparent  text-[#49557e] px-[30px] py-3 border rounded-full border-[tomato] hover:bg-[#fff4f2] cursor-pointer transition-all"
          >
            {" "}
            sign in
          </button>
        ) : (
          <div className="relative nav">
            <img src={assets.profile_icon} className="" alt="" />
            <ul className="absolute hidden -right-8 z-10 logout ">
              <li className="flex items-center gap-2.5 cursor-pointer hover:text-[tomato]">
                <img className="w-5" src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li
                onClick={logout}
                className="flex items-center gap-2.5 cursor-pointer hover:text-[tomato]"
              >
                <img src={assets.logout_icon} className="w-5" alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
