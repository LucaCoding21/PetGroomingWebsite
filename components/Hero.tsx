import React from 'react';
import { ArrowDown } from 'lucide-react';
import { BUSINESS, COPY } from '../brand.config';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=2600&auto=format&fit=crop"
          alt="Happy dog"
          className="w-full h-full object-cover object-center transform scale-105 animate-fade-up"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-brand-text/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-0 pt-20">
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block py-2 px-6 border border-white/30 bg-white/10 backdrop-blur-md rounded-full text-white text-xs md:text-sm font-bold tracking-widest uppercase mb-8 shadow-2xl">
            {COPY.hero.badge}
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[0.9] tracking-tight animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
          {COPY.hero.headlineMain} <br/>
          <span className="italic font-light text-brand-primary-light">{COPY.hero.headlineAccent}</span>
        </h1>

        <p className="max-w-md md:max-w-xl text-white/90 text-lg md:text-xl font-light leading-relaxed mb-10 animate-fade-up opacity-0" style={{ animationDelay: '0.3s' }}>
          {COPY.hero.description}
        </p>

        <div className="flex flex-col md:flex-row gap-4 animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
          <a
            href={`tel:${BUSINESS.contact.phone}`}
            className="px-10 py-4 bg-white text-brand-text rounded-full font-bold text-lg hover:bg-brand-primary hover:text-white transition-all shadow-xl hover:shadow-2xl hover:scale-105 duration-300"
          >
            {COPY.hero.ctaPrimary}
          </a>
          <a
            href="#services"
            className="px-10 py-4 bg-transparent border border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            {COPY.hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce text-white/70">
        <ArrowDown size={32} strokeWidth={1.5} />
      </div>
    </section>
  );
};

export default Hero;
