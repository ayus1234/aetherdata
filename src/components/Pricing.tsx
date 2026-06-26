import React, { useState, useMemo } from 'react';
import type { Currency, BillingCycle } from '../types';
import { calculatePrice, formatPrice, planDetails } from '../config/pricing';
import PricingToggle from './PricingToggle';
import CurrencySelector from './CurrencySelector';
import PricingCard from './PricingCard';

/**
 * Pricing section — FULLY ISOLATED STATE.
 *
 * Currency and billing cycle state live ONLY inside this component.
 * Changing currency/billing does NOT cause parent (App) to re-render.
 * PricingCard is React.memo'd — only the price text updates.
 */
const Pricing: React.FC = () => {
  const [currency, setCurrency] = useState<Currency>('INR');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  const isAnnual = billingCycle === 'annual';

  // Compute all prices via the dynamic pricing matrix
  const computedPrices = useMemo(() => {
    return planDetails.map((plan) => ({
      tier: plan.tier,
      price: calculatePrice(plan.tier, currency, isAnnual),
      formattedPrice: formatPrice(
        calculatePrice(plan.tier, currency, isAnnual),
        currency
      ),
    }));
  }, [currency, isAnnual]);

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="py-[var(--spacing-section-mobile)] lg:py-[var(--spacing-section)] relative"
    >
      {/* Background glow */}
      <div className="glow-effect bg-tertiary w-[500px] h-[500px] top-[30%] -left-[200px] animate-pulse-glow" style={{ position: 'absolute', animationDelay: '0.5s' }} />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 bg-tertiary/10 px-4 py-1.5 rounded-full border border-tertiary/20 mb-6">
            <span className="text-xs font-mono text-tertiary uppercase tracking-wider font-medium">Transparent Pricing</span>
          </span>
          <h2
            id="pricing-heading"
            className="font-mono text-3xl md:text-[48px] font-semibold leading-[1.2] text-white mb-4"
          >
            Choose Your{' '}
            <span className="gradient-text">Scale</span>
          </h2>
          <p className="font-sans text-lg text-on-surface-variant leading-[1.6] max-w-2xl mx-auto">
            Start free, scale infinitely. Every plan includes core AI capabilities.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <PricingToggle
            billingCycle={billingCycle}
            onChange={setBillingCycle}
          />
          <CurrencySelector
            currency={currency}
            onChange={setCurrency}
          />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {planDetails.map((plan) => {
            const computed = computedPrices.find((p) => p.tier === plan.tier)!;
            return (
              <PricingCard
                key={plan.tier}
                plan={plan}
                formattedPrice={computed.formattedPrice}
                billingLabel={isAnnual ? '/mo (billed annually)' : '/month'}
                currency={currency}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
