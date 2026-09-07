import { useState } from "react";

import {
  Bars3Icon,
  XMarkIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificate" },
    { name: "Contacts", href: "#contact" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-6 z-50 px-5">
      <div className="mx-auto max-w-3xl">
        <div
          className="
            rounded-[22px]
            border border-slate-200/70
            bg-[#f8fafc]
            px-3
            shadow-[8px_8px_18px_rgba(15,23,42,0.08),-5px_-5px_12px_rgba(255,255,255,0.9)]
          "
        >
          <div className="flex h-14 items-center justify-between">
            <div className="flex w-12 items-center justify-center">
              <div
                className="
                  flex h-7 w-7
                  items-center justify-center
                  rounded-lg
                  bg-[#eef2f7]
                  text-slate-500
                  shadow-[inset_2px_2px_4px_rgba(15,23,42,0.08),inset_-2px_-2px_4px_rgba(255,255,255,0.9)]
                "
              >
                <CodeBracketIcon className="h-4 w-4" />
              </div>
            </div>
            <div className="hidden items-center gap-1 md:flex">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="
                    group
                    relative
                    rounded-xl
                    px-4
                    py-2
                    text-[13px]
                    font-medium
                    tracking-[-0.01em]
                    text-slate-500
                    transition-all
                    duration-200
                    hover:bg-white
                    hover:text-slate-900
                    hover:shadow-[3px_3px_8px_rgba(15,23,42,0.06),-2px_-2px_6px_rgba(255,255,255,0.9)]
                  "
                >
                  {item.name}

                  <span
                    className="
                      absolute
                      bottom-1
                      left-1/2
                      h-1
                      w-1
                      -translate-x-1/2
                      rounded-full
                      bg-blue-600
                      opacity-0
                      transition-opacity
                      duration-200
                      group-hover:opacity-100
                    "
                  />
                </a>
              ))}
            </div>

            <a
              href="https://github.com/Richeaa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                hidden
                h-9 w-9
                items-center justify-center
                rounded-xl
                bg-[#eef2f7]
                text-slate-500
                shadow-[3px_3px_7px_rgba(15,23,42,0.08),-3px_-3px_7px_rgba(255,255,255,0.9)]
                transition-all
                duration-200
                hover:text-blue-600
                active:translate-y-[1px]
                active:shadow-[inset_2px_2px_5px_rgba(15,23,42,0.08)]
                md:flex
              "
            >
              <FaGithub className="h-[17px] w-[17px]" />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-xl
                bg-[#eef2f7]
                text-slate-500
                shadow-[3px_3px_7px_rgba(15,23,42,0.08),-3px_-3px_7px_rgba(255,255,255,0.9)]
                transition-all
                duration-200
                hover:text-blue-600
                active:translate-y-[1px]
                active:shadow-[inset_2px_2px_5px_rgba(15,23,42,0.08)]
                md:hidden
              "
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className="
              mt-3
              rounded-[22px]
              border border-slate-200/70
              bg-[#f8fafc]
              p-3
              shadow-[8px_8px_18px_rgba(15,23,42,0.08),-5px_-5px_12px_rgba(255,255,255,0.9)]
              md:hidden
            "
          >
            <div className="space-y-1">

              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    flex items-center
                    rounded-xl
                    px-4 py-3
                    text-sm
                    font-medium
                    text-slate-500
                    transition-all
                    duration-200
                    hover:bg-white
                    hover:text-blue-600
                    hover:shadow-[3px_3px_8px_rgba(15,23,42,0.05)]
                  "
                >
                  {item.name}
                </a>
              ))}

              <div className="mt-2 border-t border-slate-200/60 pt-2">
                <a
                  href="https://github.com/Richeaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="
                    flex items-center gap-2
                    rounded-xl
                    px-4 py-3
                    text-sm
                    font-medium
                    text-slate-500
                    transition-all
                    duration-200
                    hover:bg-white
                    hover:text-blue-600
                  "
                >
                  <FaGithub className="h-4 w-4" />
                  GitHub
                </a>
              </div>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;