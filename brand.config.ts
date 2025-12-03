/**
 * BRAND CONFIGURATION FILE
 * ========================
 * This is the SINGLE SOURCE OF TRUTH for all brand-specific content.
 * To rebrand this website, update ONLY this file.
 *
 * AI INSTRUCTIONS: When swapping brands, update ALL values below.
 * Make sure copy feels authentic to the NEW business - write as if
 * you ARE that business speaking to their local customers.
 */

// =============================================================================
// THEME COLORS
// =============================================================================
// These colors will be injected into Tailwind. Use hex values.
// Choose colors that match the brand's logo/identity.

export const THEME = {
  // Primary background color (light, used for sections)
  background: '#E8E4F0',        // Lavender - from Kamloops logo

  // Main text color (dark)
  text: '#2D2B3A',              // Dark purple-charcoal

  // Primary accent color (buttons, highlights, links)
  primary: '#7B6B9B',           // Lavender purple

  // Light version of primary (subtle highlights)
  primaryLight: '#D4CEE8',      // Light lavender

  // Secondary accent color (hover states, special elements)
  secondary: '#6B8E6B',         // Sage green from lavender plants
};

// =============================================================================
// BUSINESS INFORMATION
// =============================================================================

export const BUSINESS = {
  // Core identity
  name: {
    full: 'Kamloops Dog Grooming and Spa',
    short: 'Kamloops Dog Grooming',
    tagline: 'Professional dog grooming with a gentle touch',
  },

  // Contact info
  contact: {
    phone: '250-819-7847',
    phoneFormatted: '250-819-7847',
    email: 'info@kamloopsdoggrooming.ca',
    address: 'Kamloops, BC',
    city: 'Kamloops',
    province: 'BC',
  },

  // Business hours
  hours: {
    weekday: '9:00 AM - 5:00 PM',
    weekend: '10:00 AM - 4:00 PM',
    sunday: 'Closed',
  },

  // Social media handles (without @)
  social: {
    instagram: 'KamloopsDogGrooming',
    facebook: 'KamloopsDogGrooming',
    twitter: '',
  },

  // Links
  links: {
    booking: '#contact',
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
};

// =============================================================================
// SECTION COPY - All text content organized by section
// =============================================================================

export const COPY = {
  // Hero section
  hero: {
    badge: `${BUSINESS.contact.city}, ${BUSINESS.contact.province} • Professional Dog Grooming`,
    headlineMain: 'Kamloops Dog',
    headlineAccent: 'Grooming & Spa',
    description: 'Professional dog grooming with a gentle touch. Where your furry friends are treated like family in a calming, lavender-scented spa atmosphere.',
    ctaPrimary: `Call ${BUSINESS.contact.phone}`,
    ctaSecondary: 'Our Services',
  },

  // About section
  about: {
    label: 'Our Philosophy',
    heading: 'Grooming with patience & precision.',
    paragraph1: `At ${BUSINESS.name.full}, we believe every dog deserves to be pampered. Our calm, lavender-scented environment helps anxious pups relax while our experienced groomers work their magic.`,
    paragraph2: "We take the time to understand each dog's unique needs and temperament. Our gentle approach ensures your furry friend leaves looking great and feeling happy—tails wagging guaranteed!",
    badgeNumber: '100%',
    badgeText: 'Cage Free',
    values: [
      { title: 'Low Stress', description: 'Calming techniques for anxious pets' },
      { title: 'Certified', description: 'Expertly trained styling team' },
      { title: '1-on-1', description: 'Undivided attention always' },
    ],
  },

  // Services section
  services: {
    label: 'Our Services',
    heading: 'Quality grooming with a',
    headingAccent: 'gentle touch',
    description: "We use premium, gentle products and take time to understand your dog's individual needs. Every grooming session is tailored to your pup.",
    ctaQuestion: 'Questions about grooming?',
    ctaText: `Call or text us at ${BUSINESS.contact.phone}`,
    bookButton: 'Book This Service',
  },

  // Gallery section
  gallery: {
    label: 'The Lookbook',
    heading: 'Moments in the Studio',
    description: 'A collection of our happy, freshly groomed pups. Follow us on social media to see more transformations!',
    hoverText: BUSINESS.name.short,
  },

  // Transformations section
  transformations: {
    label: 'Real Results',
    heading: 'Gallery of Transformations',
    description: 'From scruffy to stunning! See the difference professional grooming makes for your dog\'s comfort and appearance.',
    viewGallery: 'View Full Gallery',
  },

  // Team section
  team: {
    label: 'Our Team',
    heading: 'Meet the Groomers',
    description: 'Our experienced team of groomers is dedicated to making every dog look and feel their best with gentle, professional care.',
    badge: 'Gentle & Professional',
  },

  // Testimonials section
  testimonials: {
    label: 'Testimonials',
    heading: `Loved by ${BUSINESS.contact.city}`,
    ratingText: '5.0 Star Rating on Google',
  },

  // FAQ section
  faq: {
    label: 'Help Center',
    heading: 'Common Questions',
    description: "Everything you need to know before your first visit. Can't find the answer? Give us a call.",
    ctaButton: 'Ask a Question',
  },

  // Contact section
  contact: {
    heading: 'Visit Us',
    description: `Serving the ${BUSINESS.contact.city} community with professional dog grooming services. Call or text to book your appointment!`,
    formHeading: 'Book a Session',
    formSubheading: 'Tell us about your furry friend.',
    successHeading: 'Message Sent!',
    successText: "We'll get back to you within 24 hours to confirm your spot.",
    submitButton: 'Request Appointment',
    labels: {
      name: 'Your Name',
      pet: "Pet's Name",
      email: 'Email Address',
      message: 'Message / Service Needs',
    },
    placeholders: {
      name: 'John Doe',
      pet: 'Buddy',
      email: 'john@example.com',
      message: "Tell us about the breed, age, and what kind of groom you're looking for.",
    },
  },

  // Footer
  footer: {
    tagline: `Professional dog grooming in ${BUSINESS.contact.city}, ${BUSINESS.contact.province}. Where your pup is treated like family.`,
    copyright: `${BUSINESS.name.full}. All rights reserved.`,
    madeIn: `Serving ${BUSINESS.contact.city}, ${BUSINESS.contact.province} with love.`,
    sections: {
      explore: 'Explore',
      services: 'Services',
      legal: 'Legal',
    },
    servicesList: [
      'Full Grooming',
      'Bath & Tidy',
      'Puppy Introduction',
      'Nail Grinding',
      'Teeth Brushing',
    ],
  },

  // Navbar
  nav: {
    bookButton: 'Book Appointment',
    mobileBookButton: 'Book Now',
  },
};

// =============================================================================
// SERVICES DATA
// =============================================================================

export const SERVICES_DATA = [
  {
    id: 'full-groom',
    title: 'Full Spa Grooming',
    description: "Our complete grooming experience. Breed-specific cuts tailored to your dog's coat type and lifestyle. Includes a relaxing bath with premium products.",
    priceStart: '$75',
    features: ['Premium Shampoo Bath', 'Blow Dry & Brush Out', 'Full Body Haircut', 'Nail Trim & File', 'Ear Cleaning'],
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'bath-tidy',
    title: 'Bath & Tidy',
    description: 'Perfect for maintaining your dog between full grooms. A refreshing bath and light trim to keep them looking and smelling great.',
    priceStart: '$45',
    features: ['Lavender-Scented Bath', 'Face & Paw Trim', 'Sanitary Trim', 'Thorough Brush Out', 'Fresh Cologne'],
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'puppy-intro',
    title: "Puppy's First Groom",
    description: 'A gentle introduction to grooming for puppies. We focus on creating positive experiences with lots of patience and treats.',
    priceStart: '$35',
    features: ['Gentle Puppy Bath', 'Soft Dryer Introduction', 'Nail Trim Practice', 'Face Tidy', 'Positive Reinforcement'],
    image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?q=80&w=800&auto=format&fit=crop',
  },
];

// =============================================================================
// TESTIMONIALS DATA
// =============================================================================

export const TESTIMONIALS_DATA = [
  {
    id: '1',
    name: 'Michelle T.',
    petName: 'Charlie',
    petType: 'Goldendoodle',
    review: `${BUSINESS.name.short} is amazing! Charlie always comes home looking fabulous and so happy. The team truly cares about each dog.`,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?w=200&auto=format&fit=crop&q=60',
  },
  {
    id: '2',
    name: 'Robert M.',
    petName: 'Max',
    petType: 'Husky',
    review: `Best dog groomer in ${BUSINESS.contact.city}! They handled Max's thick coat beautifully. He looks like a whole new dog and sheds so much less.`,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60',
  },
  {
    id: '3',
    name: 'Jennifer S.',
    petName: 'Daisy',
    petType: 'Shih Tzu',
    review: 'So gentle with my nervous little Daisy. She actually enjoys going to the groomer now! The lavender spa atmosphere is so calming.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=60',
  },
];

// =============================================================================
// TEAM DATA
// =============================================================================

export const TEAM_DATA = [
  {
    id: '1',
    name: 'Sarah',
    role: 'Lead Groomer',
    bio: 'With over 8 years of professional grooming experience, Sarah brings expertise and a gentle touch to every dog. She specializes in breed-specific cuts and anxious pups.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Mike',
    role: 'Senior Groomer',
    bio: "Mike's calm demeanor puts even the most nervous dogs at ease. He excels with large breeds and de-shedding treatments, leaving every pup feeling refreshed.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Emma',
    role: 'Grooming Specialist',
    bio: 'Emma has a natural gift with puppies and small breeds. Her patience and loving approach make first-time grooming experiences positive and stress-free.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop',
  },
];

// =============================================================================
// TRANSFORMATIONS DATA
// =============================================================================

export const TRANSFORMATIONS_DATA = [
  {
    id: 1,
    title: 'The Doodle Makeover',
    caption: 'From scruffy to stunning in one spa session.',
    imageBefore: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=600&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Summer Fresh Cut',
    caption: `Ready for the ${BUSINESS.contact.city} sunshine with a cool trim.`,
    imageBefore: 'https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=600&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'The Teddy Bear Look',
    caption: 'Soft, round, and absolutely adorable.',
    imageBefore: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=600&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=600&auto=format&fit=crop',
  },
];

// =============================================================================
// FAQ DATA
// =============================================================================

export const FAQ_DATA = [
  {
    question: 'How long does a grooming session take?',
    answer: 'For a standard small to medium dog, expect 1.5-2.5 hours. We take our time to ensure a stress-free experience. Larger dogs or dogs with extensive matting may take 2.5-3.5 hours.',
  },
  {
    question: 'How do I book an appointment?',
    answer: `You can call or text us at ${BUSINESS.contact.phone} to schedule your appointment. We recommend booking 1-2 weeks in advance, especially for weekend appointments.`,
  },
  {
    question: "What should I bring to my dog's appointment?",
    answer: "Just bring your pup! If your dog has any special products they need or a favorite treat, feel free to bring those along. We provide everything else needed for a great grooming experience.",
  },
];

// =============================================================================
// GALLERY IMAGES
// =============================================================================

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=600&auto=format&fit=crop',
];

// =============================================================================
// META / SEO
// =============================================================================

export const META = {
  title: `${BUSINESS.name.full} | Professional Dog Grooming`,
  description: `Professional dog grooming services in ${BUSINESS.contact.city}, ${BUSINESS.contact.province}. Providing quality grooming with care and a calming spa atmosphere.`,
};
