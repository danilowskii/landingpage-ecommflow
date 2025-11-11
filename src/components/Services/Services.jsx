import GlareHover from "../GlareHover";
import add from "../../assets/add.png";
import exam from "../../assets/exam.png";
import webDesign from "../../assets/web-design.png";
import marketAnalysis from "../../assets/market-analysis.png";
import ads from "../../assets/social-media-marketing.png";
import fastDelivery from "../../assets/fast-delivery.png";
import catalog from "../../assets/winner.png";
import newMarketplace from "../../assets/online-marketplace.png";

export default function Services() {
  const ourServices = [
    {
      img: add,
      desc: "Criação e Otimização de Anúncios",
      desc2: "Anúncios estratégicos que aumentam visibilidade e conversão.",
    },
    {
      img: exam,
      desc: "Ajustes de Descrição e Ficha Técnica",
      desc2: "Descrições otimizadas e completas para destacar seus produtos.",
    },
    {
      img: webDesign,
      desc: "Edição de Design Estratégico para Seu Nicho",
      desc2:
        "Modelos visuais que fortalecem sua marca e impulsionam resultados.",
    },
    {
      img: marketAnalysis,
      desc: "Pesquisa Aprofundada de Mercado",
      desc2: "Análise de concorrência e tendências para decisões assertivas.",
    },
    {
      img: ads,
      desc: "Criação e Otimização de Publicidade (ADS)",
      desc2: "Campanhas inteligentes para ampliar alcance e vendas.",
    },
    {
      img: fastDelivery,
      desc: "Estratégias Flex, Flex Turbo e Full",
      desc2: "Logística otimizada para melhor ranqueamento e entrega rápida.",
    },
    {
      img: catalog,
      desc: "Anúncios de Catálogo e Kits",
      desc2: "Combinações estratégicas para aumentar o ticket médio.",
    },
    {
      img: newMarketplace,
      desc: "Abertura de Novos Marketplaces",
      desc2: "Implantação completa para expandir sua presença online.",
    },
  ];
  return (
    <div className="flex justify-center">
      <div className=" max-w-[1080px] grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-10">
        {ourServices.map((service, index) => (
          <div
            key={index}
            className="hover:scale-110 hover:shadow-[0px_0px_20px_rgba(10,185,209,0.3)] rounded-lg transition-all duration-300"
          >
            <a
              target="_blank"
              href="https://wa.me/5511966052171?text=Oi%2C%20vim%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20Ecommflow...%20%23ECOMMFLOW"
            >
              <GlareHover>
                <div className="relative group h-32 flex items-center justify-center flex-col gap-4 text-center p-3">
                  {/* Texto padrão */}
                  <img
                    src={service.img}
                    className="w-12 group-hover:opacity-0 transition-all duration-300"
                  />
                  <span className="text-md font-semibold font-montserrat transition-all duration-300 group-hover:opacity-0">
                    {service.desc}
                  </span>

                  {/* Texto que aparece no hover */}
                  <span className="absolute p-4 text-lg hover:text-[#0ab9d1] inset-0 font-semibold font-montserrat flex items-center justify-center text-gray-200 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {service.desc2}
                  </span>
                </div>
              </GlareHover>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
