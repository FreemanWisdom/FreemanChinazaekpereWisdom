const projects = [
  {
    title: "News App",
    link: "https://example.com",
    description: "Fetches live news using a public API.",
    tech: ["React", "API", "CSS"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              className="group block rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 hover:shadow-xl transition"
            >
              {/* Preview */}
              <div className="h-48 bg-gray-100 dark:bg-white/5 flex items-center justify-center text-sm opacity-60">
                Live Preview
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="opacity-80 mb-4">{project.description}</p>

                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-nebula/10 text-nebula"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
