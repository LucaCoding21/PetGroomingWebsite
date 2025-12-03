import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { TEAM_DATA, COPY } from '../brand.config';
import { FadeIn, StaggerContainer, StaggerItem, ImageReveal } from './ScrollAnimations';

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <FadeIn>
              <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">{COPY.team.label}</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-text leading-tight">
                {COPY.team.heading}
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <p className="max-w-md text-brand-text/70 text-right md:text-left">
              {COPY.team.description}
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_DATA.map((member) => (
            <StaggerItem key={member.id}>
              <motion.div
                className="group relative"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <ImageReveal className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-brand-bg">
                  <motion.div className="relative w-full h-full">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="flex items-center gap-2 text-white/90 text-sm font-medium"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                        >
                          <Heart size={16} className="fill-current text-red-400" />
                        </motion.span>
                        <span>{COPY.team.badge}</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </ImageReveal>

                <motion.h3
                  className="font-serif text-2xl font-bold text-brand-text"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  className="text-brand-secondary font-medium text-sm mb-3 uppercase tracking-wide"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {member.role}
                </motion.p>
                <motion.p
                  className="text-brand-text/70 leading-relaxed text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {member.bio}
                </motion.p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Team;
