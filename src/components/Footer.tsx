import React from 'react';
import { ZapIcon, XIcon, GitHubIcon, LinkedInIcon } from '../icons';

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Integrations', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Community', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0d0d15]/80 pt-16 pb-8" role="contentinfo">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2" aria-label="AetherData Home">
              <div className="bg-gradient-to-r from-primary to-secondary p-1.5 rounded-lg">
                <ZapIcon size={16} className="text-black" />
              </div>
              <span className="font-mono text-md font-bold text-white">AetherData</span>
            </a>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs">
              AI-driven data automation platform that transforms unstructured enterprise data into structured intelligence at scale.
            </p>
            <div className="flex gap-3">
              {/* Social links */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all duration-150"
                aria-label="X (formerly Twitter)"
              >
                <XIcon size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all duration-150"
                aria-label="GitHub"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all duration-150"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[11px] font-mono text-on-surface uppercase tracking-[0.15em] font-bold mb-5">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[11px] font-mono text-on-surface uppercase tracking-[0.15em] font-bold mb-5">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-mono text-on-surface uppercase tracking-[0.15em] font-bold mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-on-surface-variant/60 font-mono">
            © 2026 AetherData AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-on-surface-variant/60 hover:text-on-surface-variant transition-colors duration-150">
              Terms of Service
            </a>
            <span className="text-on-surface-variant/30">·</span>
            <a href="#" className="text-xs text-on-surface-variant/60 hover:text-on-surface-variant transition-colors duration-150">
              Privacy Policy
            </a>
            <span className="text-on-surface-variant/30">·</span>
            <a href="#" className="text-xs text-on-surface-variant/60 hover:text-on-surface-variant transition-colors duration-150">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
