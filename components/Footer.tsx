import React from 'react';
import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { BUSINESS, COPY } from '../brand.config';
import { FadeIn, StaggerContainer, StaggerItem } from './ScrollAnimations';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: BUSINESS.links.instagram },
    { icon: Facebook, href: BUSINESS.links.facebook },
    ...(BUSINESS.social.twitter ? [{ icon: Twitter, href: '#' }] : []),
  ];

  return (
    <footer className="bg-brand-bg pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          <FadeIn>
            <div className="space-y-6">
              <motion.a
                href="#"
                className="flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="p-2 bg-brand-text text-white rounded-full"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Scissors size={20} />
                </motion.div>
                <span className="font-serif text-xl font-bold text-brand-text">{BUSINESS.name.short}</span>
              </motion.a>
              <p className="text-brand-text/60 leading-relaxed">
                {COPY.footer.tagline}
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-brand-text/20 flex items-center justify-center text-brand-text hover:bg-brand-text hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <h4 className="font-bold text-lg mb-6 text-brand-text">{COPY.footer.sections.explore}</h4>
              <StaggerContainer staggerDelay={0.05} className="space-y-4 text-brand-text/70">
                {['Services', 'About Us', 'Gallery', 'FAQ'].map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.a
                      href={`#${item.toLowerCase().replace(' ', '')}`}
                      className="block hover:text-brand-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h4 className="font-bold text-lg mb-6 text-brand-text">{COPY.footer.sections.services}</h4>
              <StaggerContainer staggerDelay={0.05} className="space-y-4 text-brand-text/70">
                {COPY.footer.servicesList.map((service, index) => (
                  <StaggerItem key={index}>
                    <motion.span
                      className="block"
                      whileHover={{ x: 5, color: 'var(--brand-primary)' }}
                    >
                      {service}
                    </motion.span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div>
              <h4 className="font-bold text-lg mb-6 text-brand-text">{COPY.footer.sections.legal}</h4>
              <StaggerContainer staggerDelay={0.05} className="space-y-4 text-brand-text/70">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.a
                      href="#"
                      className="block hover:text-brand-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

        </div>

        <motion.div
          className="border-t border-brand-text/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-text/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} {COPY.footer.copyright}</p>
          <motion.p
            whileHover={{ scale: 1.02 }}
          >
            {COPY.footer.madeIn}
          </motion.p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
