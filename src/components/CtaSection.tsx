import React from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { FORM_INTEREST_URL, PROJECT_INFO } from '../data/apartments';

export const CtaSection: React.FC = () => {
  return (
    <section id="contato-interesse" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 border-t border-neutral-800">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
          <Clock className="w-4 h-4 text-amber-400" />
          <span>Fase de Pré-Lançamento • Condições por Tempo Limitado</span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.2] max-w-4xl mx-auto">
          Garanta sua unidade com as melhores condições e valores de{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
            Tabela Zero
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Preencha o formulário rápido de interesse em menos de 1 minuto para receber o book executivo, plantas detalhadas e a assessoria de um especialista do {PROJECT_INFO.name}.
        </p>

        {/* Exclusive Benefits Pills */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-white">Prioridade de Andar</div>
              <div className="text-xs text-neutral-400">Escolha as melhores vistas e posições de sol</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-white">Entrada em 36x</div>
              <div className="text-xs text-neutral-400">Parcelamento facilitado durante o período da obra</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-white">Sem Compromisso</div>
              <div className="text-xs text-neutral-400">Atendimento personalizado e sem custo</div>
            </div>
          </div>
        </div>

        {/* Mega High Conversion CTA Button */}
        <div className="mt-10 flex flex-col items-center">
          <a
            id="cta-section-main-interest-btn"
            href={FORM_INTEREST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 bg-[length:200%_auto] hover:bg-right text-neutral-950 font-extrabold text-lg sm:text-xl shadow-2xl shadow-amber-500/35 hover:shadow-amber-500/50 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <Sparkles className="w-5 h-5" />
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <div className="flex items-center gap-2 text-xs text-neutral-400 mt-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Link direto para o formulário oficial do Google Forms (100% seguro)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
