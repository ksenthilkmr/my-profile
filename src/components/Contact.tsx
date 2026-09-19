import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { profile } from '../data/resume';
import { Eyebrow, Reveal } from './Reveal';

const channels = [
{ label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
{ label: 'Mobile', value: profile.phone, href: `tel:${profile.phoneHref}` },
{ label: 'Location', value: profile.location, href: undefined }];


export function Contact() {
  return (
    <section id="contact" className="bg-paper scroll-mt-24">
      <div className="mx-auto max-w-shell px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="text-center">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.02] tracking-tightest text-ink md:text-6xl lg:text-7xl">
            Let’s build something built to last.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
            Open to senior backend and platform engineering roles — remote,
            hybrid or on-site. Email is the fastest way to reach me.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors duration-150 ease-lux hover:bg-ink-800">
            
            {profile.email}
            <ArrowUpRightIcon
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-150 ease-lux group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            
          </a>
        </Reveal>

        <Reveal delay={0.08}>
          <dl className="mx-auto mt-16 grid max-w-3xl gap-8 rounded-panel bg-mist p-8 text-center sm:grid-cols-3 md:p-10">
            {channels.map(({ label, value, href }) =>
            <div key={label}>
                <dt className="text-xs font-medium text-ink-400">{label}</dt>
                <dd className="mt-3 text-base text-ink">
                  {href ?
                <a
                  href={href}
                  className="transition-opacity duration-150 ease-lux hover:opacity-60">
                  
                      {value}
                    </a> :

                value
                }
                </dd>
              </div>
            )}
          </dl>
        </Reveal>
      </div>
    </section>);

}