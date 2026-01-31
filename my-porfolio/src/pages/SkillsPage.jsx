import { skills } from "../data/skills";

export default function SkillsPage() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12 page-enter">
            <h1 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Skills & Expertise</h1>

            <div className="grid md:grid-cols-2 gap-8 text-center">
                <section className="bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
                    <h2 className="text-2xl font-bold mb-8 text-indigo-600 dark:text-indigo-400">Technical Skills</h2>
                    <div className="grid gap-4">
                        {skills.technical.map((skill, idx) => (
                            <div key={idx} className="bg-white/60 dark:bg-white/10 p-4 rounded-xl shadow-sm text-gray-800 dark:text-gray-200">
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
                    <h2 className="text-2xl font-bold mb-8 text-purple-600 dark:text-purple-400">Professional Skills</h2>
                    <div className="grid gap-4">
                        {skills.professional.map((skill, idx) => (
                            <div key={idx} className="bg-white/60 dark:bg-white/10 p-4 rounded-xl shadow-sm text-gray-800 dark:text-gray-200">
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
