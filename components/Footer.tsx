import React from 'react';
import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';
import { BUSINESS, COPY } from '../brand.config';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-bg pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
               <div className="p-2 bg-brand-text text-white rounded-full">
                  <Scissors size={20} />
               </div>
               <span className="font-serif text-xl font-bold text-brand-text">{BUSINESS.name.short}</span>
            </a>
            <p className="text-brand-text/60 leading-relaxed">
              {COPY.footer.tagline}
            </p>
            <div className="flex gap-4">
              <a href={BUSINESS.links.instagram} className="w-10 h-10 rounded-full border border-brand-text/20 flex items-center justify-center text-brand-text hover:bg-brand-text hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href={BUSINESS.links.facebook} className="w-10 h-10 rounded-full border border-brand-text/20 flex items-center justify-center text-brand-text hover:bg-brand-text hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              {BUSINESS.social.twitter && (
                <a href="#" className="w-10 h-10 rounded-full border border-brand-text/20 flex items-center justify-center text-brand-text hover:bg-brand-text hover:text-white transition-colors">
                  <Twitter size={18} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-brand-text">{COPY.footer.sections.explore}</h4>
            <ul className="space-y-4 text-brand-text/70">
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-brand-primary transition-colors">Gallery</a></li>
              <li><a href="#faq" className="hover:text-brand-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-brand-text">{COPY.footer.sections.services}</h4>
            <ul className="space-y-4 text-brand-text/70">
              {COPY.footer.servicesList.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-brand-text">{COPY.footer.sections.legal}</h4>
            <ul className="space-y-4 text-brand-text/70">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-brand-text/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-text/50">
          <p>&copy; {new Date().getFullYear()} {COPY.footer.copyright}</p>
          <p>{COPY.footer.madeIn}</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
