import React from 'react';
import { Star, Plus, Minus, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA, FAQ_DATA, COPY } from '../brand.config';

const Testimonials: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-brand-primary/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Reviews Header */}
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">{COPY.testimonials.label}</span>
          <h2 className="font-serif text-4xl md:text-6xl text-brand-text mb-6">{COPY.testimonials.heading}</h2>
          <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-sm">
            <div className="flex text-yellow-500">
              {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={16} />)}
            </div>
            <span className="text-brand-text font-bold text-sm tracking-wide">{COPY.testimonials.ratingText}</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative group">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-brand-text text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Quote size={20} />
              </div>

              <div className="mt-4 mb-6">
                <p className="text-brand-text/80 italic leading-relaxed text-lg">"{t.review}"</p>
              </div>

              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover ring-4 ring-brand-bg/30" />
                <div>
                  <h4 className="font-bold text-brand-text text-base">{t.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-brand-text/60">
                    <span className="font-medium text-brand-primary">{t.petName}</span>
                    <span>•</span>
                    <span>{t.petType}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm mb-4 block">{COPY.faq.label}</span>
              <h2 className="font-serif text-4xl text-brand-text mb-6">{COPY.faq.heading}</h2>
              <p className="text-brand-text/70 mb-8 leading-relaxed">
                {COPY.faq.description}
              </p>
              <a href="#contact" className="inline-block px-8 py-3 bg-brand-text text-white rounded-full font-bold hover:bg-brand-secondary transition-colors shadow-lg hover:shadow-xl">
                {COPY.faq.ctaButton}
              </a>
            </div>

            <div className="space-y-4">
              {FAQ_DATA.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                  <button
                    className="w-full flex justify-between items-center py-4 text-left group"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className={`font-serif text-xl ${openFaq === index ? 'text-brand-primary' : 'text-brand-text'} transition-colors group-hover:text-brand-primary`}>
                      {faq.question}
                    </span>
                    <span className={`transition-transform duration-300 w-8 h-8 flex items-center justify-center rounded-full bg-brand-bg/20 text-brand-text ${openFaq === index ? 'rotate-180 bg-brand-primary text-white' : ''}`}>
                      {openFaq === index ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-brand-text/70 pb-4 leading-relaxed pl-2 border-l-2 border-brand-primary/20 ml-1">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
