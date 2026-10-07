import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries We Serve | ISHWAT Technologies',
  description: 'Explore the industries we serve. From E-Commerce to Healthcare and Professional Services, we build solutions for varied business needs.',
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
