import { projects } from "../data/projects";

export default function ProjectsPage({ onViewProject }) {
  return (
    <div className="page-enter mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-12">
      <div className="mb-10 max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.4em] text-[var(--color-accent)]">
          Featured Work
        </p>
        <h2 className="mt-6 text-5xl font-black text-white md:text-6xl tracking-tight">
          Selected <span className="text-[var(--color-accent)]">Projects</span>
        </h2>
        <p className="mt-6 text-xl text-[var(--color-muted)] leading-relaxed">
          Focused on clean delivery, responsive UX, and high-performance execution.
        </p>
      </div>

      <div className="grid gap-10 xl:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="group relative overflow-hidden panel panel-hover"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={project.images.desktop}
                alt={project.name}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-transparent opacity-60" />
            </div>

            <div className="p-10">
              <h3 className="text-3xl font-black text-white tracking-tight">{project.name}</h3>
              <p className="mt-4 text-lg leading-relaxed text-[#9db2ce]">{project.description}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <button
                  onClick={() => onViewProject && onViewProject(project.id)}
                  className="rounded-full bg-white px-8 py-3.5 text-xs font-black uppercase tracking-widest text-[var(--color-primary)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)] active:scale-95"
                >
                  View Details
                </button>
                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-xs font-black uppercase tracking-widest text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-accent)]/5 hover:text-[var(--color-accent)] active:scale-95"
                  >
                    Live Link
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-xs font-black uppercase tracking-widest text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] active:scale-95"
                  >
                    Source
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}

        <div className="flex min-h-[24rem] flex-col items-center justify-center rounded-[2.5rem] border-2 border-dashed border-white/5 p-12 text-center group transition-colors hover:border-white/10">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/[0.03] text-[var(--color-accent)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6v12m6-6H6"
              />
            </svg>
          </div>
          <h3 className="mt-8 text-2xl font-black text-white">More projects coming soon</h3>
          <p className="mt-4 max-w-sm text-[#8ca3c2] leading-relaxed">
            I'm currently finalizing several other projects focused on premium layout and engineering quality.
          </p>
        </div>
      </div>
    </div>
  );
}
