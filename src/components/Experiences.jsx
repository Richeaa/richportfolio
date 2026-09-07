import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    company: "Schneider Indonesia",
    location: "Jakarta",
    role: "Finance Intern",
    period: "Mar 2026 — Present",
    current: true,
    highlights: [
      "Built VBA-powered dashboards for 3 business divisions.",
      "Automated a global tax audit tracker with Power BI.",
      "Delivered real-time sales dashboards for 10+ regions.",
    ],
  },
  {
    company: "PT Jababeka Tbk",
    location: "Cikarang, West Java",
    role: "Application Support Intern",
    period: "Aug 2025 — Feb 2026",
    current: false,
    highlights: [
      "Cut manual vendor checks by 90% using fuzzy matching.",
      "Sped up SQL queries from 12s to 4s via indexing.",
      "Built an OCR-based mobile app for driver operations.",
    ],
  },
];

const Experience = () => {
  const [active, setActive] = useState(0);
  const current = experiences[active];

  return (
    <section
      id="experience"
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
              <span className="font-mono text-[10px] text-slate-400">03</span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400 lg:mt-2 lg:block">
                Experience
              </span>
            </div>

            <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 lg:hidden">
              Track record
            </p>

            <div className="hidden lg:mt-32 lg:block">
              <div className="h-16 w-px bg-slate-300" />
              <p className="mt-5 [writing-mode:vertical-rl] text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                Track record
              </p>
            </div>
          </motion.div>

          <div className="col-span-12 lg:col-span-10 lg:translate-x-[3%]">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-14"
            >
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                Professional journey
              </p>
              <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-slate-900">
                Work Experience
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">

              <div className="lg:col-span-4">
                {experiences.map((exp, index) => {
                  const isActive = index === active;
                  return (
                    <button
                      key={exp.company}
                      onClick={() => setActive(index)}
                      className={`
                        group
                        flex
                        w-full
                        items-center
                        justify-between
                        border-t
                        border-slate-200
                        py-6
                        text-left
                        transition-colors
                        first:border-t-0
                        lg:first:border-t
                        ${isActive ? "" : "hover:bg-white/60"}
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`font-mono text-[10px] transition-colors ${
                            isActive ? "text-blue-600" : "text-slate-300"
                          }`}
                        >
                          0{index + 1}
                        </span>

                        <div>
                          <p
                            className={`text-lg font-bold tracking-tight transition-colors sm:text-xl ${
                              isActive ? "text-slate-900" : "text-slate-400 group-hover:text-slate-600"
                            }`}
                          >
                            {exp.company}
                          </p>
                          <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-400">
                            {exp.period}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`h-2 w-2 flex-shrink-0 rounded-full transition-colors ${
                          isActive ? "bg-blue-600" : "bg-slate-200"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="relative lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.company}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[10px_10px_28px_rgba(15,23,42,0.05)] sm:p-10"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          current.current ? "bg-blue-600" : "bg-slate-300"
                        }`}
                      />
                      <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        {current.location}
                      </span>
                    </div>

                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
                      {current.role}
                    </p>

                    <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                      {current.company}
                    </h3>

                    <div className="mt-8 space-y-4 border-t border-slate-100 pt-8">
                      {current.highlights.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="mt-1.5 font-mono text-[9px] text-slate-300">
                            0{i + 1}
                          </span>
                          <p className="text-sm leading-6 text-slate-600">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-16 flex items-center justify-between border-t border-slate-200 pt-8">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400">
                  End of experience
                </span>
              </div>
              <span className="font-mono text-[9px] text-slate-300">SCROLL ↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;