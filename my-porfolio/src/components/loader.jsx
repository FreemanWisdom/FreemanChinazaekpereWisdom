import { useEffect, useState } from "react";

const ORBITS = [
  { size: 110, duration: "4.5s", delay: "0s" },
  { size: 150, duration: "6.5s", delay: "0.25s" },
  { size: 190, duration: "8.5s", delay: "0.5s" },
];

export default function Loader({ isVisible }) {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (isVisible) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setShouldRender(false);
    }, 500);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isVisible]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#050c17] text-white transition-all duration-500 ${
        !isVisible ? "animate-loader-fade-out pointer-events-none" : ""
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,122,0,0.18),transparent_28%),linear-gradient(180deg,#071120_0%,#0a192f_55%,#040915_100%)]" />
      <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,241,255,0.05)_0,transparent_62%)]" />

      <div className="relative flex h-56 w-56 items-center justify-center">
        <div className="absolute h-24 w-24 rounded-full border border-white/12 bg-[#112240]/90 shadow-[0_0_70px_rgba(255,122,0,0.12)]" />
        <div className="absolute h-10 w-10 rounded-full bg-[var(--color-accent)] shadow-[0_0_35px_rgba(255,122,0,0.35)]" />

        {ORBITS.map((orbit) => (
          <div
            key={orbit.size}
            className="absolute rounded-full border border-white/10 animate-orbit"
            style={{
              width: `${orbit.size}px`,
              height: `${orbit.size}px`,
              animationDuration: orbit.duration,
              animationDelay: orbit.delay,
            }}
          >
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e6f1ff] shadow-[0_0_20px_rgba(230,241,255,0.7)]" />
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.45em] text-[var(--color-accent)]/80">
          Loading Portfolio
        </p>
        <h2 className="mt-4 text-2xl font-black uppercase tracking-[0.32em] text-white">
          CODECRAFT
        </h2>
        <p className="mt-3 text-xs font-medium uppercase tracking-[0.35em] text-[#8ca3c2]">
          Aligning sections and interface layers
        </p>
      </div>
    </div>
  );
}
