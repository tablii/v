import React from 'react';
import { Section } from '../layout/Section';

function Stats() {
  const stats = [
    { k: "Avg. turnarounds", v: "3-5 days" },
    { k: "File formats", v: "H.264 1080p/Custom" },
    { k: "Delivery", v: "Custom" },
  ];
  return (
    <div className="rounded-3xl border border-neutral-800 p-6">
      <dl className="grid gap-4">
        {stats.map((s) => (
          <div key={s.k} className="flex items-center justify-between">
            <dt className="text-neutral-400">{s.k}</dt>
            <dd className="font-semibold text-white">{s.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Who we are">
      <div className="grid gap-10 md:grid-cols-2 items-start">
        <div>
          <p className="text-neutral-300 leading-relaxed">
            VISOMATIC is a small tech-editing studio focused on crisp cuts, clean graphics, and proper color. We work with creators and brands that care about detail and deadlines.
          </p>
          <p className="mt-4 text-neutral-300 leading-relaxed">
            Tools are just tools. Taste and process do the heavy lifting. We keep the stack lean and the communication clear so your project moves fast.
          </p>
        </div>
        <Stats />
      </div>
    </Section>
  );
}