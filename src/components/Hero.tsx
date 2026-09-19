import React from 'react';
import { ArrowUpRight, Sparkles, MapPin, CheckCircle2, ShieldCheck, ChevronDown, Compass, Home } from 'lucide-react';
import { FORM_INTEREST_URL, PROJECT_INFO } from '../data/apartments';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-500/10 via-amber-700/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copywriting & High Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Project status badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{PROJECT_INFO.status} • {PROJECT_INFO.neighborhood}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Onde o design encontra a sua melhor versão de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                morar e investir.
              </span>
            </h1>

            {/* Subhead / Value Proposition */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed font-normal">
              Apartamentos sofisticados de <strong className="text-white font-semibold">2 a 4 quartos</strong> com suíte, varanda gourmet integrada e mais de 20 itens de lazer exclusivo no rooftop. Garanta as condições especiais de pré-lançamento.
            </p>

            {/* Quick check benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Entrada facilitada em até 36x sem juros bancários</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Utilize o seu saldo do FGTS na aquisição</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Opções de personalização de planta com garantia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>A 3 minutos do metrô e dos melhores restaurantes</span>
              </div>
            </div>

            {/* Primary Action Button Box */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="hero-tenho-interesse-cta"
                href={FORM_INTEREST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 bg-[length:200%_auto] hover:bg-right text-neutral-950 font-bold text-base sm:text-lg shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                id="hero-ver-plantas-btn"
                href="#plantas"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/80 text-neutral-200 font-semibold text-sm sm:text-base hover:text-white transition-colors"
              >
                <Home className="w-4 h-4 text-amber-400" />
                <span>Conhecer Plantas</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>

            {/* Form notice guarantee */}
            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Atendimento imediato e seguro. Link direto para o formulário oficial de interesse.</span>
            </div>
          </div>

          {/* Right Column: Hero Visual with floating architectural cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/30 to-amber-700/30 rounded-3xl blur-lg -z-10 opacity-70"></div>

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-700/80 shadow-2xl bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
                  alt="Fachada do Residencial Lumière"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>

                {/* Badge on top right of image */}
                <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-semibold text-amber-300 flex items-center gap-1.5 shadow-lg">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>Perspectiva Artística da Fachada</span>
                </div>

                {/* Floating Bottom Card: Pricing & Unit Type */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-white/10 shadow-xl">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-neutral-400 block">
                        Valores Especiais a partir de
                      </span>
                      <div className="text-xl sm:text-2xl font-extrabold text-white font-display">
                        {PROJECT_INFO.startingPrice}
                      </div>
                    </div>
                    <a
                      id="hero-image-overlay-interest-btn"
                      href={FORM_INTEREST_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs shadow-md inline-flex items-center gap-1 transition-all"
                    >
                      <span>Tenho Interesse</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating micro card: Location indicator */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 p-3 rounded-xl bg-neutral-900/95 border border-neutral-700 shadow-2xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Região Nobre & Valorizada</div>
                  <div className="text-[11px] text-neutral-400">{PROJECT_INFO.neighborhood} - {PROJECT_INFO.city}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Metrics Bar */}
        <div id="quick-specs-bar" className="mt-14 sm:mt-20 pt-8 border-t border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
            <span className="text-xs text-neutral-400 uppercase tracking-wider block mb-1">Metragens</span>
            <span className="text-xl sm:text-2xl font-bold font-display text-white">{PROJECT_INFO.totalArea}</span>
            <span className="text-xs text-amber-400 block mt-0.5">Plantas inteligentes</span>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
            <span className="text-xs text-neutral-400 uppercase tracking-wider block mb-1">Dormitórios</span>
            <span className="text-xl sm:text-2xl font-bold font-display text-white">{PROJECT_INFO.bedrooms}</span>
            <span className="text-xs text-amber-400 block mt-0.5">1 a 3 suítes privativas</span>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
            <span className="text-xs text-neutral-400 uppercase tracking-wider block mb-1">Vagas de Garagem</span>
            <span className="text-xl sm:text-2xl font-bold font-display text-white">1 a 3 Vagas</span>
            <span className="text-xs text-amber-400 block mt-0.5">Opção com ponto elétrico</span>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
            <span className="text-xs text-neutral-400 uppercase tracking-wider block mb-1">Previsão de Entrega</span>
            <span className="text-xl sm:text-2xl font-bold font-display text-white">{PROJECT_INFO.deliveryForecast}</span>
            <span className="text-xs text-emerald-400 block mt-0.5">Obra a preço fechado</span>
          </div>
        </div>
      </div>
    </section>
  );
};
