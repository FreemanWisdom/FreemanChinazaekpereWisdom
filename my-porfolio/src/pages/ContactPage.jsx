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
    <div className="page-enter mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-8 md:py-14 lg:px-10 lg:py-16 xl:px-12">
      <div className="mb-8 max-w-3xl sm:mb-10 lg:mb-12">
        <p className="section-eyebrow">Contact</p>
        <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
          Let&apos;s turn the next idea into a fast, polished product experience.
        </h2>
      </div>

      <div className="grid gap-6 lg:gap-8 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-5 sm:space-y-6 lg:space-y-8">
          <section className="panel p-6 sm:p-7 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Direct Contact
            </p>

            <div className="mt-6 space-y-4 sm:mt-7 sm:space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="block panel panel-hover p-4 sm:p-5"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8ca3c2] sm:text-xs">
                  Email
                </p>
                <p className="mt-2 break-all text-base font-semibold text-white sm:mt-3 sm:text-lg">
                  {profile.email}
                </p>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="block panel panel-hover p-4 sm:p-5"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8ca3c2] sm:text-xs">
                  Phone
                </p>
                <p className="mt-2 text-base font-semibold text-white sm:mt-3 sm:text-lg">
                  {profile.phone}
                </p>
              </a>

              <div className="panel p-4 sm:p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8ca3c2] sm:text-xs">
                  Location
                </p>
                <p className="mt-2 text-base font-semibold text-white sm:mt-3 sm:text-lg">
                  {profile.location}
                </p>
              </div>
            </div>
          </section>

          <section className="panel p-6 sm:p-7 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Socials
            </p>

            <div className="mt-6 space-y-3 sm:mt-7 sm:space-y-4">
              {SOCIAL_LINKS.map((socialLink) => {
                const IconComponent = socialLink.icon;

                return (
                  <a
                    key={socialLink.label}
                    href={socialLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialLink.label}
                    className="flex items-center gap-3 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/30 hover:bg-white/[0.05] sm:gap-4 sm:p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/12 text-[var(--color-accent)] sm:h-12 sm:w-12">
                      <IconComponent className="text-base sm:text-lg" />
                    </div>
                    <span className="text-sm font-semibold text-white sm:text-base">
                      {socialLink.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        </div>

        <section className="panel p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Send a Message
          </p>
          <h3 className="mt-4 text-2xl font-black text-white sm:text-3xl">
            Share the project scope
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#7790b1] sm:mt-4">
            A quick outline of the goal, audience, and timeline is enough to start the
            conversation.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
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
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] transition-transform duration-300 hover:-translate-y-1 sm:w-auto sm:justify-start sm:py-4"
            >
              Email Me
            </button>
          </form>
          <p className="mt-4 text-sm text-[#9db2ce]">
            I typically respond within 24 hours
          </p>

          <p aria-live="polite" className="mt-4 break-words text-sm text-[#ee8a38]">
            {statusMessage}
          </p>
        </section>
      </div>
    </div>
  );
}
