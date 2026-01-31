import { useState, useEffect } from "react";
import { profile } from "../data/profile";
import { education } from "../data/education";
import { interests } from "../data/interests";
import { certifications } from "../data/certifications";

export default function About() {
    const [selectedCert, setSelectedCert] = useState(null);

    useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        const handleEsc = (e) => {
            if (e.key === 'Escape') setSelectedCert(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [selectedCert]);

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

            <section className="mt-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Certifications</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {certifications.map((cert, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedCert(cert)}
                            className="group cursor-pointer overflow-hidden bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl transition-all hover:scale-[1.02]"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
                                <p className="text-indigo-600 dark:text-indigo-400 font-semibold">{cert.organization}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Certificate Modal */}
            {selectedCert && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
                    onClick={() => setSelectedCert(null)}
                >
                    <div
                        className="relative max-w-5xl w-full bg-transparent p-2 animate-in zoom-in duration-300 outline-none"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute -top-12 right-0 text-white hover:text-indigo-400 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md"
                            onClick={() => setSelectedCert(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <img
                            src={selectedCert.image}
                            alt={selectedCert.title}
                            className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
                        />
                        <div className="mt-4 text-center">
                            <h3 className="text-2xl font-bold text-white">{selectedCert.title}</h3>
                            <p className="text-indigo-400 font-semibold">{selectedCert.organization}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
