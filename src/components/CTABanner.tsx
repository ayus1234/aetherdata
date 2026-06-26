import React from 'react';
import { ArrowRightIcon, SparklesIcon } from '../icons';

const CTABanner: React.FC = () => {
  return (
    <section
      aria-label="Call to action"
      className="py-[var(--spacing-section-mobile)] lg:py-[var(--spacing-section)] relative"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1f1f27] via-[#18181B] to-[#13131b]" />
          <div className="absolute inset-0 bg-grid opacity-50" />

          {/* Glows */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary rounded-full blur-[100px] opacity-15" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary rounded-full blur-[100px] opacity-10" />

          {/* Border */}
          <div className="absolute inset-0 rounded-3xl border border-white/10" />

          {/* Content */}
          <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 mb-8">
              <SparklesIcon size={14} className="text-primary" />
              <span className="text-xs font-mono text-primary uppercase tracking-wider font-medium">Get Started Today</span>
            </div>

            <h2 className="font-mono text-3xl md:text-[48px] font-semibold leading-[1.2] text-white mb-6 max-w-2xl mx-auto">
              Start Automating Your{' '}
              <span className="gradient-text">Data Flows</span>{' '}
              in Minutes
            </h2>

            <p className="font-sans text-lg text-on-surface-variant leading-[1.6] max-w-xl mx-auto mb-10">
              Join 500+ companies already using AetherData to transform their data operations.
              No credit card required.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#pricing" className="btn-primary px-10 py-4 text-base flex items-center gap-2 rounded-xl">
                Start Free Trial
                <ArrowRightIcon size={18} />
              </a>
              <a href="#features" className="btn-secondary px-10 py-4 text-base rounded-xl font-medium">
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
