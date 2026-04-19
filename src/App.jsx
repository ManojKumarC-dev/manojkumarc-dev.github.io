import { useEffect } from "react";
import Lenis from "lenis";
import Quote from "./components/Quote";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.1,
    });

    let frameId;

    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="space-background pointer-events-none absolute inset-0" />
      <div className="starfield pointer-events-none absolute inset-0 opacity-80" />
      <div className="orbital-grid pointer-events-none absolute inset-0 opacity-50" />
      <Header />
      <main className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-20 pt-28 sm:px-10 sm:pt-32 lg:px-16">
        <Quote />
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
        <footer className="border-t border-white/10 pt-10 text-center text-xs uppercase tracking-[0.28em] text-white/38">
          Copyright 2026 Manoj Kumar C | Built with Codex
        </footer>
      </main>
      <Chatbot />
    </div>
  );
}

export default App;
