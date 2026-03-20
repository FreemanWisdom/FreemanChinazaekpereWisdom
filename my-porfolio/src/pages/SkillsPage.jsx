import { skills } from "../data/skills";

export default function SkillsPage() {
  return (
    <div className="page-enter mx-auto max-w-6xl px-6 py-12 md:px-10 lg:px-12">
      <div className="mb-8 max-w-3xl">
        <p className="section-eyebrow">Skills</p>
        <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
          Frontend systems that balance visual polish with production discipline.
        </h2>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="panel p-8 sm:p-10">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Technical Skills
              </p>
              <h3 className="mt-4 text-3xl font-black text-white">Core frontend toolkit</h3>
            </div>
            <p className="hidden max-w-xs text-sm leading-7 text-[#8ca3c2] md:block">
              Reusable UI, responsive layouts, and modern React workflows built for shipping.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.technical.map((skill, index) => (
              <article
                key={index}
                className="group panel panel-hover p-8"
              >
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[var(--color-primary)] p-3 shadow-lg">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-black tracking-tight text-white mb-2">
                      {skill.name}
                    </h4>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel p-8 sm:p-10">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[var(--color-accent)]">
            Professional Skills
          </p>
          <h3 className="mt-6 text-3xl font-black text-white tracking-tight">How I work</h3>

          <div className="mt-8 space-y-3 max-w-2xl">
            {skills.professional.map((skill, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-4 flex items-center gap-4 transition-all duration-200 hover:bg-white/[0.05] hover:border-[var(--color-accent)]/20 active:scale-[0.99]"
              >
                <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <p className="text-[15px] font-bold text-white/90">{skill}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
