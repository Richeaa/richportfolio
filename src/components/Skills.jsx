import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5, FaCss3, FaJs, FaBootstrap, FaWordpress, FaPython, FaReact, FaDocker
} from "react-icons/fa";
import {
  SiTailwindcss, SiPhp, SiJupyter, SiPostgresql, SiStreamlit, SiDjango, SiTensorflow, SiGooglecolab, SiMiro, SiLooker
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import powerbi from "../assets/SkillsAsset/1.png";
import keras from "../assets/SkillsAsset/2.png";
import lucid from "../assets/SkillsAsset/3.png";
import vite from "../assets/SkillsAsset/4.png";
import sqlserver from "../assets/SkillsAsset/5.png";
import telerik from "../assets/SkillsAsset/6.png";
import yolo from "../assets/SkillsAsset/7.png";
import opencv from "../assets/SkillsAsset/8.png";
import scikit from "../assets/SkillsAsset/9.png";
import firebase from "../assets/SkillsAsset/10.png";
import supabase from "../assets/SkillsAsset/11.webp";
import mongodb from "../assets/SkillsAsset/12.png";
import airflow from "../assets/SkillsAsset/13.png";
import flutter from "../assets/SkillsAsset/14.png";
import golang from "../assets/SkillsAsset/15.png";
import tableau from "../assets/SkillsAsset/16.png";
import excel from "../assets/SkillsAsset/17.png";
import figma from "../assets/SkillsAsset/18.png";
import jira from "../assets/SkillsAsset/19.png";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3 />, color: "text-blue-500" },
      { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
      { name: "React", icon: <FaReact />, color: "text-cyan-500" },
      { name: "Vite", icon: <img src={vite} alt="Vite" className="h-5 w-5" /> },
      { name: "Flutter", icon: <img src={flutter} alt="Flutter" className="h-5 w-5" /> },
    ],
  },
  {
    title: "Backend & CMS",
    skills: [
      { name: "PHP", icon: <SiPhp />, color: "text-indigo-500" },
      { name: "Python", icon: <FaPython />, color: "text-blue-500" },
      { name: "Django", icon: <SiDjango />, color: "text-green-600" },
      { name: "WordPress", icon: <FaWordpress />, color: "text-blue-500" },
      { name: "Docker", icon: <FaDocker />, color: "text-blue-500" },
      { name: "Firebase", icon: <img src={firebase} alt="Firebase" className="h-5 w-5" /> },
      { name: "Golang", icon: <img src={golang} alt="Golang" className="h-5 w-5" /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <GrMysql />, color: "text-blue-600" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500" },
      { name: "SQL Server", icon: <img src={sqlserver} alt="SQL Server" className="h-5 w-5" /> },
      { name: "Supabase", icon: <img src={supabase} alt="Supabase" className="h-5 w-5" /> },
      { name: "MongoDB", icon: <img src={mongodb} alt="MongoDB" className="h-5 w-5" /> },
    ],
  },
  {
    title: "Data Science & ML",
    skills: [
      { name: "Google Colab", icon: <SiGooglecolab />, color: "text-yellow-500" },
      { name: "Jupyter", icon: <SiJupyter />, color: "text-orange-500" },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "text-yellow-600" },
      { name: "Keras", icon: <img src={keras} alt="Keras" className="h-5 w-5" /> },
      { name: "Streamlit", icon: <SiStreamlit />, color: "text-red-500" },
      { name: "YOLO", icon: <img src={yolo} alt="YOLO" className="h-5 w-5" /> },
      { name: "OpenCV", icon: <img src={opencv} alt="OpenCV" className="h-5 w-5" /> },
      { name: "Scikit-Learn", icon: <img src={scikit} alt="Scikit-Learn" className="h-5 w-5" /> },
      { name: "Airflow", icon: <img src={airflow} alt="Airflow" className="h-9 w-9" /> },
    ],
  },
  {
    title: "Data Visualization",
    skills: [
      { name: "Power BI", icon: <img src={powerbi} alt="Power BI" className="h-5 w-5" /> },
      { name: "Looker Studio", icon: <SiLooker />, color: "text-sky-500" },
      { name: "Tableau", icon: <img src={tableau} alt="Tableau" className="h-5 w-5" /> },
      { name: "Excel", icon: <img src={excel} alt="Excel" className="h-5 w-5" /> },
    ],
  },
  {
    title: "QA & Testing",
    skills: [
      { name: "Telerik Test Studio", icon: <img src={telerik} alt="Telerik Test Studio" className="h-5 w-5" /> },
    ],
  },
  {
    title: "Design & Collaboration",
    skills: [
      { name: "Lucidchart", icon: <img src={lucid} alt="Lucidchart" className="h-5 w-5" /> },
      { name: "Miro", icon: <SiMiro />, color: "text-yellow-500" },
      { name: "Figma", icon: <img src={figma} alt="Figma" className="h-7 w-8" /> },
      { name: "Jira", icon: <img src={jira} alt="Jira" className="h-5 w-5" /> },
    ],
  },
];

const totalSkills = skillCategories.reduce((sum, c) => sum + c.skills.length, 0);

const Skills = () => {
  const [active, setActive] = useState(0);
  const current = skillCategories[active];

  return (
    <section
      id="skills"
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
              <span className="font-mono text-[10px] text-slate-400">04</span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400 lg:mt-2 lg:block">
                Skills
              </span>
            </div>

            <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 lg:hidden">
              Toolset
            </p>

            <div className="hidden lg:mt-32 lg:block">
              <div className="h-16 w-px bg-slate-300" />
              <p className="mt-5 [writing-mode:vertical-rl] text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                Toolset
              </p>
            </div>
          </motion.div>

          <div className="col-span-12 lg:col-span-10 lg:translate-x-[3%]">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-12 flex flex-wrap items-end justify-between gap-4"
            >
              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Tools & technologies
                </p>
                <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-slate-900">
                  Skills
                </h2>
              </div>

              <p className="font-mono text-[9px] text-slate-300">
                {totalSkills} tools · {skillCategories.length} areas
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-slate-200 pb-6">
              {skillCategories.map((cat, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={cat.title}
                    onClick={() => setActive(index)}
                    className={`
                      relative
                      pb-2
                      text-sm
                      font-medium
                      transition-colors
                      ${isActive ? "text-slate-900" : "text-slate-400 hover:text-slate-600"}
                    `}
                  >
                    {cat.title}
                    {isActive && (
                      <motion.span
                        layoutId="skills-underline"
                        className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-blue-600"
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Skill pills */}
            <div className="mt-8 min-h-[140px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-wrap gap-3"
                >
                  {current.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="
                        group
                        flex
                        items-center
                        gap-2.5
                        rounded-full
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-2.5
                        transition-colors
                        hover:border-blue-300
                      "
                    >
                      <span className={`flex h-5 w-5 items-center justify-center text-base ${skill.color || "text-slate-500"}`}>
                        {skill.icon}
                      </span>
                      <span className="text-xs font-medium text-slate-600 transition-colors group-hover:text-slate-900">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom line */}
            <div className="mt-16 flex items-center justify-between border-t border-slate-200 pt-8">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400">
                  End of skills
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

export default Skills;