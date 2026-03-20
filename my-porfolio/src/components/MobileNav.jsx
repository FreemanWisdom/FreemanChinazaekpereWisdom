import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { profile } from "../data/profile";

const SOCIAL_LINKS = [
  { label: "GitHub", href: profile.socials.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: FaLinkedin },
  { label: "WhatsApp", href: profile.socials.whatsapp, icon: FaWhatsapp },
];

export default function MobileNav({
  items,
  activeSection,
  isOpen,
  onClose,
  onToggle,
  onNavigate,
}) {
  const handleNavigate = (sectionId) => {
    onNavigate(sectionId);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/5 bg-[var(--color-primary)]/90 px-5 py-2 backdrop-blur-xl lg:hidden">
        <button 
          type="button" 
          onClick={() => onNavigate("home")} 
          className="flex items-center transition-transform hover:scale-105"
        >
          <img 
            src="/assets/images/logo.png" 
            alt="Logo" 
            className="h-28 sm:h-32 w-auto object-contain" 
          />
        </button>

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.05]"
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-[#050b14]/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-[min(84vw,20rem)] flex-col border-l border-white/5 bg-[#050b14]/95 backdrop-blur-3xl px-6 pb-6 pt-20 shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <nav className="space-y-2" aria-label="Mobile section navigation">
          {items.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className={`flex w-full items-center justify-between rounded-xl px-5 py-3.5 text-left transition-all duration-200 active:scale-[0.97] ${
                  isActive
                    ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)] shadow-[inset_0_0_0_1px_rgba(245,117,31,0.2)]"
                    : "bg-white/[0.02] text-[#8ca3c2] hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <div>
                  <span className={`block text-[15px] font-bold transition-colors ${isActive ? "text-white" : ""}`}>
                    {item.label}
                  </span>
                  <span className="mt-0.5 block text-[8px] font-bold uppercase tracking-[0.15em] opacity-40">
                    {item.kicker}
                  </span>
                </div>

                <div className={`h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`} />
              </button>
            );
          })}
        </nav>

        <div className="mt-auto space-y-5 border-t border-white/5 pt-6">
          <div className="grid grid-cols-2 gap-3">
            <a
              href="/assets/resume/MY RESUME (1).pdf"
              download
              className="flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-4 py-3 text-[11px] font-black uppercase tracking-widest text-[#050b14] transition-all duration-200 hover:shadow-[0_6px_16px_rgba(255,122,0,0.3)] active:scale-95"
            >
              Resume
            </a>
            <button
              onClick={() => handleNavigate("contact")}
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[11px] font-black uppercase tracking-widest text-white transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06] active:scale-95"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center justify-center gap-5">
            {SOCIAL_LINKS.map((socialLink) => {
              const IconComponent = socialLink.icon;

              return (
                <a
                  key={socialLink.label}
                  href={socialLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialLink.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/[0.03] text-[#8ca3c2] transition-all hover:-translate-y-1 hover:text-[var(--color-accent)]"
                >
                  <IconComponent size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
