import GlareHover from "../GlareHover";
import add from "../../assets/add.png";
import exam from "../../assets/exam.png";
import webDesign from "../../assets/web-design.png";
import marketAnalysis from "../../assets/market-analysis.png";
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

export default function Services() {
  const ourServices = [
    {
      img: webDesign,
      desc: "Criamos Designs que Vendem",
      desc2:
        "Design pensado para destacar seu produto e vender mais no marketplace",
    },
    {
      img: exam,
      desc: "Otimizamos seus anúncios",
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
          <div key={index} className="relative  group-wrapper">
            <div className="hover:scale-110 flex hover:shadow-[0px_0px_20px_rgba(10,185,209,0.3)] rounded-lg transition-all duration-300 h-full">
              <a
                target="_blank"
                href="https://wa.me/5511966052171?text=Oi%2C%20vim%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20Ecommflow...%20%23ECOMMFLOW"
              >
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

                    <span className="absolute p-4 text-base hover:text-[#00e1ff] inset-0 font-semibold font-montserrat flex items-center justify-center text-gray-200 opacity-0 transition-all duration-300 group-hover:opacity-100">
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
