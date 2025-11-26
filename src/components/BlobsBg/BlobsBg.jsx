export default function BlobsBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Bolha 1 - Ciano Forte (Topo Esquerda) */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-[#be8dec] rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-blob"></div>

      {/* Bolha 2 - Roxo/Azul Escuro (Topo Direita) - Com atraso na animação */}
      <div className="absolute top-0 -right-4 w-72 h-72 bg-green-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-blob animation-delay-2000"></div>

      {/* Bolha 3 - Ciano Claro (Baixo Centro) - Com mais atraso */}
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#e9e77f] rounded-full mix-blend-multiply filter blur-[60px] opacity-50 animate-blob animation-delay-4000"></div>
    </div>
  );
}
