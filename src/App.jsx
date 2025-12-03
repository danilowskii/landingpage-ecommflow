import logoWhiteEcomm from "./assets/logo-white-ecomm.png";
import Button from "./components/Button";
import amazon from "./assets/amazon.png";
import shein from "./assets/shein.png";
import shopee from "./assets/shopee.png";
import magalu from "./assets/magalu.png";
import meli from "./assets/ml.png";
import LogoLoop from "./components/SlideLogos/SlideLogo";
import Services from "./components/Services";
import equipe from "./assets/timeEcomm.svg";
import Footer from "./components/Footer/";
import Particles from "./components/Particles";
import Whastapp from "./components/Whatsapp";
import plus from "./assets/plus.png";
import ScrollRevealFromBottom from "./components/ScrollReveal/FromBottom/";
import { useState } from "react";
import BeforeAfter from "./components/BeforeAfter/BeforeAfter.jsx";
import space1 from "./assets/space1.png";
import space2 from "./assets/space2.png";
import space3 from "./assets/space3.png";
import space4 from "./assets/space4.png";
import space5 from "./assets/space5.png";
import Comparison from "./components/Comparison/";
import Testimonials from "./components/Testimonials/";

export default function Main() {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const images = [space1, space2, space3, space4, space5];

  const loop = [...images, ...images, ...images, ...images];
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

  const mensagem = `Olá, vim do site e gostaria de informações sobre a assessoria Ecommflow. ${selectedQuestion} #ECOMMFLOW`;

  const link =
    "https://wa.me/5511966052171?text=" + encodeURIComponent(mensagem);

  return (
    <main className="bg-black ">
      <div className="max-w-36 hover:scale-110 transition-all duration-300 z-50 sm:max-w-44 fixed bottom-5 right-[-25px] sm:right-0">
        <a target="_blank" href={link}>
          <Whastapp />
        </a>
      </div>
      <section id="inicio" className="md:pb-20 relative">
        <div className="">
          {/*<div className="relative inset-0 h-[400px] overflow-hidden flex mx-auto bg-linear-to-t from-black to-[#010e1d]">
            <LinkedLines />
          </div>*/}

          <div className="flex px-4 md:px-10 flex-col items-center relative inset-0 z-20 w-full text-white/90 text-xl">
            <img
              className="w-40 mx-auto h-auto py-10 flex self-center"
              src={logoWhiteEcomm}
              alt="Logo Ecomm Flow"
            />
            <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-7xl mx-auto">
              <div className="flex flex-col w-full md:w-1/2 justify-center md:pr-10">
                <p className="md:text-5xl text-4xl pb-10 md:pb-0 font-bold font-montserrat text-center md:text-left">
                  Seu marketplace poderia
                  <span className="mx-2 font-bold bg-linear-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                    vender muito mais
                  </span>
                  e você não precisa fazer sozinho
                </p>
                <p className="pb-10 sm:py-10 text-2xl sm:text-2xl font-semibold px-4 md:px-0 text-center md:text-left">
                  Nós colocamos a{" "}
                  <span className=" font-bold bg-linear-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                    mão na massa
                  </span>{" "}
                  dentro da sua conta, aplicando as mesmas estratégias usadas
                  pelos{" "}
                  <span className="font-bold mr-2 bg-linear-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                    vendedores que mais faturam.
                  </span>
                  Você foca no negócio e nós cuidamos do operacional
                </p>
              </div>

              <div className="z-10 w-full md:w-1/2 flex justify-center items-center flex-col py-10 md:py-0">
                <iframe
                  src="https://www.youtube.com/embed/2zjr6BTEOrc?si=MZG7RMzaOEeM1qnO"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="rounded shadow-[0px_0px_10px_rgba(0,0,0,1)] w-full aspect-video max-w-[657px]"
                ></iframe>
                <div className="flex flex-row gap-3 sm:gap-8 justify-center  w-full max-w-7xl mx-auto mt-8">
                  <a className="text-sm sm:text-xl" href="#services">
                    <Button variant="secondary">
                      <img
                        src={plus}
                        className="w-8 group-hover:invert transition-all duration-300 flex"
                        alt="more info"
                      />
                      Conhecer mais
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full max-w-7xl mx-auto text-center">
              <p className="py-10 sm:text-2xl max-w-full font-semibold inline-block">
                Atendemos os{" "}
                <span className="font-bold bg-linear-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                  principais marketplaces
                </span>{" "}
                do país!
              </p>
            </div>

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
              className="bg-linear-to-r min-h-24 sm:max-w-full from-black/10 via-transparent to-black/10 w-full"
            />
          </div>
        </div>
      </section>

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

      <section>
        <ScrollRevealFromBottom>
          <Testimonials />
        </ScrollRevealFromBottom>
      </section>

      <section id="" className="relative">
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
        <div className="z-10">
          <ScrollRevealFromBottom>
            <Comparison />
          </ScrollRevealFromBottom>
        </div>
        <div className="flex justify-center text-2xl items-center pb-10">
          <a target="_blank" href={link}>
            <Button variant="primary">Quero garantir agora!</Button>
          </a>
        </div>
      </section>
      <section id="contato" className="z-20">
        <div className="">
          <div className="relative group h-full flex items-center justify-center flex-col text-center">
            {/* Texto padrão */}
            <img
              src={equipe}
              alt="Time Ecomm Flow"
              className="w-full transition-all duration-300"
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
        {/**Carrossel de imagens localização */}
        <div className="overflow-hidden w-full relative h-[220px] lg:h-[280px]">
          <div className="carousel-track">
            {loop.map((src, i) => (
              <img
                alt="Espaços Ecomm Flow"
                key={i}
                src={src}
                className="w-[380px] h-60 object-cover shrink-0 scale-90 lg:scale-100"
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
