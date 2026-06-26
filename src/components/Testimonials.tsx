import React from 'react';
import { StarIcon } from '../icons';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Sharma',
    role: 'CTO',
    company: 'DataScale Analytics',
    content: 'AetherData reduced our data processing pipeline from 6 hours to under 12 minutes. The AI-powered routing eliminated manual intervention entirely. Game-changing for our operations.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Marcus Chen',
    role: 'VP Engineering',
    company: 'CloudSync Corp',
    content: 'We evaluated five platforms before choosing AetherData. The zero-latency processing and natural language pipeline builder set it apart. Our team onboarded in days, not weeks.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Ananya Patel',
    role: 'Head of Data',
    company: 'FinTech Dynamics',
    content: 'The enterprise security features convinced our compliance team instantly. SOC 2, end-to-end encryption, and granular RBAC — AetherData checks every box for regulated industries.',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-[var(--spacing-section-mobile)] lg:py-[var(--spacing-section)] relative"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 mb-6">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-medium">Customer Stories</span>
          </span>
          <h2
            id="testimonials-heading"
            className="font-mono text-3xl md:text-[48px] font-semibold leading-[1.2] text-white mb-4"
          >
            Loved by{' '}
            <span className="gradient-text">Data Teams</span>
          </h2>
          <p className="font-sans text-lg text-on-surface-variant leading-[1.6] max-w-2xl mx-auto">
            See why hundreds of engineering teams trust AetherData for their critical data automation.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-card p-8 flex flex-col justify-between"
            >
              {/* Stars */}
              <div>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <StarIcon key={i} size={16} className="text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-sans text-sm text-on-surface leading-relaxed mb-6">
                  &ldquo;{t.content}&rdquo;
                </blockquote>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border border-white/10 flex items-center justify-center">
                  <span className="text-sm font-mono font-bold text-white">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-on-surface-variant">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
