import Wavify from 'react-wavify';
import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub, FaInstagram, FaLinkedin, FaArrowUp } from "react-icons/fa";

const socials = [
  { icon: FaWhatsapp, url: "https://wa.me/6281522555130", label: "WhatsApp" },
  { icon: FaInstagram, url: "https://instagram.com/rich.ea", label: "Instagram" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/richea/", label: "LinkedIn" },
  { icon: FaGithub, url: "https://github.com/Richeaa", label: "GitHub" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-slate-900 pb-10 pt-32 text-white">
      <div className="absolute top-0 left-0 w-full -translate-y-[calc(100%-1px)]">
        <Wavify
          fill="#0f172a"
          paused={false}
          options={{ height: 30, amplitude: 24, speed: 0.15, points: 4 }}
          style={{ width: "100%", opacity: 0.6 }}
        />
        <Wavify
          fill="#0f172a"
          paused={false}
          options={{ height: 20, amplitude: 30, speed: 0.2, points: 5 }}
          style={{ width: "100%", marginTop: -20 }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1750px] px-7 lg:px-10">
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
              border-white/10
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
              <span className="font-mono text-[10px] text-slate-500">08</span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-500 lg:mt-2 lg:block">
                END
              </span>
            </div>

            <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500 lg:hidden">
              Let's connect
            </p>

            <div className="hidden lg:mt-32 lg:block">
              <div className="h-16 w-px bg-white/10" />
              <p className="mt-5 [writing-mode:vertical-rl] text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                Let's connect
              </p>
            </div>
          </motion.div>

          <div className="col-span-12 flex flex-col items-center py-14 text-center lg:col-span-10 lg:translate-x-[3%] lg:py-20">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400"
            >
              Get in touch
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[0.95] tracking-[-0.04em] text-white"
            >
              Let's Connect
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 max-w-md px-3 text-sm leading-6 text-slate-400 md:text-base"
            >
              Interested in working together or have any questions? Feel free
              to reach out!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-9 flex gap-3"
            >
              {socials.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    group flex h-11 w-11 items-center justify-center rounded-full
                    border border-white/10 bg-white/5 text-slate-300
                    transition-all duration-300
                    hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300
                    md:h-12 md:w-12
                  "
                >
                  <Icon className="text-lg md:text-xl" />
                </a>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={scrollToTop}
              className="mt-10 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-blue-300"
            >
              Back to top
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10">
                <FaArrowUp className="text-[9px]" />
              </span>
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 pb-2 sm:flex-row"
        >
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Richeaa. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="text-[9px] uppercase tracking-[0.25em] text-slate-600">
             Sayonara
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;