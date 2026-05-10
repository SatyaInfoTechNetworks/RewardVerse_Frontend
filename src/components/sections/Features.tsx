"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ClipboardList, 
  Smartphone, 
  Users, 
  Zap, 
  Gift,
  LayoutGrid
} from "lucide-react";

const features = [
  {
    title: "Premium Reward Surveys",
    description: "Share your opinion and earn reward coins with top-tier research providers.",
    icon: ClipboardList,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "App Discovery",
    description: "Discover the latest apps and games to earn bonuses effortlessly.",
    icon: Smartphone,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10"
  },
  {
    title: "Referral Network",
    description: "Invite friends and earn lifetime commission on their engagement.",
    icon: Users,
    color: "text-pink-500",
    bg: "bg-pink-500/10"
  },
  {
    title: "Instant Redemption",
    description: "Redeem your coins for rewards and get processed in under 5 minutes.",
    icon: Zap,
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    title: "Daily Bonus",
    description: "Login every day to maintain your streak and claim free bonus coins.",
    icon: LayoutGrid,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Gift Cards",
    description: "Redeem for Amazon, Google Play, and other popular gift cards.",
    icon: Gift,
    color: "text-green-500",
    bg: "bg-green-500/10"
  }
];

export function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
            Earning Made <span className="text-gradient">Simple</span>
          </h2>
          <p className="text-muted-foreground text-xl">
            Everything you need to maximize your daily earnings, all in one premium app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
