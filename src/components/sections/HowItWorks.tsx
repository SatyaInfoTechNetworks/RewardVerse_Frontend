"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, ClipboardList, Wallet } from "lucide-react";

const steps = [
  {
    title: "Download App",
    description: "Install the RewardVerse APK from our website and create your free account.",
    icon: Download,
  },
  {
    title: "Complete Tasks",
    description: "Browse surveys, apps, and offers. Every completion adds coins to your wallet.",
    icon: ClipboardList,
  },
  {
    title: "Redeem Cash",
    description: "Convert your coins into real cash or gift cards. Get paid instantly.",
    icon: Wallet,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
            Get Started in <span className="text-primary">Minutes</span>
          </h2>
          <p className="text-muted-foreground text-xl">
            Start your earning journey on Android with three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/5 -z-10"></div>
          
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-24 h-24 bg-secondary rounded-[2.5rem] border border-white/5 flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500 relative">
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg">
                  {i + 1}
                </div>
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
