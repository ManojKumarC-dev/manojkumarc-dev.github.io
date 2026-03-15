import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section id="about" className="border-b border-white/10 py-20 sm:py-28">
      <Reveal>
        <SectionTitle
          title="About"
          subtitle="Short, precise, and built to feel intentional."
        />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <p className="max-w-3xl font-serif text-3xl leading-tight text-white sm:text-5xl">
            I care about software that feels calm, useful, and technically
            solid. My work centers on Android products with clean architecture,
            reliable behavior, and understated visual polish.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-md">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                Approach
              </p>
              <p className="mt-2 text-sm leading-7 text-white/62">
                Clear hierarchy, restrained motion, and focused interfaces.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                Experience
              </p>
              <p className="mt-2 text-sm leading-7 text-white/62">
                Android development, UI systems, APIs, and iterative product
                refinement.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
