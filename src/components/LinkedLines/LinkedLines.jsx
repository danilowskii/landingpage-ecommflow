import { useEffect } from "react";

export default function LinkedLines() {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("linked-lines", {
        particles: {
          number: { value: 60 },
          size: {
            value: 4,
            random: true,
          },
          color: { value: "#9c9c9c" },
          shape: { type: "edge" },
          line_linked: {
            enable: true,
            color: "#9c9c9c",
          },
          move: { enable: true, speed: 2 },
        },
      });
    } else {
      console.error("particlesJS not found in window");
    }
  }, []);

  return <div id="linked-lines" style={{ width: "100%", height: "100%" }} />;
}
