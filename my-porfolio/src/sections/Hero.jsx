import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export default function Hero() {
  const roles = ["Front-End Developer", "Graphics Designer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setSpeed(50);
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, speed]);

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
          Available for Projects
        </h2>

        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-gray-900 dark:text-white leading-[1.1]">
          I'm <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {profile.firstName} {profile.lastName}
          </span>
        </h1>

        <div className="h-12 md:h-16 mb-8">
          <p className="text-2xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
            {displayText}
            <span className="animate-pulse ml-1">|</span>
          </p>
        </div>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {profile.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/projects"
            className="group relative px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-black text-lg transition-all hover:scale-105 hover:shadow-[0_20px_50px_rgba(79,70,229,0.3)] dark:hover:shadow-[0_20px_50px_rgba(255,255,255,0.15)]"
          >
            Explore My Work
          </Link>

          <Link
            to="/contact"
            className="px-10 py-5 bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl font-black text-lg transition-all hover:bg-white/80 dark:hover:bg-white/10 dark:text-white"
          >
            Let's Talk
          </Link>
        </div>

        <div className="mt-20 flex justify-center gap-12 text-gray-400 dark:text-gray-600 font-mono text-sm">
          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
