import React, { useState } from 'react';
import { ChevronDownIcon } from '../icons';
import type { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does AetherData process unstructured data?',
    answer: 'AetherData uses advanced AI models (powered by Gemini) to parse, classify, and extract structured information from any unstructured data source — including emails, PDFs, logs, and natural language text. Our multi-node pipeline architecture processes data in stages, with each stage capable of running different AI operations.',
  },
  {
    id: 'faq-2',
    question: 'Can I integrate AetherData with my existing tools?',
    answer: 'Absolutely. AetherData supports 200+ native integrations including databases (PostgreSQL, MongoDB), message queues (Kafka, RabbitMQ), cloud storage (S3, GCS), and SaaS platforms (Slack, Salesforce, HubSpot). We also provide a connector SDK for building custom integrations with proprietary systems.',
  },
  {
    id: 'faq-3',
    question: 'What kind of AI models are available?',
    answer: 'AetherData integrates with Google Gemini models for AI processing stages. This includes sentiment analysis, entity extraction, content classification, summarization, translation, and custom instruction-based processing. Enterprise plans include the ability to fine-tune models on your own data.',
  },
  {
    id: 'faq-4',
    question: 'How does pricing work for high-volume data?',
    answer: 'Our pricing is based on the number of records processed per month. All plans include a generous base allocation, and additional records are billed at competitive per-record rates. Enterprise plans offer custom volume pricing with committed-use discounts. Annual billing saves you 20% across all plans.',
  },
  {
    id: 'faq-5',
    question: 'Is my data secure?',
    answer: 'Yes. AetherData is SOC 2 Type II certified with end-to-end encryption (AES-256 at rest, TLS 1.3 in transit). We support SSO via SAML/OIDC, role-based access control, IP allowlisting, and comprehensive audit logging. Enterprise plans include on-premise deployment options for maximum data sovereignty.',
  },
  {
    id: 'faq-6',
    question: 'How long does it take to set up a pipeline?',
    answer: 'Most teams have their first pipeline running within minutes. Our natural language pipeline builder lets you describe your workflow in plain English, and AI constructs the processing graph automatically. Pre-built templates for common use cases (feedback routing, lead enrichment, log analysis) can be deployed instantly.',
  },
];

/**
 * FAQ section — isolated accordion state (separate from Features accordion).
 */
const FAQ: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-[var(--spacing-section-mobile)] lg:py-[var(--spacing-section)] relative"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            id="faq-heading"
            className="font-mono text-3xl md:text-[48px] font-semibold leading-[1.2] text-white mb-4"
          >
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="font-sans text-lg text-on-surface-variant leading-[1.6]">
            Everything you need to know about AetherData.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqData.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 ease-in-out overflow-hidden ${
                  isExpanded
                    ? 'bg-[#18181B]/90 border-white/15'
                    : 'bg-[#18181B]/50 border-white/8 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                  aria-expanded={isExpanded}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="font-sans text-sm font-medium text-white pr-4">
                    {item.question}
                  </span>
                  <div className={`accordion-chevron shrink-0 ${isExpanded ? 'rotated' : ''}`}>
                    <ChevronDownIcon size={20} className="text-on-surface-variant" />
                  </div>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  className={`accordion-content ${isExpanded ? 'expanded' : ''}`}
                  style={isExpanded ? { paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingBottom: '1.5rem' } : {}}
                >
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed border-t border-white/5 pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
