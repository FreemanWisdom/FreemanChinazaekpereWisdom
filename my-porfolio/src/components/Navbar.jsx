import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { profile } from "../data/profile";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ dark, setDark }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/30 dark:bg-black/30 border-b border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          CODECRAFT
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-bold transition-all hover:text-indigo-600 dark:hover:text-indigo-400 ${isActive ? "text-indigo-600 dark:text-indigo-400" : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="/assets/resume/MY RESUME (1).pdf"
            download
            className="px-6 py-2 bg-indigo-600 text-white rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30"
          >
            Resume
          </a>
          <ThemeToggle dark={dark} setDark={setDark} />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-bold ${isActive ? "text-indigo-600" : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="/assets/resume/MY RESUME (1).pdf"
            download
            className="w-full py-4 bg-indigo-600 text-white rounded-2xl text-center font-bold"
          >
            Download Resume
          </a>
          <div className="flex justify-center pt-4">
            <ThemeToggle dark={dark} setDark={setDark} />
          </div>
        </div>
      )}

    </nav>
  );
}
