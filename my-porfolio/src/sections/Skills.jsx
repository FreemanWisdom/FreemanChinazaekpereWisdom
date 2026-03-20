const skills = [
  "HTML5 & Semantic Web",
  "CSS3 & Tailwind CSS",
  "JavaScript (ES6+)",
  "React",
  "Responsive & Mobile-First Design",
  "Cross-Browser Compatibility",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-6 rounded-xl bg-white dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10 transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:border-[var(--color-accent)]/25 hover:shadow-lg hover:shadow-[var(--color-accent)]/5 active:scale-[0.97]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
