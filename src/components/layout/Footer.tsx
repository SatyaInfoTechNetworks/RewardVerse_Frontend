"use client";

import Link from "next/link";
import Image from "next/image";
import { Rocket, Globe, Mail, MessageCircle } from "lucide-react";

const footerLinks = {
  platform: [
    { name: "About Us", href: "/about" },
    { name: "Features", href: "#features" },
    { name: "Rewards", href: "#rewards" },
    { name: "Play Store", href: "https://play.google.com/store/apps/details?id=com.satyainfotechnetworks.rewardverse" },
  ],
  support: [
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy-policy" },
    { name: "Terms", href: "/terms" },
  ],
};

const socials = [
  { name: "Website", icon: Globe, href: "https://satyainfotechnetworks.com/" },
  { name: "Email", icon: Mail, href: "mailto:support@satyainfotechnetworks.com" },
  { name: "Telegram", icon: MessageCircle, href: "https://t.me/rewardverse" },
];

export function Footer() {
  return (
    <footer className="py-24 border-t border-white/5 bg-[#070B14] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="relative w-10 h-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Image 
                  src="/logo.png" 
                  alt="RewardVerse Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter font-heading">
                Reward<span className="text-primary">Verse</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-4 font-medium">
              India's premium Android rewards and engagement platform by Satya InfoTech Networks. Earn daily, redeem instantly.
            </p>
            <p className="text-primary text-sm font-bold mb-8">
              support@satyainfotechnetworks.com
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <Link 
                  key={social.name} 
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white font-bold mb-6 font-heading">Platform</h4>
              <ul className="space-y-4">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 font-heading">Support</h4>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 font-heading">Legal</h4>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-muted-foreground text-sm">
            <p className="mb-2">© {new Date().getFullYear()} RewardVerse. All rights reserved.</p>
            <p>Developed by <span className="text-white font-medium">Satya InfoTech Networks</span></p>
          </div>
          <p className="text-[10px] text-muted-foreground max-w-md text-center md:text-right leading-relaxed">
            Disclaimer: RewardVerse is a rewards and engagement platform. Rewards are subject to task completion, verification, and platform policies. Earnings and bonuses may vary depending on user activity and offer eligibility.
          </p>
        </div>
      </div>
    </footer>
  );
}
