import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import TrueFocus from '../assets/Attribute/TrueFocus'
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_od2n3h8",
        "template_6o3jzes",
        e.target,
        "NGfC3vbvhAgXCxJHO"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your message has been sent successfully.",
            confirmButtonColor: "#2563eb",
          });
          e.target.reset();
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send message. Please try again!",
            confirmButtonColor: "#d33",
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f7f8fa] px-5 py-24 lg:py-32"
    >
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
              <span className="font-mono text-[10px] text-slate-400">07</span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400 lg:mt-2 lg:block">
                Contact
              </span>
            </div>

            <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 lg:hidden">
              Get in touch
            </p>

            <div className="hidden lg:mt-32 lg:block">
              <div className="h-16 w-px bg-slate-300" />
              <p className="mt-5 [writing-mode:vertical-rl] text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                Get in touch
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
                Get in touch
              </p>
              <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-slate-900">
                Contact Me
              </h2>
            </motion.div>

            <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex w-full flex-col justify-center lg:w-1/3"
              >
                <TrueFocus
                  sentence="Let's Work Together!"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="#2563eb"
                  glowColor="rgba(37, 99, 235, 0.6)"
                  animationDuration={1.5}
                  pauseBetweenAnimations={1}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full lg:w-2/3"
              >
                <form
                  onSubmit={sendEmail}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
                >
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                      required
                    />
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                      required
                    />
                  </div>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="mt-4 w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    required
                  />

                  <textarea
                    name="message"
                    placeholder="Message"
                    className="mt-4 h-32 w-full resize-none rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    required
                  ></textarea>

                  <button
                    type="submit"
                    disabled={isSending}
                    className={`
                      group mt-6 inline-flex w-full items-center justify-center gap-2.5
                      self-end rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white
                      transition-all hover:-translate-y-0.5 md:w-auto
                      ${isSending ? "cursor-not-allowed opacity-50 hover:translate-y-0" : ""}
                    `}
                  >
                    {isSending ? "Sending..." : "Send Message"}
                    {!isSending && (
                      <FaPaperPlane className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-16 flex items-center justify-between border-t border-slate-200 pt-8"
            >
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400">
                  End of page
                </span>
              </div>
              <span className="font-mono text-[9px] text-slate-300">
                THANK YOU
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;