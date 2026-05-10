"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
      isScrolled ? "bg-[#070B14]/80 backdrop-blur-xl border-white/5 py-4" : "bg-transparent border-transparent py-8"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
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

        <div className="flex items-center gap-4 lg:gap-8">
          <Link href="https://play.google.com/store/apps/details?id=com.satyainfotechnetworks.rewardverse">
            <div className="relative h-12 w-40 hover:scale-105 transition-transform">
              <Image 
                src="/get_playstore.png" 
                alt="Get it on Play Store" 
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
