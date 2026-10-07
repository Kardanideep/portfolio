import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work | ISHWAT Technologies',
  description: 'Explore our portfolio of recent projects, including business platforms, e-commerce stores, content platforms, and custom applications.',
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
