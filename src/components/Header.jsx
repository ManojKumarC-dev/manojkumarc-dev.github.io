const items = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Work Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 sm:px-10 lg:px-16">
        <a
          href="#home"
          className="w-fit rounded-full border border-white/10 bg-white/6 px-5 py-3 font-display text-sm uppercase tracking-[0.38em] text-white/92 shadow-[0_0_35px_rgba(114,151,255,0.08)] backdrop-blur-md sm:text-base"
        >
          Manoj Kumar
        </a>

        <nav className="no-scrollbar flex items-center gap-2 overflow-x-auto rounded-full border border-white/10 bg-white/6 p-2 shadow-[0_0_40px_rgba(60,88,168,0.08)] backdrop-blur-md">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap rounded-full px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/68 transition duration-300 hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
