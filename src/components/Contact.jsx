import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const links = [
  { label: "Email", value: "manoj@example.com", href: "mailto:manoj@example.com" },
  { label: "GitHub", value: "github.com/manoj15u24", href: "https://github.com/manoj15u24" },
  { label: "LinkedIn", value: "linkedin.com/in/manoj", href: "https://linkedin.com/in/manoj" },
];

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <Reveal>
        <SectionTitle
          title="Contact"
          subtitle="If the work feels aligned, let’s build something sharp and useful."
        />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <div>
            <p className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-6xl">
              Open to Android roles, freelance builds, and product
              collaboration.
            </p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/48">
              Available for product teams that care about shipping polished
              software with clear structure and calm interaction design.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] px-7 py-8 text-white shadow-panel backdrop-blur-md">
            {links.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center justify-between border-b border-white/10 py-5 last:border-b-0"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.22 }}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-white/45">
                  {item.label}
                </span>
                <span className="text-sm text-white sm:text-base">{item.value}</span>
              </motion.a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
