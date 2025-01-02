import header_img from "../../assets/frontend_assets/header_img.png";
const Header = () => {
  return (
    <div
      className="h-[34vw] my-[30px] mx-auto relative   animation"
      style={{
        background: `url(${header_img})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute bottom-[10%] left-[6vw] flex flex-col items-start max-w-[50%] gap-[2vw]">
        <h2 className="font-medium text-white sm:text-[max(4vw,22px)]">
          Order your favourite food here
        </h2>
        <p className="text-[1vw] text-[#fff]">
          Choose from a diverse menu featuring a delectabel array of dishes
          crafted with the fitnest ingredients and culinary expertise. Our
          mission is to satisfy your craaving and elevate your dining
          experiense, one delicious meal at a time.
        </p>
        <button className="text-[8px] md:text-[max(1vw,13px)] rounded-full bg-white text-[#747474] font-medium px-[2.3vw] py-[1vw] ">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
