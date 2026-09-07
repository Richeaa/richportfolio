import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from '../assets/ProjectAsset/1.png';
import Image2 from '../assets/ProjectAsset/2.png';
import Image3 from '../assets/ProjectAsset/3.png';
import Image4 from '../assets/ProjectAsset/4.jpg';
import Image5 from '../assets/ProjectAsset/5.png';
import Image7 from '../assets/ProjectAsset/7.png';
import Image8 from '../assets/ProjectAsset/8.png';
import Image9 from '../assets/ProjectAsset/9.png';
import Image10 from '../assets/ProjectAsset/10.png';
import Image11 from '../assets/ProjectAsset/11.png';
import Image12 from '../assets/ProjectAsset/12.jpeg';
import Image13 from '../assets/ProjectAsset/13.jpg';
import Image14 from '../assets/ProjectAsset/14.jpg';
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
  
  {
    id: 1,
    title: "SuperStore Analysis Dashboard",
    tools: ["Power BI", "DAX", "Power Query"],
    description: "Analyzed 9000+ sales records to identify category, regional, segment, and product-level performance with dynamic profitability reports.",
    link: "https://github.com/Richeaa/superstore-dashboard",
    image: Image12,
    category: "Data & Visualization",
  },
  {
    id: 2,
    title: "Travel Analysis Dashboard",
    tools: ["Tableau", "Tableau Prep", "Table Calculations"],
    description: "An interactive Tableau dashboard exploring traveler demographics, nationality distribution, and transportation costs across top global destinations.",
    link: "https://github.com/Richeaa/Travel-Dashboard",
    image: Image11,
    category: "Data & Visualization",
  },
  {
    id: 3,
    title: "Rossa — Mobile Attendance App",
    tools: ["Flutter", "Golang", "MongoDB", "Firebase"],
    description: "A mobile attendance application for Mitra Keluarga, improving attendance management efficiency by 90% through GPS validation, face recognition, and real-time tracking.",
    links: [
      { label: "Frontend", url: "https://github.com/Richeaa/capstone-mika-rossa" },
      { label: "Backend", url: "https://github.com/Richeaa/backend-capstone" },
    ],
    image: Image13,
    category: "Mobile App",
  },
  {
    id: 4,
    title: "Academic Schedule Optimization",
    tools: ["Python", "Django", "PostgreSQL"],
    description: "Academic website application that helps lecturers to be assigned to courses and class schedules whether it's manually or automatically using random forest algorithm.",
    link: "https://github.com/Richeaa/academic-project",
    image: Image10,
    category: "Web Dev & ML",
  },
  {
    id: 5,
    title: "Amazon Sales Analysis Dashboard",
    tools: ["Power BI", "DAX", "Power Query"],
    description: "A comprehensive Power BI dashboard that visualizes Amazon's sales performance related to sales patterns, product performance, and regional trends.",
    link: "https://github.com/Richeaa/amazon-sales-dashboard",
    image: Image9,
    category: "Data & Visualization",
  },
  {
    id: 6,
    title: "Movie Recommendation System",
    tools: ["Python", "Streamlit", "Jupyter Notebook"],
    description: "An intelligent movie recommendation engine that suggests similar films based on user preferences using cosine similarity algorithms.",
    link: "https://rich-movie-recommend-system.streamlit.app/",
    image: Image8,
    category: "Web Dev & ML",
  },
  {
    id: 7,
    title: "RamenKuy",
    tools: ["Flutter", "Firebase"],
    description: "A mobile food ordering application that allows users to browse a ramen menu, place food orders, and have their orders stored and managed via Firebase.",
    link: "https://github.com/Richeaa/Ramenkuy",
    image: Image14,
    category: "Mobile App",
  },
  {
    id: 8,
    title: "Machine Learning Web Based",
    tools: ["Python", "Django", "Tailwind CSS", "PostgreSQL"],
    description: "A collaborative data science platform featuring machine learning models, data visualization, and predictive analytics tools.",
    link: "https://github.com/Richeaa/dsproject",
    image: Image7,
    category: "Web Dev & ML",
  },
  {
    id: 9,
    title: "Vehicle Classifier",
    tools: ["TensorFlow", "Streamlit", "Jupyter Notebook"],
    description: "A sophisticated image classification application that accurately distinguishes between cars and motorcycles using advanced deep learning models.",
    link: "https://vehicleclassifier.streamlit.app/",
    image: Image2,
    category: "Web Dev & ML",
  },
  {
    id: 10,
    title: "AkuLapar",
    tools: ["PHP", "JavaScript", "MySQL"],
    description: "A comprehensive restaurant discovery platform that helps users find and explore dining options across Indonesia with detailed information and reviews.",
    link: "https://github.com/Richeaa/Restaurant-Food-Website",
    image: Image1,
    category: "Web Dev & ML",
  },
  {
    id: 11,
    title: "Flick Tutor",
    tools: ["Bootstrap"],
    description: "A modern, responsive website connecting students with expert tutors across multiple subjects with an intuitive matching system.",
    link: "https://richeaa.github.io/Tutor-Website/",
    image: Image4,
    category: "Web Dev & ML",
  },
  {
    id: 12,
    title: "Toko Mega Makmur",
    tools: ["WordPress", "Hostinger", "SEO"],
    description: "A comprehensive e-commerce platform specializing in handyman equipment with integrated inventory management and customer support.",
    link: "https://tokomegamakmur.id/",
    image: Image5,
    category: "E-commerce",
  },
  {
    id: 13,
    title: "Bicycle Usage Pattern",
    tools: ["Python", "Streamlit"],
    description: "An in-depth data analysis project examining bicycle usage patterns influenced by weather conditions, weekdays, and seasonal factors.",
    link: "https://richcode.streamlit.app/",
    image: Image3,
    category: "Data & Visualization",
  },
];

