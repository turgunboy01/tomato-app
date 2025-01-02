import { assets } from "../../assets/frontend_assets/assets";

const AppDownload = () => {
  return (
    <div
      id="app-download"
      className="m-auto mt-[100px] text-[calc(3vw,20px)] text-center font-medium"
    >
      <p className="text-[3vw]">
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="flex justify-center mt-20 gap-[max(2vw,10px)] ">
        <img
          src={assets.play_store}
          alt=""
          className="w-[max(30vw,120px)] max-w-[180px] hover:scale-[1.05] transition-[.3s]"
        />
        <img
          src={assets.app_store}
          alt=""
          className="w-[max(30vw,120px)] max-w-[180px] hover:scale-[1.05] transition-[.3s]"
        />
      </div>
    </div>
  );
};

export default AppDownload;
