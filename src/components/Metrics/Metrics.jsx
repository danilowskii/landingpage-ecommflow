import CountUp from "../Count";

export default function Metrics() {
  const metrics = [
    {
      content: 200,
      desc: "empresas confiam",
    },
    {
      content: 3,
      desc: "anos de mercado",
    },
    {
      content: 800,
      desc: "milhões em vendas geradas",
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap px-8 w-full justify-center gap-10">
        {metrics.map((metric, index) => (
          <div key={index}>
            <div className="w-[210px]  font-montserrat font-semibold h-[210px] flex text-2xl">
              {/* group = permite hover em todo o card */}
              <div className="group flex border transition-transform hover:bg-linear-to-br from-[#000] via-[#000]/80 to-[#000] hover:scale-110 ease-in-out duration-300 rounded-xl border-white hover:border hover:border-[#0ab9d1] p-4 flex-col mx-auto justify-between items-center">
                <CountUp
                  from={0}
                  to={metric.content}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text border-b pb-2 w-full text-center before:content-['+'] text-5xl text-white/80 transition-colors duration-300 group-hover:text-[#00e1ff]"
                />
                <p className="flex text-white text-3xl text-center p-2 transition-colors duration-300 group-hover:text-[#00e1ff]">
                  {metric.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
