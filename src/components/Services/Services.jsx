import GlareHover from "../GlareHover";
import exam from "../../assets/exam.png";
import webDesign from "../../assets/web-design.png";
import ads from "../../assets/social-media-marketing.png";
import catalog from "../../assets/winner.png";

const ArrowIcon = ({ delay }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    style={{ animationDelay: `${delay}s` }}
    className="w-6 h-6 text-[#00e1ff] animate-pulse"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);

export default function Services({
  customLink = "Olá, vim do site e gostaria de informações sobre a assessoria Ecomm Flow. #ECOMMFLOW",
  onTrackPixel,
}) {
  const link = customLink;
  const ourServices = [
    {
      img: webDesign,
      desc: "Criamos Designs que Vendem",
      desc2:
        "Design pensado para destacar seu produto e vender mais no marketplace",
    },
    {
      img: exam,
      desc: "Otimizamos Seus Anúncios",
      desc2:
        "Títulos estratégicos, categoria correta e ficha técnica otimizada com as melhores palavras-chave",
    },
    {
      img: catalog,
      desc: "Criamos Promoções para Seus Anúncios",
      desc2: "Promoções que dão mais alcance e desempenho aos seus anúncios",
    },
    {
      img: ads,
      desc: "Criamos e Gerenciamos seus ADS",
      desc2: "Criação e gerenciamento de ADS com foco em performance",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="relative max-w-[1080px] grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 px-4">
        {ourServices.map((service, index) => (
          <div key={index} className="relative group group-wrapper">
            <div className="absolute -top-3 -left-4 z-20 flex h-8 w-8 md:w-10 md:h-10 md:text-[20px] items-center justify-center rounded-full bg-black text-sm group-hover:scale-110 transition-all font-semibold text-[#00e1ff] shadow-lg ">
              {index + 1}
            </div>
            <div className="relative hover:scale-110 flex hover:shadow-[0px_0px_20px_rgba(10,185,209,0.3)] rounded-lg transition-all duration-300 h-full">
              <a target="_blank" onClick={onTrackPixel} href={link}>
                <GlareHover>
                  <div className="relative group h-32 flex items-center justify-center flex-col md:gap-4 text-center p-3 cursor-pointer">
                    <img
                      src={service.img}
                      className="w-12 group-hover:opacity-0 transition-all duration-300"
                      alt={service.desc}
                    />

                    <span className="text-md font-semibold font-montserrat transition-all duration-300 group-hover:opacity-0">
                      {service.desc}
                    </span>

                    <span className="absolute p-4 text-sm md:text-base hover:text-[#00e1ff] inset-0 font-semibold font-montserrat flex items-center justify-center text-gray-200 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      {service.desc2}
                    </span>
                  </div>
                </GlareHover>
              </a>
            </div>

            {index < ourServices.length - 1 && (
              <div className="hidden lg:flex absolute top-1/2 -right-8 transform -translate-y-1/2 z-20 pointer-events-none">
                <ArrowIcon delay={(index + 1) * 0.5} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
