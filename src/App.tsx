import Stories, { Company } from "./Components/Stories";
import Imagencampana from "./assets/Imagencampaña.png";
import Welcome from "./Components/Welcome";
import FirstBanner from "./Components/FirstBanner";
import LogoAso from "./assets/Asooccidente/Logo.png";
import LogoHseq from "./assets/HSEQ/Logo.png";
import BannerHseq from "./assets/HSEQ/banner_1.jpg";
import CesviVolante from "./assets/Cesvi/volante1.jpg";
import CesviVolante_second from "./assets/Cesvi/volante2.jpg";
import RegisterForm from "./Components/RegisterForm";
import LogoCda from "./assets/CDA/Logo.png";
import CdaB_1 from "./assets/CDA/1.gif";
import CdaB_2 from "./assets/CDA/2.gif";
import CdaB_3 from "./assets/CDA/3.gif";
import CdaB_4 from "./assets/CDA/4.gif";
import CdaB_5 from "./assets/CDA/5.gif";
import CdaB_6 from "./assets/CDA/6.gif";
import CdaB_7 from "./assets/CDA/7.gif";

function App() {
  const storiesData: Company[] = [
    {
      stories: [
        {
          content: <Welcome />,
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
                className="w-full h-full object-scale-down lg:object-fill aspect-video"
              />
            </div>
          ),
          duration: 7000,
        },
      ],
    },
    {
      logo: (
        <img
          src={LogoHseq}
          alt="LOGO Hseq"
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
      logo: (
        <img
          src={LogoCda}
          alt="LOGO CDA"
          width={100}
          height={70}
          loading="lazy"
        />
      ),
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
                src={CdaB_6}
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
