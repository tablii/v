import React from 'react';
import { Section } from '../layout/Section';

const items = [
  {
    title: "Video Editing",
    desc: "Narrative, social, commercials, and YouTube. Tight pacing and story clarity.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M10 9l5 3-5 3V9z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Motion Graphics",
    desc: "Clean typography, logo stings, lower thirds, and explainer elements.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M12 4v8l6 6" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Color Grading",
    desc: "Consistent tone, rich contrast, proper skin tones, and delivery-safe outputs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />
        <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export function Services() {
  const handleRequestService = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section id="services" eyebrow="Services" title="What we do">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <div
            key={s.title}
            className="group rounded-3xl border border-neutral-800 p-6 transition-colors hover:border-neutral-600 focus-within:border-neutral-600"
            role="article"
          >
            <div className="h-12 w-12 grid place-items-center rounded-xl border border-neutral-800 mb-4 text-[#C9A15B]">
              {s.icon}
            </div>
            <h3 className="text-xl font-bold text-white">{s.title}</h3>
            <p className="mt-2 text-neutral-300 leading-relaxed">{s.desc}</p>
            <div className="mt-4">
              <button
                className="text-sm underline decoration-[#C9A15B] underline-offset-4 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A15B] rounded"
                onClick={handleRequestService}
              >
                Request this service
              </button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}