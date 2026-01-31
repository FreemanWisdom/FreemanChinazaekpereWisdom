import { profile } from "../data/profile";

export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 page-enter">
            <h1 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Get In Touch</h1>

            <div className="grid md:grid-cols-2 gap-12">
                <section className="bg-white/40 dark:bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Info</h2>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400">
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
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                                📞
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Phone</p>
                                <p className="font-bold text-gray-900 dark:text-white">{profile.phone}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-400">
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
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-6 py-4 rounded-2xl bg-white/60 dark:bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-6 py-4 rounded-2xl bg-white/60 dark:bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="4"
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

