import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animation from "../assets/Animation.json";
import CV from "../assets/CV/RichEdrickAnthonios_CurriculumVitae.pdf";
import {
  ArrowUpRightIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f8fa] px-5">
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.35]
          [background-image:linear-gradient(#dbe2ea_1px,transparent_1px),linear-gradient(90deg,#dbe2ea_1px,transparent_1px)]
          [background-size:80px_80px]
          [mask-image:linear-gradient(to_bottom,black_0%,transparent_85%)]
        "
      />
      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1750px]
          items-center
          px-2
          pt-16
          lg:pt-32
          lg:px-5
        "
      >
        <div className="grid w-full grid-cols-12 gap-4 lg:gap-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
            <div className="flex items-center gap-2 lg:block lg:gap-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] hidden lg:block text-slate-400">
                Portfolio
              </p>

              <p className="text-xs font-medium text-slate-500  hidden lg:block lg:mt-2">
                2026
              </p>
            </div>

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
                Information Systems
              </p>
            </div>
          </motion.div>

          <div
            className="
              relative
              col-span-12
              flex
              flex-col
              gap-8
              sm:block
              sm:min-h-[560px]
              md:min-h-[640px]
              lg:col-span-10
              lg:min-h-[760px]
              lg:translate-x-[3%]
            "
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative sm:absolute sm:left-0 sm:top-0"
            >
              <p className="text-sm font-semibold tracking-tight text-slate-800">
                Rich Edrick Anthonios
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

                <span className="text-[9px] uppercase tracking-[0.18em] text-slate-400">
                  Jakarta · Indonesia
                </span>
              </div>
            </motion.div>

            <div className="relative sm:absolute sm:left-0 sm:top-[75px] w-full select-none">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="
                  md:ml-[9%]
                  text-[clamp(5.5rem,14vw,13.5rem)]
                  font-black
                  leading-[0.76]
                  tracking-[-0.09em]
                  text-slate-900
                "
              >
                WEB
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="
                  md:ml-[29%]
                  ml-[20%]
                  text-[clamp(5.5rem,14vw,13.5rem)]
                  font-black
                  leading-[0.76]
                  tracking-[-0.09em]
                  text-blue-600
                "
              >
                /DATA
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="
                  md:ml-[48%]
                  ml-[40%]
                  text-[clamp(5.5rem,14vw,13.5rem)]
                  font-black
                  leading-[0.76]
                  tracking-[-0.09em]
                  text-slate-500
                "
              >
                /AI
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                sm:absolute
                sm:left-[1%]
                sm:bottom-16
                md:bottom-32
                lg:bottom-24
                z-20
                w-[280px]
                max-w-[85vw]
                rounded-[26px]
                border
                border-slate-200
                bg-[#f7f8fa]
                p-5
                shadow-[12px_12px_30px_rgba(15,23,42,0.08),-8px_-8px_22px_rgba(255,255,255,0.9)]
                sm:w-[330px]
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
                    Performance
                  </p>

                  <p className="mt-1 text-xl font-bold tracking-tight text-slate-800">
                    3.91 / 4.00
                  </p>
                </div>

                <div className="rounded-lg bg-blue-50 px-2.5 py-1.5 text-[9px] font-bold text-blue-600">
                  GPA
                </div>
              </div>

              <div className="relative mt-5 h-24">
                <svg
                  viewBox="0 0 260 80"
                  className="h-full w-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <path
                    d="
                      M0 62
                      C20 58, 24 48, 42 52
                      S65 62, 80 45
                      S105 50, 120 38
                      S142 42, 157 28
                      S178 37, 194 25
                      S215 32, 230 15
                      S248 22, 260 8
                    "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-blue-600"
                  />
                </svg>

                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[8px] text-slate-300">
                  <span>JAN</span>
                  <span>MAR</span>
                  <span>JUN</span>
                  <span>SEP</span>
                  <span>DEC</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                bottom-4
                right-[2%]
                z-10
              "
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Lottie
                  animationData={animation}
                  loop
                  className="
                    hidden
                    md:block
                    h-[300px]
                    w-[260px]
                    lg:h-[390px]
                    lg:w-[340px]
                  "
                />
              </motion.div>
            </motion.div>

            <div className="relative sm:absolute sm:bottom-2 sm:left-0 flex items-center gap-3">
              <span className="font-mono text-[10px] text-slate-400">
                01
              </span>

              <div className="h-px w-12 bg-slate-300" />

              <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400">
                Overview
              </span>
            </div>
          </div>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="
              col-span-12
              flex
              items-center
              justify-between
              border-t
              border-slate-200
              pt-5
              lg:col-span-1
              lg:flex-col
              lg:items-end
              lg:border-l
              lg:border-t-0
              lg:pl-4
              lg:pt-0
            "
          >
            <div className="text-right">
              <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400">
                Based in
              </p>

              <p className="mt-1 text-xs font-semibold text-slate-700">
                Indonesia
              </p>
            </div>

            <div
              className="
                flex
                flex-col
                items-center
                gap-2
                lg:mt-auto
                lg:translate-x-12
                lg:flex-row
                lg:items-center
              "
            >
              <div className="flex gap-2">
                <a
                  href={CV}
                  download="RichEdrickAnthonios_CurriculumVitae.pdf"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-3
                    py-2.5
                    text-[10px]
                    font-semibold
                    text-slate-600
                    shadow-[4px_4px_10px_rgba(15,23,42,0.06)]
                    transition-all
                    hover:-translate-y-0.5
                    hover:text-blue-600
                  "
                >
                  <ArrowDownTrayIcon className="h-3.5 w-3.5" />
                  CV
                </a>

                <a
                  href="#projects"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-slate-900
                    px-3
                    py-2.5
                    text-[10px]
                    font-semibold
                    text-white
                    shadow-[4px_4px_10px_rgba(15,23,42,0.12)]
                    transition-all
                    hover:-translate-y-0.5
                  "
                >
                  Work

                  <ArrowUpRightIcon
                    className="
                      h-3.5
                      w-3.5
                      transition-transform
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;