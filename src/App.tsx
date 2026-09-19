import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Differentiators } from './components/Differentiators';
import { Typologies } from './components/Typologies';
import { Amenities } from './components/Amenities';
import { LocationSection } from './components/LocationSection';
import { Calculator } from './components/Calculator';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingCta } from './components/FloatingCta';

export default function App() {
  return (
    <div id="landing-page-root" className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-amber-400 selection:text-neutral-950">
      {/* Top sticky navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <Differentiators />
        <Typologies />
        <Amenities />
        <LocationSection />
        <Calculator />
        <Gallery />
        <FAQ />
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent floating CTA on scroll */}
      <FloatingCta />
    </div>
  );
}
