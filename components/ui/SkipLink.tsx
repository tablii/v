
import React from 'react';

export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-white text-black px-4 py-2 rounded-lg shadow"
    >
      Skip to content
    </a>
  );
}
