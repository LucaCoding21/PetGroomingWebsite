import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES_DATA, COPY, BUSINESS } from '../brand.config';
import { FadeIn, StaggerContainer, StaggerItem } from './ScrollAnimations';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="flex items-center gap-2 text-brand-primary font-bold tracking-wider uppercase text-sm mb-4">
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Sparkles size={16} />
                </motion.span>
                <span>{COPY.services.label}</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl md:text-6xl text-brand-text leading-tight">
                {COPY.services.heading} <span className="italic text-brand-primary">{COPY.services.headingAccent}</span>.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <p className="max-w-sm text-brand-text/70 leading-relaxed">
              {COPY.services.description}
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <StaggerItem key={service.id}>
              <div className="group rounded-3xl overflow-hidden bg-white border border-brand-bg hover:border-brand-primary transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/10 flex flex-col h-full">
                {/* Image Container */}
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-brand-text font-bold text-sm shadow-lg">
                    Start {service.priceStart}
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-brand-text/70 mb-8 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    <div className="w-full h-px bg-brand-text/10 mb-6"></div>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm font-medium text-brand-text/80"
                        >
                          <span className="mt-0.5 text-brand-primary bg-brand-primary/10 p-0.5 rounded-full">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="w-full block py-3 text-center border border-brand-text rounded-xl text-sm font-bold uppercase tracking-wide hover:bg-brand-text hover:text-white transition-all duration-200"
                    >
                      {COPY.services.bookButton}
                    </a>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="mt-20 flex flex-col items-center text-center">
            <p className="text-brand-text/60 text-sm mb-4 uppercase tracking-widest">{COPY.services.ctaQuestion}</p>
            <motion.a
              href={`tel:${BUSINESS.contact.phone}`}
              className="inline-flex items-center gap-2 text-2xl font-serif italic text-brand-text hover:text-brand-secondary transition-colors group"
              whileHover={{ x: 5 }}
            >
              {COPY.services.ctaText}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight />
              </motion.span>
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;
