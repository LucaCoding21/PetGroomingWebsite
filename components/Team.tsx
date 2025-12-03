import React from 'react';
import { Heart } from 'lucide-react';
import { TEAM_DATA, COPY } from '../brand.config';

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">{COPY.team.label}</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-text leading-tight">
              {COPY.team.heading}
            </h2>
          </div>
          <p className="max-w-md text-brand-text/70 text-right md:text-left">
            {COPY.team.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_DATA.map((member) => (
            <div key={member.id} className="group relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-brand-bg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                    <Heart size={16} className="fill-current" />
                    <span>{COPY.team.badge}</span>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-brand-text">{member.name}</h3>
              <p className="text-brand-secondary font-medium text-sm mb-3 uppercase tracking-wide">{member.role}</p>
              <p className="text-brand-text/70 leading-relaxed text-sm">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
