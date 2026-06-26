import React from 'react';
import type { Currency } from '../types';

interface CurrencySelectorProps {
  currency: Currency;
  onChange: (currency: Currency) => void;
}

const currencies: { key: Currency; symbol: string; label: string }[] = [
  { key: 'INR', symbol: '₹', label: 'INR' },
  { key: 'USD', symbol: '$', label: 'USD' },
  { key: 'EUR', symbol: '€', label: 'EUR' },
];

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ currency, onChange }) => {
  return (
    <div
      className="inline-flex items-center bg-white/5 rounded-xl border border-white/10 p-1"
      role="radiogroup"
      aria-label="Select currency"
    >
      {currencies.map((c) => {
        const isActive = currency === c.key;
        return (
          <button
            key={c.key}
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(c.key)}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-150 ease-out cursor-pointer ${
              isActive
                ? 'bg-primary/15 text-primary border border-primary/25 shadow-[0_0_10px_rgba(192,193,255,0.1)]'
                : 'text-on-surface-variant hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <span className="mr-1">{c.symbol}</span>
            {c.label}
          </button>
        );
      })}
    </div>
  );
};

export default CurrencySelector;
