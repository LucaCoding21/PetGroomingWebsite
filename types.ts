import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  priceStart: string;
  features: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  petName: string;
  petType: string;
  review: string;
  rating: number;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}