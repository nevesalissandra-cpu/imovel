import React from 'react';
import { Shield, SunMedium, Award, Zap, Layers, Sparkles, ArrowUpRight } from 'lucide-react';
import { FORM_INTEREST_URL } from '../data/apartments';

export const Differentiators: React.FC = () => {
  const items = [
    {
      id: 'diff-1',
      icon: Award,
      title: 'Acabamentos Nobres',
      desc: 'Porcelanatos em grandes formatos, bancadas em quartzo, metais de design e conforto acústico comprovado.',
    },
    {
      id: 'diff-2',
      icon: SunMedium,
      title: 'Sustentabilidade & Economia',
      desc: 'Placas solares fotovoltaicas para áreas comuns, reaproveitamento de água pluvial e luminárias 100% LED.',
    },
    {
      id: 'diff-3',
      icon: Zap,
      title: 'Mobilidade Elétrica',
      desc: 'Vagas de garagem preparadas para instalação de carregadores rápidos para carros elétricos e híbridos.',
    },
    {
      id: 'diff-4',
      icon: Shield,
      title: 'Patrimônio de Afetação',
      desc: 'Segurança jurídica máxima: as finanças da obra são totalmente blindadas e exclusivas deste empreendimento.',
    },
    {
      id: 'diff-5',
      icon: Layers,
      title: 'Flexibilidade de Planta',
      desc: 'Possibilidade de integração de living e customização de acabamentos durante a fase de alvenaria.',
    },
    {
      id: 'diff-6',
      icon: Sparkles,
      title: 'Alta Potência de Valorização',
      desc: 'Bairro nobre com histórico contínuo de valorização acima da inflação e alta demanda para locação premium.',
    },
  ];

  return (
    <section id="diferenciais" className="py-16 sm:py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Padrão de Excelência</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Por que escolher o Residencial Lumière?
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base">
            Cada pilar do projeto foi concebido para proporcionar segurança patrimonial, liquidez e conforto absoluto para sua família.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={`diff-card-${item.id}`}
                className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mid-page banner CTA */}
        <div className="mt-12 text-center">
          <a
            id="diff-section-interest-btn"
            href={FORM_INTEREST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
