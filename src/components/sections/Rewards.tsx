"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const rewards = [
  { 
    name: "Amazon Pay", 
    icon: "/Amazon_(company)-Logo.wine.svg",
    color: "bg-white/[0.03]"
  },
  { 
    name: "Google Play", 
    icon: "/Google_Play-Logo.wine.svg",
    color: "bg-white/[0.03]"
  },
  { 
    name: "UPI Transfer", 
    icon: "/Unified_Payments_Interface-Logo.wine.svg",
    color: "bg-white/[0.03]"
  },
];

export function Rewards() {
  return (
    <section id="rewards" className="py-32 bg-white/[0.01]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
            Instant <span className="text-gradient">Redemption</span>
          </h2>
          <p className="text-muted-foreground text-xl">
            Redeem your coins for real cash or gift cards. Most payouts are processed in under 5 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {rewards.map((reward, i) => (
            <motion.div
              key={reward.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-12 rounded-[3rem] border border-white/5 hover:border-primary/30 transition-all group text-center flex flex-col items-center justify-center min-h-[300px]"
            >
              <div className="relative w-48 h-24 mb-8 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={reward.icon}
                  alt={reward.name}
                  fill
                  className="object-contain transition-all"
                />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white/90">{reward.name}</h3>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-muted-foreground font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Join 50k+ users redeeming rewards daily
          </div>
        </div>
      </div>
    </section>
  );
}
