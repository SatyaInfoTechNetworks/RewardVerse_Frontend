"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const screens = [
  {
    title: "Dashboard",
    description: "Track your earnings and coins in real-time.",
    color: "bg-purple-500",
    image: "Home Screen"
  },
  {
    title: "Tasks",
    description: "Browse high-paying surveys and app offers.",
    color: "bg-cyan-500",
    image: "Offers Screen"
  },
  {
    title: "Redeem",
    description: "Instant withdrawals to Paytm, UPI & more.",
    color: "bg-pink-500",
    image: "Wallet Screen"
  },
  {
    title: "Refer",
    description: "Invite friends and earn lifetime commissions.",
    color: "bg-orange-500",
    image: "Referral Screen"
  }
];

export function AppScreenshots() {
  return (
    <section id="app-preview" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
            Inside <span className="text-gradient">RewardVerse</span>
          </h2>
          <p className="text-muted-foreground text-xl">
            A premium, intuitive interface designed for the best earning experience on Android.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[9/16] mb-8 rounded-[2.5rem] border-8 border-[#1E293B] bg-[#0F172A] overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                <div className={cn("absolute inset-0 opacity-10", screen.color)} />
                <div className="absolute inset-0 flex items-center justify-center text-white/10 font-black text-2xl rotate-12">
                  {screen.image}
                </div>
                {/* Mock UI Elements */}
                <div className="absolute top-8 left-6 right-6 h-4 bg-white/5 rounded-full" />
                <div className="absolute top-16 left-6 w-24 h-8 bg-white/10 rounded-xl" />
                <div className="absolute bottom-8 left-6 right-6 h-32 bg-white/5 rounded-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2 font-heading">{screen.title}</h3>
              <p className="text-muted-foreground">{screen.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
