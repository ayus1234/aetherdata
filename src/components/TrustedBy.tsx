import React from 'react';

const companies = [
  'Accenture', 'Deloitte', 'Infosys', 'TCS', 'Wipro',
  'Cognizant', 'HCLTech', 'Tech Mahindra', 'Capgemini', 'LTIMindtree',
];

const TrustedBy: React.FC = () => {
  return (
    <section aria-label="Trusted by leading companies" className="py-16 border-y border-white/5 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-mono text-on-surface-variant/60 uppercase tracking-[0.2em] mb-8">
          Trusted by 500+ data-driven organizations
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#09090B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#09090B] to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {[...companies, ...companies].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 mx-8 lg:mx-12 flex items-center"
            >
              <span className="font-mono text-lg lg:text-xl font-bold text-white/15 hover:text-white/30 transition-colors duration-200 whitespace-nowrap select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
