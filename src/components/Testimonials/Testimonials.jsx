import React, { useState } from "react";
import reformAnun from "../../assets/reformAnun.svg";
import reformAnunVideo from "../../assets/reformAnunVideo.mp4";
import printWhatsapp from "../../assets/printWhatsapp.svg";
import printWhatsapp1 from "../../assets/printWhatsapp1.svg";
import aumentFaturVideo from "../../assets/aumentFatur.mp4";
import aumentFatur from "../../assets/aumentFatur.svg";

const PlayIcon = () => (
  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00e1ff]/20 group-hover:border-[#00e1ff] transition-all duration-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8 text-white group-hover:text-[#00e1ff] ml-1"
    >
      <path
        fillRule="evenodd"
        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-8 h-8 text-white hover:text-[#00e1ff] transition-colors"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function Testimonials() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const testimonials = [
    {
      type: "image",
      src: printWhatsapp1,
      alt: "Resultado de vendas",
      label: "Qualidade Garantida",
    },
    {
      type: "video",
      poster: reformAnun,
      src: reformAnunVideo,
      alt: "Depoimento em vídeo",
      label: "Feedback Igor Lopes",
    },
    {
      type: "image",
      src: printWhatsapp,
      alt: "Gráfico de crescimento",
      label: "Clientes Satisfeitos",
    },
    {
      type: "video",
      poster: aumentFatur,
      src: aumentFaturVideo,
      alt: "Depoimento CEO",
      label: "Aumento Faturamento",
    },
  ];

  return (
    <section className="py-10 bg-black relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 font-montserrat text-center">
          Veja o que nossos{" "}
          <span className="bg-linear-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
            clientes dizem
          </span>
        </h2>

        <div
          className="
            w-full flex gap-4 
            overflow-x-auto  pb-8 flex-wrap justify-center
            md:overflow-visible md:flex-row md:justify-center md:flex-wrap lg:flex-nowrap
            scrollbar-hide md:px-0
        "
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedFeature(item)}
              className="
                  relative 
                  w-[150px] h-[280px] md:w-[220px] md:h-[400px] lg:w-60 lg:h-[420px]
                  rounded-2xl overflow-hidden border border-white/10 group
                  transition-all duration-500 cursor-pointer 
                  hover:scale-105 hover:border-[#00e1ff]/50 hover:shadow-[0_0_20px_rgba(0,225,255,0.2)]
                "
            >
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src={item.type === "video" ? item.poster : item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>
              </div>

              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <PlayIcon />
                </div>
              )}

              <div className="absolute bottom-0 left-0 w-full p-4 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                <p className="text-[#00e1ff] text-xs font-bold uppercase tracking-wider mb-1">
                  {item.type === "video" ? "Vídeo" : "Resultado"}
                </p>
                <p className="text-white font-bold text-lg font-montserrat leading-tight">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedFeature && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedFeature(null)} // Fecha ao clicar no fundo preto
        >
          <button
            onClick={() => setSelectedFeature(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"
          >
            <CloseIcon />
          </button>

          <div
            className="relative max-w-5xl w-fit max-h-[90vh] flex items-center justify-center rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,225,255,0.15)] border border-white/10 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedFeature.type === "video" ? (
              <video
                src={selectedFeature.src}
                className="max-h-[85vh] w-auto max-w-full rounded-lg"
                controls
                autoPlay
              >
                Seu navegador não suporta vídeos.
              </video>
            ) : (
              <img
                src={selectedFeature.src}
                alt={selectedFeature.alt}
                className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
