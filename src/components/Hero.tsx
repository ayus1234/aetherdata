import React from 'react';
import { SparklesIcon, ArrowRightIcon } from '../icons';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-16 pb-24 lg:pt-28 lg:pb-36"
    >
      {/* Background Glows */}
      <div className="glow-effect bg-primary w-[600px] h-[600px] -top-[200px] -right-[200px] animate-pulse-glow" style={{ position: 'absolute' }} />
      <div className="glow-effect bg-secondary w-[400px] h-[400px] top-[60%] -left-[150px] animate-pulse-glow" style={{ position: 'absolute', animationDelay: '2s' }} />
      <div className="glow-effect bg-tertiary w-[300px] h-[300px] top-[20%] right-[10%] animate-pulse-glow" style={{ position: 'absolute', animationDelay: '1s', opacity: 0.08 }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 mb-8">
              <SparklesIcon size={14} className="text-primary" />
              <span className="text-xs font-mono text-primary uppercase tracking-wider font-medium">AI-Powered Automation</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="font-mono text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] tracking-[-0.04em] text-white mb-6"
            >
              Automate Your{' '}
              <span className="gradient-text">Data Flows</span>{' '}
              at Scale
            </h1>

            {/* Subheadline */}
            <p className="font-sans text-lg text-on-surface-variant leading-[1.6] max-w-lg mb-10">
              AetherData processes structured and unstructured data with zero-latency precision.
              Build multi-node AI pipelines that transform your enterprise data into actionable intelligence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#pricing" className="btn-primary px-8 py-3.5 text-base flex items-center gap-2 rounded-xl">
                Start Free Trial
                <ArrowRightIcon size={18} />
              </a>
              <a href="#features" className="btn-secondary px-8 py-3.5 text-base rounded-xl font-medium">
                See How It Works
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
              <div>
                <span className="font-mono text-2xl font-bold text-white">10M+</span>
                <p className="text-xs text-on-surface-variant mt-1">Records/day</p>
              </div>
              <div>
                <span className="font-mono text-2xl font-bold text-white">99.9%</span>
                <p className="text-xs text-on-surface-variant mt-1">Uptime SLA</p>
              </div>
              <div>
                <span className="font-mono text-2xl font-bold text-white">500+</span>
                <p className="text-xs text-on-surface-variant mt-1">Companies</p>
              </div>
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative animate-fade-in-up delay-200 hidden lg:block">
            {/* Abstract AI visualization — pure CSS */}
            <div className="relative w-full aspect-square max-w-[520px] mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-3xl border border-white/5 animate-spin-slow" style={{ animationDuration: '30s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_12px_rgba(192,193,255,0.5)]" />
              </div>

              {/* Inner glass card — pipeline visualization */}
              <div className="absolute inset-8 rounded-2xl bg-[#18181B]/80 backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-between overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/20 via-transparent to-transparent rounded-bl-full" />

                {/* Pipeline flow mockup */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Live Pipeline</span>
                  </div>

                  {/* Flow nodes */}
                  <div className="space-y-4">
                    {['Data Ingestion', 'AI Processing', 'Transform', 'Output'].map((step, i) => (
                      <div
                        key={step}
                        className="flex items-center gap-3 animate-fade-in-up"
                        style={{ animationDelay: `${400 + i * 150}ms` }}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                          i === 0 ? 'bg-pink-500/20 text-pink-300 border border-pink-500/20' :
                          i === 1 ? 'bg-primary/20 text-primary border border-primary/20' :
                          i === 2 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/20' :
                          'bg-secondary/20 text-secondary border border-secondary/20'
                        }`}>
                          {i + 1}
                        </div>
                        <div className="flex-1 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center px-3">
                          <span className="text-xs font-mono text-on-surface-variant">{step}</span>
                        </div>
                        {i < 3 && (
                          <div className="text-on-surface-variant/30 text-xs">→</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom metrics */}
                <div className="relative z-10 grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-white/5">
                  <div className="text-center">
                    <span className="text-[10px] font-mono text-on-surface-variant block">Latency</span>
                    <span className="text-sm font-mono font-bold text-primary">12ms</span>
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] font-mono text-on-surface-variant block">Tokens</span>
                    <span className="text-sm font-mono font-bold text-secondary">1,024</span>
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] font-mono text-on-surface-variant block">Status</span>
                    <span className="text-sm font-mono font-bold text-emerald-400">Active</span>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/10 animate-float" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-transparent border border-secondary/10 animate-float" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
