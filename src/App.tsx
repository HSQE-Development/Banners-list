import Stories, { Company } from "./Components/Stories";
import Imagencampana from "./assets/Imagencampaña.png";
import FirstBanner from "./Components/FirstBanner";
import LogoAso from "./assets/Asooccidente/Logo.png";
import BannerHseq from "./assets/HSEQ/BICIUSUARIO.gif";
import BannerMotoHseq from "./assets/HSEQ/Moto.gif";
import CesviVolante from "./assets/Cesvi/volante1.jpg";
import CesviVolante_second from "./assets/Cesvi/volante2.jpg";
import RegisterForm from "./Components/RegisterForm";
import CdaB_1 from "./assets/CDA/1.gif";
import CdaB_2 from "./assets/CDA/2.gif";
import CdaB_3 from "./assets/CDA/3.gif";
import CdaB_4 from "./assets/CDA/4.gif";
import CdaB_5 from "./assets/CDA/5.gif";
import CdaB_final from "./assets/CDA/final.gif";
import CdaB_7 from "./assets/CDA/7.gif";
import CdaB_8 from "./assets/CDA/8.gif";
import CdaB_9 from "./assets/CDA/9.gif";
import CdaB_10 from "./assets/CDA/10.gif";
import CdaB_11 from "./assets/CDA/11.gif";
import CdaB_12 from "./assets/CDA/12.gif";
import CdaB_13 from "./assets/CDA/13.gif";
import CdaB_14 from "./assets/CDA/14.gif";
import CdaB_15 from "./assets/CDA/15.gif";
import CdaB_16 from "./assets/CDA/16.gif";
import Welcome from "./assets/bienvenido.gif";

function App() {
  const storiesData: Company[] = [
    {
      stories: [
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={Welcome}
                alt="Imagen de welcome"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-fill aspect-video"
              />
            </div>
          ),
        },
        {
          content: <FirstBanner />,
        },
      ],
    },
    {
      logo: (
        <img
          src={LogoAso}
          alt="LOGO Asooccidente"
          width={150}
          height={70}
          loading="lazy"
        />
      ),
      name: "Asooccidente",
      slogan: "Construyendo el futuro",
      stories: [
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={Imagencampana}
                alt="Imagen de Campaña"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-fill aspect-video"
              />
            </div>
          ),
          // duration: 7000,
        },
      ],
    },
    {
      name: "Hseq",
      slogan: "Construyendo el futuro",
      stories: [
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={BannerHseq}
                alt="Imagen de hseq"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-fill aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={BannerMotoHseq}
                alt="Imagen de hseq moto"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-fill aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
      ],
    },
    {
      name: "Cesvi",
      slogan: "Construyendo el futuro",
      stories: [
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={CesviVolante}
                alt="Volante"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-contain aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={CesviVolante_second}
                alt="Volante 2"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-contain aspect-video"
              />
            </div>
          ),
          duration: 7000,
          propagatedClick: false,
        },
      ],
    },
    {
      name: "CDA",
      slogan: "Construyendo el futuro",
      stories: [
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={CdaB_1}
                alt="CdaB_1"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-contain aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={CdaB_2}
                alt="CdaB_2"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-contain aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={CdaB_3}
                alt="CdaB_3"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-contain aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={CdaB_4}
                alt="CdaB_4"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-contain aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={CdaB_5}
                alt="CdaB_5"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-contain aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={CdaB_7}
                alt="CdaB_7"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-contain aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={CdaB_8}
                alt="CdaB_8"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-contain aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={CdaB_9}
                alt="CdaB_9"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-contain aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={CdaB_10}
                alt="CdaB_10"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-contain aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={CdaB_11}
                alt="CdaB_11"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-contain aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={CdaB_12}
                alt="CdaB_12"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-contain aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={CdaB_13}
                alt="CdaB_13"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-contain aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={CdaB_14}
                alt="CdaB_14"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-contain aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={CdaB_15}
                alt="CdaB_15"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-contain aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={CdaB_16}
                alt="CdaB_16"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-contain aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
        {
          content: (
            <div className="w-full h-full flex justify-center items-center text-white text-xl bg-zinc-800">
              <img
                src={CdaB_final}
                alt="CdaB_6"
                loading="lazy"
                width={400}
                height={200}
                className="w-full h-full object-fill lg:object-contain aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
      ],
    },
    {
      stories: [
        {
          content: <RegisterForm />,
          propagatedClick: true,
        },
      ],
    },
  ];

  return (
    <div className="h-screen">
      <Stories companies={storiesData} defaultDuration={3000} />
    </div>
  );
}

export default App;
