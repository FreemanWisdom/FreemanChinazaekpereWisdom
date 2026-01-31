import { projects } from "../data/projects";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12 page-enter">
            <h1 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">My Projects</h1>

            <div className="grid md:grid-cols-2 gap-10">
                {projects.map((project) => (
                    <div key={project.id} className="group overflow-hidden rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/20 shadow-2xl transition-all hover:scale-[1.02]">
                        <div className="relative aspect-video overflow-hidden">
                            <img
                                src={project.images.desktop}
                                alt={project.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                <Link
                                    to={`/projects/${project.id}`}
                                    className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{project.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400 line-clamp-2 mb-6">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
