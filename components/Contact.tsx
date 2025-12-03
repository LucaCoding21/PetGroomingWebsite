import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS, COPY } from '../brand.config';
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from './ScrollAnimations';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', pet: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setIsSent(true), 1000);
  };

  const contactInfo = [
    { icon: MapPin, title: 'Location', content: BUSINESS.contact.address },
    { icon: Phone, title: 'Phone', content: BUSINESS.contact.phone },
  ];

  return (
    <section id="contact" className="py-24 bg-brand-primary/10 relative">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          className="bg-white rounded-[3rem] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* Info Side */}
          <div className="p-10 md:p-16 bg-brand-text text-white flex flex-col justify-between relative overflow-hidden">
            {/* Decorative Circle */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div>
              <SlideIn direction="left">
                <h2 className="font-serif text-4xl md:text-5xl mb-6">{COPY.contact.heading}</h2>
              </SlideIn>
              <SlideIn direction="left" delay={0.1}>
                <p className="text-white/70 mb-12">
                  {COPY.contact.description}
                </p>
              </SlideIn>

              <StaggerContainer staggerDelay={0.15} className="space-y-8">
                {contactInfo.map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <motion.span
                        className="text-brand-primary flex-shrink-0"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <item.icon />
                      </motion.span>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-white/70">{item.content}</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
                <StaggerItem>
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.span
                      className="text-brand-primary flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <Clock />
                    </motion.span>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Hours</h4>
                      <div className="grid grid-cols-2 gap-x-8 text-white/70 text-sm">
                        <span>Mon - Fri</span> <span>{BUSINESS.hours.weekday}</span>
                        <span>Saturday</span> <span>{BUSINESS.hours.weekend}</span>
                        <span>Sunday</span> <span>{BUSINESS.hours.sunday}</span>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <FadeIn delay={0.5}>
              <motion.div
                className="mt-12 w-full h-48 rounded-2xl bg-gray-800 overflow-hidden relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  alt="Map Location Placeholder"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="text-sm font-bold tracking-widest uppercase border border-white/30 px-4 py-2 rounded bg-black/30 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    Open in Maps
                  </motion.span>
                </div>
              </motion.div>
            </FadeIn>
          </div>

          {/* Form Side */}
          <div className="p-10 md:p-16 bg-white">
            <FadeIn>
              <h2 className="font-serif text-4xl text-brand-text mb-2">{COPY.contact.formHeading}</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-brand-text/60 mb-8">{COPY.contact.formSubheading}</p>
            </FadeIn>

            <AnimatePresence mode="wait">
              {isSent ? (
                <motion.div
                  key="success"
                  className="h-full flex flex-col justify-center items-center text-center py-16"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-brand-primary/20 text-brand-primary rounded-full flex items-center justify-center mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <Send size={32} />
                    </motion.span>
                  </motion.div>
                  <motion.h3
                    className="font-serif text-2xl font-bold text-brand-text mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {COPY.contact.successHeading}
                  </motion.h3>
                  <motion.p
                    className="text-brand-text/60"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {COPY.contact.successText}
                  </motion.p>
                  <motion.button
                    onClick={() => setIsSent(false)}
                    className="mt-6 text-sm font-bold underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Send another
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FadeIn delay={0.2}>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-brand-text/50">{COPY.contact.labels.name}</label>
                        <motion.input
                          required
                          type="text"
                          className="w-full border-b border-gray-200 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors placeholder-gray-300 bg-transparent"
                          placeholder={COPY.contact.placeholders.name}
                          value={formState.name}
                          onChange={e => setFormState({...formState, name: e.target.value})}
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>
                    </FadeIn>
                    <FadeIn delay={0.25}>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-brand-text/50">{COPY.contact.labels.pet}</label>
                        <motion.input
                          required
                          type="text"
                          className="w-full border-b border-gray-200 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors placeholder-gray-300 bg-transparent"
                          placeholder={COPY.contact.placeholders.pet}
                          value={formState.pet}
                          onChange={e => setFormState({...formState, pet: e.target.value})}
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>
                    </FadeIn>
                  </div>

                  <FadeIn delay={0.3}>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-text/50">{COPY.contact.labels.email}</label>
                      <motion.input
                        required
                        type="email"
                        className="w-full border-b border-gray-200 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors placeholder-gray-300 bg-transparent"
                        placeholder={COPY.contact.placeholders.email}
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.35}>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-text/50">{COPY.contact.labels.message}</label>
                      <motion.textarea
                        rows={4}
                        className="w-full border-b border-gray-200 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors placeholder-gray-300 bg-transparent resize-none"
                        placeholder={COPY.contact.placeholders.message}
                        value={formState.message}
                        onChange={e => setFormState({...formState, message: e.target.value})}
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.4}>
                    <motion.button
                      type="submit"
                      className="w-full py-4 bg-brand-text text-white rounded-xl font-bold hover:bg-brand-secondary transition-colors flex justify-center items-center gap-2 mt-4"
                      whileHover={{ scale: 1.02, boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{COPY.contact.submitButton}</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Send size={18} />
                      </motion.span>
                    </motion.button>
                  </FadeIn>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
