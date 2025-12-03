import React from 'react';
import { Heart, Award, Clock } from 'lucide-react';
import { COPY } from '../brand.config';

const About: React.FC = () => {
  const icons = [Heart, Award, Clock];

  return (
    <section id="about" className="py-24 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop"
                alt="Groomer hugging dog"
                className="rounded-3xl w-full h-64 object-cover translate-y-8"
              />
              <img
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop"
                alt="Dog getting haircut"
                className="rounded-3xl w-full h-64 object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-xl text-center w-40 h-40 flex flex-col justify-center items-center z-10 border-4 border-brand-bg">
              <span className="font-serif text-4xl font-bold text-brand-secondary">{COPY.about.badgeNumber}</span>
              <span className="text-xs uppercase tracking-widest text-brand-text font-bold mt-1">{COPY.about.badgeText}</span>
            </div>
          </div>

          <div>
            <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm mb-4 block">{COPY.about.label}</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-text mb-6 leading-tight">
              {COPY.about.heading}
            </h2>
            <p className="text-lg text-brand-text/70 mb-6 leading-relaxed">
              {COPY.about.paragraph1}
            </p>
            <p className="text-brand-text/70 mb-10 leading-relaxed">
              {COPY.about.paragraph2}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {COPY.about.values.map((value, index) => {
                const Icon = icons[index];
                return (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm">
                      <Icon size={20} />
                    </div>
                    <h4 className="font-bold text-brand-text">{value.title}</h4>
                    <p className="text-xs text-brand-text/60">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
