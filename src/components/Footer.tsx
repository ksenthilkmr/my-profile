import React from 'react';
import { footerGroups, profile } from '../data/resume';
import { Reveal } from './Reveal';

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-ink/5 bg-paper">
      <div className="mx-auto max-w-shell px-6 pt-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="font-display text-2xl font-medium leading-snug tracking-tight text-ink">
              {profile.name}
            </p>
            <p className="mt-3 max-w-xs text-base leading-relaxed text-ink-600">
              {profile.title}, based in {profile.location}. Available for senior
              backend and platform roles.
            </p>
          </Reveal>

          {footerGroups.map((group, i) =>
          <Reveal key={group.title} delay={0.04 * (i + 1)} className="md:col-span-2">
              <p className="text-xs font-medium text-ink-400">{group.title}</p>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) =>
              <li key={link.label}>
                    <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  className="text-sm text-ink-600 transition-colors duration-150 ease-lux hover:text-ink">
                  
                      {link.label}
                    </a>
                  </li>
              )}
              </ul>
            </Reveal>
          )}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ink/5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-400">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a
            href="#top"
            className="text-sm text-ink-400 transition-colors duration-150 ease-lux hover:text-ink">
            
            Back to top
          </a>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="select-none whitespace-nowrap px-4 text-center font-display text-[13vw] font-medium leading-[0.8] tracking-tightest text-mist-200">
        
        Senthil Kumar K
      </p>
    </footer>);

}