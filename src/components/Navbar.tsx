import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ExternalLink, Phone } from 'lucide-react';
import { FoulardIcon, GroupLogo, SdlNationalLogo } from './FoulardIcon';
import { OFFICIAL_INSCRIPTION_FORM_URL, GROUP_CONTACT } from '../data/scoutData';

interface NavbarProps {
  onOpenCloudflareGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'La Meute (8-12 ans)', href: '#section-meute' },
    { label: 'La Troupe (13-17 ans)', href: '#section-troupe' },
    { label: 'Le Clan (17+ ans)', href: '#section-clan' },
    { label: 'Valeurs & Photos', href: '#valeurs-scoutes' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FEF7D2]/95 backdrop-blur-md shadow-md border-b border-yellow-400/80 py-2'
          : 'bg-[#FEF7D2]/90 backdrop-blur-sm border-b border-yellow-300/60 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Authentic Group Diamond Crest + Typography */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 rounded-xl p-1 shrink-0"
          >
            {/* Transparent Group Crest floating seamlessly */}
            <GroupLogo sizeClass="h-11 sm:h-12 w-auto" withShadow={false} />
            <SdlNationalLogo sizeClass="h-9 w-auto hidden sm:flex" />

            <div className="flex items-center gap-2 whitespace-nowrap shrink-0">
              <span className="font-group-name text-base sm:text-lg lg:text-xl font-black text-green-950 tracking-tight group-hover:text-red-700 transition-colors">
                Groupe Sacré-Cœur Gemmayzé
              </span>
              <FoulardIcon size={18} title="Foulard Vert et Jaune SDL" />
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-stone-800 hover:text-green-800 hover:underline underline-offset-4 decoration-2 decoration-red-600 transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action -> Google Forms Official Link */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={OFFICIAL_INSCRIPTION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm shadow-sm transition-all whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 cursor-pointer hover:-translate-y-0.5"
            >
              <FoulardIcon size={18} />
              <span>Inscriptions</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-90" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-yellow-300/80 text-green-950 hover:bg-yellow-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF9D6] border-b-2 border-green-700 shadow-xl px-4 pt-3 pb-6">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold text-stone-900 hover:bg-yellow-200/80 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <FoulardIcon size={18} />
                  <span>{link.label}</span>
                </span>
                <ChevronRight className="w-4 h-4 text-green-800" />
              </a>
            ))}

            <div className="p-3 rounded-xl bg-white/70 border border-yellow-400 text-xs text-stone-800 space-y-1">
              <div><strong>Réunions :</strong> {GROUP_CONTACT.reunionsSchedule}</div>
              <div>
                <strong>CG Mira Harik :</strong>{' '}
                <a href={`tel:${GROUP_CONTACT.cgPhoneClean}`} className="text-red-700 font-bold underline">
                  {GROUP_CONTACT.cgPhone}
                </a>
              </div>
            </div>

            <a
              href={OFFICIAL_INSCRIPTION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full mt-2 px-4 py-3 rounded-xl bg-red-600 text-white font-extrabold text-sm shadow-sm"
            >
              <FoulardIcon size={18} />
              <span>Ouvrir Formulaire Google Forms</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
