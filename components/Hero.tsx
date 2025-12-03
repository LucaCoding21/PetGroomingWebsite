import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BUSINESS, COPY } from '../brand.config';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <img
          src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=2600&auto=format&fit=crop"
          alt="Happy dog"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-brand-text/80"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-0 pt-20"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <span className="inline-block py-2 px-6 border border-white/30 bg-white/10 backdrop-blur-md rounded-full text-white text-xs md:text-sm font-bold tracking-widest uppercase mb-8 shadow-2xl">
            {COPY.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[0.9] tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {COPY.hero.headlineMain} <br/>
          <motion.span
            className="italic font-light text-brand-primary-light inline-block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {COPY.hero.headlineAccent}
          </motion.span>
        </motion.h1>

        <motion.p
          className="max-w-md md:max-w-xl text-white/90 text-lg md:text-xl font-light leading-relaxed mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {COPY.hero.description}
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.a
            href={`tel:${BUSINESS.contact.phone}`}
            className="px-10 py-4 bg-white text-brand-text rounded-full font-bold text-lg shadow-xl transition-colors duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}
            whileTap={{ scale: 0.98 }}
          >
            {COPY.hero.ctaPrimary}
          </motion.a>
          <motion.a
            href="#services"
            className="px-10 py-4 bg-transparent border border-white text-white rounded-full font-bold text-lg backdrop-blur-sm transition-colors duration-300"
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.98 }}
          >
            {COPY.hero.ctaSecondary}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white/70"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={32} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
