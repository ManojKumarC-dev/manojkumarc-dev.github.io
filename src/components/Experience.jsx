import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const items = [
  {
    period: "2024 - Present",
    role: "Android Developer",
    company: "Current Focus",
    description:
      "Building Android products with an emphasis on maintainable architecture, Compose UI, and reliable release quality.",
  },
  {
    period: "2023 - 2024",
    role: "Mobile Engineer",
    company: "Product Work",
    description:
      "Worked across feature delivery, UI refinement, API integration, and internal tooling for smoother user flows.",
  },
];

function Experience() {
  return (
    <section id="experience" className="border-b border-white/10 py-20 sm:py-28">
      <Reveal>
        <SectionTitle
          title="Work experience"
          subtitle="A concise view of the roles and product work shaping my Android practice."
        />
      </Reveal>

      <div className="space-y-6">
        {items.map((item, index) => (
          <Reveal key={`${item.role}-${item.period}`} delay={index * 0.08}>
            <article className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-md lg:grid-cols-[0.24fr_0.38fr_1fr]">
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                {item.period}
              </p>
              <div>
                <div className="mb-5 h-px w-14 bg-gradient-to-r from-cyan-200/70 to-transparent" />
                <h3 className="font-serif text-3xl leading-tight text-white">
                  {item.role}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-cyan-200/65">
                  {item.company}
                </p>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-white/64">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Experience;
