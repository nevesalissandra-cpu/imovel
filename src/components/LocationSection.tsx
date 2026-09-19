import React from 'react';
import { MapPin, Navigation, Trees, TrainTrack, GraduationCap, Coffee, ShoppingBag, HeartPulse, ArrowUpRight } from 'lucide-react';
import { LOCATION_HIGHLIGHTS, PROJECT_INFO, FORM_INTEREST_URL } from '../data/apartments';

export const LocationSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trees':
        return <Trees className="w-5 h-5 text-emerald-400" />;
      case 'TrainTrack':
        return <TrainTrack className="w-5 h-5 text-blue-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-purple-400" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-amber-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-rose-400" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-red-400" />;
      default:
        return <MapPin className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-neutral-900/60 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Proximity List */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
              <Navigation className="w-3.5 h-3.5" />
              <span>Localização Privilegiada</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Faça tudo a pé no melhor endereço da cidade
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              O Residencial Lumière foi estrategicamente posicionado em uma rua arborizada e tranquila, com acesso imediato às melhores opções culturais, gastronômicas e aos principais eixos corporativos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {LOCATION_HIGHLIGHTS.map((item) => (
                <div
                  key={item.id}
                  id={`loc-item-${item.id}`}
                  className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                      {getIcon(item.icon)}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white">{item.place}</h4>
                      <span className="text-[11px] text-neutral-400">{item.category}</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold text-amber-400 block">{item.time}</span>
                    <span className="text-[10px] text-neutral-500">{item.mode}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="location-interest-btn"
                href={FORM_INTEREST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-neutral-400 text-center sm:text-left">
                Agende uma visita guiada ao terreno e decorado
              </span>
            </div>
          </div>

          {/* Right Column: Visual Map Simulation Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl p-6 sm:p-8">
              {/* Decorative map graphics */}
              <div className="relative h-72 sm:h-80 w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                {/* Visual grid representing city blocks */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Stylized street lines */}
                <svg className="absolute inset-0 w-full h-full text-neutral-800" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="40%" x2="100%" y2="40%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="0" y1="70%" x2="100%" y2="70%" stroke="currentColor" strokeWidth="4" />
                  <line x1="30%" y1="0" x2="30%" y2="100%" stroke="currentColor" strokeWidth="3" />
                  <line x1="75%" y1="0" x2="75%" y2="100%" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
                </svg>

                {/* Central pin: Empreendimento */}
                <div className="relative z-10 flex flex-col items-center animate-bounce">
                  <div className="px-3.5 py-1.5 rounded-full bg-amber-400 text-neutral-950 font-extrabold text-xs shadow-xl flex items-center gap-1.5 border border-amber-300">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Residencial Lumière</span>
                  </div>
                  <div className="w-3 h-3 bg-amber-400 rotate-45 -mt-1.5 shadow-md"></div>
                </div>

                {/* Orbit points */}
                <div className="absolute top-10 left-12 px-2.5 py-1 rounded-md bg-neutral-900/90 border border-neutral-700 text-[10px] text-neutral-300 shadow">
                  🚇 Metrô • 4 min
                </div>
                <div className="absolute bottom-12 right-10 px-2.5 py-1 rounded-md bg-neutral-900/90 border border-neutral-700 text-[10px] text-neutral-300 shadow">
                  🌳 Parque Ibirapuera • 7 min
                </div>
                <div className="absolute top-12 right-14 px-2.5 py-1 rounded-md bg-neutral-900/90 border border-neutral-700 text-[10px] text-neutral-300 shadow">
                  ☕ Bistrôs & Cafés • 2 min
                </div>
              </div>

              {/* Map Footer Information */}
              <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800 text-xs">
                <div className="flex items-center gap-2 text-neutral-300">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Rua das Magnólias, 450 - Jardins / {PROJECT_INFO.city}</span>
                </div>
                <a
                  id="google-maps-view-link"
                  href={FORM_INTEREST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
                >
                  <span>Receber rota de acesso</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
