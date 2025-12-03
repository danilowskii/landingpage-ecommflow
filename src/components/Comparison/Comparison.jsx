export default function Comparison() {
  return (
    <section className="relative w-full pb-10 text-white/90 font-montserrat">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-10">
          O que você{" "}
          <span className="bg-linear-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
            prefere?
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div className="flex flex-col p-8 rounded-3xl border border-red-500/20 bg-linear-to-b from-red-950/20 to-transparent relative overflow-hidden group hover:border-red-500/40 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-red-600 to-transparent opacity-50"></div>

            <h3 className="text-xl md:text-3xl font-bold text-red-400 mb-6 text-center flex items-center justify-center gap-2">
              <span className="text-red-500">✕</span> Contratar CLT
            </h3>

            <div className="space-y-5 flex flex-col">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-gray-300 font-medium">
                  Designer Gráfico
                </span>
                <span className="text-red-400 font-bold whitespace-nowrap">
                  R$ 4.000
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-gray-300 font-medium">
                  Criador de Anúncios
                </span>
                <span className="text-red-400 font-bold whitespace-nowrap">
                  R$ 3.700
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-gray-300 font-medium">
                  Estrategista de Ads
                </span>
                <span className="text-red-400 font-bold whitespace-nowrap">
                  R$ 6.000
                </span>
              </div>

              <div className="flex justify-end opacity-50 md:text-lg text-base text-right">
                Custo mensal aprox:{" "}
                <span className="line-through">R$ 13.700</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-red-500/30 text-center">
              <p className="text-red-300 font-semibold flex items-center text-sm justify-center gap-2">
                <span className="text-xl">⚠️</span> + Risco de processo
                trabalhista
              </p>
            </div>
          </div>

          <div className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/3 w-12 h-12 bg-black border border-white/20 rounded-full items-center justify-center z-10 font-bold text-gray-500">
            VS
          </div>

          <div className="flex flex-col p-8 rounded-3xl border border-[#00e1ff]/30 bg-linear-to-b from-[#00e1ff]/10 to-transparent relative overflow-hidden group hover:shadow-[0_0_30px_rgba(0,225,255,0.15)] hover:border-[#00e1ff]/50 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#00e1ff] to-transparent"></div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
              <span className="text-[#00e1ff]">✓</span> Contratar a Ecomm Flow
            </h3>

            <div className="flex-1 flex flex-col justify-center items-center text-center">
              <p className="text-lg text-gray-300 mb-2">Investimento de</p>

              <div className="relative">
                <h4 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent leading-tight py-2">
                  Bem MENOS
                </h4>

                <span className="absolute -top-1 animate-pulse -right-10 bg-[#00e1ff] text-black text-xs font-bold px-2 py-1 rounded-full transform rotate-12 shadow-lg">
                  Melhor Custo!
                </span>
              </div>

              <p className="text-xl md:text-3xl font-bold text-white mt-2">
                que <span className="text-[#00e1ff]">1/2</span> Colaborador
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#00e1ff]/30 text-center">
              <p className="text-blue-100 font-medium flex items-center justify-center text-sm gap-2">
                <span className="text-xl">🚀</span>
                <span>
                  + Equipe profissional, treinada pelo{" "}
                  <br className="sm:hidden" />
                  <span className="font-bold text-[#00e1ff]">
                    Gilmar Theobald
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
