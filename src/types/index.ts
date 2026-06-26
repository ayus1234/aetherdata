export type Currency = 'INR' | 'USD' | 'EUR';
export type BillingCycle = 'monthly' | 'annual';
export type PlanTier = 'starter' | 'pro' | 'enterprise';

export interface PricingPlan {
  tier: PlanTier;
  name: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  span?: 'wide' | 'tall' | 'normal';
  details?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
