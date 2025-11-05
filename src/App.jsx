import headEcomm from "./assets/head-ecomm1.png";
import logoWhiteEcomm from "./assets/logo-white-ecomm.png";
import Button from "./components/Button";
import amazon from "./assets/amazon.png";
import shein from "./assets/shein.png";
import shopee from "./assets/shopee.png";
import magalu from "./assets/magalu.png";
import meli from "./assets/ml.png";
import LogoLoop from "./components/SlideLogos/SlideLogo";
import { MacbookScrollDemo } from "./components/MacbookScroll/macbook-scroll-demo.jsx";
import Services from "./components/Services";
import CompareDemo from "./components/ComparePhoto";
import Metrics from "./components/Metrics";
import equipe from "./assets/equipe.png";
import SendMessage from "./components/SendMessage";
import Footer from "./components/Footer/";
import Particles from "./components/Particles";
import Whastapp from "./components/Whatsapp";
import whatsappLogo from "./assets/whastapp.png";
import plus from "./assets/plus.png";
import techBackground from "./assets/tech-background.mp4";
import techBackgroundImage from "./assets/tech-background.png";

export default function main() {
  const imageLogos = [
    {
      src: meli,
      alt: "Mercado Livre",
      href: "https://www.mercadolivre.com.br/",
    },
    {
      src: shein,
      alt: "Company 2",
      href: "https://br.shein.com/",
    },
    {
      src: shopee,
      alt: "Company 3",
      href: "https://shopee.com.br/",
    },
    {
      src: amazon,
      alt: "Company 3",
      href: "https://www.amazon.com/",
    },
    {
      src: magalu,
      alt: "Company 3",
      href: "https://www.magazineluiza.com.br/",
    },
  ];

  return (
    <main className="bg-linear-to-r from-[#000] via-[#030405] to-[#000] min-h-screen">
      <div className="max-w-36 hover:scale-110 transition-all duration-300 z-100 sm:max-w-44 fixed bottom-5 right-[-25px] sm:right-0">
        <a
          target="_blank"
          href="https://wa.me/5511966052171?text=Oi%2C%20vim%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20Ecommflow...%20%23ECOMMFLOW"
        >
          <Whastapp />
        </a>
      </div>
      <section id="inicio">
        <div className="">
          <div className="inset-0 max-h-[400px] overflow-hidden opacity-60 flex mx-auto object-cover">
            <video
              poster={techBackgroundImage}
              autoPlay
              muted
              loop
              className="object-cover w-svw h-auto"
              src={techBackground}
            ></video>
            {/*<div
              style={{
                width: "100%",
                height: "50svh",
                position: "relative",
                zIndex: "-1",
              }}
            >
              <Particles
                particleColors={["#0ab9d1", "#fff"]}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              />
            </div>*/}
          </div>

          <div className="flex  flex-col text-center items-center absolute inset-0 z-20 text-white/90  text-xl">
            <img className="w-60  py-10 h-auto filter" src={logoWhiteEcomm} />
            <p className="text-3xl sm:text-5xl max-w-[95%] font-bold font-montserrat">
              Vamos colocar a{" "}
              <span className="text-[#0ab9d1]">MÃO NA MASSA</span> em seu
              marketplace
            </p>
            <p className="py-10 sm:py-20 text-xl sm:text-2xl font-semibold px-4">
              Nós cuidamos dos seus anúncios, enquanto você cuida do seu
              negócio!
            </p>
            <div className="flex flex-row gap-3 sm:gap-8 sm:flex ">
              <a
                className="text-sm sm:text-xl"
                href="https://wa.me/5511966052171?text=Oi%2C%20vim%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20Ecommflow...%20%23ECOMMFLOW"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">
                  {" "}
                  <img src={whatsappLogo} className="w-8 flex" alt="" />
                  Ir para Whatsapp
                </Button>
              </a>
              <a className="text-sm sm:text-xl" href="#services">
                <Button variant="secondary">
                  <img
                    src={plus}
                    className="w-8 group-hover:invert transition-all duration-300 flex"
                    alt=""
                  />
                  Conhecer mais
                </Button>
              </a>
            </div>

            <p className="py-10  sm:text-2xl max-w-[95%] font-semibold">
              Atendemos os{" "}
              <span className="text-[#0ab9d1]">principais marketplaces</span> do
              país!
            </p>
            <LogoLoop
              logos={imageLogos}
              speed={50}
              direction="left"
              logoHeight={68}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="black"
              ariaLabel="Technology partners"
              className="bg-linear-to-r min-h-[200px] sm:max-w-full from-black/10 via-transparent to-black/10"
            />
          </div>
        </div>
      </section>
      <section id="macbook" className="pt-48 sm:pt-20 lg:pt-0">
        <div>
          <MacbookScrollDemo />

          <p className="bg-black text-white/90 text-2xl sm:text-3xl max-w-[95%] items-center mx-auto text-inline sm:max-w-[50%] text-center py-10 font-semibold">
            Transformamos seus anúncios em{" "}
            <span className="text-[#0ab9d1] justify-center">
              resultados reais
            </span>{" "}
            com ações objetivas e inteligentes, sem complicações.{" "}
            <span className="text-[#0ab9d1] ">
              Mais vendas, mais visibilidade
            </span>{" "}
            e <span className="text-[#0ab9d1] ">crescimento previsível</span>{" "}
            para o seu marketplace.
          </p>
        </div>
      </section>
      <section id="services" className="bg-black">
        <div className="relative">
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
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              />
            </div>
          </div>
          <div className="z-50">
            <h3 className="text-white/90 gap-2 font-bold flex justify-center text-4xl sm:text-5xl py-20">
              Nossos <span className="text-[#0ab9d1]">Serviços</span>
            </h3>
            <div className="">
              <Services />
            </div>
            <p className="text-white/90 max-w-[95%] mx-auto text-center font-semibold sm:max-w-[50%] text-xl py-10 justify-center">
              Nossa abordagem estratégica garante que cada produto e anúncio
              trabalhe para{" "}
              <span className="text-[#0ab9d1] font-bold">
                gerar resultados reais.
              </span>{" "}
              <span className="text-[#0ab9d1] font-bold">
                Simplificamos decisões complexas
              </span>{" "}
              e{" "}
              <span className="text-[#0ab9d1] font-bold">
                potencializamos o desempenho
              </span>{" "}
              do seu marketplace, aumentando a confiança do cliente e o{" "}
              <span className="text-[#0ab9d1] font-bold">
                faturamento do seu negócio.
              </span>
            </p>
            <div className="flex justify-center text-2xl items-center py-8">
              <a
                target="_blank"
                href="https://wa.me/5511966052171?text=Oi%2C%20vim%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20Ecommflow...%20%23ECOMMFLOW"
              >
                <Button variant="primary">Quero garantir agora!</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
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
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>
      <section id="cases" className="relative overflow-hidden">
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
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
        </div>
        <h2 className="text-white/90 gap-2 font-bold text-center text-4xl sm:text-5xl py-20">
          Antes e depois da <span className="text-[#0ab9d1]">Ecomm Flow</span>
        </h2>
        <CompareDemo />
        <p className="text-white/90 max-w-[95%] mx-auto text-center font-semibold sm:max-w-[50%] text-xl py-10 justify-center">
          Nossos{" "}
          <span className="text-[#0ab9d1] font-bold">designs estratégicos</span>{" "}
          unem estética e performance, transformando cada anúncio em uma
          oportunidade de venda. Uma{" "}
          <span className="text-[#0ab9d1] font-bold">apresentação forte</span> e
          <span className="text-[#0ab9d1] font-bold"> coerente</span> que{" "}
          <span className="text-[#0ab9d1] font-bold">diferencia sua marca</span>{" "}
          no marketplace.
        </p>
      </section>
      <section className="relative overflow-hidden">
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
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
        </div>
        <div
          id="final"
          className="max-w-[95%] z-100 sm:max-w-[70%] mx-auto rounded-4xl mb-20 relative overflow-hidden flex flex-col bg-linear-to-br from-[#0ab9d1]/1 via-[#0ab9d1]/50 to-[#0ab9d1]/10 py-20"
        >
          <a
            target="_blank"
            className="flex pb-10 self-center"
            href="https://wa.me/5511966052171?text=Oi%2C%20vim%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20Ecommflow...%20%23ECOMMFLOW"
          >
            <img
              src={logoWhiteEcomm}
              className="hover:scale-110 transition-all duration-300 w-100"
              alt=""
            />
          </a>
          <h3 className="mx-auto pb-20 px-8 font-bold text-center text-4xl sm:text-5xl text-white/90">
            Confiança que{" "}
            <span className="text-[#0ab9d1] font-bold">gera resultados</span>
          </h3>
          <div>
            <Metrics />
          </div>
          <p className="text-white/90 max-w-[80%] mx-auto text-center font-semibold sm:max-w-[50%] text-xl pt-10 justify-center">
            Performance que entrega lucro. Mais do que promessas, <br />{" "}
            <span className="text-[#0ab9d1] font-bold">
              resultados mensuráveis e duradouros.
            </span>
          </p>
        </div>
      </section>
      <section id="contato">
        <div className="">
          <div className="relative group h-full flex items-center justify-center flex-col text-center">
            {/* Texto padrão */}
            <img
              src={equipe}
              className="w-full opacity-40 transition-all duration-300"
            />

            {/* Texto que aparece no hover */}
            <span className="absolute  inset-0 font-semibold font-montserrat flex items-center justify-center transition-all duration-300 opacity-100">
              <SendMessage />
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
