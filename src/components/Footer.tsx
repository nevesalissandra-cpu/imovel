import React from 'react';
import { Building2, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PROJECT_INFO, FORM_INTEREST_URL } from '../data/apartments';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs pt-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-850">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-neutral-950 font-bold shadow-md">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-wider">
                {PROJECT_INFO.name}
              </span>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              {PROJECT_INFO.slogan}. Empreendimento residencial com arquitetura autoral e alto padrão de acabamento.
            </p>
            <div className="flex items-center gap-2 text-neutral-500 text-xs">
              <ShieldCheck className="w-4 h-4 text-amber-500/80" />
              <span>Memorial de Incorporação registrado sob R.04 na Matrícula nº 142.890 do 13º Cartório de Registro de Imóveis.</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm font-display uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#plantas" className="hover:text-amber-400 transition-colors">Plantas & Tipologias</a>
              </li>
              <li>
                <a href="#lazer" className="hover:text-amber-400 transition-colors">Áreas de Lazer & Comodidades</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-400 transition-colors">Localização Privilegiada</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-amber-400 transition-colors">Simulador Financeiro</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-amber-400 transition-colors">Galeria de Fotos</a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-amber-400 transition-colors">Dúvidas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm font-display uppercase tracking-wider">
              Atendimento Oficial
            </h4>
            <p className="text-xs text-neutral-400">
              Plantão de Vendas com maquete física e decorado pronto para visitação.
            </p>
            <div>
              <a
                id="footer-interest-link"
                href={FORM_INTEREST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs shadow-md transition-colors"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <span className="text-[11px] text-neutral-500 block">CRECI Jurídico: 034892-J</span>
          </div>
        </div>

        {/* Disclaimer note */}
        <div className="pt-6 text-[11px] text-neutral-500 leading-relaxed space-y-2">
          <p>
            *As imagens, perspectivas e plantas são meramente ilustrativas e possuem caráter promocional de pré-lançamento. Os acabamentos, móveis e equipamentos serão entregues conforme o Memorial Descritivo oficial da incorporação. As condições de financiamento dependem de análise e aprovação cadastral junto às instituições financeiras.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center pt-2 gap-2 text-neutral-500">
            <span>© {new Date().getFullYear()} {PROJECT_INFO.name}. Todos os direitos reservados.</span>
            <span>Venda de Apartamentos de Alto Padrão</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
