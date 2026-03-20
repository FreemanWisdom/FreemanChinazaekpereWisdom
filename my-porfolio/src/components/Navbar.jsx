import { useState } from "react";

const DEFAULT_NAV_LINKS = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar({
  navLinks = DEFAULT_NAV_LINKS,
  activeSection = "home",
  onNavigate,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (sectionId) => {
    onNavigate?.(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#08111f]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <button
          type="button"
          onClick={() => handleNavigate("home")}
          className="text-2xl font-black text-white"
        >
          CODECRAFT
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => handleNavigate(link.id)}
              className={`text-sm font-bold transition-colors ${
                activeSection === link.id
                  ? "text-[var(--color-accent)]"
                  : "text-[#d6e4f7] hover:text-[var(--color-accent)]"
              }`}
            >
              {link.name}
            </button>
          ))}

          <a
            href="/assets/resume/MY RESUME (1).pdf"
            download
            className="rounded-full bg-[var(--color-accent)] px-6 py-2 text-sm font-bold text-[#08111f]"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setIsOpen((currentState) => !currentState)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-20 flex w-full flex-col gap-6 border-b border-white/10 bg-[#08111f]/95 p-6 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => handleNavigate(link.id)}
              className={`text-left text-lg font-bold ${
                activeSection === link.id ? "text-[var(--color-accent)]" : "text-white"
              }`}
            >
              {link.name}
            </button>
          ))}

          <a
            href="/assets/resume/MY RESUME (1).pdf"
            download
            className="w-full rounded-2xl bg-[var(--color-accent)] py-4 text-center font-bold text-[#08111f]"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
