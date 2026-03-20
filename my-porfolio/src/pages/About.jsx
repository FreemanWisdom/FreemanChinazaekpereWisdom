import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { education } from "../data/education";
import { interests } from "../data/interests";
import { certifications } from "../data/certifications";

export default function About() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedCert ? "hidden" : "";

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setSelectedCert(null);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

  return (
    <div className="page-enter mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
      <div className="mb-12 max-w-3xl">
        <p className="section-eyebrow">About</p>
        <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
          Design-minded frontend work rooted in clarity, speed, and maintainable structure.
        </h2>
        <p className="mt-6 text-lg leading-8 text-[#9db2ce]">{profile.about}</p>
      </div>

      <section className="panel mb-10 p-8 sm:p-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="panel p-5">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Base
            </p>
            <p className="mt-3 text-lg font-semibold text-white">{profile.location}</p>
          </div>

          <div className="panel p-5">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Approach
            </p>
            <p className="mt-3 text-lg font-semibold text-white">Performance-first execution</p>
          </div>

          <div className="panel p-5">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Focus
            </p>
            <p className="mt-3 text-lg font-semibold text-white">Readable, scalable components</p>
          </div>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="panel p-8 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Education
          </p>
          <div className="mt-8 space-y-6">
            {education.map((edu, index) => (
              <article key={index} className="border-l border-[var(--color-accent)]/40 pl-5">
                <h3 className="text-xl font-semibold text-white">{edu.program}</h3>
                <p className="mt-2 text-base text-[#9db2ce]">{edu.institution}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  {edu.date}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel p-8 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Interests
          </p>
          <div className="mt-8 panel p-6 border-white/5">
            <p className="text-lg italic leading-8 text-[var(--color-text)]">"{interests}"</p>
          </div>
        </section>
      </div>

      <section className="mt-16">
        <div className="mb-8 max-w-2xl">
          <p className="section-eyebrow">Certifications</p>
          <h3 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Credentials that reinforce the craft behind the interface.
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedCert(cert)}
              className="panel panel-hover group overflow-hidden text-left"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold text-white">{cert.title}</h4>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  {cert.organization}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedCert && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[var(--color-primary)]/85 p-4 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="panel relative w-full max-w-5xl overflow-hidden p-3"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[var(--color-secondary)]/80 text-white transition-colors hover:text-[var(--color-accent)]"
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate preview"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              loading="eager"
              decoding="async"
              className="max-h-[80vh] w-full rounded-[1.5rem] object-contain"
            />

            <div className="px-4 pb-4 pt-5 text-center">
              <h4 className="text-2xl font-bold text-white">{selectedCert.title}</h4>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {selectedCert.organization}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
