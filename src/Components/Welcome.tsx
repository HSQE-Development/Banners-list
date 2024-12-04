import WelcomeImg from "../assets/Welcome.svg";
import Circles from "./Circles";

export default function Welcome() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center text-white text-xl bg-zinc-800 relative isolate">
      <div className="mt-24 w-full flex items-center flex-col justify-center gap-8">
        <h1 className="text-5xl md:text-7xl text-center">Bienvenido!</h1>
        <p className="text-center">Esta es una campaña de concientización</p>

        <div className="w-full text-right">
          <small className="text-zinc-400 mr-4">Presiona para continuar</small>
        </div>
      </div>
      <div className="absolute bottom-[-6rem] w-full flex items-center justify-center">
        <Circles />
        <img
          src={WelcomeImg}
          alt="WelCome Image"
          width={300}
          className="relative -bottom-2"
        />
      </div>
    </div>
  );
}
