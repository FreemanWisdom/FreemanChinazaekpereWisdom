import { profile } from "../data/profile";
import { education } from "../data/education";
import { interests } from "../data/interests";

export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 page-enter">
            <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h1>

            <section className="bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-3xl p-8 mb-12 shadow-xl border border-white/20">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                    {profile.about}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                    📍 {profile.location}
                </p>
            </section>

            <div className="grid md:grid-cols-2 gap-12">
                <section>
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Education</h2>
                    <div className="space-y-6">
                        {education.map((edu, idx) => (
                            <div key={idx} className="border-l-2 border-indigo-500 pl-4">
                                <h3 className="font-bold text-gray-900 dark:text-white">{edu.program}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                                <p className="text-sm text-indigo-600 dark:text-indigo-400">{edu.date}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Interests</h2>
                    <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <p className="text-gray-700 dark:text-gray-300 italic">
                            "{interests}"
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
