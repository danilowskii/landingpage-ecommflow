import cafeBranco from "../../assets/cafeBranco.png";
import cafeAmb from "../../assets/cafeAmb.png";
import desenBranco from "../../assets/desenBranco.png";
import desenAmb from "../../assets/desenAmb.jpeg";
import ferroBranco from "../../assets/ferroBranco.png";
import ferroAmb from "../../assets/ferroAmb.png";
import salaoBranco from "../../assets/salaoBranco.png";
import salaoAmb from "../../assets/salaoAmb.png";
import trangBranco from "../../assets/trangBranco.png";
import trangAmb from "../../assets/trangAmb.png";
import { useEffect, useState, useRef } from "react";

export default function BeforeAfter() {
  const imagesData = [
    cafeBranco,
    cafeAmb,
    desenBranco,
    desenAmb,
    ferroBranco,
    ferroAmb,
    salaoBranco,
    salaoAmb,
    trangBranco,
    trangAmb,
  ];

  const groupedImages = [];
  for (let i = 0; i < imagesData.length; i += 2) {
    groupedImages.push(imagesData.slice(i, i + 2));
  }

  const extendedGroups = [...groupedImages, groupedImages[0]];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === extendedGroups.length - 1) return;
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, [currentIndex, extendedGroups.length]);

  useEffect(() => {
    if (currentIndex === extendedGroups.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, extendedGroups.length]);

  return (
    <div className="w-full max-w-4xl mx-auto ">
      <div className="overflow-hidden relative rounded-lg shadow-lg ">
        <div
          className={`flex h-full ${
            isTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {extendedGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="w-full flex shrink-0 p-4 box-border"
            >
              <div className="flex flex-col md:flex-row gap-4 h-full  w-full">
                {group.map((imgSrc, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="flex-1 flex justify-center items-center flex-col"
                  >
                    <span className="text-center font-bold text-[#0ab9d1] mb-3 uppercase tracking-wider text-lg ">
                      {imgIndex === 0 ? "Antes" : "Depois"}
                    </span>

                    <div className="h-auto flex justify-center items-center relative group w-full">
                      <img
                        src={imgSrc}
                        alt={`Slide ${groupIndex}-${imgIndex}`}
                        className="w-3/4  md:w-full md:h-full object-cover rounded-md hover:scale-105 transition-transform duration-300 shadow-sm"
                      />
                    </div>
                  </div>
                ))}

                {group.length === 1 && (
                  <div className="flex-1 flex flex-col">
                    <span className="mb-2 block h-5"></span>{" "}
                    {/* Espaço vazio para alinhar */}
                    <div className="h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
                      Espaço Vazio
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {groupedImages.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-2 rounded-full transition-all ${
                currentIndex === idx ||
                (currentIndex === extendedGroups.length - 1 && idx === 0)
                  ? "bg-gray-800 w-4"
                  : "bg-gray-400/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
