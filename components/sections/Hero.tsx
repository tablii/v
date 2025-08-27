import React from 'react';
import { CTA } from '../ui/CTA';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate mx-auto max-w-6xl px-4 pt-20 pb-28 md:pt-24 md:pb-36"
      aria-label="Hero"
    >
      <div className="mb-10 inline-flex items-center gap-3">
        <div className="h-10 w-10 grid place-items-center rounded-xl border border-neutral-800 text-[#C9A15B]" aria-hidden>
          <span className="font-black text-xl">V</span>
        </div>
        <span className="font-black text-xl tracking-wide text-[#C9A15B]">
          VISOMATIC
        </span>
      </div>


      <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl">
        High-end editing for visual creators
      </h1>

      <p className="mt-6 text-neutral-300 max-w-2xl text-base md:text-lg leading-relaxed">
        Precision. Pace. Taste. We shape your footage into work that feels intentional.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <CTA href="#contact" ariaLabel="Request a quote">
          Request a quote
        </CTA>
        <CTA variant="secondary" href="#portfolio" ariaLabel="See portfolio">
          See portfolio
        </CTA>
      </div>

      {/* Subtle grid accent */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30" aria-hidden>
        <svg className="absolute inset-0 h-full w-full">
          <defs>
            <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M24 0H0V24" stroke="#222" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
}
