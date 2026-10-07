import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | ISHWAT Technologies',
  description: 'We offer Web Development, E-Commerce Development, Mobile Applications, UI/UX Design, Backend Development, and custom software solutions.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
