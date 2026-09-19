import React from 'react';
import { roles } from '../data/resume';
import { Eyebrow, Reveal } from './Reveal';

export function Experience() {
  return (
    <section id="experience" className="bg-mist scroll-mt-24">
      <div className="mx-auto max-w-shell px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="text-center">
          <Eyebrow>Career</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tightest text-ink md:text-6xl">
            Three companies. One continuous thread.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
            Owning critical backend modules end to end — and staying close to
            them once they are live.
          </p>
        </Reveal>

        <ol className="mt-16 space-y-6">
          {roles.map((role, i) =>
          <li
            key={role.company}
            className="sticky"
            style={{ top: `${92 + i * 26}px` }}>
            
              <Reveal delay={i * 0.04}>
                <article className="grid gap-8 rounded-panel border border-ink/5 bg-paper p-8 shadow-lift md:grid-cols-12 md:p-12">
                  <div className="md:col-span-4">
                    <p className="text-sm font-medium text-ink-400">
                      {role.period}
                    </p>
                    <p className="mt-1 text-sm text-ink-400">{role.span}</p>
                    <h3
                    className={`mt-6 font-display font-medium leading-[1.05] tracking-tightest text-ink ${
                    i === 0 ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'}`
                    }>
                    
                      {role.company}
                    </h3>
                  </div>

                  <div className="md:col-span-3">
                    <p className="text-base font-medium text-ink">{role.role}</p>
                    <p className="mt-2 text-sm text-ink-400">{role.location}</p>
                  </div>

                  <p className="text-base leading-relaxed text-ink-600 md:col-span-5">
                    {role.note}
                  </p>
                </article>
              </Reveal>
            </li>
          )}
        </ol>
      </div>
    </section>);

}