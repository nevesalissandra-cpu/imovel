import React, { useState } from 'react';
import { Waves, Dumbbell, UtensilsCrossed, Briefcase, Sparkles, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { AMENITIES, FORM_INTEREST_URL } from '../data/apartments';

export const Amenities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Lazer', 'Bem-Estar', 'Praticidade', 'Segurança'];

  const filteredAmenities = selectedCategory === 'Todos'
    ? AMENITIES
    : AMENITIES.filter((item) => item.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves':
        return <Waves className="w-5 h-5 text-amber-400" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-amber-400" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-amber-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="lazer" className="py-16 sm:py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lazer de Resort Urbano</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Mais de 20 espaços pensados para o seu bem-estar
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            Áreas comuns entregues totalmente equipadas, climatizadas e decoradas por renomados designers de interiores.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`amenity-filter-${cat.toLowerCase()}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-neutral-950 shadow-md font-bold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              id={`amenity-card-${amenity.id}`}
              className="group bg-neutral-900/70 rounded-2xl border border-neutral-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300 flex flex-col hover:-translate-y-1 shadow-lg"
            >
              {/* Photo */}
              <div className="relative h-48 overflow-hidden bg-neutral-800">
                <img
                  src={amenity.imageUrl}
                  alt={amenity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>

                <div className="absolute top-3 left-3 p-2 rounded-lg bg-neutral-950/80 backdrop-blur-md border border-white/10 shadow-md">
                  {getIcon(amenity.icon)}
                </div>

                <span className="absolute bottom-3 right-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-neutral-900/90 text-amber-300 border border-white/10">
                  {amenity.category}
                </span>
              </div>

              {/* Text content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500">Entregue equipado e decorado</span>
                  <a
                    id={`amenity-cta-${amenity.id}`}
                    href={FORM_INTEREST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                  >
                    <span>Ver detalhes</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA strip inside Amenities */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-amber-950/40 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white font-display">
              Quer conhecer todas as 20+ comodidades do empreendimento?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Solicite o memorial descritivo completo e as perspectivas em alta resolução.
            </p>
          </div>

          <a
            id="amenities-bottom-interest-btn"
            href={FORM_INTEREST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
