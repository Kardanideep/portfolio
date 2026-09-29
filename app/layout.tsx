
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Deep Kardani | Web Developer for Businesses",
  description:
    "Deep Kardani builds modern business websites, e-commerce platforms, mobile apps, and custom web applications for businesses and growing companies.",

  keywords: [
    "Web Developer",
    "Web Development",
    "Business Website Development",
    "E-Commerce Development",
    "Custom Web Development",
    "Web Application Development",
    "Mobile App Development",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Development Ahmedabad",
    "Web Developer India"
  ],

  // Add your real domain when finalized
  // metadataBase: new URL("https://yourdomain.com"),

  openGraph: {
    title: "Deep Kardani | Web Developer for Businesses",
    description:
      "Modern business websites, e-commerce platforms, mobile apps, and custom web applications built for real business needs.",
    type: "website",
    locale: "en_IN",
    siteName: "Deep Kardani",
  },

  twitter: {
    card: "summary_large_image",
    title: "Deep Kardani | Web Developer for Businesses",
    description:
      "Modern websites, e-commerce, mobile apps, and custom web applications for businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}

