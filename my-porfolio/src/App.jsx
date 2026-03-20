import { startTransition, useEffect, useState } from "react";
import Space from "./backgrounds/Space";
import MobileNav from "./components/MobileNav";
import Sidebar from "./components/Sidebar";
import Loader from "./components/loader";
import ScrollReveal from "./components/ScrollReveal";
import ProjectDetails from "./pages/ProjectDetails";
import About from "./sections/About";
import ExperienceTimeline from "./sections/ExperienceTimeline";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Hero from "./sections/Hero";

const NAV_ITEMS = [
  { id: "home", label: "Home", kicker: "Intro" },
  { id: "about", label: "About", kicker: "Story" },
  { id: "experience", label: "Experience", kicker: "Growth" },
  { id: "skills", label: "Skills", kicker: "Stack" },
  { id: "projects", label: "Projects", kicker: "Work" },
  { id: "contact", label: "Contact", kicker: "Reach out" },
];

function scrollToSection(sectionId, { closeMobileNav, setActiveSection, behavior = "smooth" }) {
  const target = document.getElementById(sectionId);

  if (!target) {
    return;
  }

  const offset = window.innerWidth >= 1024 ? 0 : 80;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.history.replaceState(null, "", `#${sectionId}`);
  closeMobileNav();
  startTransition(() => {
    setActiveSection(sectionId);
  });
  window.scrollTo({ top, behavior });
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const overflow = isMobileNavOpen ? "hidden" : "";
    document.body.style.overflow = overflow;

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileNavOpen]);

  const navigateToSection = (sectionId) => {
    if (selectedProjectId) {
      setSelectedProjectId(null);
      // Small delay to allow Re-rendering before scrolling
      setTimeout(() => {
        scrollToSection(sectionId, {
          closeMobileNav: () => setIsMobileNavOpen(false),
          setActiveSection,
        });
      }, 50);
    } else {
      scrollToSection(sectionId, {
        closeMobileNav: () => setIsMobileNavOpen(false),
        setActiveSection,
      });
    }
  };

  const handleViewProject = (id) => {
    setSelectedProjectId(id);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleBackToProjects = () => {
    setSelectedProjectId(null);
    // Use a small timeout to ensure DOM is updated before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "instant" });
      }
    }, 0);
  };

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        scrollableHeight <= 0 ? 0 : (window.scrollY / scrollableHeight) * 100;

      startTransition(() => {
        setScrollProgress(Math.min(100, Math.max(0, nextProgress)));
      });
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  useEffect(() => {
    if (selectedProjectId) {
      return undefined;
    }

    const sections = Array.from(
      document.querySelectorAll("main section[data-section][id]")
    ).filter((section) => NAV_ITEMS.some((item) => item.id === section.id));

    if (!sections.length) {
      return undefined;
    }

    const updateActiveSectionFromScroll = () => {
      const probeY = window.innerWidth >= 1024
        ? Math.min(220, window.innerHeight * 0.32)
        : 110;

      const sectionAtProbe =
        sections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= probeY && rect.bottom >= probeY;
        }) ??
        [...sections].reverse().find((section) => section.getBoundingClientRect().top <= probeY) ??
        sections[0];

      if (!sectionAtProbe) {
        return;
      }

      startTransition(() => {
        setActiveSection((currentSection) =>
          currentSection === sectionAtProbe.id ? currentSection : sectionAtProbe.id
        );
      });
    };

    updateActiveSectionFromScroll();
    window.addEventListener("scroll", updateActiveSectionFromScroll, { passive: true });
    window.addEventListener("resize", updateActiveSectionFromScroll);

    return () => {
      window.removeEventListener("scroll", updateActiveSectionFromScroll);
      window.removeEventListener("resize", updateActiveSectionFromScroll);
    };
  }, [selectedProjectId]);

  useEffect(() => {
    if (isLoading) {
      return undefined;
    }

    const hash = window.location.hash.replace("#", "");

    if (!hash) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      scrollToSection(hash, {
        closeMobileNav: () => setIsMobileNavOpen(false),
        setActiveSection,
      });
    }, 50);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isLoading]);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--color-primary)] text-[var(--color-text)]">
      <Loader isVisible={isLoading} />
      <Space />

      <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-white/5">
        <div
          className="h-full bg-[var(--color-accent)] shadow-[0_0_28px_rgba(255,122,0,0.45)] transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Sidebar
        items={NAV_ITEMS}
        activeSection={activeSection}
        onNavigate={navigateToSection}
      />

      <MobileNav
        items={NAV_ITEMS}
        activeSection={activeSection}
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        onToggle={() => setIsMobileNavOpen((currentState) => !currentState)}
        onNavigate={navigateToSection}
      />

      <main className="relative pt-20 lg:ml-72 lg:pt-0 xl:ml-80">
        {selectedProjectId ? (
          <div className="page-enter min-h-screen">
            <ProjectDetails 
              projectId={selectedProjectId} 
              onBackToProjects={handleBackToProjects} 
            />
          </div>
        ) : (
          <>
            <section id="home" data-section className="scroll-mt-24 border-b border-white/10">
              <ScrollReveal>
                <Hero onNavigate={navigateToSection} />
              </ScrollReveal>
            </section>

            <section id="about" data-section className="scroll-mt-24 border-b border-white/10">
              <ScrollReveal>
                <About />
              </ScrollReveal>
            </section>

            <section id="experience" data-section className="scroll-mt-24 border-b border-white/10">
              <ScrollReveal>
                <ExperienceTimeline />
              </ScrollReveal>
            </section>

            <section id="skills" data-section className="scroll-mt-24 border-b border-white/10">
              <ScrollReveal>
                <SkillsPage />
              </ScrollReveal>
            </section>

            <section
              id="projects"
              data-section
              className="scroll-mt-24 border-b border-white/10"
            >
              <ScrollReveal>
                <ProjectsPage onViewProject={handleViewProject} />
              </ScrollReveal>
            </section>

            <section id="contact" data-section className="scroll-mt-24">
              <ScrollReveal>
                <ContactPage />
              </ScrollReveal>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
