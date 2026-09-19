import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { navLinks } from '../data/resume';

const EASE = [0.23, 1, 0.32, 1] as const;

function Mark() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-7 w-7 items-center justify-center">
      
      <svg viewBox="0 0 28 28" className="h-6 w-6">
        <polygon
          points="9,2 19,2 26,9 26,19 19,26 9,26 2,19 2,9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5" />
        
      </svg>
    </span>);

}

export function Nav() {
  const reduceMotion = useReducedMotion();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 120 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const left = navLinks.slice(0, 2);
  const right = navLinks.slice(2);

  return (
    <motion.header
      animate={reduceMotion ? undefined : { y: hidden ? -88 : 0 }}
      transition={{ duration: 0.25, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      
      <nav
        aria-label="Primary"
        className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-ink/5 bg-paper/80 px-2 py-2 shadow-lift backdrop-blur-xl sm:gap-2 sm:px-3">
        
        {left.map((link) =>
        <a
          key={link.href}
          href={link.href}
          className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors duration-150 ease-lux hover:bg-mist hover:text-ink">
          
            {link.label}
          </a>
        )}

        <a
          href="#top"
          aria-label="Back to top"
          className="mx-1 text-ink transition-opacity duration-150 ease-lux hover:opacity-60">
          
          <Mark />
        </a>

        {right.map((link) =>
        <a
          key={link.href}
          href={link.href}
          className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors duration-150 ease-lux hover:bg-mist hover:text-ink">
          
            {link.label}
          </a>
        )}
      </nav>
    </motion.header>);

}