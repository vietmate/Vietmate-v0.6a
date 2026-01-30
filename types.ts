export interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  text: string;
  initials: string;
}

export type SectionId = 'hero' | 'regions' | 'about' | 'stories' | 'contact';