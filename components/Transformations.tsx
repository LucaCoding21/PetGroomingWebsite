import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { TRANSFORMATIONS_DATA, COPY } from '../brand.config';
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from './ScrollAnimations';

const Transformations: React.FC = () => {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-brand-secondary font-bold tracking-widest uppercase text-sm mb-4">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles size={16} />
              </motion.span>
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

        <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TRANSFORMATIONS_DATA.map((item) => (
            <StaggerItem key={item.id}>
              <HoverCard>
                <motion.div
                  className="group bg-white rounded-3xl p-4 shadow-xl flex flex-col"
                  whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="relative h-80 rounded-2xl overflow-hidden flex">
                    {/* Before Image */}
                    <motion.div
                      className="w-1/2 relative border-r-2 border-white overflow-hidden"
                      initial={{ clipPath: 'inset(0 100% 0 0)' }}
                      whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
                    >
                      <img
                        src={item.imageBefore}
                        alt="Before grooming"
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        className="absolute top-3 left-3 bg-black/60 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        Before
                      </motion.div>
                    </motion.div>
                    {/* After Image */}
                    <motion.div
                      className="w-1/2 relative overflow-hidden"
                      initial={{ clipPath: 'inset(0 0 0 100%)' }}
                      whileInView={{ clipPath: 'inset(0 0 0 0%)' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4, ease: [0.77, 0, 0.175, 1] }}
                    >
                      <img
                        src={item.imageAfter}
                        alt="After grooming"
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        className="absolute bottom-3 right-3 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, type: 'spring' }}
                      >
                        After
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="pt-6 pb-2 px-2 text-center">
                    <h3 className="font-serif text-2xl font-bold text-brand-text mb-2">{item.title}</h3>
                    <p className="text-brand-text/60 text-sm italic">{item.caption}</p>
                  </div>
                </motion.div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <motion.a
              href="#gallery"
              className="inline-flex items-center gap-2 text-brand-text font-bold border-b-2 border-brand-primary pb-1 hover:text-brand-primary transition-colors"
              whileHover={{ x: 5 }}
            >
              {COPY.transformations.viewGallery}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Transformations;
