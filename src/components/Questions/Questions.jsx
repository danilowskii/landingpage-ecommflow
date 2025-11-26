import { useState } from "react";
import CustomShapeDivider from "../ShapeDivider";
import Button from "../Button";
import bgQuestions from "../../assets/bg-questions.jpg";
import { Background } from "@tsparticles/engine";

export default function Questions() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const questions = [
    {
      id: 1,
      question: (
        <>
          Sou iniciante e quero começar{" "}
          <span className="font-bold  text-[#00e1ff]">do zero</span>
        </>
      ),
    },
    {
      id: 2,
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
      question: (
        <>
          Já faturo acima de{" "}
          <span className="font-bold  text-[#00e1ff]">R$30.000</span>
        </>
      ),
    },
    {
      id: 4,
      question: (
        <>
          Já faturo acima de{" "}
          <span className="font-bold  text-[#00e1ff]">R$50.000</span>
        </>
      ),
    },
    {
      id: 5,
      question: (
        <>
          Já faturo acima de{" "}
          <span className="font-bold  text-[#00e1ff]">R$100.000</span>
        </>
      ),
    },
    {
      id: 6,
      question: (
        <>
          Já faturo acima de{" "}
          <span className="font-bold  text-[#00e1ff]">R$500.000</span>
        </>
      ),
    },
    {
      id: 7,
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
      <div className="absolute  top-0 left-0 w-full z-20 pointer-events-none">
        <CustomShapeDivider />
      </div>

      <div className="text-white relative text-xl justify-center items-center overflow-hidden py-32 px-10 flex flex-col gap-15 md:flex-row mt-[455px]">
        <div className="-z-10 absolute right-1/4 top-1/3">
          <div className="w-96 h-52 bg-sky-700/90 absolute bottom-0 right-2/3 top-0 filter z-0 blur-[150px] rounded-full"></div>
          <div className="w-96 h-52 bg-blue-900/90 absolute right-1/2 top-0 filter z-0 blur-[150px] rounded-full"></div>
          <div className="w-96 h-52 bg-white/60 absolute left-1/4 top-1/4 filter z-0 blur-[150px] rounded-full"></div>
        </div>
        <div className="absolute inset-0 w-full  h-full z-0 opacity-10">
          <img
            src={bgQuestions}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="z-10">
          <iframe
            src="https://www.youtube.com/embed/2zjr6BTEOrc?si=MZG7RMzaOEeM1qnO"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="rounded border-sky-400 border-2 shadow-[0px_0px_10px_rgba(0,0,0,1)] w-[380px] h-[215px] md:w-[560px] md:h-[315px] xl:w-[637px] xl:h-[360px]"
          ></iframe>
        </div>
        <div className="flex flex-col z-10 border-l border-sky-500">
          <div className=" pb-10 ">
            <h1 className="text-3xl ml-4 font-medium">
              Vamos{" "}
              <span className="text-[#00e1ff] font-bold">
                personalizar a sua jornada.
              </span>{" "}
              <br />
              Qual o seu{" "}
              <span className="text-[#00e1ff] font-bold">nível atual?</span>
            </h1>
          </div>
          {questions.map((question) => (
            <div
              key={question.id}
              className="flex flex-row ml-4 w-fit py-2  transition-transform ease-out items-center cursor-pointer "
            >
              <div className="hover:translate-x-2 ml-2 transition-all">
                <input
                  type="radio"
                  id={question.id.toString()}
                  checked={selectedQuestion === question.id}
                  onChange={() => {
                    setSelectedQuestion(question.id);

                    console.log("Cliquei na: ", question.question);
                  }}
                  className="cursor-pointer "
                />

                <label
                  htmlFor={question.id.toString()}
                  className="ml-2 text-xl cursor-pointer"
                >
                  {question.question}
                </label>
              </div>
            </div>
          ))}
          <div className="pt-10 ml-4 text-nowrap flex justify-start items-start">
            <Button variant="primary">Falar com o time de especialistas</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
