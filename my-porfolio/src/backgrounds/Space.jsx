import { useEffect, useState, useMemo } from "react";

export default function Space() {
  const [stars, setStars] = useState([]);


  useEffect(() => {
    const starCount = 120;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() < 0.2 ? "w-1.5 h-1.5" : "w-0.5 h-0.5",
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
      depth: Math.random() > 0.5 ? "0.1" : "0.3", // Parallax depth
      type: Math.random() > 0.7 ? "animate-twinkle" : "animate-shimmer",
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#0B0B13] via-[#1A1A2E] to-[#0B0B13]">
      {/* Stars with Parallax vibe */}
      {stars.map((star, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-white opacity-60 ${star.size} ${star.type}`}
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
            transform: `translateZ(${star.depth}px)`,
          }}
        />
      ))}

      {/* Subtle Space Dust / Nebula Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(66,56,202,0.05)_0%,transparent_50%)]" />

      {/* Improved Comets */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-1/4 w-40 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400/50 to-white/80 animate-comet rotate-45" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-0 w-60 h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-white/60 animate-comet rotate-45" style={{ animationDelay: "7s" }} />
        <div className="absolute top-3/4 right-1/3 w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-white/40 animate-comet rotate-45" style={{ animationDelay: "12s" }} />
      </div>

      {/* Subtle Space Dust / Nebula Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(66,56,202,0.05)_0%,transparent_50%)]" />
    </div>
  );
}

