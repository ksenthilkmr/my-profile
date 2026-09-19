import React from 'react';
import { marqueeTech } from '../data/resume';

export function TechMarquee() {
  const items = [...marqueeTech, ...marqueeTech];

  return (
    <div className="bg-paper pb-16">
      <p className="text-center text-sm font-medium text-ink-400">
        Built with a stack proven in production
      </p>
      <div aria-hidden="true" className="fade-x mt-8 overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
          {items.map((item, i) =>
          <span key={`${item}-${i}`} className="flex items-center gap-8">
              <span className="text-base text-ink-600">{item}</span>
              <span className="h-1 w-1 rounded-full bg-mist-400" />
            </span>
          )}
        </div>
      </div>
    </div>);

}