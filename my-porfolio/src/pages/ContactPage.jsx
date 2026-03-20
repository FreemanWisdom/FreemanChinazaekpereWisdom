import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { profile } from "../data/profile";

const SOCIAL_LINKS = [
  { label: "GitHub", href: profile.socials.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: FaLinkedin },
  { label: "WhatsApp", href: profile.socials.whatsapp, icon: FaWhatsapp },
];

const INPUT_STYLES =
  "w-full rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-secondary)]/50 px-5 py-4 text-base text-[#7790b1] outline-none transition-all duration-300 placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]/40 focus:ring-2 focus:ring-[var(--color-accent)]/20";

export default function ContactPage() {
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const mailtoLink = `mailto:${profile.email}?subject=Message from ${name}&body=From: ${name} (${email})%0A%0A${message}`;

    setStatusMessage("Your email client should open with the message pre-filled.");
    event.currentTarget.reset();
    window.location.href = mailtoLink;
  };

  return (
    <div className="page-enter mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
      <div className="mb-12 max-w-3xl">
        <p className="section-eyebrow">Contact</p>
        <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
          Let&apos;s turn the next idea into a fast, polished product experience.
        </h2>
      </div>

      <div className="grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-8">
          <section className="panel p-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Direct Contact
            </p>

            <div className="mt-8 space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="block panel panel-hover p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8ca3c2]">
                  Email
                </p>
                <p className="mt-3 text-lg font-semibold text-white">{profile.email}</p>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="block panel panel-hover p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8ca3c2]">
                  Phone
                </p>
                <p className="mt-3 text-lg font-semibold text-white">{profile.phone}</p>
              </a>

              <div className="panel p-5">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8ca3c2]">
                  Location
                </p>
                <p className="mt-3 text-lg font-semibold text-white">{profile.location}</p>
              </div>
            </div>
          </section>

          <section className="panel p-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Socials
            </p>

            <div className="mt-8 space-y-4">
              {SOCIAL_LINKS.map((socialLink) => {
                const IconComponent = socialLink.icon;

                return (
                  <a
                    key={socialLink.label}
                    href={socialLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialLink.label}
                    className="flex items-center gap-4 panel panel-hover p-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)]/12 text-[var(--color-accent)]">
                      <IconComponent />
                    </div>
                    <span className="text-base font-semibold text-white">
                      {socialLink.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        </div>

        <section className="panel p-8 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Send a Message
          </p>
          <h3 className="mt-4 text-3xl font-black text-white">Share the project scope</h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#7790b1]">
            A quick outline of the goal, audience, and timeline is enough to start the
            conversation.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className={INPUT_STYLES}
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className={INPUT_STYLES}
              />
            </div>

            <textarea
              name="message"
              placeholder="Tell me about the project, challenge, or feature you need."
              rows="6"
              required
              className={INPUT_STYLES}
            />

            <button
              type="submit"
              className="inline-flex rounded-full bg-[var(--color-accent)] px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] transition-transform duration-300 hover:-translate-y-1"
            >
              Email Me
            </button>
          </form>
          <p className="mt-4 text-sm text-[#9db2ce]">
            I typically respond within 24 hours
          </p>

          <p aria-live="polite" className="mt-4 text-sm text-[#ee8a38]">
            {statusMessage}
          </p>
        </section>
      </div>
    </div>
  );
}
