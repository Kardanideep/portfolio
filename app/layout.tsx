import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deepkardani.vercel.app"),

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
    "Web Developer India",
  ],

  openGraph: {
    title: "Deep Kardani | Web Developer for Businesses",

    description:
      "Modern business websites, e-commerce platforms, mobile apps, and custom web applications built for real business needs.",

    url: "https://deepkardani.vercel.app",

    siteName: "Deep Kardani",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deep Kardani - Web & App Development",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Deep Kardani | Web Developer for Businesses",

    description:
      "Modern websites, e-commerce, mobile apps, and custom web applications for businesses.",

    images: ["/og-image.png"],
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