import Circles from "./Circles";
import FirstBannerImg from "../assets/FirstBanner.svg";

export default function FirstBanner() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center text-white text-xl bg-violet-950 relative isolate">
      <div className="mt-24 w-full flex items-center flex-col justify-center gap-8">
        <h1 className="text-5xl md:text-7xl text-center">VIDAS EN RIESGO </h1>
        <p className="text-center">!NO TE DEJES ATRAPAR DE LA MUERTE!</p>
      </div>
      <div className="absolute isolate w-full bottom-40">
        <Circles />
      </div>
      <img
        src={FirstBannerImg}
        alt="First Image for banner"
        className="absolute -bottom-32"
      />
    </div>
  );
}
