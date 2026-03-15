import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    title: "Wireless Servosystem for AC and DC Machines",
    category: "Final Year Project",
    description:
      "Designed an embedded servo system with capacitive touch support for wireless control of AC and DC machines, with real-time machine analysis for operator communication.",
  },
  {
    title: "Intel BIOS Porting",
    category: "Industry Project",
    description:
      "Executed open-source Intel BIOS porting to device-specific firmware during internship work, building practical experience in BIOS configuration and low-level customization.",
  },
  {
    title: "Research and Publications",
    category: "IEEE / ICPECTS",
    description:
      "Presented and published work on wireless servo systems, and co-authored research on cascaded neural network control for electric vehicle energy management.",
  },
];

function Projects() {
  return (
    <section id="projects" className="border-b border-white/10 py-20 sm:py-28">
      <Reveal>
        <SectionTitle
          title="Projects Worked"
          subtitle="Project work spanning embedded systems, firmware adaptation, and published engineering research."
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
                <span className="text-sm text-white">Resume highlight</span>
                <span className="text-xl text-cyan-200/80 transition-transform duration-300 group-hover:translate-x-1">
                  -&gt;
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
