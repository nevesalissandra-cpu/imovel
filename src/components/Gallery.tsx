import React, { useState } from 'react';
import { Camera, X, ArrowUpRight, Sparkles, Eye } from 'lucide-react';
import { GALLERY_PHOTOS, FORM_INTEREST_URL } from '../data/apartments';
import { GalleryPhoto } from '../types';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const categories = ['Todos', 'Perspectivas', 'Interiores', 'Áreas Comuns'];

  const filteredPhotos = activeCategory === 'Todos'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <section id="galeria" className="py-16 sm:py-24 bg-neutral-900/40 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Tour Visual</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Cada detalhe projetado para inspirar
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base">
            Conheça as perspectivas artísticas e a sofisticação dos acabamentos planejados para o Residencial Lumière.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`gallery-category-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow'
                  : 'bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              id={`gallery-card-${photo.id}`}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-800 hover:border-amber-500/50 cursor-pointer transition-all duration-300 shadow-lg aspect-[4/3]"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Hover overlay hint */}
              <div className="absolute top-3 right-3 p-2 rounded-lg bg-neutral-950/80 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4 text-amber-400" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                  {photo.category}
                </span>
                <h3 className="text-base font-bold text-white font-display">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Action strip */}
        <div className="mt-12 text-center">
          <a
            id="gallery-full-book-interest-btn"
            href={FORM_INTEREST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all hover:scale-[1.02]"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-neutral-500 mt-2">
            Solicite o book digital com mais de 30 fotos em alta definição
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          id="gallery-modal"
          className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="gallery-modal-close-btn"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-950/80 text-neutral-300 hover:text-white border border-neutral-700 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedPhoto.imageUrl}
              alt={selectedPhoto.title}
              className="w-full max-h-[70vh] object-cover"
              referrerPolicy="no-referrer"
            />

            <div className="p-6 bg-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-amber-400 uppercase tracking-wider font-semibold">
                  {selectedPhoto.category}
                </span>
                <h3 className="text-xl font-bold text-white font-display mt-0.5">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
                  {selectedPhoto.caption}
                </p>
              </div>

              <a
                id="gallery-modal-interest-cta"
                href={FORM_INTEREST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-5 py-2.5 rounded-xl bg-amber-400 text-neutral-950 font-bold text-sm shadow-md inline-flex items-center gap-1.5 hover:bg-amber-300 transition-colors"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
