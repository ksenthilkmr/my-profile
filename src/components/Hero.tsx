import React, { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform } from
'framer-motion';
import { profile } from '../data/resume';
import { withBase } from '../utils/basePath';

const EASE = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden bg-paper pt-24 sm:pt-28 pb-16 sm:pb-24 scroll-mt-24">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Calligraphy Monogram Symbol matching image.png top monogram "A" -> "S" */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: -10 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mb-2 flex justify-center">
          <span className="font-serif italic text-4xl sm:text-5xl font-medium tracking-wide text-ink select-none">
            S
          </span>
        </motion.div>

        {/* Hero Central Block with Positionally Centered Pill Portrait & Giant Lime Text */}
        <div className="relative mx-auto flex flex-col items-center justify-center my-4 sm:my-6">
          
          {/* Giant Lime Accent Typography matching image.png */}
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="relative z-0 select-none text-center font-display font-black text-[#c0e040] text-[15vw] sm:text-[13vw] md:text-[12vw] lg:text-[10.5rem] uppercase leading-[0.83] tracking-tighter w-full">
            <div>SENTHIL</div>
            <div>KUMAR</div>
          </motion.div>

          {/* Positionally Centered Stadium / Pill Portrait Image matching image.png */}
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.9, y: 10 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            style={reduceMotion ? undefined : { scale: imageScale, opacity: imageOpacity }}
            className="absolute inset-0 z-10 m-auto flex items-center justify-center pointer-events-none">
            
            <div className="pointer-events-auto relative w-[65px] h-[110px] sm:w-[90px] sm:h-[152px] md:w-[110px] md:h-[185px] lg:w-[129px] lg:h-[218px] rounded-full overflow-hidden bg-black shadow-2xl ring-4 ring-paper transition-transform duration-300 hover:scale-110 cursor-pointer">
              <img
                src={withBase(profile.portrait)}
                alt={`${profile.name}, Senior Java and Spring Boot Engineer`}
                className="h-full w-full object-cover object-[50%_15%]"
              />
            </div>
          </motion.div>

        </div>

        {/* Subtitle Tagline below / overlay matching image.png styling */}
        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.18, ease: EASE }}
          className="mx-auto mt-4 max-w-2xl text-xl sm:text-2xl font-light text-ink-600 tracking-tight">
          Designing resilient backend experiences in code.
        </motion.p>

        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.22, ease: EASE }}
          className="mt-3 text-sm font-medium text-ink-400">
          {profile.title} · {profile.location}
        </motion.p>

        <motion.h1
          initial={reduceMotion ? undefined : { opacity: 0, y: 18, filter: 'blur(6px)' }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.3, delay: 0.26, ease: EASE }}
          className="mx-auto mt-5 max-w-4xl font-display text-2xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Fourteen years of backend engineering behind high-traffic checkout & identity systems.
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3, ease: EASE }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3">
          
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors duration-150 ease-lux hover:bg-ink-800">
            Get in touch
          </a>
        </motion.div>

      </div>
    </section>
  );
}