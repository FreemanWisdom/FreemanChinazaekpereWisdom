import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { profile } from "../data/profile";
import { supportData } from "../data/support";

export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 page-enter">
            <h1 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Get In Touch</h1>

            <div className="grid md:grid-cols-2 gap-12">
                <section className="bg-white/40 dark:bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Info</h2>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xl">
                                📧
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <a href={`mailto:${profile.email}`} className="font-bold text-gray-900 dark:text-white hover:underline">
                                    {profile.email}
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 text-xl">
                                📞
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Phone</p>
                                <a href={`tel:${profile.phone}`} className="font-bold text-gray-900 dark:text-white hover:underline">{profile.phone}</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-400 text-xl">
                                📍
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Location</p>
                                <p className="font-bold text-gray-900 dark:text-white">{profile.location}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white/40 dark:bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Connect with Me</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <a
                            href={profile.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 dark:bg-white/10 border border-white/20 hover:scale-[1.02] transition-all group"
                        >
                            <div className="w-10 h-10 flex items-center justify-center bg-gray-900 text-white rounded-full text-xl transition-transform group-hover:scale-110">
                                <FaGithub />
                            </div>
                            <span className="font-bold text-gray-900 dark:text-white">GitHub</span>
                        </a>
                        <a
                            href={profile.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 dark:bg-white/10 border border-white/20 hover:scale-[1.02] transition-all group"
                        >
                            <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full text-xl transition-transform group-hover:scale-110">
                                <FaLinkedin />
                            </div>
                            <span className="font-bold text-gray-900 dark:text-white">LinkedIn</span>
                        </a>
                        <a
                            href={profile.socials.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 dark:bg-white/10 border border-white/20 hover:scale-[1.02] transition-all group"
                        >
                            <div className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full text-xl transition-transform group-hover:scale-110">
                                <FaWhatsapp />
                            </div>
                            <span className="font-bold text-gray-900 dark:text-white">WhatsApp</span>
                        </a>
                    </div>
                </section>

                <section className="bg-white/40 dark:bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl md:col-span-2 mt-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h2>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            const name = formData.get("name");
                            const email = formData.get("email");
                            const message = formData.get("message");
                            const mailtoLink = `mailto:wisdomfreeman34@gmail.com?subject=Message from ${name}&body=From: ${name} (${email})%0A%0A${message}`;
                            window.location.href = mailtoLink;
                            alert("Opening your email client...");
                        }}
                        className="space-y-4"
                    >
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                required
                                className="w-full px-6 py-4 rounded-2xl bg-white/60 dark:bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white"
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                required
                                className="w-full px-6 py-4 rounded-2xl bg-white/60 dark:bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            required
                            className="w-full px-6 py-4 rounded-2xl bg-white/60 dark:bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white"
                        ></textarea>
                        <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30">
                            Send Message
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
}


