import React, { useState } from 'react';
import { Section } from '../layout/Section';
import { CTA } from '../ui/CTA';

interface PortfolioItem {
  id: string;
  title: string;
  thumb?: string;
  alt?: string;
}

export function Portfolio() {
  const items: PortfolioItem[] = []; // No items yet
  const [active, setActive] = useState<string | null>(null);

  const open = (id: string) => {
    if (items.length === 0) return; // disabled until assets exist
    setActive(id);
  };

  const close = () => setActive(null);

  return (
    <Section id="portfolio" eyebrow="Portfolio" title="Selected work">
      {items.length === 0 ? (
        <div className="rounded-3xl border border-neutral-800 p-10 text-center">
          <p className="text-neutral-300">
            Portfolio is being curated. Want examples relevant to your niche? Send a note and we will share private links.
          </p>
          <div className="mt-6">
            <CTA href="#contact" ariaLabel="Request samples">Request samples</CTA>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => open(it.id)}
              className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A15B]"
            >
              <div className="absolute inset-0 grid place-items-center bg-neutral-950">
                <span className="text-neutral-400">Preview</span>
              </div>
              <div
                className="pointer-events-none absolute inset-0 grid place-items-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden
              >
                <span className="text-sm font-semibold text-[#C9A15B]">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
          onClick={close}
        >
          <div className="max-w-5xl w-full rounded-2xl border border-neutral-800 bg-neutral-950" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-neutral-800">
              <h4 className="text-white font-bold">Preview</h4>
              <button
                aria-label="Close"
                className="rounded-lg p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A15B]"
                onClick={close}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </div>
            <div className="p-6 text-neutral-300">Media goes here when ready.</div>
          </div>
        </div>
      )}
    </Section>
  );
}