import React, { useState, useEffect } from 'react';
import { ZapIcon, MenuIcon, XMarkIcon } from '../icons';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-[#13131b]/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-primary/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav aria-label="Main navigation" className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" aria-label="AetherData Home">
            <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg flex items-center justify-center transition-transform duration-200 ease-out group-hover:scale-110">
              <ZapIcon size={18} className="text-black" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-lg font-bold text-on-surface tracking-tighter">AetherData</span>
              <span className="text-[10px] font-mono bg-primary/10 text-primary px-2 py-0.5 rounded border border-primary/20 uppercase tracking-wider">v2.0</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-150 ease-out"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="hidden sm:inline-flex btn-primary px-5 py-2.5 text-sm items-center gap-2"
            >
              Get Started
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors duration-150"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <XMarkIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-80 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-on-surface-variant hover:text-primary py-3 px-3 rounded-lg hover:bg-white/5 transition-all duration-150 ease-out"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="btn-primary px-5 py-3 text-sm text-center mt-2"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
