import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Bg = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-white">
      {/* Soft blue ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

      {/* Secondary glow */}
      <div className="pointer-events-none absolute right-[-150px] top-[25%] h-[350px] w-[350px] rounded-full bg-sky-100/30 blur-3xl" />

      {/* Subtle technical grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Data particles */}
      <Particles
        id="portfolio-particles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
          },

          detectRetina: true,

          fpsLimit: 60,

          particles: {
            number: {
              value: 35,
              density: {
                enable: true,
                area: 1200,
              },
            },

            color: {
              value: "#2563eb",
            },

            opacity: {
              value: 0.18,
              random: true,
              animation: {
                enable: true,
                speed: 0.4,
                minimumValue: 0.05,
              },
            },

            size: {
              value: {
                min: 1,
                max: 2,
              },
            },

            links: {
              enable: true,
              distance: 150,
              color: "#2563eb",
              opacity: 0.06,
              width: 1,
            },

            move: {
              enable: true,
              speed: 0.25,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
            },
          },

          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },

              resize: {
                enable: true,
              },
            },

            modes: {
              grab: {
                distance: 160,
                links: {
                  opacity: 0.12,
                },
              },
            },
          },

          responsive: [
            {
              maxWidth: 768,
              options: {
                particles: {
                  number: {
                    value: 18,
                  },
                  links: {
                    enable: false,
                  },
                },
              },
            },
          ],
        }}
        className="absolute inset-0"
      />

      {/* Very subtle white overlay */}
      <div className="pointer-events-none absolute inset-0 bg-white/20" />
    </div>
  );
};

export default Bg;