import React from 'react';
import { facts, profile, summary } from '../data/resume';
import { Eyebrow, Reveal } from './Reveal';
import { AsciiPhoto } from './AsciiPhoto';
import { withBase } from '../utils/basePath';

export function Profile() {
  return (
    <section id="profile" className="bg-paper scroll-mt-24">
      <div className="mx-auto max-w-shell px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="text-center">
          <Eyebrow>Introducing Senthil Kumar K</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tightest text-ink md:text-6xl">
            Systems that hold up when the traffic arrives.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
            {profile.lede}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-12 items-stretch">
          <Reveal delay={0.05} className="h-full lg:col-span-5">
            <AsciiPhoto
              src={withBase(profile.portrait || '/a.jpg')}
              alt="Senthil Kumar K - ASCII Dither Portrait"
              className="h-full min-h-[28rem] lg:min-h-full"
            />
          </Reveal>

          <Reveal delay={0.1} className="h-full lg:col-span-7">
            <div className="flex h-full flex-col justify-between rounded-panel bg-mist p-8 md:p-12">
              <div className="space-y-6">
                {summary.map((paragraph, i) =>
                <p
                  key={i}
                  className={
                  i === 0 ?
                  'font-display text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl' :
                  'text-base leading-relaxed text-ink-600'
                  }>
                  
                    {paragraph}
                  </p>
                )}
              </div>

              <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-ink/10 pt-8 sm:grid-cols-4">
                {facts.map((fact) =>
                <div key={fact.label}>
                    <dt className="text-xs font-medium text-ink-400">
                      {fact.label}
                    </dt>
                    <dd className="mt-2 text-sm font-medium leading-snug text-ink">
                      {fact.value}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}