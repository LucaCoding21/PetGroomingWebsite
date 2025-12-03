import React from 'react';
import { Instagram, Camera } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GALLERY_IMAGES, COPY, BUSINESS } from '../brand.config';
import { FadeIn, SlideIn } from './ScrollAnimations';

const Gallery: React.FC = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <section id="gallery" ref={containerRef} className="py-24 bg-brand-text overflow-hidden text-white relative">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <FadeIn>
            <div className="flex items-center gap-2 text-brand-primary-light font-bold tracking-widest uppercase text-sm mb-4">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Camera size={16} />
              </motion.span>
              <span>{COPY.gallery.label}</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl mb-2">{COPY.gallery.heading}</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/60 max-w-lg mt-4">
              {COPY.gallery.description}
            </p>
          </FadeIn>
        </div>
        <SlideIn direction="right" delay={0.3}>
          <motion.a
            href={BUSINESS.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-brand-text transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Instagram size={18} />
            <span>@{BUSINESS.social.instagram}</span>
          </motion.a>
        </SlideIn>
      </div>

      {/* Parallax Scroll Gallery */}
      <div className="relative w-full py-12 space-y-6">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-text to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-text to-transparent z-10 pointer-events-none"></div>

        {/* First Row - moves left on scroll */}
        <motion.div className="flex gap-6" style={{ x: x1 }}>
          {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((src, index) => (
            <motion.div
              key={`row1-${index}`}
              className="relative w-[350px] h-[450px] flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={src}
                alt={`Gallery image ${index}`}
                className="w-full h-full object-cover filter brightness-90"
                whileHover={{ scale: 1.1, brightness: 1 }}
                transition={{ duration: 0.7 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-serif italic text-2xl text-white">{COPY.gallery.hoverText}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row - moves right on scroll */}
        <motion.div className="flex gap-6" style={{ x: x2 }}>
          {[...GALLERY_IMAGES.slice().reverse(), ...GALLERY_IMAGES.slice().reverse()].map((src, index) => (
            <motion.div
              key={`row2-${index}`}
              className="relative w-[300px] h-[380px] flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={src}
                alt={`Gallery image ${index}`}
                className="w-full h-full object-cover filter brightness-90"
                whileHover={{ scale: 1.1, brightness: 1 }}
                transition={{ duration: 0.7 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-serif italic text-xl text-white">{COPY.gallery.hoverText}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
