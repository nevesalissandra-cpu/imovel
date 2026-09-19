import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ArrowUpRight, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, FORM_INTEREST_URL } from '../data/apartments';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="duvidas" className="py-16 sm:py-24 bg-neutral-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Tire todas as suas dúvidas sobre a aquisição
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Transparência completa desde a primeira conversa até a entrega das chaves.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className="rounded-xl bg-neutral-900/80 border border-neutral-800 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-850 transition-colors"
                >
                  <span className="font-semibold text-white text-base sm:text-lg">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-neutral-800 text-amber-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-amber-400 text-neutral-950' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-neutral-800/50">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900 border border-neutral-800 text-center space-y-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 text-amber-400">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white font-display">Ainda tem alguma pergunta específica?</h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-lg mx-auto">
              Nossa equipe de consultores imobiliários credenciados está pronta para responder você com exclusividade.
            </p>
          </div>
          <a
            id="faq-custom-interest-btn"
            href={FORM_INTEREST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm shadow-md transition-all"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
