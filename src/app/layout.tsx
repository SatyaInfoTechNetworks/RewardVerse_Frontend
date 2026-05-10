import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rewardverse.in"),
  title: {
    default: "RewardVerse – Android Rewards App for Surveys & Gift Cards",
    template: "%s | RewardVerse"
  },
  description: "RewardVerse by Satya InfoTech Networks is a premium Android reward earning app where users earn coins through surveys, offers, and referrals, then redeem gift cards and rewards instantly.",
  keywords: [
    "reward earning app", "android rewards app", "earn rewards online", 
    "gift card rewards app", "survey rewards app", "daily rewards app", 
    "earn coins app", "reward app india", "best survey rewards app"
  ],
  authors: [{ name: "RewardVerse Team" }],
  creator: "RewardVerse",
  publisher: "RewardVerse",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "RewardVerse – Earn Rewards, Gift Cards & Daily Bonuses",
    description: "The ultimate Android rewards universe. Complete simple tasks and redeem your earnings instantly.",
    url: "https://rewardverse.in",
    siteName: "RewardVerse",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RewardVerse - Earn Rewards on Android",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RewardVerse – Earn Rewards on Android",
    description: "Join 50,000+ users earning daily rewards through surveys and offers.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { JsonLd } from "@/components/layout/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark scroll-smooth"
    >
      <body className={`${inter.variable} ${sora.variable} min-h-screen bg-[#070B14] text-white selection:bg-primary/30 antialiased font-sans`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
