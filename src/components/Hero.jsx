import { motion } from "framer-motion";
import Reveal from "./Reveal";

const stats = [
  { label: "Focus", value: "Android apps with clean UX" },
  { label: "Stack", value: "Kotlin, Compose, Java, APIs" },
  { label: "Location", value: "India / Remote" },
];

function Hero() {
  return (
    <section className="grid min-h-screen items-end gap-12 border-b border-white/10 py-20 lg:grid-cols-[1.35fr_0.65fr]">
      <Reveal>
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/45">
          Portfolio 2026
        </p>
        <h1 className="max-w-4xl font-serif text-6xl leading-[0.88] tracking-tight text-white sm:text-7xl lg:text-[8rem]">
          Manoj Kumar
          <span className="block font-sans text-lg font-medium uppercase tracking-[0.32em] text-cyan-200/80 sm:mt-4 sm:text-xl">
            Android Developer
          </span>
        </h1>
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/60 backdrop-blur-md">
            Compose-first UI
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/60 backdrop-blur-md">
            Clean architecture
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/60 backdrop-blur-md">
            Product clarity
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-panel backdrop-blur-md">
          <p className="text-sm leading-7 text-white/62">
            I build minimal Android experiences with strong structure, smooth
            interaction, and practical product thinking.
          </p>

          <div className="mt-8 space-y-5">
            {stats.map((item) => (
              <motion.div
                key={item.label}
                className="border-t border-white/10 pt-5"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                  {item.label}
                </p>
                <p className="mt-2 text-sm text-white sm:text-base">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Hero;
