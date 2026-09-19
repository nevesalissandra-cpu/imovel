import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, Building2 } from 'lucide-react';
import { FORM_INTEREST_URL, PROJECT_INFO } from '../data/apartments';

export const FloatingCta: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Desktop floating pill at bottom right */}
      <aside
        id="floating-desktop-cta"
        aria-label="Ação rápida de interesse"
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3 p-2 pl-4 rounded-2xl bg-neutral-900/95 backdrop-blur-md border border-amber-500/30 shadow-2xl shadow-amber-500/10 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center">
            <Building2 className="w-4 h-4" />
          </div>
          <div className="pr-1">
            <span className="text-xs font-bold text-white block leading-tight">{PROJECT_INFO.name}</span>
            <span className="text-[10px] text-amber-400 block font-medium">A partir de {PROJECT_INFO.startingPrice}</span>
          </div>
        </div>

        <a
          id="floating-interest-btn"
          href={FORM_INTEREST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-amber-500/30 inline-flex items-center gap-1.5 hover:scale-105 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tenho Interesse</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </aside>

      {/* Mobile sticky bottom bar */}
      <aside
        id="mobile-bottom-bar-cta"
        aria-label="Ação rápida de interesse móvel"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-neutral-950/95 backdrop-blur-lg border-t border-neutral-800 shadow-2xl flex items-center justify-between gap-3"
      >
        <div>
          <span className="text-xs font-bold text-white block leading-none">{PROJECT_INFO.name}</span>
          <span className="text-[11px] text-amber-400 font-medium">2 a 4 Quartos • {PROJECT_INFO.startingPrice}</span>
        </div>

        <a
          id="mobile-floating-interest-btn"
          href={FORM_INTEREST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-950 font-bold text-xs shadow-lg inline-flex items-center gap-1.5 shrink-0"
        >
          <span>Tenho Interesse</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </aside>
    </>
  );
};
