import React, { useCallback } from 'react';
import type { Feature } from '../types';
import { getFeatureIcon } from './Features';

interface BentoGridProps {
  features: Feature[];
  activeCardId: string | null;
  onHover: (id: string) => void;
  onLeave: () => void;
}

const BentoGrid: React.FC<BentoGridProps> = ({ features, activeCardId, onHover, onLeave }) => {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    target.style.setProperty('--mouse-x', `${x}%`);
    target.style.setProperty('--mouse-y', `${y}%`);
  }, []);

  return (
    <div className="bento-grid" role="list">
      {features.map((feature) => {
        const isActive = activeCardId === feature.id;
        const spanClass = feature.span === 'wide' ? 'bento-wide' : '';

        return (
          <div
            key={feature.id}
            role="listitem"
            className={`bento-item ${spanClass} ${isActive ? 'active' : ''}`}
            onMouseEnter={() => onHover(feature.id)}
            onMouseLeave={onLeave}
            onMouseMove={handleMouseMove}
          >
            {/* Icon */}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200 ${
              isActive
                ? 'bg-primary/20 border border-primary/30'
                : 'bg-white/5 border border-white/5'
            }`}>
              {getFeatureIcon(feature.icon, isActive ? 'text-primary' : 'text-on-surface-variant')}
            </div>

            {/* Title */}
            <h3 className="font-mono text-lg font-semibold text-white mb-3 tracking-tight">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-4">
              {feature.description}
            </p>

            {/* Details — shown when active */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isActive ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pt-4 border-t border-white/10">
                <p className="font-sans text-xs text-on-surface-variant/80 leading-relaxed">
                  {feature.details}
                </p>
              </div>
            </div>

            {/* Decorative corner accent */}
            <div className={`absolute top-0 right-0 w-20 h-20 transition-opacity duration-200 ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="w-full h-full bg-gradient-to-bl from-primary/10 via-transparent to-transparent rounded-bl-3xl" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BentoGrid;
