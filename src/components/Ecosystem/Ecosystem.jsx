import lojaHub from "../../assets/lojaHub.png";
import dreContabil from "../../assets/DRE.png";
import ecommFlow from "../../assets/logo-white-ecomm.png";
import hubAnalytics from "../../assets/hubAnalytics.svg";
import ecomSummit from "../../assets/ecomSummit.png";
import ecommerce40 from "../../assets/ecommerce40.png";
import ecomSult from "../../assets/ecomSult.png";
import soAtacado from "../../assets/soAtacado.png";
import academia from "../../assets/academia.png";
import Particles from "../Particles";

export default function Ecosystem() {
  const logos = [
    { logo: ecommFlow, link: "https://ecommflow.com.br" },
    { logo: dreContabil, link: "https://www.drecontabil.com.br" },

    { logo: lojaHub, link: "https://lojahub.com.br" },
    { logo: hubAnalytics, link: "https://analytics.lojahub.com.br" },
    { logo: ecomSummit, link: "https://www.ecomsummit.com.br" },
    { logo: ecommerce40, link: "https://www.ecommerce4ponto0.com.br" },
    { logo: ecomSult, link: "https://www.ecomsult.com.br" },
    { logo: soAtacado, link: "https://www.soatacado.com" },
    { logo: academia, link: "https://www.academiadoecommerce.com.br" },
  ];
  return (
    <div className="relative pb-20">
      <div
        style={{
          width: "100%",
          height: "100svh",
          position: "absolute",
          opacity: "0.4",
        }}
      >
        <Particles
          particleColors={["#0ab9d1", "#fff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="text-white max-w-[95%] md:max-w-[70%] border-white/20 border mx-auto rounded-xl relative text-xl justify-center items-center overflow-hidden p-8 flex flex-col md:flex-wrap gap-5 md:flex-row h-auto">
        <h2 className="text-white/90 gap-2 font-bold text-center text-4xl sm:text-5xl py-5">
          Nosso{" "}
          <span className="font-bold bg-linear-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent pb-2">
            Ecossistema
          </span>
        </h2>

        <div className="w-96 h-52 bg-sky-700/50 absolute top-0 left-0 filter z-0 blur-[150px] rounded-full"></div>
        <div className="w-96 h-52 bg-gray-500/70 absolute bottom-1/4 right-1/12 filter z-0 blur-[150px] rounded-full"></div>
        <div className="w-96 h-52 bg-sky-200/40 absolute left-1/2 -translate-x-1/2 bottom-0 filter z-0 blur-[150px] rounded-full"></div>
        <div className="flex z-10 flex-wrap items-center p-8 justify-center gap-10">
          {logos.map((logo, id) => (
            <div key={id}>
              <a target="_blank" href={logo.link}>
                <img
                  src={logo.logo}
                  className="w-52 hover:scale-105 transition-transform ease-in h-auto"
                  alt=""
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
