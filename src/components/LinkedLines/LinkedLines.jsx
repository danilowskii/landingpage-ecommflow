import { useEffect } from "react";

export default function LinkedLines({
  customId = "linked-lines",
  color = "#ffffff",
}) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.particlesJS) {
      // Usa o customId aqui para iniciar as partículas no lugar certo
      window.particlesJS(customId, {
        particles: {
          number: { value: 60 },
          size: {
            value: 4,
            random: true,
          },
          color: { value: color }, // Usa a cor dinâmica
          shape: { type: "circle" },
          line_linked: {
            enable: true,
            distance: 150,
            color: color, // Usa a cor dinâmica na linha
            opacity: 0.6,
            width: 1,
          },
          move: { enable: true, speed: 2 },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
          },
        },
        retina_detect: true,
      });
    }
  }, [color, customId]); // Recarrega se mudar a cor ou o ID

  return (
    <div
      id={customId} // O ID da div agora é dinâmico
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ minHeight: "100%" }}
    />
  );
}
