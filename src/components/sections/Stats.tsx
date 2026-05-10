"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Wallet, CheckCircle, Star } from "lucide-react";

const stats = [
  { 
    label: "Early Users", 
    value: "1,000+", 
    icon: Download,
    description: "Android Community" 
  },
  { 
    label: "Rewards Paid", 
    value: "₹10K+", 
    icon: Wallet,
    description: "Redeemed by Users" 
  },
  { 
    label: "Tasks Done", 
    value: "5K+", 
    icon: CheckCircle,
    description: "Daily Activities" 
  },
  { 
    label: "User Rating", 
    value: "4.9", 
    icon: Star,
    description: "Community Rating" 
  },
];

export function Stats() {
  return (
    <section className="py-24 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl lg:text-5xl font-black font-heading mb-2 text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-1">
                  {stat.label}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
