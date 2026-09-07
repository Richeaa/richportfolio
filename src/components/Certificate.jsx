import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Img1 from '../assets/CertificateAsset/1.jpg'
import Img2 from '../assets/CertificateAsset/2.jpg'
import Img3 from '../assets/CertificateAsset/3.jpg'
import Img4 from '../assets/CertificateAsset/4.jpg'
import Img5 from '../assets/CertificateAsset/5.png'
import Img6 from '../assets/CertificateAsset/6.jpg'
import { CiLinkedin } from "react-icons/ci";
import { FaTimes, FaExpand, FaThumbtack } from "react-icons/fa";

const ROTATIONS = [-3, 2, -2, 3, -1.5, 2.5];

const certificates = [
  { id: 1, img: Img1, alt: "Dicoding Certificate", title: "Dicoding Certificate", issuer: "Dicoding Indonesia" },
  { id: 2, img: Img4, alt: "Event Certificate", title: "Event Certificate", issuer: "Event Organizer" },
  { id: 3, img: Img2, alt: "Dicoding Certificate", title: "Dicoding Certificate", issuer: "Dicoding Indonesia" },
  { id: 4, img: Img5, alt: "Event Certificate", title: "Event Certificate", issuer: "Event Organizer" },
  { id: 5, img: Img3, alt: "Event Certificate", title: "Event Certificate", issuer: "Event Organizer" },
  { id: 6, img: Img6, alt: "Achievement", title: "Achievement", issuer: "Institution" },
];

const Certificate = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
        id="certificate"
        className="relative overflow-hidden bg-[#f7f8fa] px-5 py-24 lg:py-32"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(#e2e5ea 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

      <div className="relative mx-auto w-full max-w-[1750px] px-2 lg:px-5">
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
              border-slate-300
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
              <span className="font-mono text-[10px] text-slate-400">06</span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400 lg:mt-2 lg:block">
                Certificates
              </span>
            </div>

            <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 lg:hidden">
              Achievements
            </p>

            <div className="hidden lg:mt-32 lg:block">
              <div className="h-16 w-px bg-slate-300" />
              <p className="mt-5 [writing-mode:vertical-rl] text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                Achievements
              </p>
            </div>
          </motion.div>

          <div className="col-span-12 lg:col-span-10 lg:translate-x-[3%]">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-16 flex flex-wrap items-end justify-between gap-4"
            >
              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                  My achievements
                </p>
                <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-slate-900">
                  Certificates
                </h2>
              </div>

              <p className="font-mono text-[9px] text-slate-400">
                {String(certificates.length).padStart(2, "0")} FRAMED
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-16 sm:grid-cols-3 md:gap-x-10 lg:grid-cols-3 lg:gap-y-20">
              {certificates.map((cert, index) => {
                const rotation = ROTATIONS[index % ROTATIONS.length];
                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    style={{ rotate: rotation }}
                    whileHover={{ rotate: 0, y: -8, scale: 1.04 }}
                    className="group relative cursor-pointer"
                    onClick={() => setSelected(cert)}
                  >
                    <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 text-slate-400 transition-colors duration-300 group-hover:text-blue-500">
                      <FaThumbtack className="text-base drop-shadow-sm" />
                    </div>

                    <div
                      className="
                        relative border-[10px] border-white bg-white
                        shadow-[0_10px_25px_-8px_rgba(30,41,59,0.35)]
                        transition-shadow duration-300
                        group-hover:shadow-[0_20px_40px_-10px_rgba(30,41,59,0.45)]
                      "
                    >
                      <div className="relative overflow-hidden bg-slate-100">
                        <img
                          src={cert.img}
                          loading="lazy"
                          alt={cert.alt}
                          className="aspect-[4/3] w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 opacity-0 transition-all duration-300 group-hover:bg-slate-900/30 group-hover:opacity-100">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700">
                            <FaExpand className="text-sm" />
                          </div>
                        </div>
                      </div>

                      <div className="px-1 pb-1.5 pt-3 text-center">
                        <p className="truncate text-[9px] uppercase tracking-[0.15em] text-blue-600">
                          {cert.issuer}
                        </p>
                        <p className="mt-0.5 truncate text-xs font-bold text-slate-800">
                          {cert.title}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-20 flex items-center justify-between border-t border-slate-300 pt-8"
            >
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400">
                  End of certificates
                </span>
              </div>

              <a
                href="https://www.linkedin.com/in/richea/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50"
              >
                <CiLinkedin className="text-lg text-blue-600" />
                More on LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-slate-200 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selected.img}
                  alt={selected.alt}
                  className="w-full object-contain bg-slate-50"
                />

                <button
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-600 backdrop-blur-sm transition-colors hover:bg-white hover:text-slate-900"
                  onClick={() => setSelected(null)}
                >
                  <FaTimes className="text-sm" />
                </button>

                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-blue-600 backdrop-blur-sm">
                  {selected.issuer}
                </span>
              </div>

              <div className="p-8">
                <p className="font-mono text-[10px] text-slate-300">
                  {String(selected.id).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                  {selected.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificate;