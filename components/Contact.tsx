import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';
import { BUSINESS, COPY } from '../brand.config';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', pet: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    setTimeout(() => setIsSent(true), 1000);
  };

  return (
    <section id="contact" className="py-24 bg-brand-primary/10 relative">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

          {/* Info Side */}
          <div className="p-10 md:p-16 bg-brand-text text-white flex flex-col justify-between relative overflow-hidden">
             {/* Decorative Circle */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

             <div>
                <h2 className="font-serif text-4xl md:text-5xl mb-6">{COPY.contact.heading}</h2>
                <p className="text-white/70 mb-12">
                  {COPY.contact.description}
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-brand-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Location</h4>
                      <p className="text-white/70">{BUSINESS.contact.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-brand-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone</h4>
                      <p className="text-white/70">{BUSINESS.contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="text-brand-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Hours</h4>
                      <div className="grid grid-cols-2 gap-x-8 text-white/70 text-sm">
                        <span>Mon - Fri</span> <span>{BUSINESS.hours.weekday}</span>
                        <span>Saturday</span> <span>{BUSINESS.hours.weekend}</span>
                        <span>Sunday</span> <span>{BUSINESS.hours.sunday}</span>
                      </div>
                    </div>
                  </div>
                </div>
             </div>

             <div className="mt-12">
                <div className="w-full h-48 rounded-2xl bg-gray-800 overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                    alt="Map Location Placeholder"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold tracking-widest uppercase border border-white/30 px-4 py-2 rounded bg-black/30 backdrop-blur-sm">Open in Maps</span>
                  </div>
                </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:p-16 bg-white">
            <h2 className="font-serif text-4xl text-brand-text mb-2">{COPY.contact.formHeading}</h2>
            <p className="text-brand-text/60 mb-8">{COPY.contact.formSubheading}</p>

            {isSent ? (
               <div className="h-full flex flex-col justify-center items-center text-center animate-fade-up">
                 <div className="w-16 h-16 bg-brand-primary/20 text-brand-primary rounded-full flex items-center justify-center mb-4">
                   <Send size={32} />
                 </div>
                 <h3 className="font-serif text-2xl font-bold text-brand-text mb-2">{COPY.contact.successHeading}</h3>
                 <p className="text-brand-text/60">{COPY.contact.successText}</p>
                 <button onClick={() => setIsSent(false)} className="mt-6 text-sm font-bold underline">Send another</button>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-text/50">{COPY.contact.labels.name}</label>
                    <input
                      required
                      type="text"
                      className="w-full border-b border-gray-200 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors placeholder-gray-300 bg-transparent"
                      placeholder={COPY.contact.placeholders.name}
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-text/50">{COPY.contact.labels.pet}</label>
                    <input
                      required
                      type="text"
                      className="w-full border-b border-gray-200 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors placeholder-gray-300 bg-transparent"
                      placeholder={COPY.contact.placeholders.pet}
                      value={formState.pet}
                      onChange={e => setFormState({...formState, pet: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-text/50">{COPY.contact.labels.email}</label>
                  <input
                    required
                    type="email"
                    className="w-full border-b border-gray-200 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors placeholder-gray-300 bg-transparent"
                    placeholder={COPY.contact.placeholders.email}
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-text/50">{COPY.contact.labels.message}</label>
                  <textarea
                    rows={4}
                    className="w-full border-b border-gray-200 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors placeholder-gray-300 bg-transparent resize-none"
                    placeholder={COPY.contact.placeholders.message}
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-text text-white rounded-xl font-bold hover:bg-brand-secondary transition-colors flex justify-center items-center gap-2 mt-4"
                >
                  <span>{COPY.contact.submitButton}</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
