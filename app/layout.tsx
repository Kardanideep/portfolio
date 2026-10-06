import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import meta from "./data/meta.json";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const { seo } = meta;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  openGraph: {
    title: seo.og.title,
    description: seo.og.description,
    url: seo.siteUrl,
    siteName: seo.og.siteName,
    images: [
      {
        url: seo.og.image,
        width: seo.og.imageWidth,
        height: seo.og.imageHeight,
        alt: seo.og.imageAlt,
      },
    ],
    locale: seo.og.locale,
    type: seo.og.type as "website",
  },
  twitter: {
    card: seo.twitter.card as "summary",
    title: seo.twitter.title,
    description: seo.twitter.description,
    images: [seo.twitter.image],
  },
  robots: {
    index: seo.robots.index,
    follow: seo.robots.follow,
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