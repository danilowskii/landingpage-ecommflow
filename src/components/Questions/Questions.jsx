import Button from "../Button/Button.jsx";
import { useState, useEffect } from "react";

// Ícone de Fechar (X)
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function Questions({ onConfirmSelection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleConfirm = () => {
    if (selectedQuestion) {
      onConfirmSelection(selectedQuestion);
      setIsOpen(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const questions = [
    {
      id: 1,
      text: "Sou iniciante e quero começar do zero",
      label: (
        <>
          Sou iniciante e quero começar{" "}
          <span className="font-bold text-[#00e1ff]">do zero</span>
        </>
      ),
    },

    {
      id: 3,
      text: "Já faturo acima de R$30.000",
      label: (
        <>
          Já faturo acima de{" "}
          <span className="font-bold text-[#00e1ff]">R$30.000</span>
        </>
      ),
    },
    {
      id: 4,
      text: "Já faturo acima de R$50.000",
      label: (
        <>
          Já faturo acima de{" "}
          <span className="font-bold text-[#00e1ff]">R$50.000</span>
        </>
      ),
    },
    {
      id: 5,
      text: "Já faturo acima de R$100.000",
      label: (
        <>
          Já faturo acima de{" "}
          <span className="font-bold text-[#00e1ff]">R$100.000</span>
        </>
      ),
    },
    {
      id: 6,
      text: "Já faturo acima de R$500.000",
      label: (
        <>
          Já faturo acima de{" "}
          <span className="font-bold text-[#00e1ff]">R$500.000</span>
        </>
      ),
    },
    {
      id: 7,
      text: "Já faturo acima de R$1.000.000",
      label: (
        <>
          Já faturo acima de{" "}
          <span className="font-bold text-[#00e1ff]">R$1.000.000</span>
        </>
      ),
    },
  ];

  return (
    // Overlay Escuro (Fundo)
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      {/* Caixa do Modal */}
      <div className="relative w-full max-w-lg rounded-2xl border border-white/20 bg-[#0f172a] p-6 shadow-2xl md:p-8">
        {/* Botão Fechar (X) */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 p-1 hover:bg-white/10 rounded-full transition-all"
        >
          <CloseIcon />
        </button>

        {/* Título */}
        <div className="mb-6 text-center">
          <h2 className="text-xl font-medium text-white md:text-2xl">
            Receba a{" "}
            <span className="text-[#00e1ff] font-bold">estratégia certa</span>{" "}
            para evoluir mais rápido
          </h2>
        </div>

        {/* Lista de Perguntas */}
        <div className="flex flex-col gap-2 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
          {questions.map((q) => (
            <label
              key={q.id}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all hover:bg-white/5 ${
                selectedQuestion === q.text
                  ? "border-[#00e1ff] bg-white/5"
                  : "border-white/10"
              }`}
            >
              <input
                type="radio"
                name="popup-level"
                className="accent-[#00e1ff] w-5 h-5"
                checked={selectedQuestion === q.text}
                onChange={() => setSelectedQuestion(q.text)}
              />
              <span className="text-sm text-gray-200 md:text-base">
                {q.label}
              </span>
            </label>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <div onClick={handleConfirm} className="w-full flex sm:w-auto">
            <Button
              variant="primary"
              className="w-full px-20 flex justify-center"
            >
              Confirmar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
