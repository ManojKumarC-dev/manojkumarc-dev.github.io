import { motion } from "framer-motion";

function Quote() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] flex-col items-center justify-center border-b border-white/10 text-center"
    >
      <div className="signal-pill absolute left-0 top-20 hidden rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-left backdrop-blur-md lg:block">
        <p className="text-[10px] uppercase tracking-[0.34em] text-white/38">
          Deep Space / Signal
        </p>
        <p className="mt-2 font-display text-sm uppercase tracking-[0.26em] text-white/82">
          Minimal Android Systems
        </p>
      </div>
      <div className="black-hole-halo pointer-events-none absolute right-[-21%] top-1/2 hidden h-[42rem] w-[42rem] -translate-y-1/2 rounded-full lg:block" />
      <div className="black-hole pointer-events-none absolute right-[-18%] top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 rounded-full lg:block" />
      <div className="accretion-ring pointer-events-none absolute right-[-16%] top-1/2 hidden h-[38rem] w-[38rem] -translate-y-1/2 rounded-full lg:block" />
      <motion.p
        className="relative z-10 max-w-4xl font-serif text-5xl leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-[7rem]"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Make it simple,
        <br />
        but significant.
      </motion.p>
      <motion.div
        className="relative z-10 mt-16 flex flex-col items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/48"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
      >
        <span>Scroll to enter</span>
        <span className="h-14 w-px bg-white/30" />
      </motion.div>

      <div className="absolute bottom-10 right-0 hidden max-w-xs text-right lg:block">
        <p className="text-[10px] uppercase tracking-[0.34em] text-white/28">
          Atmospheric Note
        </p>
        <p className="mt-3 text-sm leading-7 text-white/42">
          A quiet visual field inspired by orbital drift, lensing light, and
          minimal interface design.
        </p>
      </div>
    </section>
  );
}

export default Quote;
