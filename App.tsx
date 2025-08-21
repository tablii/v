
import React from 'react';
import { SkipLink } from './components/ui/SkipLink';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#C9A15B] selection:text-black">
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
