import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TRANSFORMATIONS_DATA, COPY } from '../brand.config';
import { FadeIn, StaggerContainer, StaggerItem } from './ScrollAnimations';

const Transformations: React.FC = () => {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-brand-secondary font-bold tracking-widest uppercase text-sm mb-4">
              <Sparkles size={16} />
              <span>{COPY.transformations.label}</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-text mb-4">{COPY.transformations.heading}</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-brand-text/70 max-w-2xl mx-auto">
              {COPY.transformations.description}
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TRANSFORMATIONS_DATA.map((item) => (
            <StaggerItem key={item.id}>
              <div className="group bg-white rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-80 rounded-2xl overflow-hidden flex">
                  {/* Before Image */}
                  <div className="w-1/2 relative border-r-2 border-white">
                    <img
                      src={item.imageBefore}
                      alt="Before grooming"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full">
                      Before
                    </div>
                  </div>
                  {/* After Image */}
                  <div className="w-1/2 relative">
                    <img
                      src={item.imageAfter}
                      alt="After grooming"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 right-3 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      After
                    </div>
                  </div>
                </div>

                <div className="pt-6 pb-2 px-2 text-center">
                  <h3 className="font-serif text-2xl font-bold text-brand-text mb-2">{item.title}</h3>
                  <p className="text-brand-text/60 text-sm italic">{item.caption}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="mt-16 text-center">
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 text-brand-text font-bold border-b-2 border-brand-primary pb-1 hover:text-brand-primary transition-colors"
            >
              {COPY.transformations.viewGallery}
              <ArrowRight size={18} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Transformations;
