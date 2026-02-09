import { useEffect, useState } from "react";

export default function Loader({ isVisible }) {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    } else {
      // Wait for the fade-out animation to finish (matching CSS duration)
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-500 bg-slate-950 text-white ${!isVisible ? "animate-loader-fade-out pointer-events-none" : ""
        }`}
    >
      {/* Background elements - Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Animation - Space Orb */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl opacity-20 animate-sun-pulse" />
          <div className="absolute inset-8 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full shadow-[0_0_30px_rgba(99,102,241,0.5)] z-10 animate-slow-rotate" />
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border border-white/10 rounded-full animate-orbital"
              style={{ animationDuration: `${6 + i * 2}s`, padding: `${i * 10}px` }}
            >
              <div
                className="w-2 h-2 bg-indigo-200 rounded-full shadow-[0_0_10px_white]"
                style={{ transform: `translateX(${40 + i * 10}px)` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Branding */}
      <div className="mt-12 text-center z-10">
        <h2 className="text-xl font-black tracking-[0.3em] uppercase opacity-80 mb-2">
          CODECRAFT
        </h2>
        <p className="text-xs font-medium tracking-widest uppercase opacity-40 animate-pulse">
          Crafting your experience...
        </p>
      </div>
    </div>
  );
}
