import React from "react";
// Importa o componente principal do mesmo diretório
import { MacbookScroll } from "./Mackbook";

// Peerlist logo - Este componente DEVE estar neste arquivo se for usado aqui.
const Badge = ({ className }) => {
  // Removendo a tipagem se for JS
  return (
    <svg
      // ... todo o código SVG ...
      className={className}
    >
      {/* ... paths do SVG ... */}
    </svg>
  );
};

export function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden ajuste-s8 mt-[-200px] sm:mt-10 bg-white dark:bg-[black]">
      <MacbookScroll
        badge={
          <a href="https://peerlist.io/manuarora">
            <Badge className="h-10 w-10 -rotate-12 transform" />
          </a>
        }
        src={`/linear.png`}
        showGradient={false}
      />
    </div>
  );
}
