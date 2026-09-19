import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** 'soft' adds a slight blur-in, matching the reference site's scroll reveals. */
  variant?: 'soft' | 'plain';
};

const EASE = [0.23, 1, 0.32, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
  variant = 'soft'
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 22,
        filter: variant === 'soft' ? 'blur(6px)' : 'blur(0px)'
      }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.3, delay, ease: EASE }}>
      
      {children}
    </motion.div>);

}

export function Eyebrow({ children }: {children: React.ReactNode;}) {
  return (
    <p className="text-sm font-medium text-ink-400">{children}</p>);

}