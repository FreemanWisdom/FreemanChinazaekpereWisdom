export default function Sky() {
  const clouds = [
    { id: 1, top: "15%", size: "scale-100", duration: "100s", delay: "0s", opacity: "0.8" },
    { id: 2, top: "35%", size: "scale-75", duration: "120s", delay: "-40s", opacity: "0.6" },
    { id: 3, top: "55%", size: "scale-125", duration: "90s", delay: "-20s", opacity: "0.7" },
    { id: 4, top: "75%", size: "scale-90", duration: "150s", delay: "-10s", opacity: "0.5" },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#87CEEB] via-[#E0F7FA] to-white">
      {/* Enhanced Sun */}
      <div className="absolute top-16 right-16 md:top-24 md:right-32">
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          {/* Main Sun Body */}
          <div className="absolute inset-0 bg-[#FFD700] rounded-full shadow-[0_0_60px_20px_rgba(255,215,0,0.4)]" />
          {/* Outer Glow */}
          <div className="absolute inset-[-20%] bg-[#FFFACD] rounded-full blur-2xl opacity-40 animate-pulse" />
        </div>
      </div>

      {/* Organic Clouds */}
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className={`absolute left-[-20%] animate-cloud ${cloud.size}`}
          style={{
            top: cloud.top,
            animationDuration: cloud.duration,
            animationDelay: cloud.delay,
            opacity: cloud.opacity,
          }}
        >
          <svg width="200" height="80" viewBox="0 0 200 80" fill="white">
            <circle cx="40" cy="50" r="25" />
            <circle cx="70" cy="40" r="30" />
            <circle cx="110" cy="40" r="35" />
            <circle cx="150" cy="50" r="25" />
            <rect x="40" y="55" width="110" height="20" />
          </svg>
        </div>
      ))}

      {/* Subtle Mist at Horizon */}
      <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-white to-transparent opacity-60" />
    </div>
  );
}

