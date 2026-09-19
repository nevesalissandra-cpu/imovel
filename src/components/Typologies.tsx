import React, { useState } from 'react';
import { Bed, Bath, Square, Car, ArrowUpRight, Check, Sparkles, FileText } from 'lucide-react';
import { TYPOLOGIES, FORM_INTEREST_URL } from '../data/apartments';

export const Typologies: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(TYPOLOGIES[0].id);

  const activeTypology = TYPOLOGIES.find((t) => t.id === selectedId) || TYPOLOGIES[0];

  return (
    <section id="plantas" className="py-16 sm:py-24 bg-neutral-900/50 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Plantas & Tipologias Inteligentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Escolha o espaço perfeito para o seu estilo de vida
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            Projetadas para máxima iluminação natural, ventilação cruzada e amplitude nos ambientes sociais e íntimos.
          </p>
        </div>

        {/* Typology Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {TYPOLOGIES.map((typology) => {
            const isSelected = typology.id === selectedId;
            return (
              <button
                key={typology.id}
                id={`tab-btn-${typology.id}`}
                onClick={() => setSelectedId(typology.id)}
                className={`relative px-5 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-amber-400 text-neutral-950 shadow-lg shadow-amber-500/20 font-bold scale-[1.02]'
                    : 'bg-neutral-800/80 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-700/60'
                }`}
              >
                <span>{typology.name}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                    isSelected ? 'bg-neutral-950/20 text-neutral-950' : 'bg-neutral-700 text-amber-400'
                  }`}
                >
                  {typology.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Typology Card */}
        <div className="bg-neutral-950 rounded-2xl border border-neutral-800 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Image & Floor Plan Preview */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 group">
                <img
                  src={activeTypology.imageUrl}
                  alt={activeTypology.name}
                  className="w-full h-[320px] sm:h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-neutral-950/80 backdrop-blur-md text-amber-300 border border-white/10">
                    Perspectiva Decorada
                  </span>
                  <a
                    id={`typology-book-link-${activeTypology.id}`}
                    href={FORM_INTEREST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-white bg-neutral-900/90 hover:bg-neutral-800 px-3 py-1.5 rounded-lg border border-neutral-700 inline-flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5 text-amber-400" />
                    <span>Baixar Book da Planta</span>
                  </a>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-sm text-neutral-400 italic text-center">
                "{activeTypology.tagline}"
              </p>
            </div>

            {/* Typology Details & CTA */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-block px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  {activeTypology.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {activeTypology.name}
                </h3>
                <p className="text-neutral-300 mt-2 text-sm sm:text-base leading-relaxed">
                  {activeTypology.description}
                </p>
              </div>

              {/* Specs Pills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-center text-center">
                  <Square className="w-5 h-5 text-amber-400 mb-1" />
                  <span className="text-xs text-neutral-400">Área Privativa</span>
                  <span className="text-base font-bold text-white">{activeTypology.areaM2} m²</span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-center text-center">
                  <Bed className="w-5 h-5 text-amber-400 mb-1" />
                  <span className="text-xs text-neutral-400">Dormitórios</span>
                  <span className="text-base font-bold text-white">{activeTypology.bedrooms} Quartos</span>
                  <span className="text-[10px] text-amber-400">({activeTypology.suites} suíte{activeTypology.suites > 1 ? 's' : ''})</span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-center text-center">
                  <Bath className="w-5 h-5 text-amber-400 mb-1" />
                  <span className="text-xs text-neutral-400">Banheiros</span>
                  <span className="text-base font-bold text-white">{activeTypology.bathrooms} Banheiros</span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-center text-center">
                  <Car className="w-5 h-5 text-amber-400 mb-1" />
                  <span className="text-xs text-neutral-400">Garagem</span>
                  <span className="text-base font-bold text-white">{activeTypology.parkingSpots} Vaga{activeTypology.parkingSpots > 1 ? 's' : ''}</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block">
                  Diferenciais Exclusivos Desta Unidade:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-200">
                  {activeTypology.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Box & CTA */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-amber-950/30 border border-amber-500/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-neutral-400 block">Condição de Lançamento</span>
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    {activeTypology.priceFrom}
                  </div>
                  <span className="text-xs text-amber-400">
                    Mensais a partir de {activeTypology.monthlyEstimate} no período de obras
                  </span>
                </div>

                <a
                  id={`cta-interest-typology-${activeTypology.id}`}
                  href={FORM_INTEREST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all inline-flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Tenho Interesse</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
