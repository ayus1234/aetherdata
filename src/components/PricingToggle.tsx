import React from 'react';
import type { BillingCycle } from '../types';

interface PricingToggleProps {
  billingCycle: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
}

const PricingToggle: React.FC<PricingToggleProps> = ({ billingCycle, onChange }) => {
  const isAnnual = billingCycle === 'annual';

  return (
    <div className="flex items-center gap-3">
      <span
        className={`text-sm font-medium transition-colors duration-150 ${
          !isAnnual ? 'text-white' : 'text-on-surface-variant'
        }`}
      >
        Monthly
      </span>

      {/* Toggle switch */}
      <button
        role="switch"
        aria-checked={isAnnual}
        aria-label="Toggle annual billing"
        onClick={() => onChange(isAnnual ? 'monthly' : 'annual')}
        className={`relative w-14 h-7 rounded-full border transition-all duration-200 ease-out cursor-pointer ${
          isAnnual
            ? 'bg-primary/20 border-primary/40'
            : 'bg-white/10 border-white/20'
        }`}
      >
        <div
          className={`pricing-toggle-slider absolute top-0.5 w-6 h-6 rounded-full transition-transform duration-200 ease-out ${
            isAnnual
              ? 'translate-x-7 bg-primary shadow-[0_0_10px_rgba(192,193,255,0.4)]'
              : 'translate-x-0.5 bg-white/80'
          }`}
        />
      </button>

      <span
        className={`text-sm font-medium transition-colors duration-150 ${
          isAnnual ? 'text-white' : 'text-on-surface-variant'
        }`}
      >
        Annual
      </span>

      {/* Save badge */}
      <span
        className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full transition-all duration-200 ${
          isAnnual
            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 scale-100 opacity-100'
            : 'bg-emerald-500/10 text-emerald-400/50 border border-emerald-500/10 scale-95 opacity-60'
        }`}
      >
        Save 20%
      </span>
    </div>
  );
};

export default PricingToggle;
