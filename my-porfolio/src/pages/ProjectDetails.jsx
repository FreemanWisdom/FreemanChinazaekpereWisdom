import { projects } from "../data/projects";

export default function ProjectDetails({ projectId, onBackToProjects }) {
    const project = projects.find((entry) => entry.id === projectId);

    if (!project) {
        return <div className="py-20 text-center text-[#d6e4f7]">Project not found.</div>;
    }

    return (
        <div className="mx-auto max-w-6xl px-6 py-12 animate-in fade-in duration-700">
            {onBackToProjects && (
                <button
                    type="button"
                    onClick={onBackToProjects}
                    className="mb-8 inline-flex items-center text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]"
                >
                    ← Back to Projects
                </button>
            )}

            <h1 className="mb-6 text-5xl font-bold text-white">{project.name}</h1>

            <div className="mb-10 flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-xl border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 px-4 py-2 font-medium text-[var(--color-accent)]"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="mb-16 grid gap-12 lg:grid-cols-3">
                <div className="space-y-12 lg:col-span-2">
                    <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                        <img
                            src={project.images.desktop}
                            alt={`${project.name} Desktop`}
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                            className="h-auto w-full"
                        />
                    </div>

                    <section>
                        <h2 className="mb-4 text-2xl font-bold text-white">Project Overview</h2>
                        <p className="text-lg leading-relaxed text-[#9db2ce]">
                            {project.fullDescription}
                        </p>
                    </section>
                </div>

                <div className="space-y-10">
                    <div className="lg:sticky lg:top-28 space-y-8">
                        <div className="panel p-8">
                            <div className="space-y-4">
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full rounded-2xl bg-[var(--color-accent)] py-4 text-center font-bold text-[#08111f]"
                                >
                                    Live Link
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full rounded-2xl border border-white/12 bg-white/[0.04] py-4 text-center font-bold text-white"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>

                        <div className="mx-auto w-[280px] rotate-2 overflow-hidden rounded-[3rem] border-[8px] border-[#09111f] shadow-2xl transition-transform duration-500 hover:rotate-0">
                            <img
                                src={project.images.mobile}
                                alt={`${project.name} Mobile`}
                                loading="lazy"
                                decoding="async"
                                className="h-auto w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