const categories = ["All", ...new Set(projects.map((p) => p.category))];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
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
          {/* LEFT — kolom label */}
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
              <span className="font-mono text-[10px] text-slate-400">05</span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400 lg:mt-2 lg:block">
                Projects
              </span>
            </div>

            <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 lg:hidden">
              Selected work
            </p>

            <div className="hidden lg:mt-32 lg:block">
              <div className="h-16 w-px bg-slate-300" />
              <p className="mt-5 [writing-mode:vertical-rl] text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                Selected work
              </p>
            </div>
          </motion.div>

          {/* RIGHT — kolom konten */}
          <div className="col-span-12 lg:col-span-10 lg:translate-x-[3%]">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-12 flex flex-wrap items-end justify-between gap-4"
            >
              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Explore my work
                </p>
                <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-slate-900">
                  Projects
                </h2>
              </div>

              <p className="font-mono text-[9px] text-slate-300">
                {String(filteredProjects.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </p>
            </motion.div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-slate-200 pb-6">
              {categories.map((cat) => {
                const isActive = cat === activeCategory;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`
                      relative
                      pb-2
                      text-sm
                      font-medium
                      transition-colors
                      ${isActive ? "text-slate-900" : "text-slate-400 hover:text-slate-600"}
                    `}
                  >
                    {cat}
                    {isActive && (
                      <motion.span
                        layoutId="projects-underline"
                        className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-blue-600"
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Grid */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    onClick={() => setSelectedProject(project)}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover grayscale-[10%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                        />

                        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[10px] text-slate-500 backdrop-blur-sm">
                          {String(project.id).padStart(2, "0")}
                        </span>

                        <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_6px_16px_rgba(37,99,235,0.35)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <FaExternalLinkAlt className="text-xs" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-blue-600">
                        {project.category}
                      </p>

                      <h3 className="mt-1.5 text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
                        {project.title}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                        {project.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tools.slice(0, 3).map((tool) => (
                          <span
                            key={tool}
                            className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-500"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Bottom line */}
            <div className="mt-16 flex items-center justify-between border-t border-slate-200 pt-8">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400">
                  End of projects
                </span>
              </div>
              <span className="font-mono text-[9px] text-slate-300">SCROLL ↓</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[28px] border border-slate-200 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-64 w-full object-cover"
                />

                <button
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-600 backdrop-blur-sm transition-colors hover:bg-white hover:text-slate-900"
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes className="text-sm" />
                </button>

                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-blue-600 backdrop-blur-sm">
                  {selectedProject.category}
                </span>
              </div>

              <div className="p-8">
                <p className="font-mono text-[10px] text-slate-300">
                  {String(selectedProject.id).padStart(2, "0")}
                </p>

                <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                  {selectedProject.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {selectedProject.description}
                </p>

                <div className="mt-6 border-t border-slate-100 pt-6">
                  <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-slate-400">
                    Technologies used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {(selectedProject.links ?? [{ label: "View Project", url: selectedProject.link }]).map(
                    (item) => (
                      <a
                        key={item.url}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                      >
                        {item.label}
                        <FaExternalLinkAlt className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;