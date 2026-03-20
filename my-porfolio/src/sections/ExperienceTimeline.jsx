const TIMELINE_MILESTONES = [
  {
    date: "December 2024",
    icon: "📚",
    title: "Began learning HTML & CSS",
    description:
      "Built a strong foundation in semantic markup, layout systems, responsive structure, and the visual basics of modern web interfaces.",
  },
  {
    date: "March 2025",
    icon: "📚",
    title: "Started JavaScript",
    description:
      "Moved beyond static pages into interaction, logic, and problem-solving, turning design ideas into functional user experiences.",
  },
  {
    date: "May-August 2025",
    icon: "💻",
    title: "Joined the ALX program",
    description:
      "Developed professional foundations, collaborated in team settings, and completed projects independently with a stronger focus on ownership and delivery.",
  },
  {
    date: "September 2025",
    icon: "📚",
    title: "Expanded into React, Git, and modern frontend tooling",
    description:
      "Learned component-driven development, version control, collaborative workflows, and the tools needed to build maintainable frontend systems.",
  },
  {
    date: "January 2026",
    icon: "🎓",
    title: "Graduated from the ALX program",
    description:
      "Completed the program with stronger execution habits, better collaboration discipline, and clearer confidence in frontend product work.",
  },
  {
    date: "February 2026 - Present",
    icon: "📚",
    title: "Currently mastering Next.js and TypeScript",
    description:
      "Deepening expertise in typed frontend architecture, scalable React patterns, and production-ready Next.js workflows for modern web applications.",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="px-5 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-4xl">
          <p className="section-eyebrow">Experience Timeline</p>
          <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            A steady path of growth from web fundamentals to modern frontend engineering.
          </h2>
          <p className="mt-6 text-base leading-7 text-[#9db2ce] sm:text-lg sm:leading-8">
            This timeline shows the hands-on learning, collaboration, and technical progression behind my work, making it easy to scan the momentum and discipline I bring to frontend development.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-14">
          <span className="absolute bottom-4 left-5 top-4 w-px bg-gradient-to-b from-white/5 via-[var(--color-accent)]/40 to-white/5 sm:left-[1.375rem]" />

          <div className="space-y-5 sm:space-y-6">
          {TIMELINE_MILESTONES.map((milestone, index) => {
            return (
              <article
                key={milestone.date}
                className="grid min-w-0 grid-cols-[2.5rem_minmax(0,1fr)] gap-3 sm:grid-cols-[2.75rem_minmax(0,1fr)] sm:gap-4"
              >
                <div className="relative flex justify-center">
                  <span className="relative z-10 mt-1 flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--color-accent)]/25 bg-[var(--color-secondary)] text-base shadow-[0_0_0_5px_rgba(10,25,47,1)] sm:h-11 sm:w-11 sm:text-lg sm:shadow-[0_0_0_6px_rgba(10,25,47,1)]">
                    {milestone.icon}
                  </span>
                </div>

                <div className="panel panel-hover min-w-0 p-5 sm:p-6 lg:p-8">
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                    <p className="max-w-full rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/10 px-3 py-2 text-[10px] font-black uppercase leading-relaxed tracking-[0.16em] text-[var(--color-accent)] sm:px-4 sm:text-[11px] sm:tracking-[0.2em]">
                      {milestone.date}
                    </p>
                  </div>

                  <h3 className="mt-4 text-lg font-black leading-tight text-white sm:text-xl lg:text-2xl">
                    {milestone.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-sm leading-6 text-[#9db2ce] sm:text-[15px] sm:leading-7 lg:text-base">
                    {milestone.description}
                  </p>
                </div>
              </article>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}
