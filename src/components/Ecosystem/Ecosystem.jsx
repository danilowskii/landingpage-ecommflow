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
    { logo: ecommFlow, link: "https://ecommflow.com.br" }, // Índice 0

    { logo: lojaHub, link: "https://lojahub.com.br" },
    { logo: hubAnalytics, link: "https://analytics.lojahub.com.br" },
    { logo: ecomSummit, link: "https://www.ecomsummit.com.br" },
    { logo: ecommerce40, link: "https://www.ecommerce4ponto0.com.br" },
    { logo: ecomSult, link: "https://www.ecomsult.com.br" },
    { logo: soAtacado, link: "https://www.soatacado.com" },
    { logo: dreContabil, link: "https://www.drecontabil.com.br" },
    { logo: academia, link: "https://www.academiadoecommerce.com.br" },
  ];

  return (
    <div className="relative">
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
      <div className="text-white border-white/20 mx-auto rounded-xl relative text-xl justify-center items-center overflow-hidden p-8 flex flex-col md:flex-wrap gap-5 md:flex-row h-auto">
        <h2 className="text-white/90 gap-2 font-bold text-center text-4xl sm:text-5xl ">
          Nosso{" "}
          <span className="font-bold bg-linear-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent pb-2">
            Ecossistema
          </span>
        </h2>

        <div className="flex z-10 flex-wrap items-center p-8 justify-center gap-10">
          {logos.map((logo, id) => {
            // Verificamos se é a primeira logo (Ecomm Flow)
            const isMainLogo = id === 0;

            return (
              <div
                key={id}
                // Lógica condicional:
                // w-full: Ocupa a linha toda no mobile
                // flex justify-center: Centraliza a imagem
                // mb-4: Dá um espaçamento extra abaixo dela no mobile
                // md:w-auto: No desktop, volta a se comportar como um item normal
                // md:mb-0: Remove a margem extra no desktop
                className={
                  isMainLogo
                    ? "w-full flex justify-center mb-4 md:w-auto md:mb-0"
                    : ""
                }
              >
                <a target="_blank" href={logo.link}>
                  <img
                    src={logo.logo}
                    // Adicionei md:w-44 na primeira logo para ela ficar levemente maior no desktop se desejar destaque,
                    // ou mantenha o padrão para todas.
                    className={`hover:scale-105 transition-transform ease-in h-auto ${
                      isMainLogo ? "w-32 md:w-36" : "w-24 md:w-36"
                    }`}
                    alt=""
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
