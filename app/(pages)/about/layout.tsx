import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | ISHWAT Technologies',
  description: 'Learn more about ISHWAT Technologies, our story, values, and how we help businesses grow with custom digital solutions.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
