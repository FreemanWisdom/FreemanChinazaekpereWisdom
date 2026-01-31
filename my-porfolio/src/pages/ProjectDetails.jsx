import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) return <div className="text-center py-20">Project not found</div>;

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 animate-in fade-in duration-700">
            <Link to="/projects" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 mb-8 hover:underline">
                ← Back to Projects
            </Link>

            <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">{project.name}</h1>

            <div className="flex flex-wrap gap-3 mb-10">
                {project.techStack.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium rounded-xl">
                        {tech}
                    </span>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-12 mb-16">
                <div className="lg:col-span-2 space-y-12">
                    {/* Desktop Preview */}
                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                        <img src={project.images.desktop} alt={`${project.name} Desktop`} className="w-full h-auto" />
                    </div>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Project Overview</h2>
                        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                            {project.fullDescription}
                        </p>
                    </section>
                </div>

                <div className="space-y-10">
                    {/* Sticky Actions */}
                    <div className="lg:sticky lg:top-28 space-y-8">
                        <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl">
                            <div className="space-y-4">
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30">
                                    Live Demo
                                </a>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="block w-full border-2 border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 text-center py-4 rounded-2xl font-bold hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-all">
                                    Source Code
                                </a>
                            </div>
                        </div>

                        {/* Mobile Preview */}
                        <div className="mx-auto w-[280px] rounded-[3rem] overflow-hidden border-[8px] border-gray-900 dark:border-gray-800 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img src={project.images.mobile} alt={`${project.name} Mobile`} className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
