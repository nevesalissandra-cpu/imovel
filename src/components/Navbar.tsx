import React, { useState, useEffect } from 'react';
import { Building2, Menu, X, ArrowUpRight, Phone, Sparkles } from 'lucide-react';
import { FORM_INTEREST_URL, PROJECT_INFO } from '../data/apartments';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Plantas', href: '#plantas' },
    { name: 'Lazer & Áreas', href: '#lazer' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Dúvidas', href: '#duvidas' },
  ];

  return (
    <>
      {/* Top announcement bar */}
      <div id="top-announcement-bar" className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-neutral-950 text-xs sm:text-sm font-semibold py-2 px-4 text-center flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 shrink-0" />
        <span>Condições especiais de lançamento: entrada facilitada em até 36x direto com a construtora.</span>
        <a
          id="top-bar-interest-link"
          href={FORM_INTEREST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-neutral-900 transition-colors font-bold ml-1 inline-flex items-center gap-0.5"
        >
          Garantir condição <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main sticky navigation */}
      <header
        id="main-header"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-3'
            : 'bg-neutral-950/70 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a id="brand-logo-link" href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-neutral-950 font-bold shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-bold text-lg sm:text-xl tracking-wider text-white flex items-center gap-1">
                LUMIÈRE
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              </span>
              <span className="text-[10px] text-amber-300/80 uppercase tracking-widest block font-medium">
                Residencial Premium
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                href={link.href}
                className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button: "Tenho Interesse" */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              id="header-phone-contact"
              href={FORM_INTEREST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-400 hover:text-neutral-200 hidden xl:flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Plantão de Vendas</span>
            </a>

            <a
              id="header-cta-interest-button"
              href={FORM_INTEREST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 bg-[length:200%_auto] hover:bg-right px-5 py-2.5 text-neutral-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2"
            >
              <span>Tenho Interesse</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="mobile-header-interest-btn"
              href={FORM_INTEREST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-amber-400 text-neutral-950 font-bold text-xs shadow-md"
            >
              Tenho Interesse
            </a>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-menu-drawer" className="lg:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-3 pb-6 mt-3 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-nav-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-900 hover:text-amber-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-800">
              <a
                id="mobile-drawer-interest-cta"
                href={FORM_INTEREST_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-950 font-bold text-sm shadow-lg shadow-amber-500/25"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-neutral-500 mt-2">
                Receba tabelas, plantas e consultoria exclusiva
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
