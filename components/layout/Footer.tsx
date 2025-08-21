
import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-neutral-800/80">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} VISOMATIC. All rights reserved.</p>
        <nav aria-label="Footer" className="flex items-center gap-6">
          <a href="#services" className="text-sm text-neutral-400 hover:text-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A15B] rounded">Services</a>
          <a href="#portfolio" className="text-sm text-neutral-400 hover:text-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A15B] rounded">Portfolio</a>
          <a href="#about" className="text-sm text-neutral-400 hover:text-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A15B] rounded">About</a>
          <a href="#contact" className="text-sm text-neutral-400 hover:text-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A15B] rounded">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
