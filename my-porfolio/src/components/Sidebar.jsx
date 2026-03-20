import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { profile } from "../data/profile";

const SOCIAL_LINKS = [
  { label: "GitHub", href: profile.socials.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: FaLinkedin },
  { label: "WhatsApp", href: profile.socials.whatsapp, icon: FaWhatsapp },
];

export default function Sidebar({ items, activeSection, onNavigate }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden h-screen w-72 flex-col border-r border-white/5 bg-[var(--color-primary)]/80 px-6 py-3 backdrop-blur-[32px] lg:flex lg:overflow-y-auto xl:w-80">
      {/* Top Section */}
      <div className="flex flex-col gap-2.5">
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="group transition-all duration-300 hover:opacity-100"
            aria-label="Scroll to Home"
          >
            <img 
              src="/assets/images/logo-optimized.png" 
              alt="Logo" 
              width="768"
              height="512"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-48 xl:h-52 w-auto object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(255,122,0,0.25)]" 
            />
          </button>
        </div>

        <nav className="flex flex-col gap-0.5" aria-label="Section navigation">
          {items.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                aria-current={isActive ? "location" : undefined}
                className={`group flex w-full items-center gap-3 rounded-lg px-4 py-1.5 text-left transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)] shadow-[inset_0_0_0_1px_rgba(255,122,0,0.15)]"
                    : "text-[var(--color-muted)] hover:bg-white/[0.04] hover:text-[var(--color-text)] hover:translate-x-1 active:scale-[0.97]"
                }`}
              >
                <div className="flex flex-col">
                  <span className={`text-[15px] font-bold leading-tight transition-colors xl:text-[16px] ${isActive ? "text-[var(--color-text)]" : ""}`}>
                    {item.label}
                  </span>
                  <span className="text-[8px] font-bold uppercase tracking-[0.18em] opacity-35 xl:text-[9px]">
                    {item.kicker}
                  </span>
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section: Compact Layout */}
      <div className="mt-auto flex flex-col gap-2.5 pt-3">
        <div className="grid grid-cols-2 gap-2 border-t border-white/5 pt-2.5">
          <a
            href="/assets/resume/MY RESUME (1).pdf"
            download
            className="flex items-center justify-center rounded-xl bg-[var(--color-accent)] py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[var(--color-primary)] transition-all duration-200 hover:scale-105 hover:shadow-[0_8px_20px_rgba(255,122,0,0.25)] active:scale-95"
          >
            Resume
          </a>
          <button
            onClick={() => onNavigate("contact")}
            className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[var(--color-text)] transition-all duration-200 hover:scale-105 hover:bg-white/[0.05] hover:border-white/20 active:scale-95"
          >
            Contact
          </button>
        </div>

        <div className="flex items-center justify-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-1.5">
          {SOCIAL_LINKS.map((socialLink) => {
            const IconComponent = socialLink.icon;
            return (
              <a
                key={socialLink.label}
                href={socialLink.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialLink.label}
                className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-muted)] transition-all hover:scale-110 hover:text-[var(--color-accent)]"
              >
                <IconComponent size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
