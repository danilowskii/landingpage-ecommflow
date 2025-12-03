import Particles from "../Particles";
import Button from "../Button";
import { useState } from "react";

export default function Questions({ onSelect }) {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const message = selectedQuestion
    ? `Oi, vim do site e gostaria de informações sobre a assessoria Ecommflow... ${selectedQuestion} #ECOMMFLOW`
    : "Oi, vim do site e gostaria de informações sobre a assessoria Ecommflow... #ECOMMFLOW";

  const whatsappLink = `https://wa.me/5511966052171?text=${encodeURIComponent(
    message
  )}`;

  const questions = [
    {
      id: 1,
      text: "Sou iniciante e quero começar do zero",
      question: (
        <>
          Sou iniciante e quero começar{" "}
          <span className="font-bold  text-[#00e1ff]">do zero</span>
        </>
      ),
    },
    {
      id: 2,
      text: "Sou iniciante e tenho mais de R$30.000 para investir",
      question: (
        <>
          Sou iniciante e tenho mais de{" "}
          <span className="font-bold  text-[#00e1ff]">R$30.000</span> para
          investir
        </>
      ),
    },
    {
      id: 3,
      text: "Já faturo acima de R$30.000",
      question: (
        <>
          Já faturo acima de{" "}
          <span className="font-bold  text-[#00e1ff]">R$30.000</span>
        </>
      ),
    },
    {
      id: 4,
      text: "Já faturo acima de R$50.000",
      question: (
        <>
          Já faturo acima de{" "}
          <span className="font-bold  text-[#00e1ff]">R$50.000</span>
        </>
      ),
    },
    {
      id: 5,
      text: "Já faturo acima de R$100.000",
      question: (
        <>
          Já faturo acima de{" "}
          <span className="font-bold  text-[#00e1ff]">R$100.000</span>
        </>
      ),
    },
    {
      id: 6,
      text: "Já faturo acima de R$500.000",
      question: (
        <>
          Já faturo acima de{" "}
          <span className="font-bold  text-[#00e1ff]">R$500.000</span>
        </>
      ),
    },
    {
      id: 7,
      text: "Já faturo acima de R$1.000.000",
      question: (
        <>
          Já faturo acima de{" "}
          <span className="font-bold  text-[#00e1ff]">R$1.000.000</span>
        </>
      ),
    },
  ];

  return (
    <div
      className="relative z-0 inset-0  
    "
    >
      <div className="absolute inset-0 z-0 opacity-40 flex mx-auto object-cover">
        <div
          style={{
            width: "100%",
            height: "100svh",
            position: "relative",
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
      </div>
      <div className="text-white max-w-[95%] border-white/20 gap-8 border mx-auto rounded-xl relative text-xl justify-center items-center overflow-hidden py-10 px-10 flex flex-col gap-5 md:flex-row mt-[465px] md:mt-[400px]">
        <div className="-z-10 absolute right-1/4 top-1/3">
          <div className="w-96 h-52 bg-sky-700/90 absolute bottom-0 right-2/3 top-0 filter z-0 blur-[150px] rounded-full"></div>

          <div className="w-96 h-52 bg-blue-900/90 absolute right-1/2 top-0 filter z-0 blur-[150px] rounded-full"></div>
          <div className="w-96 h-52 bg-white/60 absolute left-1/4 top-1/4 filter z-0 blur-[150px] rounded-full"></div>
        </div>
        <div className="w-96 h-52 bg-sky-700/50 absolute top-0 left-0 filter z-0 blur-[150px] rounded-full"></div>
        <div className="w-96 h-52 bg-white/70 absolute bottom-1/4 left-1/12 filter z-0 blur-[150px] rounded-full"></div>

        <div className="flex flex-col z-10">
          <div className="pb-5 ">
            <h1 className="text-2xl font-medium">
              Receba a{" "}
              <span className="text-[#00e1ff] font-bold">estratégia certa</span>{" "}
              para evoluir mais rápido
            </h1>
          </div>
          {questions.map((question) => (
            <div
              key={question.id}
              className="flex flex-row w-fit py-2 transition-transform ease-out items-center cursor-pointer "
            >
              <div className="hover:translate-x-2 transition-all">
                <input
                  name="level"
                  type="radio"
                  id={question.id.toString()}
                  onClick={() => {
                    onSelect(question.text), setSelectedQuestion(question.text);
                  }}
                  className="cursor-pointer "
                />

                <label
                  htmlFor={question.id.toString()}
                  className="ml-2 text-base cursor-pointer"
                >
                  {question.question}
                </label>
              </div>
            </div>
          ))}
          <div className="pt-5 text-nowrap flex justify-center md:justify-start items-start">
            <a
              className=""
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Falar com um especialista</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
