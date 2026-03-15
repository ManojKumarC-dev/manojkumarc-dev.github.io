import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    title: "Printer Utility",
    category: "Android Tool",
    description:
      "A focused utility app for printer workflows, device communication, and fast operator actions.",
  },
  {
    title: "Compose Demo",
    category: "UI System",
    description:
      "Reusable Jetpack Compose patterns for clean layouts, transitions, and scalable screen structure.",
  },
  {
    title: "Task Flow",
    category: "Productivity",
    description:
      "A minimal task experience built around strong information hierarchy and distraction-free interaction.",
  },
];

function Projects() {
  return (
    <section id="projects" className="border-b border-white/10 py-20 sm:py-28">
      <Reveal>
        <SectionTitle
          title="Selected projects"
          subtitle="A small set of builds focused on clarity, utility, and polished motion."
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <motion.article
              className={`group flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-panel backdrop-blur-md transition-colors ${
                index === 1 ? "lg:translate-y-10" : ""
              }`}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/42">
                  {project.category}
                </p>
                <div className="mt-8 h-px w-14 bg-gradient-to-r from-cyan-200/70 to-transparent" />
                <h3 className="mt-6 font-serif text-3xl leading-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  {project.description}
                </p>
              </div>

              <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-sm text-white">View concept</span>
                <span className="text-xl text-cyan-200/80 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;
