"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Users } from "lucide-react";
import Link from "next/link";

export function CTABanner() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass p-12 lg:p-24 rounded-[4rem] border border-white/10 overflow-hidden text-center"
        >
          {/* Glowing Backgrounds */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-pink-accent/10 -z-10"></div>
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-pink-accent/20 blur-[120px] rounded-full"></div>

          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-5xl lg:text-7xl font-black mb-8 font-heading leading-tight tracking-tighter">
              Start Earning <br />
              <span className="text-gradient">Today</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 leading-relaxed max-w-xl mx-auto">
              Join 50,000+ Android users who are already earning daily rewards. Download the APK and start your journey now.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="https://play.google.com/store/apps/details?id=com.satyainfotechnetworks.rewardverse" className="w-full sm:w-auto">
                <div className="relative h-24 w-72 hover:scale-105 transition-transform">
                  <Image 
                    src="/get_playstore.png" 
                    alt="Get it on Play Store" 
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <Link href="https://t.me/rewardverse" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-24 px-12 text-2xl font-black border-white/10 hover:bg-white/5 rounded-2xl group">
                  <Users className="mr-3 w-8 h-8 group-hover:scale-110 transition-transform" />
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
