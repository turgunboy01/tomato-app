import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div
      id="footer"
      className="bg-[#323232] text-[#d9d9d9] mt-24 flex flex-col items-center  gap-5 pt-20 pb-5 px-[8vw]"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] lg:gap-[140px] w-full ">
        <div className="flex flex-col items-start gap-5">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            esse, animi ab quidem inventore magnam quas quis architecto, harum
            explicabo ad sint culpa dolorem minus, assumenda reiciendis atque
            aut quod.
          </p>
          <div className="flex gap-1 items-center">
            <img
              className="w-[40px] mr-[15px]"
              src={assets.facebook_icon}
              alt=""
            />

            <img
              className="w-[40px] mr-[15px]"
              src={assets.twitter_icon}
              alt=""
            />
            <img
              className="w-[40px] mr-[15px]"
              src={assets.linkedin_icon}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 ">
          <h2 className="text-[#fff]">COMPANY</h2>
          <ul>
            <li className="mb-2 cursor-pointer">Home</li>
            <li className="mb-2 cursor-pointer">About Us</li>
            <li className="mb-2 cursor-pointer">Delivary</li>
            <li className="mb-2 cursor-pointer">Privacy policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-[#fff] ">GET IN TOUCH</h2>
          <ul>
            <li className="mb-2 cursor-pointer">+99 895 123 21 75</li>
            <li className="mb-2 cursor-pointer">turgunboy.channel@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="bg-[grey] h-[2px] my-5 border-none w-full" />
      <p> Copyrignt 2024 &copy; Tomato.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
