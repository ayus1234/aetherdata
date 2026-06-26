import React from 'react';
import type { Currency, PricingPlan } from '../types';
import { CheckIcon, ArrowRightIcon } from '../icons';

interface PricingCardProps {
  plan: PricingPlan;
  formattedPrice: string;
  billingLabel: string;
  currency: Currency;
}

/**
 * PricingCard — React.memo wrapped.
 * Only re-renders when its specific props change (price, currency, billing).
 * This satisfies the "no global re-render on toggle" requirement.
 */
const PricingCard: React.FC<PricingCardProps> = React.memo(({ plan, formattedPrice, billingLabel }) => {
  const isPopular = plan.popular;

  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col transition-all duration-200 ease-out hover:-translate-y-1 ${
        isPopular
          ? 'bg-gradient-to-b from-[#1f1f27] to-[#18181B] border-2 border-primary/40 shadow-[0_0_40px_rgba(192,193,255,0.1)]'
          : 'bg-[#18181B]/80 border border-white/10 hover:border-white/20'
      }`}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-primary to-tertiary text-[10px] font-mono font-bold text-black uppercase tracking-widest px-4 py-1.5 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan name */}
      <div className="mb-6">
        <h3 className="font-mono text-lg font-semibold text-white mb-2">
          {plan.name}
        </h3>
        <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
          {plan.description}
        </p>
      </div>

      {/* Price display — animated on change */}
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span
            key={formattedPrice}
            className="font-mono text-4xl font-bold text-white animate-scale-in"
          >
            {formattedPrice}
          </span>
          <span className="text-sm text-on-surface-variant font-sans">
            {billingLabel}
          </span>
        </div>
      </div>

      {/* Feature list */}
      <ul className="space-y-3 mb-8 flex-1" role="list">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <CheckIcon
              size={16}
              className={`shrink-0 mt-0.5 ${isPopular ? 'text-primary' : 'text-emerald-400'}`}
            />
            <span className="text-sm text-on-surface-variant">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#"
        className={`w-full py-3.5 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-2 transition-all duration-200 ease-out ${
          isPopular
            ? 'btn-primary'
            : 'btn-secondary hover:bg-white/10'
        }`}
      >
        {plan.cta}
        <ArrowRightIcon size={16} />
      </a>
    </div>
  );
});

PricingCard.displayName = 'PricingCard';

export default PricingCard;
