import type { Currency, PlanTier, PricingPlan } from '../types';

/**
 * Dynamic pricing configuration object.
 * All prices are base values in INR (monthly).
 * Actual displayed prices are computed via currencyMultiplier and annual discount.
 */
export const pricing: Record<PlanTier, { base: number }> = {
  starter: {
    base: 1000,
  },
  pro: {
    base: 2500,
  },
  enterprise: {
    base: 5000,
  },
};

/**
 * Currency conversion multipliers relative to INR base.
 * Multi-dimensional matrix approach — prices are never hardcoded per currency.
 */
export const currencyMultiplier: Record<Currency, number> = {
  INR: 1,
  USD: 0.012,
  EUR: 0.011,
};

/**
 * Currency display symbols.
 */
export const currencySymbol: Record<Currency, string> = {
  INR: '₹',
  USD: '$',
  EUR: '€',
};

/**
 * Annual billing discount (20%).
 */
export const ANNUAL_DISCOUNT = 0.20;

/**
 * Pure function: calculates the price for a given plan, currency, and billing cycle.
 * No side effects — safe for useMemo.
 */
export function calculatePrice(
  plan: PlanTier,
  currency: Currency,
  isAnnual: boolean
): number {
  const base = pricing[plan].base;
  const multiplied = base * currencyMultiplier[currency];
  const discounted = isAnnual ? multiplied * (1 - ANNUAL_DISCOUNT) : multiplied;
  return Math.round(discounted * 100) / 100;
}

/**
 * Formats a numeric price with the appropriate currency symbol.
 */
export function formatPrice(amount: number, currency: Currency): string {
  const symbol = currencySymbol[currency];

  if (currency === 'INR') {
    return `${symbol}${Math.round(amount).toLocaleString('en-IN')}`;
  }
  return `${symbol}${amount.toFixed(2)}`;
}

/**
 * Plan metadata — feature lists and descriptions.
 */
export const planDetails: PricingPlan[] = [
  {
    tier: 'starter',
    name: 'Starter',
    description: 'Perfect for small teams getting started with data automation.',
    features: [
      'Up to 5 data pipelines',
      '10,000 records/month',
      'Basic AI processing',
      'Email support',
      'Standard connectors',
      'Community access',
    ],
    cta: 'Start Free Trial',
  },
  {
    tier: 'pro',
    name: 'Professional',
    description: 'For growing teams that need advanced automation capabilities.',
    features: [
      'Unlimited pipelines',
      '500,000 records/month',
      'Advanced AI models',
      'Priority support',
      'Custom connectors',
      'Team collaboration',
      'API access',
      'Webhook integrations',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    tier: 'enterprise',
    name: 'Enterprise',
    description: 'Full-scale automation for organizations processing at volume.',
    features: [
      'Unlimited everything',
      '10M+ records/month',
      'Custom AI training',
      'Dedicated support',
      'SSO & RBAC',
      'SLA guarantee',
      'On-premise option',
      'Custom integrations',
      'Audit logging',
    ],
    cta: 'Contact Sales',
  },
];
