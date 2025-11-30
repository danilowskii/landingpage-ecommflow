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
import Footer from "./components/Footer/";
import Particles from "./components/Particles";
import Whastapp from "./components/Whatsapp";
import whatsappLogo from "./assets/whastapp.png";
import plus from "./assets/plus.png";
import ScrollRevealFromBottom from "./components/ScrollReveal/FromBottom/";
import LinkedLines from "./components/LinkedLines/LinkedLines.jsx";
import Questions from "./components/Questions/Questions.jsx";
import { useState, useEffect, useRef } from "react";
import BeforeAfter from "./components/BeforeAfter/BeforeAfter.jsx";
import Ecosystem from "./components/Ecosystem/Ecosystem.jsx";
import space1 from "./assets/space1.png";
import space2 from "./assets/space2.png";
import space3 from "./assets/space3.png";
import space4 from "./assets/space4.png";
import space5 from "./assets/space5.png";

export default function Main() {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const images = [space1, space2, space3, space4, space5];

  const carouselRef = useRef(null);

  // Duplicando as imagens para looping sem "tranco"
  const allImages = [...images, ...images];

  useEffect(() => {
    const container = carouselRef.current;
    let x = 0;

    const animate = () => {
      x -= 0.7; // velocidade (0.5 é suave, pode ajustar)

      // reseta quando metade já passou — sem tranco
      if (Math.abs(x) >= container.scrollWidth / 2) {
        x = 0;
      }

      container.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);
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

  const mensagem = `Oi, vim do site e gostaria de informações sobre a assessoria Ecommflow. ${selectedQuestion} #ECOMMFLOW`;

  const link =
    "https://wa.me/5511966052171?text=" + encodeURIComponent(mensagem);

  return (
    <main className="bg-black">
      <div className="max-w-36 hover:scale-110 transition-all duration-300 z-100 sm:max-w-44 fixed bottom-5 right-[-25px] sm:right-0">
        <a target="_blank" href={link}>
          <Whastapp />
        </a>
      </div>
      <section id="inicio" className="md:pb-44">
        <div className="">
          <div className="relative inset-0 h-[400px] overflow-hidden flex mx-auto bg-linear-to-t  from-black to-[#010e1d]">
            <LinkedLines />
          </div>

          <div className="flex flex-col text-center items-center absolute inset-0 z-20 text-white/90  text-xl">
            <img className="w-80  py-10 h-auto filter" src={logoWhiteEcomm} />
            <p className="text-3xl leading-14 pb-10 md:pb-0 sm:text-5xl max-w-[95%] font-bold font-montserrat">
              Vamos colocar a <br />
              <span className="text-4xl md:text-7xl font-bold bg-linear-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                MÃO NA MASSA
              </span>
              <br /> no seu marketplace
            </p>
            <p className="pb-10 sm:py-20 text-xl sm:text-2xl font-semibold px-4">
              Nós cuidamos dos seus anúncios, enquanto você cuida do seu
              negócio!
            </p>

            <div className="flex flex-row gap-3 sm:gap-8 sm:flex ">
              <a
                className="text-sm sm:text-xl"
                href={link}
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

            <p className="py-10 sm:text-2xl max-w-[95%] font-semibold">
              Atendemos os{" "}
              <span className="text-[#00e1ff]">principais marketplaces</span> do
              país!
            </p>
            <LogoLoop
              logos={imageLogos}
              speed={50}
              direction="left"
              logoHeight={64}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="black"
              ariaLabel="Technology partners"
              className="bg-linear-to-r min-h-24 sm:max-w-full from-black/10 via-transparent to-black/10"
            />
          </div>
        </div>
      </section>
      <section>
        <Questions onSelect={setSelectedQuestion} />
      </section>
      <section id="macbook" className="mt-[-410px] md:mt-0 sm:pt-20 lg:pt-0">
        <div>
          <MacbookScrollDemo />

          <p className="bg-black text-white/90 text-2xl sm:text-3xl max-w-[95%] items-center mx-auto text-inline sm:max-w-[50%] text-center py-10 font-semibold">
            Transformamos seus anúncios em operações mais{" "}
            <span className="font-bold text-[#0ab9d1]">
              eficientes e estratégicas,
            </span>{" "}
            garantindo mais{" "}
            <span className="font-bold px-1 text-[#0ab9d1]">
              organização, clareza e performance
            </span>
            para o seu marketplace
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
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={false}
              />
            </div>
          </div>
          <div className="z-50 overflow-hidden">
            <ScrollRevealFromBottom>
              <h3 className="text-white/90 gap-2 font-bold flex justify-center text-4xl sm:text-5xl  py-20">
                Nossos{" "}
                <p className="font-bold bg-linear-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent pb-2">
                  Serviços
                </p>
              </h3>
              <div className="">
                <Services />
              </div>
              <p className="text-white/90 max-w-[95%] mx-auto text-center font-semibold sm:max-w-[50%] text-xl py-10 justify-center">
                Estruturamos seus anúncios e produtos para que funcionem de
                <span className="px-1 font-bold text-[#0ab9d1]">
                  forma mais clara e eficiente.
                </span>{" "}
                Simplificamos processos e{" "}
                <span className="px-1 font-bold text-[#0ab9d1]">
                  elevamos a performance do seu marketplace,
                </span>
                fortalecendo a confiança dos clientes
              </p>
              <div className="flex justify-center text-2xl items-center py-8">
                <a target="_blank" href={link}>
                  <Button variant="primary">Quero garantir agora!</Button>
                </a>
              </div>
            </ScrollRevealFromBottom>
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
            moveParticlesOnHover={false}
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
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
        </div>
        <ScrollRevealFromBottom>
          <h2 className="text-white/90 gap-2 font-bold text-center text-4xl sm:text-5xl py-10">
            Antes e depois da{" "}
            <span className="font-bold bg-linear-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent pb-2">
              Ecomm Flow
            </span>
          </h2>
          <BeforeAfter />
          <p className="text-white/90 max-w-[95%] mx-auto text-center font-semibold sm:max-w-[50%] text-xl py-10 justify-center">
            Nossos{" "}
            <span className="text-[#0ab9d1] font-bold">
              designs estratégicos
            </span>{" "}
            unem estética e performance, transformando cada anúncio em uma
            oportunidade de venda. Uma{" "}
            <span className="text-[#0ab9d1] font-bold">apresentação forte</span>{" "}
            e<span className="text-[#0ab9d1] font-bold"> coerente</span> que{" "}
            <span className="text-[#0ab9d1] font-bold">
              diferencia sua marca
            </span>{" "}
            no marketplace
          </p>
        </ScrollRevealFromBottom>
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
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
        </div>
        <ScrollRevealFromBottom>
          <div
            id="final"
            className="max-w-[95%] z-100 sm:max-w-[70%] mx-auto rounded-4xl mb-20 relative overflow-hidden flex flex-col bg-linear-to-br from-[#0ab9d1]/1 via-[#0ab9d1]/50 to-[#0ab9d1]/10 py-20"
          >
            <div>
              <Ecosystem />
            </div>
            <h2 className="text-white text-center pb-10 text-3xl font-bold">
              Confiança que{" "}
              <span className="font-bold bg-linear-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent pb-2">
                gera resultados
              </span>
            </h2>
            <div>
              <Metrics />
            </div>

            <p className="text-white/90 max-w-[80%] mx-auto text-center font-semibold sm:max-w-[50%] text-2xl pt-10 justify-center">
              Performance que gera{" "}
              <span className="text-[#0ab9d1] font-bold">impacto real.</span>{" "}
              Mais do que promessas, entregamos{" "}
              <span className="text-[#0ab9d1] font-bold">
                melhorias mensuráveis e consistentes
              </span>
            </p>
          </div>
        </ScrollRevealFromBottom>
      </section>
      <section id="ecossistema">
        <div></div>
      </section>
      <section id="contato">
        <div className="">
          <div className="relative group h-full flex items-center justify-center flex-col text-center">
            {/* Texto padrão */}
            <img
              src={equipe}
              className="w-full opacity-40 transition-all duration-300"
            />
          </div>
        </div>
      </section>
      <section id="location" className="">
        <h3 className="mx-auto py-10 px-8 font-bold text-center text-4xl sm:text-5xl  text-white/90">
          Onde Estamos{" "}
          <span className="font-bold bg-linear-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent pb-2">
            Localizados
          </span>
        </h3>
        <div className="text-white flex-col text-center pb-10 px-10 flex justify-center">
          <span className="text-lg font-bold">Edifício K1</span>
          <span className="">
            R. Conselheiro Saraiva, 207 - Santana, São Paulo - SP, 02037-020
          </span>
        </div>
        <div className="w-full overflow-hidden pb-5">
          <div
            ref={carouselRef}
            className="flex gap-6 will-change-transform"
            style={{ width: "max-content" }}
          >
            {allImages.map((src, i) => (
              <img
                key={i}
                src={src}
                className="
          object-cover rounded
          w-[80%] h-64
        "
              />
            ))}
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.937976866415!2d-46.6246819!3d-23.498743400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7e359b440bd%3A0x21583ba7ab5871ad!2sEcomm%20Flow%20%7C%20Assessoria%20para%20Marketplace!5e0!3m2!1sen!2sbr!4v1764127799839!5m2!1sen!2sbr"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-80 md:h-96"
        ></iframe>
      </section>

      <Footer />
    </main>
  );
}
