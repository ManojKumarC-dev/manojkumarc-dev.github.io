import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const items = [
  {
    period: "Oct 2025 - Present",
    role: "Android Development",
    company: "HCL Technologies - Xerox Project",
    description:
      "Working on bug fixes and feature implementation for Xerox kiosk workflows while collaborating through Git-based branching, merging, pull requests, and integration practices.",
  },
  {
    period: "Aug 2025 - Oct 2025",
    role: "Senior Software Engineer - OS Team",
    company: "HCL Technologies - Xerox Project",
    description:
      "Handled defect consulting for upcoming software releases within the OS team and supported collaborative release work through structured Git workflows.",
  },
  {
    period: "Internships",
    role: "Firmware and Embedded Systems Internships",
    company: [
      "HCL Technologies",
      "National Small Scale Industries Technical Service Centre",
      "IndFurr SuperHeat Furnaces, Ambattur Industrial Estate",
    ],
    description:
      "Completed industry internships in BIOS porting, low-level firmware customization, embedded systems, power electronics, and IoT-oriented industrial applications.",
  },
];

function Experience() {
  return (
    <section id="experience" className="border-b border-white/10 py-20 sm:py-28">
      <Reveal>
        <SectionTitle
          title="Work experience"
          subtitle="Industry roles and internships across operating systems, Android, firmware, and embedded systems."
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
                {Array.isArray(item.company) ? (
                  <div className="mt-2 space-y-2 text-sm uppercase tracking-[0.22em] text-cyan-200/65">
                    {item.company.map((companyName) => (
                      <p key={companyName}>{companyName}</p>
                    ))}
                  </div>
                ) : (
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-cyan-200/65">
                    {item.company}
                  </p>
                )}
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
