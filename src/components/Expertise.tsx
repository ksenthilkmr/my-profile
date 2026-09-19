import React from 'react';
import { AwardIcon, GraduationCapIcon } from 'lucide-react';
import { credentials, skillGroups } from '../data/resume';
import { Eyebrow, Reveal } from './Reveal';

export function Expertise() {
  return (
    <section id="expertise" className="bg-mist scroll-mt-24">
      <div className="mx-auto max-w-shell px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="text-center">
          <Eyebrow>Expertise</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tightest text-ink md:text-6xl">
            The toolkit.
          </h2>
        </Reveal>

        <div className="mt-16 overflow-hidden rounded-panel border border-ink/5 bg-paper">
          <dl>
            {skillGroups.map((group, i) =>
            <Reveal key={group.label} delay={Math.min(i, 5) * 0.03}>
                <div
                className={`grid gap-2 px-8 py-6 md:grid-cols-12 md:gap-8 md:px-12 ${
                i === 0 ? '' : 'border-t border-ink/5'}`
                }>
                
                  <dt className="text-sm font-medium text-ink-400 md:col-span-4">
                    {group.label}
                  </dt>
                  <dd className="text-lg leading-relaxed text-ink md:col-span-8">
                    {group.items.join(' · ')}
                  </dd>
                </div>
              </Reveal>
            )}
          </dl>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal className="h-full">
            <div className="flex h-full items-start gap-5 rounded-panel border border-ink/5 bg-paper p-8 md:p-10">
              <AwardIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 shrink-0 text-ink-400" />
              
              <div>
                <p className="text-xs font-medium text-ink-400">Certification</p>
                <p className="mt-3 font-display text-xl font-medium leading-snug text-ink">
                  {credentials.certification.name}
                </p>
                <p className="mt-2 text-sm text-ink-600">
                  {credentials.certification.issuer}
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05} className="h-full">
            <div className="flex h-full items-start gap-5 rounded-panel border border-ink/5 bg-paper p-8 md:p-10">
              <GraduationCapIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 shrink-0 text-ink-400" />
              
              <div>
                <p className="text-xs font-medium text-ink-400">Education</p>
                <p className="mt-3 font-display text-xl font-medium leading-snug text-ink">
                  {credentials.education.degree}
                </p>
                <p className="mt-2 text-sm text-ink-600">
                  {credentials.education.school} · {credentials.education.year}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}