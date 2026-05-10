"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Share2, TrendingUp, DollarSign } from "lucide-react";
import Link from "next/link";

export function Referral() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="glass rounded-[3rem] border border-white/5 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="flex flex-col lg:flex-row items-center gap-16 p-8 md:p-16">
            {/* Left Content - Illustration Placeholder */}
            <div className="flex-1 relative order-2 lg:order-1">
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="glass p-6 rounded-3xl border border-white/10"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="text-2xl font-bold mb-1">100+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Referrals</div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="glass p-6 rounded-3xl border border-white/10"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="text-2xl font-bold mb-1">₹5,000+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Earned</div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="glass p-6 rounded-3xl border border-white/10 col-span-2"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-bold">Recent Earnings</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Just now</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary"></div>
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-primary"></div>
                    </div>
                    <span className="font-bold text-sm text-primary">+500</span>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] rounded-full -z-10"></div>
            </div>

            {/* Right Content */}
            <div className="flex-1 order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Invite Friends & <br />
                <span className="text-gradient">Earn Lifetime Commissions</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sharing is earning! Get your friends on board and earn a 10% commission on every task they complete, forever. Plus, they get a sign-up bonus too!
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "10% Lifetime Task Commission",
                  "Instant 500 Coins Sign-up Bonus for Friends",
                  "No Limit on Number of Referrals",
                  "Special Referral Contests & Bonuses"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Share2 className="w-3 h-3 text-primary" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/register">
                <Button size="lg" className="h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 font-bold text-lg">
                  Get Your Referral Link
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
