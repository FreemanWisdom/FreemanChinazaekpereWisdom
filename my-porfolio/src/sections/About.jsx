import { profile } from "../data/profile";

export default function About() {
  return (
    <div className="overflow-hidden px-6 py-24 md:px-10 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="lg:flow-root">
          {/* Circular Profile Image (Floated on lg+) */}
          <div className="relative mb-12 lg:float-right lg:ml-16 lg:mb-8 w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] mx-auto scale-95 lg:scale-100">
            <div className="absolute inset-0 rounded-full bg-[var(--color-accent)]/20 blur-[90px] scale-110" />
            
            <div className="group relative h-full w-full overflow-hidden rounded-full border-[6px] border-[var(--color-secondary)]/80 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-[var(--color-accent)]/30">
              <img
                src="/assets/images/my profile image.jpeg"
                alt={profile.name}
                width="896"
                height="1195"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/40 to-transparent opacity-50" />
            </div>

            {/* Content Under Image (Now a compact pill/stat instead of a big card) */}
            <div className="absolute -bottom-6 left-1/2 w-[92%] max-w-[18rem] -translate-x-1/2 sm:max-w-[20rem] md:w-auto md:max-w-none">
              <div className="panel flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[var(--color-secondary)]/90 px-4 py-2.5 text-center shadow-xl transition-all hover:-translate-y-1 hover:border-[var(--color-accent)]/30 sm:gap-3 sm:rounded-full sm:px-6 sm:py-3">
                <div className="h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <p className="text-[10px] font-black uppercase leading-relaxed tracking-[0.16em] text-white whitespace-normal sm:text-[11px] sm:tracking-[0.2em] sm:whitespace-nowrap">
                  Founder of Codecrafting
                </p>
              </div>
            </div>
          </div>

          {/* Main Story Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="section-eyebrow text-[var(--color-accent)] font-black uppercase tracking-[0.4em] text-xs">
                About Me
              </p>
              <h2 className="text-4xl font-black text-white md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
                Bridging the gap between <br />
                <span className="text-[var(--color-accent)]">Design & Engineering</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-[var(--color-muted)] font-medium">
              <p>
                I am a <span className="text-white font-bold">Front-End Developer</span> specialized in building high-performance 
                interfaces using React 19, Next.js, and TypeScript. As the founder of 
                <span className="text-[var(--color-accent)] text-white/95"> Codecrafting</span>, I approach 
                every project with a dual perspective: the precision of an engineer and the 
                eye of a designer.
              </p>
              
              <p>
                My background in <span className="text-white">Graphic Design</span> isn't just a 
                secondary skill—it's the foundation of my technical work. It ensures that 
                clarity, visual hierarchy, and interaction quality are built into the 
                architecture from day one, not just painted on at the end.
              </p>

              <p>
                Whether I'm optimizing a Next.js payload or refining a Tailwind 
                utility system, my focus remains the same: delivering 
                <span className="text-white italic"> seamless, human-centered experiences</span> 
                that are as maintainable as they are beautiful.
              </p>
              
              <p>
                Driven by a commitment to <span className="text-[var(--color-accent)] font-bold">continuous learning</span>, 
                I constantly refine my technical toolkit to stay at the forefront of the 
                rapidly evolving frontend landscape. I believe that true innovation happens 
                where aesthetics and functionality meet, and I strive to push those boundaries 
                in every line of code I write.
              </p>

              <p>
                With a deep focus on <span className="text-white">Performance Optimization</span> and 
                <span className="text-white"> User-Centered Thinking</span>, my goal is to 
                create digital environments that feel as good as they look—fast, accessible, 
                and inherently intuitive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
