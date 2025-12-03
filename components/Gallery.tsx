import React from 'react';
import { Instagram, Camera } from 'lucide-react';
import { GALLERY_IMAGES, COPY, BUSINESS } from '../brand.config';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-brand-text overflow-hidden text-white relative">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <div className="flex items-center gap-2 text-brand-primary-light font-bold tracking-widest uppercase text-sm mb-4">
            <Camera size={16} />
            <span>{COPY.gallery.label}</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-2">{COPY.gallery.heading}</h2>
          <p className="text-white/60 max-w-lg mt-4">
            {COPY.gallery.description}
          </p>
        </div>
        <a
          href={BUSINESS.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-bold border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-brand-text transition-all group"
        >
          <Instagram size={18} />
          <span>@{BUSINESS.social.instagram}</span>
        </a>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full py-12">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-text to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-text to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-6 animate-scroll w-[200%] hover:[animation-play-state:paused]">
          {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((src, index) => (
            <div
              key={index}
              className="relative w-[350px] h-[450px] flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery image ${index}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="font-serif italic text-2xl text-white">{COPY.gallery.hoverText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
