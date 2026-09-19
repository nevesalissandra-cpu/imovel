import React, { useState } from 'react';
import { Calculator as CalcIcon, ArrowUpRight, DollarSign, Calendar, Percent, ShieldCheck } from 'lucide-react';
import { FORM_INTEREST_URL } from '../data/apartments';

export const Calculator: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState<number>(685000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30);
  const [years, setYears] = useState<number>(30);

  // Calculations
  const downPaymentValue = Math.round(propertyPrice * (downPaymentPercent / 100));
  const loanAmount = propertyPrice - downPaymentValue;
  const totalMonths = years * 12;

  // Approximate Brazilian mortgage monthly installment (Price amortization around 9.5% annual rate)
  const monthlyRate = 0.095 / 12;
  const estimatedMonthlyInstallment = Math.round(
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  // Construction period monthly installment estimate (20% of entry over 36 months)
  const constructionMonthlyEstimate = Math.round((downPaymentValue * 0.4) / 36);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="simulador" className="py-16 sm:py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <CalcIcon className="w-3.5 h-3.5" />
            <span>Planejamento Financeiro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Simulador de Financiamento & Entrada
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base">
            Descubra uma estimativa de fluxo de pagamento ideal para o seu perfil e consulte condições com as menores taxas bancárias.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-neutral-900/90 rounded-2xl border border-neutral-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Property Value Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="property-price-range" className="text-xs sm:text-sm font-semibold text-neutral-300 flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-amber-400" />
                    Valor Estimado do Apartamento
                  </label>
                  <span className="text-sm sm:text-base font-bold text-amber-400 font-display">
                    {formatCurrency(propertyPrice)}
                  </span>
                </div>
                <input
                  id="property-price-range"
                  type="range"
                  min="400000"
                  max="1500000"
                  step="25000"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                  <span>R$ 400 mil (2Q)</span>
                  <span>R$ 685 mil (3Q)</span>
                  <span>R$ 1.5 mi (Rooftop)</span>
                </div>
              </div>

              {/* Down Payment Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="down-payment-range" className="text-xs sm:text-sm font-semibold text-neutral-300 flex items-center gap-1.5">
                    <Percent className="w-4 h-4 text-amber-400" />
                    Entrada Facilitada ({downPaymentPercent}%)
                  </label>
                  <span className="text-sm sm:text-base font-bold text-white">
                    {formatCurrency(downPaymentValue)}
                  </span>
                </div>
                <input
                  id="down-payment-range"
                  type="range"
                  min="20"
                  max="50"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                  <span>Mínimo 20%</span>
                  <span>Ideal 30%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Term in Years */}
              <div>
                <label className="text-xs sm:text-sm font-semibold text-neutral-300 flex items-center gap-1.5 mb-2">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  Prazo de Financiamento Bancário
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[15, 20, 25, 30].map((term) => (
                    <button
                      key={term}
                      id={`term-btn-${term}-years`}
                      type="button"
                      onClick={() => setYears(term)}
                      className={`py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        years === term
                          ? 'bg-amber-400 text-neutral-950 font-bold shadow'
                          : 'bg-neutral-800 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {term} anos
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Card */}
            <div className="lg:col-span-5 bg-neutral-950 rounded-xl p-6 border border-amber-500/25 flex flex-col justify-between space-y-6 shadow-xl">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                  Resultado Preliminar
                </span>
                <div className="text-xs text-neutral-400 mb-4">
                  Baseado em taxa referencial de mercado
                </div>

                <div className="space-y-3 pb-4 border-b border-neutral-800">
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-neutral-400">Entrada total:</span>
                    <span className="font-bold text-white">{formatCurrency(downPaymentValue)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-neutral-400">Mensal na obra (~36x):</span>
                    <span className="font-semibold text-amber-300">{formatCurrency(constructionMonthlyEstimate)}/mês</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-neutral-400">Saldo a financiar:</span>
                    <span className="font-semibold text-white">{formatCurrency(loanAmount)}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <span className="text-xs text-neutral-400 block">Parcela pós-chaves estimada:</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display mt-0.5">
                    {formatCurrency(estimatedMonthlyInstallment)}
                    <span className="text-xs text-neutral-400 font-normal"> /mês</span>
                  </div>
                </div>
              </div>

              {/* Direct CTA button to the form */}
              <div className="space-y-2">
                <a
                  id="simulator-interest-cta"
                  href={FORM_INTEREST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Tenho Interesse</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <p className="text-[10px] text-center text-neutral-500">
                  Valores ilustrativos sujeitos a análise de crédito bancário e tabela de vendas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
