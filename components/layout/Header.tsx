import React, { useState } from 'react';

const navLinkClasses = "text-neutral-200 hover:text-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A15B] rounded-xl px-2 py-1";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800/80 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="group inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A15B] rounded-xl"
          aria-label="VISOMATIC home"
        >
          <div
            aria-hidden
            className="h-8 w-8 grid place-items-center rounded-lg border border-neutral-800 text-[#C9A15B]"
          >
            <span className="font-extrabold tracking-tight">V</span>
          </div>
          <span className="font-black text-lg tracking-wide text-[#C9A15B]">
            VISOMATIC
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          <a href="#services" className={navLinkClasses}>Services</a>
          <a href="#portfolio" className={navLinkClasses}>Portfolio</a>
          <a href="#about" className={navLinkClasses}>About</a>
          <a href="#contact" className={navLinkClasses}>Contact</a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-xl border border-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A15B]"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Menu</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-neutral-800">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            <a href="#services" className={navLinkClasses}>Services</a>
            <a href="#portfolio" className={navLinkClasses}>Portfolio</a>
            <a href="#about" className={navLinkClasses}>About</a>
            <a href="#contact" className={navLinkClasses}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
