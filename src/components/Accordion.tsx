import React from 'react';
import type { Feature } from '../types';
import { getFeatureIcon } from './Features';
import { ChevronDownIcon } from '../icons';

interface AccordionProps {
  features: Feature[];
  activeCardId: string | null;
  onToggle: (id: string) => void;
}

/**
 * Mobile Accordion — renders features as expandable items.
 * `activeCardId` is shared with BentoGrid so that if a user hovers
 * a bento card and then resizes, that same card is already expanded here.
 */
const Accordion: React.FC<AccordionProps> = ({ features, activeCardId, onToggle }) => {
  return (
    <div className="space-y-3" role="list">
      {features.map((feature) => {
        const isExpanded = activeCardId === feature.id;

        return (
          <div
            key={feature.id}
            role="listitem"
            className={`rounded-2xl border transition-all duration-300 ease-in-out overflow-hidden ${
              isExpanded
                ? 'bg-[#18181B]/90 border-primary/30 shadow-[0_0_30px_rgba(192,193,255,0.06)]'
                : 'bg-[#18181B]/60 border-white/8 hover:border-white/15'
            }`}
          >
            {/* Accordion Header */}
            <button
              onClick={() => onToggle(feature.id)}
              className="w-full flex items-center gap-4 p-5 text-left cursor-pointer"
              aria-expanded={isExpanded}
              aria-controls={`accordion-content-${feature.id}`}
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
                isExpanded
                  ? 'bg-primary/20 border border-primary/30'
                  : 'bg-white/5 border border-white/5'
              }`}>
                {getFeatureIcon(feature.icon, isExpanded ? 'text-primary' : 'text-on-surface-variant')}
              </div>

              {/* Title + short description */}
              <div className="flex-1 min-w-0">
                <h3 className="font-mono text-sm font-semibold text-white tracking-tight">
                  {feature.title}
                </h3>
                {!isExpanded && (
                  <p className="font-sans text-xs text-on-surface-variant/70 mt-1 truncate">
                    {feature.description}
                  </p>
                )}
              </div>

              {/* Chevron */}
              <div className={`accordion-chevron shrink-0 ${isExpanded ? 'rotated' : ''}`}>
                <ChevronDownIcon size={20} className="text-on-surface-variant" />
              </div>
            </button>

            {/* Accordion Content */}
            <div
              id={`accordion-content-${feature.id}`}
              className={`accordion-content ${isExpanded ? 'expanded' : ''}`}
              style={isExpanded ? { paddingLeft: '1.25rem', paddingRight: '1.25rem', paddingBottom: '1.25rem' } : {}}
            >
              <div className="border-t border-white/5 pt-4">
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-3">
                  {feature.description}
                </p>
                {feature.details && (
                  <p className="font-sans text-xs text-on-surface-variant/70 leading-relaxed">
                    {feature.details}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
