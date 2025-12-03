import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { BUSINESS, COPY } from '../brand.config';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-brand-primary text-white' : 'bg-white text-brand-text'}`}>
            <Scissors size={20} />
          </div>
          <span className={`font-serif text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-brand-text' : 'text-brand-text md:text-white'}`}>
            {BUSINESS.name.short}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase hover:text-brand-secondary transition-colors ${
                isScrolled ? 'text-brand-text' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all transform hover:scale-105 ${
              isScrolled
                ? 'bg-brand-text text-white hover:bg-brand-secondary'
                : 'bg-white text-brand-text hover:bg-brand-secondary hover:text-white'
            }`}
          >
            {COPY.nav.bookButton}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-brand-text' : 'text-brand-text md:text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-brand-bg z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2"
          >
            <X size={32} />
          </button>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-3xl text-brand-text hover:text-brand-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-brand-text text-white rounded-full text-lg font-medium"
          >
            {COPY.nav.mobileBookButton}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
