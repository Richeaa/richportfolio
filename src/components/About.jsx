import { motion } from "framer-motion";
import ProfileLogo from "../assets/AboutAsset/Profil.png";

const highlights = [
  { number: "01", stat: "15+", label: "Projects", desc: "Web & data-driven builds" },
  { number: "02", stat: "10+", label: "Volunteer", desc: "Community & campus programs" },
  { number: "03", stat: "8+", label: "Certificates", desc: "Data & software credentials" },
  { number: "04", stat: "3.91", label: "GPA", desc: "Out of 4.00 scale" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f7f8fa] px-5 py-24 lg:py-32"
    >
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1750px]
          px-2
          lg:px-5
        "
      >
        <div className="grid w-full grid-cols-12 gap-4 lg:gap-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="
              col-span-12
              flex
              items-center
              justify-between
              border-b
              border-slate-200
              pb-3
              sm:pb-4
              lg:col-span-1
              lg:block
              lg:items-start
              lg:border-b-0
              lg:border-r
              lg:pb-0
              lg:pr-4
            "
          >
            <div className="flex items-center gap-3 lg:block lg:gap-0">
              <span className="font-mono text-[10px] text-slate-400">
                02
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400 lg:mt-2 lg:block">
                Identity
              </span>
            </div>

            <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 lg:hidden">
              Personal profile
            </p>

            <div className="hidden lg:mt-32 lg:block">
              <div className="h-16 w-px bg-slate-300" />

              <p
                className="
                  mt-5
                  [writing-mode:vertical-rl]
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-slate-400
                "
              >
                Personal profile
              </p>
            </div>
          </motion.div>

          <div className="col-span-12 lg:col-span-10 lg:translate-x-[3%]">

            <div className="grid grid-cols-12 gap-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 col-span-12 lg:order-1 lg:col-span-7"
            >
              <div className="mt-10 lg:mt-0">
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Information Systems × Data Science
                </p>

                <h2
                  className="
                    text-[clamp(3.2rem,8vw,8.5rem)]
                    lg:text-[clamp(3.5rem,4.6vw,6rem)]
                    font-black
                    leading-[0.82]
                    tracking-[-0.07em]
                    text-slate-900
                  "
                >
                  RICH
                  <br />
                  <span className="ml-[12%] text-blue-600">EDRICK</span>
                  <br />
                  <span className="ml-[6%] sm:ml-[24%] lg:ml-[8%] text-slate-500">
                    ANTHONIOS
                  </span>
                </h2>
              </div>

              <div className="mt-12 max-w-2xl lg:mt-16">
                <p className="text-[clamp(1.8rem,3.2vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.045em] text-slate-800">
                  I work where{" "}
                  <span className="text-blue-600">data</span>{" "}
                  meets{" "}
                  <span className="text-slate-400">business</span>{" "}
                  and digital systems.
                </p>

                <div className="mt-8 flex max-w-xl gap-5 border-l border-slate-300 pl-5">
                  <p className="text-sm leading-7 text-slate-500">
                    Majoring in Information Systems allows me
                    to approach problems from both the technical and
                    business side — from building digital systems
                    to analyzing the data behind them.
                  </p>
                </div>
              </div>
            </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative order-1 col-span-12 lg:order-2 lg:col-span-5 lg:mt-0 lg:self-start"
              >
                <div className="relative mx-auto w-full max-w-[470px] lg:ml-auto">
                  <div className="absolute -left-5 -top-5 h-16 w-16 border-l border-t border-blue-600" />

                  <div className="overflow-hidden border border-slate-200 bg-white p-3">
                    <img
                      src={ProfileLogo}
                      alt="Rich Edrick Anthonios"
                      className="h-auto w-full object-cover grayscale-[15%]"
                    />
                  </div>

                  <div className="absolute -bottom-5 -right-5 h-16 w-16 border-b border-r border-slate-300" />

                  <div className="mt-5 flex items-start justify-between border-t border-slate-200 pt-4">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400">
                        Status
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-700">
                        Fresh Graduate 2026
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400">
                        Focus
                      </p>
                      <p className="mt-1 text-xs font-semibold text-blue-600">
                        Data & Systems
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mt-24 origin-left border-t border-slate-200"
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-8"
            >
              <div className="mb-10 flex items-center justify-between">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Highlights
                </p>

                <p className="font-mono text-[9px] text-slate-300">
                  04 / 04
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    className="
                      group
                      border-t
                      border-slate-200
                      px-0
                      py-7
                      md:px-5
                      lg:min-h-[190px]
                      lg:border-l
                      lg:first:border-l-0
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-slate-300">
                        {item.number}
                      </span>

                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors duration-300 group-hover:bg-blue-600" />
                    </div>

                    <p className="mt-8 text-4xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                      {item.stat}
                    </p>

                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                      {item.label}
                    </p>

                    <p className="mt-2 text-xs text-slate-400">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="mt-16 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400">
                  End of identity
                </span>
              </div>

              <span className="font-mono text-[9px] text-slate-300">
                SCROLL ↓
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;