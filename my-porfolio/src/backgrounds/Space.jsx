export default function Space() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--color-primary)]">
      {/* Multi-stop gradient base — dark navy depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(17,34,64,0.7),transparent_55%),radial-gradient(ellipse_60%_50%_at_100%_0%,rgba(17,34,64,0.5),transparent_45%),linear-gradient(180deg,#0a192f_0%,#071325_40%,#050b14_100%)]" />

      {/* Subtle grid texture — fades toward edges */}
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(230,241,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(230,241,255,0.04)_1px,transparent_1px)] [background-size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent_80%)]" />

      {/* Soft orange accent glow — top left */}
      <div className="absolute -left-32 -top-20 h-[28rem] w-[28rem] rounded-full bg-[var(--color-accent)]/[0.07] blur-[120px]" />

      {/* Smaller warm glow — bottom right */}
      <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-[var(--color-accent)]/[0.04] blur-[100px]" />

      {/* Cool navy glow — center right for depth */}
      <div className="absolute right-[-8rem] top-1/3 h-[32rem] w-[32rem] rounded-full bg-[#112240]/40 blur-[140px]" />

      {/* Secondary depth — lower left */}
      <div className="absolute -left-16 bottom-1/4 h-72 w-72 rounded-full bg-[#0d1f3c]/50 blur-[100px]" />

      {/* Center vignette — draws focus inward */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,11,20,0.5)_100%)]" />
    </div>
  );
}
