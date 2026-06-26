import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

/**
 * App — Root composition component with ZERO state.
 *
 * Architecture ensures:
 * - No global state — each section manages its own
 * - Pricing state is fully isolated (currency, billing cycle)
 * - Features state is isolated (activeCardId for Bento ↔ Accordion)
 * - FAQ has its own accordion state
 * - Navbar has its own scroll/mobile state
 *
 * Changing currency/billing in Pricing does NOT re-render any other section.
 */
export default function App() {
  // Scroll-reveal animation using Intersection Observer
  // Uses CSS class-based transitions (not JS animations) for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const sections = document.querySelectorAll('[data-reveal]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Skip-to-content link for accessibility (keyboard users) */}
      <a href="#hero" className="skip-to-content">
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustedBy />
        <div data-reveal><Features /></div>
        <div data-reveal><Pricing /></div>
        <div data-reveal><Testimonials /></div>
        <div data-reveal><FAQ /></div>
        <div data-reveal><CTABanner /></div>
      </main>
      <Footer />

      {/* Background layers — fixed behind everything */}
      <div className="aurora-bg" aria-hidden="true" />
      <div className="fixed inset-0 bg-grid pointer-events-none z-[-1]" aria-hidden="true" />
    </>
  );
}
