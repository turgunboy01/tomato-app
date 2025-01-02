import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div id="explore-menu" className="flex flex-col gap-5">
      <h1 className="text-[#262626] font-medium text-[max(2vw,13px)]">Explore our menu</h1>
      <p className="text-[#808080] max-w-[80%]">
        Choose from a diverse menu featuring a delectabel array of dishes
        crafted with the fitnest ingredients and culinary expertise. Our mission
        is to satisfy your craaving and elevate your dining experiense, one
        delicious meal at a time.
      </p>
      <div className="flex justify-between items-center gap-7 overflow-scroll text-center my-5  scroll">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className=""
            >
              <img
                src={item.menu_image}
                className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition-[.3s] ${
                  category === item.menu_name
                    ? "border-4 border-[tomato] p-1"
                    : ""
                }`}
                alt={item.menu_name}
              />
              <p className="mt-2.5 text-[#747474] text-[calc(1.4vw,16px)] cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="bg-[#e2e2e2] my-2.5 h-[2px] border-none" />
    </div>
  );
};

export default ExploreMenu;
