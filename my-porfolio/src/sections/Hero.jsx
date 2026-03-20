import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const ROLES = [
  "Frontend Developer",
  "UI/UX Designer",
  "Graphics Designer",
];

export default function Hero({ onNavigate }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = ROLES[roleIndex];
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setSpeed(50);
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, speed]);

  return (
    <section className="relative flex min-h-[90vh] items-center px-6 pb-12 pt-20 md:px-10 lg:px-12 lg:py-12 xl:px-16">
      <div className="mx-auto grid w-full max-w-7xl gap-12 xl:grid-cols-[1.15fr_0.85fr] xl:items-center">
        <div className="page-enter max-w-3xl">
          <p className="section-eyebrow">Available for frontend Projects</p>

          {/* Name */}
          <div className="mt-8">
            <h1 className="font-black leading-[1.08] tracking-tight">
              <span className="block text-5xl text-white/90 md:text-6xl xl:text-7xl">
                Wisdom
              </span>
              <span className="block text-6xl text-[var(--color-accent)] md:text-7xl xl:text-[5.5rem]">
                C. Freeman
              </span>
            </h1>
          </div>

          {/* Typing animation */}
          <div className="mt-5 flex h-10 items-center gap-2 md:h-12">
            <span className="text-xl font-bold text-[var(--color-text)]/80 md:text-2xl">
              {displayText}
            </span>
            <span className="animate-pulse text-[var(--color-accent)] text-2xl font-light leading-none">
              |
            </span>
          </div>

          {/* Tagline */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-muted)] md:text-xl font-medium">
            I build high-performance web interfaces with React and Tailwind CSS
            — focused on speed, usability, and clean design.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate("projects")}
              className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-primary)] shadow-lg shadow-[var(--color-accent)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[var(--color-accent)]/40 active:scale-95"
            >
              View Projects
            </button>

            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/60 hover:bg-[var(--color-accent)]/5 hover:text-[var(--color-accent)] hover:shadow-md hover:shadow-[var(--color-accent)]/10 active:scale-95"
            >
              Hire Me
            </button>
          </div>

          {/* Tech stack badges */}
          <div className="mt-10 flex flex-wrap gap-3 text-sm text-[var(--color-muted)]">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 transition-all duration-200 hover:border-[var(--color-accent)]/30 hover:text-white cursor-default">
              React 19
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 transition-all duration-200 hover:border-[var(--color-accent)]/30 hover:text-white cursor-default">
              Tailwind CSS
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 transition-all duration-200 hover:border-[var(--color-accent)]/30 hover:text-white cursor-default">
              Performance-minded UI
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 transition-all duration-200 hover:border-[var(--color-accent)]/30 hover:text-white cursor-default">
              JavaScript
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 transition-all duration-200 hover:border-[var(--color-accent)]/30 hover:text-white cursor-default">
              {profile.location}
            </span>
          </div>
        </div>

        {/* Info card */}
        <div className="page-enter panel relative overflow-hidden p-8 sm:p-10">
          <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/4 -translate-y-1/4 rounded-full bg-[var(--color-accent)]/15 blur-3xl" />

          <div className="relative space-y-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Core Focus
              </p>
              <h2 className="mt-4 text-3xl font-black text-white">
                Clean systems, premium motion, and reusable architecture.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-accent)]/25 hover:shadow-lg hover:shadow-[var(--color-accent)]/5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8ca3c2]">
                  Build Style
                </p>
                <p className="mt-3 text-lg font-semibold text-white">Component-first delivery</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8ca3c2]">
                  Priority
                </p>
                <p className="mt-3 text-lg font-semibold text-white">Responsiveness and polish</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8ca3c2]">
                  Outcome
                </p>
                <p className="mt-3 text-lg font-semibold text-white">Interfaces users trust fast</p>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-[var(--color-secondary)]/85 p-6">
              <p className="text-sm leading-7 text-[#9db2ce]">
                I combine frontend engineering with graphic design sensibility, so layout,
                hierarchy, and interaction quality are part of the implementation from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
