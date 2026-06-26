import React, { useState, useCallback, useRef } from 'react';
import { useIsMobile } from '../hooks/useMediaQuery';
import BentoGrid from './BentoGrid';
import Accordion from './Accordion';
import type { Feature } from '../types';
import {
  ArrowPathIcon,
  ArrowTrendingUpIcon,
  ChartPieIcon,
  Cog8ToothIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from '../icons';

const features: Feature[] = [
  {
    id: 'ai-pipelines',
    title: 'AI-Powered Pipelines',
    description: 'Build intelligent data flows with natural language. Our AI engine understands your intent and constructs multi-node processing graphs automatically.',
    icon: 'sparkles',
    span: 'wide',
    details: 'Leverage Gemini AI models to classify, extract, and transform data at each pipeline stage. No code required — describe your workflow in plain English.',
  },
  {
    id: 'zero-latency',
    title: 'Zero-Latency Processing',
    description: 'Process millions of records per second with our distributed stream architecture. Real-time data flows with sub-millisecond overhead.',
    icon: 'trending',
    span: 'normal',
    details: 'Built on an event-driven architecture with horizontal auto-scaling. Handle traffic spikes seamlessly with automatic load balancing.',
  },
  {
    id: 'smart-routing',
    title: 'Smart Data Routing',
    description: 'Automatically route data based on content, urgency, and business rules. AI-driven conditional branching for complex workflows.',
    icon: 'arrow-path',
    span: 'normal',
    details: 'Define routing rules in natural language or use our visual rule builder. Supports conditional branching, parallel processing, and failover routing.',
  },
  {
    id: 'analytics',
    title: 'Real-Time Analytics',
    description: 'Monitor every pipeline stage with live metrics. Track latency, throughput, token usage, and error rates in a unified dashboard.',
    icon: 'chart',
    span: 'normal',
    details: 'Comprehensive observability with real-time dashboards, alerting, and anomaly detection. Export metrics to your preferred monitoring stack.',
  },
  {
    id: 'enterprise-security',
    title: 'Enterprise Security',
    description: 'SOC 2 compliant with end-to-end encryption, SSO, RBAC, and comprehensive audit logging for enterprise deployments.',
    icon: 'shield',
    span: 'normal',
    details: 'Data encryption at rest and in transit. Role-based access control, single sign-on integration, and detailed audit trails for compliance.',
  },
  {
    id: 'custom-connectors',
    title: 'Custom Connectors',
    description: 'Connect to 200+ data sources and destinations. Build custom connectors with our SDK or use pre-built integrations.',
    icon: 'cog',
    span: 'wide',
    details: 'Native integrations with databases, APIs, message queues, cloud storage, and SaaS platforms. Custom connector SDK for proprietary systems.',
  },
];

/**
 * Icon component resolver
 */
export function getFeatureIcon(icon: string, className: string = '') {
  switch (icon) {
    case 'sparkles': return <SparklesIcon className={className} size={24} />;
    case 'trending': return <ArrowTrendingUpIcon className={className} size={24} />;
    case 'arrow-path': return <ArrowPathIcon className={className} size={24} />;
    case 'chart': return <ChartPieIcon className={className} size={24} />;
    case 'shield': return <ShieldCheckIcon className={className} size={24} />;
    case 'cog': return <Cog8ToothIcon className={className} size={24} />;
    default: return <SparklesIcon className={className} size={24} />;
  }
}

/**
 * Features section — the core Bento Grid ↔ Accordion component.
 *
 * ★ KEY REQUIREMENT: State Persistence
 * - `activeCardId` is shared between BentoGrid and Accordion
 * - If user hovers a bento card and resizes to mobile,
 *   that same card is already expanded in the accordion
 * - The mouseLeave is suppressed during resize to prevent state loss
 */
const Features: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const isResizing = useRef(false);
  const pendingLeaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track resize events to suppress mouseLeave during resize.
  // Uses a wider window (500ms) to catch edge cases where
  // mouseLeave fires slightly before the resize event.
  React.useEffect(() => {
    let resizeTimeout: ReturnType<typeof setTimeout>;
    let lastWidth = window.innerWidth;

    const onResize = () => {
      const newWidth = window.innerWidth;
      // Only flag as resizing if width actually changed (not just height)
      if (Math.abs(newWidth - lastWidth) > 10) {
        isResizing.current = true;
        // Cancel any pending leave that was queued
        if (pendingLeaveTimer.current) {
          clearTimeout(pendingLeaveTimer.current);
          pendingLeaveTimer.current = null;
        }
      }
      lastWidth = newWidth;
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        isResizing.current = false;
      }, 500);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimeout);
      if (pendingLeaveTimer.current) clearTimeout(pendingLeaveTimer.current);
    };
  }, []);

  const handleHover = useCallback((id: string) => {
    // Cancel any pending leave
    if (pendingLeaveTimer.current) {
      clearTimeout(pendingLeaveTimer.current);
      pendingLeaveTimer.current = null;
    }
    setActiveCardId(id);
  }, []);

  const handleLeave = useCallback(() => {
    // Don't clear active card during resize — preserves state for Bento→Accordion transition.
    // Use a small delay to give the resize handler time to set isResizing.
    if (isResizing.current) return;
    pendingLeaveTimer.current = setTimeout(() => {
      if (!isResizing.current) {
        setActiveCardId(null);
      }
      pendingLeaveTimer.current = null;
    }, 100);
  }, []);

  const handleToggle = useCallback((id: string) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="py-[var(--spacing-section-mobile)] lg:py-[var(--spacing-section)] relative"
    >
      {/* Background glow */}
      <div className="glow-effect bg-secondary w-[500px] h-[500px] top-[20%] -right-[200px] animate-pulse-glow" style={{ position: 'absolute', animationDelay: '1s' }} />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20 mb-6">
            <Cog8ToothIcon size={14} className="text-secondary" />
            <span className="text-xs font-mono text-secondary uppercase tracking-wider font-medium">Platform Capabilities</span>
          </span>
          <h2
            id="features-heading"
            className="font-mono text-3xl md:text-[48px] font-semibold leading-[1.2] text-white mb-4"
          >
            Everything You Need to{' '}
            <span className="gradient-text">Automate Data</span>
          </h2>
          <p className="font-sans text-lg text-on-surface-variant leading-[1.6] max-w-2xl mx-auto">
            From ingestion to intelligence — AetherData handles the entire data lifecycle with AI-powered automation.
          </p>
        </div>

        {/* Desktop: Bento Grid / Mobile: Accordion */}
        {isMobile ? (
          <Accordion
            features={features}
            activeCardId={activeCardId}
            onToggle={handleToggle}
          />
        ) : (
          <BentoGrid
            features={features}
            activeCardId={activeCardId}
            onHover={handleHover}
            onLeave={handleLeave}
          />
        )}
      </div>
    </section>
  );
};

export default Features;
