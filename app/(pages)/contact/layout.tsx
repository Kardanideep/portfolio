import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | ISHWAT Technologies',
  description: 'Get in touch with ISHWAT Technologies for your digital project. Let\'s discuss your web, mobile, or custom software requirements.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
