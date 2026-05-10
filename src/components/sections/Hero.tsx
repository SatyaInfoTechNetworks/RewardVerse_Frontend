"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Star, 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  TrendingUp,
  Wallet,
  Gift
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const trustBadges = [
  { icon: ShieldCheck, text: "Secure Platform" },
  { icon: Zap, text: "Instant Rewards" },
  { icon: TrendingUp, text: "High Payouts" },
  { icon: Smartphone, text: "Android Optimized" },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      <div className="bg-mesh" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-bold text-white/90 tracking-wide">
                Trusted by 50,000+ Android Users
              </span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.1] font-heading">
              <span className="text-gradient text-6xl lg:text-7xl">Earn Rewards</span> <br />
              Directly From <br />
              Your Android Phone
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-lg leading-relaxed">
              Complete simple surveys, install apps, and finish daily tasks to earn coins. Join India's fastest growing rewards community today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
              <Link href="https://play.google.com/store/apps/details?id=com.satyainfotechnetworks.rewardverse" className="w-full sm:w-auto">
                <div className="relative h-20 w-64 hover:scale-105 transition-transform">
                  <Image 
                    src="/get_playstore.png" 
                    alt="Get it on Play Store" 
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <Link href="https://t.me/rewardverse" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-20 px-10 text-xl font-bold border-white/10 hover:bg-white/5 rounded-2xl">
                  Join Telegram
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/5">
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-3 text-white/60">
                  <badge.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Android Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Main Phone Frame */}
            <div className="relative w-[320px] h-[640px] bg-[#0F172A] rounded-[3.5rem] border-[12px] border-[#1E293B] shadow-[0_0_100px_-20px_rgba(139,92,246,0.3)] overflow-hidden">
              {/* App UI Simulation */}
              <div className="h-full w-full bg-[#070B14] p-6 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Balance</div>
                    <div className="text-2xl font-black text-white">4,850 <span className="text-primary text-sm">Coins</span></div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col items-center">
                    <Wallet className="w-6 h-6 text-cyan-400 mb-2" />
                    <div className="text-[10px] font-bold">Redeem</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col items-center">
                    <Gift className="w-6 h-6 text-pink-500 mb-2" />
                    <div className="text-[10px] font-bold">Bonus</div>
                  </div>
                </div>

                {/* Daily Streak */}
                <div className="bg-primary/10 border border-primary/20 p-4 rounded-2xl mb-8">
                  <div className="text-[10px] text-primary font-bold uppercase mb-2">Daily Streak</div>
                  <div className="flex justify-between gap-1">
                    {[1,2,3,4,5].map(d => (
                      <div key={d} className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold", d <= 3 ? "bg-primary text-white" : "bg-white/5 text-white/30")}>
                        {d}d
                      </div>
                    ))}
                  </div>
                </div>

                {/* Active Task */}
                <div className="flex-1">
                  <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-4">Trending Task</div>
                  <div className="glass p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Survey: Consumer Apps</div>
                      <div className="text-[10px] text-primary font-bold">+250 Coins</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Screen Glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none" />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass p-4 rounded-2xl border border-white/10 glow-purple z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Wallet className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <div className="text-[10px] font-bold">Payout Success</div>
                  <div className="text-xs font-black">₹500 Paytm</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -left-16 glass p-4 rounded-2xl border border-white/10 glow-pink z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center">
                  <Gift className="w-4 h-4 text-pink-500" />
                </div>
                <div>
                  <div className="text-[10px] font-bold">Referral Bonus</div>
                  <div className="text-xs font-black">+1000 Coins</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
