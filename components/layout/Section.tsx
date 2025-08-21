
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useReveal } from '../../hooks/useReveal';

interface SectionProps {
  id: string;
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}

export function Section({ id, title, eyebrow, children }: SectionProps) {
  const prefersReduced = useReducedMotion();
  const { ref, shown } = useReveal();
  
  return (
    <section id={id} ref={ref} className="mx-auto max-w-6xl px-4 py-20">
      <motion.div
        initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        animate={shown ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mb-10">
          {eyebrow && (
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">{eyebrow}</p>
          )}
          {title && (
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {title}
            </h2>
          )}
        </div>
        {children}
      </motion.div>
    </section>
  );
}
